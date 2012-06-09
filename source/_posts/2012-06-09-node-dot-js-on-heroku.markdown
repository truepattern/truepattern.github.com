---
layout: post
title: "node.js on heroku"
date: 2012-06-09 02:04
comments: true
categories:
- nodejs
- heroku
- todo-app
- deployment
---
In order to showcase node.js app to external world, the simplest way is to embrace heroku. Following are the simple steps to deploy our [Todo App](http://truepattern.com/blog/2012/06/05/todo-application) done before.

## Deploy a node.js app to heroku
Refer to the following links that I found very useful

  * [heroku cedar page](https://devcenter.heroku.com/articles/nodejs)
  * [running own node.js version](http://blog.superpat.com/2011/11/15/running-your-own-node-js-version-on-heroku/)

<!-- more -->

### Key generation
First thing is to register with heroku and generate ssh keys for your e-mail id that you registered with heroku
```
ssh-keygen -t rsa -C "your-email-id-here"
heroku keys:add
```

### Create app on heroku
Following steps would create the app on heroku and set the node.js to 0.6.x
```
# create the app
heroku create --stack cedar aonx-todo

# set node.js build to 0.6.x
heroku config:add BUILDPACK_URL=http://github.com/liquid/heroku-buildpack-nodejs.git
# set to production
heroku config:add NODE_ENV=production
# get a free mongodb addon
heroku addons:add mongohq:free

# deploy to production
git push heroku master

# important, dont forget this
heroku ps:scale web=1

```

### run server
Actually its already running, on any changes just do the following
```
git push heroku master
```

 * You can [click here to see the todo app running](http://aonx-todo.herokuapp.com)


