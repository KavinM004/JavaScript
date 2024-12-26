const button = document.getElementById('toggle');
const element = document.getElementById('container');
button.addEventListener('click', function(){
    element.classList.toggle('dark');
    const isDarktheme = element.classList.contains('dark');
    localStorage.setItem('Theme', isDarktheme? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', function(){
    const themeValue = localStorage.getItem('Theme');
    if(themeValue == 'dark'){
        const element = document.getElementById("container");
        element.classList.add('dark');
    }
});