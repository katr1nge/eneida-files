// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the content container element
var contentContainer = document.querySelector(".content-container");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("open");
  contentContainer.classList.add("blur");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal.classList.remove("open");
  contentContainer.classList.remove("blur");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.remove("open");
    contentContainer.classList.remove("blur");
  }
}
  function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(function() {
      element.innerHTML = "АЙПІ СКОПІЙОВАНО";
      setTimeout(function() {
        element.innerHTML = "АЙПІ СЕРВЕРУ: play.eneida.club";
      }, 2000);
    }, function(err) {
      console.error('Error copying text to clipboard: ', err);
    });
  }
fetch('https://github.com/katr1nge/eneida-files/blob/main/benbold.ttf?raw=true', {mode: 'no-cors'})
  .then(response => {
    // The response will be opaque, so we can't access the response content
    console.log(response.ok); // true if the response is successful
  })
  .catch(error => {
    console.error(error);
  });

const navbar = document.querySelector('.navbar');
const popupContainer = document.querySelector('.popup-container');

// Визначаємо висоту навігаційної панелі
let navbarHeight = navbar.offsetHeight;

// Встановлюємо відповідну висоту для поп-ап вікна при завантаженні сторінки
popupContainer.style.top = navbarHeight + 30 + 'px';

// Встановлюємо відповідну висоту для поп-ап вікна при кожному скролі
window.addEventListener('scroll', function() {
  if (window.pageYOffset >= navbarHeight) {
    popupContainer.style.top = '32';
  } else {
    popupContainer.style.top = navbarHeight + 'px';
  }
});

        const profileLink = document.querySelector('.nav-profile');
        const popup = document.querySelector('.popup-container');
      
        profileLink.addEventListener('click', function(e) {
          e.preventDefault();
          popup.classList.toggle('show');
        });
      
        document.addEventListener('click', function(e) {
          const target = e.target;
      
          // перевіряємо, чи клікнуто за межами popup-контейнера
          if (!popup.contains(target) && !target.matches('.nav-profile')) {
            popup.classList.remove('show');
          }
        });

let alertDiv = document.getElementById("alert");

alertDiv.style.transition = "all 0.5s ease-in-out";
alertDiv.style.transform = "translateY(-100%)";

setTimeout(function() {
  alertDiv.style.display = "none";
}, 500);

