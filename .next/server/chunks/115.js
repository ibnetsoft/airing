"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_Clients)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/App/clients.json
const clients_namespaceObject = JSON.parse('["/assets/img/logos/1.png","/assets/img/logos/2.png","/assets/img/logos/3.png","/assets/img/logos/4.png","/assets/img/logos/5.png","/assets/img/logos/6.png"]');
;// CONCATENATED MODULE: ./src/components/App/Clients.jsx


const Clients = ({ rtl  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "clients style-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "fw-bold mb-60",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "color-blue4",
                                children: rtl ? "25K+ تحميل" : "25K+ Installation"
                            }),
                            " ",
                            rtl ? "واستخدام الخدمات" : "and Featured on"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "client-logos pb-70",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row align-items-center",
                        children: clients_namespaceObject.map((client, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6 col-lg-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "img d-block",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: client,
                                        alt: ""
                                    })
                                })
                            }, index))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const App_Clients = (Clients);


/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_Community)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/App/community.json
const community_namespaceObject = JSON.parse('[{"icon":"fab fa-github","title":"Github","description":"Open Source & Commnit Code"},{"icon":"fab fa-twitter","title":"Twitter","description":"Latest News & Update"},{"icon":"fab fa-telegram","title":"Telegram","description":"Chanel for Community"}]');
;// CONCATENATED MODULE: ./src/data/App/community-rtl.json
const community_rtl_namespaceObject = JSON.parse('[{"icon":"fab fa-github","title":"جيت هوب","description":"المصدر المفتوح ورمز الاتصال"},{"icon":"fab fa-twitter","title":"تويتر","description":"آخر الأخبار والتحديثات"},{"icon":"fab fa-telegram","title":"تليجرام","description":"قناه للمجتمع"}]');
;// CONCATENATED MODULE: ./src/components/App/Community.jsx



const Community = ({ rtl  })=>{
    const data = rtl ? community_rtl_namespaceObject : community_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "community section-padding pt-0 style-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head text-center style-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: "title_small",
                            children: rtl ? "مجتمع نوتيرو" : "Notero Community"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-30",
                            children: [
                                rtl ? "انضم إلى" : "Join Into",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: rtl ? "مركزنا" : "Our Hub"
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "#",
                            className: "commun-card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: item.icon
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "inf",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: item.description
                                        })
                                    ]
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const App_Community = (Community);


/***/ }),

/***/ 2580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_FAQ)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/App/faq.json
const faq_namespaceObject = JSON.parse('[{"id":1,"question":"How Benefit That I Got When Choose Basic Plan?","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":2,"question":"How Do I Organize My Notes?","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":3,"question":"How Long For A Standard Project","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":4,"question":"How About Data Security & NDA Agreement","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":5,"question":"How Does Notero Store My Data?","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":6,"question":"Does Notero Support Storing Data on iCloud?","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":7,"question":"How Do I Change My Email or Password?","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":8,"question":"Can My Premium License Be Used For All Devices?","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}},{"id":9,"question":"Can I Lock My Note App?","answer":{"part1":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain ","part2":" mutual understanding, gain customer trust to offer appropriate advice"}}]');
;// CONCATENATED MODULE: ./src/data/App/faq-rtl.json
const faq_rtl_namespaceObject = JSON.parse('[{"id":1,"question":"ما هي الفائدة التي حصلت عليها عند اختيار الخطة الأساسية؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":2,"question":"كيف يمكنني تنظيم ملاحظاتي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":3,"question":"كم من الوقت لمشروع قياسي","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":4,"question":"ماذا عن اتفاقية أمان البيانات واتفاقية عدم الإفشاء","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":5,"question":"كيف تقوم نيترو بتخزين بياناتي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":6,"question":"لا يدعم نيترو تخزين البيانات على iCloud؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":7,"question":"كيف يمكنني تغيير البريد الإلكتروني أو كلمة المرور الخاصة بي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":8,"question":"هل يمكن استخدام ترخيص Premium الخاص بي لجميع الأجهزة؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":9,"question":"هل يمكنني قفل تطبيق ملاحظتي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"}]');
;// CONCATENATED MODULE: ./src/components/App/FAQ.jsx



const FAQ = ({ rtl  })=>{
    const data = rtl ? faq_rtl_namespaceObject : faq_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "faq section-padding style-4 pt-50",
        "data-scroll-index": "7",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head text-center style-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: "title_small",
                            children: rtl ? "أسئلة شائعة" : "Frequently Asked Question"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-30",
                            children: [
                                rtl ? "بحاجة إلى" : "Need A",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: rtl ? "دعم ؟" : "Support?"
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "faq style-3 style-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "accordion",
                            id: "accordionSt4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row gx-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-6",
                                        children: data.map((item, index)=>index <= 3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `accordion-item ${index === 3 ? "" : "border-bottom"} rounded-0`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "accordion-header",
                                                        id: `heading${item.id + 10}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "accordion-button collapsed rounded-0 py-4",
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": `#collapse${item.id + 10}`,
                                                            "aria-expanded": "true",
                                                            "aria-controls": `collapse${item.id + 10}`,
                                                            children: item.question
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: `collapse${item.id + 10}`,
                                                        className: "accordion-collapse collapse rounded-0",
                                                        "aria-labelledby": `heading${item.id + 10}`,
                                                        "data-bs-parent": "#accordionSt4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "accordion-body",
                                                            children: rtl ? item.answer : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                children: [
                                                                    item.answer.part1,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " ",
                                                                    item.answer.part2
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-6",
                                        children: data.map((item, index)=>index > 3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `accordion-item ${index === faq_namespaceObject.length - 1 ? "" : "border-bottom"} rounded-0`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "accordion-header",
                                                        id: `heading${item.id + 10}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: `accordion-button ${index !== 4 ? "collapsed" : ""} rounded-0 py-4`,
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": `#collapse${item.id + 10}`,
                                                            "aria-expanded": "true",
                                                            "aria-controls": `collapse${item.id + 10}`,
                                                            children: item.question
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: `collapse${item.id + 10}`,
                                                        className: `accordion-collapse collapse rounded-0 ${index !== 4 ? "" : "show"}`,
                                                        "aria-labelledby": `heading${item.id + 10}`,
                                                        "data-bs-parent": "#accordionSt4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "accordion-body",
                                                            children: rtl ? item.answer : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                children: [
                                                                    item.answer.part1,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " ",
                                                                    item.answer.part2
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const App_FAQ = (FAQ);


/***/ }),

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_Features)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/App/features.json
const features_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/fe1.png","title":{"text1":"Notes Powerful","text2":"and Security"}},{"image":"/assets/img/icons/fe2.png","title":{"text1":"Easy Sort, Classify","text2":"and Search"}},{"image":"/assets/img/icons/fe3.png","title":{"text1":"Collaboration and","text2":"Share"},"new":true},{"image":"/assets/img/icons/fe4.png","title":{"text1":"Quick Note In","text2":"Everywhere"}},{"image":"/assets/img/icons/fe5.png","title":{"text1":"Write and Draw","text2":"on Ipad"}}]');
;// CONCATENATED MODULE: ./src/data/App/features-rtl.json
const features_rtl_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/fe1.png","title":{"text1":"خدمه متميزه","text2":"وأمنة"}},{"image":"/assets/img/icons/fe2.png","title":{"text1":"سهل التنسيق والاستخدام ","text2":"والبحث"}},{"image":"/assets/img/icons/fe3.png","title":{"text1":"شارك","text2":"التطبيق"},"new":true},{"image":"/assets/img/icons/fe4.png","title":{"text1":"ملاحظة سريعة في ","text2":"في كل مكان"}},{"image":"/assets/img/icons/fe5.png","title":{"text1":"أرسم واكتب ","text2":"على الايباد"}}]');
;// CONCATENATED MODULE: ./src/components/App/Features.jsx



const Features = ({ rtl  })=>{
    const featuresData = rtl ? features_rtl_namespaceObject : features_namespaceObject;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "features pt-70 pb-70 style-4",
        "data-scroll-index": "1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-head text-center style-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: "title_small bg-white",
                                children: rtl ? "نوتيرو - تطبيق مذكرة سهل الاستخدام" : "Notero - Easy Notes App"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "mb-70",
                                children: [
                                    rtl ? "خدمات" : "Awesome",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            " ",
                                            rtl ? "رائعة" : "Features",
                                            " "
                                        ]
                                    }),
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content",
                        children: featuresData.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "features-card",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "icon img-contain",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: feature.image,
                                                alt: ""
                                            }),
                                            feature.new && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "label icon-40 alert-success text-success rounded-circle small text-uppercase fw-bold",
                                                children: rtl ? "جديد" : "new"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                        children: [
                                            feature.title.text1,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " ",
                                            feature.title.text2
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/feat_circle.png",
                alt: "",
                className: "img-circle"
            })
        ]
    });
};
/* harmony default export */ const App_Features = (Features);


/***/ }),

/***/ 6128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);




const Header = ({ rtl  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "style-4",
        "data-scroll-index": "0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gx-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                className: "mb-50 title_small",
                                                children: rtl ? "نوتيرو - تطبيق مذكرة سهل الاستخدام" : "Notero - Easy Notes App"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "احفظ" : "Note",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: rtl ? "كل شئ" : "Your Everything"
                                                    }),
                                                    " ",
                                                    rtl ? "على التطبيق" : "In One App"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text",
                                                children: [
                                                    rtl ? "لا يلزم الترميز لإجراء التخصيصات. يحتوي المُخصص المباشر" : "No coding required to make customizations. The live customizer",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    rtl ? "على كل ما تحتاجه." : "has everything you need."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center mt-50",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.apple.com/app-store",
                                                        rel: "noreferrer",
                                                        className: "btn rounded-pill bg-blue4 fw-bold text-white me-4",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fab fa-apple me-2 pe-2 border-end"
                                                                }),
                                                                rtl ? "تحميل التطبيق" : "Download App"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "https://youtu.be/pGbIOC83-So?t=21",
                                                        "data-lity": true,
                                                        className: "play-btn",
                                                        onClick: openVideo,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "icon me-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-play ms-1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                className: "small",
                                                                children: [
                                                                    rtl ? "مشاهدة" : "View",
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    rtl ? "البرومو" : "Promotion"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "mt-100 me-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-sync"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "text-uppercase",
                                                        children: rtl ? "مجانى لمده 14 يوم" : "Free 14 Days Trial"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "mt-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-credit-card"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "text-uppercase",
                                                        children: rtl ? "دفعة لمرة واحدة" : "One time payment"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/img/header/header_4.png",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/img/header/header_4_bubble.png",
                        alt: "",
                        className: "bubble"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/header_4_wave.png",
                alt: "",
                className: "wave"
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_Pricing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/App/plans.json
const plans_namespaceObject = JSON.parse('[{"title":"basic Plan","price":"Free","image":"/assets/img/icons/price_s4_1.png","description":"Free 14 days trial, you can use over 20 basic features","features":[{"icon":"far fa-sticky-note","title":"Write 5 Notes On Only iOS & Android","active":true},{"icon":"fas fa-paperclip","title":"Add Attachments, Tables, Codes and More To Your Notes","active":true},{"icon":"fas fa-lock","title":"Protect Your Notes and Notebooks With Lock","active":false},{"icon":"fas fa-undo","title":"Focus Mode and Dark Theme","active":false},{"icon":"fas fa-download","title":"Export to Text, PDF, HTML and Markdown formats","active":false}]},{"title":"premium Plan","price":"$29","image":"/assets/img/icons/price_s4_2.png","description":"Experience all premium features and only one-time payment","off":"20%","features":[{"icon":"far fa-sticky-note","title":"Write 5 Notes On Only iOS & Android","active":true},{"icon":"fas fa-paperclip","title":"Add Attachments, Tables, Codes and More To Your Notes","active":true},{"icon":"fas fa-lock","title":"Protect Your Notes and Notebooks With Lock","active":true},{"icon":"fas fa-undo","title":"Focus Mode and Dark Theme","active":true},{"icon":"fas fa-download","title":"Export to Text, PDF, HTML and Markdown formats","active":true}]}]');
;// CONCATENATED MODULE: ./src/data/App/plans-rtl.json
const plans_rtl_namespaceObject = JSON.parse('[{"title":"الخطة الأساسية","price":"مجانا","image":"/assets/img/icons/price_s4_1.png","description":"نسخة تجريبية مجانية لمدة 14 يومًا ، يمكنك استخدام أكثر من 20 ميزة أساسية","features":[{"icon":"far fa-sticky-note","title":"اكتب 5 ملاحظات على iOS و Android فقط","active":true},{"icon":"fas fa-paperclip","title":"أضف المرفقات والجداول والأكواد والمزيد إلى ملاحظاتك","active":true},{"icon":"fas fa-lock","title":"حماية الملاحظات وأجهزة الكمبيوتر المحمولة الخاصة بك مع قفل","active":false},{"icon":"fas fa-undo","title":"وضع التركيز والمظهر الداكن","active":false},{"icon":"fas fa-download","title":"تصدير إلى تنسيقات Text و PDF و HTML و Markdown","active":false}]},{"title":"خطة متميزة","price":"$29","image":"/assets/img/icons/price_s4_2.png","description":"جرب جميع الميزات المتميزة والدفع لمرة واحدة فقط","off":"20%","features":[{"icon":"far fa-sticky-note","title":"اكتب 5 ملاحظات على iOS و Android فقط","active":true},{"icon":"fas fa-paperclip","title":"أضف المرفقات والجداول والأكواد والمزيد إلى ملاحظاتك","active":true},{"icon":"fas fa-lock","title":"حماية الملاحظات وأجهزة الكمبيوتر المحمولة الخاصة بك مع قفل","active":true},{"icon":"fas fa-undo","title":"وضع التركيز والمظهر الداكن","active":true},{"icon":"fas fa-download","title":"تصدير إلى تنسيقات Text و PDF و HTML و Markdown","active":true}]}]');
;// CONCATENATED MODULE: ./src/components/App/Pricing.jsx




const Pricing = ({ rtl  })=>{
    const data = rtl ? plans_rtl_namespaceObject : plans_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "pricing section-padding style-4 pb-50",
        "data-scroll-index": "6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head text-center style-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: "title_small",
                            children: rtl ? "خطة الاسعار" : "Pricing Plan"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-30",
                            children: [
                                rtl ? "ابدأ بـ" : "Start With",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        " ",
                                        rtl ? "سعر مناسب" : "Affordable Price",
                                        " "
                                    ]
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "toggle_switch d-flex align-items-center justify-content-center mb-40",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-check form-switch p-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "form-check-label",
                                        htmlFor: "flexSwitchCheckDefault",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: rtl ? "تدفع شهريا" : "Billed monthly"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "form-check-input float-none bg-blue4",
                                        type: "checkbox",
                                        id: "flexSwitchCheckDefault",
                                        defaultChecked: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "form-check-label",
                                        htmlFor: "flexSwitchCheckDefault",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: rtl ? "دفع سنوى" : "Billed annually"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row gx-0",
                            children: data.map((plan, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "price-card",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "price-header pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: plan.image,
                                                                alt: "",
                                                                className: "icon"
                                                            }),
                                                            " ",
                                                            plan.title,
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                        children: [
                                                            plan.price,
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                                children: [
                                                                    " / ",
                                                                    rtl ? "شهري" : "month"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: plan.description
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "price-body py-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        children: plan.features.map((feature, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: `d-flex align-items-center mb-3 ${feature.active ? "" : " op-3"}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                        className: "icon-30 bg-blue4 rounded-circle text-white d-inline-flex align-items-center justify-content-center me-3 flex-shrink-0",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: feature.icon
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "fw-bold",
                                                                        children: feature.title
                                                                    })
                                                                ]
                                                            }, i))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-contact-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: `btn rounded-pill ${index === 0 ? "border-blue4" : "bg-blue4"} hover-blue4 fw-bold mt-50 px-5 ${index === 0 ? "border-blue4" : "text-white"}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: rtl ? "سجل الان" : "Register Now"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            plan.off && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "off",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        plan.off,
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " ",
                                                        rtl ? "خصم" : "off"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const App_Pricing = (Pricing);


/***/ })

};
;