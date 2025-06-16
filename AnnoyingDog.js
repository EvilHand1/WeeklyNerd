document.addEventListener("DOMContentLoaded", () => {
 // List of alternate GIFs to randomly choose from
 const basePath = window.location.pathname.includes("/WeeklyNerds/") ? "../image/" : "image/";
 const alternateGifs = [
  `${basePath}chachacha.gif`,
  `${basePath}Annoying_Dog_sprite.webp`,
  `${basePath}Annoying_Dog_overworld_bomb.webp`,
  `${basePath}Annoying_Dog_sprite.webp`,
  `${basePath}Annoying_Dog_overworld_bomb.webp`
  ];

  // Get all images in the header
  const images = document.querySelectorAll("header img");

  images.forEach(img => {
    const chance = Math.random(); // between 0 and 1
    if (chance < 0.05) { // 50% chance
      const randomGif = alternateGifs[Math.floor(Math.random() * alternateGifs.length)];
      img.src = randomGif;
    }
  })
});