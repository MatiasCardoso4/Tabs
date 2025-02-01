const tabs = document.querySelectorAll(".tab-item a");
const content = document.querySelector(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("focus", () => {
    content.textContent = `${tab.innerHTML} content`;
  });

  window.addEventListener('DOMContentLoaded', ()=> {
    content.textContent = `${tabs[0].innerHTML} content`;
  })
});

