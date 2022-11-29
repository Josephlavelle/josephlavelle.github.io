window.addEventListener("scroll", (event) => {
    event.preventDefault();
    let scroll = this.scrollY;
    console.log(scroll)
    localStorage.setItem("scroll-pos", scroll)
    return scroll;
});
window.addEventListener("load", () => {
    console.log("ahead")
    const pos = localStorage.getItem('scroll-pos');
    scrollTo(0, pos);
});