icons
=====

Icons for Streetmix segments. The `svg` folder contains source files in SVG.

## Working with icons

SVGs are individually made as 48x48. Guidelines:

- Do not use strokes, only fills
- Outline all text
- Use black as fill color unless the icon should default to another color for whatever reason. If an icon might exist in Streetmix as different colored versions (see the asphalt icon for example) we can use the css `fill` property to re-use a single icon with different colors.
- Clip paths break in Internet Explorer. This is [a known bug](https://connect.microsoft.com/IE/feedback/details/734107/svg-elements-under-clip-path-fail-to-show-until-refresh) with no apparent fix in sight. To work around this, crop and subtract paths instead of clipping them.

All the current SVGs are exported from Affinity Designer. They have a very easy to use exporter that doesn't insert a lot of the extra meta-gunk that Illustrator does.

More info on SVG icons: http://css-tricks.com/svg-symbol-good-choice-icons/

## Generating the final output

Install dependencies:

```
npm install
```

Create `icons.svg`

```
npm start
```

Send changes back upstream

```
git add --all
git commit --message 'feat: I updated an icon'
git push origin
```

When Streetmix is redeployed, it will retrieve the latest version of the icons from GitHub and incorporate it as a Node.js module. Icons *must* be build in the final `icons.svg` output for it to be used. Streetmix does not use the raw, source SVG files.
