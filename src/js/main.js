let bgList = document.querySelectorAll(".gradient-bg");

document.addEventListener("DOMContentLoaded", () => {
  bgList.forEach((bg) => {
    setInterval(() => {
      createCircle(bg);
      createCircle(bg);
      createCircle(bg);
      createCircle(bg);
      createCircle(bg);
    }, 1000);
  });
});

function createCircle(bg) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  if (Math.random() > 0.35) circle.classList.add("gradient-bg-light");
  else circle.classList.add("gradient-bg-dark");
  circle.style.setProperty("--pos-x", Math.floor(Math.random() * 100) + "%");
  circle.style.setProperty("--pos-y", Math.floor(Math.random() * 100) + "%");
  circle.style.setProperty("--end-x", Math.floor(Math.random() * 100) + "%");
  circle.style.setProperty("--end-y", Math.floor(Math.random() * 100) + "%");
  console.log(circle);
  setTimeout(() => {
    circle.remove();
  }, 8500);
  bg.appendChild(circle);
}

function initMap() {
  var options = {
    center: { lat: 46.79468556386549, lng: 7.156063246585524 },
    zoom: 15,
    styles: [
      [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#181818",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1b1b1b",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#2c2c2c",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8a8a8a",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#373737",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#3c3c3c",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#4e4e4e",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3d3d3d",
            },
          ],
        },
      ],
    ],
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
    position: { lat: 46.79468556386549, lng: 7.156063246585524 },
    map: map,
    title: "Mon lieu ciblé",
  });
}

function changeNav() {
  var navBar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 1637) {
    navBar.classList.remove("nav-fixed");
  } else {
    navBar.classList.add("nav-fixed");
  }
}

window.addEventListener("scroll", changeNav);

// var sizeSwitch = 80;
// var switchHandle = $("#switch .draggable-switch-handle");
// var option1 = $("#option1");
// var option2 = $("#option2");
// var switchArea = $("#switch");

// switchHandle.draggable({
//   axis: "x",
//   containment: "parent",
//   stop: function () {
//     conditionMove();
//   },
// });

// option1.click(function () {
//   option1.addClass("active");
//   option2.removeClass("active");
//   switchHandle.animate(
//     {
//       left: 0,
//     },
//     100
//   );
// });

// option2.click(function () {
//   option2.addClass("active");
//   option1.removeClass("active");
//   switchHandle.animate(
//     {
//       left: "80px" /* Résultat de $size-switch en pixels */,
//     },
//     100
//   );
// });

// switchArea.click(function () {
//   conditionMoveSnap();
// });

// function conditionMove() {
//   if (parseInt(switchHandle.css("left")) <= 40) {
//     /* Résultat de $size-switch / 2 en pixels */
//     switchHandle.animate(
//       {
//         left: 0,
//       },
//       100
//     );
//     option1.addClass("active");
//     option2.removeClass("active");
//   } else {
//     switchHandle.animate(
//       {
//         left: "80px" /* Résultat de $size-switch en pixels */,
//       },
//       100
//     );
//     option2.addClass("active");
//     option1.removeClass("active");
//   }
// }

// function conditionMoveSnap() {
//   if (parseInt(switchHandle.css("left")) === 80) {
//     /* Résultat de $size-switch en pixels */
//     switchHandle.animate(
//       {
//         left: 0,
//       },
//       100
//     );
//     option1.addClass("active");
//     option2.removeClass("active");
//   } else {
//     switchHandle.animate(
//       {
//         left: "80px" /* Résultat de $size-switch en pixels */,
//       },
//       100
//     );
//     option2.addClass("active");
//     option1.removeClass("active");
//   }
// }
