$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".nav .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".m-btn").click(function () {
    $(".nav .menu").toggleClass("active");
    $(".m-btn i").toggleClass("active");
  });
  $(".github").click(function () {
    window.open("https://github.com/fatihkgm", "_blank");
  });
  $(".youtube").click(function () {
    window.open(
      "https://www.youtube.com/channel/UCALSDhetWpOM5FarMiMdUDg/videos",
      "_blank"
    );
  });
  $(".myblog").click(function () {
    window.open("https://thekgmweb.com/blog/", "_blank");
  });
  $(".linkedIn").click(function () {
    window.open("https://www.linkedin.com/in/fgokmen/", "_blank");
  });
  //typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Designer"],
    typeSpeed: 130,
    backSpeed: 30,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Gokmen", "Gokmen"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
  });
  // var typed = new Typed(".typing-3", {
  //   strings: ["K", "KG", "KGM", "KGM"],
  //   typeSpeed: 10,
  //   loop: true,
  // });

  const contactForm = document.querySelector(".contact-me");
  let name = document.getElementById("name");
  let maile = document.getElementById("maile");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
      name: name.value,
      maile: maile.value,
      subject: subject.value,
      message: message.value,
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText == "success") {
        alert(" 🔴 Your email succesfully sent...!");
        name.value = "";
        maile.value = "";
        subject.value = "";
        message.value = "";
      } else {
        alert("🥲Sorry something went wrong.");
      }
    };
    xhr.send(JSON.stringify(formData));
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
