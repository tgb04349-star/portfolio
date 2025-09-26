
  window.onload = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 100;

    const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      const updateCount = () => {
        const count = +counter.innerText;
        const increment = Math.max(1, Math.ceil(target / speed));
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
  };

