/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js"
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/theme.js */ "./src/js/components/theme.js");
/* harmony import */ var _components_copy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/copy.js */ "./src/js/components/copy.js");
/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form.js */ "./src/js/components/form.js");
/* harmony import */ var _components_cookie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cookie.js */ "./src/js/components/cookie.js");
/* harmony import */ var _components_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filter.js */ "./src/js/components/filter.js");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider.js */ "./src/js/components/slider.js");
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/burger.js */ "./src/js/components/burger.js");
console.log('components');








/***/ },

/***/ "./src/js/_vars.js"
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  cookieBlock: document.querySelector('.cookie-block'),
  cookieBlockBtn: document.querySelector('.cookie-block__btn')
});

/***/ },

/***/ "./src/js/components/burger.js"
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll.js */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll.js */ "./src/js/functions/enable-scroll.js");


(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  burger?.addEventListener('click', e => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ },

/***/ "./src/js/components/cookie.js"
/*!*************************************!*\
  !*** ./src/js/components/cookie.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");


if (!js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('cookie-block')) {
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].cookieBlock.classList.add('cookie-block--visible');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].cookieBlockBtn.addEventListener('click', e => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set('cookie-block', 'true', {
      expires: 31
    });
    _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].cookieBlock.classList.remove('cookie-block--visible');
  });
}

/***/ },

/***/ "./src/js/components/copy.js"
/*!***********************************!*\
  !*** ./src/js/components/copy.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const copyButtons = document.querySelectorAll('.copy');
const copyText = document.querySelectorAll('.contacts__name');
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const text = document.getElementById(targetId).textContent;
    navigator.clipboard.writeText(text);
  });
});
copyText.forEach(text => {
  text.addEventListener('click', () => {
    const textContent = text.textContent;
    navigator.clipboard.writeText(textContent);
  });
});

/***/ },

/***/ "./src/js/components/filter.js"
/*!*************************************!*\
  !*** ./src/js/components/filter.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const buttons = document.querySelectorAll('#portfolio-filter [data-filter]');
const emptyMessage = document.getElementById('portfolio-empty');
const items = document.querySelectorAll('.portfolio__item');
const list = document.getElementById('portfolio-filter');
const listSecond = document.getElementById('portfolio-filter-second');
const listSecondList = document.getElementById('portfolio-filter-second-list');
const listSecondBtn = document.getElementById('portfolio-filter-second-btn');

// Мобильные кнопки
const secondButtons = listSecondList ? listSecondList.querySelectorAll('[data-filter]') : [];

// Фильтрация карточек
function filterItems(filter) {
  let visibleItems = 0;
  items.forEach(item => {
    const categories = item.dataset.category ? item.dataset.category.split(' ') : [];
    if (filter === 'all' || categories.includes(filter)) {
      item.style.display = '';
      visibleItems++;
    } else {
      item.style.display = 'none';
    }
  });

  // Показываем сообщение, если работ нет
  if (emptyMessage) {
    emptyMessage.style.display = visibleItems === 0 ? 'block' : 'none';
  }
}

// ==============================
// ДЕСКТОПНЫЙ ФИЛЬТР
// ==============================

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    filterItems(filter);
  });
});

// ==============================
// МОБИЛЬНЫЙ ФИЛЬТР
// ==============================

if (listSecondBtn && listSecondList) {
  // Открытие / закрытие списка
  listSecondBtn.addEventListener('click', () => {
    listSecondList.classList.toggle('active');
  });

  // Выбор фильтра
  secondButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Меняем текст главной кнопки
      listSecondBtn.textContent = button.textContent;

      // Закрываем список
      listSecondList.classList.remove('active');

      // Убираем active
      secondButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Добавляем active выбранной кнопке
      button.classList.add('active');

      // Фильтруем
      filterItems(filter);
    });
  });
}

// ==============================
// АДАПТИВНОСТЬ
// ==============================

const updateResponsive = () => {
  const width = window.innerWidth;
  if (width <= 1024) {
    if (list) {
      list.style.display = 'none';
    }
    if (listSecond) {
      listSecond.style.display = 'block';
    }
  } else {
    if (listSecond) {
      listSecond.style.display = 'none';
    }
    if (list) {
      list.style.display = 'flex';
    }
    if (listSecondList) {
      listSecondList.classList.remove('active');
    }
  }
};

// Первый запуск
updateResponsive();

// Изменение размера окна
window.addEventListener('resize', updateResponsive);

/***/ },

/***/ "./src/js/components/form.js"
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const form = document.querySelector('#contact-form');

// Проверяем, существует ли форма на странице
if (form) {
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const button = form.querySelector('button');
    button.disabled = true;
    button.textContent = 'Отправка...';
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xbgraprv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });
      if (response.ok) {
        button.textContent = 'Сообщение отправлено ✓';
        form.reset();
      } else {
        button.textContent = 'Ошибка отправки';
      }
    } catch (error) {
      button.textContent = 'Ошибка отправки';
    }
    setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Отправить сообщение';
    }, 3000);
  });
}

/***/ },

/***/ "./src/js/components/slider.js"
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const sliders = document.querySelectorAll('.projects__cart');
sliders.forEach(slider => {
  const track = slider.querySelector('.portfolio__track');
  const slides = slider.querySelectorAll('.portfolio__slide');
  const prevButton = slider.querySelector('.portfolio__arrow--prev');
  const nextButton = slider.querySelector('.portfolio__arrow--next');
  const dots = slider.querySelectorAll('.portfolio__dot');
  let currentSlide = 0;

  // Свайп
  let touchStartX = 0;
  let touchEndX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });
  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchStartX - touchEndX;

    // Влево
    if (swipeDistance > 50) {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      updateSlider();
    }

    // Вправо
    if (swipeDistance < -50) {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      updateSlider();
    }
  });
  function updateSlider() {
    const sliderElement = slider.querySelector('.portfolio__slider');
    const sliderWidth = sliderElement.offsetWidth;
    const activeSlide = slides[currentSlide];
    const slideLeft = activeSlide.offsetLeft;
    const slideWidth = activeSlide.offsetWidth;
    const slideCenter = slideLeft + slideWidth / 2;
    const sliderCenter = sliderWidth / 2;
    const translateX = sliderCenter - slideCenter;
    track.style.transform = `translateX(${translateX}px)`;
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    updateSlider();
  });
  prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    updateSlider();
  });
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });
  window.addEventListener('resize', updateSlider);
  updateSlider();
});

/***/ },

/***/ "./src/js/components/theme.js"
/*!************************************!*\
  !*** ./src/js/components/theme.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.dataset.theme = savedTheme;
}
themeToggle.addEventListener('click', () => {
  const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});

/***/ },

/***/ "./src/js/functions/disable-scroll.js"
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'auto'; // Было 'none' - меняем на 'auto'
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ },

/***/ "./src/js/functions/enable-scroll.js"
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ },

/***/ "./node_modules/js-cookie/dist/js.cookie.mjs"
/*!***************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.mjs ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ api)
/* harmony export */ });
/*! js-cookie v3.0.8 | MIT */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (key === '__proto__') continue
      target[key] = source[key];
    }
  }
  return target
}

var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};

function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get(name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        if (!(found in jar)) jar[found] = converter.read(value, found);
        if (name === found) {
          break
        }
      } catch (_e) {
        // Do nothing...
      }
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set: set,
      get: get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });




/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map