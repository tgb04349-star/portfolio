var snsSwiper = new Swiper("#snsSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: false, // loop 끔
  initialSlide: 0, // 첫 번째 슬라이드 중앙
  coverflowEffect: {
    rotate: 0,
    stretch: -40, // 카드가 서로 겹치도록
    depth: 150,   // 입체감
    modifier: 1.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: "#snsNext",
    prevEl: "#snsPrev",
  },
});
