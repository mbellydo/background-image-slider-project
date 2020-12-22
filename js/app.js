const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

var img_ruta = 'img/'

var position = 0;

const left = document.querySelector('.btn-left')
const right = document.querySelector('.btn-right')
const container = document.querySelector('.img-container')

nextImage()

left.addEventListener('click', function () {
  change_img(-1)
  nextImage()
})
right.addEventListener('click', function () {
  change_img(1)
  nextImage()
})

function change_img(direction) {
  position = direction + position;

  if (position == -1) {
    position = pictures.length-1
  } else if (position == pictures.length) {
    position = 0
  }

  container.style.backgroundImage = "url('" + img_ruta + pictures[position] + ".jpeg')";
}

function nextImage(){
  var nextImage = position+1;

  if (nextImage == -1) {
    nextImage = pictures.length-1
  } else if (nextImage == pictures.length) {
    nextImage = 0
  }

  console.log(img_ruta + pictures[nextImage] + ".jpeg");
}