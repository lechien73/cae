(function() {

    const currentWindow = window.location.href;

    const root = document.getElementsByClassName("file-navigation")[0];

    if (root && currentWindow.includes("github.com")) {

        const buttonContainer = root.appendChild(document.createElement("div"));
        buttonContainer.setAttribute("class", "empty-icon position-relative ml-1 float-right");

        buttonContainer.innerHTML = `<a class='btn btn-primary' style='background-color: #7f3f98; color: #fff;' href='https://app.codeanywhere.com/#${currentWindow}' target='_blank'>Codeanywhere</a>`;
        console.log("Codeanywhere extension active");
    }

})();