const Triangle = require('examples/logo.svg');

test('render method should generate correct SVG for a blue triangle', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

const Circle = require('..index.js'); 

test('render method should generate correct SVG for a blue circle', () => {
  const shape = new Circle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />');
});

const Square = require('./Square'); 

test('render method should generate correct SVG for a blue square', () => {
  const shape = new Square();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="blue" />');
});
