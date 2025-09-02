"use strict";
exports.id = 6154;
exports.ids = [6154];
exports.modules = {

/***/ 7542:
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




const AboutHeader = ({ rtl , paddingTop  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `about-page-sec style-5 ${paddingTop ? "pt-100" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        children: [
                                            rtl ? "نحن نقدم حلول تكنولوجيا المعلومات  المثالية لأي" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    "We provide perfect ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " IT Solutions & Technology for any"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "ms-2",
                                                children: [
                                                    rtl ? "شركة ناشئة" : "Startups",
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
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            rtl ? "يساعدك Iteck على توحيد هوية علامتك التجارية من خلال جمع وتخزين " : "Iteck helps you unify your brand identity by collecting, storing and distributing",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " ",
                                            rtl ? "وتوزيع رموز وأصول التصميم - تلقائيًا." : "design tokens and assets — automatically."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "main-vid",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/vid_banner5.png",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://youtu.be/pGbIOC83-So?t=21",
                                        onClick: openVideo,
                                        className: "play-icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-play"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/hand_megaphone.png",
                alt: "",
                className: "hand-mega slide_up_down"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/head6_rating.png",
                alt: "",
                className: "head6-rating scale_up_down"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/header5_linechart.png",
                alt: "",
                className: "head6-charts scale_up_down"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/header/rocket.png",
                alt: "",
                className: "head6-rocket"
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutHeader);


/***/ }),

/***/ 1047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_ChooseUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Saas/choose-us.json
const choose_us_namespaceObject = JSON.parse('[{"icon":"/assets/img/icons/serv_icons/1.png","info":"IT Consultation","details":"Nanotechnology immersion along the information high will close the loop on focusing solely"},{"icon":"/assets/img/icons/serv_icons/3.png","info":"Software Design & Development","details":"Our top-notch Experts with much years of experience certail will give best solutions for your business"},{"icon":"/assets/img/icons/serv_icons/5.png","info":"Cloud Services","details":"Customer support is always our number one priority."}]');
;// CONCATENATED MODULE: ./src/data/Saas/choose-us-rtl.json
const choose_us_rtl_namespaceObject = JSON.parse('[{"icon":"/assets/img/icons/serv_icons/1.png","info":"حلول رقمية","details":"إن الانغماس في تقنية النانو على طول ارتفاع المعلومات سوف يغلق الحلقة في التركيز فقط"},{"icon":"/assets/img/icons/serv_icons/3.png","info":"تصميم فريد وخبرة برمجية","details":"سيقدم خبراؤنا المتميزون الذين يتمتعون بسنوات عديدة من الخبرة في مجال الشهادات أفضل الحلول لعملك"},{"icon":"/assets/img/icons/serv_icons/5.png","info":"خدمات سحابية","details":"دعم العملاء هو دائمًا أولويتنا الأولى."}]');
;// CONCATENATED MODULE: ./src/components/Saas/ChooseUs.jsx




const ChooseUs = ({ rtl  })=>{
    const ChooseUsData = rtl ? choose_us_rtl_namespaceObject : choose_us_namespaceObject;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "choose-us style-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between gx-0",
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
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-head mb-30 style-5",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                rtl ? "" : "Our",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: rtl ? "خدماتنا" : "Services"
                                                }),
                                                " "
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text mb-50 fs-12px color-666",
                                        children: rtl ? "مع سوق Iteck ، اختر من بين مئات بوابات الدفع لعملائك." : "With Iteck Marketplace, choose from hundreds of payment gateways for your customers."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: ChooseUsData.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `d-flex ${index !== ChooseUsData.length - 1 ? "mb-40" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "icon-50 me-4 flex-shrink-0",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.icon,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inf",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: item.info
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fs-12px color-666 mt-2",
                                                                children: item.details
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: rtl ? "/rtl-page-services" : "/page-services-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-60 px-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: rtl ? "مشاهدة المزيد" : "See More"
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
                src: "/assets/img/about/about_s6_bubbles.png",
                alt: "",
                className: "bubbles rotate-center"
            })
        ]
    });
};
/* harmony default export */ const Saas_ChooseUs = (ChooseUs);


/***/ }),

/***/ 6629:
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
        className: "contact section-padding border-bottom border-1 brd-gray style-6",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-head text-center mb-70 style-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "احصل على " : "Ready To Start A",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: rtl ? "استشارة مجانية" : "Projects"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: rtl ? "سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة" : "We will contact again after receive your request in 24h"
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
                                                            placeholder: rtl ? "الاسم" : "Name",
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
                                                            placeholder: rtl ? "البريد الالكترونى *" : "Email Address *",
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
                                                            placeholder: rtl ? "رقم الهاتف (اختيارى)" : "Phone Number (option)",
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
                                                            placeholder: rtl ? "موقعك الالكترونى (اختيارى)" : "Your Website (option)",
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
                                                            name: "option",
                                                            defaultValue: rtl ? "كيف يمكننا مساعدتك ؟ " : "How can we help you?",
                                                            onChange: handleFormChange,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "How can we help you?",
                                                                    children: rtl ? "كيف يمكننا مساعدتك ؟ " : "How can we help you?"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "option 1",
                                                                    children: rtl ? "الاختيار الاول" : "option 1"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "option 2",
                                                                    children: rtl ? "الاختيار الثاني" : "option 2"
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
                                                            rows: "10",
                                                            className: "form-control",
                                                            name: "message",
                                                            placeholder: rtl ? "كيف يمكننا مساعدتك ؟ " : "How can we help you?",
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
                                                        value: rtl ? "ارسل طلبك" : "Send Your Request",
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

/***/ 3846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_Saas_culture_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9554);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1006);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lightgallery_react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// import styles

swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const Culture = ({ rtl  })=>{
    const { 0: lgGallery , 1: setLgGallery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const showFancybox = (e, index)=>{
        e.preventDefault();
        lgGallery.instance.el.children[index].click();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "culture section-padding style-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-head text-center mb-70 style-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "mb-20",
                        children: [
                            rtl ? "اكتشف" : "Discovery Our",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: rtl ? "ثقافتنا" : "Culture"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: rtl ? "تعد ثقافة الشركة جزءًا مهمًا من أي عمل تجاري" : "Company’s culture is a part important of any business"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "culture-slider position-relative pb-80 style-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                className: "swiper-container",
                                slidesPerView: 4,
                                spaceBetween: 30,
                                centeredSlides: true,
                                speed: 1000,
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: "true"
                                },
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
                                        slidesPerView: 3
                                    },
                                    1200: {
                                        slidesPerView: 4
                                    }
                                },
                                children: _data_Saas_culture_json__WEBPACK_IMPORTED_MODULE_4__.map((slide, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: slide,
                                            className: "culture-card d-block",
                                            onClick: (e)=>showFancybox(e, index),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: slide,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "overlay"
                                                })
                                            ]
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-pagination"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lightgallery_react__WEBPACK_IMPORTED_MODULE_5___default()), {
                        speed: 500,
                        backdropDuration: 500,
                        onInit: (lg)=>setLgGallery(lg),
                        children: _data_Saas_culture_json__WEBPACK_IMPORTED_MODULE_4__.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: slide,
                                className: "culture-card d-block",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: slide,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "overlay"
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Culture);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_Numbers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/CountTo/index.jsx
var CountTo = __webpack_require__(6187);
;// CONCATENATED MODULE: ./src/data/Saas/numbers.json
const numbers_namespaceObject = JSON.parse('[{"value":12,"operator":"+","title":{"part1":"Years","part2":"of Experience"}},{"value":1565,"operator":null,"title":{"part1":"Projects","part2":"completed"}},{"value":265,"operator":null,"title":{"part1":"Satisfied clients on","part2":"24 countries"}}]');
;// CONCATENATED MODULE: ./src/data/Saas/numbers-rtl.json
const numbers_rtl_namespaceObject = JSON.parse('[{"value":12,"operator":"+","title":{"part1":"سنوات","part2":"من الخبرة"}},{"value":1565,"operator":null,"title":{"part1":"مشاريع","part2":"مكتملة"}},{"value":265,"operator":null,"title":{"part1":"عملاء سعداء من","part2":"24 دولة"}}]');
;// CONCATENATED MODULE: ./src/components/Saas/Numbers.jsx





const Numbers = ({ rtl  })=>{
    const numbersSectionRef = (0,external_react_.useRef)(null);
    const { 0: position , 1: setPosition  } = (0,external_react_.useState)({
        from: 3000,
        to: 3340
    });
    const data = rtl ? numbers_rtl_namespaceObject : numbers_namespaceObject;
    (0,external_react_.useEffect)(()=>{
        const numbersSection = numbersSectionRef.current;
        const numbersSectionHeight = numbersSection.offsetHeight;
        const numbersSectionTop = numbersSection.offsetTop;
        const Position = {
            from: numbersSectionTop - numbersSectionHeight - 850,
            to: numbersSectionTop + numbersSectionHeight
        };
        setPosition(Position);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "numbers style-6",
        ref: numbersSectionRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content pb-100 border-1 border-bottom brd-gray",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: data.map((number, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "number-card style-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "me-4 color-blue5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CountTo/* default */.Z, {
                                                className: "counter",
                                                from: 0,
                                                to: number.value,
                                                speed: 1500,
                                                position: position
                                            }),
                                            number.operator && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: " +"
                                            })
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
/* harmony default export */ const Saas_Numbers = (Numbers);


/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Philosophy = ({ rtl  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "about section-padding style-5 style-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content border-0 p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-4 order-2 order-lg-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-head mb-30 style-5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            children: [
                                                rtl ? "كلمة" : "Iteck’s",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: rtl ? "عنا" : "Philosophy"
                                                }),
                                                " "
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: rtl ? "مثل أي وكالة عظيمة ، نحن الأفضل بنتاجئنا التي قدمناها لعملنا الأخير. يلتزم مطورونا بالحفاظ على أعلى معايير الويب حتى يتحمل موقعك اختبار الزمن." : "Like any great agency, we are only as good as the result we deliver of our recent work. Our developers are committed to maintaining the highest web standards so that your site."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "line-links",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: rtl ? "كن الأول في صناعة تكنولوجيا المعلومات" : "Become 1st in the IT industrial"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: rtl ? "سعر تنافسى" : "Competitive Price"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: rtl ? "تحسين مستوى حياتك" : "Enhance the quality of life"
                                            })
                                        ]
                                    })
                                ]
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/about/about_s6_bubbles.png",
                alt: "",
                className: "bubbles rotate-center"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Philosophy);


/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Saas/team.json
const team_namespaceObject = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"Michael Edwards","position":"CEO Founder"},{"picture":"/assets/img/team/5.jpeg","name":"Bobby Kane","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"Robert Downey Jr","position":"Project Manager"},{"picture":"/assets/img/team/4.jpeg","name":"Andrew Robertson","position":"Marketing Leader"}]');
;// CONCATENATED MODULE: ./src/data/Saas/team-rtl.json
const team_rtl_namespaceObject = JSON.parse('[{"picture":"/assets/img/team/1.jpeg","name":"مايكل إدواردز","position":"مؤسس . الرئيس التنفيذي"},{"picture":"/assets/img/team/5.jpeg","name":"بوبي كين","position":"CTO"},{"picture":"/assets/img/team/3.jpeg","name":"روبرت داوني","position":"مدير المشروع"},{"picture":"/assets/img/team/4.jpeg","name":"أندرو روبرتسون","position":"قائد تسويق"}]');
;// CONCATENATED MODULE: ./src/components/Saas/Team.jsx



const Team = ({ rtl  })=>{
    const teamData = rtl ? team_rtl_namespaceObject : team_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "team section-padding style-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "content",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-head text-center mb-70 style-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    rtl ? "افضل" : "Our",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: rtl ? "المديرين" : "Leaders"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: rtl ? "المهنية والودية شعارنا. تعرف على قادتنا" : "Profressional & Friendly is our slogan. Meet our leaders"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: teamData.map((member, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `team-card ${index !== team_namespaceObject.length - 1 ? "mb-30 mb-lg-0" : ""} style-6`,
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
/* harmony default export */ const Saas_Team = (Team);


/***/ }),

/***/ 9554:
/***/ ((module) => {

module.exports = JSON.parse('["/assets/img/about/cl1.png","/assets/img/about/cl2.png","/assets/img/about/cl3.png","/assets/img/about/cl1.png","/assets/img/about/cl2.png"]');

/***/ })

};
;