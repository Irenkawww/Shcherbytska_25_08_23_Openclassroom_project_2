    document.addEventListener("DOMContentLoaded", function () {
        const loaderContainer = document.querySelector(".loader-container");

        setTimeout(function () {
          loaderContainer.style.opacity = "0";
          setTimeout(function () {
            loaderContainer.style.display = "none";
          }, 300);
        }, 1000);
      });
    