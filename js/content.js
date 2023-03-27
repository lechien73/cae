(function () {

    const currentWindow = window.location.href;

    if (currentWindow.includes("codeanyapp.com")) {

        const style = ".theia - icon: hover { cursor: pointer }";
        var styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);

        const icon = document.getElementById("theia:icon");

        icon.addEventListener("click", () => { window.open("https://app.codeanywhere.com", "_self") });

    } else {

        const root = document.getElementsByClassName("file-navigation")[0];

        const buttonContainer = root.appendChild(document.createElement("div"));

        buttonContainer.innerHTML = `<a class='btn btn-primary' href='https://app.codeanywhere.com/#${currentWindow}' target='_blank'>Codeanywhere</a>`;

    }

})();