      // Gomb elem kiválasztása
      var button = document.querySelector('.webshop');
      
      // Link elem kiválasztása
      var link = document.querySelector('.myLink');

      // Gombra kattintás eseményfigyelője
      button.addEventListener('click', function() {
          // Link aktiválása
          link.click();
      });


      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
