"use strict";
exports.id = 3934;
exports.ids = [3934];
exports.modules = {

/***/ 3934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Shop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/App/shop.json
const shop_namespaceObject = JSON.parse('[{"title":"ASUS Chromebook Flip -10.2 inch, 256GB","image":"/assets/img/shop/products/1.png","category":"asus","label":"new","liked":true,"rating":4,"reviews":3,"price":"197.00"},{"title":"Macbook Air 2018, 1 TB","image":"/assets/img/shop/products/2.png","category":"apple","label":"15% off","liked":false,"rating":4,"reviews":3,"price":{"old":"521.00","new":"421.00"}},{"image":"/assets/img/shop/products/3.png","liked":false,"category":"samsung","title":"Samsung New VR Headset, Oculus 2.0","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/4.png","liked":false,"category":"brand name","title":"iPhone 6s Gold 64GB, Retina Ready","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/5.png","liked":false,"category":"Xbox","title":"Xbox One Controller","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/6.png","label":"15% off","liked":false,"category":"amcrest","title":"Amcrest Outdoor Camera","rating":4,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"/assets/img/shop/products/7.png","liked":false,"category":"dji2","title":"DJI II Phantom 4 Quad Drone With Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/8.png","liked":false,"category":"gopro","title":"Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/9.png","liked":false,"category":"nikon","title":"Nikon Coolpix Camera","rating":4,"reviews":3,"price":"197.00"},{"title":"Sony Camera 24.5MP, HD, 4k Wireless","image":"/assets/img/shop/products/10.png","category":"sony","liked":false,"rating":4,"reviews":3,"price":"197.00"},{"title":"All My Dangerous Friends - Marketing Book","image":"/assets/img/shop/products/11.png","category":"seo book","liked":false,"rating":4,"reviews":3,"price":"197.00"},{"title":"Love Does - Bob Goff","image":"/assets/img/shop/products/12.png","category":"seo book","liked":false,"rating":4,"reviews":3,"price":"197.00"}]');
;// CONCATENATED MODULE: ./src/data/App/shop-rtl.json
const shop_rtl_namespaceObject = JSON.parse('[{"image":"/assets/img/shop/products/1.png","label":"جديد","liked":true,"category":"ايسوس","title":"ايسوس كروم بوك  -10.2 inch, 256GB","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/2.png","label":"15% خصم","liked":false,"category":"ابل","title":"ماك بوك 2018, 1 TB","rating":5,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"/assets/img/shop/products/3.png","liked":false,"category":"سامسونج","title":"نظارات الواقع الافتراض من سامسونج ","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/4.png","liked":false,"category":"اسم البراند","title":"ايفون 6s ذهبي 64GB","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/5.png","liked":false,"category":"اكس بوكس","title":"اكس بوكس اذرعه تحكم","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/6.png","label":"15% خصم","liked":false,"category":"سونى","title":"كاميرا سونى","rating":4,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"/assets/img/shop/products/7.png","liked":false,"category":"dji2","title":"DJI II Phantom 4 Quad Drone With Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/8.png","liked":false,"category":"gopro","title":"Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/9.png","liked":false,"category":"نيكون","title":"كاميرا نيكون","rating":4,"reviews":3,"price":"197.00"},{"title":"كاميرا سونى","image":"/assets/img/shop/products/10.png","category":"سونى","liked":false,"rating":4,"reviews":3,"price":"197.00"},{"title":"اصحابي الخطيرين - كتاب تسويق","image":"/assets/img/shop/products/11.png","category":"كتاب تسويق","liked":false,"rating":4,"reviews":3,"price":"197.00"},{"title":"اصحابي الخطيرين - كتاب تسويق","image":"/assets/img/shop/products/12.png","category":"كتاب تسويق","liked":false,"rating":4,"reviews":3,"price":"197.00"}]');
;// CONCATENATED MODULE: ./src/components/Shop/Categories.jsx

const Categories = ({ rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "filter-card mb-30",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-title",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: rtl ? "التصنيفات" : "Categories"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-check category-checkRadio",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "form-check-input",
                        type: "radio",
                        name: "category",
                        id: "category1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "form-check-label cat-link",
                        htmlFor: "category1",
                        children: rtl ? "كل التصنيفات" : "All Categories"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-check category-checkRadio",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "form-check-input",
                        type: "radio",
                        name: "category",
                        id: "category2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "form-check-label cat-link",
                        htmlFor: "category2",
                        children: rtl ? "التسويق و التحليل" : "Marketing & SEO"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "accordion",
                id: "accordionExample",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "accordion-header",
                                id: "headingOne",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "accordion-button",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapseOne",
                                    "aria-expanded": "true",
                                    "aria-controls": "collapseOne",
                                    children: rtl ? "تكنولوجى" : "Technology"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "collapseOne",
                                className: "accordion-collapse collapse show",
                                "aria-labelledby": "headingOne",
                                "data-bs-parent": "#accordionExample",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "ps-3 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category3",
                                                    defaultChecked: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category3",
                                                    children: rtl ? "كمبيوتر ولابتوب" : "PC & Laptop"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category4",
                                                    children: rtl ? "قطع غيار" : "Hardware"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category5"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category5",
                                                    children: rtl ? "موبايل وتابلت" : "mobile & tablet"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category6"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category6",
                                                    children: rtl ? "اكسسوارات" : "accessories"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "accordion-header",
                                id: "headingTwo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "accordion-button collapsed",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapseTwo",
                                    "aria-expanded": "false",
                                    "aria-controls": "collapseTwo",
                                    children: rtl ? "الكترونيات" : "Electronic"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "collapseTwo",
                                className: "accordion-collapse collapse",
                                "aria-labelledby": "headingTwo",
                                "data-bs-parent": "#accordionExample",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "ps-3 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category7"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category7",
                                                    children: rtl ? "كمبيوتر ولابتوب" : "PC & Laptop"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category8"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category8",
                                                    children: rtl ? "قطع غيار" : "Hardware"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category9"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category9",
                                                    children: rtl ? "موبايل وتابلت" : "mobile & tablet"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "accordion-header",
                                id: "headingThree",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "accordion-button collapsed",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapseThree",
                                    "aria-expanded": "false",
                                    "aria-controls": "collapseThree",
                                    children: rtl ? "تكنولوجى" : "Course"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "collapseThree",
                                className: "accordion-collapse collapse",
                                "aria-labelledby": "headingThree",
                                "data-bs-parent": "#accordionExample",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "ps-3 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category10"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category10",
                                                    children: rtl ? "كمبيوتر ولابتوب" : "PC & Laptop"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check category-checkRadio",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input",
                                                    type: "radio",
                                                    name: "category",
                                                    id: "category11"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label cat-link",
                                                    htmlFor: "category11",
                                                    children: rtl ? "قطع غيار" : "Hardware"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-check category-checkRadio",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "form-check-input",
                        type: "radio",
                        name: "category",
                        id: "category12"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "form-check-label cat-link",
                        htmlFor: "category12",
                        children: rtl ? "احداث" : "Event"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Shop_Categories = (Categories);

// EXTERNAL MODULE: external "rc-slider"
var external_rc_slider_ = __webpack_require__(1817);
var external_rc_slider_default = /*#__PURE__*/__webpack_require__.n(external_rc_slider_);
;// CONCATENATED MODULE: ./src/components/Shop/Filter.jsx




const Filter = ({ style ="4" , rtl  })=>{
    const { 0: range , 1: setRange  } = (0,external_react_.useState)([
        75,
        300
    ]);
    const sliderChange = (value)=>{
        setRange(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "filter-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-title d-flex justify-content-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: rtl ? "فلتر" : "Filter"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "text-uppercase fw-normal fs-10px",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-arrow-repeat me-1"
                            }),
                            " ",
                            rtl ? "إعادة ضبط الجميع" : "Reset All",
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "filter-card-item",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sub-tilte d-flex align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: rtl ? "العلامات التجارية" : "Brands"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: "icon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "bi bi-chevron-down"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "filter-card-body",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "search-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        placeholder: "Search brand"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "bi bi-search"
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "filter-card-scroll",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck1",
                                                children: rtl ? "جميع العلامات التجارية" : "All Brands"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck2",
                                                children: rtl ? "ابل" : "Apple"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck3",
                                                children: rtl ? "سامسونج" : "Samsung"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck4",
                                                children: rtl ? "اوبو" : "Oppo"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck5",
                                                children: rtl ? "سونى" : "Sony"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck6"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck6",
                                                children: rtl ? "ابل" : "Apple"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck7"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck7",
                                                children: rtl ? "سامسونج" : "Samsung"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck8"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck8",
                                                children: rtl ? "اوبو" : "Oppo"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check category-checkBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "categoryCheck9"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "categoryCheck9",
                                                children: rtl ? "سونى" : "Sony"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "filter-card-item",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sub-tilte d-flex align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: rtl ? "الالوان" : "Colors"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: "icon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "bi bi-chevron-down"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "filter-card-body",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "filter-card-scroll",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-check category-checkBox",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "form-check-input",
                                            type: "checkbox",
                                            value: "",
                                            id: "categoryCheck10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "form-check-label",
                                            htmlFor: "categoryCheck10",
                                            children: rtl ? "كل الالوان" : "All Colors"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-check category-checkBox",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "form-check-input",
                                            type: "checkbox",
                                            value: "",
                                            id: "categoryCheck11"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "form-check-label",
                                            htmlFor: "categoryCheck11",
                                            children: rtl ? "احمر" : "Red"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-check category-checkBox",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "form-check-input",
                                            type: "checkbox",
                                            value: "",
                                            id: "categoryCheck12"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "form-check-label",
                                            htmlFor: "categoryCheck12",
                                            children: rtl ? "برتقالى" : "Orange"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-check category-checkBox",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "form-check-input",
                                            type: "checkbox",
                                            value: "",
                                            id: "categoryCheck13"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "form-check-label",
                                            htmlFor: "categoryCheck13",
                                            children: rtl ? "اصفر" : "Yellow"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-check category-checkBox",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "form-check-input",
                                            type: "checkbox",
                                            value: "",
                                            id: "categoryCheck14"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "form-check-label",
                                            htmlFor: "categoryCheck14",
                                            children: rtl ? "ازرق" : "Blue"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "filter-card-item border-0 m-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sub-tilte d-flex align-items-center justify-content-between",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: rtl ? "السعر" : "Price"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "filter-card-body",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "slider-range-content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "amount-input",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "amount",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                    children: [
                                                        "$ ",
                                                        rtl ? "الاقل" : "Min"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    id: "amount1",
                                                    readOnly: true,
                                                    value: range[0]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "amount",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                    children: [
                                                        "$ ",
                                                        rtl ? "الاغلى" : "Max"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    id: "amount2",
                                                    readOnly: true,
                                                    value: range[1]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: rtl ? "تطبيق" : "go"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "slider-range",
                                    style: {
                                        marginTop: "25px",
                                        "--clr-style": `var(--color-blue${style})`
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_rc_slider_default()), {
                                        range: true,
                                        min: 0,
                                        max: 500,
                                        value: range,
                                        onChange: sliderChange,
                                        railStyle: {
                                            backgroundColor: "#dfdfdf",
                                            height: "6px"
                                        },
                                        trackStyle: {
                                            backgroundColor: `var(--color-blue${style})`,
                                            height: "6px"
                                        }
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Shop_Filter = (Filter);

;// CONCATENATED MODULE: ./src/components/Shop/Product.jsx

const Product = ({ product , rtl  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-6 col-lg-3 col-sm-6 card-width",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "product-card",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "img",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: product.image,
                            alt: ""
                        }),
                        product.label && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `label ${product.label === "new" ? "new" : "sale-off"}`,
                            children: product.label
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: `fav-btn ${product.liked ? "active" : ""}`,
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-heart"
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "info",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "category",
                            children: product.category
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "title",
                            children: product.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "rate",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "stars",
                                    children: Array(5).fill(0).map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `fas fa-star ${index + 1 <= product.rating ? "active" : ""}`
                                        }, index))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "rev ms-1",
                                    children: [
                                        product.reviews,
                                        " ",
                                        rtl ? "المراجعات" : "Reviews"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "price",
                    children: typeof product.price === "string" ? "$" + product.price : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "price-sale",
                                children: [
                                    "$",
                                    product.price.new
                                ]
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "old-price",
                                children: [
                                    "$",
                                    product.price.old
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: "btn rounded-pill mt-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: rtl ? "أضف إلى السلة" : "Add To Cart"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Shop_Product = (Product);

;// CONCATENATED MODULE: ./src/components/Shop/TopFilter.jsx

const TopFilter = ({ setListView , rtl  })=>{
    const showListView = ()=>{
        document.querySelector(".list-btn.bttn").classList.add("active");
        document.querySelector(".grid-btn.bttn").classList.remove("active");
        setListView(true);
    };
    const hideListView = ()=>{
        document.querySelector(".grid-btn.bttn").classList.add("active");
        document.querySelector(".list-btn.bttn").classList.remove("active");
        setListView(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "top-filter mb-10",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row align-items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "color-999 fs-12px mb-3 mb-lg-0",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "color-000",
                                children: "1 - 40"
                            }),
                            " of 1,652 results"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "r-side",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        action: "contact.php",
                                        className: "form",
                                        method: "post",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    children: rtl ? "ترتيب حسب" : "Sort by"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                    className: "form-select",
                                                    defaultValue: rtl ? "الطبيعى" : "Default",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "",
                                                            children: rtl ? "الطبيعى" : "Default"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "",
                                                            children: rtl ? "الأكثر مبيعًا" : "best seller"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "",
                                                            children: rtl ? "منتجات جديدة" : "new products"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "",
                                                            children: rtl ? "الطبيعى" : "Default"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid-list-btns",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "grid-btn bttn active",
                                                onClick: hideListView,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-grid-3x3"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "list-btn bttn",
                                                onClick: showListView,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-list-task"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Shop_TopFilter = (TopFilter);

;// CONCATENATED MODULE: ./src/components/Shop/index.jsx








const Shop = ({ style ="4" , rtl  })=>{
    const { 0: listView , 1: setListView  } = (0,external_react_.useState)(false);
    const data = rtl ? shop_rtl_namespaceObject : shop_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "shop section-padding pt-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `section-head text-center style-${style} ${style === "5" ? "mb-80" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "سوق" : "Iteck’s",
                                "  ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        " ",
                                        rtl ? "Iteck" : "Store",
                                        " "
                                    ]
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "page-links color-999",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "me-2",
                                    children: rtl ? "الرئيسية" : "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "me-2",
                                    children: "/"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "color-000",
                                    children: rtl ? "سوق Iteck" : "Iteck’s Store"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "filter",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_Categories, {
                                        rtl: rtl
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_Filter, {
                                        style: style,
                                        rtl: rtl
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-9",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "products-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Shop_TopFilter, {
                                        setListView: setListView,
                                        rtl: rtl
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `products ${listView ? "list-view" : ""}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row gx-2 gx-lg-4",
                                                children: data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Shop_Product, {
                                                        product: item,
                                                        rtl: rtl
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `pagination style-5 color-${style} justify-content-center mt-50`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "active",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "4"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "20"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "text",
                                                            children: [
                                                                rtl ? "التالي" : "next",
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-chevron-right"
                                                                }),
                                                                " "
                                                            ]
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
            ]
        })
    });
};
/* harmony default export */ const components_Shop = (Shop);


/***/ })

};
;