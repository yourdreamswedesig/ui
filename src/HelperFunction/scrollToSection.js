export const scrollToSection = (id, offset = 0) => {
    const element = document.getElementById(id);
    console.log(id, offset);
    if (!element) {
        return
    };

    const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset - 100;

    window.scrollTo({
        top,
        behavior: "smooth",
    });
};