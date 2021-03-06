/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

import { findDOMNode } from 'react-dom';

var findNodeHandle = function findNodeHandle(component) {
  var node = void 0;

  try {
    node = findDOMNode(component);
  } catch (e) {}

  return node;
};

export default findNodeHandle;