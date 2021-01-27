# pimpmyroutes

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


**To Use**\
Import the module and then use it like any other [Node Express middleware](https://expressjs.com/en/guide/using-middleware.html).
```js
const express = require('express')
const app = express()

//====================[IMPORT]================\\
const pimpinmyroutes = require('pimpinmyroutes')


//======================[USE]==================\\
app.use(pimpinmyroutes)

````
