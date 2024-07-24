function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function() {
  const logoText = "Manik's DevFolio";
  const typingLogo = document.getElementById('typing-logo');
  let logoIndex = 0;

  function typeLogo() {
      if (logoIndex < logoText.length) {
          typingLogo.innerHTML += logoText.charAt(logoIndex);
          logoIndex++;
          setTimeout(typeLogo, 150);
      } else {
          logoIndex = 0;
          typingLogo.innerHTML = "";
          setTimeout(typeLogo, 150);
      }
  }

  typeLogo();
  const texts = ["Budding Engineer", "AI-ML Enthusiast", "Software Developer", "Mobile Application Developer"];
  let index = 0;
  const typingTextElement = document.querySelector(".typing-text");

  function typeText() {
      typingTextElement.classList.add("typing");
      typingTextElement.textContent = texts[index];
      setTimeout(eraseText, 4000);
  }

  function eraseText() {
      typingTextElement.classList.remove("typing");
      typingTextElement.classList.add("erasing");
      setTimeout(() => {
          typingTextElement.classList.remove("erasing");
          index = (index + 1) % texts.length;
          setTimeout(typeText, 400); 
      }, 2000); 
  }

  typeText();
});
