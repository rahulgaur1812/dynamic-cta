"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cta = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Cta.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Cta = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn--".concat(props.kind, " CTA"),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick
  }, props.label);
};
exports.Cta = Cta;