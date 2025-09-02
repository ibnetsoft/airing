"use strict";
exports.id = 9375;
exports.ids = [9375];
exports.modules = {

/***/ 3241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Software_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Software/about.json
const about_namespaceObject = JSON.parse('{"K":[{"value":"1,2k","title":"Projects done"},{"value":"165","title":"satisfied clients"},{"value":"26","title":"awards winner"},{"value":"15","title":"years of experience"}],"R":["Latest IT Solutions & Integration With Blockchain","Over 100+ Payment Gateways Support","AI Machine & Deep Learning","Dedicated Support 24/7"]}');
;// CONCATENATED MODULE: ./src/components/Software/About.jsx



const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "about section-padding style-3",
        "data-scroll-index": "3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "top-content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "img img-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/img/about/style_3_1.png",
                                alt: ""
                            }),
                            about_namespaceObject.K.map((number, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "info-circle",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: number.value
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: number.title
                                            })
                                        ]
                                    })
                                }, index))
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row gx-0 justify-content-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section-head long-shape mb-40 style-3",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                children: [
                                                    "Iteck’s ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Mission & Vision"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "h5",
                                            children: "“It is only when they go wrong that machines remind you how powerful they are.”"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text mb-20",
                                            children: "Iteck Co is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text mb-70",
                                            children: "Iteck specializes in technological and IT-related services such as product engineering, warranty management, building cloud, etc."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page-about-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn rounded-pill bg-blue2 sm-butn text-white",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "More About Us"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "btm-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info pe-lg-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section-head mb-40 style-3",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                children: [
                                                    "Iteck’s ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Technology"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text mb-30",
                                            children: "Our team can assist you in transforming your business through latest tech capabilities to stay ahead of the curve."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: about_namespaceObject.R.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bi bi-star-fill me-3"
                                                        }),
                                                        " ",
                                                        feature
                                                    ]
                                                }, index))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page-about-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "How We Works"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img img-right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/img/about/style_3_2.png",
                            alt: ""
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Software_About = (About);


/***/ }),

/***/ 65:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Software_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Software/blog.json
const blog_namespaceObject = JSON.parse('{"ZF":[{"cover":"/assets/img/blog/6.png","type":"tips & tricks","time":"12 Days ago","title":"How To Become A Python Develop Expert","userImage":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/7.png","type":"News","time":"5 Days ago","title":"AI With Fingerprint","userImage":"a","username":"David","comments":"24","views":"774k"},{"cover":"/assets/img/blog/8.png","type":"tips & tricks","time":"1 month ago","title":"Solutions For Big Data Issue, Expert Perspective","userImage":"a","username":"Moussa","comments":"24","views":"774k"}],"sb":[{"question":"How Benefit That I Got When Choose Basic Plan?","answer":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain mutual understanding, gain customer trust to offer appropriate advice"},{"question":"Can I Pay With Paypal or Payoneer?","answer":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain mutual understanding, gain customer trust to offer appropriate advice"},{"question":"How Long For A Standard Project?","answer":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain mutual understanding, gain customer trust to offer appropriate advice"},{"question":"How About Data Security & NDA Agreement?","answer":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain mutual understanding, gain customer trust to offer appropriate advice"},{"question":"Can We Make An Own Tailored-AI ?","answer":"Through the collaboration with customers in discussing needs and demand, we\'re able to attain mutual understanding, gain customer trust to offer appropriate advice"}],"yj":["/assets/img/logos/1.png","/assets/img/logos/2.png","/assets/img/logos/3.png","/assets/img/logos/4.png","/assets/img/logos/5.png","/assets/img/logos/6.png"]}');
;// CONCATENATED MODULE: ./src/components/Software/Blog.jsx



const Blog = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "blog section-padding style-3",
        "data-scroll-index": "7",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row gx-0 justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "blog-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-head style-3 d-flex align-items-center mb-50",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                    children: [
                                                        "Iteck’s ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Journal"
                                                        })
                                                    ]
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/page-blog-5",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "text-muted ms-5 ps-5 mt-2",
                                                        children: [
                                                            "All  Articles ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-chevron-right ms-1"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        blog_namespaceObject.ZF.map((post, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `card border-0 bg-transparent rounded-0 ${i !== blog_namespaceObject.ZF.length - 1 ? "border-bottom brd-gray" : ""} pb-4 mb-4`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-4",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/page-single-post-5",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "img img-cover",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: post.cover,
                                                                        className: "radius-2",
                                                                        alt: "..."
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-8",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "card-body p-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                                        className: "d-block date text",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "text-uppercase border-end brd-light pe-3 me-3 color-blue2 fw-bold",
                                                                                children: post.type
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "bi bi-clock me-1"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "op-8",
                                                                                children: post.time
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: "card-title",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/page-single-post-5",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                children: post.title
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "d-flex small mt-20 align-items-center justify-content-between op-9",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "l_side d-flex align-items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2 text-white",
                                                                                        children: post.userImage
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        href: "#",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                                className: "text-muted",
                                                                                                children: "By"
                                                                                            }),
                                                                                            " ",
                                                                                            post.username
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
                                                                                        children: post.comments
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "bi bi-eye ms-4 me-1"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: post.views
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
                                            }, i))
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "faq style-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section-head style-3 text-uppercase mb-50",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "FAQS"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "accordion",
                                            id: "accordionExample",
                                            children: [
                                                blog_namespaceObject.sb.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "accordion-item",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "accordion-header",
                                                                id: `heading${index + 1}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: `accordion-button ${index === 0 ? "" : "collapsed"}`,
                                                                    type: "button",
                                                                    "data-bs-toggle": "collapse",
                                                                    "data-bs-target": `#collapse${index + 1}`,
                                                                    "aria-expanded": "true",
                                                                    "aria-controls": `collapse${index + 1}`,
                                                                    children: item.question
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                id: `collapse${index + 1}`,
                                                                className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
                                                                "aria-labelledby": `heading${index + 1}`,
                                                                "data-bs-parent": "#accordionExample",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "accordion-body",
                                                                    children: item.answer
                                                                })
                                                            })
                                                        ]
                                                    }, index)),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/page-contact-5",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "text-muted text-uppercase mt-50 small",
                                                        children: [
                                                            "See More ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-chevron-right ms-1"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "client-logos mt-100",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row align-items-center",
                            children: blog_namespaceObject.yj.map((client, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/blog/v_lines.png",
                alt: "",
                className: "v_lines"
            })
        ]
    });
};
/* harmony default export */ const Software_Blog = (Blog);


/***/ }),

/***/ 1606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const ChatBanner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "chat-banner style-3 section-padding",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "info",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                children: [
                                    "Assess Your Business Potentials Now & Find Opportunities For ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Bigger Success"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bttns text-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/page-contact-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn rounded-pill bg-white border-1 border-white text-dark sm-butn me-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Let’s Chat"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/page-contact-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn rounded-pill border-1 border-white text-white sm-butn",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Get Information"
                                        })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBanner);


/***/ }),

/***/ 5040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Software_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Software/footer.json
const footer_namespaceObject = JSON.parse('{"Lk":"223 Thatcher Road St, Brookly, Manhattan, NY 10463, United States","m7":"+031 5689 89 98","Do":"contact@Itecksolution.co","oZ":[{"link":"/home-saas-technology","title":"Home"},{"link":"/page-about-5","title":"About Iteck"},{"link":"/page-portfolio-5","title":"Projects"},{"link":"/page-about-5","title":"How It Works"},{"link":"/page-blog-5","title":"Blog"},{"link":"/page-contact-5","title":"Contact"}],"uZ":[{"link":"/page-services-5","title":"It Consultation"},{"link":"/page-services-5","title":"Software Development"},{"link":"/page-services-5","title":"AI Machine Learning"},{"link":"/page-services-5","title":"Data Security"},{"link":"/page-services-5","title":"Cloud Services"}]}');
;// CONCATENATED MODULE: ./src/components/Software/Footer.jsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "style-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row gx-0 justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "items",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "title",
                                            children: "Iteck - 1st Choice for IT Solutions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            className: "text",
                                            children: "Over 25 years working in IT services developing software applications and mobile apps for clients all over the world. For your very specific industry, we have highly-tailored IT solutions."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "socail-icons",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "items",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "title",
                                            children: "Information"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            className: "text mb-10 d-block",
                                            children: footer_namespaceObject.Lk
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            className: "text mb-10 d-block",
                                            children: footer_namespaceObject.m7
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            className: "text d-block",
                                            children: footer_namespaceObject.Do
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "items",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "title",
                                            children: "Useful Links"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: footer_namespaceObject.oZ.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item.link,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: item.title
                                                        })
                                                    })
                                                }, index))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "items",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "title",
                                            children: "Services"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: footer_namespaceObject.uZ.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item.link,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: item.title
                                                        })
                                                    })
                                                }, index))
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "foot",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-sm-6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/img/logo_b2.png",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                            className: "small",
                                            children: [
                                                "\xa9 2022 Copyrights by ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "fw-bold text-decoration-underline",
                                                    children: "Iteck Co."
                                                }),
                                                " All Rights Reserved. Designed by ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "fw-bold text-decoration-underline",
                                                    children: "ThemesCamp"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/img/testimonials/testi3_lines.png",
                                alt: "",
                                className: "testi_lines w-100"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/contact_globe.svg",
                alt: "",
                className: "contact_globe"
            })
        ]
    });
};
/* harmony default export */ const Software_Footer = (Footer);


/***/ }),

/***/ 9065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Header = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "style-3 overflow-hidden",
        "data-scroll-index": "0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content section-padding",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "h1",
                                        children: [
                                            "Make your life easier with help from ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Iteck"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "p",
                                        children: "We help businesses elevate their value through custom software development, product design, QA & consultancy services."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                        className: "h5",
                                        children: [
                                            "Get Free Quote! ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "fw-normal ms-1",
                                                children: "We’ll contact back in 24h"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        action: "contact.php",
                                        className: "form mt-30",
                                        method: "post",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row gx-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group input-with-icon",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                placeholder: "Your Email *"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "input-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "far fa-envelope"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                            className: "form-select",
                                                            defaultValue: "Your inquiry about",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "",
                                                                    children: "Your inquiry about"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "",
                                                                    children: "Your inquiry about"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "",
                                                                    children: "Your inquiry about"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn dark-butn hover-darkBlue rounded-pill w-100 mt-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Request A Consultation"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main-img",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/img/header/header_3.png",
                        alt: "",
                        className: "pattern"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/img/header/header_3_c.png",
                        alt: "",
                        className: "circle"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/img/header/logo_sh_l.png",
                        alt: "",
                        className: "logo_shap"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 8862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Software_Pricing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Software/plans.json
const plans_namespaceObject = JSON.parse('[{"title":"Standard","description":"Basic features","price":"$29","features":["3 Projects","6 Months Support & SEO","Basic Dashboard"]},{"title":"Pro","recommended":true,"description":"Premium features","price":"$59","features":["Unlimited Projects","Lifetime Support & SEO Experts Consult","Advance Dashboard","Data Security & Backup","Cloud Hosting & Domain"]}]');
;// CONCATENATED MODULE: ./src/components/Software/Pricing.jsx



const Pricing = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "pricing style-3",
        "data-scroll-index": "5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content section-padding",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section-head style-3 mb-40",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                children: [
                                                    " Affordable ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: " Price "
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            className: "text text-gray mb-30",
                                            children: "Kick-start your project with our pricing plan. We handle all the practical aspects related to hiring and hosting your team at our premises, thus saving you half a cost and a lot of efforts. Lorem ispum dolor sit amet"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                            className: "text text-gray d-block",
                                            children: [
                                                "Not find your plan, need a tailored-plan? ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "color-blue2 text-decoration-underline",
                                                    children: "Contact"
                                                }),
                                                " us now!"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page-services-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Our Services"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7 offset-lg-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "price-cards",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: plans_namespaceObject.map((plan, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `pricing-card ${plan.recommended ? "dark-card" : ""} style-3 mb-30 mb-lg-0`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "card-head",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "title",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                            children: [
                                                                                plan.title,
                                                                                " ",
                                                                                plan.recommended && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                    children: "Recommended"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            children: plan.description
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "price",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                            children: plan.price
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            children: "per month"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "card-body",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                children: plan.features.map((feature, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "bi bi-check"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                children: feature
                                                                            })
                                                                        ]
                                                                    }, i))
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/page-contact-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "btn rounded-pill bg-blue2 sm-butn w-100 text-white",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Get Started Now"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, i))
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/testimonials/testi3_lines.png",
                        alt: "",
                        className: "testi_lines w-100"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Software_Pricing = (Pricing);


/***/ }),

/***/ 6949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Software_Projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Software/projects.json
const projects_namespaceObject = JSON.parse('[{"image":"/assets/img/projects/3.png","title":"Catty Boxes NFT Blockchain","description":"Game Development"},{"image":"/assets/img/projects/4.png","title":"Catty Boxes NFT Blockchain","description":"Game Development"},{"image":"/assets/img/projects/5.png","title":"Catty Boxes NFT Blockchain","description":"Game Development"},{"image":"/assets/img/projects/6.png","title":"Catty Boxes NFT Blockchain","description":"Game Development"}]');
;// CONCATENATED MODULE: ./src/components/Software/Projects.jsx



const Projects = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "projects section-padding style-3",
        "data-scroll-index": "4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head style-3 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        children: [
                            "Our Featured ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Projects"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: projects_namespaceObject.map((project, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: i === 0 ? "col-lg-7" : i === 1 ? "col-lg-5" : "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "project-card d-block mb-30 style-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/page-single-project-5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "img img-cover d-block",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: project.image,
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "h5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/page-single-project-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: project.title
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "small",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: project.description
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, i))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/page-portfolio-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn rounded-pill bg-blue2 sm-butn mt-60 text-white",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
/* harmony default export */ const Software_Projects = (Projects);


/***/ }),

/***/ 1909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Software_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Software/services.json
const services_namespaceObject = JSON.parse('[{"icon":"/assets/img/icons/serv_icons/10.png","title":"IT Consultation","details":"We provide best IT solutions for any type of business as stragegy, management."},{"icon":"/assets/img/icons/serv_icons/11.png","title":"Software Development","details":"We bring methods for design and development as website, mobile app, etc"},{"icon":"/assets/img/icons/serv_icons/12.png","title":"Data Security","details":"Analys & Management Big Data alway big issue of companies management."},{"icon":"/assets/img/icons/serv_icons/13.png","title":"AI Machine Learning","details":"Turn AI & Machine Learning in the life. Enhance the quality and the effeciency"}]');
;// CONCATENATED MODULE: ./src/components/Software/Services.jsx



const Services = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "services style-3 section-padding pb-70",
        "data-scroll-index": "2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head style-3 d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            children: [
                                "Our Main ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Services"
                                })
                            ]
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/page-services-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "text-muted ms-5 ps-5 mt-2",
                                children: [
                                    "See full services ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bi bi-chevron-right ms-1"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: services_namespaceObject.map((service, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-6 mb-30 mb-lg-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "service-card style-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: service.icon,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "title",
                                                children: service.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: service.details
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/page-portfolio-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "see projects"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bi bi-chevron-right ms-1"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Software_Services = (Services);


/***/ }),

/***/ 2504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Software_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Software/team.json
const team_namespaceObject = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"Michael Edwards","position":"CEO Founder"},{"picture":"/assets/img/team/2.jpeg","name":"Bobby Kane","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"Robert Downey Jr","position":"Project Manager"},{"picture":"/assets/img/team/4.jpeg","name":"Andrew Robertson","position":"Marketing Leader"},{"picture":"/assets/img/team/5.jpeg","name":"Alexander Avery","position":"Creative Director"}]');
;// CONCATENATED MODULE: ./src/components/Software/Team.jsx



const Team = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "team section-padding style-1 team-blue2",
        "data-scroll-index": "6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head long-shape style-3 text-center mb-70",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        children: [
                            "Meet Our ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Amazing Team"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: team_namespaceObject.map((member, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "team_box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "avatar",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: member.picture,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: member.name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: member.position
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "social_icons",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-linkedin-in"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-github"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, i))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bttns mt-4 text-center mt-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/page-about-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn rounded-pill bg-blue2 sm-butn mx-1 text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "See All Team"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/page-contact-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn rounded-pill border-blue2 hover-blue2 sm-butn mx-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Join Our Team"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Software_Team = (Team);


/***/ }),

/***/ 1937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _data_Software_testimonials_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
]);
const Testimonials = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "testimonials style-3",
        "data-scroll-index": "1",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "content section-padding",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-head style-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                children: [
                                    "Loved By Thousand ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Clients"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "testimonial-slider style-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                                    className: "swiper-container",
                                    slidesPerView: 3,
                                    spaceBetween: 100,
                                    speed: 1000,
                                    pagination: {
                                        el: ".testimonial-slider.style-3 .swiper-pagination",
                                        clickable: true
                                    },
                                    navigation: {
                                        nextEl: ".testimonial-slider.style-3 .swiper-button-next",
                                        prevEl: ".testimonial-slider.style-3 .swiper-button-prev"
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
                                    children: _data_Software_testimonials_json__WEBPACK_IMPORTED_MODULE_3__.map((testimonial, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                            className: "swiper-slide",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "testimonial-card style-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text",
                                                        children: testimonial.text
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "user-img mt-30 d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "img icon-40 img-cover rounded-circle overflow-hidden me-3",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: testimonial.image,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "inf",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "fw-bold",
                                                                        children: testimonial.author
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                        className: "text-muted",
                                                                        children: testimonial.position
                                                                    })
                                                                ]
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
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/assets/img/testimonials/testi3_lines.png",
                    alt: "",
                    className: "testi_lines w-100"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4557:
/***/ ((module) => {

module.exports = JSON.parse('[{"text":"“We encountered a problem with processing big data and after only 1 week, all fixed, professional, fast & affordable price!”","image":"/assets/img/testimonials/testi.jpeg","author":"Robert Downey Jr","positon":"Technical Leader at Airbnb"},{"text":"“Iteck is 1st our choice for cloud service methods. Extremely security and fast support.”","image":"/assets/img/testimonials/user1.jpeg","author":"Conor McGregor","positon":"CTO at IBM"},{"text":"“Iteck’s Experts really is amazing! high speciality, professional and friendly. Our profit increased so much. Really very satisfied!”","image":"/assets/img/testimonials/user2.jpeg","author":"Lucas Digne","positon":"Product Management at Invisionapp"}]');

/***/ })

};
;