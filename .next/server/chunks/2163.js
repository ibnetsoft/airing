"use strict";
exports.id = 2163;
exports.ids = [2163];
exports.modules = {

/***/ 9272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Download = ({ style ="4" , rtl  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `download section-padding style-5 ${style === "4" ? "bg-light" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-9",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `section-head text-center ${style === "4" ? "style-4" : ""}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "mb-20",
                                        children: [
                                            " ",
                                            rtl ? "قم بالوصول إلى إمكانات عملك اليوم وابحث عن فرصة لتحقيق" : "Access your business potentials today & find opportunity for ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    rtl ? "نجاح أكبر" : "bigger success",
                                                    style === "5" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/assets/img/header/head5_line.png",
                                                                alt: "",
                                                                className: "head-line"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/assets/img/header/head5_pen.png",
                                                                alt: "",
                                                                className: "head-pen"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "butns mt-70",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: rtl ? "/rtl-page-contact" : "/page-contact-app",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `btn rounded-pill fw-bold ${style === "4" ? "bg-blue4 text-white" : "blue5-3Dbutn hover-blue2 sm-butn mx-1"}`,
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                    children: rtl ? "ابدأ مشروعاً الان" : "Start A Project Now"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: rtl ? "/rtl-page-about" : "/page-about-app",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `btn rounded-pill fw-bold ${style === "4" ? "bg-blue4 text-white" : "blue5-3Dbutn hover-blue2 sm-butn mx-1"}`,
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                    children: rtl ? "انظر التسعير و الخطة" : "See Pricing & Plan"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/contact_globe.svg",
                alt: "",
                className: "contact_globe"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download);


/***/ }),

/***/ 1126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Portfolio_Projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Portfolio/projects.json
const projects_namespaceObject = JSON.parse('{"filters":[{"title":"All","filter":"all"},{"title":"IT Consultation","filter":".consultation"},{"title":"Data Security","filter":".security"},{"title":"Website Development","filter":".website"},{"title":"UI/UX Design","filter":".design"},{"title":"Cloud Service","filter":".cloud"},{"title":"Game Development","filter":".development"}],"projects":[{"filter":"security consultation","image":"/assets/img/projects/prog/1.jpeg","title":"Infrastructure Upgrade","type":"IT Consultation","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Consultation","Management"]},{"filter":"design security","image":"/assets/img/projects/prog/2.png","title":"Criftocy Landing Page","type":"Website Development, UI/UX Design","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]},{"filter":"website development","image":"/assets/img/projects/prog/3.jpeg","title":"AR/VR War 1986 Game","type":"Game Developemnt","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["VR/AR","iOS & Android","Unity 2D/3D"]},{"filter":"cloud design","image":"/assets/img/projects/4.png","title":"Okpay E-Wallet Optimized","type":"SEO analysis","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["SEO Analysis","Content Strategy"]},{"filter":"website development cloud","image":"/assets/img/projects/5.png","title":"e-Commerce Dashboard","type":"website design & develoment","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]},{"filter":"design consultation","image":"/assets/img/projects/7.png","title":"Crypto Blockchain","type":"Data security","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Security","Management","Backup & Recovery"]},{"filter":"cloud design","image":"/assets/img/projects/1.png","title":"Car Rental Dashboard","type":"UI/UX Design","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["HTML/CSS","Figma"]},{"filter":"security cloud","image":"/assets/img/projects/2.png","title":"Encrypt Blockchain","type":"Data security, it consultation","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Data Security","Python","Data Backup"]},{"filter":"development consultation","image":"/assets/img/projects/6.png","title":"Robotchat AI Development","type":"machine learning","details":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["AI","Machine Learning"]}]}');
;// CONCATENATED MODULE: ./src/data/Portfolio/projects-rtl.json
const projects_rtl_namespaceObject = JSON.parse('{"filters":[{"title":"الكل","filter":"all"},{"title":"استشارات تكنولوجيا المعلومات","filter":".consultation"},{"title":"أمن المعلومات","filter":".security"},{"title":"تطوير الموقع","filter":".website"},{"title":"UI/UX تصميم","filter":".design"},{"title":"الخدمات السحابية","filter":".cloud"},{"title":"برمجة الالعاب","filter":".development"}],"projects":[{"filter":"security consultation","image":"/assets/img/projects/prog/1.jpeg","title":"ترقية البنية التحتية ","type":"استشارات تكنولوجيا المعلومات","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["الاستشارات","إدارة"]},{"filter":"design security","image":"/assets/img/projects/prog/2.png","title":"صفحة هبوط للعملات المشفرة","type":"تطوير الموقع, UI/UX تصميم","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["ووردبريس","بي أتش بي","HTML/CSS","فيجما"]},{"filter":"website development","image":"/assets/img/projects/prog/3.jpeg","title":"لعبة AR / VR حرب 1986","type":"تطوير الالعاب","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["الواقع الافتراضى","ايفون & اندرويد","تصميم 2D/3D"]},{"filter":"cloud design","image":"/assets/img/projects/4.png","title":"Okpay المحفظة الإلكترونية الأمثل","type":"تحليل البيانات","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["تحليل البيانات","كتابة المحتوى"]},{"filter":"website development cloud","image":"/assets/img/projects/5.png","title":"لوحة تحكم للماركت","type":"تصميم وتطوير الموقع","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["ووردبريس","بي أتش بي","HTML/CSS","فيجما"]},{"filter":"design consultation","image":"/assets/img/projects/7.png","title":"تشفير Blockchain","type":"أمن المعلومات","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["حماية","إدارة","النسخ الاحتياطي والاسترداد"]},{"filter":"cloud design","image":"/assets/img/projects/1.png","title":"لوحة تحكم تاجير سيارات","type":"تصميم UI/UX","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["HTML/CSS","فيجما"]},{"filter":"security cloud","image":"/assets/img/projects/2.png","title":"تشفير Blockchain","type":"أمن المعلومات, استشارات تكنولوجيا المعلومات","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["أمن المعلومات","بايثون","استرداد البيانات"]},{"filter":"development consultation","image":"/assets/img/projects/6.png","title":"تطوير روبوتات","type":"الذكاء الاصطناعي","details":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["AI","الذكاء الاصطناعي"]}]}');
;// CONCATENATED MODULE: ./src/components/Portfolio/Projects.jsx





const Projects = ({ style ="4" , rtl  })=>{
    const projectsData = rtl ? projects_rtl_namespaceObject : projects_namespaceObject;
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            if (!mixitup) return;
            mixitup(".portfolio-projects");
        }, 0);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `portfolio-projects section-padding pt-50 style-1 ${style === "5" ? "" : "bg-white"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `section-head text-center style-${style} ${style === "5" ? "mb-60" : "mb-40"}`,
                    children: [
                        style === "4" && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: "title_small",
                            children: "portfolio"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "" : "Our",
                                "  ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        " ",
                                        rtl ? "مشاريعنا" : "Projects",
                                        " "
                                    ]
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: rtl ? "لدينا فريق من ذوي الخبرة من موظفي الإنتاج والتفتيش لضمان الجودة." : "We have an experienced team of production and inspection personnel to ensure quality."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "controls",
                    children: projectsData.filters.map((filter, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "control",
                            "data-filter": filter.filter,
                            children: filter.title
                        }, i))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "portfolio style-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row mix-container",
                                children: projectsData.projects.map((project, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `col-lg-4 mix ${project.filter}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `portfolio-card ${i !== projects_namespaceObject.projects.length - 1 ? "mb-50" : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: project.image,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: rtl ? "/rtl-page-single-project" : "/page-single-project-5",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: project.title
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            className: "d-block color-main text-uppercase",
                                                            children: project.type
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text",
                                                            children: project.details
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "tags",
                                                            children: project.tags.map((tag, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "me-1",
                                                                    children: tag
                                                                }, i))
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, i))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: `btn rounded-pill fw-bold ${style === "5" ? "mt-30 sm-butn hover-blue2 blue5-3Dbutn" : "me-4 text-white bg-blue4"}`,
                                target: "_blank",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                    children: [
                                        rtl ? "مشاهدة المزيد" : "Show More",
                                        " (24)"
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Portfolio_Projects = (Projects);


/***/ })

};
;