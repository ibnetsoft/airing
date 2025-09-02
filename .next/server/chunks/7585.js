"use strict";
exports.id = 7585;
exports.ids = [7585];
exports.modules = {

/***/ 8012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Digital_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/CountTo/index.jsx
var CountTo = __webpack_require__(6187);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Digital/about.json
const about_namespaceObject = JSON.parse('{"U":["/assets/img/about/about_logos/1.png","/assets/img/about/about_logos/2.png","/assets/img/about/about_logos/3.png","/assets/img/about/about_logos/4.png","/assets/img/about/about_logos/5.png"],"K":[{"number":20,"info":"Years of Experience","operator":{"icon":"fas fa-plus"}},{"number":15,"info":"Projects completed","operator":"K"},{"number":240,"info":"Awards achievied"},{"number":180,"info":"Satisfied clients on 24 countries"}]}');
;// CONCATENATED MODULE: ./src/components/Digital/About.jsx





const About = ()=>{
    const numbersSectionRef = (0,external_react_.useRef)(null);
    const { 0: position , 1: setPosition  } = (0,external_react_.useState)({
        from: 300,
        to: 500
    });
    (0,external_react_.useEffect)(()=>{
        const numbersSection = numbersSectionRef.current;
        const numbersSectionHeight = numbersSection.offsetHeight;
        const numbersSectionTop = numbersSection.offsetTop;
        const Position = {
            from: numbersSectionTop - numbersSectionHeight - 100,
            to: numbersSectionTop + numbersSectionHeight
        };
        setPosition(Position);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about style-1",
        "data-scroll-index": "1",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20",
                        children: about_namespaceObject.U.map((logo, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "logo wow fadeInUp",
                                "data-wow-delay": index * 0.2 + "s",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: logo,
                                    alt: ""
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about-info",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "title",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: " wow fadeInUp slow",
                                                children: "“Technology is best when it brings people  together.”"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "wow fadeInUp slow fw-bold",
                                                children: "Patricia Cross"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: " wow fadeInUp slow",
                                                children: "We can help to maintain and modernize your IT infrastructure  & solve various infrastructure-specific issues a business may face."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: " wow fadeInUp slow",
                                                children: "Iteck Co is the partner of choice for many of the world’s leading  enterprises, SMEs and technology challengers. We help businesses  elevate their value through custom software development, product  design, QA and consultancy services."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/page-about-5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "btn btn-outline-light mt-5 sm-butn wow fadeInUp slow",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "more about us"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about-numbers",
                        ref: numbersSectionRef,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: about_namespaceObject.K.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "num-item wow fadeInUp",
                                        "data-wow-delay": "0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "num",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CountTo/* default */.Z, {
                                                        className: "counter",
                                                        from: 0,
                                                        to: item.number,
                                                        speed: 1500,
                                                        position: position
                                                    }),
                                                    item.operator && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: typeof item.operator === "string" ? item.operator : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-plus"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inf",
                                                children: item.info
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/about/num_shap.png",
                        alt: "",
                        className: "about_shap"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Digital_About = (About);


/***/ }),

/***/ 5976:
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
/* harmony import */ var _data_Digital_blog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7972);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const Blog = ()=>{
    const showDetails = (event)=>{
        const detailsEl = event.currentTarget.querySelector(".text");
        detailsEl.style.display = "block";
    };
    const hideDetails = (event)=>{
        const detailsEl = event.currentTarget.querySelector(".text");
        detailsEl.style.display = "none";
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog section-padding bg-gray style-1",
        "data-scroll-index": "6",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col offset-lg-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "section-head mb-60",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "color-main text-uppercase wow fadeInUp",
                                    children: "our press"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "wow fadeInUp",
                                    children: [
                                        "Latest Posts ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fw-normal",
                                            children: "From Our Press"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "blog_slider",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                className: "swiper-container",
                                slidesPerView: 3,
                                spaceBetween: 30,
                                speed: 1000,
                                pagination: {
                                    el: ".blog_slider .swiper-pagination"
                                },
                                navigation: {
                                    nextEl: ".blog_slider .swiper-button-next",
                                    prevEl: ".blog_slider .swiper-button-prev"
                                },
                                mousewheel: false,
                                keyboard: true,
                                autoplay: {
                                    delay: 4000
                                },
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
                                        slidesPerView: 4
                                    }
                                },
                                children: _data_Digital_blog_json__WEBPACK_IMPORTED_MODULE_4__.map((blog, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "blog_box",
                                            onMouseMove: showDetails,
                                            onMouseLeave: hideDetails,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "tags",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        children: blog.type
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: blog.cover,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: "/page-single-post-5",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: blog.title
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "auther",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            className: "auther-img",
                                                                            src: blog.userPic,
                                                                            alt: ""
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                href: "#",
                                                                                children: [
                                                                                    "By ",
                                                                                    blog.user
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "bi bi-calendar2"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "#",
                                                                                children: blog.date
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text",
                                                            children: [
                                                                blog.details,
                                                                " [...]"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-button-prev"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-button-next"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Digital_ChooseUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Digital/chooseus.json
const chooseus_namespaceObject = JSON.parse('["Latest IT Solutions & Integration With Blockchain","Over 100+ Payment Gateways Support","AI Machine & Deep Learning","Dedicated Support 24/7"]');
;// CONCATENATED MODULE: ./src/components/Digital/ChooseUs.jsx



const ChooseUs = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "choose-us section-padding pt-0 style-1",
        "data-scroll-index": "3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-end",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "info",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-head mb-60",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "color-main text-uppercase wow fadeInUp",
                                            children: "Why choose us"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            className: "wow fadeInUp",
                                            children: [
                                                "Boost Your Business ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fw-normal",
                                                    children: "With New Tech"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: "Our team can assist you in transforming your business through latest tech capabilities to stay ahead of the curve."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: chooseus_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bi bi-check2"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: item
                                                })
                                            ]
                                        }, index))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-about-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn butn-gard border-0 text-white wow fadeInUp",
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
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/choose_us/choose_lines.svg",
                alt: "",
                className: "choose-us-img"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/choose_us/choose_brands.png",
                alt: "",
                className: "choose-us-brands"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/choose_us/choose_bubbles.png",
                alt: "",
                className: "choose-us-bubbles"
            })
        ]
    });
};
/* harmony default export */ const Digital_ChooseUs = (ChooseUs);


/***/ }),

/***/ 5725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Digital_Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/data/Digital/contact.json
const contact_namespaceObject = JSON.parse('{"Lk":"58 Howard Street,  San Francisco, CA 941","m7":"(+23) 5535 68 68","Do":"contact@Iteck.co","k6":"fax@Iteck.co","Ef":"Mon - Sat: 9:00 - 18:00"}');
;// CONCATENATED MODULE: ./src/components/Digital/Contact.jsx




const Contact = ()=>{
    const { 0: formData , 1: setFormdata  } = (0,external_react_.useState)({
        name: "",
        email: "",
        option: "",
        message: ""
    });
    const handleFormChange = (e)=>{
        setFormdata((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        const formValues = new FormData();
        formValues.append("name", formData.name);
        formValues.append("email", formData.email);
        formValues.append("option", formData.option);
        formValues.append("message", formData.message);
        const res = await external_axios_default().post("/contact.php", formValues).catch((err)=>alert(err.message));
        if (!res) return;
        alert("Form submitted successfully.");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "contact section-padding bg-gradient style-1",
        "data-scroll-index": "7",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-head mb-60 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "text-white text-uppercase wow fadeInUp",
                                children: "contact us"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "wow fadeInUp text-white",
                                children: [
                                    "Request Free ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fw-normal",
                                        children: "Consultancy"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contact_info text-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "wow fadeInUp",
                                                children: "Hotline 24/7"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "wow fadeInUp",
                                                children: contact_namespaceObject.m7
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Address : "
                                                            }),
                                                            " ",
                                                            contact_namespaceObject.Lk
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Email : "
                                                            }),
                                                            " ",
                                                            contact_namespaceObject.Do
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Fax : "
                                                            }),
                                                            " ",
                                                            contact_namespaceObject.k6
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Work Hour : "
                                                            }),
                                                            " ",
                                                            contact_namespaceObject.Ef
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "wow fadeInUp",
                                                children: "get direction"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 offset-lg-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        className: "contact_form",
                                        action: "contact.php",
                                        method: "post",
                                        onSubmit: handleFormSubmit,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row gx-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-3 wow fadeInUp",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "name",
                                                            className: "form-control",
                                                            placeholder: "name *",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-3 wow fadeInUp",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "email",
                                                            className: "form-control",
                                                            placeholder: "Email Address *",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-3 wow fadeInUp",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                            name: "option",
                                                            className: "form-select",
                                                            "aria-label": "Default select example",
                                                            defaultValue: "Your inquiry about",
                                                            onChange: handleFormChange,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    children: "Your inquiry about"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "1",
                                                                    children: "One"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "2",
                                                                    children: "Two"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "3",
                                                                    children: "Three"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-3 wow fadeInUp",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            className: "form-control",
                                                            name: "message",
                                                            rows: "4",
                                                            placeholder: "Write your inquiry here",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-check mb-4 wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                className: "form-check-input",
                                                                type: "checkbox",
                                                                value: "",
                                                                id: "flexCheckDefault"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                className: "form-check-label text-light small",
                                                                htmlFor: "flexCheckDefault",
                                                                children: [
                                                                    "By submitting, i’m agreed to the ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: "text-decoration-underline",
                                                                        children: "Terms & Conditons"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "submit",
                                                        value: "Request Now",
                                                        className: "btn btn-dark wow fadeInUp text-light fs-14px"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
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
/* harmony default export */ const Digital_Contact = (Contact);


/***/ }),

/***/ 8573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Digital_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Digital/footer.json
const footer_namespaceObject = JSON.parse('{"Lk":"58 Howard St,  San Francisco, CA 941","m7":"(+23) 5535 68 68","Do":"contact@Iteck.co","uZ":["IT Consultations","Data Security","Website Development","UI/UX Design","Cloud Services","Game Development","CRM & Software"],"GD":["About Iteck","Investors","Blog","Career","Contact","Affiliate Program","How It Works","Pricing Plan","Covid-19 Update"]}');
;// CONCATENATED MODULE: ./src/components/Digital/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "style-1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "foot_info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "logo mb-3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/img/logo_cl.png",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text mb-4",
                                                children: [
                                                    "Best IT Solutions & Technology WordPress ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " Theme for Your Busines"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "d-flex",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-house me-3"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: footer_namespaceObject.Lk
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "d-flex",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-envelope me-3"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: footer_namespaceObject.Do
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "d-flex",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-phone me-3"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: footer_namespaceObject.m7
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "social_icons",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "links",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "link_title",
                                                    children: "Services"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: footer_namespaceObject.uZ.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: item
                                                            })
                                                        }, index))
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "links",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "link_title",
                                                    children: "Information"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: footer_namespaceObject.GD.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: item
                                                            })
                                                        }, index))
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "foot_subscribe",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "link_title",
                                                children: "Newsletter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Register now to get latest updates on  promotions & coupons."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "input-group my-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        placeholder: "Enter your email",
                                                        "aria-label": "Enter your email",
                                                        "aria-describedby": "button-addon2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn butn-gard border-0 text-white px-3",
                                                        type: "button",
                                                        id: "button-addon2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Subscribe"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "fst-italic",
                                                children: [
                                                    "By subscribing, you accepted the our ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "text-decoration-underline",
                                                        children: " Policy"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "foot",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "\xa9 2022 Copyrights by ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "text-white text-decoration-underline",
                                            children: "Iteck Co."
                                        }),
                                        " All Rights Reserved by ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "text-white text-decoration-underline",
                                            children: " ThemesCamp "
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/footer/foot_l.png",
                alt: "",
                className: "foot_l"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/footer/foot_r.png",
                alt: "",
                className: "foot_r"
            })
        ]
    });
};
/* harmony default export */ const Digital_Footer = (Footer);


/***/ }),

/***/ 8792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);





const Header = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "section-padding style-1",
        "data-scroll-index": "0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "section-head mb-60",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "color-main text-uppercase",
                                                    children: "Iteck agency"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                    children: [
                                                        "Technology & IT ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fw-normal",
                                                            children: "Solutions"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text",
                                            children: "We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bttns mt-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/page-services-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "btn btn-dark",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "our services"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: "https://youtu.be/pGbIOC83-So?t=21",
                                                    className: "vid-btn",
                                                    onClick: openVideo,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bi bi-play wow heartBeat infinite slow"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                "Iteck’s ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                " Showreels"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-5 offset-lg-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "img",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/header/head.png",
                                        alt: ""
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/head_shape_r.png",
                alt: "",
                className: "head-shape-r wow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/head_shape_l.png",
                alt: "",
                className: "head-shape-l wow"
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 6245:
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
/* harmony import */ var _data_Digital_portfolio_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const Portfolio = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "portfolio section-padding bg-gray style-1",
        "data-scroll-index": "4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col offset-lg-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-head mb-60",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "color-main text-uppercase wow fadeInUp",
                                        children: "Portfolio"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "wow fadeInUp",
                                        children: [
                                            "Latest Projects ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "fw-normal",
                                                children: "From Our Team"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "content wow fadeIn slow",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "portfolio-slider",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    className: "swiper-container",
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    speed: 1000,
                                    pagination: {
                                        el: ".portfolio-slider .swiper-pagination"
                                    },
                                    navigation: {
                                        nextEl: ".portfolio-slider .swiper-button-next",
                                        prevEl: ".portfolio-slider .swiper-button-prev"
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
                                    children: _data_Digital_portfolio_json__WEBPACK_IMPORTED_MODULE_4__.map((portfolio, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "portfolio-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: portfolio.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    href: "/page-single-project-5",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        children: portfolio.title
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                className: "d-block color-main text-uppercase",
                                                                children: portfolio.types.map((type, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        className: "me-1",
                                                                        children: type
                                                                    }, i))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text",
                                                                children: portfolio.text
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "tags",
                                                                children: portfolio.tags.map((tag, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
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
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-pagination"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-next"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-prev"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/projects/prog/shap_r.png",
                alt: "",
                className: "shap_r"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/projects/prog/shap_l.png",
                alt: "",
                className: "shap_l"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Digital_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Digital/services.json
const services_namespaceObject = JSON.parse('[{"title":"IT Consultation","number":"01","icon":"/assets/img/icons/serv_icons/1.png","text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Strategy","Consultation","Management"]},{"title":"Data Security","number":"02","icon":"/assets/img/icons/serv_icons/2.png","text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Management","Backup & Recovery","Transfer"]},{"title":"Website Development","number":"03","icon":"/assets/img/icons/serv_icons/3.png","text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Ecommerce","Landing Page","CMS","Plugin"]},{"title":"UI/UX Design","number":"04","icon":"/assets/img/icons/serv_icons/4.png","text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Website","Mobile App"]},{"title":"Cloud Services","number":"05","icon":"/assets/img/icons/serv_icons/5.png","text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Cloud Storerage","Hosting & VPS"]},{"title":"Game Development","number":"06","icon":"/assets/img/icons/serv_icons/6.png","text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Unity 2D/3D","VR/AR","iOS & Android","HTC Vive"]}]');
;// CONCATENATED MODULE: ./src/components/Digital/Services.jsx



const Services = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "services section-padding style-1",
        "data-scroll-index": "2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-head mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "color-main text-uppercase wow fadeInUp",
                                        children: "our services"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "wow fadeInUp",
                                        children: [
                                            "Perfect IT Solutions ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "fw-normal",
                                                children: "For Your Business"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: services_namespaceObject.map((service, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service-box mb-4 wow fadeInUp",
                                        "data-wow-delay": index * 0.2 + "s",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-services-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: service.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "num",
                                                        children: service.number
                                                    })
                                                ]
                                            }),
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: service.text
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "tags",
                                                        children: service.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "me-1",
                                                                children: tag
                                                            }, index))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/services/ser_shap_l.png",
                alt: "",
                className: "ser_shap_l"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/services/ser_shap_r.png",
                alt: "",
                className: "ser_shap_r"
            })
        ]
    });
};
/* harmony default export */ const Digital_Services = (Services);


/***/ }),

/***/ 7128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Digital_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Digital/team.json
const team_namespaceObject = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"Michael Edwards","position":"CEO Founder"},{"picture":"/assets/img/team/2.jpeg","name":"Bobby Kane","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"Robert Downey Jr","position":"Project Manager"},{"picture":"/assets/img/team/4.jpeg","name":"Andrew Robertson","position":"Marketing Leader"},{"picture":"/assets/img/team/5.jpeg","name":"Alexander Avery","position":"Creative Director"}]');
;// CONCATENATED MODULE: ./src/components/Digital/Team.jsx



const Team = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "team section-padding pt-0 style-1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-head mb-60 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "color-main text-uppercase wow fadeInUp",
                                children: "meet our expert"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "wow fadeInUp",
                                children: [
                                    "Clients Satisfaction, ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fw-normal",
                                        children: "Our Reputation"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content",
                        children: team_namespaceObject.map((member, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "team_box wow fadeInUp",
                                "data-wow-delay": index * 0.2 + "s",
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
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
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
                            }, index))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bttns mt-4 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/page-about-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn btn-dark wow zoomIn me-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "See All Team"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/page-contact-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn butn-gard border-0 text-white wow zoomIn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Join Our Team"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/team/team_shap.png",
                alt: "",
                className: "team_shap"
            })
        ]
    });
};
/* harmony default export */ const Digital_Team = (Team);


/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Digital_Testimonials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
;// CONCATENATED MODULE: ./src/data/Digital/testimonials.json
const testimonials_namespaceObject = JSON.parse('[{"userImg":"/assets/img/testimonials/user1.jpeg","stars":5,"comment":"Iteck provide perfect IT solutions, fast process and affordable price. We’re really satisfied!","username":"Ibrahima K.","position":"Senior Marketing at Amazon"},{"userImg":"/assets/img/testimonials/user2.jpeg","stars":5,"comment":"Iteck - 1st my choice for cloud services method","username":"Ben S.","position":"CEO at ThemesCamp"},{"userImg":"/assets/img/testimonials/user3.jpeg","stars":5,"comment":"Our profit increased so much. Really Awesome!","username":"Alexander A.","position":"Tech Leader of Traveloka"}]');
;// CONCATENATED MODULE: ./src/components/Digital/Testimonials.jsx





const Testimonials = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "testimonials section-padding style-1",
        "data-scroll-index": "5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-head mb-60 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "color-main text-uppercase wow fadeInUp",
                                children: "testimonials"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "wow fadeInUp",
                                children: [
                                    "The Trust ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fw-normal",
                                        children: "From Clients"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "vid_img mb-2 mb-md-0 wow zoomIn slow",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/img/testimonials/testi.jpeg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://youtu.be/pGbIOC83-So?t=21",
                                                className: "play_icon",
                                                onClick: openVideo,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-play"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "img_info wow fadeInUp",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Casper Defloy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Tech Leader at Esty Inc"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-7",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info wow fadeInUp",
                                        children: testimonials_namespaceObject.map((testimonial, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `client_card ${index !== testimonials_namespaceObject.length - 1 ? "mb-2" : ""}`,
                                                "data-wow-delay": index * 0.2 + "s",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "user_img",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: testimonial.userImg,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inf_content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "rate_stars",
                                                                children: Array(testimonial.stars).fill().map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "bi bi-star-fill"
                                                                    }, i))
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                children: [
                                                                    "“",
                                                                    testimonial.comment,
                                                                    "”"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    testimonial.username,
                                                                    "  ",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "text-muted",
                                                                        children: [
                                                                            "/  ",
                                                                            testimonial.position
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const Digital_Testimonials = (Testimonials);


/***/ }),

/***/ 6465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TopNav = ()=>{
    const handleMouseMove = (event)=>{
        const dropDownToggler = event.target.classList.contains("dropdown-toggle") ? event.target : event.target.querySelector(".dropdown-toggle");
        const dropDownMenu = dropDownToggler?.nextElementSibling;
        dropDownToggler?.classList?.add("show");
        dropDownMenu?.classList?.add("show");
    };
    const handleMouseLeave = (event)=>{
        const dropdown = event.target.classList.contains("dropdown") ? event.target : event.target.closest(".dropdown");
        const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
        const dropDownMenu = dropdown.querySelector(".dropdown-menu");
        dropDownToggler?.classList?.remove("show");
        dropDownMenu?.classList?.remove("show");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "top-navbar style-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "top-links",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-bullhorn"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Now Hiring:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                "Are you a driven and motivated ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: "p-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                                        children: "1st Line IT Support Engineer?"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "r-side",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "socail-icons",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-linkedin-in"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "dropdown",
                                        onMouseMove: handleMouseMove,
                                        onMouseLeave: handleMouseLeave,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "dropdown-toggle",
                                                href: "#",
                                                role: "button",
                                                id: "dropdownMenuLink",
                                                "data-bs-toggle": "dropdown",
                                                "aria-expanded": "false",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "me-1",
                                                        src: "/assets/img/lang.png",
                                                        alt: ""
                                                    }),
                                                    " English"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dropdown-menu",
                                                "aria-labelledby": "dropdownMenuLink",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "dropdown-item",
                                                            href: "#",
                                                            children: "French"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "dropdown-item",
                                                            href: "#",
                                                            children: "Arabic"
                                                        })
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
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);


/***/ }),

/***/ 7972:
/***/ ((module) => {

module.exports = JSON.parse('[{"type":"news","cover":"/assets/img/blog/1.jpeg","title":"Crypto Trends 2023","userPic":"/assets/img/testimonials/user1.jpeg","user":"Admin","date":"May 15, 2022","details":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"},{"type":"technology","cover":"/assets/img/blog/2.jpeg","title":"How To Become Web Developer","userPic":"/assets/img/testimonials/user2.jpeg","user":"Moussa","date":"May 15, 2022","details":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"},{"type":"tips & tricks","cover":"/assets/img/blog/3.jpeg","title":"Wireframe For UI/UX?","userPic":"/assets/img/testimonials/user3.jpeg","user":"Admin","date":"May 15, 2022","details":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"},{"type":"news","cover":"/assets/img/blog/4.jpeg","title":"VR Game, Opportunity & Challenge","userPic":"/assets/img/testimonials/user1.jpeg","user":"David","date":"May 15, 2022","details":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"},{"type":"technology","cover":"/assets/img/blog/2.jpeg","title":"How To Become Web Developer","userPic":"/assets/img/testimonials/user2.jpeg","user":"Moussa","date":"May 15, 2022","details":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"}]');

/***/ }),

/***/ 150:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/projects/prog/1.jpeg","title":"Infrastructure Upgrade","types":["IT Consultation"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Consultation","Management"]},{"image":"/assets/img/projects/prog/2.png","title":"Criftocy Landing Page","types":["Website Development,","UI/UX Design"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]},{"image":"/assets/img/projects/prog/3.jpeg","title":"AR/VR War 1986 Game","types":["Game Developemnt"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["VR/AR","iOS & Android","Unity 2D/3D"]},{"image":"/assets/img/projects/prog/2.png","title":"Criftocy Landing Page","types":["Website Development,","UI/UX Design"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]}]');

/***/ })

};
;