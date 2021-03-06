'use strict';

exports.__esModule = true;

var _ColorPropType = require('../ColorPropType');

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _TextStylePropTypes = require('../Text/TextStylePropTypes');

var _TextStylePropTypes2 = _interopRequireDefault(_TextStylePropTypes);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInputStylePropTypes = Object.assign({}, _TextStylePropTypes2.default, {
  /* @platform web */
  caretColor: _ColorPropType2.default,
  resize: (0, _propTypes.oneOf)(['none', 'vertical', 'horizontal', 'both'])
}); /**
     * Copyright (c) 2015-present, Nicolas Gallagher.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

exports.default = TextInputStylePropTypes;
module.exports = exports['default'];