"use strict";
exports.id = 4912;
exports.ids = [4912];
exports.modules = {

/***/ 4912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_Saas_services_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5461);
/* harmony import */ var _data_Saas_services_rtl_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Services = ({ rtl  })=>{
    const servicesData = rtl ? _data_Saas_services_rtl_json__WEBPACK_IMPORTED_MODULE_4__ : _data_Saas_services_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services section-padding bg-white pb-50 style-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "section-head text-center mb-60 style-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "mb-20",
                                    children: [
                                        rtl ? "اهم" : "Our Top",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: rtl ? "خدماتنا" : "Services"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: rtl ? "تعتبر Iteck لوحة تحكم مصدر قوة عندما يتعلق الأمر بقائمة الميزات. يضمن ذلك حصولك على كل الوظائف التي تحتاجها لبناء سوقك وتشغيله وتوسيعه" : "Iteck Dashboard is a powerhouse when it comes to the feature list. This ensures you have every functionality you need to build, run, and expand your marketplace"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "services-slider position-relative style-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        className: "swiper-container",
                        slidesPerView: 6,
                        centeredSlides: true,
                        spaceBetween: 0,
                        speed: 1000,
                        pagination: false,
                        navigation: false,
                        mousewheel: false,
                        keyboard: true,
                        autoplay: {
                            delay: 4000
                        },
                        loop: true,
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            480: {
                                slidesPerView: 1
                            },
                            787: {
                                slidesPerView: 2
                            },
                            991: {
                                slidesPerView: 4
                            },
                            1200: {
                                slidesPerView: 6
                            }
                        },
                        children: servicesData.map((service, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/page-services-5",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "service-card style-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: service.img,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: service.info
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text",
                                                        children: service.text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, index))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5882:
/***/ ((module) => {

module.exports = JSON.parse('[{"img":"/assets/img/icons/serv_icons/16.png","info":"استراتيجية المحتوى","text":"يمكنك تقديم الإجابات التي يحاول عملاؤك المحتملون تقديمها وتقديم اجابات لها"},{"img":"/assets/img/icons/serv_icons/15.png","info":"اعلانات جوجل وفيسبوك","text":"احصل على المزيد من المشاهدات على الويب والمزيد من العملاء والمزيد من الظهور عبر الإنترنت باستخدام خدمات قوية لتحسين محركات البحث."},{"img":"/assets/img/icons/serv_icons/14.png","info":"التسويق عبر البريد الإلكتروني","text":"يجب أن يبهر موقع الويب الخاص بك زوار موقعك في غضون ثوانٍ قليلة"},{"img":"/assets/img/icons/serv_icons/17.png","info":"وسائل التواصل الاجتماعي","text":"احصل على المزيد من المشاهدات على الموقع ، والمزيد من العملاء لقناتك الاجتماعية"},{"img":"/assets/img/icons/serv_icons/18.png","info":"تصميم وتطوير الموقع","text":"يجب أن يبهر موقع الويب الخاص بك زوار موقعك في غضون ثوانٍ قليلة. إذا كان يعمل ببطء ، إذا شعرت أنه قديم"},{"img":"/assets/img/icons/serv_icons/19.png","info":"انواع مختلفه للتسويق الالكترونى","text":"تحسين موقع الويب الخاص بك على نتائج جوجل باستخدام PPC للتسويق الألكترونى"},{"img":"/assets/img/icons/serv_icons/20.png","info":"اعلانات القدرة الشرائيه","text":"تحسين موقع الويب الخاص بك على نتائج جوجل باستخدام PPC للتسويق الألكترونى"}]');

/***/ }),

/***/ 5461:
/***/ ((module) => {

module.exports = JSON.parse('[{"img":"/assets/img/icons/serv_icons/16.png","info":"Content Strategy","text":"You can provide the answers that your potential customers are trying to find, so you can become the industry."},{"img":"/assets/img/icons/serv_icons/15.png","info":"Google/FB Ads","text":"Get more website traffic, more customers & more online visibility with powerful SEO services."},{"img":"/assets/img/icons/serv_icons/14.png","info":"Email Marketing","text":"Your website has to impress your visitors within just a few seconds"},{"img":"/assets/img/icons/serv_icons/17.png","info":"Social Media","text":"Get more website traffic, more customers for your social chanel"},{"img":"/assets/img/icons/serv_icons/18.png","info":"Website Design and Development","text":"Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated"},{"img":"/assets/img/icons/serv_icons/19.png","info":"TVC/ Viral Clip","text":"Optimized your website on google result with PPC Marketing"},{"img":"/assets/img/icons/serv_icons/20.png","info":"PPC Ads","text":"Optimized your website on google result with PPC Marketing"}]');

/***/ })

};
;