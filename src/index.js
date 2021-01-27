const color = require('chalk');
const emoji = require('node-emoji');

function pimpMyRoutes(req, res, next) {
  const ghost = color.bgMagenta.white(emoji.get('ghost'));
  const sweatSmile = emoji.get('sweat_smile');

  try {
    if (req.method === 'GET') {
      console.log(
        color.bgMagenta.black.bold.underline(
          req.method,
          `REQUEST TO ${color.inverse(`  ${req.path}`)}`
        )
      );
      console.log(color.bgMagenta.black.bold.italic.inverse('Request Body:'));
      console.log(color.bgMagenta.black.bold(JSON.stringify(req.params)));
      console.log(
        color.bgMagenta.black.bold.italic.inverse(
          `Response Status Code:${color.bgMagenta.black.bold(
            JSON.stringify(res.statusCode)
          )}`
        )
      );
    }

    if (req.method === 'POST') {
      console.log(
        color.bgGreen.black.bold.underline(
          req.method,
          `REQUEST TO ${color.inverse(`  ${req.path}`)}`
        )
      );
      console.log(color.bgGreen.black.bold.italic.inverse('Request Body:'));
      console.log(color.bgGreen.black.bold(JSON.stringify(req.body)));
      console.log(
        color.bgGreen.black.bold.italic(
          `Sometimes, the req.body may errouneously log as 'undefined', in which case, you may need to log it yourself ${sweatSmile}`
        )
      );
      // console.log(color.bgWhite.black(`REQ OBJECT: `));
      // console.log(req);
    }

    if (req.method === 'PUT') {
      console.log(
        color.bgYellow.black.bold.underline(
          req.method,
          `REQUEST TO ${color.inverse(`  ${req.path}`)}`
        )
      );
      console.log(color.bgYellow.black.bold.italic.inverse('Request Body:'));
      console.log(color.bgYellow.black.bold(JSON.stringify(req.body)));
    }

    if (req.method === 'PATCH') {
      console.log(
        color.bgYellowBright.black.bold.underline(
          req.method,
          `REQUEST TO ${color.inverse(`  ${req.path}`)}`
        )
      );
      console.log(
        color.bgYellowBright.black.bold.italic.inverse('Request Body:')
      );
      console.log(color.bgYellowBright.black.bold(JSON.stringify(req.body)));
    }

    if (req.method === 'DELETE') {
      console.log(
        color.bgRed.white.bold.underline(
          ghost,
          req.method,
          `REQUEST TO ${color.bgBlack.red(`  ${req.path}`)}`
        )
      );
      console.log(color.bgRed.black.bold.italic.inverse('Request Body:'));
      console.log(color.bgRed.white.bold(JSON.stringify(req.body)));
    }

    if (req.method === 'CONNECT') {
      console.log(
        color.bgBlue.white.bold.underline(
          req.method,
          `REQUEST TO ${color.inverse(`  ${req.path}`)}`
        )
      );
      console.log(color.bgBlue.white.bold.italic.inverse('Request Body:'));
      console.log(color.bgBlue.white.bold(JSON.stringify(req.body)));
    }
  } catch (error) {
    console.log('BOOOOOOOOO');
  }

  next();
}

module.exports = pimpMyRoutes;

/*
I would be nice to syntax highlight the req.params in the req.path log.
It would be even cooler if we could color code when the req.params doesn't
match a real path, specifying where in the uri the request failed.
*/
