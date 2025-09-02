"use strict";
exports.id = 6724;
exports.ids = [6724];
exports.modules = {

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ scrollToSection)
/* harmony export */ });
function scrollToSection(event) {
    event.preventDefault();
    const section = document.querySelector('[data-scroll-index="' + event.target.dataset.scrollNav + '"]');
    if (section) {
        setTimeout(()=>{
            section.scrollIntoView({
                behavior: "smooth"
            });
        }, 300);
    }
};


/***/ }),

/***/ 739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);





const About = ({ rtl  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "about style-6",
        "data-scroll-index": "1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content section-padding",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "section-head mb-40 style-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: rtl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        "قم بترقية مشاريعك ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        " الى ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                children: "أعلى المستويات"
                                                            })
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        "Boost your business up to ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                children: "high level"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text",
                                            children: rtl ? "مثل أي وكالة عظيمة ، نحن الأفضل بنتاجئنا التي قدمناها لعملنا الأخير. يلتزم مطورونا بالحفاظ على أعلى معايير الويب حتى يتحمل موقعك اختبار الزمن." : "Like any great agency, we are only as good as the result we deliver of our recent work. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "btns d-flex align-items-center mt-60",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `/${rtl ? "rtl-page-about" : "page-about-5"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                rtl ? "من نحن" : "About Us",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "bi bi-arrow-right ms-1"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: "https://youtu.be/pGbIOC83-So?t=21",
                                                    "data-lity": true,
                                                    className: "vid-btn",
                                                    onClick: openVideo,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bi bi-play"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                rtl ? "مشاهدة" : "See Our",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                " ",
                                                                rtl ? "اخر عروضنا" : "Showreels"
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
                                className: "col-lg-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "img",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/about/superman_3d.png",
                                        alt: ""
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
             false && /*#__PURE__*/ 0,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/about/about_s6_bubbles.png",
                alt: "",
                className: "bubbles rotate-center"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 1186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Startup/blog.json
const blog_namespaceObject = JSON.parse('[{"cover":"/assets/img/blog/9.png","time":"3 Days ago","title":"Workflow Strategy for E-shop","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"David","comments":24,"views":"774k"},{"cover":"/assets/img/blog/10.png","time":"12 Days ago","title":"6 Tips To Help You Build Your Social Media Effeciency","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"David","comments":24,"views":"774k"},{"cover":"/assets/img/blog/11.png","time":"3 Days ago","title":"The Trend of Marketing With Tiktok, Should or not?","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"David","comments":24,"views":"774k"}]');
;// CONCATENATED MODULE: ./src/data/Startup/blog-rtl.json
const blog_rtl_namespaceObject = JSON.parse('[{"cover":"/assets/img/blog/9.png","time":"منذ 3 أيام","title":"استراتيجية سير العمل للمتجر الإلكتروني","short_desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","placeholderImageText":"a","author":"دايفيد","comments":24,"views":"774k"},{"cover":"/assets/img/blog/10.png","time":"منذ 12 يوم","title":"6 نصائح لمساعدتك على بناء كفاءتك على وسائل التواصل الاجتماعي","short_desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","placeholderImageText":"a","author":"دايفيد","comments":24,"views":"774k"},{"cover":"/assets/img/blog/11.png","time":"منذ 12 يوم","title":"اتجاه التسويق مع Tiktok ، هل يجب أم لا؟","short_desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","placeholderImageText":"a","author":"دايفيد","comments":24,"views":"774k"}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Startup/BlogCard.jsx


const BlogCard = ({ blog , isCenter , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `blog-card${isCenter ? " card-center" : ""} style-6`,
        children: [
            rtl ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "rtl-page-single-post",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "img img-cover d-block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: blog.cover,
                        alt: ""
                    })
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/page-single-post-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "img img-cover d-block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: blog.cover,
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "info",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "date",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "small color-blue6 fs-12px pe-3 border-end brd-gray text-uppercase fw-bold me-3",
                                children: " news "
                            }),
                            rtl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                className: "op-6 fs-12px",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-clock"
                                    }),
                                    " تم النشر "
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                className: "op-6 fs-12px",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-clock"
                                    }),
                                    " Posted on "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "fs-12px ms-1",
                                children: blog.time
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "blog-title",
                        children: rtl ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "rtl-page-single-post",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: blog.title
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/page-single-post-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: blog.title
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text",
                        children: [
                            blog.short_desc,
                            " [...]"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex small mt-20 align-items-center justify-content-between op-9",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "l_side d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2 text-white",
                                        children: blog.placeholderImageText
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            rtl ? /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "text-muted me-1",
                                                children: "بواسطة"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "text-muted me-1",
                                                children: "By"
                                            }),
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
        ]
    });
};
/* harmony default export */ const Startup_BlogCard = (BlogCard);

;// CONCATENATED MODULE: ./src/components/Startup/Blog.jsx




const Blog = ({ rtl  })=>{
    const blogsData = rtl ? blog_rtl_namespaceObject : blog_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog section-padding style-6",
        "data-scroll-index": "8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                rtl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head mb-70 style-6 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                " أحدث الأخبار من ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        children: "مجلتنا"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "color-666",
                            children: "احصل على أحدث المقالات من صحافتنا ، ناقش وشارك"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head mb-70 style-6 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                " Latest from our ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ms-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        children: " magazine "
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "color-666",
                            children: "Get the latest articles from our press, discuss & share"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: blogsData.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Startup_BlogCard, {
                            blog: blog,
                            isCenter: index === 1,
                            rtl: rtl
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Startup_Blog = (Blog);


/***/ }),

/***/ 680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_ChooseUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Startup/chooseus.json
const chooseus_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/ch4.png","title":"Affordable Price","text":"Nanotechnology immersion along the information high will close the loop on focusing solely"},{"image":"/assets/img/icons/ch5.png","title":"Top-notch Experts Consulting","text":"Our top-notch Experts with much years of experience certail will give best solutions for your business"},{"image":"/assets/img/icons/ch6.png","title":"Dedicated Support 24/7","text":"Customer support is always our number one priority."}]');
;// CONCATENATED MODULE: ./src/data/Startup/chooseus-rtl.json
const chooseus_rtl_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/ch4.png","title":"سعر مناسب","text":"إن الانغماس في تقنية النانو على طول ارتفاع المعلومات سوف يغلق الحلقة في التركيز فقط"},{"image":"/assets/img/icons/ch5.png","title":"خبراء استشاريون من الدرجة الأولى","text":"سيقدم خبراؤنا المتميزون الذين يتمتعون بسنوات عديدة من الخبرة في مجال الشهادات أفضل الحلول لعملك"},{"image":"/assets/img/icons/ch6.png","title":"دعم مخصص 24/7","text":"دعم العملاء هو دائمًا أولويتنا الأولى."}]');
;// CONCATENATED MODULE: ./src/components/Startup/ChooseUs.jsx



const ChooseUs = ({ rtl  })=>{
    const data = rtl ? chooseus_rtl_namespaceObject : chooseus_namespaceObject;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "choose-us section-padding style-6",
        "data-scroll-index": "4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/choose_us/man_arrow.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-head mb-20 style-6",
                                        children: rtl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                " لماذا تختار ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Itekseo"
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                "Why choose ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Itekseo"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text mb-50",
                                        children: rtl ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: "نحن متحمسون لعملنا. يظل المصممون لدينا في الصدارة لتقديم تصميمات مواقع ويب جذابة وسهلة الاستخدام لجعل عملك متميزًا"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: "We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `d-flex ${index !== chooseus_namespaceObject.length - 1 ? "mb-40" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "icon-60 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-4 flex-shrink-0",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inf",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fs-12px color-666 mt-2",
                                                                children: item.text
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s6_bubbles.png",
                alt: "",
                className: "bubbles rotate-center"
            })
        ]
    });
};
/* harmony default export */ const Startup_ChooseUs = (ChooseUs);


/***/ }),

/***/ 7654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Clients)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Startup/clients.json
const clients_namespaceObject = JSON.parse('["/assets/img/logos/7.png","/assets/img/logos/8.png","/assets/img/logos/9.png","/assets/img/logos/10.png","/assets/img/logos/11.png","/assets/img/logos/12.png","/assets/img/logos/13.png","/assets/img/logos/14.png","/assets/img/logos/15.png","/assets/img/logos/16.png"]');
;// CONCATENATED MODULE: ./src/components/Startup/Clients.jsx


const Clients = ({ rtl  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "clients style-5",
        "data-scroll-index": "6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                rtl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head mb-70 style-6 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                " يثق بنا الاف ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        children: "المسثمرين"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "color-666",
                            children: "أكثر من 15000 شركة وشريك موثوق بهم واختيار Itekseo"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head mb-70 style-6 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                " Trusted by thoudsands",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: " Businesss "
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "color-666",
                            children: "More 15,000 Companies & partners trusted & choice Itekseo"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content d-flex flex-wrap",
                    children: clients_namespaceObject.map((client, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "img img-card",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: client,
                                alt: ""
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Startup_Clients = (Clients);


/***/ }),

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const Contact = ({ rtl  })=>{
    const { 0: formData , 1: setFormdata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        phone: "",
        website: "",
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
        formValues.append("phone", formData.phone);
        formValues.append("website", formData.website);
        formValues.append("option", formData.option);
        formValues.append("message", formData.message);
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post("/contact.php", formValues).catch((err)=>alert(err.message));
        if (!res) return;
        alert("Form submitted successfully.");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "contact section-padding style-6",
        "data-scroll-index": "9",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-head mb-60 style-6 text-center",
                    children: [
                        rtl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                " احصل على ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: "استشارة مجانية"
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                " Get free ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            children: " consultation "
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        rtl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "color-666",
                            children: "سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "color-666",
                            children: "We will contact again after receive your request in 24h"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    action: "contact.php",
                                    className: "form",
                                    method: "post",
                                    onSubmit: handleFormSubmit,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-center text-danger fs-12px mb-30",
                                            children: rtl ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *" : "The field is required mark as *"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "name",
                                                            className: "form-control",
                                                            placeholder: rtl ? "الأسم" : "Name",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "email",
                                                            className: "form-control",
                                                            placeholder: rtl ? "البريد الألكترونى *" : "Email Address *",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "phone",
                                                            className: "form-control",
                                                            placeholder: rtl ? "الهاتف (اختياري)" : "Phone Number (option)",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "website",
                                                            className: "form-control",
                                                            placeholder: rtl ? "موقعك الالكترونى (اختياري)" : "Your Website (option)",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                            className: "form-select",
                                                            defaultValue: rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?",
                                                            name: "option",
                                                            onChange: handleFormChange,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?",
                                                                    children: rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: rtl ? "الاختيار الاول" : "option 1",
                                                                    children: rtl ? "الاختيار الاول" : "option 1"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: rtl ? "الاختيار الثانى" : "option 2",
                                                                    children: rtl ? "الاختيار الثانى" : "option 2"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "form-group",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            name: "message",
                                                            rows: "10",
                                                            className: "form-control",
                                                            placeholder: rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-12 text-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-check d-inline-flex mt-30 mb-30",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "form-check-input me-2 mt-0",
                                                                type: "checkbox",
                                                                value: "",
                                                                id: "flexCheckDefault"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "form-check-label small",
                                                                htmlFor: "flexCheckDefault",
                                                                children: [
                                                                    rtl ? "من خلال الإرسال ، أوافق على" : "By submitting, i’m agreed to the",
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        className: "text-decoration-underline",
                                                                        children: rtl ? "الشروط و الاحكام" : "Terms & Conditons"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-12 text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "submit",
                                                        value: rtl ? "أرسل طلبك" : "Send Your Request",
                                                        className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/img/icons/contact_a.png",
                            alt: "",
                            className: "contact_a"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/img/icons/contact_message.png",
                            alt: "",
                            className: "contact_message"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 4177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/navbarScrollEffect.js
var navbarScrollEffect = __webpack_require__(7549);
;// CONCATENATED MODULE: ./src/components/Navbars/StartupNav/index.jsx




const Navbar = ()=>{
    const navbarRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        (0,navbarScrollEffect/* default */.Z)(navbarRef.current);
    }, [
        navbarRef
    ]);
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
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-light style-6",
        ref: navbarRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "navbar-brand",
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/logo_home6.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav m-auto mb-2 mb-lg-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onMouseMove: handleMouseMove,
                                    onMouseLeave: handleMouseLeave,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link active dropdown-toggle",
                                            href: "#",
                                            id: "navbarDropdown1",
                                            role: "button",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            "aria-labelledby": "navbarDropdown1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Landing Preview "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-it-solutions2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Creative It Solutions "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-data-analysis",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Data Analysis "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-app-landing",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " App Landing "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-saas-technology",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Saas Technology "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-marketing-startup",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Marketing Startup "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-it-solutions",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " It Solution "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-software-company",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Software Company "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-digital-agency",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Digital Agency "
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/home-modren-shop",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: " Modren Shop "
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onMouseMove: handleMouseMove,
                                    onMouseLeave: handleMouseLeave,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link dropdown-toggle",
                                            href: "#",
                                            id: "navbarDropdown2",
                                            role: "button",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: "pages"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            "aria-labelledby": "navbarDropdown1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-about-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: "about"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-product-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: "product"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-services-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: "services"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-shop-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: "shop"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-single-project-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "dropdown-item",
                                                            children: "single project"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-portfolio-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "portfolio"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-blog-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "blog"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-contact-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "contact"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-side",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "d-flex align-items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page-contact-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-chat-dots me-1"
                                                }),
                                                "Let’s Chat!"
                                            ]
                                        })
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
/* harmony default export */ const StartupNav = (Navbar);

// EXTERNAL MODULE: ./src/common/scrollToSection.js
var scrollToSection = __webpack_require__(5144);
;// CONCATENATED MODULE: ./src/components/Navbars/StartupNav/OnePageNav.jsx




const OnePageNav = ({ rtl  })=>{
    const navbarRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        (0,navbarScrollEffect/* default */.Z)(navbarRef.current);
    }, [
        navbarRef
    ]);
    (0,external_react_.useEffect)(()=>{
        const sections = document.querySelectorAll("[data-scroll-index]");
        window.addEventListener("scroll", ()=>{
            sections.forEach((section)=>{
                const index = section.getAttribute("data-scroll-index");
                const offset = section.offsetTop;
                const height = section.offsetHeight;
                const scroll = window.scrollY;
                if (scroll + 200 > offset && scroll + 200 < offset + height) {
                    document.querySelector(`[data-scroll-nav="${index}"]`).classList.add("active");
                } else {
                    document.querySelector(`[data-scroll-nav="${index}"]`).classList.remove("active");
                }
            });
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-light style-6",
        ref: navbarRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "navbar-brand",
                    href: "#",
                    "data-scroll-nav": "0",
                    onClick: scrollToSection/* default */.Z,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/logo_home6.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav m-auto mb-2 mb-lg-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link dropdown-toggle",
                                        "data-scroll-nav": "1",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "من نحن" : "about us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        "data-scroll-nav": "2",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "خدماتنا" : "services"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        "data-scroll-nav": "3",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "مشاريعنا" : "portfolio"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        "data-scroll-nav": "4",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "لماذا نحن" : "why us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        "data-scroll-nav": "5",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "اراء العملاء" : "testimonials"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        "data-scroll-nav": "6",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "عملائنا" : "clients"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        "data-scroll-nav": "7",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "فريق العمل" : "team"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        "data-scroll-nav": "8",
                                        onClick: scrollToSection/* default */.Z,
                                        children: rtl ? "المدونة" : "blog"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-side",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "d-flex align-items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#0",
                                    className: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold",
                                    "data-scroll-nav": "9",
                                    onClick: scrollToSection/* default */.Z,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "bi bi-chat-dots me-2"
                                            }),
                                            rtl ? "لنتحدث الأن !" : "Let’s Chat!"
                                        ]
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
/* harmony default export */ const StartupNav_OnePageNav = (OnePageNav);

// EXTERNAL MODULE: ./src/components/Navbars/StartupNav/RTLNav.jsx
var RTLNav = __webpack_require__(4163);
;// CONCATENATED MODULE: ./src/components/Startup/Header.jsx




const Header = ({ isOnePage , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "style-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                "data-scroll-index": "0",
                children: [
                    isOnePage ? /*#__PURE__*/ jsx_runtime_.jsx(StartupNav_OnePageNav, {
                        rtl: rtl
                    }) : rtl ? /*#__PURE__*/ jsx_runtime_.jsx(RTLNav/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(StartupNav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: rtl ? "Itekseo للتسويق الألكترونى" : "itekseo agency"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: rtl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    "التسويق الالكترونى هو ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: " المستقبل "
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    "SEO Analytics and Marketing for ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "Startup"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text",
                                            children: rtl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    "ضمان أفضل عائد على الاستثمار لمتطلبات حملة تحسين محركات البحث (SEO) الخاصة بك. ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "احصل على تحليل SEO المجاني الخاص بك"
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    "Ensuring the best return on investment for your bespoke SEO campaign requirement. ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " Get your free SEO Analysis"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            action: "contact.php",
                                            className: "form",
                                            method: "post",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-globe me-2"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "website",
                                                            placeholder: rtl ? "رابط موقعك الالكترونى" : "https://yoursite.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope me-2"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "email",
                                                            placeholder: rtl ? "البريد الالكترونى" : "youremail@domain.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            rtl ? "أبدأ الأن" : "Analyze Now",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-arrow-right ms-1"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/header/hand_megaphone.png",
                alt: "",
                className: "hand-mega slide_up_down"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/header/target_3d.png",
                alt: "",
                className: "target-3d rotate-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/header/head6_rating.png",
                alt: "",
                className: "head6-rating scale_up_down"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/header/header5_linechart.png",
                alt: "",
                className: "head6-charts scale_up_down"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/header/rocket.png",
                alt: "",
                className: "head6-rocket"
            })
        ]
    });
};
/* harmony default export */ const Startup_Header = (Header);


/***/ }),

/***/ 5650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Numbers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/CountTo/index.jsx
var CountTo = __webpack_require__(6187);
;// CONCATENATED MODULE: ./src/data/Startup/numbers.json
const numbers_namespaceObject = JSON.parse('[{"value":12,"operator":"+","title":{"part1":"Years","part2":"of Experience"}},{"value":1565,"operator":null,"title":{"part1":"Projects","part2":"completed"}},{"value":265,"operator":null,"title":{"part1":"Satisfied clients on","part2":"24 countries"}}]');
;// CONCATENATED MODULE: ./src/data/Startup/numbers-rtl.json
const numbers_rtl_namespaceObject = JSON.parse('[{"value":12,"operator":"+","title":{"part1":"سنوات","part2":"من الخبرة"}},{"value":1565,"operator":null,"title":{"part1":"مشاريع","part2":"مكتملة"}},{"value":265,"operator":null,"title":{"part1":"عملاء سعداء من","part2":"24 دولة"}}]');
;// CONCATENATED MODULE: ./src/components/Startup/Numbers.jsx





const Numbers = ({ rtl  })=>{
    const { 0: position  } = (0,external_react_.useState)({
        from: 4300,
        to: 4650
    });
    const Numbers = rtl ? numbers_rtl_namespaceObject : numbers_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "numbers section-padding style-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: Numbers.map((number, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "number-card style-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "me-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CountTo/* default */.Z, {
                                                className: "counter",
                                                from: 0,
                                                to: number.value,
                                                speed: 1500,
                                                position: position
                                            }),
                                            " ",
                                            number.operator && " +"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text",
                                        children: [
                                            number.title.part1,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
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
/* harmony default export */ const Startup_Numbers = (Numbers);


/***/ }),

/***/ 5575:
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
/* harmony import */ var _data_Startup_project_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1902);
/* harmony import */ var _data_Startup_project_rtl_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
const Project = ({ rtl  })=>{
    const data = rtl ? _data_Startup_project_rtl_json__WEBPACK_IMPORTED_MODULE_5__ : _data_Startup_project_json__WEBPACK_IMPORTED_MODULE_4__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "projects style-6",
        "data-scroll-index": "3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content section-padding",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "section-head mb-40 d-flex justify-content-between align-items-center style-6",
                        children: [
                            rtl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    "اخر ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                children: "المشاريع"
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    "Features ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            children: "Projects"
                                        })
                                    })
                                ]
                            }),
                            rtl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "rtl-page-portfolio",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "small text-decoration-underline text-uppercase",
                                    children: "مشاهدة جميع المشاريع"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/page-portfolio-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "small text-decoration-underline text-uppercase",
                                    children: "See All Projects"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "slider-3items slider-style-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                className: "swiper-container pb-70",
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
                                children: data.map((project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "project-card style-6",
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
                                                            children: rtl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: "/rtl-page-single-project",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: project.title
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: "/page-single-project-5",
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
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6353:
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
/* harmony import */ var _data_Startup_services_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7774);
/* harmony import */ var _data_Startup_services_rtl_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Services = ({ rtl  })=>{
    const servicesData = rtl ? _data_Startup_services_rtl_json__WEBPACK_IMPORTED_MODULE_4__ : _data_Startup_services_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services section-padding style-6",
        "data-scroll-index": "2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section-head mb-40 text-center style-6",
                    children: rtl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    "استكشف ماذا نقدم من ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                children: "خدمات"
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "تتضمن استراتيجيتنا التطور المستمر ، لضمان إنتاج مُحسنات محركات بحث استثنائية لـلمشاريع."
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    "Discover our top ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            children: "services"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Our strategy includes consistently evolving, to ensure we’re producing exceptional SEO for business."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                        href: `/${rtl ? "rtl-page-services" : "page-services-5"}`,
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `/${rtl ? "rtl-page-services" : "page-services-5"}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        rtl ? "مشاهدة جميع خدماتنا" : "See All Our Services",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "bi bi-arrow-right ms-1"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Startup/team.json
const team_namespaceObject = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"Michael Edwards","position":"CEO Founder"},{"picture":"/assets/img/team/5.jpeg","name":"Bobby Kane","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"Robert Downey Jr","position":"Project Manager"},{"picture":"/assets/img/team/4.jpeg","name":"Andrew Robertson","position":"Marketing Leader"}]');
;// CONCATENATED MODULE: ./src/data/Startup/team-rtl.json
const team_rtl_namespaceObject = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"مايكل إدواردز","position":"مؤسس الرئيس التنفيذي"},{"picture":"/assets/img/team/5.jpeg","name":"بوبي كين","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"روبرت داوني","position":"مدير المشروع"},{"picture":"/assets/img/team/4.jpeg","name":"أندرو روبرتسون","position":"قائد تسويق"}]');
;// CONCATENATED MODULE: ./src/components/Startup/Team.jsx



const Team = ({ rtl  })=>{
    const TeamMembers = rtl ? team_rtl_namespaceObject : team_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "team section-padding style-6",
        "data-scroll-index": "7",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "content",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row items align-items-end mb-50",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-head mb-0 style-6",
                                    children: rtl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "mb-0",
                                        children: [
                                            "افضل ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: "المديرين"
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "mb-0",
                                        children: [
                                            "Our ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: "Leaders"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5 text-end",
                                children: rtl ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-decoration-underline text-uppercase mb-4",
                                    href: "#",
                                    children: "مشاهدة الفريق بالكامل"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-decoration-underline text-uppercase mb-4",
                                    href: "#",
                                    children: "See All our team"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: TeamMembers.map((member, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "team-card mb-30 mb-lg-0 style-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "img img-cover",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: member.picture,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "social-icons",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "me-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "me-1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "me-1",
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
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "d-block",
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        children: member.name
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: member.position
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Startup_Team = (Team);


/***/ }),

/***/ 6365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
]);
const Testimonials = ({ rtl  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "testimonials style-6",
        "data-scroll-index": "5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row gx-0 align-items-center justify-content-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "testi-slider style-6 slider-style-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon mb-50",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-quote-right"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                                    className: "swiper-container",
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                    speed: 1000,
                                    pagination: false,
                                    navigation: {
                                        nextEl: ".testi-slider.style-6 .swiper-button-next",
                                        prevEl: ".testi-slider.style-6 .swiper-button-prev"
                                    },
                                    mousewheel: false,
                                    keyboard: true,
                                    autoplay: {
                                        delay: 4000
                                    },
                                    loop: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "testi-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: rtl ? "لا أعرف ماذا أقول غير ذلك ، هذا شيء لم تره من قبل. تصميم فريد وخفيف الوزن ودعم متميز. من دواعي سروري دائما Itekseo العمل!" : "I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support. Itekseo always a pleasure to work!"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "author mt-30",
                                                    children: rtl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "color-000 fw-bold text-capitalize",
                                                                children: "كونور مارتينيلى"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "fs-10px",
                                                                children: [
                                                                    "مدير في  ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        className: "text-decoration-underline color-blue6",
                                                                        children: "فندق ومنتجع ايكولاند "
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "color-000 fw-bold text-capitalize",
                                                                children: "Conor Martinelli"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "fs-10px",
                                                                children: [
                                                                    "Director at  ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        className: "text-decoration-underline color-blue6",
                                                                        children: " Ecoland Resort & Hotel"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-next"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-prev"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "img",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/img/testimonials/users_6.png",
                                    alt: "",
                                    className: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/img/testimonials/bubbls.png",
                                    alt: "",
                                    className: "bubbls rotate-center"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9015:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/projects/4.png","title":"اوك باي المحفظة الإلكترونية ","type":["تحليل البيانات"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["تحليل البيانات","استراتيجية المحتوى"]},{"image":"/assets/img/projects/5.png","title":"لوحة التجارة الإلكترونية","type":["تصميم","برمجة"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["وردبريس","بي اتش بي","HTML/CSS","فيجما"]},{"image":"/assets/img/projects/7.png","title":"متجر انستجرام","type":["مواقع التواصل الاجتماعي"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["تواصل اجتماعى","انستجرام","متابعين"]},{"image":"/assets/img/projects/5.png","title":"لوحه تحكم للمتاجر","type":["تصميم","برمجة"],"text":"ثق في عقولنا العليا للتخلص من نقاط ضعف سير العمل ، وتنفيذ التكنولوجيا والتطبيق الجديد.","tags":["وردبريس","بي اتش بي","HTML/CSS","فيجما"]}]');

/***/ }),

/***/ 1902:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/projects/4.png","title":"Okpay E-Wallet Optimized","type":["SEO analysis"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["SEO Analysis","Content Strategy"]},{"image":"/assets/img/projects/5.png","title":"e-Commerce Dashboard","type":["website design","develoment"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]},{"image":"/assets/img/projects/7.png","title":"MLB Store Instagram","type":["social media"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["Social","Instagram","Followers"]},{"image":"/assets/img/projects/5.png","title":"e-Commerce Dashboard","type":["website design","develoment"],"text":"Trust our top minds to eliminate workflow pain points, implement new tech & app.","tags":["WordPress","PHP","HTML/CSS","Figma"]}]');

/***/ }),

/***/ 771:
/***/ ((module) => {

module.exports = JSON.parse('[{"img":"/assets/img/icons/serv_icons/16.png","info":"استراتيجية المحتوى","text":"يمكنك تقديم الإجابات التي يحاول عملاؤك المحتملون تقديمها وتقديم اجابات لها"},{"img":"/assets/img/icons/serv_icons/15.png","info":"اعلانات جوجل وفيسبوك","text":"احصل على المزيد من المشاهدات على الويب والمزيد من العملاء والمزيد من الظهور عبر الإنترنت باستخدام خدمات قوية لتحسين محركات البحث."},{"img":"/assets/img/icons/serv_icons/14.png","info":"التسويق عبر البريد الإلكتروني","text":"يجب أن يبهر موقع الويب الخاص بك زوار موقعك في غضون ثوانٍ قليلة"},{"img":"/assets/img/icons/serv_icons/17.png","info":"وسائل التواصل الاجتماعي","text":"احصل على المزيد من المشاهدات على الموقع ، والمزيد من العملاء لقناتك الاجتماعية"},{"img":"/assets/img/icons/serv_icons/18.png","info":"تصميم وتطوير الموقع","text":"يجب أن يبهر موقع الويب الخاص بك زوار موقعك في غضون ثوانٍ قليلة. إذا كان يعمل ببطء ، إذا شعرت أنه قديم"},{"img":"/assets/img/icons/serv_icons/19.png","info":"انواع مختلفه للتسويق الالكترونى","text":"تحسين موقع الويب الخاص بك على نتائج جوجل باستخدام PPC للتسويق الألكترونى"},{"img":"/assets/img/icons/serv_icons/20.png","info":"اعلانات القدرة الشرائيه","text":"تحسين موقع الويب الخاص بك على نتائج جوجل باستخدام PPC للتسويق الألكترونى"}]');

/***/ }),

/***/ 7774:
/***/ ((module) => {

module.exports = JSON.parse('[{"img":"/assets/img/icons/serv_icons/16.png","info":"Content Strategy","text":"You can provide the answers that your potential customers are trying to find, so you can become the industry."},{"img":"/assets/img/icons/serv_icons/15.png","info":"Google/FB Ads","text":"Get more website traffic, more customers & more online visibility with powerful SEO services."},{"img":"/assets/img/icons/serv_icons/14.png","info":"Email Marketing","text":"Your website has to impress your visitors within just a few seconds"},{"img":"/assets/img/icons/serv_icons/17.png","info":"Social Media","text":"Get more website traffic, more customers for your social chanel"},{"img":"/assets/img/icons/serv_icons/18.png","info":"Website Design and Development","text":"Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated"},{"img":"/assets/img/icons/serv_icons/19.png","info":"TVC/ Viral Clip","text":"Optimized your website on google result with PPC Marketing"},{"img":"/assets/img/icons/serv_icons/20.png","info":"PPC Ads","text":"Optimized your website on google result with PPC Marketing"}]');

/***/ })

};
;