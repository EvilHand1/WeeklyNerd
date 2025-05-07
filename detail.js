document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("information-section").style.display = "none";
  document.getElementById("reflectie-inhoud").style.display = "none";

  const footer = document.getElementById("information");

  const buttonInfo = {
    samenvatting: "Samenvatting",
    reflectie: "Reflectie",
    return: "Flee",
  };

  for (const [id, text] of Object.entries(buttonInfo)) {
    const btn = document.getElementById(id);
    if (!btn) continue;

    btn.addEventListener("mouseenter", () => {
      footer.textContent = "* Christian uses " + text;
    });

    btn.addEventListener("mouseleave", () => {
      footer.textContent = "* Choose your action";
    });
  }
});

document.getElementById("samenvatting").addEventListener("click", () => {
  document.getElementById("information-section").style.display = "flex";

  document.getElementById("samenvatting-inhoud").style = "display: flex;";
  document.getElementById("reflectie-inhoud").style = "display: none;";
});

document.getElementById("reflectie").addEventListener("click", () => {
  document.getElementById("information-section").style.display = "flex";

  document.getElementById("samenvatting-inhoud").style = "display: none;";
  document.getElementById("reflectie-inhoud").style = "display: flex;";
});
