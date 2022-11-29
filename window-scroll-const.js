var scrollNum = document.documentElement.scrollY || document.body.scrollY;

window.addEventListener('scroll', () => {
    console.log(scrollNum)
});
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }*/