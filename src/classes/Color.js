/**
 * @export
 * @class Color
 */
export default class Color {
  /**
   * Creates an instance of Color.
   *
   * @param {any} r 
   * @param {any} g 
   * @param {any} b 
   * @param {any} a 
   * @memberof Color
   */
  constructor(r = 0, g = 0, b = 0, a = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  /**
   * Substract from given Color.
   * 
   * @param {any} color 
   * @returns {Color}
   * @memberof Color
   */
  delta(color) {
    return new Color(
      this.r - color.r,
      this.g - color.g,
      this.b - color.b,
      this.a - color.a
    );
  }
  /**
   * Return the css rgb notation.
   * 
   * @returns {string}
   * @memberof Color
   */
  rgb() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
  /**
   * Return a predefined color.
   * 
   * @static
   * @param {any} name 
   * @returns 
   * @memberof Color
   */
  static get(name) {
    return (alpha) => {
      switch (name) {
      default:
      case 'white':
        return new Color(255, 255, 255, alpha);
      case 'black':
        return new Color(0  ,   0,   0, alpha);
      case 'red':
        return new Color(255,   0,   0, alpha);
      case 'green':
        return new Color(0  , 255,   0, alpha);
      case 'blue':
        return new Color(0  ,   0, 255, alpha);
      case 'yellow':
        return new Color(255, 255,   0, alpha);
      case 'cyan':
        return new Color(0  , 255, 255, alpha);
      case 'magenta':
        return new Color(255,   0, 255, alpha);
      case 'indigo':
        return new Color(128,   0, 255, alpha);
      case 'pink':
        return new Color(255,   0, 128, alpha);
      case 'orange':
        return new Color(255, 128,   0, alpha);
      case 'apple':
        return new Color(128, 255,   0, alpha);
      case 'manganese':
        return new Color(0  , 128, 255, alpha);
      case 'guppie':
        return new Color(0  , 255, 128, alpha);
      case 'purple':
        return new Color(128,   0, 128, alpha);
      case 'teal':
        return new Color(0  , 128, 128, alpha);
      case 'olive':
        return new Color(128, 128,   0, alpha);
      case 'coral':
        return new Color(255, 128, 128, alpha);
      }
    };
  }
}