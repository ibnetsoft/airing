"use strict";
exports.id = 8532;
exports.ids = [8532];
exports.modules = {

/***/ 7074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ IT_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/IT/blog.json
const blog_namespaceObject = JSON.parse('[{"cover":"/assets/img/blog/5.png","time":"3 Days ago","title":"NFT Game! New Oppoturnity","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"},{"cover":"/assets/img/blog/6.png","time":"12 Days ago","title":"How To Become A Python Develop Expert","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"},{"cover":"/assets/img/blog/7.png","time":"12 Days ago","title":"AI With Fingerprint","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"},{"cover":"/assets/img/blog/8.png","time":"12 Days ago","title":"Solutions For Big Data Issue, Expert Perspective","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"}]');
;// CONCATENATED MODULE: ./src/components/IT/Blog.jsx



const Blog = ()=>{
    const firstBlog = blog_namespaceObject[0];
    const blogsList = blog_namespaceObject.slice(1);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog style-2 section-padding",
        "data-scroll-index": "7",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head mb-30 text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70",
                        children: "editorial"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row gx-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-6 border-end brd-light",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card border-0 bg-transparent rounded-0 text-white mb-4 mb-lg-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: firstBlog.cover,
                                                        className: "card-img-top",
                                                        alt: "..."
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "card-body px-0",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                            className: "d-block date text mt-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "text-uppercase border-end brd-light pe-3 me-3",
                                                                    children: "News"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "bi bi-clock me-1"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    className: "op-8",
                                                                    children: [
                                                                        "Posted on ",
                                                                        firstBlog.time
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "fw-normal text-white mt-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/page-single-post-5",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: firstBlog.title
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "small mt-2 op-8",
                                                            children: firstBlog.short_desc
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "d-flex small mt-30 align-items-center justify-content-between op-9",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "l_side d-flex align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2",
                                                                            children: firstBlog.placeholderImageText
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#",
                                                                            className: "mt-1",
                                                                            children: [
                                                                                "By ",
                                                                                firstBlog.author
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "r-side mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "bi bi-chat-left-text me-1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            children: firstBlog.comments
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "bi bi-eye ms-4 me-1"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            children: firstBlog.views
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-6",
                                        children: blogsList.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `card border-0 bg-transparent rounded-0 text-white ${index !== blogsList.length - 1 ? "border-bottom brd-light pb-4 mb-4" : ""}`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "img h-100",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: blog.cover,
                                                                    className: "w-100 h-100 radius-2",
                                                                    alt: "..."
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-7",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "card-body pt-3 pt-lg-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                                        className: "d-block date text",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "text-uppercase border-end brd-light pe-3 me-3",
                                                                                children: "News"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "bi bi-clock me-1"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "op-8",
                                                                                children: blog.time
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        className: "fw-normal text-white mt-2 fs-6",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: blog.title
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "d-flex small mt-20 align-items-center justify-content-between op-9",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "l_side d-flex align-items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-2 me-2",
                                                                                        children: blog.placeholderImageText
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        href: "#",
                                                                                        className: "mt-1",
                                                                                        children: [
                                                                                            "By ",
                                                                                            blog.author
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "r-side mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "bi bi-chat-left-text me-1"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: blog.comments
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "bi bi-eye ms-4 me-1"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: blog.views
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, index))
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "sm-butn btn border text-white radius-9 mt-80 hover-lightBlue border-lightBlue",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "See More Articles"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const IT_Blog = (Blog);


/***/ }),

/***/ 2657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Contact = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "contact style-2 bg-darkBlue pt-50",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "content text-center text-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "op-7 mb-70 text-uppercase",
                            children: "Let us opportunity to help you!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "ltspc-20 text-uppercase fs-1 lh-1 mb-50",
                            children: "(+23) 5535 68 68"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "fw-normal mb-20 op-9",
                            children: "contact@Itecksolution.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "fw-normal mb-30 op-7",
                            children: "58 Howard St, San Francisco, CA 941"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/page-contact-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Let’s Chat"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/page-contact-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Request Consultation"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/global2.png",
                alt: "",
                className: "global_2"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 3993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ IT_Pricing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/IT/plans.json
const plans_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/pr1.png","title":"Personal","price":"9.99","features":["3 PRojects","6 Months support"]},{"image":"/assets/img/icons/pr2.png","title":"small team","price":"19.50","features":["15 PRojects","12 Months support","seo & marketing"],"recommended":true},{"image":"/assets/img/icons/pr3.png","title":"enterprise","price":"29.99","features":["unlimited PRojects","lifetime support","expert consultation"]}]');
;// CONCATENATED MODULE: ./src/components/IT/Pricing.jsx



const Pricing = ()=>{
    const togglePlanDuration = (duration)=>{
        let monthly = document.querySelectorAll(".monthly_price");
        let yearly = document.querySelectorAll(".yearly_price");
        if (duration === "monthly") {
            monthly.forEach((price)=>price.classList.add("show"));
            yearly.forEach((price)=>price.classList.remove("show"));
        } else {
            yearly.forEach((price)=>price.classList.add("show"));
            monthly.forEach((price)=>price.classList.remove("show"));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "pricing style-2 border-top brd-light section-padding",
        "data-scroll-index": "6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section-head mb-30 text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70",
                            children: "Pricing & plan"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "toggle_switch d-flex align-items-center justify-content-center mb-20",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check form-switch text-white p-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label",
                                                    htmlFor: "monthly-input2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Billed monthly"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input float-none color-lightBlue",
                                                    type: "checkbox",
                                                    id: "monthly-input2",
                                                    defaultChecked: true,
                                                    onChange: (e)=>togglePlanDuration(e.target.checked ? "yearly" : "monthly")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label",
                                                    htmlFor: "monthly-input2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Billed annually"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row justify-content-center gx-0",
                                        children: plans_namespaceObject.map((plan, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `pricing_card ${plan.recommended ? "recommended" : ""} style-2`,
                                                    children: [
                                                        plan.recommended && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "hint",
                                                            children: "Recommended"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: plan.image,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: plan.title
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "price mb-30",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "monthly_price",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "h2",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                    children: "$"
                                                                                }),
                                                                                " ",
                                                                                plan.price
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            className: "op-7 ms-1",
                                                                            children: " / month "
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "yearly_price show",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "h2",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                    children: "$"
                                                                                }),
                                                                                " ",
                                                                                plan.price
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            className: "op-7 ms-1",
                                                                            children: " / year "
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            children: plan.features.map((feature, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "border-top py-3 op-8 fw-light text-uppercase",
                                                                    children: feature
                                                                }, i))
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/page-contact-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "sm-butn btn border text-white radius-9 mt-50 w-100 hover-lightBlue border-lightBlue",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Get Started Now"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-white text-center mt-50",
                                        children: [
                                            "You have a large team? ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/page-contact-5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "text-decoration-underline",
                                                    children: "Contact us"
                                                })
                                            }),
                                            " for information about more enterprise options "
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/pricing/shap_l.png",
                alt: "",
                className: "shap_l"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/pricing/shap_r.png",
                alt: "",
                className: "shap_r"
            })
        ]
    });
};
/* harmony default export */ const IT_Pricing = (Pricing);


/***/ }),

/***/ 3106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _data_IT_reviews_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.EffectFade
]);
const Reviews = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "reviews style-2 border-top brd-light section-padding bg-darkBlue",
        "data-scroll-index": "5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "section-head mb-30 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70",
                            children: "reviews"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "reviews_slider",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                                className: "swiper-container",
                                effect: "fade",
                                slidesPerView: 1,
                                spaceBetween: 0,
                                speed: 1000,
                                pagination: {
                                    el: ".reviews_slider .swiper-pagination",
                                    clickable: true
                                },
                                navigation: {
                                    nextEl: ".reviews_slider .swiper-button-next",
                                    prevEl: ".reviews_slider .swiper-button-prev"
                                },
                                mousewheel: false,
                                keyboard: true,
                                autoplay: {
                                    delay: 4000
                                },
                                loop: true,
                                children: _data_IT_reviews_json__WEBPACK_IMPORTED_MODULE_3__.map((review, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row justify-content-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-7",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "reviews_card text-center style-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                            className: "text-white lh-4",
                                                            children: [
                                                                "“",
                                                                review.review,
                                                                "”"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "rev_user",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: review.userImage,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "rev_stars",
                                                            children: Array(review.stars).fill().map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "bi bi-star-fill"
                                                                }, i))
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                            className: "text-white mt-2 d-block",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-uppercase color-lightBlue",
                                                                    children: review.username
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "op-7",
                                                                    children: [
                                                                        "/ ",
                                                                        review.userPosition
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pagination_circle position-relative pagi_white mt-70",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-pagination"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/review/rev_l.png",
                alt: "",
                className: "rev_l"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/review/rev_r.png",
                alt: "",
                className: "rev_r"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4198:
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
/* harmony import */ var _data_IT_services_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4814);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const Services = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "services_projects section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    "data-scroll-index": "2",
                    "data-scroll-internal-section": true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-head mb-30 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70",
                                children: "services"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "services_slider position-relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    className: "swiper-container",
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    speed: 1000,
                                    pagination: {
                                        el: ".services_slider .swiper-pagination",
                                        clickable: true
                                    },
                                    navigation: {
                                        nextEl: ".services_slider .swiper-button-next",
                                        prevEl: ".services_slider .swiper-button-prev"
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
                                            slidesPerView: 2
                                        },
                                        787: {
                                            slidesPerView: 2
                                        },
                                        991: {
                                            slidesPerView: 3
                                        },
                                        1200: {
                                            slidesPerView: 3
                                        }
                                    },
                                    children: _data_IT_services_json__WEBPACK_IMPORTED_MODULE_4__/* .services.map */ .u.map((service, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "service-box text-white text-center px-4 py-2 brd-light border-end style-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "icon mb-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: service.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                children: service.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "op-7 mt-20 mb-30 px-3",
                                                                children: service.desc
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tags d-flex flex-wrap justify-content-center mt-30 style-2",
                                                                children: service.tags.map((tag, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: tag
                                                                    }, i))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, index))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pagination_circle position-relative pagi_white mt-70",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "swiper-pagination"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    "data-scroll-index": "3",
                    "data-scroll-internal-section": true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-head mb-30 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70 pt-100",
                                children: "works"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "works_slider position-relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "swiper-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                                className: "swiper-wrapper",
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                                speed: 1000,
                                                pagination: {
                                                    el: ".works_slider .swiper-pagination",
                                                    clickable: true
                                                },
                                                navigation: {
                                                    nextEl: ".works_slider .swiper-button-next",
                                                    prevEl: ".works_slider .swiper-button-prev"
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
                                                        slidesPerView: 2
                                                    }
                                                },
                                                children: _data_IT_services_json__WEBPACK_IMPORTED_MODULE_4__/* .works.map */ ._.map((work, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "work_card text-center d-block",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img img-cover radius-6 overflow-hidden imgrotate-scale-hover",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: work.image,
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "info",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "text-white mt-4",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: "/page-single-project-5",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    children: work.title
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                            className: "color-lightBlue text-uppercase",
                                                                            children: work.tags.map((tag, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "me-1",
                                                                                    children: tag
                                                                                }, i))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }, index))
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-next radius-50 bg-transparent border brd-light"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-prev radius-50 bg-transparent border brd-light"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/page-portfolio-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn sm-butn border text-white radius-9 mt-60 hover-darkBlue",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "See All Projects"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9109:
/***/ ((module) => {

module.exports = JSON.parse('[{"review":"We encountered a problem with processing \\n big data and after only 1 week, Iteck’s Experts provided perfect \\n IT solutions, fast process & affordable price. \\n We’re really satisfied!","userImage":"/assets/img/team/2.jpeg","stars":5,"username":"Conor M.","userPosition":"Senior Marketing at Amazon"},{"review":"We encountered a problem with processing \\n big data and after only 1 week, Iteck’s Experts provided perfect \\n IT solutions, fast process & affordable price. \\n We’re really satisfied!","userImage":"/assets/img/team/1.jpeg","stars":5,"username":"Conor M.","userPosition":"Senior Marketing at Amazon"}]');

/***/ }),

/***/ 4814:
/***/ ((module) => {

module.exports = JSON.parse('{"u":[{"image":"/assets/img/icons/serv_icons/7.png","title":"IT Consultation","desc":"We provide best IT solutions suit for any type of business as stragegy, management, etc","tags":["Strategy","Consultation","Management","Infrastructure"]},{"image":"/assets/img/icons/serv_icons/8.png","title":"Software Development","desc":"We provide best IT solutions suit for any type of business as stragegy, management, etc","tags":["Ecommerce","Landing Page","CMS","Plugin","VR/AR","iOS & Android"]},{"image":"/assets/img/icons/serv_icons/9.png","title":"Data Security","desc":"We provide best IT solutions suit for any type of business as stragegy, management, etc","tags":["Management","Backup & Recovery","Transfer","Storerage","Hosting & VPS"]}],"_":[{"image":"/assets/img/projects/1.png","title":"Rento Car Rental Dashboard","tags":["Landing Page, ","UI/UX Design"]},{"image":"/assets/img/projects/2.png","title":"Analys & Backup Blockchain","tags":["data security, ","IT consultation"]}]}');

/***/ })

};
;