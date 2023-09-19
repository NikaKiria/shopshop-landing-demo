

const navMenuBtns = document.getElementsByClassName('elementor-widget-thhf-navigation-menu');
const mobileMenu = document.getElementById('special-mobile-menu');
const activeClass = 'special-mobile-menu-active';

console.log(navMenuBtns);

// Toggle mobile menu
for (let btn of navMenuBtns) {
    btn.addEventListener('click', function(){

        let isActive = mobileMenu.classList.contains(activeClass);
    
        if(isActive) {
            mobileMenu.classList.remove(activeClass);
        } else {
            mobileMenu.classList.add(activeClass);
        }
    
    });
}
