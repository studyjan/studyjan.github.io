#!/bin/bash
#
# Zabalí každý banner do vlastního .zip pro Sklik/Seznam.
# Ke každému banneru přibalí POUZE obrázky, které daný banner používá
# (podle jeho velikosti a varianty), plus sdílený style.css a manifest.js.
#
set -euo pipefail

cd "$(dirname "$0")"

# Kontrola nástrojů pro optimalizaci obrázků
for tool in pngquant oxipng; do
    command -v "$tool" >/dev/null || { echo "Chybí '$tool' (brew install pngquant oxipng)"; exit 1; }
done

# Zkopíruje PNG do balíčku a zoptimalizuje ho:
#   pngquant = ztrátová paletová komprese; když by spadla pod práh kvality,
#              vrátí chybu -> použijeme nezměněný originál,
#   oxipng   = bezztrátová rekomprese (vždy, ať na výstupu pngquantu nebo originálu).
optimize_png() {
    local src="$1" dst="$2"
    if ! pngquant --quality=65-90 --strip --force --output "$dst" "$src" 2>/dev/null; then
        cp "$src" "$dst"
    fi
    oxipng -o max --strip safe -q "$dst" 2>/dev/null || true
}

rm -rf export
mkdir -p export

for filename in ./banner-*.html; do
    basename="$(basename "${filename%.html}")"
    echo "==> $basename"

    # název: banner-<size>-<variant>  (např. banner-300x250-emental)
    rest="${basename#banner-}"      # <size>-<variant>
    size="${rest%-*}"               # <size>      -> 300x250
    variant="${rest##*-}"           # <variant>   -> emental
    width="${size%x*}"              # 300
    height="${size#*x}"             # 250

    pkgdir="$basename"
    rm -rf "$pkgdir"
    mkdir -p "$pkgdir"

    # HTML jako index.html
    cp "$filename" "$pkgdir/index.html"

    # CSS ořezané jen na pravidla, která tenhle banner používá:
    # purgecss projde HTML a nechá jen selektory (.size…, .<varianta>, .<trida>),
    # jejichž třídy/id v HTML reálně jsou; --keyframes navíc zahodí nepoužité animace.
    npx purgecss --css style.css --content "$filename" --keyframes --output "$pkgdir/"

    # Obrázky jdou naplocho do rootu balíčku (vedle index.html) -> v CSS srovnáme cesty
    # './assets/<size>/foo.png' na './foo.png'.
    sed -i '' "s#assets/$size/##g" "$pkgdir/style.css"

    # Zjisti, jaké .bg-image třídy banner používá, a zkopíruj jen odpovídající obrázky.
    # Sdílené obrázky:        assets/<size>/<trida>.png
    # Variantní obrázky:      assets/<size>/<trida>-<variant>.png
    classes="$(grep -o 'bg-image [a-z0-9_-]*' "$filename" | sed 's/bg-image //' | sort -u)"
    for cls in $classes; do
        shared="assets/$size/$cls.png"
        variant_img="assets/$size/$cls-$variant.png"
        if [[ -f "$shared" ]]; then
            optimize_png "$shared" "$pkgdir/$cls.png"
            echo "    + $shared"
        elif [[ -f "$variant_img" ]]; then
            optimize_png "$variant_img" "$pkgdir/$cls-$variant.png"
            echo "    + $variant_img"
        else
            echo "    ! chybí obrázek pro třídu '$cls' (size $size, variant $variant)"
        fi
    done

    # manifest pro Sklik/Seznam
    cat > "$pkgdir/manifest.js" <<EOF
FT.manifest({
    "filename": "index.html",
    "width": $width,
    "height": $height,
    "clickTagCount": 1
});
EOF

    zip -rq "$basename.zip" "$pkgdir"
    rm -rf "$pkgdir"
    mv "$basename.zip" export/

    # Zip zase rozbal do exportu (vedle .zip) pro náhled obsahu.
    rm -rf "export/$basename"
    unzip -oq "export/$basename.zip" -d export/
done

# Rozcestník: index.html s abecedně seřazenými odkazy na všechny balíčky.
{
    cat <<'EOF'
<!DOCTYPE html>
<html lang="cs">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>vesela krava – bannery ke stažení</title>
    <style>
        body { font-family: system-ui, sans-serif; max-width: 40rem; margin: 2rem auto; padding: 0 1rem; }
        h1 { font-size: 1.4rem; }
        ul { list-style: none; padding: 0; }
        li { margin: .25rem 0; }
        a { text-decoration: none; color: #06c; }
        a:hover { text-decoration: underline; }
        a.preview { text-decoration: none; margin-left: .4rem; }
    </style>
</head>

<body>
    <h1>vesela krava – bannery ke stažení</h1>
    <ul>
EOF
    for zipfile in $(ls export/*.zip 2>/dev/null | xargs -n1 basename | sort); do
        name="${zipfile%.zip}"
        echo "        <li><a href=\"$zipfile\">$zipfile</a> <a href=\"$name/index.html\" class=\"preview\" title=\"Náhled\">🔍</a></li>"
    done
    cat <<'EOF'
    </ul>
</body>

</html>
EOF
} > export/index.html

echo
echo "Hotovo. Balíčky a rozcestník (index.html) najdeš v ./export/"
