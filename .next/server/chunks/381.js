"use strict";
exports.id = 381;
exports.ids = [381];
exports.modules = {

/***/ 7188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Saas/about.json
const about_namespaceObject = JSON.parse('{"lineLinks":["Sales Breakdown & Funnel","Abadoned Carts","Revenue by Channel & Devices","Sales Forecast"],"list":[{"icon":"bi bi-check2","title":"100% Guarantee Secure Payment"},{"icon":"bi bi-check2","title":"1% Extra Fees For All"},{"icon":"bi bi-check2","title":"Support Dispute & Refund 24/7"}],"texts":{"text1":"Dashboards are meant to be personal tools for website managers and suppliers to enjoy, and are therefore largely modifiable.","text2":"When it comes to customer actions, website administrators can choose the permissions of each supplier, allowing them to limit or empower commerce activity as needed."},"number":"42,500+"}');
;// CONCATENATED MODULE: ./src/data/Saas/about-rtl.json
const about_rtl_namespaceObject = JSON.parse('{"lineLinks":["توزيع المبيعات","عربات مهجورة","الإيرادات من خلال أجهزة القناة","توقعات المبيعات"],"list":[{"icon":"bi bi-check2","title":"100٪ دفع آمن مضمون"},{"icon":"bi bi-check2","title":"1٪ رسوم اضافية للجميع"},{"icon":"bi bi-check2","title":"24/7"}],"texts":{"text1":"من المفترض أن تكون لوحات المعلومات أدوات شخصية ليستمتع بها مديرو مواقع الويب والموردون ، وبالتالي فهي قابلة للتعديل إلى حد كبير.","text2":"عندما يتعلق الأمر بإجراءات العميل ، يمكن لمسؤولي مواقع الويب اختيار أذونات كل مورد ، مما يسمح لهم بالحد من النشاط التجاري أو تمكينه حسب الحاجة."},"number":"42,500+"}');
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Saas/About/Content1.jsx


const Content = ({ links , rtl  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "content",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-4 order-2 order-lg-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section-head mb-30 style-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    children: [
                                        rtl ? "تجارب المستخدم " : "Optimized User",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: rtl ? "المحسّنة" : "Experiences"
                                        }),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: rtl ? "يمكن تبسيط عمليات التحميل والتحديث التي يقوم بها الموردون من خلال لوحات المعلومات الأمامية التي توفر سهولة الوصول بشكل أفضل." : "The uploading and updating processes made by suppliers can be streamlined through front-end dashboards that create better ease of access."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "line-links",
                                children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: link
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 order-0 order-lg-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "img main-img1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_1_1.png",
                                    alt: "",
                                    className: "sm-circle"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_1_2.png",
                                    alt: "",
                                    className: "img-body"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_1_3.png",
                                    alt: "",
                                    className: "card1"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_1_4.png",
                                    alt: "",
                                    className: "card2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_1_5.png",
                                    alt: "",
                                    className: "lg-circle"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Content1 = (Content);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Saas/About/Content2.jsx


const Content2_Content = ({ list , rtl  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "content",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "img main-img2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_2_1.png",
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_2_2.png",
                                    alt: "",
                                    className: "img-body"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section-head mb-30 style-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    children: [
                                        rtl ? "أكثر من 100" : "100+ Payment",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: rtl ? "بوابة دفع" : "Gateways"
                                        }),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: rtl ? "مع سوق Iteck ، اختر من بين مئات بوابات الدفع لعملائك. من PayPal إلى Stripe إلى Skrill ، Visa Debit ، Master Card ، إلخ" : "With Iteck Marketplace, choose from hundreds of payment gateways for your customers. From PayPal to Stripe to Skrill, Visa Debit, Master Card, etc"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "list-icon",
                                children: list.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: item.icon
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: item.title
                                            })
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/page-contact-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-50",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: rtl ? "احجز عرضًا تجريبيًا مجانيًا " : "Book A Free Demo"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Content2 = (Content2_Content);

;// CONCATENATED MODULE: ./src/components/Saas/About/Content3.jsx


const Content3_Content = ({ texts , number , rtl  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "content pb-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-4 order-2 order-lg-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section-head mb-30 style-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    children: [
                                        rtl ? "سهل" : "Easy To",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: rtl ? "التخصيص" : "Customizable"
                                        }),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: texts.text1
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-20",
                                children: texts.text2
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center mt-70",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img me-2 flex-shrink-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/about/owners.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "inf",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "color-blue5 mb-0 lh-1",
                                                children: number
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: rtl ? "أصحاب السوق يثقون بنا" : "Marketplace Owners Trust Us"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 order-0 order-lg-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "img main-img3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_3_1.png",
                                    alt: "",
                                    className: "img-body"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_3_2.png",
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_3_3.png",
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_3_4.png",
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s5_3_5.png",
                                    alt: ""
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Content3 = (Content3_Content);

;// CONCATENATED MODULE: ./src/components/Saas/About/index.jsx






const About = ({ noPaddingTop , rtl  })=>{
    const data = rtl ? about_rtl_namespaceObject : about_namespaceObject;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `about ${noPaddingTop ? "pt-0 pb-150" : "section-padding"} style-5`,
        "data-scroll-index": "1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Content1, {
                links: data.lineLinks,
                rtl: rtl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Content2, {
                list: data.list,
                rtl: rtl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Content3, {
                texts: data.texts,
                rtl: rtl,
                number: about_namespaceObject.number
            })
        ]
    });
};
/* harmony default export */ const Saas_About = (About);


/***/ }),

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_Features)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Saas/features.json
const features_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/features/1.png","title":"Store Hours and Vacation","descripition":"Ideal for businesses that are seasonal or operate between fixed hours."},{"image":"/assets/img/icons/features/2.png","title":"Coupon Management","descripition":"Set up irresistible deals and offers with flexible discount promo codes."},{"image":"/assets/img/icons/features/3.png","title":"Product Import and Export","descripition":"Import products from and export products to CSV from vendor dashboard."},{"image":"/assets/img/icons/features/4.png","title":"Inquiry and Support Ticket System","descripition":"Interaction with sellers help buyers to make better purchase decisions."},{"image":"/assets/img/icons/features/5.png","title":"Membership Subscription","descripition":"Offer membership plans for sellers, free and paid. Accept recurring fees."},{"image":"/assets/img/icons/features/6.png","title":"Invoice and Shipping Labels","descripition":"Order fulfillment made easy with store invoices and shipping labels."},{"image":"/assets/img/icons/features/7.png","title":"GEO Location and Radius Search","descripition":"Allow searching products or services near the user’s current location."},{"image":"/assets/img/icons/features/8.png","title":"Shipment and Delivery","descripition":"Share tracking of deliveries, notify when shipping status changes."}]');
;// CONCATENATED MODULE: ./src/data/Saas/features-rtl.json
const features_rtl_namespaceObject = JSON.parse('[{"image":"/assets/img/icons/features/1.png","title":"ساعات العمل والعطلات","descripition":"مثالي للشركات الموسمية أو التي تعمل بين ساعات محددة."},{"image":"/assets/img/icons/features/2.png","title":" إدارة قسائم الشراء","descripition":"قم بإعداد صفقات وعروض لا تقاوم باستخدام أكواد خصم مرنة."},{"image":"/assets/img/icons/features/3.png","title":"استيراد المنتجات وتصديرها","descripition":"استيراد المنتجات من وتصدير المنتجات إلى CSV من لوحة معلومات البائع."},{"image":"/assets/img/icons/features/4.png","title":"نظام الاستعلام وتذاكر الدعم","descripition":"يساعد التفاعل مع البائعين المشترين على اتخاذ قرارات شراء أفضل."},{"image":"/assets/img/icons/features/5.png","title":"اشتراك العضوية","descripition":"عرض خطط عضوية للبائعين ، مجانية ومدفوعة. قبول الرسوم المتكررة."},{"image":"/assets/img/icons/features/6.png","title":"ملصقات الشحن والفواتير","descripition":"أصبح تلبية الطلبات أمرًا سهلاً مع فواتير المتجر وملصقات الشحن."},{"image":"/assets/img/icons/features/7.png","title":" موقع جيو وبحث نصف القطر","descripition":"السماح بالبحث عن المنتجات أو الخدمات بالقرب من الموقع الحالي للمستخدم."},{"image":"/assets/img/icons/features/8.png","title":"الشحن والتسليم","descripition":"مشاركة تتبع عمليات التسليم ، وإخطار عندما تتغير حالة الشحن."}]');
;// CONCATENATED MODULE: ./src/components/Saas/Features.jsx



const Features = ({ isServices , rtl  })=>{
    const featuresData = rtl ? features_rtl_namespaceObject : features_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `features section-padding style-5 ${isServices ? "pt-50" : "bg-gray5"}`,
        "data-scroll-index": "3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: isServices ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section-head text-center mb-60 style-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: "mb-20",
                                    children: [
                                        rtl ? "" : "Our",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: rtl ? "خدماتنا" : "Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: rtl ? "نحن نقدم حلول تكنولوجيا المعلومات المثالية لعملك" : "We provide perfect IT Solutions for your business"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section-head text-center mb-60 style-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: "mb-20",
                                    children: [
                                        "Other Awesome ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Features"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Iteck Dashboard is a powerhouse when it comes to the feature list. This ensures you have every functionality you need to build, run, and expand your marketplace"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: featuresData.map((feature, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "features-card mb-30 style-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: feature.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "card-title",
                                                    children: feature.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text",
                                                    children: feature.descripition
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, i))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Saas_Features = (Features);


/***/ }),

/***/ 4367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_Pricing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Saas/plans.json
const plans_namespaceObject = JSON.parse('[{"title":"basic","price":{"monthly":"Free","yearly":"Free"},"short_description":"Free forever.!","description":"No credit card required.","features":[{"title":"Unlimited Projects","checked":true},{"title":"Lifetime Support & SEO Experts Consult","checked":true},{"title":"Advance Dashboard","checked":true},{"title":"Data Security & Backup","content":"200 GB"},{"title":"Cloud Hosting & Domain","checked":false},{"title":"Free Google Analysis","content":"$5/Year"},{"title":"Multi-Vendor Marketplace Support","checked":false},{"title":"Seller App","checked":false},{"title":"Auto Lifetime Upgrade","checked":false},{"title":"Free SSL Certificate","checked":false}]},{"title":"premium Plan","price":{"monthly":"$49","yearly":"$49"},"short_description":"Free forever.!","description":"No credit card required.","bestChoice":true,"features":[{"title":"Unlimited Projects","checked":true},{"title":"Lifetime Support & SEO Experts Consult","checked":true},{"title":"Advance Dashboard","checked":true},{"title":"Data Security & Backup","content":"1 TB"},{"title":"Cloud Hosting & Domain","checked":false},{"title":"Free Google Analysis","checked":true},{"title":"Multi-Vendor Marketplace Support","checked":false},{"title":"Seller App","checked":true},{"title":"Auto Lifetime Upgrade","checked":true},{"title":"Free SSL Certificate","checked":false}]},{"title":"ultimate","price":{"monthly":"$99","yearly":"$99"},"short_description":"Free forever.!","description":"No credit card required.","features":[{"title":"Unlimited Projects","checked":true},{"title":"Lifetime Support & SEO Experts Consult","checked":true},{"title":"Advance Dashboard","checked":true},{"title":"Data Security & Backup","content":"Unlimited"},{"title":"Cloud Hosting & Domain","checked":true},{"title":"Free Google Analysis","content":true},{"title":"Multi-Vendor Marketplace Support","checked":true},{"title":"Seller App","checked":true},{"title":"Auto Lifetime Upgrade","checked":true},{"title":"Free SSL Certificate","checked":true}]}]');
;// CONCATENATED MODULE: ./src/data/Saas/plans-rtl.json
const plans_rtl_namespaceObject = JSON.parse('[{"title":"أساسي","price":{"monthly":"مجانى","yearly":"مجانى"},"short_description":"مجانى للابد.!","description":"بطاقة الإئتمان غير مطالب بها.","features":[{"title":"مشاريع غير محدودة","checked":true},{"title":" دعم مدى الحياة واستشارة خبراء تحسين محركات البحث","checked":true},{"title":"لوحة تحكم متقدمة","checked":true},{"title":"أمن البيانات والنسخ الاحتياطي","content":"200 GB"},{"title":"الاستضافة السحابية والمجال","checked":false},{"title":"تحليل جوجل مجاني","content":"$5/سنويا"},{"title":"دعم السوق متعدد البائعين","checked":false},{"title":"تطبيق البائع","checked":false},{"title":"ترقية تلقائية مدى الحياة ","checked":false},{"title":"Free SSL Certificate","checked":false}]},{"title":"الممتازة","price":{"monthly":"$49","yearly":"$49"},"short_description":"مجانى للابد.!","description":"بطاقة الإئتمان غير مطالب بها.","bestChoice":true,"features":[{"title":"مشاريع غير محدودة","checked":true},{"title":" دعم مدى الحياة واستشارة خبراء تحسين محركات البحث","checked":true},{"title":"لوحة تحكم متقدمة","checked":true},{"title":"أمن البيانات والنسخ الاحتياطي","content":"1 TB"},{"title":"الاستضافة السحابية والمجال","checked":false},{"title":"تحليل جوجل مجاني","checked":true},{"title":"دعم السوق متعدد البائعين","checked":false},{"title":"تطبيق البائع","checked":true},{"title":"ترقية تلقائية مدى الحياة ","checked":true},{"title":"Free SSL Certificate","checked":false}]},{"title":"الخاصة","price":{"monthly":"$99","yearly":"$99"},"short_description":"مجانى للابد.!","description":"بطاقة الإئتمان غير مطالب بها.","features":[{"title":"مشاريع غير محدودة","checked":true},{"title":" دعم مدى الحياة واستشارة خبراء تحسين محركات البحث","checked":true},{"title":"لوحة تحكم متقدمة","checked":true},{"title":"أمن البيانات والنسخ الاحتياطي","content":"غير محدود"},{"title":"الاستضافة السحابية والمجال","checked":true},{"title":"تحليل جوجل مجاني","content":true},{"title":"دعم السوق متعدد البائعين","checked":true},{"title":"تطبيق البائع","checked":true},{"title":"ترقية تلقائية مدى الحياة ","checked":true},{"title":"Free SSL Certificate","checked":true}]}]');
;// CONCATENATED MODULE: ./src/components/Saas/Pricing.jsx





const Pricing = ({ rtl  })=>{
    const data = (0,external_react_.useMemo)(()=>rtl ? plans_rtl_namespaceObject : plans_namespaceObject, [
        rtl
    ]);
    const { 0: features , 1: setFeatures  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        let formattedFeatures = [];
        data[0].features.forEach((feature)=>formattedFeatures.push({
                title: feature.title,
                data: []
            }));
        data.forEach((plan, i)=>{
            plan.features.forEach((feature, x)=>{
                formattedFeatures[x].data[i] = feature.checked !== undefined ? feature.checked : feature.content;
            });
        });
        setFeatures(formattedFeatures);
    }, [
        data
    ]);
    const togglePlanDuration = (duration)=>{
        let monthly = document.querySelectorAll(".monthly_price");
        let yearly = document.querySelectorAll(".yearly_price");
        if (duration === "monthly") {
            monthly.forEach((price)=>price.classList.add("d-block"));
            monthly.forEach((price)=>price.classList.remove("d-none"));
            yearly.forEach((price)=>price.classList.add("d-none"));
            yearly.forEach((price)=>price.classList.remove("d-block"));
        } else {
            monthly.forEach((price)=>price.classList.add("d-none"));
            monthly.forEach((price)=>price.classList.remove("d-block"));
            yearly.forEach((price)=>price.classList.add("d-block"));
            yearly.forEach((price)=>price.classList.remove("d-none"));
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "pricing section-padding style-5",
        "data-scroll-index": "4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head text-center mb-60 style-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "اختر السعر" : "Choose Plan and",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: rtl ? "واضغط بدأ" : "Kick-start"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: rtl ? "سواء كنت قد بدأت للتو باختبار سريع أو توسيع نطاق المؤسسة ، فقد قمنا بتغطيتك." : "Whether you’re just getting started with rapid testing or scaling across the organization, we’ve got you covered."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pricing-tabsHead text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "price-radios",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-check form-check-inline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "form-check-input",
                                        type: "radio",
                                        name: "inlineRadioOptions",
                                        id: "monthly-input",
                                        value: "option1",
                                        onChange: (e)=>togglePlanDuration("monthly")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "form-check-label",
                                        htmlFor: "monthly-input",
                                        children: rtl ? "تدفع شهريا" : "Billed Monthly"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-check form-check-inline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "form-check-input",
                                        type: "radio",
                                        name: "inlineRadioOptions",
                                        id: "yearly-input",
                                        value: "option2",
                                        defaultChecked: true,
                                        onChange: (e)=>togglePlanDuration("yearly")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        className: "form-check-label",
                                        htmlFor: "yearly-input",
                                        children: [
                                            rtl ? "تدفع سنويا" : "Billed yearly",
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "alert-danger text-danger rounded-pill ms-1",
                                                children: "-15%"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "price-head",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "price-headTitle",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/icons/price_s5.png",
                                            alt: ""
                                        })
                                    }),
                                    data.map((plan, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `price-headItem ${plan.bestChoice && "bg-gray5"}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: plan.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                    className: `monthly_price ${plan.bestChoice && "color-blue5"}`,
                                                    children: [
                                                        plan.price.monthly,
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                "/",
                                                                rtl ? "شهريا" : "mo"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                    className: `yearly_price ${plan.bestChoice && "color-blue5"}`,
                                                    children: [
                                                        plan.price.yearly,
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                "/",
                                                                rtl ? "سنويا" : "yr"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: plan.short_description
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: plan.description
                                                }),
                                                plan.bestChoice && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "label",
                                                    children: rtl ? "أفضل خيار" : "best choice"
                                                })
                                            ]
                                        }, i))
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "price-body",
                                children: features.map((feature, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "price-bodyItems",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "price-bodyTitle",
                                                children: feature.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "price-item",
                                                children: typeof feature.data[0] === "boolean" ? feature.data[0] && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-check2"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: feature.data[0]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "price-item bg-gray5",
                                                children: typeof feature.data[1] === "boolean" ? feature.data[1] && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-check2"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: feature.data[1]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "price-item",
                                                children: typeof feature.data[2] === "boolean" ? feature.data[2] && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bi bi-check2"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: feature.data[2]
                                                })
                                            })
                                        ]
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "price-foot",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "price-footTitle"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "price-footItem",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: rtl ? "/rtl-page-contact" : "/page-contact-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        " ",
                                                        rtl ? "نبدأ الآن " : "Get Started Now",
                                                        " "
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "price-footItem bg-gray5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: rtl ? "/rtl-page-contact" : "/page-contact-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        " ",
                                                        rtl ? "نبدأ الآن " : "Get Started Now",
                                                        " "
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "price-footItem",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: rtl ? "/rtl-page-contact" : "/page-contact-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        " ",
                                                        rtl ? "نبدأ الآن " : "Get Started Now",
                                                        " "
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Saas_Pricing = (Pricing);


/***/ }),

/***/ 2720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _data_Saas_testimonials_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6808);
/* harmony import */ var _data_Saas_testimonials_rtl_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1475);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
]);
const Testimonials = ({ rtl  })=>{
    const testimonialsData = rtl ? _data_Saas_testimonials_rtl_json__WEBPACK_IMPORTED_MODULE_4__ : _data_Saas_testimonials_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "testimonials section-padding bg-gray5 style-5",
        "data-scroll-index": "5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-head text-center mb-60 style-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "مراجعات" : "Clients",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: rtl ? "العملاء" : "Reviews"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: rtl ? "لقد أحببت Iteck من آلاف العملاء في جميع أنحاء العالم وحصلت على ثقة من الشركات الكبرى." : "Iteck loved from thoudsands customer worldwide and get trusted from big companies."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "testimonial-slider position-relative style-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                            className: "swiper-container pb-70",
                            spaceBetween: 0,
                            slidesPerView: 4,
                            speed: 1000,
                            pagination: {
                                el: ".testimonial-slider.style-5 .swiper-pagination",
                                clickable: true
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
                            children: testimonialsData.map((testimonial, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "#",
                                        className: "testi-card style-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "stars",
                                                children: Array(testimonial.stars).fill().map((_, t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fas fa-star"
                                                    }, t))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                children: testimonial.comment
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "user mt-40 text-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "icon-80 rounded-circle img-cover overflow-hidden m-auto",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: testimonial.author.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        children: testimonial.author.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        children: testimonial.author.position
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, i))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-pagination"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1475:
/***/ ((module) => {

module.exports = JSON.parse('[{"stars":5,"comment":"“أفضل لوحة تحكم لمتجرك ، woo أو shopify. قوية ومرنة للغاية. مُستَحسَن!”","author":{"image":"/assets/img/team/1.jpeg","name":"توماس اريستين","position":"مدير مبيعات في Amazon Retail"}},{"stars":5,"comment":"“تقدم Iteck الكثير من الميزات للمساعدة في زيادة CRO بشكل مذهل.”","author":{"image":"/assets/img/team/2.jpeg","name":"كارلوس مارتينيلي","position":"مدير مبيعات بشركة اى باي"}},{"stars":5,"comment":"“شكرا جزيلا لدعم فريق Iteck. سريع ومهني وودود للغاية. هذا المنتج يتم تحديثه وتحسينه كل يوم.”","author":{"image":"/assets/img/team/3.jpeg","name":"إدوارد ميندي","position":"مدير مبيعات"}},{"stars":5,"comment":"“10/10 لجميع ما يتعلق بلوحة معلومات Iteck E-Com. إنه مثالي للغاية!”","author":{"image":"/assets/img/team/4.jpeg","name":"لوكاس ديني","position":"بيع إدارة المنتجات في فليبكارت"}}]');

/***/ }),

/***/ 6808:
/***/ ((module) => {

module.exports = JSON.parse('[{"stars":5,"comment":"“Best dashboard for any your store, woo or shopify. Powerful and very flexiable. Recommended!”","author":{"image":"/assets/img/team/1.jpeg","name":"Thomas Eristen","position":"Sale Director at Amazon Retail"}},{"stars":5,"comment":"“Iteck provide very much features to help increase CRO so amazing.”","author":{"image":"/assets/img/team/2.jpeg","name":"Carlos Martinelli","position":"SEO & Marketing at Ebay Global"}},{"stars":5,"comment":"“Big thank to team support of Iteck. Fast, professional and extremly friendly. This product alway update and ehance everyday.”","author":{"image":"/assets/img/team/3.jpeg","name":"Eduard Mendy","position":"VP of Sale Development"}},{"stars":5,"comment":"“Best dashboard for any your store, woo or shopify. Powerful and very flexiable. Recommended!”","author":{"image":"/assets/img/team/4.jpeg","name":"Lucas Digne","position":"Sale Product Management at Flipkart"}}]');

/***/ })

};
;