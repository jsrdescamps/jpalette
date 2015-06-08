/**
 * Small library to generate a color palette.
 *
 * @version 0.1.0
 * @author Julien Descamps
 */
var Palette = (function() {

  /**
   * Create an instance of Color.
   *
   * @param integer r Red color in range [0,255]
   * @param integer g Green color in range [0,255]
   * @param integer b Blue color in range [0,255]
   * @param integer a Alpha transparency in range [0,255]
   */
  var Color = function(r, g, b, a) {
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
  Color.prototype.delta = function(color) {
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
  var ColorMap = function(numSteps, colors) {
    if (colors.length <= 1) {
      throw 'Two colors minimum.';
    }
    this.map = [];
    this.numSteps = numSteps;
    this.colors = colors;
    this.init();
  };

  /**
   * Initialize the palette.
   */
  ColorMap.prototype.init = function() {
    var i, globalRatio, firstIndex, lastIndex, localRatio, delta,
      colorDelta = 1 / (this.colors.length - 1),
      that = this,
      compute = function(component) {
        return parseInt(that.colors[firstIndex][component] + localRatio * delta[component], 10);
      };

    for (i = 0; i < this.numSteps; i++) {
      globalRatio = i / (this.numSteps - 1);
      firstIndex = parseInt(globalRatio / colorDelta, 10);
      lastIndex = Math.min(this.colors.length - 1, firstIndex + 1);
      localRatio = (globalRatio - firstIndex * colorDelta) / colorDelta;
      delta = this.colors[lastIndex].delta(this.colors[firstIndex]);

      this.map.push(new Color(compute('r'), compute('g'), compute('b'), compute('a')));
    }
  };

  /**
   * Return a color instance from a decimal number between 0 and 1.
   *
   * @param decimal value Normalized decimal number in range [0,1].
   * @return Color color Color instance.
   * @todo Check range.
   */
  ColorMap.prototype.getColor = function(value) {
    var delta = Math.max(0, Math.min(1, value));
    var index = parseInt(delta * (this.map.length - 1), 10);
    return this.map[index];
  };

  return {
    Color: Color,
    ColorMap: ColorMap
  };
}());
