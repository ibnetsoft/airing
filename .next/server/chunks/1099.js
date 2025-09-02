"use strict";
exports.id = 1099;
exports.ids = [1099];
exports.modules = {

/***/ 1099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_App_screenshots_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Screenshots = ()=>{
    const { 0: loadSwiper , 1: setLoadSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setLoadSwiper(true);
        }, 0);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "screenshots style-4",
        "data-scroll-index": "4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "screenshots-slider style-4",
                children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    className: "swiper-container",
                    spaceBetween: 0,
                    slidesPerView: 5,
                    pagination: false,
                    navigation: false,
                    mousewheel: false,
                    keyboard: true,
                    loop: true,
                    autoplay: {
                        delay: 4000
                    },
                    speed: 1000,
                    centeredSlides: true,
                    breakpoints: {
                        0: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 2
                        },
                        787: {
                            slidesPerView: 3
                        },
                        991: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 5
                        }
                    },
                    children: _data_App_screenshots_json__WEBPACK_IMPORTED_MODULE_3__.map((screenshot, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "img",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: screenshot,
                                    alt: ""
                                })
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/screenshots/hand.png",
                alt: "",
                className: "mob-hand"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Screenshots);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6204:
/***/ ((module) => {

module.exports = JSON.parse('["/assets/img/screenshots/1.png","/assets/img/screenshots/2.png","/assets/img/screenshots/3.jpg","/assets/img/screenshots/4.png","/assets/img/screenshots/5.png"]');

/***/ })

};
;