"use strict";
exports.id = 5398;
exports.ids = [5398];
exports.modules = {

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ scrollToSection)
/* harmony export */ });
function scrollToSection(event) {
    event.preventDefault();
    const section = document.querySelector('[data-scroll-index="' + event.target.dataset.scrollNav + '"]');
    if (section) {
        setTimeout(()=>{
            section.scrollIntoView({
                behavior: "smooth"
            });
        }, 300);
    }
};


/***/ }),

/***/ 5398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5144);



const OnePageNav = ({ navbarRef , rtl  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const sections = document.querySelectorAll("[data-scroll-index]");
        window.addEventListener("scroll", ()=>{
            sections.forEach((section)=>{
                const index = section.getAttribute("data-scroll-index");
                const offset = section.offsetTop;
                const height = section.offsetHeight;
                const scroll = window.scrollY;
                if (scroll + 200 > offset && scroll + 200 < offset + height) {
                    document.querySelector(`[data-scroll-nav="${index}"]`)?.classList?.add("active");
                } else {
                    document.querySelector(`[data-scroll-nav="${index}"]`)?.classList?.remove("active");
                }
            });
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-light style-4",
        id: "main-nav",
        ref: navbarRef,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "navbar-brand",
                    href: "#",
                    "data-scroll-nav": "0",
                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/img/logo_lgr.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "navbar-nav m-auto mb-2 mb-lg-0 text-uppercase",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link",
                                        href: "#0",
                                        "data-scroll-nav": "1",
                                        onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                        children: rtl ? "خدماتنا" : "Featured"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link",
                                        href: "#0",
                                        "data-scroll-nav": "2",
                                        onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                        children: rtl ? "من نحن" : "About"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link",
                                        href: "#0",
                                        "data-scroll-nav": "3",
                                        onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                        children: rtl ? "تطبيقات شائعة" : "Popular Apps"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link",
                                        href: "#0",
                                        "data-scroll-nav": "4",
                                        onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                        children: rtl ? "شاشات التطبيق" : "screens"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link",
                                        href: "#0",
                                        "data-scroll-nav": "5",
                                        onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                        children: rtl ? "اراء العملاء" : "Testimonials"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link",
                                        href: "#0",
                                        "data-scroll-nav": "6",
                                        onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                        children: rtl ? "خطه الاسعار" : "Pricing Plan"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "nav-link",
                                        href: "#0",
                                        "data-scroll-nav": "7",
                                        onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                        children: rtl ? "اراء العملاء" : "faq"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "nav-side",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "d-flex align-items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#0",
                                    className: "btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold",
                                    "data-scroll-nav": "8",
                                    onClick: _common_scrollToSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            rtl ? "تحميل" : "download",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "bi bi-download ms-1"
                                            }),
                                            " "
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnePageNav);


/***/ })

};
;