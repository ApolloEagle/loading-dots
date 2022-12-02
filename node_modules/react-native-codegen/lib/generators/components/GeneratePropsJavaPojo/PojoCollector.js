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

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return typeof key === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (typeof res !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
const _require = require('../../Utils'),
  capitalize = _require.capitalize;
class PojoCollector {
  constructor() {
    _defineProperty(this, '_pojos', new Map());
  }
  process(namespace, pojoName, typeAnnotation) {
    switch (typeAnnotation.type) {
      case 'ObjectTypeAnnotation': {
        this._insertPojo(namespace, pojoName, typeAnnotation);
        return {
          type: 'PojoTypeAliasTypeAnnotation',
          name: pojoName,
        };
      }
      case 'ArrayTypeAnnotation': {
        const arrayTypeAnnotation = typeAnnotation;
        // TODO: Flow assumes elementType can be any. Fix this.
        const elementType = arrayTypeAnnotation.elementType;
        const pojoElementType = (() => {
          switch (elementType.type) {
            case 'ObjectTypeAnnotation': {
              this._insertPojo(namespace, `${pojoName}Element`, elementType);
              return {
                type: 'PojoTypeAliasTypeAnnotation',
                name: `${pojoName}Element`,
              };
            }
            case 'ArrayTypeAnnotation': {
              const objectTypeAnnotation = elementType.elementType;
              this._insertPojo(
                namespace,
                `${pojoName}ElementElement`,
                objectTypeAnnotation,
              );
              return {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'PojoTypeAliasTypeAnnotation',
                  name: `${pojoName}ElementElement`,
                },
              };
            }
            default: {
              return elementType;
            }
          }
        })();
        return {
          type: 'ArrayTypeAnnotation',
          elementType: pojoElementType,
        };
      }
      default:
        return typeAnnotation;
    }
  }
  _insertPojo(namespace, pojoName, objectTypeAnnotation) {
    const properties = objectTypeAnnotation.properties.map(property => {
      const propertyPojoName = pojoName + capitalize(property.name);
      return _objectSpread(
        _objectSpread({}, property),
        {},
        {
          typeAnnotation: this.process(
            namespace,
            propertyPojoName,
            property.typeAnnotation,
          ),
        },
      );
    });
    this._pojos.set(pojoName, {
      name: pojoName,
      namespace,
      properties,
    });
  }
  getAllPojos() {
    return [...this._pojos.values()];
  }
}
module.exports = PojoCollector;
