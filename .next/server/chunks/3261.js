"use strict";
exports.id = 3261;
exports.ids = [3261];
exports.modules = {

/***/ 1918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Contact_Form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/data/Contact/form.json
const form_namespaceObject = JSON.parse('{"phone":"(+23) 5535 68 68","email":"contact@Itecksolution.com","address":"58 Howard St, San Francisco, CA 941"}');
;// CONCATENATED MODULE: ./src/data/Contact/form-rtl.json
const form_rtl_namespaceObject = JSON.parse('{"phone":"(+23) 5535 68 68","email":"contact@Itecksolution.com","address":"58 اسم الشارع, سان فرانسيسكو, CA 941"}');
;// CONCATENATED MODULE: ./src/components/Contact/Form.jsx





const Form = ({ style ="4" , rtl  })=>{
    const { 0: formData , 1: setFormdata  } = (0,external_react_.useState)({
        name: "",
        email: "",
        phone: "",
        website: "",
        option: "",
        message: ""
    });
    const contactInfoData = rtl ? form_rtl_namespaceObject : form_namespaceObject;
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
        const res = await external_axios_default().post("/contact.php", formValues).catch((err)=>alert(err.message));
        if (!res) return;
        alert("Form submitted successfully.");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `contact section-padding pt-${style === "4" ? "0" : "50"} style-6`,
        children: [
            style === "5" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-head text-center mb-100 style-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    rtl ? "يسعدنا" : "Get In",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: rtl ? "تواصلك" : "Touch"
                                    }),
                                    " ",
                                    rtl && "معنا"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: rtl ? "سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة" : "We will contact again after receive your request in 24h"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center mb-100",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5",
                                children: contactInfoData.phone
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "fw-normal mb-20 color-000",
                                children: contactInfoData.email
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "fw-normal mb-10 color-000",
                                children: contactInfoData.address
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "contact.php",
                                    className: "form",
                                    method: "post",
                                    onSubmit: handleFormSubmit,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-center text-danger fs-12px mb-30",
                                            children: rtl ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *" : "The field is required mark as *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "name",
                                                            className: "form-control",
                                                            placeholder: rtl ? "الاسم" : "Name",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "email",
                                                            className: "form-control",
                                                            placeholder: rtl ? "البريد الالكترونى *" : "Email Address *",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "phone",
                                                            className: "form-control",
                                                            placeholder: rtl ? "رقم الهاتف (اختياري)" : "Phone Number (option)",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "website",
                                                            className: "form-control",
                                                            placeholder: rtl ? "رابط موقعك (اختيارى)" : "Your Website (option)",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group mb-20",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                            className: "form-select",
                                                            defaultValue: rtl ? "كيف يمكننا مساعدتك ؟" : "How can we help you?",
                                                            name: "option",
                                                            onChange: handleFormChange,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "how can we help",
                                                                    children: rtl ? "كيف يمكننا مساعدتك ؟" : "How can we help you?"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "option 1",
                                                                    children: rtl ? "الاختيار الاول" : "option 1"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "option 2",
                                                                    children: rtl ? "الاختيار الثاني" : "option 2"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            rows: "10",
                                                            name: "message",
                                                            className: "form-control",
                                                            placeholder: rtl ? "كيف يمكننا مساعدتك ؟" : "How can we help you?",
                                                            onChange: handleFormChange
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 text-center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-check d-inline-flex mt-30 mb-30",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                className: "form-check-input me-2 mt-0",
                                                                type: "checkbox",
                                                                value: "",
                                                                id: "flexCheckDefault"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                className: "form-check-label small",
                                                                htmlFor: "flexCheckDefault",
                                                                children: [
                                                                    rtl ? "من خلال الإرسال ، أوافق على" : "By submitting, i’m agreed to the",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: "text-decoration-underline",
                                                                        children: rtl ? "الشروط و الاحكام" : "Terms & Conditons"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
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
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/img/icons/contact_a.png",
                            alt: "",
                            className: "contact_a"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/img/icons/contact_message.png",
                            alt: "",
                            className: "contact_message"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Contact_Form = (Form);


/***/ }),

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Map = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "map",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24219.60999175365!2d-73.9764341314902!3d40.64198229194528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b400c94a227%3A0x18e2a4d3fb21f0ec!2sFlatbush%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1651361759450!5m2!1sen!2seg",
            height: "500",
            style: {
                border: 0
            },
            allowFullScreen: "",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ })

};
;