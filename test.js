/*!
 * global-modules <https://github.com/jonschlinkert/global-modules>
 *
 * Copyright (c) 2015-2017 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var gm = require('./');

describe('global-modules', function() {
  it('should resolve the path to the global npm modules directory:', function() {
    assert(fs.existsSync(gm));
  });
});
