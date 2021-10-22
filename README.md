# Pimp My Routes
Visualize Your Routes 
![pimpmyroutes](https://user-images.githubusercontent.com/64286678/138533187-4338dd28-a2bc-4fd2-a450-5410c5899e04.png)

An npm-extension that creates beautiful visualizations of your application routes. 

## Motivation
Debugging HTTP requests can become a monotonous task and distinguishing http requests types at a glance can sometimes be confusing if you are dealing with several requests in your applicaton. Pimp My Routes color codes HTTP requests based on their method types on your terminal and uses emojis if your terminal supports it. Debugging is fun again! 

## Technologies Used
Npm dependencies: Chalk, Node-Emoji <br/>
Node Express

## Find it at npmjs.com
https://www.npmjs.com/package/pimpinmyroutes

Instead of having to squint to be able to tell what type of http request is being made to your routes, you can now see each individual one in different colors!

With the help of modules like [chalk](https://www.npmjs.com/package/chalk), [node-emoji](https://www.npmjs.com/package/node-emoji) and the power of my own frustration, we can pimp our routes.


<br>**Installation**</br>\
To be able to use pimpinmyroutes, you need to have [node.js](https://nodejs.org/en/) and [npm ](https://github.com/npm/npm#super-easy-install) installed on your operating system.

Inside of your project's directory, enter the following commands.
```bash
npm install pimpinmyroutes
```
Or

```bash
npm install --save pimpinmyroutes
```


**To Use**
Import the module and then use it like any other [Node Express middleware](https://expressjs.com/en/guide/using-middleware.html).
```js
const express = require('express')
const app = express()

//====================[IMPORT]================\\
const pimpinmyroutes = require('pimpinmyroutes')


//======================[USE]==================\\
app.use(pimpinmyroutes)

````
