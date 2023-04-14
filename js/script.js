// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area of a trapezoid.
 */
function calculateArea () {
  // get side a, b, and height from user
  let sideA = parseFloat(document.getElementById('side-a-trapezoid').value);
  let sideB = parseFloat(document.getElementById('side-b-trapezoid').value);
  let height = parseFloat(document.getElementById('height-trapezoid').value);

  // calculate area of a trapezoid
  let area = (sideA + sideB) * height / 2;

  // display area to user
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm<sup>2</sup>.'
}
