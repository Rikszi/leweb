      // Gomb elem kiválasztása
      var button = document.querySelector('.webshop');
      
      // Link elem kiválasztása
      var link = document.querySelector('.myLink');

      // Gombra kattintás eseményfigyelője
      button.addEventListener('click', function() {
          // Link aktiválása
          link.click();
      });