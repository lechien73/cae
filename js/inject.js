const baseURL = "https://app.codeanywhere.com/";

if (window.location.href.includes("github.com")) {
    window.open(baseURL + "#" + window.location.href);
} else {
    window.open(baseURL);
}
