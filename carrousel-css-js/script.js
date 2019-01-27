let slideNumber = 1;

function previous(e) {
    e.preventDefault();
    slideNumber = Math.max(slideNumber - 1, 1);
    window.location.hash = `#slide-${slideNumber}-left`;
}

function next(e) {
    e.preventDefault();
    slideNumber = Math.min(slideNumber + 1, 5);
    window.location.hash = `#slide-${slideNumber}-right`;
}
