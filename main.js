document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("information");
  const buttonInfo = {
    Spreker1: "Kilian Valkhof",
    Spreker2: "Peter-Paul Koch",
    Spreker3: "Cassie Evans",
    Spreker4: "Jeremy Keith",
    Spreker5: "Rosa Schuurmans",
    Spreker6: "Niels Leenheer",
    Spreker7: "Erik Kroes",
    Spreker8: "Nienke de Keijzer",
    Spreker9: "IO Digital: Dave Bitter",
    Spreker10: "IO Digital: Steve Jonk",
    Spreker11: "IO Digital: Clarke Verdel",
    Spreker12: "Q42: Johan Huigman",
    Spreker13: "Q42: Marvin",
    Spreker14: "Marieke",
    Spreker15: "Nils Binder",
    Spreker16: "Miriam Suzanne",
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
