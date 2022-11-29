//gets the scroll position when adjusted and saves scroll position to local storge.
window.addEventListener("scroll", (event) => {
    event.preventDefault();
    let scroll = this.scrollY;
    console.log(scroll)
    localStorage.setItem("scroll-pos", scroll)
    return scroll;
});
//when the window begins to load it will get scroll position from local storage and then move to that posotion. 
window.addEventListener("load", () => {
    console.log("ahead")
    const pos = localStorage.getItem('scroll-pos');
    scrollTo(0, pos);
});