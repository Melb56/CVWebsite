    
    /* HERO */
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: [
        "Developpeuse web",
        "Créative",
        "Autonome",
        "Motivée",
        "Bienvenue !",
    ],
    typeSpeed: 50,
    backSpeed: 25, 
    loop: true,
    showCursor: false,
    
  };

  const typed = new Typed("#typed-output", options);
});


    /*Fade-in*/
  document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll(".fade-in");
      
      const fadeInOnScroll = () => {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
          if (isVisible) {
            section.classList.add("visible"); 
          }
        });
      };
      
      window.addEventListener("scroll", fadeInOnScroll);
      
      fadeInOnScroll();
    });

      /*Voir Plus-Skills*/
const toggleButton = document.getElementById('toggle-skills');
const collapsibleSections = document.querySelectorAll('.collapsible');

toggleButton.addEventListener('click', () => {
  collapsibleSections.forEach(section => {
    section.classList.toggle('expanded');
  });
  if (toggleButton.textContent === '+') {
    toggleButton.textContent = '-';
  } else {
    toggleButton.textContent = '+';
  }
});

        /* Filtre */ 
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const items = document.querySelectorAll(".card");

  const filterItems = () => {
    const selectedCategories = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const noCategorySelected = selectedCategories.length === 0;

    items.forEach((item) => {
      const itemCategory = item.dataset.category;

      if (noCategorySelected || selectedCategories.includes(itemCategory)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterItems);
  });

  filterItems();
});


        /* Scroll To Top */ 
  document.addEventListener("DOMContentLoaded", () => {
      const scrollToTopButton = document.querySelector(".scroll-to-top");
          
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollToTopButton.style.display = "block"; 
        } else {
          scrollToTopButton.style.display = "none";
        }
      });
          
      scrollToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth", 
          });
          });
        });