'use strict';
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
var React = require('react'),
  React__default = _interopDefault(React),
  PropTypes = _interopDefault(require('prop-types')),
  styled = require('styled-components'),
  styled__default = _interopDefault(styled);
function _taggedTemplateLiteral(e, t) {
  return (
    (t = t || e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
  );
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _iterableToArrayLimit(e, t) {
  var n = [],
    r = !0,
    a = !1,
    i = void 0;
  try {
    for (
      var l, o = e[Symbol.iterator]();
      !(r = (l = o.next()).done) && (n.push(l.value), !t || n.length !== t);
      r = !0
    );
  } catch (e) {
    (a = !0), (i = e);
  } finally {
    try {
      r || null == o.return || o.return();
    } finally {
      if (a) throw i;
    }
  }
  return n;
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}
function _templateObject3() {
  var e = _taggedTemplateLiteral([
    '\n  background-position: center;\n  background-size: cover;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: ',
    ';\n  visibility: ',
    ';\n  transition: visibility 0.3s;\n  animation: ',
    " 0.8s;\n  background-image: url('",
    "');\n  will-change: opacity;\n  will-change: visibility;\n  will-change: z-index;\n",
  ]);
  return (
    (_templateObject3 = function() {
      return e;
    }),
    e
  );
}
function _templateObject2() {
  var e = _taggedTemplateLiteral([
    '\n  from {\n    opacity: 1;\n  }\n  \n  to {\n    opacity: 0;\n  }\n',
  ]);
  return (
    (_templateObject2 = function() {
      return e;
    }),
    e
  );
}
function _templateObject() {
  var e = _taggedTemplateLiteral([
    '\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n',
  ]);
  return (
    (_templateObject = function() {
      return e;
    }),
    e
  );
}
var fadeIn = styled.keyframes(_templateObject()),
  fadeOut = styled.keyframes(_templateObject2()),
  SwiftSliderSlide = styled__default.li(
    _templateObject3(),
    function(e) {
      return e.active ? '2' : '0';
    },
    function(e) {
      return e.active ? 'visible' : 'hidden';
    },
    function(e) {
      return e.active ? fadeIn : fadeOut;
    },
    function(e) {
      return e.backgroundImage;
    },
  );
function Slide(e) {
  var t = e.src,
    n = e.active;
  return React__default.createElement(SwiftSliderSlide, {
    backgroundImage: t,
    active: n,
  });
}
function _templateObject3$1() {
  var e = _taggedTemplateLiteral([
    '\n  right: 0;\n  &:hover {\n    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));\n  }\n',
  ]);
  return (
    (_templateObject3$1 = function() {
      return e;
    }),
    e
  );
}
function _templateObject2$1() {
  var e = _taggedTemplateLiteral([
    '\n  left: 0;\n  &:hover {\n    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);\n  }\n',
  ]);
  return (
    (_templateObject2$1 = function() {
      return e;
    }),
    e
  );
}
function _templateObject$1() {
  var e = _taggedTemplateLiteral([
    '\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  z-index: 10;\n  padding: 0 2rem;\n  width: 30%;\n  height: ',
    'px;\n  cursor: pointer;\n  align-items: center;\n',
  ]);
  return (
    (_templateObject$1 = function() {
      return e;
    }),
    e
  );
}
var DIRECTION = { prev: 'prev', next: 'next' },
  SwiftSliderControlBase = styled__default.div(_templateObject$1(), function(
    e,
  ) {
    return e.height;
  }),
  SwiftSliderControlPrev = styled__default(SwiftSliderControlBase)(
    _templateObject2$1(),
  ),
  SwiftSliderControlNext = styled__default(SwiftSliderControlBase)(
    _templateObject3$1(),
  );
function Control(e) {
  var t = e.onPressNext,
    n = e.onPressPrev,
    r = e.direction,
    a = e.height;
  return r === DIRECTION.prev
    ? React__default.createElement(SwiftSliderControlPrev, {
        onClick: n,
        height: a,
      })
    : React__default.createElement(SwiftSliderControlNext, {
        onClick: t,
        height: a,
      });
}
function _templateObject$2() {
  var e = _taggedTemplateLiteral([
    '\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 20px;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: ',
    ';\n',
  ]);
  return (
    (_templateObject$2 = function() {
      return e;
    }),
    e
  );
}
var SwiftSliderDot = styled__default.li(_templateObject$2(), function(e) {
  return e.background;
});
function Dot(e) {
  var t = e.active,
    n = e.onClick,
    r = e.idx,
    a = e.activeDotColor,
    i = e.dotColor;
  return React__default.createElement(SwiftSliderDot, {
    onClick: function() {
      return n(r);
    },
    background: t ? a : i,
  });
}
function useInterval(e, t) {
  var n = React.useRef();
  React.useEffect(function() {
    n.current = e;
  }),
    React.useEffect(
      function() {
        var e = setInterval(function() {
          n.current();
        }, t);
        return function() {
          return clearInterval(e);
        };
      },
      [t],
    );
}
function _templateObject3$2() {
  var e = _taggedTemplateLiteral([
    '\n  list-style: none;\n  margin: 1.7rem 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  @media (max-width: 600px) {\n    margin: 1rem 0;\n  }\n',
  ]);
  return (
    (_templateObject3$2 = function() {
      return e;
    }),
    e
  );
}
function _templateObject2$2() {
  var e = _taggedTemplateLiteral([
    '\n  position: relative;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  height: ',
    'px;\n  @media (max-width: 600px) {\n    height: 250px;\n  }\n',
  ]);
  return (
    (_templateObject2$2 = function() {
      return e;
    }),
    e
  );
}
function _templateObject$3() {
  var e = _taggedTemplateLiteral([
    '\n  position: relative;\n  height: ',
    'px;\n  @media (max-width: 600px) {\n    height: 250px;\n  }\n',
  ]);
  return (
    (_templateObject$3 = function() {
      return e;
    }),
    e
  );
}
var SwiftSliderContainer = styled__default.div(_templateObject$3(), function(
    e,
  ) {
    return e.height || '450';
  }),
  SwiftSliderSlides = styled__default.ul(_templateObject2$2(), function(e) {
    return e.height || '450';
  }),
  SwiftSliderDots = styled__default.ul(_templateObject3$2());
function ReactSlider(e) {
  var t = e.data,
    n = e.height,
    r = e.activeDotColor,
    a = e.interval,
    i = e.dotColor,
    l = e.showDots,
    o = e.enableNextAndPrev,
    c = _slicedToArray(React.useState(0), 2),
    u = c[0],
    d = c[1],
    f = _slicedToArray(React.useState(a), 2),
    p = f[0],
    s = f[1];
  useInterval(function() {
    m();
  }, p),
    React.useEffect(
      function() {
        t.forEach(function(e) {
          new Image().src = e.src;
        });
      },
      [t],
    );
  function _(e) {
    d(e), s(p - 1);
  }
  var m = function() {
    if (u === t.length - 1) return d(0);
    d(u + 1);
  };
  return React__default.createElement(
    SwiftSliderContainer,
    null,
    React__default.createElement(
      SwiftSliderSlides,
      { height: n },
      t.map(function(e, t) {
        return React__default.createElement(Slide, {
          active: t === u,
          src: e.src,
          key: e.id,
        });
      }),
    ),
    l
      ? React__default.createElement(
          SwiftSliderDots,
          null,
          t.map(function(e, t) {
            return React__default.createElement(Dot, {
              activeDotColor: r,
              dotColor: i,
              key: t,
              active: t === u,
              onClick: _,
              idx: t,
            });
          }),
        )
      : '',
    o
      ? React__default.createElement(Control, {
          onPressPrev: function() {
            if (0 === u) return d(t.length - 1);
            d(u - 1), s(p + 1);
          },
          direction: DIRECTION.prev,
          height: n,
        })
      : '',
    o
      ? React__default.createElement(Control, {
          onPressNext: m,
          direction: DIRECTION.next,
          height: n,
        })
      : '',
  );
}
(ReactSlider.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  interval: PropTypes.number,
  activeDotColor: PropTypes.string,
  dotColor: PropTypes.string,
  showDots: PropTypes.bool,
  enableNextAndPrev: PropTypes.bool,
}),
  (ReactSlider.defaultProps = {
    data: [],
    height: 450,
    activeDotColor: '#e8784e',
    interval: 5e3,
    dotColor: '#909192',
    showDots: !0,
    enableNextAndPrev: !0,
  }),
  (module.exports = ReactSlider);
