import * as jPalette from 'jpalette';

let colorMaps = [];
colorMaps[0] = jPalette.ColorMap.get('whitetoblack')(20);
colorMaps[1] = jPalette.ColorMap.get('rgb')(50);

// Manual instanciation palette example (100 steps)
colorMaps[2] = new jPalette.ColorMap(100, [
  new jPalette.Color(255, 0, 0, 255),
  new jPalette.Color(255, 255, 0, 255),
  new jPalette.Color(0, 255, 255, 255),
  new jPalette.Color(0, 0, 255, 255),
]);

// Other predefined examples with 1000 steps
colorMaps[3] = jPalette.ColorMap.get('fire') (1000);
colorMaps[4] = jPalette.ColorMap.get('sky')  (1000);
colorMaps[5] = jPalette.ColorMap.get('night')(1000);

let canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

for (let i = 0, width = canvas.width; i < width; i ++) {
  let d = i / (width - 1);

  ctx.fillStyle = colorMaps[0].getColor(d).rgb();
  ctx.fillRect(i,  20, 1, 50);

  ctx.fillStyle = colorMaps[1].getColor(d).rgb();
  ctx.fillRect(i, 100, 1, 50);

  ctx.fillStyle = colorMaps[2].getColor(d).rgb();
  ctx.fillRect(i, 180, 1, 50);

  ctx.fillStyle = colorMaps[3].getColor(d).rgb();
  ctx.fillRect(i, 260, 1, 50);

  ctx.fillStyle = colorMaps[4].getColor(d).rgb();
  ctx.fillRect(i, 340, 1, 50);

  ctx.fillStyle = colorMaps[5].getColor(d).rgb();
  ctx.fillRect(i, 420, 1, 50);
}
ctx.fillStyle = 'black';
ctx.fillText('Predefined: white to black, 20 steps',        0, 10);
ctx.fillText('Predefined : red to green to blue, 50 steps', 0, 90);
ctx.fillText('Manual: 4 colors, 100 steps',                 0, 170);
ctx.fillText('Predefined : "fire", 1000 steps',             0, 250);
ctx.fillText('Predefined : "sky", 1000 steps',              0, 330);
ctx.fillText('Predefined : "night", 1000 steps',            0, 410);