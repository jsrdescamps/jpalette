import Color from './Color.js';

/**
 * @export
 * @class ColorMap
 */
export default class ColorMap {

  /** 
   * Creates an instance of ColorMap.
   * @param {any} numSteps 
   * @param {any} colors 
   * @memberof ColorMap
   */
  constructor(numSteps, colors) {
    if (colors.length <= 1) {
      throw 'Two colors minimum.';
    }
    this.map      = [];
    this.numSteps = numSteps;
    this.colors   = colors;
    this.init();
  }

  /**
   * Init method.
   */
  init() {
    let firstIndex, lastIndex, localRatio, deltaColor,
      colorDelta = 1 / (this.colors.length - 1),
      that       = this,
      compute    = (component) => {
        return parseInt(
          that.colors[firstIndex][component] + localRatio * deltaColor[component], 10
        );
      };
    for (let i = 0; i < this.numSteps; i++) {
      let globalRatio = i / (this.numSteps - 1);
      firstIndex  = Math.floor(globalRatio / colorDelta);
      lastIndex   = Math.min(this.colors.length - 1, firstIndex + 1);
      localRatio  = (globalRatio - firstIndex * colorDelta) / colorDelta;
      deltaColor  = this.colors[lastIndex].delta(this.colors[firstIndex]);

      this.map.push(new Color(compute('r'), compute('g'), compute('b'), compute('a')));
    }
  }

  /**
   * Return a color instance from a decimal number between 0 and 1.
   * 
   * @param {any} value Normalized decimal number in range [0,1].
   * @returns {Color}
   * @memberof ColorMap
   */
  getColor(value) {
    let delta = Math.max(0, Math.min(1, value));
    let index = Math.floor(delta * (this.map.length - 1));
    
    return this.map[index];
  }

  /**
   * Convert to JSON.
   *
   * @return {Object}
   * @memberof Color
   */
  toJSON() {
    return {
      _type     : 'ColorMap',
      numSteps  : this.numSteps,
      colors    : this.colors.map(function(i) { return i.toJSON(); })
    };
  }

  /**
   * Revive from JSON.
   *
   * @static
   * @param {Object} o
   * @return {Color}
   * @memberof Color
   */
  static revive(o) {
    return new ColorMap(
      o.numSteps,
      o.colors.map(function(i) { return Color.revive(i); })
    );
  }

  /**
   * Return a predefined palette.
   * 
   * @static
   * @param {any} name 
   * @returns 
   * @memberof ColorMap
   */
  static get(name) {
    return (steps) => {
      switch (name) {
      default:
      case 'whitetoblack':
        return new ColorMap(steps, [
          new Color(255, 255, 255, 255),
          new Color(  0,   0,   0, 255)
        ]);
      case 'rgb':
        return new ColorMap(steps, [
          new Color(255,   0,   0, 255),
          new Color(  0, 255,   0, 255),
          new Color(  0,   0, 255, 255)
        ]);
      case 'rainbow':
        return new ColorMap(steps, [
          new Color(255,   0,   0, 255),
          new Color(255, 128,   0, 255),
          new Color(255, 255,   0, 255),
          new Color(0  , 255,   0, 255),
          new Color(128,   0, 128, 255),
          new Color(128,   0, 255, 255),
          new Color(255,   0,   0, 255)
        ]);
      case 'night':
        return new ColorMap(steps, [
          new Color(0  ,   0, 102, 255),
          new Color(255, 255, 255, 255),
          new Color(255, 102,   0, 255),
          new Color(0  ,   0, 102, 255)
        ]);
      case 'blacknwhite':
        return new ColorMap(steps, [
          new Color(255, 255, 255, 255),
          new Color(0  ,   0,   0, 255),
          new Color(255, 255, 255, 255),
          new Color(0  ,   0,   0, 255)
        ]);
      case 'fire':
        return new ColorMap(steps, [
          new Color(0  ,   0,   0, 255),
          new Color(255,   0,   0, 255),
          new Color(255, 255,   0, 255),
          new Color(255,   0,   0, 255)
        ]);
      case 'sky':
        return new ColorMap(steps, [
          new Color(0  ,   0, 120, 255),
          new Color(200, 255, 255, 255),
          new Color(0  ,   0, 120, 255)
        ]);
      }
    };
  }
}