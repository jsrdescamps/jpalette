/**
 * Small library to generate a color palette.
 *
 * @namespace Palette
 * @version 0.1.0
 * @author Julien Descamps
 */
var Palette = (function() {

  /**
   * Create an instance of Color.
   *
   * @constructor
   * @param {Number} r Red color in range [0,255]
   * @param {Number} g Green color in range [0,255]
   * @param {Number} b Blue color in range [0,255]
   * @param {Number} a Alpha transparency in range [0,255]
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
   * @param {Object} color - Color to substract.
   * @return {Object}
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
   * @return {String}
   */
  Color.prototype.rgb = function() {
    return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
  };

  /**
   * Main class to create the palette.
   *
   * @param {Number} numSteps - Number of colors shades in the palette.
   * @param {Object[]} colors - Color array to display in the palette.
   * @constructor
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
        that       = this,
        compute    = function(component) {
          return parseInt(
            that.colors[firstIndex][component] + localRatio * deltaColor[component], 10
          );
        };
    for (i = 0; i < this.numSteps; i++) {
      globalRatio = i / (this.numSteps - 1);
      firstIndex  = parseInt(globalRatio / colorDelta, 10);
      lastIndex   = Math.min(this.colors.length - 1, firstIndex + 1);
      localRatio  = (globalRatio - firstIndex * colorDelta) / colorDelta;
      deltaColor  = this.colors[lastIndex].delta(this.colors[firstIndex]);

      this.map.push(new Color(compute('r'), compute('g'), compute('b'), compute('a')));
    }
  };

  /**
   * Return a color instance from a decimal number between 0 and 1.
   *
   * @param {Number} value - Normalized decimal number in range [0,1].
   * @return {Object} color - Color instance.
   * @todo Check range.
   */
  ColorMap.prototype.getColor = function(value) {
    var delta = Math.max(0, Math.min(1, value)),
        index = parseInt(delta * (this.map.length - 1), 10);
    return this.map[index];
  };

  /**
   * Return a predefined palette (closure).
   *
   * @param {String} name - Name of the predefined palette
   * @return {Function}
   */
  ColorMap.getPredefined = function(name) {
    return function(steps) {
      switch (name) {
        default:
        case 'whitetoblack':
          return new ColorMap(steps, [
            new Color(255, 255, 255, 255),
            new Color(0, 0, 0, 255)
            ]
        );
        case 'blacktowhite':
          return new ColorMap(steps, [
            new Color(0, 0, 0, 255),
            new Color(255, 255, 255, 255),
            ]
        );
        case 'rgb':
          return new ColorMap(steps, [
            new Color(255, 0, 0, 255),
            new Color(0, 255, 0, 255),
            new Color(0, 0, 255, 255)
            ]
          );
        case 'nightsky':
          return new ColorMap(steps, [
            new Color(0, 0, 102, 255),
            new Color(255, 255, 255, 255),
            new Color(255, 102, 0, 255),
            new Color(0, 0, 102, 255),
            new Color(255, 255, 255, 255),
            new Color(255, 102, 0, 255)
            ]
          );
      }
    };
  };

  return {
    Color    : Color,
    ColorMap : ColorMap
  };
}());
