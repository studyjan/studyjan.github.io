#!/bin/bash

mkdir export

for filename in ./banner*.html; do
    echo "$filename:"
    basename="${filename%.html}"
    mkdir "$basename"
    cp $filename $basename/index.html
    cp "style.css" $basename
    cp index.js $basename

    for font in ./subset*; do
        cp $font $basename
    done

    for img in ./*.png; do
        cp $img $basename
    done

    size_part="${basename#*_}"
    size_part="${size_part#*_}"
    size="${size_part%%_*}"

    width="${size%x*}"
    height="${size#*x}"

    echo "FT.manifest({
    \"filename\": \"index.html\",
    \"width\": $width,
    \"height\": $height,
    \"clickTagCount\": 1
});" > $basename/manifest.js

    zip -r $basename.zip $basename > /dev/null
    rm -rf $basename
    cp $basename.zip export
    rm $basename.zip
done

zip -r export.zip export > /dev/null
rm -rf export

