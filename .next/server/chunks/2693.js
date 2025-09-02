"use strict";
exports.id = 2693;
exports.ids = [2693];
exports.modules = {

/***/ 8581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/data/App/about.json
var about = __webpack_require__(9153);
;// CONCATENATED MODULE: ./src/data/App/about-rtl.json
const about_rtl_namespaceObject = JSON.parse('{"features":[{"icon":"fas fa-tag","title":"تصفية الملاحظات باستخدام الكلمات الرئيسية المتطابقة"},{"icon":"fas fa-sync","title":"مزامنة تلقائية في الوقت الحقيقي"},{"icon":"fas fa-text-width","title":"محرر الملاحظات الكامل مع خيارات النص المنسق"}],"accordions":[{"id":1,"title":"إنشاء وحفظ الملاحظات الخاصة بك مع الوسائط المتعددة","content":"يتم دعم الصور ومقاطع الفيديو وملفات PDF والملفات الصوتية. قم بإنشاء تعبيرات رياضية ومخططات مباشرة من التطبيق. التقط صورًا باستخدام تطبيق الهاتف المحمول واحفظها في ملاحظة."},{"id":2,"title":"ملحق Web Clipper","content":"يتم دعم الصور ومقاطع الفيديو وملفات PDF والملفات الصوتية. قم بإنشاء تعبيرات رياضية ومخططات مباشرة من التطبيق. التقط صورًا باستخدام تطبيق الهاتف المحمول واحفظها في ملاحظة."},{"id":3,"title":"حماية ملاحظتك مع القفل","content":"يتم دعم الصور ومقاطع الفيديو وملفات PDF والملفات الصوتية. قم بإنشاء تعبيرات رياضية ومخططات مباشرة من التطبيق. التقط صورًا باستخدام تطبيق الهاتف المحمول واحفظها في ملاحظة."}],"thirdFeatures":[{"active":false,"title":"تصفية الملاحظات باستخدام الكلمات الرئيسية المتطابقة"},{"active":true,"title":"8 موضوعات جميلة لتختارها"},{"active":false,"title":"وفر الطاقة لجهازك"},{"active":false,"title":"من السهل التبديل بين الوضع الفاتح والداكن"}],"integrations":["/assets/img/about/intg1.png","/assets/img/about/intg5.png","/assets/img/about/intg4.png","/assets/img/about/intg3.png","/assets/img/about/intg2.png"]}');
;// CONCATENATED MODULE: ./src/components/App/About/FirstContent.jsx

const FirstContent = ({ features , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content frs-content",
        id: "about",
        "data-scroll-index": "2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img mb-30 mb-lg-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/ipad.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "title_small",
                                                children: rtl ? "نوتيرو - تطبيق مذكرة سهل الاستخدام" : "Notero - Easy Notes App"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "تطبيق لاصحاب" : "The Notero For",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            " ",
                                                            rtl ? "الابداع" : "Creatives",
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text mb-40",
                                        children: [
                                            rtl && "حافظ على تركيزك وإنتاجيتك مع مساحة  خالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ.",
                                            !rtl && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    "Stay focused and productive with a clean and clutter-free note ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: features.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "d-flex align-items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: item.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold",
                                                        children: item.title
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "page-contact-5.html",
                                        className: "btn rounded-pill bg-blue4 fw-bold text-white mt-50",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: " Free Register "
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_lines.png",
                alt: "",
                className: "lines"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_bubble.png",
                alt: "",
                className: "bubble"
            })
        ]
    });
};
/* harmony default export */ const About_FirstContent = (FirstContent);

;// CONCATENATED MODULE: ./src/components/App/About/SecondContent.jsx

const SecondContent = ({ accordions , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content sec-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5 order-2 order-lg-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "title_small",
                                                children: rtl ? "إدارة أفضل للملاحظات" : "Better Note Management"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "ملاحظاتك" : "Your Notes",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            " ",
                                                            rtl ? "في امان" : "Security",
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text mb-40",
                                        children: rtl ? "يتزامن تلقائيًا عبر جميع أجهزتك. يمكنك أيضًا الوصول إلى الملاحظات وكتابتها بدون اتصال بالإنترنت" : "Automatically syncs across all your devices. You can also access and write notes without internet connection."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "faq style-3 style-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "accordion",
                                            id: "accordionExample",
                                            children: accordions.map((accordion, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: `heading${accordion.id}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: `accordion-button ${index !== 0 ? "collapsed" : ""}`,
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": `#collapse${accordion.id}`,
                                                                "aria-expanded": "true",
                                                                "aria-controls": `collapse${accordion.id}`,
                                                                children: accordion.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            id: `collapse${accordion.id}`,
                                                            className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
                                                            "aria-labelledby": `heading${accordion.id}`,
                                                            "data-bs-parent": "#accordionExample",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "accordion-body",
                                                                children: accordion.content
                                                            })
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://chrome.google.com/webstore/category/extensions",
                                        rel: "noreferrer",
                                        className: "btn btn-img mt-40 rounded-pill",
                                        target: "_blank",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon img-contain",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/img/icons/chrome_icon.png",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inf",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: rtl ? "متاح في" : "Available in the"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        children: rtl ? "متجر كروم الالكتروني" : "Chrome Web Store"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 order-0 order-lg-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img mb-30 mb-lg-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/2mobiles.png",
                                    alt: ""
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_bubble2.png",
                alt: "",
                className: "bubble2"
            })
        ]
    });
};
/* harmony default export */ const About_SecondContent = (SecondContent);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/App/About/ThirdContent.jsx


const ThirdContent = ({ features , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content trd-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img mb-30 mb-lg-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s4_img3.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "title_small",
                                                children: rtl ? "ثيمات جميلة" : "Beautiful Themes"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "ركز أكثر مع" : "Focus More With",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: rtl ? "المظهر الداكن" : "Dark Theme"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text mb-40",
                                        children: rtl ? "قم بتطبيق سمات نوتيرو الأنيقة حسب ذوقك. تعمل السمات المظلمة بشكل ممتاز لأولئك الذين يفضلون الوضع الخالي من الإلهاء." : "Apply Notero’s elegant themes to your taste. Dark themes work excellently for those who prefer distraction-free mode."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: features.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `d-flex align-items-center ${feature.active ? "" : "op-4"}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bi bi-dot fs-2 me-2 lh-1 color-blue4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold",
                                                        children: feature.title
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-services-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "btn rounded-pill bg-blue4 fw-bold text-white mt-50",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: rtl ? "اكتشف الآن" : "Discovery Now"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_bubble.png",
                alt: "",
                className: "bubble"
            })
        ]
    });
};
/* harmony default export */ const About_ThirdContent = (ThirdContent);

;// CONCATENATED MODULE: ./src/components/App/About/Integration.jsx

const Integration = ({ integrations , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "integration pt-60",
        "data-scroll-index": "3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section-head text-center style-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "title_small",
                        children: rtl ? "دفعة لمرة واحدة" : "One-Time Payment"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "mb-20",
                        children: [
                            rtl ? "متوافق مع" : "Integration With",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: rtl ? "التطبيقات الشعبية" : "Popular Apps"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: rtl ? "نوتيرو يتكامل مع التطبيقات الشعبية. تساعدك على التواصل والتعاون بسهولة" : "Notero intergrate with popular apps. Help you easy to connect and collaboration"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: integrations.map((integration, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: integration,
                                alt: "",
                                className: "mt-30"
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/intg_back.png",
                alt: "",
                className: "intg-back"
            })
        ]
    });
};
/* harmony default export */ const About_Integration = (Integration);

;// CONCATENATED MODULE: ./src/components/App/About/index.jsx







const About = ({ noFirstContent , noIntegration , noWave , rtl  })=>{
    const data = rtl ? about_rtl_namespaceObject : about;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `about ${noWave ? "" : "section-padding"} style-4`,
        children: [
            !noFirstContent && /*#__PURE__*/ jsx_runtime_.jsx(About_FirstContent, {
                features: data.features,
                rtl: rtl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About_SecondContent, {
                accordions: data.accordions,
                rtl: rtl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About_ThirdContent, {
                features: data.thirdFeatures,
                rtl: rtl
            }),
            !noIntegration && /*#__PURE__*/ jsx_runtime_.jsx(About_Integration, {
                integrations: data.integrations,
                rtl: rtl
            }),
            !noWave && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/about/about_s4_wave.png",
                        alt: "",
                        className: "top-wave"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/about/about_s4_wave.png",
                        alt: "",
                        className: "bottom-wave"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const App_About = (About);


/***/ }),

/***/ 3777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_Testimonials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
;// CONCATENATED MODULE: ./src/data/App/testimonials.json
const testimonials_namespaceObject = JSON.parse('{"numCards":[{"image":"/assets/img/icons/testi_s4_ic1.png","value":"2,5M+","type":{"text1":"Downloaded and","text2":"Installation"}},{"image":"/assets/img/icons/testi_s4_ic2.png","value":"4.8/5","stars":5,"type":"Based on 1,258 reviews"}],"testiCards":[{"userImg":"/assets/img/testimonials/user4.png","stars":5,"title":{"text1":"“You can even send emails to Evernote and gather  ","text2":" all of the things you need in a single place.”"},"author":{"name":"jurgen k.","position":"Senior Marketing","company":"Br /ator"}},{"userImg":"/assets/img/testimonials/user5.png","stars":5,"title":"“Notero - 1st my choice for notes app. Awesome”","author":{"name":"foden p.","position":"Director","company":"Ecoland Resort"}},{"userImg":"/assets/img/testimonials/user6.png","stars":5,"title":{"text1":"”.This app is seriously good. It’s simple, clean and ","text2":" a real joy to use.”"},"author":{"name":"Kerry T.","position":"Designer","company":"Teckzone Inc"}}]}');
;// CONCATENATED MODULE: ./src/data/App/testimonials-rtl.json
const testimonials_rtl_namespaceObject = JSON.parse('{"numCards":[{"image":"/assets/img/icons/testi_s4_ic1.png","value":"2,5M+","type":{"text1":"تحميل و","text2":"تثبيت"}},{"image":"/assets/img/icons/testi_s4_ic2.png","value":"4.8/5","stars":5,"type":"بناءاً على هذا العدد من التقييمات 1،258"}],"testiCards":[{"userImg":"/assets/img/testimonials/user4.png","stars":5,"title":{"text1":"“يمكنك حتى إرسال رسائل بريد إلكتروني إلى Evernote وجمع  ","text2":" كل الأشياء التي تحتاجها في مكان واحد.”"},"author":{"name":"يورجن ك.","position":" أول قسم التسويق ","company":"Brator"}},{"userImg":"/assets/img/testimonials/user5.png","stars":5,"title":"“نوتيرو - الخيار الأول الذي أختاره لتطبيق الملاحظات. رائع”","author":{"name":"فودن ص.","position":"مدير","company":"Ecoland Resort"}},{"userImg":"/assets/img/testimonials/user6.png","stars":5,"title":{"text1":"”.هذا التطبيق جيد بجدية. إنه ببساطة ، نظيف و  ","text2":" متعة حقيقية في الاستخدام.”"},"author":{"name":"Kerry T.","position":"مصمم","company":"Teckzone Inc"}}]}');
;// CONCATENATED MODULE: ./src/components/App/Testimonials.jsx






const Testimonials = ({ rtl  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const data = rtl ? testimonials_rtl_namespaceObject : testimonials_namespaceObject;
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "testimonials style-4 pt-70",
        "data-scroll-index": "5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "title_small",
                                                children: rtl ? "اراء العملاء" : "Testimonials"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "محبوب من" : "Loved From",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: rtl ? "العملاء" : "Customers"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text mb-40",
                                        children: rtl ? "أحب نوتيرو من آلاف العملاء في جميع أنحاء العالم وحصل على الثقة من الشركات الكبرى." : "Notero loved from thoudsands customer worldwide and get trusted from big companies."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "numbs",
                                        children: data.numCards.map((card, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "num-card",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon img-contain",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: card.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: card.value
                                                    }),
                                                    card.stars && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "stars",
                                                        children: Array(card.stars).fill().map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            }, i))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: typeof card.type === "string" ? card.type : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                card.type.text1,
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                " ",
                                                                card.type.text2
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex align-items-center mt-70",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.apple.com/app-store",
                                                rel: "noreferrer",
                                                className: "btn rounded-pill bg-blue4 fw-bold text-white me-4",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                    children: [
                                                        " ",
                                                        rtl ? "انظر التعليقات على متجر التطبيقات" : "See Reviews On App Store"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://youtu.be/pGbIOC83-So?t=21",
                                                className: "play-btn",
                                                onClick: openVideo,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon me-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-play ms-1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                        className: "small",
                                                        children: [
                                                            rtl ? "مشاهده" : "View",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            rtl ? "البرومو" : "Promotion"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testi-cards",
                                    children: [
                                        data.testiCards.map((card, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "client_card",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "user_img",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: card.userImg,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inf_content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "stars mb-2",
                                                                children: Array(card.stars).fill().map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    }, i))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: typeof card.title === "string" ? card.title : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                    children: [
                                                                        card.title.text1,
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        " ",
                                                                        card.title.text2
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    card.author.name,
                                                                    " ",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "text-muted",
                                                                        children: [
                                                                            " /  ",
                                                                            card.author.position,
                                                                            " ",
                                                                            rtl ? "في" : "at",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: card.author.company
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index)),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/contact_globe.svg",
                                            alt: "",
                                            className: "testi-globe"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const App_Testimonials = (Testimonials);


/***/ })

};
;