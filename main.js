hamburgButton = document.getElementsByClassName("hamburgButton")[0];
hamburgList = document.getElementsByClassName("hamburgList")[0];

hamburgButton.addEventListener("click", function () {
  switch (hamburgList.classList.contains("hidden")) {
    case true:
      hamburgList.classList.replace("hidden", "flex");
      break;
    case false:
      hamburgList.classList.replace("flex", "hidden");
      break;
  }
});
