'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var bowser = require('bowser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultDecorators = [{
  component: (0, _createReactClass2.default)({
    displayName: 'component',
    render: function render() {
      return _react2.default.createElement(
        'img',
        {
          style: this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround),
          onClick: this.handleClick,
          src: '/images/slider/slider_previous_arrow.png'
        }
      );
    },
    handleClick: function handleClick(e) {
      e.preventDefault();
      this.props.previousSlide();
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        background: 'rgba(0,0,0,0.0)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: 'pointer'
      };
    }
  }),
  position: 'CenterLeft'
}, {
  component: (0, _createReactClass2.default)({
    displayName: 'component',
    render: function render() {
      return _react2.default.createElement(
        'img',
        {
          style: this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround),
          onClick: this.handleClick,
          src: '/images/slider/slider_next_arrow.png' 
        },
      );
    },
    handleClick: function handleClick(e) {
      e.preventDefault();
      this.props.nextSlide();
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        background: 'rgba(0,0,0,0.0)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: 'pointer'
      };
    }
  }),
  position: 'CenterRight'
}, {
  component: (0, _createReactClass2.default)({
    displayName: 'component',
    render: function render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return _react2.default.createElement(
        'ul',
        { style: self.getListStyles() },
        indexes.map(function (index) {
          return _react2.default.createElement(
            'li',
            { style: self.getListItemStyles(), key: index },
            _react2.default.createElement(
              'button',
              {
                style: self.getButtonStyles(self.props.currentSlide === index),
                onClick: self.props.goToSlide.bind(null, index) },
              '\u2022'
            )
          );
        })
      );
    },
    getIndexes: function getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles: function getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      };
    },
    getListItemStyles: function getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      };
    },
    getButtonStyles: function getButtonStyles(active) {
      const padding = (bowser.mobile) ? 5 : 10;
      return {
        border: 0,
        background: 'transparent',
        color: active ? '#29838c' : '#82bbb8',
        cursor: 'pointer',
        padding: padding,
        outline: 0,
        fontSize: 24,
        opacity: active ? 1 : 0.6
      };
    }
  }),
  position: 'BottomCenter'
}];

exports.default = DefaultDecorators;
module.exports = exports['default'];