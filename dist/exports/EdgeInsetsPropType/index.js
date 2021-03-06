/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

import createStrictShapeTypeChecker from '../../modules/createStrictShapeTypeChecker';
import { number } from 'prop-types';

var EdgeInsetsPropType = createStrictShapeTypeChecker({
  top: number,
  left: number,
  bottom: number,
  right: number
});

export default EdgeInsetsPropType;