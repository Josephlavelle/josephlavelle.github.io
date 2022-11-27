const root = document.documentElement;

window.addEventListener('scroll', () => {
    if(window.scrollY >= 150) {
        root.style.setProperty('--moving-bg-img', '-250px');
        console.log("working");
    } else{
        root.style.setProperty('--moving-bg-img', '-150px');
        console.log("working-2");   
    }
});