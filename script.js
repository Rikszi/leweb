// JavaScript kód az oldal elején vagy vége felé
  
  // Várjuk meg, amíg az összes elem betöltődik
  document.addEventListener("DOMContentLoaded", function() {
    // Keresés és hivatkozás a gombra és a linkre az id alapján
    var button = document.getElementById('webshop');
    var link = document.getElementById('myLink');
    
    // Ellenőrizzük, hogy az elemek léteznek-e
    if (button && link) {
      // Ha mindkét elem létezik, akkor hozzáadjuk az eseményfigyelőt a gombhoz
      button.addEventListener('click', function() {
          // Kattintáskor az eseményfigyelő megnyitja a linket
          link.click();
      });
    } else {
      // Ha az egyik vagy mindkét elem nem található, kiírunk egy hibaüzenetet a konzolra
      console.error("A gomb vagy a link nem található!");
    }
  });
