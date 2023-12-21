import { animate } from "./helpers";

export const scroll = () => {

    //const btnScrollUp = document.querySelector('.arrow')
    // const borderBtnLine = (document.querySelector('.popular').offsetTop);

    const hiddenContentBlocks = document.querySelectorAll('.hidden')
    let scrollTextActivationBorders = []

    const moveBtn = (str) => {
        if (str === 'hide') {
            btnScrollUp.classList.remove('arrow-active');
        } else if (str === 'show') {
            btnScrollUp.classList.add('arrow-active');
        }
    }

    const goTo = (target) => {

        const linkTargetName = target.getAttribute('href').replace('#', '')
        const linkTarget = document.getElementById(linkTargetName)
        let headerHeight = 90

        if (window.screen.width < 768) { headerHeight = 50 }

        if (linkTarget) {


            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {

                    let count = scrollY - (scrollY - (linkTarget.offsetTop - headerHeight)) * progress

                    window.scrollTo({
                        top: count,
                    })
                }
            });
        }
    }

    const getScrollTextActivationBorders = () => {

        let documentHeigth = document.body.scrollHeight
        let viewportHeigth = document.body.offsetHeight

        hiddenContentBlocks.forEach(el => {

            let elemBorder = el.getBoundingClientRect().top + scrollY - viewportHeigth / 2

            let scrollBorder = (elemBorder < documentHeigth - viewportHeigth) ? elemBorder : (documentHeigth - viewportHeigth - viewportHeigth / 2 - 50);

            scrollTextActivationBorders.push(scrollBorder)
        })
        setTimeout(() => {
            if (scrollY > 0) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }

        }, 1000)

    }

    const showHiddenElems = () => {
        if (scrollY >= scrollTextActivationBorders[0]) {
            document.querySelector('.hidden').classList.remove('hidden')
            scrollTextActivationBorders.shift()
        }
    }

    getScrollTextActivationBorders()

    document.body.addEventListener('click', (e) => {


        /*if (e.target.closest('.arrow')) {
            e.preventDefault()
            goTo(btnScrollUp, 'top')
        }*/

        if (e.target.closest('.navigation-header__link')) {

            e.preventDefault()
            goTo(e.target)


        }

        if (e.target.closest('.scroll-cover__body')) {
            goTo(document.querySelector('.products-link'))
        }

        if (e.target.closest('.header__title')) {
            goTo(document.querySelector('.home-link'))
        }


    })

    document.addEventListener('scroll', function (e) {


        if (document.querySelectorAll('.hidden')) {
            showHiddenElems()

        }

        /* if (scrollY >= borderBtnLine) {
             moveBtn('show')
         } else {
             moveBtn('hide')
         }
         */
    });
}