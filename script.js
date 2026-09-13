const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");

menuButton.addEventListener("click", function () {

```
const isOpen = menuPanel.classList.toggle("open");

menuButton.classList.toggle("active", isOpen);

menuButton.setAttribute(
    "aria-expanded",
    isOpen ? "true" : "false"
);
```

});

/* Close menu when a navigation link is clicked */

const menuLinks = document.querySelectorAll(".menu-links a");

menuLinks.forEach(function (link) {

```
link.addEventListener("click", function () {

    menuPanel.classList.remove("open");
    menuButton.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

});
```

});

/* Close menu when clicking outside it */

document.addEventListener("click", function (event) {

```
const clickedInsideMenu =
    menuPanel.contains(event.target);

const clickedButton =
    menuButton.contains(event.target);

if (!clickedInsideMenu && !clickedButton) {

    menuPanel.classList.remove("open");
    menuButton.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

}
```

});
