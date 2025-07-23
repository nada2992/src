// src/theme-loader.js
(function () {
  const theme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.add(theme);
})();
