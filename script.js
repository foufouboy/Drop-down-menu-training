Array.from(document
    .querySelectorAll(".main-menu > li"))
    .map(e => {
        e.addEventListener("click", (e) => {

            if (document.querySelector(".active-submenu") &&
                document.querySelector(".active-submenu") !== e.target) return;
            // lot of querySelector. can be reduced

            e.target.classList.contains("active-submenu") ?
                e.target.classList.remove("active-submenu") :
                e.target.classList.add("active-submenu");
        });
    });
