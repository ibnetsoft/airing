"use strict";
exports.id = 2281;
exports.ids = [2281];
exports.modules = {

/***/ 4156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ IT_ChooseUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/CountTo/index.jsx
var components_CountTo = __webpack_require__(6187);
;// CONCATENATED MODULE: ./src/data/IT/numbers.json
const numbers_namespaceObject = [];
;// CONCATENATED MODULE: ./src/components/IT/Numbers.jsx




const Numbers = ()=>{
    const { 0: position  } = useState({
        from: 2600,
        to: 2900
    });
    return /*#__PURE__*/ _jsx("div", {
        className: "choose-numbers mt-80",
        children: /*#__PURE__*/ _jsx("div", {
            className: "row justify-content-center",
            children: /*#__PURE__*/ _jsx("div", {
                className: "col-lg-10",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: numbers.map((number, index)=>/*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "num-item",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "num",
                                        children: [
                                            /*#__PURE__*/ _jsx(CountTo, {
                                                className: "counter",
                                                from: 0,
                                                to: number.value,
                                                speed: 1500,
                                                position: position
                                            }),
                                            number.operator && /*#__PURE__*/ _jsx("span", {
                                                children: " +"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "inf",
                                        children: [
                                            number.title.part1,
                                            " ",
                                            /*#__PURE__*/ _jsx("br", {}),
                                            " ",
                                            number.title.part2
                                        ]
                                    })
                                ]
                            })
                        }, index))
                })
            })
        })
    });
};
/* harmony default export */ const IT_Numbers = ((/* unused pure expression or super */ null && (Numbers)));

;// CONCATENATED MODULE: ./src/data/IT/chooseus.json
const chooseus_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/ch1.png","title":"Affordable Price","desc":{"desc1":"We use cutting-edge AI technology to predict","desc2":"and make decisions about the future."}},{"image":"/assets/img/icons/ch2.png","title":"Top-notch Experts Consulting","desc":{"desc1":"Our top-notch Experts with much years of experience","desc2":"certail will give best solutions for your business."}},{"image":"/assets/img/icons/ch3.png","title":"Dedicated Support 24/7","desc":"AI is dedicated to customers 24/7."}]');
;// CONCATENATED MODULE: ./src/components/IT/ChooseUs.jsx




const ChooseUs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "choose-us style-2 border-top bg-darkBlue brd-light section-padding",
        "data-scroll-index": "4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head mb-30 text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70",
                        children: "Ai + RING"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img pe-lg-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/choose_us/circles.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-white text-uppercase mb-60",
                                        children: [
                                            "We create AI agency services in the trading",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "   field"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: chooseus_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `d-flex ${index !== chooseus_namespaceObject.length - 1 ? "mb-30" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon me-4 flex-shrink-0",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inf",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "text-white text-capitalize mb-2",
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                className: "text-white op-8",
                                                                children: typeof item.desc === "string" ? item.desc : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                    children: [
                                                                        item.desc.desc1,
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        " ",
                                                                        item.desc.desc2
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
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
/* harmony default export */ const IT_ChooseUs = (ChooseUs);


/***/ }),

/***/ 3147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "style-2 pt-80 pb-60 bg-darkBlue border-top brd-light text-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-3 col-sm-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "foot_logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/img/logo_ll.png",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center small",
                            children: [
                                "2025 Copy rights by AIRING. All Rights Reserved.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Smartcontract : 0xC0d415c55576596437e865533Dd2730293999EDf"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-3 col-sm-6 text-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "socail-icons",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://x.com/airingpro",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://t.me/PipmakerSignal",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fab fa-telegram-plane"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 9340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Header = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "style-2 overflow-hidden",
        "data-scroll-index": "1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content text-center text-light text-capitalize",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "top_info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-uppercase",
                                            children: "AIRING"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "fw-light text-uppercase",
                                            children: [
                                                "Best Solutions for ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "fw-bold",
                                                    children: "Big Data & TEchnology"
                                                }),
                                                " Services"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "brands mt-200 mb-80",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "logo wow fadeInUp",
                                            "data-wow-delay": "0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/img/about/about_logos/1.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "logo wow fadeInUp",
                                            "data-wow-delay": "0.2s",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/img/about/about_logos/2.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "logo wow fadeInUp",
                                            "data-wow-delay": "0.4s",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/img/about/about_logos/3.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "logo wow fadeInUp",
                                            "data-wow-delay": "0.6s",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/img/about/about_logos/4.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "logo wow fadeInUp",
                                            "data-wow-delay": "0.8s",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/img/about/about_logos/5.png",
                                                alt: ""
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    children: [
                                        "We can help to maintain and modernize ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " your IT infrastructure & solve various infrastructure-specific ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " issues a business may face."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "d-block mt-40",
                                    children: [
                                        "AIRING Co is the partner of choice for many of the world's leading ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " enterprises, SMEs and technology challengers. We help businesses elevate their value through ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " custom software development, product design, QA and consultancy services."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/ibnetsoft/airing/raw/main/AIRING_Token_Whitepaper.pdf",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn sm-butn border text-white radius-9 mt-60 hover-darkBlue",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "White Paper"
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/header_2.png",
                alt: "",
                className: "head_shape2 wave"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;