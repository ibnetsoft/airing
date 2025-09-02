"use strict";
exports.id = 5145;
exports.ids = [5145];
exports.modules = {

/***/ 8965:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_Saas_clients_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const Clients = ({ padding , rtl  })=>{
    const { 0: loadSwiper , 1: setLoadSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setLoadSwiper(true);
        }, 0);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `clients style-5 ${padding ? "section-padding" : "pb-100"}`,
        "data-scroll-index": "2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-head text-center mb-40 style-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "mb-20",
                        children: [
                            rtl ? "موثوق بنا من قبل آلاف" : "Trusted By Thoudsands",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: rtl ? "العملاء" : "Business"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: rtl ? "أكثر من 15000 شركة تثق وتختار Iteck" : "More than 15,000 companies trust and choose Iteck"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clients-slider5",
                        children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            className: "swiper-container",
                            spaceBetween: 0,
                            centeredSlides: true,
                            slidesPerView: 6,
                            speed: 6000,
                            autoplay: {
                                delay: 1,
                                disableOnInteraction: true
                            },
                            loop: true,
                            allowTouchMove: false,
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
                                    slidesPerView: 4
                                },
                                1200: {
                                    slidesPerView: 6
                                }
                            },
                            children: _data_Saas_clients_json__WEBPACK_IMPORTED_MODULE_4__/* .row1.map */ .u.map((client, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: client,
                                            alt: ""
                                        })
                                    })
                                }, i))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "clients-slider5",
                        dir: "rtl",
                        children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            className: "swiper-container",
                            spaceBetween: 0,
                            centeredSlides: true,
                            slidesPerView: 6,
                            speed: 6000,
                            autoplay: {
                                delay: 1,
                                disableOnInteraction: true
                            },
                            loop: true,
                            allowTouchMove: false,
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
                                    slidesPerView: 4
                                },
                                1200: {
                                    slidesPerView: 6
                                }
                            },
                            children: _data_Saas_clients_json__WEBPACK_IMPORTED_MODULE_4__/* .row2.map */ .B.map((client, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: client,
                                            alt: ""
                                        })
                                    })
                                }, i))
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_Community)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Saas/community.json
const community_namespaceObject = JSON.parse('[{"img":"/assets/img/icons/code3d.png","title":"Front-End Friendly"},{"img":"/assets/img/icons/price3d.png","title":"Affordable Price"},{"img":"/assets/img/icons/message3d.png","title":"Affordable Price"}]');
;// CONCATENATED MODULE: ./src/data/Saas/community-rtl.json
const community_rtl_namespaceObject = JSON.parse('[{"img":"/assets/img/icons/code3d.png","title":"برمجة متناسقة"},{"img":"/assets/img/icons/price3d.png","title":"سعر مناسب"},{"img":"/assets/img/icons/message3d.png","title":"خدمة عملاء"}]');
;// CONCATENATED MODULE: ./src/components/Saas/Community.jsx



const Community = ({ rtl  })=>{
    const communityData = rtl ? community_rtl_namespaceObject : community_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "community pt-40 style-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head text-center mb-40 style-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "لماذا" : "Top",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: rtl ? "نحن" : "Reasons"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: rtl ? "توحيد بيانات عملك في لوحة تحكم بسيطة واحدة للتجارة الإلكترونية" : "Unify your business data in one simple ecommerce dashboard"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content rounded-pill",
                    children: communityData.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "commun-card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: item.img,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "inf",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: item.title
                                    })
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Saas_Community = (Community);


/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = JSON.parse('{"u":["/assets/img/logos/7.png","/assets/img/logos/8.png","/assets/img/logos/9.png","/assets/img/logos/10.png","/assets/img/logos/11.png","/assets/img/logos/12.png"],"B":["/assets/img/logos/13.png","/assets/img/logos/14.png","/assets/img/logos/15.png","/assets/img/logos/16.png","/assets/img/logos/17.png","/assets/img/logos/9.png"]}');

/***/ })

};
;