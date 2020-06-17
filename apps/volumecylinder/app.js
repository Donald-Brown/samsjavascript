
// v = PIrsquared*height
volumeChimmney = (radius, height) => {
  return Math.PI*Math.pow(radius, 2)*height;
}

document.write(`volume of chimney: ${volumeChimmney(2, 3)}`);