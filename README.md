# Twinnims

The repository contains the [Hugo](https://gohugo.io)-made website.

- all the content (`/content`),
- static assets (`/static`/, `/themes/twinnims/static`),
- translations (`/themes/twinnims/i18n`)
- and the *Twinnims Hugo Theme* at `/themes/twinnims`.

## Deployment

To publish the website you need to generate HTML with all assets to `/public` folder and copy it to a webserver's document root folder. There is a tiny script for this ([Hugo](https://gohugo.io/getting-started/installing/) must be installed), run it:

```
./deploy.sh
```

## Getting Started

To add new pages, news articles or any other piece of content you need:

- to [install Hugo](https://gohugo.io/getting-started/installing/) on your computer, here is the list of pre-built binaries: https://github.com/gohugoio/hugo/releases — choose the one for your OS
- to copy the repository onto your local machine `git clone https://github.com/iharsuvorau/twinnims.git`
- `cd twinnims`
- run `hugo new news/my-news.md` to create a news article
- edit the file and set `draft: false` in the frontmatter when finished
- run `hugo` to generate the site which is saved in the `/public`

To create a page in French run `hugo new pages/mypage.fr.md`, in Italian: `hugo new pages/mypage.it.md`.
