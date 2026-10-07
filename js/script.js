/* =========================================================
   NTISHOR WEB ENTERPRISE
   Main JavaScript File
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("active");

            if (navigation.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation"
                );
            } else {
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            }

        });


        /* Close menu after clicking a navigation link */

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll("[data-current-year]");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       SIMPLE SCROLL EFFECT
       ===================================================== */

    const header =
        document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 4px 20px rgba(16, 24, 40, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* =====================================================
       BUTTON / LINK FEEDBACK
       ===================================================== */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.add("clicked");

            setTimeout(function () {

                button.classList.remove("clicked");

            }, 300);

        });

    });

});