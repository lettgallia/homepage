# Lettgallia.lv
V2 of the homepage

## Development

Static page generator [11ty](https://www.11ty.dev)

Setup:

```
npm install
npx @11ty/eleventy --serve
open http://localhost:8080/index.html
```

### Deployment:

Target [github pages](https://pages.github.com)

Steps:
 * `npx @11ty/eleventy`
 * `git add index.html`
 * `git commit -m 'New wersion with feature XYZ'`
 * `git push`
 * New version should be live in matter of minutes
