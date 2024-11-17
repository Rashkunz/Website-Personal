document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    document.querySelectorAll("tbody tr").forEach((row) => {
      row.classList.remove("highlight");
      if (row.children[0].textContent.trim() === category) {
        row.classList.add("highlight");
      }
    });
  });
});

document
  .querySelector(".scroll-to-footer")
  .addEventListener("click", function () {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  });
