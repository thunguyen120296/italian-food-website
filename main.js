gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img__leaf',
    start: 'top center',
    end: 'bottom top',
    scrub: true,
  },
});
tl.to('.img__leaf', { yPercent: -50, duration: 1 });

gsap.to('.navbar__item', {
  duration: 1,
  yPercent: 50,
  stagger: 0.1,
});

gsap.from('.header__banner__left__logo', {
  opacity: 0,
});
gsap.from('.header__banner__left', {
  opacity: 0,
  x: -100,
  duration: 2,
});
gsap.from('.img__header__noodle', {
  opacity: 0,
  duration: 3,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.service__title',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.service__title', { opacity: 0, duration: 1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.service__item',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.service__item', { opacity: 0, duration: 1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.service__btn',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.service__btn', { opacity: 0, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.info__title',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.info__title', { xPercent: 100, duration: 1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.info__content__wrapper',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.info__content__wrapper', { xPercent: -200, duration: 1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.info__btn',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.info__btn', { opacity: 0, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.discount__left__img',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,
    },
  })
  .from('.discount__left__img', { xPercent: -150, duration: 1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.discount__right__description',
      start: 'top center',
      end: 'center center',
      scrub: true,
    },
  })
  .from('.discount__right__description', { xPercent: 150, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.discount__left__description',
      start: 'top center',
      end: 'center center',
      scrub: true,
    },
  })
  .from('.discount__left__description', { xPercent: -150, duration: 1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.discount__right__img',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,
    },
  })
  .from('.discount__right__img', { xPercent: 150, duration: 1 });
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.menu__title',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.menu__title', { yPercent: -10, opacity: 0, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.menu__img__half',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .to('.menu__img__half', { yPercent: 20, xPercent: -20, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.sub__menu__card',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.sub__menu__card', { opacity: 0, duration: 1, stagger: 1, delay: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.sub__menu__description',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.sub__menu__description', { opacity: 0, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.subcribled__title',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.subcribled__title', { opacity: 0, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.subcribled__description',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.subcribled__description', { opacity: 0, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.subcribled__form',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
  .from('.subcribled__form', { opacity: 0, duration: 1 });
