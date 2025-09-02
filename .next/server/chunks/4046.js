"use strict";
exports.id = 4046;
exports.ids = [4046];
exports.modules = {

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ProductDetails)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/FadeInOut/index.jsx


const UNMOUNTED = "unmounted";
const EXITED = "exited";
const ENTERING = "entering";
const ENTERED = "entered";
const EXITING = "exiting";
const transitionStyles = {
    entering: {
        opacity: 0
    },
    entered: {
        opacity: 1
    },
    exiting: {
        opacity: 0
    },
    exited: {
        opacity: 0
    }
};
class FadeInOut extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            status: UNMOUNTED
        };
    }
    componentDidMount() {
        const { show  } = this.props;
        if (show) {
            this.performEnter();
        }
    }
    componentDidUpdate(prevProps) {
        let nextStatus = null;
        if (prevProps !== this.props) {
            const { status  } = this.state;
            if (this.props.show) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(nextStatus);
    }
    updateStatus(nextStatus) {
        if (nextStatus !== null) {
            if (nextStatus === ENTERING) {
                this.performEnter();
            } else {
                this.performExit();
            }
        } else if (this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    }
    performEnter() {
        this.setState({
            status: ENTERING
        }, ()=>{
            setTimeout(()=>{
                this.setState({
                    status: ENTERED
                }, ()=>{});
            }, 0);
        });
    }
    performExit() {
        const { duration  } = this.props;
        this.setState({
            status: EXITING
        }, ()=>{
            setTimeout(()=>{
                this.setState({
                    status: EXITED
                }, ()=>{});
            }, duration);
        });
    }
    render() {
        const { status  } = this.state;
        if (status === UNMOUNTED) {
            return null;
        }
        const { children , duration , className , style  } = this.props;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: className,
            style: {
                ...style,
                transition: `opacity ${duration}ms ease-in-out`,
                opacity: 0.1,
                ...transitionStyles[status]
            },
            children: children
        });
    }
}
FadeInOut.defaultProps = {
    show: false,
    duration: 300
};
/* harmony default export */ const components_FadeInOut = (FadeInOut);

;// CONCATENATED MODULE: ./src/data/App/product-details.json
const product_details_namespaceObject = JSON.parse('{"nav_pills":[{"id":"pills-description","title":"Description"},{"id":"pills-reviews","title":"Reviews (3)"},{"id":"pills-information","title":"Additional Information"}],"nav_tabs":[{"id":"pills-description","show":true},{"id":"pills-reviews","show":false},{"id":"pills-information","show":false}]}');
;// CONCATENATED MODULE: ./src/data/App/product-details-rtl.json
const product_details_rtl_namespaceObject = JSON.parse('{"nav_pills":[{"id":"pills-description","title":"الوصف"},{"id":"pills-reviews","title":"المراجعات (3)"},{"id":"pills-information","title":"معلومات إضافية"}],"nav_tabs":[{"id":"pills-description","show":true},{"id":"pills-reviews","show":false},{"id":"pills-information","show":false}]}');
;// CONCATENATED MODULE: ./src/components/ProductDetails/index.jsx





const ProductDetails = ({ style ="4" , rtl  })=>{
    const data = rtl ? product_details_rtl_namespaceObject : product_details_namespaceObject;
    const { 0: tabs , 1: setTabs  } = (0,external_react_.useState)(data.nav_tabs);
    const openTab = (tabId)=>{
        // Remove class 'current' from all tab-links
        document.querySelectorAll(`.product-details .nav-link`).forEach((el)=>el.classList.remove("active"));
        // Add class 'current' to clicked tab-link
        document.querySelector(`.product-details .nav-link[id="${tabId}-tab"]`).classList.add("active");
        // Close all tabs and open tab with id == tabId
        setTabs((prev_tabs)=>{
            let newTabs = structuredClone(prev_tabs);
            let newContents = newTabs.map((tab)=>{
                tab.show = false;
                return tab;
            });
            let idx = newContents.findIndex((tab)=>tab.id === tabId);
            newContents[idx].show = true;
            newTabs = newContents;
            return newTabs;
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "product-details pt-100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "nav nav-pills",
                    id: "pills-tab",
                    role: "tablist",
                    children: data.nav_pills.map((nav, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: `nav-link ${i === 0 ? "active" : ""}`,
                                id: `${nav.id}-tab`,
                                "data-bs-toggle": "pill",
                                "data-bs-target": `#${nav.id}`,
                                type: "button",
                                role: "tab",
                                "aria-controls": nav.id,
                                "aria-selected": "true",
                                onClick: ()=>openTab(nav.id),
                                children: nav.title
                            })
                        }, i))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "tab-content",
                    id: "pills-tabContent",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_FadeInOut, {
                            show: tabs[0].show,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tab-pane show active",
                                id: "pills-description",
                                role: "tabpanel",
                                "aria-labelledby": "pills-description-tab",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "content-info text-center pb-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text mb-30",
                                            children: rtl ? "عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي." : "Nulla velit turpis, tincidunt eget elit vitae, congue sodales metus. Sed sed neque luctus, sollicitudin sem sed, consectetur libero. Nunc mollis turpis velit, vitae laoreet sapien vehicula nec. Curabitur blandit ac libero eu dictum. Nullam vehicula hendrerit nisl eu laoreet. Cras non velit est. Vivamus tincidunt lacus est, at auctor elit finibus et. Maecenas a consequat metus. Aliquam ac nisl nec est mollis faucibus eget vitae eros. Duis bibendum vestibulum felis id mattis."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text",
                                            children: rtl ? "عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي." : "Suspendisse metus sapien, lacinia eu lectus sit amet, consequat mollis felis. Mauris convallis augue quis semper venenatis. Vivamus imperdiet leo at neque efficitur, id faucibus arcu eleifend. Vivamus in massa bibendum, aliquet est quis, ornare lacus."
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_FadeInOut, {
                            show: tabs[1].show,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tab-pane show active",
                                id: "pills-reviews",
                                role: "tabpanel",
                                "aria-labelledby": "pills-reviews-tab",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "product-reviews pt-30",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row gx-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-7",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "reviews-content pt-30",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            className: "color-000 mb-40 text-capitalize",
                                                            children: [
                                                                " ",
                                                                rtl ? "المراجعات 02" : "02 reviews",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "comment-replay-cont bg-light py-5 px-4 mb-20",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "d-flex comment-cont",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/assets/img/team/2.jpeg",
                                                                            alt: ""
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "inf",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "title d-flex justify-content-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                        className: "fw-bold fs-14px",
                                                                                        children: rtl ? "روبوتات داونى" : "Robert Downey Jr"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "time fs-12px text-uppercase d-inline-block",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "rate",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                className: "stars",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "text color-000 fs-12px mt-10",
                                                                                children: rtl ? "عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي." : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "comment-replay-cont bg-light py-5 px-4 mb-20",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "d-flex comment-cont",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/assets/img/team/4.jpeg",
                                                                            alt: ""
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "inf",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "title d-flex justify-content-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                        className: "fw-bold fs-14px",
                                                                                        children: rtl ? "بين كويل" : "Ben Chiwell"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "time fs-12px text-uppercase",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "rate",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                className: "stars",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star active"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "text color-000 fs-12px mt-10",
                                                                                children: rtl ? "عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي." : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria"
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
                                                className: "col-lg-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    className: "comment-form d-block pt-30",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            className: "color-000 mb-40 text-capitalize",
                                                            children: [
                                                                " ",
                                                                rtl ? "اضافة تعليق" : "Add a review",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "col-lg-12",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                            className: "text-uppercase mb-1",
                                                                            children: rtl ? "تقييمك" : "your rating"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "rate-stars",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "radio",
                                                                                    name: "star",
                                                                                    defaultValue: "5"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "radio",
                                                                                    name: "star",
                                                                                    defaultValue: "4"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "radio",
                                                                                    name: "star",
                                                                                    defaultValue: "3"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "radio",
                                                                                    name: "star",
                                                                                    defaultValue: "2"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "radio",
                                                                                    name: "star",
                                                                                    defaultValue: "1"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "form-group mb-30",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                            className: "form-control radius-4 fs-12px p-3",
                                                                            rows: "6",
                                                                            placeholder: rtl ? "أكتب تعليقك هنا" : "Write your comment here"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "form-group mb-4 mb-lg-0",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "text",
                                                                            className: "form-control fs-12px radius-4 p-3",
                                                                            name: "name",
                                                                            placeholder: rtl ? "اسمك *" : "Your Name *"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "form-group",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "text",
                                                                            className: "form-control fs-12px radius-4 p-3",
                                                                            name: "email",
                                                                            placeholder: rtl ? "بريدك الالكتروني *" : "Your Email *"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "form-check mt-20",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                className: "form-check-input",
                                                                                type: "checkbox",
                                                                                defaultValue: "",
                                                                                id: "flexCheckDefault"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                className: "form-check-label fs-12px",
                                                                                htmlFor: "flexCheckDefault",
                                                                                children: rtl ? "احفظ اسمي والبريد الإلكتروني في هذا المتصفح لاستخدامها المرة المقبلة في تعليقي" : "Save my name & email in this browser for next time I comment"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-12",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: `btn rounded-pill bg-blue${style} fw-bold text-white mt-4`,
                                                                        target: "_blank",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                                            children: [
                                                                                " ",
                                                                                rtl ? "إرسال تعليق" : "Submit Comment",
                                                                                " "
                                                                            ]
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
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_FadeInOut, {
                            show: tabs[2].show,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tab-pane show active",
                                id: "pills-information",
                                role: "tabpanel",
                                "aria-labelledby": "pills-information-tab",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "content-info pb-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "additional-info",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: rtl ? "الوزن" : "Weight"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: " 0.6 kg "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: rtl ? "الابعاد" : "Dimensions"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: " 40 \xd7 30 \xd7 30 cm "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: rtl ? "اللون" : "Color"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: " White, Black, Red "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: rtl ? "السنة" : "Year"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: " 2021 "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: rtl ? "الشكل" : "Style"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                " ",
                                                                rtl ? "كلاسيك" : "Classic, Modern",
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
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
/* harmony default export */ const components_ProductDetails = (ProductDetails);


/***/ }),

/***/ 9531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const addToCart = ({ style , rtl  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "qyt-addCart",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "me-4 mb-1 color-000 fw-bold fs-14px",
                children: rtl ? "الكمية" : "QTY"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "add-more",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "qt-minus",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-minus"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "qt",
                        children: "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "qt-plus",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: `btn rounded-pill bg-blue${style} fw-bold text-white`,
                target: "_blank",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                    children: [
                        " ",
                        rtl ? "أضف إلى السلة" : "Add To Cart",
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fav-btn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fas fa-heart"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToCart);


/***/ }),

/***/ 3116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ColorSelect = ({ rtl  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "select-color",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "me-4 mb-1 color-000 fw-bold fs-14px",
                children: rtl ? "إختر لون" : "Select Color"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "colors-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-check form-check-inline",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "form-check-input",
                                type: "radio",
                                name: "colorSelect",
                                id: "colorSelect1",
                                defaultChecked: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-check-label",
                                htmlFor: "colorSelect1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "color-circle gray"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-check form-check-inline",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "form-check-input",
                                type: "radio",
                                name: "colorSelect",
                                id: "colorSelect2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-check-label",
                                htmlFor: "colorSelect2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "color-circle black"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-check form-check-inline",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "form-check-input",
                                type: "radio",
                                name: "colorSelect",
                                id: "colorSelect3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-check-label",
                                htmlFor: "colorSelect3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "color-circle blue"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-check form-check-inline",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "form-check-input",
                                type: "radio",
                                name: "colorSelect",
                                id: "colorSelect4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-check-label",
                                htmlFor: "colorSelect4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "color-circle green"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSelect);


/***/ }),

/***/ 9538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MainInfo = ({ mainInfo , rtl  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "category",
                children: mainInfo.category
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "title",
                children: mainInfo.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rate",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "stars",
                        children: Array(5).fill(0).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `fas fa-star ${index + 1 <= mainInfo.rating ? "active" : ""}`
                            }, index))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "rev ms-1",
                        children: [
                            mainInfo.reviews,
                            " ",
                            rtl ? "المراجعات" : "Reviews"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "price",
                children: [
                    "$",
                    mainInfo.price
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "info-text",
                children: mainInfo.discription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "info-list",
                children: mainInfo.features.map((feature, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi bi-dash me-1"
                            }),
                            feature
                        ]
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainInfo);


/***/ }),

/***/ 8752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MoreInfo = ({ moreInfo , rtl  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "more-info pt-20 mt-1 border-1 border-top brd-gray",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-uppercase fs-14px color-666 mb-1",
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        className: "color-000",
                        children: [
                            rtl ? "الموديل" : "SKU",
                            ":"
                        ]
                    }),
                    " ",
                    moreInfo.SKU
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "fs-14px color-666 mb-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        className: "color-000",
                        children: [
                            rtl ? "التصنيف" : "Category",
                            ":"
                        ]
                    }),
                    " ",
                    moreInfo.category
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "fs-14px color-666 mb-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        className: "color-000",
                        children: [
                            rtl ? "الكلمات الدلالية" : "Tags",
                            ":"
                        ]
                    }),
                    " ",
                    moreInfo.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "#",
                            className: "me-1",
                            children: [
                                tag,
                                ", "
                            ]
                        }, index))
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreInfo);


/***/ }),

/***/ 7675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ProductHead = ({ productName , rtl  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "section-head text-center mb-80 style-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "page-links color-999",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#",
                    className: "me-2",
                    children: rtl ? "الرئيسية" : "Home"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "me-2",
                    children: "/"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#",
                    className: "me-2",
                    children: rtl ? "متجر اى تيك" : "Iteck’s Store"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "me-2",
                    children: "/"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#",
                    className: "color-000",
                    children: productName
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductHead);


/***/ }),

/***/ 29:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.FreeMode,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Thumbs
]);
const ProductImages = ({ productImages  })=>{
    const { 0: galleryThumbs , 1: setGalleryThumbs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-6",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product-slider",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    className: "swiper-container gallery-thumbs",
                    spaceBetween: 20,
                    slidesPerView: 6,
                    freeMode: true,
                    watchSlidesProgress: true,
                    direction: "vertical",
                    onInit: (swiper)=>{
                        setGalleryThumbs(swiper);
                    },
                    children: productImages.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "img",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: image,
                                    alt: ""
                                })
                            })
                        }, index))
                }),
                galleryThumbs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    className: "swiper-container gallery-top",
                    spaceBetween: 10,
                    navigation: false,
                    thumbs: {
                        swiper: galleryThumbs
                    },
                    children: productImages.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "img",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: image,
                                    alt: ""
                                })
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductImages);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SocialIcons = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "socail-icons",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fab fa-twitter"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fab fa-facebook-f"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fab fa-instagram"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fab fa-pinterest"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fab fa-linkedin-in"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIcons);


/***/ }),

/***/ 749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7675);
/* harmony import */ var _ProductImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _MainInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9538);
/* harmony import */ var _ColorSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3116);
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9531);
/* harmony import */ var _MoreInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8752);
/* harmony import */ var _SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9901);
/* harmony import */ var _data_App_product_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5800);
/* harmony import */ var _data_App_product_rtl_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9027);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductImages__WEBPACK_IMPORTED_MODULE_2__]);
_ProductImages__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Product = ({ style ="4" , rtl  })=>{
    const data = rtl ? _data_App_product_rtl_json__WEBPACK_IMPORTED_MODULE_9__ : _data_App_product_json__WEBPACK_IMPORTED_MODULE_8__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "product pt-50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductHead__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    productName: data.title,
                    rtl: rtl
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row gx-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductImages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                productImages: data.images
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            mainInfo: data.mainInfo,
                                            rtl: rtl
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "color-quantity",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ColorSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    rtl: rtl
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddToCart__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    rtl: rtl,
                                                    style: style
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MoreInfo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            moreInfo: data.moreInfo,
                                            rtl: rtl
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialIcons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _data_App_related_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1791);
/* harmony import */ var _data_App_related_products_rtl_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
]);
const RelatedProducts = ({ style ="4" , rtl  })=>{
    const data = rtl ? _data_App_related_products_rtl_json__WEBPACK_IMPORTED_MODULE_4__ : _data_App_related_products_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "related-products section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center title",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: rtl ? "منتجات مشابهة" : "Related Products"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "related-products-slider position-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                            className: "swiper-container",
                            slidesPerView: 5,
                            spaceBetween: 24,
                            speed: 1000,
                            pagination: false,
                            navigation: {
                                nextEl: ".related-products-slider .swiper-button-next",
                                prevEl: ".related-products-slider .swiper-button-prev"
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
                                    slidesPerView: 3
                                },
                                1200: {
                                    slidesPerView: 5
                                }
                            },
                            children: data.map((product, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "product-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: product.image,
                                                        alt: ""
                                                    }),
                                                    product.label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: `label ${product.label === "new" ? "new" : "sale-off"}`,
                                                        children: product.label
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: `fav-btn ${product.liked ? "active" : ""}`,
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-heart"
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        className: "category",
                                                        children: product.category
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "title",
                                                        children: product.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "rate",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "stars",
                                                                children: Array(5).fill(0).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: `fas fa-star ${index + 1 <= product.rating ? "active" : ""}`
                                                                    }, index))
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "price",
                                                children: typeof product.price === "string" ? "$" + product.price : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "price-sale",
                                                            children: [
                                                                "$",
                                                                product.price.new
                                                            ]
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "old-price",
                                                            children: [
                                                                "$",
                                                                product.price.old
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: `btn rounded-pill bg-blue${style} fw-bold text-white mt-20`,
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        " ",
                                                        rtl ? "اضف إلى السلة" : "Add To Cart",
                                                        " "
                                                    ]
                                                })
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
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9027:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"نظارة سامسونج للواقع الافتراضى الجديدة","images":["/assets/img/shop/products/pr1.png","/assets/img/shop/products/pr2.png","/assets/img/shop/products/pr3.png","/assets/img/shop/products/pr4.png","/assets/img/shop/products/pr5.png"],"mainInfo":{"title":"نظارة سامسونج للواقع الافتراضى الجديدة","category":"سامسونج","rating":4,"reviews":3,"price":222.65,"discription":"بدون منصة رقمية قوية ، يضيع الوقت والمال ، ويبقى المحتوى دون أن يلاحظه أحد ، ويختفي العملاء المحتملون.","features":[" نظارة واقع افتراضى تدعم الجيل الرابع والخامس","تتكامل مع جميع الأجهزة كمحمول ,  PS4, PS5, etc","مزامنة وحفظ البيانات مع السحابة"]},"moreInfo":{"SKU":"VRO20-5112","Category":"تكنولوجى","tags":["سامسونج","oculus","vr","نظارة","ar"]}}');

/***/ }),

/***/ 5800:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"Samsung New VR Headset Oculus 2.0","images":["/assets/img/shop/products/pr1.png","/assets/img/shop/products/pr2.png","/assets/img/shop/products/pr3.png","/assets/img/shop/products/pr4.png","/assets/img/shop/products/pr5.png"],"mainInfo":{"title":"Samsung New VR Headset Oculus 2.0","category":"Samsung","rating":4,"reviews":3,"price":222.65,"discription":"Without a strong digital platform, time and money are wasted, content sits unnoticed, and prospective clients disappear.","features":["VR 2 in 1, support 3D/4D AR","Intergrate with all devices as mobile, PS4, PS5, etc","Sync and Save data with Cloud"]},"moreInfo":{"SKU":"VRO20-5112","Category":"Technology","tags":["samsung","oculus","vr","headset","ar"]}}');

/***/ }),

/***/ 5896:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/shop/products/1.png","label":"جديد","liked":true,"category":"ايسوس","title":"ايسوس كروم بوك  -10.2 inch, 256GB","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/2.png","label":"15% خصم","liked":false,"category":"ابل","title":"ماك بوك 2018, 1 TB","rating":5,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"/assets/img/shop/products/3.png","liked":false,"category":"سامسونج","title":"نظارات الواقع الافتراض من سامسونج ","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/4.png","liked":false,"category":"اسم البراند","title":"ايفون 6s ذهبي 64GB","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/5.png","liked":false,"category":"اكس بوكس","title":"اكس بوكس اذرعه تحكم","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/6.png","label":"15% خصم","liked":false,"category":"سونى","title":"كاميرا سونى","rating":4,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"/assets/img/shop/products/7.png","liked":false,"category":"dji2","title":"DJI II Phantom 4 Quad Drone With Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/8.png","liked":false,"category":"gopro","title":"Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera","rating":4,"reviews":3,"price":"197.00"}]');

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/shop/products/1.png","label":"new","liked":true,"category":"asus","title":"ASUS Chromebook Flip -10.2 inch, 256GB","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/2.png","label":"15% off","liked":false,"category":"apple","title":"Macbook Air 2018, 1 TB","rating":5,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"/assets/img/shop/products/3.png","liked":false,"category":"samsung","title":"Samsung New VR Headset, Oculus 2.0","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/4.png","liked":false,"category":"brand name","title":"iPhone 6s Gold 64GB, Retina Ready","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/5.png","liked":false,"category":"Xbox","title":"Xbox One Controller","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/6.png","label":"15% off","liked":false,"category":"amcrest","title":"Amcrest Outdoor Camera","rating":4,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"/assets/img/shop/products/7.png","liked":false,"category":"dji2","title":"DJI II Phantom 4 Quad Drone With Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"/assets/img/shop/products/8.png","liked":false,"category":"gopro","title":"Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera","rating":4,"reviews":3,"price":"197.00"}]');

/***/ })

};
;