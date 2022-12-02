/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */

'use strict';

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// $FlowFixMe[untyped-import] there's no flowtype flow-parser
const flowParser = require('flow-parser');
const fs = require('fs');
const path = require('path');
const _require = require('./components'),
  buildComponentSchema = _require.buildComponentSchema;
const _require2 = require('./components/schema'),
  wrapComponentSchema = _require2.wrapComponentSchema;
const _require3 = require('./modules'),
  buildModuleSchema = _require3.buildModuleSchema;
const _require4 = require('./modules/schema'),
  wrapModuleSchema = _require4.wrapModuleSchema;
const _require5 = require('./utils'),
  createParserErrorCapturer = _require5.createParserErrorCapturer,
  visit = _require5.visit,
  isModuleRegistryCall = _require5.isModuleRegistryCall;
const invariant = require('invariant');
function getConfigType(
  // TODO(T71778680): Flow-type this node.
  ast,
) {
  let isComponent = false;
  let isModule = false;
  visit(ast, {
    CallExpression(node) {
      if (
        node.callee.type === 'Identifier' &&
        node.callee.name === 'codegenNativeComponent'
      ) {
        isComponent = true;
      }
      if (isModuleRegistryCall(node)) {
        isModule = true;
      }
    },
    InterfaceExtends(node) {
      if (node.id.name === 'TurboModule') {
        isModule = true;
      }
    },
  });
  if (isModule && isComponent) {
    throw new Error(
      'Found type extending "TurboModule" and exported "codegenNativeComponent" declaration in one file. Split them into separated files.',
    );
  }
  if (isModule) {
    return 'module';
  } else if (isComponent) {
    return 'component';
  } else {
    return 'none';
  }
}
function buildSchema(contents, filename) {
  // Early return for non-Spec JavaScript files
  if (
    !contents.includes('codegenNativeComponent') &&
    !contents.includes('TurboModule')
  ) {
    return {
      modules: {},
    };
  }
  const ast = flowParser.parse(contents);
  const configType = getConfigType(ast);
  switch (configType) {
    case 'component': {
      return wrapComponentSchema(buildComponentSchema(ast));
    }
    case 'module': {
      if (filename === undefined || filename === null) {
        throw new Error('Filepath expected while parasing a module');
      }
      const hasteModuleName = path.basename(filename).replace(/\.js$/, '');
      const _createParserErrorCap = createParserErrorCapturer(),
        _createParserErrorCap2 = _slicedToArray(_createParserErrorCap, 2),
        parsingErrors = _createParserErrorCap2[0],
        tryParse = _createParserErrorCap2[1];
      const schema = tryParse(() =>
        buildModuleSchema(hasteModuleName, ast, tryParse),
      );
      if (parsingErrors.length > 0) {
        /**
         * TODO(T77968131): We have two options:
         *  - Throw the first error, but indicate there are more then one errors.
         *  - Display all errors, nicely formatted.
         *
         * For the time being, we're just throw the first error.
         **/

        throw parsingErrors[0];
      }
      invariant(
        schema != null,
        'When there are no parsing errors, the schema should not be null',
      );
      return wrapModuleSchema(schema, hasteModuleName);
    }
    default:
      return {
        modules: {},
      };
  }
}
function parseFile(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  return buildSchema(contents, filename);
}
function parseModuleFixture(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  return buildSchema(contents, 'path/NativeSampleTurboModule.js');
}
function parseString(contents, filename) {
  return buildSchema(contents, filename);
}
module.exports = {
  parseFile,
  parseModuleFixture,
  parseString,
};
