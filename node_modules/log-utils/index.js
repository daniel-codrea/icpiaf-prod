/*!
 * log-utils <https://github.com/jonschlinkert/log-utils>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var readline = require('readline');
var utils = require('ansi-colors');
var fn = require;
require = utils;

/**
 * Utils
 */

require('error-symbol');
require('info-symbol');
require('success-symbol', 'check');
require('warning-symbol');
require('time-stamp');
require = fn;

/**
 * Expose `colors` and `symbols`
 */

utils.colors = require('ansi-colors');
utils.symbol = {};

/**
 * Error symbol.
 *
 * ```js
 * console.log(utils.symbol.error);
 * //=> ✖
 * ```
 * @name .symbol.error
 * @api public
 */

define(utils.symbol, 'error', function() {
  return utils.errorSymbol;
});

/**
 * Info symbol.
 *
 * ```js
 * console.log(utils.symbol.info);
 * //=> ℹ
 * ```
 * @name .symbol.info
 * @api public
 */

define(utils.symbol, 'info', function() {
  return utils.infoSymbol;
});

/**
 * Success symbol.
 *
 * ```js
 * console.log(utils.symbol.success);
 * //=> ✔
 * ```
 * @name .symbol.success
 * @api public
 */

define(utils.symbol, 'success', function() {
  return utils.check;
});

/**
 * Warning symbol.
 *
 * ```js
 * console.log(utils.symbol.warning);
 * //=> ⚠
 * ```
 * @name .symbol.warning
 * @api public
 */

define(utils.symbol, 'warning', function() {
  return utils.warningSymbol;
});

/**
 * Get a red error symbol.
 *
 * ```js
 * console.log(utils.error);
 * //=> ✖
 * ```
 * @name .error
 * @api public
 */

define(utils, 'error', function() {
  return utils.red(utils.symbol.error);
});

/**
 * Get a cyan info symbol.
 *
 * ```js
 * console.log(utils.info);
 * //=> ℹ
 * ```
 * @name .info
 * @api public
 */

define(utils, 'info', function() {
  return utils.cyan(utils.symbol.info);
});

/**
 * Get a green success symbol.
 *
 * ```js
 * console.log(utils.success);
 * //=> ✔
 * ```
 * @name .success
 * @api public
 */

define(utils, 'success', function() {
  return utils.green(utils.symbol.success);
});

/**
 * Get a yellow warning symbol.
 *
 * ```js
 * console.log(utils.warning);
 * //=> ⚠
 * ```
 * @name .warning
 * @api public
 */

define(utils, 'warning', function() {
  return utils.yellow(utils.symbol.warning);
});

/**
 * Get a formatted timestamp.
 *
 * ```js
 * console.log(utils.timestamp);
 * //=> [15:27:46]
 * ```
 * @name .timestamp
 * @api public
 */

define(utils, 'timestamp', function() {
  return '[' + utils.gray(utils.timeStamp('HH:mm:ss')) + ']';
});

/**
 * Log a white success message prefixed by a green check.
 *
 * ```js
 * utils.ok('Alright!');
 * //=> '✔ Alright!'
 * ```
 * @name .ok
 * @api public
 */

utils.ok = function() {
  console.log.bind(console, utils.success).apply(console, arguments);
};

/**
 * Start a basic terminal spinner. Currently this only allows for one
 * spinner at a time, but there are plans to allow multiple named spinners.
 *
 * ```js
 * utils.spinner('downloading...');
 * ```
 * @name .spinner
 * @api public
 */

utils.spinner = spinner;

function spinner(name, msg, options) {
  options = options || {};
  var interval = options.hasOwnProperty('interval') ? options.interval : 150;
  var chars = options.spinner || ['|', '/', '-', '\\', '-'];
  var len = chars.length;
  var idx = 0;

  spinner.timer = setInterval(function() {
    readline.clearLine();
    readline.cursorTo(1);
    process.stdout.write('\u001b[0G ' + chars[idx++ % len] + ' ' + msg);
  }, interval);
};

/**
 * Stop a spinner.
 *
 * ```js
 * utils.spinner.stop('finished downloading');
 * ```
 * @name .spinner.stop
 * @api public
 */

spinner.stop = function stopSpinner(msg) {
  readline.clearLine();
  readline.cursorTo(1);
  process.stdout.write('\u001b[2K' + msg);
  clearInterval(spinner.timer);
};

/**
 * Start a timer with a spinner. Requires an instance of [time-diff][] as
 * the first argument.
 *
 * ```js
 * var Time = require('time-diff');
 * var time = new Time();
 * utils.spinner.startTimer(time, 'foo', 'downloading');
 * ```
 * @name .spinner.startTimer
 * @api public
 */

spinner.startTimer = function start(time, name, msg, options) {
  options = options || {};
  if (options.verbose !== false) {
    time.start(name);
    spinner(msg, options);
  }
};

/**
 * Stop a spinner-timer.
 *
 * ```js
 * utils.spinner.stopTimer(time, 'foo', 'finished downloading');
 * ```
 * @name .spinner.stopTimer
 * @api public
 */

spinner.stopTimer = function stop(time, name, msg, options) {
  options = options || {};
  if (options.verbose !== false) {
    var ts = utils.colors.magenta('+' + time.end(name));
    spinner.stop(' ' + utils.success + ' ' + msg + ' ' + ts + '\n');
  }
};

function define(obj, prop, fn) {
  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    get: fn
  });
}

/**
 * Expose `utils`
 */

module.exports = utils;

