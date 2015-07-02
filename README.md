icons
=====

Repository for source SVG icons and a Gulp script to generate a single `icons.svg` file.

SVGs are individually made as 48x48. Guidelines:
- Do not use strokes, only fills
- Outline all text
- Use black as fill color unless the icon should default to another color for whatever reason. If an icon might exist in Streetmix as different colored versions (see the asphalt icon for example) we can use the css `fill` property to re-use a single icon with different colors.
- Overlapping shapes should be avoided because the SVG composer will simplify the paths and make voids if that happen. In your SVG editor be sure to union/subtract the paths whenever possible. (**TODO:** verify if this is still the case, since switching to a new SVG sprite generator)
- Clip paths break in Internet Explorer. This is [a known bug](https://connect.microsoft.com/IE/feedback/details/734107/svg-elements-under-clip-path-fail-to-show-until-refresh) with no apparent fix in sight. To work around this, crop and subtract paths instead of clipping them.


All the current SVGs are exported from Affinity Designer.

More info on SVG icons: http://css-tricks.com/svg-symbol-good-choice-icons/

To generate a single icon file, install Gulp and the modules from this repository with `npm install`, and at the command line type `gulp` to automatically run the generator script. The generated `icons.svg` should then be copied to the Streetmix repository.
