const images = document.querySelectorAll("img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

images.forEach(function(img) {
  img.addEventListener("click", function() {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

popup.addEventListener("click", function(e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});