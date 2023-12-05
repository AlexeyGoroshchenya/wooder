import { isMobile } from './helpers';

export const burger = () => {

    const menu = document.querySelector('.menu-header__list')
    // const openedMenu = document.querySelector('.menu-header__list-active')

    // let coordX = null;

    const moveMenu = () => {
        menu.classList.toggle('menu-header__list-active')
    }

    if (isMobile.any()) {

        let navMenu = document.querySelector('.navigation-header__list')

        let copyNavMenu = navMenu.cloneNode(true);

        document.querySelector('.menu-header__list').prepend(copyNavMenu);

        navMenu.remove()




        document.querySelectorAll('.navigation-header__link-desktop').forEach((link) => {
            link.classList.remove('navigation-header__link-desktop')
            link.classList.add('menu-header__link')
        })

        document.querySelector('.navigation-header__list').classList.add('menu-header__linkbox')
        document.querySelector('.navigation-header__list-desktop').classList.remove('navigation-header__list-desktop')




    }


    document.body.addEventListener('click', (e) => {


        if (document.querySelector('.menu-header__list-active')) {

            if (e.target.closest('.menu-header__link') || !e.target.closest('.menu-header__list') ) {
                e.preventDefault()
                moveMenu()
            }


        } else  {
            if (e.target.closest('.menu-header')) {
                        moveMenu()
                    }
        }


    })

    // document.addEventListener('pointerdown', (e) => {
    //     if (e.target.closest('.menu-header__list')) {
    //         coordX = e.clientX;
    //     }


    // }, false)

    // document.addEventListener('pointermove', (e) => {



    //     if (!coordX) return

    //     if (e.target.closest('.menu-header__list')) {
    //         let touchEnd = e.clientX;

    //         if (touchEnd < coordX) {
    //             moveMenu()
    //         }

    //         coordX = null;
    //     }


    // }, false)



}