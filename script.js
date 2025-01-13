document.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

const gallery = new SimpleLightbox('.artwork-grid a', {
    captionDelay: 250,
});