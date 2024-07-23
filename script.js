// Function to toggle menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function for typing and erasing effect
document.addEventListener("DOMContentLoaded", function() {
  const texts = ["Budding Engineer","AI-ML Enthusiast", "Software Developer", "Mobile Application Developer"];
  let index = 0;
  const typingTextElement = document.querySelector(".typing-text");

  function typeText() {
      typingTextElement.classList.add("typing");
      typingTextElement.textContent = texts[index];
      setTimeout(eraseText, 4000); // Adjust timing for typing effect
  }

  function eraseText() {
      typingTextElement.classList.remove("typing");
      typingTextElement.classList.add("erasing");
      setTimeout(() => {
          typingTextElement.classList.remove("erasing");
          index = (index + 1) % texts.length;
          setTimeout(typeText, 400); // Adjust timing between erasing and next typing
      }, 2000); // Adjust timing for erasing effect
  }

  typeText();
});
