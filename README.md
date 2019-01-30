# jPalette

A small javascript library to generate a color palette.

[Demo](https://jsrdescamps.github.io/jpalette/)

## How to install

```bash
npm install jpalette --save
```

## How to use

There are two types of objects: Color and ColorMap.

A Color object is defined in RGBA format.

A ColorMap object is an array of Color.

You can retrieve a color with a normalized index between 0 and 1.

### Manual palette

Here we generate a palette in 100 steps from red to green to blue.

```javascript
var colorMap = new jPalette.ColorMap(100, [
  new jPalette.Color(255, 0, 0, 255),
  new jPalette.Color(0, 255, 0, 255),
  new jPalette.Color(0, 0, 255, 255),
]);

// Normalized index between 0 and 1
var color = colorMap.getColor(0.3);

console.log(color);
// Color {r: 105, g: 149, b: 0, a: 255}
console.log(color.rgb());
// Return string for css use:
// rgb(0,206,48)

```

### Predefined palette

```javascript
var colorMap = jPalette.ColorMap.get('sky')(1000);
```

Available palettes:

* whitetoblack
* blacknwhite
* rgb
* fire
* night
* sky
* rainbow

### Predefined colors

```javascript
var color = jPalette.Color.get('cyan')(255); // Alpha transparancy set to 255
```

Available palettes:

* white
* black
* red
* green
* blue
* yellow
* cyan
* magenta
* indigo
* pink
* orange
* apple
* manganese
* guppie
* purple
* teal
* olive
* coral

## How to build

```bash
npm run build
```