document.addEventListener("DOMContentLoaded", () => {
const footer = document.getElementById("information");
      const buttonInfo = {
        Week1: "Kilian Valkhof",
        Week2: "Peter-Paul Koch",
        Week3: "Cassie Evans",
        Week4: "Jeremy Keith",
        Week5: "Rosa Schuurmans",
        Week6: "Niels Leenheer",
        Week7: "Erik Kroes",
        Week8: "Nienke de Keijzer",
        Hackaton: "Hackaton",
        Leerdoelen: "Leerdoelen",
      };

      for (const [id, text] of Object.entries(buttonInfo)) {
        const btn = document.getElementById(id);
        if (!btn) continue;

        btn.addEventListener("mouseenter", () => {
          footer.textContent = "* Fight: " + text;
        });

        btn.addEventListener("mouseleave", () => {
          footer.textContent = "* Choose your battle";
        });
      }
    });