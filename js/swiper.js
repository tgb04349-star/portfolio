const swiper = new Swiper('.sw-hero', {
  slidesPerView: '1.2',
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 60,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeParents: true,
  on: {
    init(swiper) {
      // 실제 슬라이드만 계산 (복제 제외)
      const realTotal = swiper.wrapperEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
      document.querySelector('.total-slide').textContent = realTotal;
      document.querySelector('.current-slide').textContent = swiper.realIndex + 1;
    },
    slideChangeTransitionEnd(swiper) {
      document.querySelector('.current-slide').textContent = swiper.realIndex + 1;
    },
  },
});
