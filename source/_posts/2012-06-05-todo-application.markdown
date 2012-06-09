---
layout: post
title: "Todo Application"
date: 2012-06-05 01:01
comments: true
categories:
- nodejs
- REST
- server
- todo-app

---
## Lets say Hello, World to Node.js with a Todo app

### Goal
 * To run a Todo Application that can capture Todo's from user and save it on server (persist)

The application and requirements are well known, so no need to go over what todo is. If you need pointers, please refer to [this page](http://addyosmani.github.com/todomvc/).

### Deliverables
 * Todo Server running on Node.js, MongoDB exposing REST API
 * Todo MVC client on Backbone.js using REST to connect with server

<!-- more -->

## Todo Server
There are some cool frameworks for Node coming up every day and its a fast changing landscape. To keep things simple, we'll base our technologies on a robust ground with proven technologies like ExpressJS and MongooseJS.  I have written a wrapper over both of these proven technologies (common settings that would help you bootstrap your application quicker) in [aonx](http://github.com/truepattern/aonx).

### Directory structure
I prefer a very modular approach, where all the models, controllers and views are self contained within a directory (similar to django) and that way it could be potentially reused elsewhere. So we'll go with a structure

 * apps -- contains todo module
 * config -- config for todo server
 * public -- client side js, css, etc.,
 * test -- mocha tests
 * server.js  -- main server js file

### Todo App

{% include_code Todo model todo_model.js lang:javascript %}

as you can see, the model part is trivial, similarly aonx provides crudHelpers for mongoose, which make the controller a straight forward express-resource hookup as given below

{% include_code Todo controller todo_controller.js lang:javascript %}

please refer to express-resource module for the crud routing hookup. As a last step, we'll bind the controllers to the url of our choice (todos/*)

{% include_code REST url todo_url.js lang:javascript %}

### Testing
Now, the part where we want to make sure all the REST part is working fine. Similar to aonx, I have put together a mocha wrapper for crudTesting called [berry](http://github.com/truepattern/berry). Its like just give the url and a sample object, it would verify create, read, update and delete. The sample unit test code is as follows

{% include_code Unit Test todo_test.js lang:javascript %}

### Run the server
Now that you have made it so far, following are the instructions to run the todo server
```
# make sure node, npm, mongodb are installed
git clone https://github.com/truepattern/todo-server.git
cd todo-server
npm install -d

# lets run unit tests
make

# run the server
node server.js

# go to another terminal
curl localhost:8080/api/v1/todos
curl localhost:8080/api/v1/todos/new?content=hello
curl localhost:8080/api/v1/todos

```

## Todo Client
I have copied the todo mvc client (backbone.js based) from [here](http://addyosmani.github.com/todomvc/). Just one change, instead of localstorage, now the client points to the localhost server. You can see the client by going to browser localhost:8080/index.html

