// Options: "ordinary", "advent", "christmas", "lent"
    const liturgicalSeason = "ordinary"; // <-- CHANGE THIS VALUE TO TEST DIFFERENT SUNDAY HIGHLIGHTS

    const today = new Date().getDay(); // 0 = Sunday
    const rows = document.querySelectorAll("#rosaryTable tbody tr");

    rows.forEach(row => {
      const rowDay = parseInt(row.dataset.day);

      // Highlight weekday rows normally
      if (rowDay === today && today !== 0) {
        row.classList.add("today");
      }

      // Highlight correct Sunday row based on season
      if (today === 0 && rowDay === 0 && row.dataset.season === liturgicalSeason) {
        row.classList.add("today");
      }
    });
