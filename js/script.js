//toggle class active
const navbarNav =document.querySelector('.navbar-nav');

//ketika menu di click
document.querySelector('#hum-menu').onclick =()=>{
   navbarNav.classList.toggle('active'); 
};


//klik diluar sidebar untuk menghilankan nav
const humberger =document.querySelector('#hum-menu');

document.addEventListener('click', function(e){
    if (!humberger.contains(e.target)&&!navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        
    }
});