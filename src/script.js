const canvas1 = new fabric.Canvas('c1')
const canvas2 = new fabric.Canvas('c2')
const canvas3 = new fabric.Canvas('c3')

var rect = new fabric.Rect({
  left: 100,
  top: 10,
  fill: '#f0f',
  width: 50,
  height: 50,
  angle: 45,
})

var rect2 = new fabric.Rect({
  left: 100,
  top: 10,
  fill: '#00f',
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

var circle2 = new fabric.Circle({
  left: 30,
  top: 70,
  fill: '#ff0',
  radius: 25,
})

fabric.Image.fromURL('XdQULww6_400x400.png', (objImg) => {
  objImg.scale(0.25)
  objImg.top = 140
  objImg.left = 50
  canvas1.add(objImg)
})

canvas1.add(rect, circle)

rect.animate('left', '+=100', {
  onChange: canvas2.renderAll.bind(canvas2),
  // on canvas2 renderAll finish rect that bind on (canvas2) will play
  duration: 1000,
  easing: fabric.util.ease.easeOutBounce,
})

var str = 'This is a book.'
var text = new fabric.Text(str, {
  top: 200,
  left: 200,
  fontSize: 14,
})

canvas2.add(rect, circle, text)

var group = new fabric.Group([circle2, rect2], {
  top: 100,
  left: 40,
})

canvas3.isDrawingMode = true

canvas3.add(group)
