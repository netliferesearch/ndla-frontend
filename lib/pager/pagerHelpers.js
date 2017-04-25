"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getRange = getRange;
exports.stepNumbers = stepNumbers;
/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function getRange(current, last) {
  var r1 = current - 2;
  var r2 = current + 2;

  if (r1 < 1) {
    r2 -= r1 - 1;
  }

  if (r2 > last) {
    r1 -= r2 - last;
  }

  return [Math.max(r1, 1), Math.min(r2, last)];
}

function stepNumbers(currentStep, lastStep) {
  var _getRange = getRange(currentStep, lastStep),
      _getRange2 = _slicedToArray(_getRange, 2),
      llim = _getRange2[0],
      rlim = _getRange2[1];

  var offset = llim;
  var length = rlim - llim + 1;

  var indexToStep = function indexToStep(i) {
    return i + offset;
  };
  return Array(length).fill().map(function (_, i) {
    return indexToStep(i);
  });
}