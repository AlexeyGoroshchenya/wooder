/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_multilang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/multilang */ \"./modules/multilang.js\");\n/* harmony import */ var _modules_orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/orientation */ \"./modules/orientation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__.burger)();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll)();\r\n(0,_modules_multilang__WEBPACK_IMPORTED_MODULE_2__.multilang)();\r\n(0,_modules_orientation__WEBPACK_IMPORTED_MODULE_3__.orientation)()\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst burger = () => {\r\n\r\n    const menu = document.querySelector('.menu-header__list')\r\n    // const openedMenu = document.querySelector('.menu-header__list-active')\r\n\r\n    // let coordX = null;\r\n\r\n    const moveMenu = () => {\r\n        menu.classList.toggle('menu-header__list-active')\r\n    }\r\n\r\n    if (_helpers__WEBPACK_IMPORTED_MODULE_0__.isMobile.any()) {\r\n\r\n        let navMenu = document.querySelector('.navigation-header__list')\r\n\r\n        let copyNavMenu = navMenu.cloneNode(true);\r\n\r\n        document.querySelector('.menu-header__list').prepend(copyNavMenu);\r\n\r\n        navMenu.remove()\r\n\r\n\r\n\r\n\r\n        document.querySelectorAll('.navigation-header__link-desktop').forEach((link) => {\r\n            link.classList.remove('navigation-header__link-desktop')\r\n            link.classList.add('menu-header__link')\r\n        })\r\n\r\n        document.querySelector('.navigation-header__list').classList.add('menu-header__linkbox')\r\n        document.querySelector('.navigation-header__list-desktop').classList.remove('navigation-header__list-desktop')\r\n\r\n\r\n\r\n\r\n    }\r\n\r\n\r\n    document.body.addEventListener('click', (e) => {\r\n\r\n\r\n        if (document.querySelector('.menu-header__list-active')) {\r\n\r\n            if (e.target.closest('.menu-header__link') || !e.target.closest('.menu-header__list') ) {\r\n                e.preventDefault()\r\n                moveMenu()\r\n            }\r\n\r\n\r\n        } else  {\r\n            if (e.target.closest('.menu-header')) {\r\n                        moveMenu()\r\n                    }\r\n        }\r\n\r\n\r\n    })\r\n\r\n    // document.addEventListener('pointerdown', (e) => {\r\n    //     if (e.target.closest('.menu-header__list')) {\r\n    //         coordX = e.clientX;\r\n    //     }\r\n\r\n\r\n    // }, false)\r\n\r\n    // document.addEventListener('pointermove', (e) => {\r\n\r\n\r\n\r\n    //     if (!coordX) return\r\n\r\n    //     if (e.target.closest('.menu-header__list')) {\r\n    //         let touchEnd = e.clientX;\r\n\r\n    //         if (touchEnd < coordX) {\r\n    //             moveMenu()\r\n    //         }\r\n\r\n    //         coordX = null;\r\n    //     }\r\n\r\n\r\n    // }, false)\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/database.js":
/*!*****************************!*\
  !*** ./modules/database.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\nconst db = [\r\n    {\r\n        name: \"menu\",\r\n        en: \"menu\",\r\n        ru: \"меню\",\r\n\r\n    },\r\n    {\r\n        name: \"home\",\r\n        en: \"home\",\r\n        ru: \"домой\",\r\n\r\n    },\r\n    {\r\n        name: \"products\",\r\n        en: \"products\",\r\n        ru: \"продукты\",\r\n\r\n    },\r\n    {\r\n        name: \"about\",\r\n        en: \"about\",\r\n        ru: \"о нас\",\r\n\r\n    },\r\n    {\r\n        name: \"payment\",\r\n        en: \"Payment\",\r\n        ru: \"оплата\",\r\n\r\n    },\r\n    {\r\n        name: \"delivery\",\r\n        en: \"Delivery\",\r\n        ru: \"доставка\",\r\n\r\n    },\r\n    {\r\n        name: \"contacts\",\r\n        en: \"contacts\",\r\n        ru: \"контакты\",\r\n\r\n    },\r\n    {\r\n        name: \"learn\",\r\n        en: \"learn more\",\r\n        ru: \"узнать больше\",\r\n\r\n    },\r\n    {\r\n        name: \"furniture\",\r\n        en: \"Furniture\",\r\n        ru: \"Фурнитура\",\r\n\r\n    },\r\n    {\r\n        name: \"furniture-text\",\r\n        en: \"Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating new pieces made of reclaimed barnwood\",\r\n        ru: \"Wooder использует материалы, которые в противном случае остались бы выброшены, оказавшись бесполезными по своему первоначальному назначению. Создавая новые предметы из досок старого амбара\",\r\n\r\n    },\r\n    {\r\n        name: \"decor\",\r\n        en: \"Decor\",\r\n        ru: \"Декор\",\r\n\r\n    },\r\n    {\r\n        name: \"decor-text\",\r\n        en: \"We make all types of wooden decor as per design given by Architect,Interior designer, contractor which is suitable your premises.\",\r\n        ru: \"Мы изготавливаем все виды деревянного декора по проекту архитектора, дизайнера интерьеров, подрядчика, подходящего для вашего помещения\",\r\n\r\n    },\r\n    {\r\n        name: \"quality\",\r\n        en: \"Wooder – is quality\",\r\n        ru: \"Wooder – это качество\",\r\n\r\n    },\r\n    {\r\n        name: \"quality-text\",\r\n        en: \"We create unique design objects made of rare wood, specially under the order. Look at the short video about our work.\",\r\n        ru: \"Мы создаем уникальные дизайнерские объекты из ценных пород дерева специально под заказ. Посмотрите короткое видео о нашей работе.\",\r\n\r\n    },\r\n\r\n    {\r\n        name: \"quality-1\",\r\n        en: \"Innovative Design\",\r\n        ru: \"Инновационный дизайн\",\r\n\r\n    },\r\n    {\r\n        name: \"quality-2\",\r\n        en: \"High-level Skills\",\r\n        ru: \"Высочайший уровень навыков\",\r\n\r\n    },\r\n    {\r\n        name: \"quality-3\",\r\n        en: \"Quality Products\",\r\n        ru: \"Качественные продукты\",\r\n\r\n    },\r\n    {\r\n        name: \"video\",\r\n        en: \"we Do the design of any complexity\",\r\n        ru: \"Делаем дизайн любой сложности\",\r\n\r\n    },\r\n    {\r\n        name: \"video-text\",\r\n        en: \"This is a team of professionals that make the furniture and wood décor high standard. Creating modern designs. Adhering to the global quality standards. And we are doing work with love.\",\r\n        ru: \"Это команда профессионалов, которая делает мебель и декор из дерева на высоком уровне. Создание современных дизайнов. Соблюдение мировых стандартов качества. И мы делаем работу с любовью.\",\r\n\r\n    },\r\n    {\r\n        name: \"video-btn\",\r\n        en: \"watch video\",\r\n        ru: \"смотреть видео\",\r\n\r\n    },\r\n    {\r\n        name: \"about-us\",\r\n        en: \"About us\",\r\n        ru: \"О нас\",\r\n\r\n    },\r\n    {\r\n        name: \"about-text\",\r\n        en: \"We are a team of professionals in the wood processing and the creation of wooden furniture of the highest class\",\r\n        ru: \"Мы команда профессионалов в области обработки древесины и создания деревянной мебели высочайшего класса\",\r\n\r\n    },\r\n\r\n\r\n\r\n\r\n]\n\n//# sourceURL=webpack:///./modules/database.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\nconst isMobile = {\r\n    Android: function () {\r\n        return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n        return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function () {\r\n        return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n        return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n        return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n        return (\r\n            isMobile.Android()\r\n            || isMobile.BlackBerry()\r\n            || isMobile.iOS()\r\n            || isMobile.Opera()\r\n            || isMobile.Windows()\r\n        );\r\n    }\r\n}             // если isMobile.any() возвращает true пользователь пришел с мобильного устройства\r\n\r\nconst blockBody = () => {\r\n    function calcScroll() {\r\n        let scrollWidth = 0;\r\n        let scrollHeight = Math.max(\r\n            document.body.scrollHeight, document.documentElement.scrollHeight,\r\n            document.body.offsetHeight, document.documentElement.offsetHeight,\r\n            document.body.clientHeight, document.documentElement.clientHeight\r\n        );\r\n\r\n        if (scrollHeight > document.documentElement.clientHeight) {\r\n            let div = document.createElement('div');\r\n            div.style.width = '100px';\r\n            div.style.height = '100px';\r\n            div.style.overflowY = 'scroll';\r\n            div.style.visibility = 'hidden';\r\n            document.body.appendChild(div);\r\n            scrollWidth = (div.offsetWidth - div.clientWidth);\r\n            div.remove();\r\n        }\r\n        return scrollWidth;\r\n    }\r\n\r\n    document.body.style.paddingRight = `${calcScroll()}px`;\r\n    document.body.style.overflow = 'hidden'\r\n\r\n\r\n}\r\n\r\nconst unblockBody = () => {\r\n    document.body.style.paddingRight = '0';\r\n    document.body.style.overflow = 'auto';\r\n\r\n}\r\n\r\nconst openModal = (elem, className) => {\r\n    if (elem) {\r\n        elem.style.display = 'flex';\r\n        blockBody();\r\n\r\n        setTimeout(() => {\r\n            elem.classList.remove(className);\r\n        }, 300)\r\n    }\r\n}\r\n\r\nconst closeModal = (elem, className) => {\r\n    if (elem) {\r\n        unblockBody();\r\n\r\n        elem.classList.add(className);\r\n        setTimeout(() => {\r\n            elem.style.display = 'none';\r\n        }, 300)\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/multilang.js":
/*!******************************!*\
  !*** ./modules/multilang.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"multilang\": () => (/* binding */ multilang)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ \"./modules/database.js\");\n\r\n\r\nconst multilang = () => {\r\n    const langSelect = document.querySelector('.header__language')\r\n    const langElems = document.querySelectorAll('[data-lang]')\r\n\r\n    let selectedLanguage = ''\r\n\r\n    const changeLanguagePack = () => {\r\n        let textToRender = ''\r\n\r\n        if (selectedLanguage === 'RU') {\r\n            langElems.forEach((elem) => {\r\n                let textToTranslate = elem.dataset.lang\r\n\r\n                _database__WEBPACK_IMPORTED_MODULE_0__.db.forEach((item) => {\r\n                    if (item.name == textToTranslate) {\r\n                        textToRender = item.ru\r\n                    }\r\n                })\r\n                elem.textContent = textToRender\r\n            })\r\n        } else if (selectedLanguage === 'EN') {\r\n            langElems.forEach((elem) => {\r\n                let textToTranslate = elem.dataset.lang\r\n\r\n                _database__WEBPACK_IMPORTED_MODULE_0__.db.forEach((item) => {\r\n                    if (item.name == textToTranslate) {\r\n                        textToRender = item.en\r\n                    }\r\n                })\r\n                elem.textContent = textToRender\r\n            })\r\n        }\r\n\r\n    }\r\n\r\n    const changeOption = () => {\r\n\r\n        langSelect.querySelectorAll('option').forEach((option) => {\r\n            if (option.id !== selectedLanguage && option.hasAttribute('selected')) {\r\n                option.removeAttribute('selected')\r\n            }\r\n            if (option.id === selectedLanguage) {\r\n                option.setAttribute('selected', 'selected')\r\n            }\r\n        })\r\n\r\n    }\r\n\r\n    if (localStorage.getItem('lang')) {\r\n        selectedLanguage = localStorage.getItem('lang');\r\n        changeLanguagePack()\r\n        changeOption()\r\n\r\n\r\n    } else {\r\n\r\n        localStorage.setItem('lang', langSelect.value)\r\n        selectedLanguage = localStorage.getItem('lang');\r\n    }\r\n\r\n\r\n\r\n\r\n    langSelect.addEventListener('change', () => {\r\n\r\n\r\n        localStorage.setItem('lang', langSelect.value)\r\n        selectedLanguage = localStorage.getItem('lang');\r\n\r\n\r\n        changeLanguagePack()\r\n        changeOption()\r\n\r\n\r\n\r\n    })\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/multilang.js?");

/***/ }),

/***/ "./modules/orientation.js":
/*!********************************!*\
  !*** ./modules/orientation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"orientation\": () => (/* binding */ orientation)\n/* harmony export */ });\nconst orientation = () => {\r\n\r\n    const changeBackground = () => {\r\n\r\n\r\n        if ((window.screen.width > 992) && (window.screen.width < 1950)) {\r\n\r\n\r\n            if ((window.screen.height > (window.screen.width * 0.95)) || (window.screen.height < (window.screen.width / 2))) {\r\n\r\n                document.querySelector('.cover').style.backgroundSize = \"cover\"\r\n\r\n            } else {\r\n                document.querySelector('.cover').style.backgroundSize = \"contain\"\r\n            }\r\n\r\n\r\n\r\n\r\n        }\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n    window.addEventListener(\"orientationchange\", function () {\r\n\r\n        changeBackground()\r\n\r\n\r\n    }, false);\r\n\r\n    changeBackground()\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/orientation.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst scroll = () => {\r\n\r\n    //const btnScrollUp = document.querySelector('.arrow')\r\n    // const borderBtnLine = (document.querySelector('.popular').offsetTop);\r\n\r\n    const hiddenContentBlocks = document.querySelectorAll('.hidden')\r\n    let scrollTextActivationBorders = []\r\n\r\n    const moveBtn = (str) => {\r\n        if (str === 'hide') {\r\n            btnScrollUp.classList.remove('arrow-active');\r\n        } else if (str === 'show') {\r\n            btnScrollUp.classList.add('arrow-active');\r\n        }\r\n    }\r\n\r\n    const goTo = (target) => {\r\n\r\n        const linkTargetName = target.getAttribute('href').replace('#', '')\r\n        const linkTarget = document.getElementById(linkTargetName)\r\n        let headerHeight = 90\r\n\r\n        if (window.screen.width < 768) { headerHeight = 50 }\r\n\r\n        if (linkTarget) {\r\n\r\n\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n\r\n                    let count = scrollY - (scrollY - (linkTarget.offsetTop - headerHeight)) * progress\r\n\r\n                    window.scrollTo({\r\n                        top: count,\r\n                    })\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    const getScrollTextActivationBorders = () => {\r\n\r\n        let documentHeigth = document.body.scrollHeight\r\n        let viewportHeigth = document.body.offsetHeight\r\n\r\n        hiddenContentBlocks.forEach(el => {\r\n\r\n            let elemBorder = el.getBoundingClientRect().top + scrollY - viewportHeigth / 2\r\n\r\n            let scrollBorder = (elemBorder < documentHeigth - viewportHeigth) ? elemBorder : (documentHeigth - viewportHeigth - viewportHeigth / 2);\r\n\r\n            scrollTextActivationBorders.push(scrollBorder)\r\n        })\r\n        setTimeout(() => {\r\n            if (scrollY > 0) {\r\n                window.scrollTo({\r\n                    top: 0,\r\n                    behavior: \"smooth\",\r\n                });\r\n            }\r\n\r\n        }, 1000)\r\n\r\n    }\r\n\r\n    const showHiddenElems = () => {\r\n        if (scrollY >= scrollTextActivationBorders[0]) {\r\n            document.querySelector('.hidden').classList.remove('hidden')\r\n            scrollTextActivationBorders.shift()\r\n        }\r\n    }\r\n\r\n    getScrollTextActivationBorders()\r\n\r\n    document.body.addEventListener('click', (e) => {\r\n\r\n\r\n        /*if (e.target.closest('.arrow')) {\r\n            e.preventDefault()\r\n            goTo(btnScrollUp, 'top')\r\n        }*/\r\n\r\n        if (e.target.closest('.navigation-header__link')) {\r\n\r\n            e.preventDefault()\r\n            goTo(e.target)\r\n\r\n\r\n        }\r\n\r\n        if (e.target.closest('.scroll-cover__body')) {\r\n            goTo(document.querySelector('.products-link'))\r\n        }\r\n\r\n        if (e.target.closest('.header__title')) {\r\n            goTo(document.querySelector('.home-link'))\r\n        }\r\n\r\n\r\n    })\r\n\r\n    document.addEventListener('scroll', function (e) {\r\n\r\n\r\n        if (document.querySelectorAll('.hidden')) {\r\n            showHiddenElems()\r\n\r\n        }\r\n\r\n        /* if (scrollY >= borderBtnLine) {\r\n             moveBtn('show')\r\n         } else {\r\n             moveBtn('hide')\r\n         }\r\n         */\r\n    });\r\n}\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;