# Twinnims

The repository contains the [Hugo](https://gohugo.io)-made website.

- the whole current website of [twinnims.eu](https://www.twinnims.eu) at `/public`, 
- all the content (`/content`), 
- static assets (`/static`/, `/themes/twinnims/static`),
- translations (`/themes/twinnims/i18n`)
- and the *Twinnims Hugo Theme* at `/themes/twinnims`.

## Deployment

To serve the website you need to copy `/public` to your webserver document root folder:

```
rsync -avz public/ twinnims@twinnims.eu:~/public_html/
```

## Getting Started

To add new pages, news articles or any other piece of content you need:

- to [install Hugo](https://gohugo.io/getting-started/installing/) on your computer, here is the list of pre-built binaries: https://github.com/gohugoio/hugo/releases — choose the one for your OS
- to copy the repository onto your local machine `git clone https://iharsuvorau@bitbucket.org/iharsuvorau/twinnims.git`
- `cd twinnims`
- run `hugo new news/my-news.md` to create a news article
- edit the file and set `draft: false` in the frontmatter when finished
- run `hugo` to generate the site which is saved in the `/public` 

To create a page in French run `hugo new pages/mypage.fr.md`, in Italian: `hugo new pages/mypage.it.md`.
