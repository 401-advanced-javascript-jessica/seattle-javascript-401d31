'use strict';

// Vinicio - this name can be anything you want, but make it meaningful
const getMinMax = require('../get-biggest');

describe('Hey, I am just exploring some jest features', () => {
  // Vinicio - Here, we are going to write our tests
  test('Test normal input', () => {
    expect(getMinMax.getBiggest(1,2,3)).toEqual(3);

    expect(getMinMax.getBiggest(10,2,3)).toEqual(10);
  });

  test('Test equal input', () => {
    expect(getMinMax.getBiggest(1,1,1)).toEqual(1);
  });

  test('Test negative input', () => {
    expect(getMinMax.getBiggest(-5,-1,-10)).toEqual(-1);
  });
});

// Describe function -> talk about tests
// Test / It function -> Test something in your code