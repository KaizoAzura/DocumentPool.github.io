const asideToggler = document.getElementById("asideToggler");
const aside = document.querySelector(".aside");
const content = document.querySelector(".content");

document.addEventListener("click", function (event) {
  if (!aside.contains(event.target) && event.target !== asideToggler) {
    aside.classList.remove("show");
    content.classList.remove("shrink");
  }
});

asideToggler.addEventListener("click", function (event) {
  event.stopPropagation();
  aside.classList.toggle("show");
  content.classList.toggle("shrink");
});

// Function to load external HTML into #mainContent
async function loadMainContent() {
  const contentContainer = document.getElementById("mainContent");
  try {
    const response = await fetch("dist/html/homepage.html");
    if (!response.ok) throw new Error("Failed to fetch content");
    const htmlContent = await response.text();
    contentContainer.innerHTML = htmlContent;
  } catch (error) {
    contentContainer.innerHTML = `<p class="text-danger">Error loading content: ${error.message}</p>`;
  }
}

// Load content on page load
document.addEventListener("DOMContentLoaded", loadMainContent);
