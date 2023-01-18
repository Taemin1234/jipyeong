$(function () {
  lnbShow(); //메뉴바 나타내기
  mainSlide(); //메인 슬라이드
  menuClk(); //햄버거 클릭
  modalClose(); //검정화면 클릭
});

function lnbShow() {
  let lnb = $(".lnb");
  let lnbChild = $(".lnb-child");

  lnb.hover(
    function () {
      $(this).find(lnbChild).stop().slideDown();
    },
    function () {
      $(this).find(lnbChild).stop().slideUp();
    }
  );
}

function mainSlide() {
  $(".main-bg").slick({
    infinity: true,
    arrows: true,
    dots: true,
  });
}

function menuClk() {
  $(".menu-btn").on("click", function () {
    $(".hamburger-clk").fadeIn();
    $("body").addClass("bodyhidden");
  });

  $(".hb-icon").on("click", function () {
    $(".hamburger-clk").fadeOut();
    $("body").removeClass("bodyhidden");
  });
}

function modalClose() {
  $(".hbClk-bg").on("click", function (e) {
    if (e.target === e.currentTarget) {
      $(".hamburger-clk").fadeOut();
      $("body").removeClass("bodyhidden");
    }
  });
}
