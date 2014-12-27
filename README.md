icons
=====

Repository for source SVG icons and a Gulp script to generate a single `icons.svg` file.

SVGs are individually made as 48x48. Guidelines:
- Do not use strokes, only fills
- Outline all text
- Use black as fill color unless the icon should default to another color for whatever reason
- Overlapping shapes should be avoided because the SVG composer will simplify the paths and make voids if that happen. In your SVG editor be sure to union/subtract the paths whenever possible.

All the current SVGs are exported from Affinity Designer.

More info on SVG icons: http://css-tricks.com/svg-symbol-good-choice-icons/

To generate a single icon file, install Gulp and the modules from this repository with `npm install`, and at the command line type `gulp` to automatically run the generator script. The generated `icons.svg` should then be copied to the Streetmix repository.
