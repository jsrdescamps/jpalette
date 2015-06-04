/**
 * Create an instance of Color.
 *
 * @param integer r Red color in range [0,255]
 * @param integer g Green color in range [0,255]
 * @param integer b Blue color in range [0,255]
 * @param integer a Alpha transparency in range [0,255]
 */
var Color = function (r, g, b, a) {
  this.r = r || 0;
  this.g = g || 0;
  this.b = b || 0;
  this.a = a || 0;
};

/**
 * Return a color with substracted components from an inputed color.
 *
 * @param Color color Color to substract.
 * @return Color Substracted color instance.
 * @todo Check range.
 */
Color.prototype.delta = function (color) {
  return new Color(
    this.r - color.r,
    this.g - color.g,
    this.b - color.b,
    this.a - color.a
  );
};

/**
 * Return the css rgb notation.
 *
 * @return string css rgb notation.
 */
Color.prototype.rgb = function() {
  return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
};

/**
 * Main class to create the palette.
 *
 * @param integer numSteps Number of colors shades in the palette.
 * @param Color[] colors Color array to display in the palette.
 */
var ColorMap = function (numSteps, colors) {
  if (colors.length <= 1) {
    throw 'Two colors minimum.';
  }
  this.map = [];
  var colorDelta = 1 / (colors.length - 1);

  for (var i = 0; i < numSteps; i ++) {
    var globalRatio = i / (numSteps - 1);
    var firstIndex = parseInt(globalRatio / colorDelta, 10);
    var lastIndex = Math.min(colors.length - 1, firstIndex + 1);
    var localRatio = (globalRatio - firstIndex * colorDelta) / colorDelta;
    var delta = colors[lastIndex].delta(colors[firstIndex]);

    this.map.push(
      new Color(
          parseInt(colors[firstIndex].r + localRatio * delta.r, 10),
          parseInt(colors[firstIndex].g + localRatio * delta.g, 10),
          parseInt(colors[firstIndex].b + localRatio * delta.b, 10),
          parseInt(colors[firstIndex].a + localRatio * delta.a, 10)
        )
    );
  }
};

/**
 * Return a color instance from a decimal number between 0 and 1.
 *
 * @param decimal value Normalized decimal number in range [0,1].
 * @return Color color Color instance.
 * @todo Check range.
 */
ColorMap.prototype.getColor = function (value) {
   var delta = Math.max(0, Math.min(1, value));
   var index = parseInt(delta * (this.map.length - 1), 10);
   return this.map[index];
};
