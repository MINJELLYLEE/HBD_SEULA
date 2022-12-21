// 한 슬라이드에 한 섹션
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");

var page = 1;

var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 10);
$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop }, 100);
});

// swiper
var swiper = new Swiper(".slide1", {
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".slide2", {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 30,
});

window.addEventListener("scroll", function (e) {
  const $nav = document.querySelector(".nav");
  const elm = document.querySelectorAll(".section");

  let scrollTop =
    document.documentElement.scrollTop ||
    window.scrollY ||
    this.window.pageYOffset;
  console.log(scrollTop);

  if (scrollTop > 100) {
    $nav.classList.add("on");
  } else {
    $nav.classList.remove("on");
  }
  elm.forEach((item2, i) => {
    if (scrollTop >= item2.offsetTop - 5) {
      document.querySelectorAll(".nav>li").forEach((li) => {
        li.classList.remove("on");
      });
      document
        .querySelector(".nav li:nth-child(" + (i + 1) + ")")
        .classList.add("on");
    }
  });
});
