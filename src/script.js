const canvas = new fabric.Canvas('c1')

var rect = new fabric.Rect({
  left: 100,
  top: 10,
  fill: '#f0f',
  width: 50,
  height: 50,
  angle: 45,
})

var circle = new fabric.Circle({
  left: 30,
  top: 70,
  fill: '#0ff',
  radius: 25,
})

fabric.Image.fromURL('XdQULww6_400x400.png', (objImg) => {
  canvas.add(objImg)
})

canvas.add(rect, circle)
