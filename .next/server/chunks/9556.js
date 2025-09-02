"use strict";
exports.id = 9556;
exports.ids = [9556];
exports.modules = {

/***/ 7592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SingleProject_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/SingleProject/about.json
const about_namespaceObject = JSON.parse('[{"title":"client","description":{"part1":"Micosoft Holding Ltd, ","part2":" Australia Area"}},{"title":"services","description":"IT Consultation, UI/UX Design, Cloud Service"},{"title":"date","description":"Feburary 25th, 2022"},{"title":"team","description":{"part1":"Logan Cee - Designer","part2":"Martin Moussa - iOS Developer"}}]');
;// CONCATENATED MODULE: ./src/data/SingleProject/about-rtl.json
const about_rtl_namespaceObject = JSON.parse('[{"title":"عميل","description":{"part1":"مايكروسوفت القابضة المحدودة, ","part2":" منطقة أستراليا"}},{"title":"خدمات","description":{"part1":"استشارات تكنولوجيا المعلومات ،","part2":" تصميم UI / UX ، الخدمة السحابية"}},{"title":"تاريخ","description":"فبراير 25th, 2022"},{"title":"الفريق","description":{"part1":"لوجان سي - مصمم","part2":"مارتن موسى - مطور iOS"}}]');
;// CONCATENATED MODULE: ./src/components/SingleProject/About.jsx



const About = ({ style ="4" , rtl  })=>{
    const metadata = rtl ? about_rtl_namespaceObject : about_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about-app style-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "color-000 mb-50",
                        children: [
                            "Notero - ",
                            rtl ? "تطبيق الملاحظات السهل" : "Easy Notes App"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about-cards border-bottom brd-gray",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: metadata.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "about-card mb-30 mb-lg-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "d-block",
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: typeof item.description === "string" ? item.description : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        item.description.part1,
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " ",
                                                        item.description.part2
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img-content pt-70 pb-70 border-bottom brd-gray overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-7",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/img/single_project/2mobs.png",
                                                alt: "",
                                                className: "main-img"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/img/single_project/bubbls.png",
                                                alt: "",
                                                className: "bubbls"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/img/single_project/circle.png",
                                                alt: "",
                                                className: "circle"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info mt-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "lh-4",
                                                children: rtl ? "حافظ على تركيزك وإنتاجيتك مع مساحة ملاحظات نظيفة وخالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ." : "Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: `color-blue${style} mt-60`,
                                                children: "https://example.domain"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const SingleProject_About = (About);


/***/ }),

/***/ 3017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const About = ({ style ="4" , rtl  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "about-app style-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "img-content pt-70 pb-100 border-bottom brd-gray",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info mt-30",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "lh-4",
                                            children: rtl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    "فريق في ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: `color-blue${style}`,
                                                        children: "@iteck"
                                                    }),
                                                    " هو مكرس بشكل لا يصدق ، وواسع المعرفة ، ومفيد. كان المنتج النهائي جميلًا ويستحق كل بنس. أوصي بشدة بمختبرات."
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    "“The team at ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: `color-blue${style}`,
                                                        children: "@iteck"
                                                    }),
                                                    " is incredibly dedicated, knowledgeable, and helpful. The finished product was beautiful, and worth every penny. I would absolutely recommend Moonex Labs.”"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            className: "mt-60 color-666 fs-12px text-uppercase",
                                            children: [
                                                "- ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                    className: "color-000",
                                                    children: [
                                                        rtl ? "جون هنري " : "Jhon henry",
                                                        " "
                                                    ]
                                                }),
                                                rtl ? ", المدير التنفيذي في Notero JSC -" : ", ceo at notero jsc -",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "share mt-100",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "color-999 fs-12px text-uppercase d-block",
                                                    children: rtl ? "شارك هذا المشروع" : "share this project"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: `social-icon hover-blue${style} me-2`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: `social-icon hover-blue${style} me-2`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: `social-icon hover-blue${style} me-2`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-pinterest"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: `social-icon hover-blue${style} me-2`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-goodreads-g"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: `social-icon hover-blue${style}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-linkedin-in"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "next-prog section-padding",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "color-999 text-uppercase fw-light",
                                children: rtl ? "المشروع التالى" : "next project"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "color-000 fs-1 fw-bold mt-20",
                                children: rtl ? "Criftocy صفحة هبوط" : "Criftocy Landing Page"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 8293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SingleProject_Challenge)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/SingleProject/challenge.json
const challenge_namespaceObject = JSON.parse('{"challenge":["Develop easy-to-find and easy-to-navigate mobile friendly website","Showcase each type of content: interactive books, animated stories and picture books, audio stories. <br /> Create an experience people want to share with others","Persuade to download app and subscribe"],"feats":["Create & Save your notes with multi-media","Complete note editor with rich text options","Web Clipper Extension","Automatically sync in real time"]}');
;// CONCATENATED MODULE: ./src/data/SingleProject/challenge-rtl.json
const challenge_rtl_namespaceObject = JSON.parse('{"challenge":["تطوير موقع ويب سهل العثور عليه وسهل التنقل فيه","اعرض كل نوع من أنواع المحتوى: الكتب التفاعلية وقصص الرسوم المتحركة والكتب المصورة والقصص الصوتية. أنشئ تجربة يرغب الأشخاص في مشاركتها مع الآخرين","اقنع بتنزيل التطبيق والاشتراك"],"feats":["إنشاء وحفظ الملاحظات الخاصة بك مع الوسائط المتعددة","محرر الملاحظات الكامل مع خيارات النص المنسق","ملحق Web Clipper","مزامنة تلقائية في الوقت الحقيقي"]}');
;// CONCATENATED MODULE: ./src/components/SingleProject/Challenge.jsx



const Challenge = ({ style ="4" , rtl  })=>{
    const data = rtl ? challenge_rtl_namespaceObject : challenge_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "challenge section-padding style-5 overflow-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `section-head style-${style}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    children: [
                                        rtl ? "" : "Our",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: rtl ? "التحدى" : "Challenge"
                                        }),
                                        " "
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "inf",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text color-666 mb-20",
                                        children: rtl ? 'قم بإنشاء موقع ويب غير تقليدي ولكنه سهل الاستخدام - مبتكر ، بتصميم نظيف وبسيط يتواصل ويعرض محتوى الوسائط المتعددة. الموقع الذي ينشر الرسالة: "إنها قصص حبك.”' : "Create an unconventional yet user-friendly website – innovative, with a clean & simple design that communicates and showcases multi-media content. Site that spreads the message: ”It’s stories your love.”"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "color-000",
                                        children: data.challenge.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "d-flex mb-10",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bi bi-dot fs-6 me-2"
                                                    }),
                                                    " ",
                                                    item
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "imgs mt-60 mb-100",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/single_project/ch_1.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img img-cover rounded-3 overflow-hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/single_project/ch_2.png",
                                        alt: ""
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `section-head style-${style}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    children: [
                                        rtl ? "الحلول" : "Solution",
                                        " & ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: rtl ? "النتائج" : "Result"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "inf",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text color-666 mb-10",
                                        children: rtl ? "كان نهجنا هو تقديم الموقع كمنصة تحرير مرئية مع ميزات ربع سنوية بناءً على الأحداث والمناسبات التي تركز عليها العلامة التجارية. سيتم تمييز كل تركيز ربع سنوي بواسطة البطل والعلامات المخصصة التي تقوم بتصفية المحتوى." : "Our approach was to present the site as a visual editorial platform with quarterly features based on events and occasions the brand was focused on. Each quarterly focus would be marked by the hero and custom tags that filter content."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text color-666 mb-20",
                                        children: rtl ? "هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم ، لكن الغالبية تعرضت للتغيير بشكل ما ، عن طريق إدخال بعض الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق إلى حد ما." : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "color-000 mt-50",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "row",
                                            children: data.feats.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: `d-flex ${index !== challenge_namespaceObject.length - 1 ? "mb-20" : ""} fw-bold`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: `icon-20 d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-blue${style} text-white flex-shrink-0 me-3`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "bi bi-check"
                                                                })
                                                            }),
                                                            item
                                                        ]
                                                    })
                                                }, index))
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const SingleProject_Challenge = (Challenge);


/***/ }),

/***/ 8486:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_SingleProject_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5694);
/* harmony import */ var _data_SingleProject_projects_rtl_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
const Projects = ({ style ="4" , rtl  })=>{
    const projects = rtl ? _data_SingleProject_projects_rtl_json__WEBPACK_IMPORTED_MODULE_5__ : _data_SingleProject_projects_json__WEBPACK_IMPORTED_MODULE_4__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "projects style-6 p-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content section-padding rounded-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `section-head text-center mb-60 style-${style}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    rtl ? "المشاريع" : "Related",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: rtl ? "ذات الصلة" : "Projects"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: rtl ? "لدينا فريق من ذوي الخبرة من موظفي الإنتاج والتفتيش لضمان الجودة" : "We have an experienced team of production and inspection personnel to ensure quality."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "slider-3items slider-style-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                className: "swiper-container pb-0",
                                slidesPerView: 3,
                                spaceBetween: 0,
                                speed: 1000,
                                pagination: {
                                    el: ".slider-3items .swiper-pagination",
                                    clickable: true
                                },
                                navigation: {
                                    nextEl: ".slider-3items .swiper-button-next",
                                    prevEl: ".slider-3items .swiper-button-prev"
                                },
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
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    }
                                },
                                children: projects.map((project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "project-card style-6",
                                            style: {
                                                direction: rtl ? "rtl" : "ltr"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: project.image,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: rtl ? "/rtl-page-single-project" : "/page-single-project-5",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: project.title
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                            className: "color-blue6",
                                                            children: project.type.map((type, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "#",
                                                                            children: type
                                                                        }),
                                                                        i !== project.type.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: " &\xa0"
                                                                        })
                                                                    ]
                                                                }, i))
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text",
                                                            children: project.text
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "tags",
                                                            children: project.tags.map((tag, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "me-1",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: tag
                                                                    })
                                                                }, i))
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-button-next"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-button-prev"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7564:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/projects/4.png","title":"اوك باي المحفظة الإلكترونية ","type":["تحليل البيانات"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["تحليل البيانات","استراتيجية المحتوى"]},{"image":"/assets/img/projects/5.png","title":"لوحه تحكم للماركت","type":["تصميم","برمجة"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["وردبريس","بي اتش بي","HTML/CSS","فيجما"]},{"image":"/assets/img/projects/7.png","title":"انستجرام","type":["مواقع التواصل الاجتماعي"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["تواصل اجتماعى","انستجرام","متابعين"]},{"image":"/assets/img/projects/5.png","title":"لوحه تحكم للماركت","type":["تصميم","برمجة"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["وردبريس","بي اتش بي","HTML/CSS","فيجما"]}]');

/***/ }),

/***/ 5694:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/projects/4.png","title":"Okpay E-Wallet Optimized","type":["SEO analysis"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["SEO Analysis","Content Strategy"]},{"image":"/assets/img/projects/5.png","title":"e-Commerce Dashboard","type":["website design","develoment"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]},{"image":"/assets/img/projects/7.png","title":"MLB Store Instagram","type":["social media"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Social","Instagram","Followers"]},{"image":"/assets/img/projects/5.png","title":"e-Commerce Dashboard","type":["website design","develoment"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]}]');

/***/ })

};
;