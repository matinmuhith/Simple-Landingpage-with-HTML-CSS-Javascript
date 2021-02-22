//1. Sambutan
window.alert("Selamat Datang di website MTNCreative kami siap membantu Anda!");

//2. efek parallax
const mainNode = document.querySelector('main');
mainNode.addEventListener('mousemove', (e) => {

 var moveX = (e.clientX / -9);
 var moveY = (e.clientY / -9);

 mainNode.style.backgroundPosition = moveX + 'px ' + moveY + 'px';
});

//3.Navbar
function myFunction() {
    var x = document.getElementById("dropdown");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

