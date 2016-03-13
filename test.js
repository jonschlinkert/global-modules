/*!
 * global-modules <https://github.com/jonschlinkert/global-modules>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var assert = require('assert');
var mods = require('./');

describe('mods', function() {
  it('should resolve the path to the global npm modules directory:', function() {
    assert(fs.existsSync(mods) === true);
  });
});
