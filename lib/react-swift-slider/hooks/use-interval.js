'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.useInterval = useInterval;

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj['default'] = obj;
    return newObj;
  }
}

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/06/22.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
function useInterval(callback, interval) {
  var saveCallback = (0, _react.useRef)();
  (0, _react.useEffect)(function() {
    saveCallback.current = callback;
  });
  (0, _react.useEffect)(
    function() {
      function tick() {
        saveCallback.current();
      }

      var id = setInterval(tick, interval);
      return function() {
        return clearInterval(id);
      };
    },
    [interval],
  );
}
