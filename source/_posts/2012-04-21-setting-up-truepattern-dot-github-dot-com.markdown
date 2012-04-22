---
layout: post
title: "Setting up this blog"
date: 2012-04-21 18:20
comments: true
categories:
- octopress
- blog
- setup
---

## Install octopress
1. Please follow the instructions as documented [here](http://octopress.org/docs/deploying/github).
2. execute the following commands
```
$ rake setup_github_pages
Enter the read/write url for your repository: git@github.com:<your-id>/<git-path>
```
* Also you can find very good documentation [here](http://code.dblock.org/octopress-setting-up-a-blog-and-contributing-to-an-existing-one)

## Checkin the sources
BTW, dont forget to add the sources to a separate branch 'sources'
```
git add .
git commit -m 'blog sources'
git push origin source
```

## Updating blog
```
rake generate
rake preview
rake deploy
```
