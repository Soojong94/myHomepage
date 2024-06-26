function applyRotation(image) {
  image.addEventListener('mousemove', function (e) {
    var x = e.offsetX;
    var y = e.offsetY;

    var speed = 0.01;

    var rotateY = -1 / 5 * x + 20;
    var rotateX = 4 / 15 * y - 30;

    rotateY = ((rotateY / 250) * 90 + 360) % 360;
    rotateX = ((rotateX / 250) * 90 + 360) % 360;

    // 각도를 높이기 위해 추가한 변수
    var angleMultiplier = 1.5;

    rotateY = (rotateY + x * speed * angleMultiplier) % 360;
    rotateX = (rotateX + y * speed * angleMultiplier) % 360;

    image.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  image.addEventListener('mouseout', function () {
    image.style.transform = 'perspective(350px) rotateY(0deg) rotateX(0deg)';
  });
}

// var image5 = document.querySelector('.image5');
// applyRotation(image5);

var image7 = document.querySelector('.image7');
applyRotation(image7); 
