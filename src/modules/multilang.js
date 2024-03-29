import { db } from "./database"

export const multilang = () => {
    const langSelect = document.querySelector('.header__language')
    const langElems = document.querySelectorAll('[data-lang]')

    let selectedLanguage = ''

    const changeLanguagePack = () => {
        let textToRender = ''

        if (selectedLanguage === 'RU') {
            langElems.forEach((elem) => {
                let textToTranslate = elem.dataset.lang

                db.forEach((item) => {
                    if (item.name == textToTranslate) {
                        textToRender = item.ru
                    }
                })
                elem.textContent = textToRender
            })
        } else if (selectedLanguage === 'EN') {
            langElems.forEach((elem) => {
                let textToTranslate = elem.dataset.lang

                db.forEach((item) => {
                    if (item.name == textToTranslate) {
                        textToRender = item.en
                    }
                })
                elem.textContent = textToRender
            })
        }

    }

    const changeOption = () => {

        langSelect.querySelectorAll('option').forEach((option) => {
            if (option.id !== selectedLanguage && option.hasAttribute('selected')) {
                option.removeAttribute('selected')
            }
            if (option.id === selectedLanguage) {
                option.setAttribute('selected', 'selected')
            }
        })

    }

    if (localStorage.getItem('lang')) {
        selectedLanguage = localStorage.getItem('lang');
        changeLanguagePack()
        changeOption()


    } else {

        localStorage.setItem('lang', langSelect.value)
        selectedLanguage = localStorage.getItem('lang');
    }




    langSelect.addEventListener('change', () => {


        localStorage.setItem('lang', langSelect.value)
        selectedLanguage = localStorage.getItem('lang');


        changeLanguagePack()
        changeOption()



    })

}


