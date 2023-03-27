(function () {

    const currentWindow = window.location.href;

    const root = document.getElementsByClassName("file-navigation")[0];
    const newRepo = document.getElementsByClassName("TableObject")[0];


    if (root) {

        const buttonContainer = root.appendChild(document.createElement("div"));
        buttonContainer.setAttribute("class", "empty-icon position-relative ml-1 float-right");

        buttonContainer.innerHTML = `<a class='btn btn-secondary' style='background-color: #7f3f98;' href='https://app.codeanywhere.com/#${currentWindow}' target='_blank'>Codeanywhere</a>`;
    } else {
        const newRepoButton = document.createElement("div");
        newRepoButton.setAttribute("class", "TableObject-item");
        newRepoButton.innerHTML = `<a class='btn btn-sm btn-primary mr-1' href='https://app.codeanywhere.com/#${currentWindow}' target='_blank'>Codeanywhere</a>`;
        newRepo.insertBefore(newRepoButton, newRepo.children[0]);
    }

})();