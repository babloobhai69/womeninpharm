/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".fade-in");
  
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );
  
    revealElements.forEach(el => {
      el.classList.add("reveal-hidden");
      revealObserver.observe(el);
    });
  });
  
  
  /* =====================================================
     STATS COUNTER ANIMATION
  ===================================================== */
  
  document.addEventListener("DOMContentLoaded", () => {
    const statNumbers = document.querySelectorAll(".stat-number");
    let statsStarted = false;
  
    function animateStats() {
      statNumbers.forEach(stat => {
        const targetText = stat.innerText.replace("+", "");
        const target = parseInt(targetText, 10);
        let count = 0;
  
        const increment = Math.ceil(target / 80);
  
        const updateCount = () => {
          count += increment;
          if (count >= target) {
            stat.innerText = target + "+";
          } else {
            stat.innerText = count;
            requestAnimationFrame(updateCount);
          }
        };
  
        updateCount();
      });
    }
  
    const statsSection = document.querySelector(".stats");
  
    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !statsStarted) {
              statsStarted = true;
              animateStats();
            }
          });
        },
        { threshold: 0.3 }
      );
  
      statsObserver.observe(statsSection);
    }
  });
  const toggle = document.getElementById("menuToggle");
const drawer = document.getElementById("mobileDrawer");
const overlay = document.getElementById("drawerOverlay");

toggle.addEventListener("click", () => {
  drawer.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  drawer.classList.remove("open");
  overlay.classList.remove("show");
});
