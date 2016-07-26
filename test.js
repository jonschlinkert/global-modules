/*!
 * global-modules <https://github.com/jonschlinkert/global-modules>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var exists = require('fs-exists-sync');
var mods = require('./');

describe('mods', function() {
  it('should resolve the path to the global npm modules directory:', function() {
    assert(exists(mods));
  });
});
