# MERN_practice
------------

## Overview

This is a practice repository to helm me learn and practice working with a MERN stack.
It will be a front and back end application that will be a simple todo list.

## Installation

* First you must create a mlab db https://mlab.com/
* Create a config/db in the server file
```
$ touch server/config/db.js
```
* Add your mongo details
```
// config/db.js
module.exports = {
  url: 'mongodb://#Username#:#Password#@ds#NUMHERE#.mlab.com:#NUMHERE#/mern_practice'
};

```

* You must go into the server file and yarn install then yarn run
```
$ cd server
$ yarn install
$ yarn start
```
* Then you must go into the client folder
```
$ cd ..
$ cd client
$ yarn install
$ yarn start
```
