function scrollToID(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}

function goToPage(page) {
    window.location = '/' + page;
}