"use strict";
exports.id = 8049;
exports.ids = [8049];
exports.modules = {

/***/ 4621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_AllNews)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Blog/AllNews/Blogs.jsx


const Blogs = ({ blogs , isWide , style , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: isWide ? "col-lg-10" : "col-lg-8",
        children: [
            blogs.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `card border-0 bg-transparent rounded-0 ${index !== blogs.length - 1 ? "border-bottom brd-gray" : "mb-lg-0 pb-lg-0"} pb-30 mb-30`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img img-cover",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: blog.cover,
                                        className: "radius-7",
                                        alt: "..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-body p-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                            className: "d-block date text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`,
                                                    children: blog.type
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
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: rtl ? "/rtl-page-single-post" : "/page-single-post-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "card-title mb-10",
                                                children: blog.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "fs-13px color-666",
                                            children: [
                                                blog.desc,
                                                " [...]"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "auther-comments d-flex small align-items-center justify-content-between op-9",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "l_side d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: `icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue${style} p-2 me-2 text-white`,
                                                            children: blog.userImgLetter
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                    className: "text-muted",
                                                                    children: rtl ? "بواسطة" : "By"
                                                                }),
                                                                " ",
                                                                blog.username
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
                }, index)),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `pagination style-5 color-${style} justify-content-center mt-60`,
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
    });
};
/* harmony default export */ const AllNews_Blogs = (Blogs);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lightgallery/react"
var react_ = __webpack_require__(1006);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/components/Blog/AllNews/Sidebar.jsx





const Sidebar = ({ data , style , rtl  })=>{
    (0,external_react_.useEffect)(()=>{
        const lg = document.querySelector(".lg-react-element");
        if (lg) lg.className = "d-flex justify-content-between flex-wrap";
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-lg-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "side-blog style-5 ps-lg-5 mt-5 mt-lg-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    action: "contact.php",
                    className: "search-form mb-50",
                    method: "post",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "بحث" : "search"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group position-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control rounded-pill",
                                    placeholder: rtl ? "اكتب وارسل" : "Type and hit enter"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "search-btn border-0 bg-transparent",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-search"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-recent-post mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "المنشورات الاخيرة" : "recent post"
                        }),
                        data.recentPosts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: rtl ? "/rtl-page-single-post" : "/page-single-post-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `post-card ${index !== data.recentPosts.length - 1 ? "pb-3 mb-3 border-bottom brd-gray" : ""}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img me-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: post.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "inf",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        rtl ? "إذا كانت هناك طريقة واحدة تعمل بها التكنولوجيا اللاسلكية" : "If there’s one way that wireless technology has",
                                                        " [...]"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-categories mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "التصنيفات" : "categories"
                        }),
                        data.categories.map((category, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                className: "cat-item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: category.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: category.count
                                    })
                                ]
                            }, index))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-newsletter mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-10 text-uppercase fw-normal",
                            children: rtl ? "نشرة الاخبار" : "newsletter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text",
                            children: rtl ? "سجل الآن للحصول على آخر التحديثات الخاصة بالعروض الترويجية والقسائم." : "Register now to get latest updates on promotions & coupons."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "contact.php",
                            className: "form-subscribe",
                            method: "post",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "email-input d-flex align-items-center py-3 px-3 bg-white mt-3 radius-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon me-2 flex-shrink-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-envelope"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            placeholder: "Email Address",
                                            className: "border-0 bg-transparent fs-12px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `btn bg-blue${style} sm-butn text-white hover-darkBlue w-100 mt-3 radius-5 py-3`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: rtl ? "أشترك" : "Subscribe"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-share mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "اجتماعي" : "social"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-twitter"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-pinterest"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-goodreads-g"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-linkedin-in"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-insta mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "انستجرام" : "our instagram"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
                            speed: 500,
                            backdropDuration: 500,
                            children: data.instagram.map((image, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: image,
                                    className: "insta-img img-cover",
                                    "data-fancybox": "gallery",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: image,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-instagram icon"
                                        })
                                    ]
                                }, index))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-tags",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: rtl ? "الكلمات الاكثر بحثا" : "popular tags"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content",
                            children: data.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "me-1",
                                    children: tag
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const AllNews_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/data/Blog/all-news.json
const all_news_namespaceObject = JSON.parse('{"blogs":[{"cover":"/assets/img/blog/6.png","type":"news","time":"12 Days ago","title":"How To Become A Python Develop Expert","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/4.jpeg","type":"news","time":"12 Days ago","title":"VR Game, Oppoturnity & Challenge","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/10.png","type":"tips & tricks","time":"12 Days ago","title":"6 Tips To Help You Build Your Social Media Effeciency & Better","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/11.png","type":"tips & tricks","time":"12 Days ago","title":"The New Trend Of Marketing With Tiktok, Should Or Not?","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/9.png","type":"tips & tricks","time":"12 Days ago","title":"Workflow Strategy For E-Shop","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/3.jpeg","type":"tips & tricks","time":"12 Days ago","title":"Wireframe For UI/UX","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/12.png","type":"tips & tricks","time":"12 Days ago","title":"Freelancer Days 2022, What’s new?","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"}],"sidebar":{"recentPosts":[{"title":"Crypto Trend 2023","image":"/assets/img/blog/1.jpeg"},{"title":"How To Become Web Developer","image":"/assets/img/blog/2.jpeg"},{"title":"Wireframe for UI/UX","image":"/assets/img/blog/3.jpeg"},{"title":"AI With Fingerprint","image":"/assets/img/blog/7.png"}],"categories":[{"title":"all","count":265},{"title":"News","count":38},{"title":"Technology","count":16},{"title":"Tips & Tricks","count":85},{"title":"Career","count":21},{"title":"Community","count":874},{"title":"Videos","count":54},{"title":"Others","count":85}],"instagram":["/assets/img/blog/1.jpeg","/assets/img/blog/10.png","/assets/img/blog/11.png","/assets/img/blog/12.png","/assets/img/blog/2.jpeg","/assets/img/blog/3.jpeg"],"tags":["WordPress","PHP","HTML/CSS","Figma","Technology","Marketing","Consultation","Seo","Envato","Psd"]}}');
;// CONCATENATED MODULE: ./src/data/Blog/all-news-rtl.json
const all_news_rtl_namespaceObject = JSON.parse('{"blogs":[{"cover":"/assets/img/blog/6.png","type":"اخبار","time":"منذ 12 ايام","title":"كيف تصبح خبير تطوير بايثون","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/4.jpeg","type":"اخبار","time":"منذ 12 ايام","title":"لعبة VR والفرصة والتحدي","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/10.png","type":"نصائح وافكار","time":"منذ 12 ايام","title":"6 نصائح لمساعدتك على بناء فعالية وسائل التواصل الاجتماعي بشكل أفضل","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/11.png","type":"نصائح وافكار","time":"منذ 12 ايام","title":"الاتجاه الجديد للتسويق مع Tiktok ، هل ينبغي أم لا؟","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/9.png","type":"نصائح وافكار","time":"منذ 12 ايام","title":"استراتيجية سير العمل للتسوق الإلكتروني","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/3.jpeg","type":"نصائح وافكار","time":"منذ 12 ايام","title":"مخطط ل UI/UX","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/12.png","type":"نصائح وافكار","time":"منذ 12 ايام","title":"أيام العمل الحر 2022, ما هو الجديد؟","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"}],"sidebar":{"recentPosts":[{"title":"اتجاه التشفير 2023","image":"/assets/img/blog/1.jpeg"},{"title":"كيف تصبح مطور ويب ","image":"/assets/img/blog/2.jpeg"},{"title":"المخططات ل UI/UX","image":"/assets/img/blog/3.jpeg"},{"title":"AI مع بصمة الإصبع","image":"/assets/img/blog/7.png"}],"categories":[{"title":"الكل","count":265},{"title":"أخبار","count":38},{"title":"تكنولوجيا","count":16},{"title":"نصائح وافكار","count":85},{"title":"الوظائف","count":21},{"title":"تواصل اجتماعي","count":874},{"title":"فيديو","count":54},{"title":"اخر","count":85}],"instagram":["/assets/img/blog/1.jpeg","/assets/img/blog/10.png","/assets/img/blog/11.png","/assets/img/blog/12.png","/assets/img/blog/2.jpeg","/assets/img/blog/3.jpeg"],"tags":["ووردبريس","بي أتش بي","HTML/CSS","فيجما","تكنولوجى","تسويق","استشارة","سيو","إنفاتو","فوتوشوب"]}}');
;// CONCATENATED MODULE: ./src/components/Blog/AllNews/index.jsx





const AllNews = ({ isWide , leftSidebar , style ="4" , rtl  })=>{
    const data = rtl ? all_news_rtl_namespaceObject : all_news_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "all-news section-padding blog bg-transparent style-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `row ${isWide ? "justify-content-center" : leftSidebar ? "gx-5" : "gx-4 gx-lg-5"}`,
                children: [
                    !isWide && leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                        data: data.sidebar,
                        style: style,
                        rtl: rtl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Blogs, {
                        blogs: data.blogs,
                        isWide: isWide,
                        style: style,
                        rtl: rtl
                    }),
                    !isWide && !leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                        data: data.sidebar,
                        style: style,
                        rtl: rtl
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Blog_AllNews = (AllNews);


/***/ }),

/***/ 533:
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
/* harmony import */ var _data_Blog_slides_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7672);
/* harmony import */ var _data_Blog_slides_rtl_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8691);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// Import Swiper styles





swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade
]);
const BlogSlider = ({ style ="4" , rtl  })=>{
    const data = rtl ? _data_Blog_slides_rtl_json__WEBPACK_IMPORTED_MODULE_5__ : _data_Blog_slides_json__WEBPACK_IMPORTED_MODULE_4__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog-slider pt-50 pb-50 style-1",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `section-head text-center mb-60 style-${style}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "أخر" : "Our",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: rtl ? "الأخبار" : "Journal"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text color-666",
                            children: rtl ? "احصل على اخر الاخبار من خلال المدونه ناقش وشارك الخبر مع الاصدقاء" : "Get the latest articles from our journal, writing, discuss and share"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "blog-details-slider",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            className: "swiper-container",
                            slidesPerView: 1,
                            spaceBetween: 0,
                            effect: "fade",
                            speed: 1000,
                            pagination: {
                                el: ".blog-details-slider .swiper-pagination",
                                clickable: "true"
                            },
                            navigation: {
                                nextEl: ".blog-details-slider .swiper-button-next",
                                prevEl: ".blog-details-slider .swiper-button-prev"
                            },
                            mousewheel: false,
                            keyboard: true,
                            autoplay: {
                                delay: 4000
                            },
                            loop: true,
                            children: data.map((slide, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content-card",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "img overlay",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: slide.image,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-6",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "cont",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                                    className: "date small mb-20",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "#",
                                                                            className: "text-uppercase border-end brd-gray pe-3 me-3",
                                                                            children: slide.type
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "far fa-clock me-2"
                                                                        }),
                                                                        rtl ? "موعد النشر" : "Posted on",
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "#",
                                                                            children: slide.time
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        href: rtl ? "/rtl-page-single-post" : "/page-single-post-5",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: slide.title
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "fs-13px mt-10 text-light text-info",
                                                                    children: [
                                                                        slide.desc,
                                                                        " [...]"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_PopularPosts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Blog/popular-posts.json
const popular_posts_namespaceObject = JSON.parse('[{"cover":"/assets/img/blog/1.jpeg","type":"news","time":"3 Days ago","title":"Crypto Trend 2023","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/7.png","type":"news","time":"3 Days ago","title":"AI With Fingerprint","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"cover":"/assets/img/blog/5.png","type":"news","time":"3 Days ago","title":"NFT Game! New Oppoturnity","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"}]');
;// CONCATENATED MODULE: ./src/data/Blog/popular-posts-rtl.json
const popular_posts_rtl_namespaceObject = JSON.parse('[{"cover":"/assets/img/blog/1.jpeg","type":"اخبار","time":"منذ 3 ايام","title":"اتجاه التشفير 2023","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/7.png","type":"اخبار","time":"منذ 3 ايام","title":"AI مع بصمة الإصبع","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"cover":"/assets/img/blog/5.png","type":"اخبار","time":"منذ 3 ايام","title":"لعبة NFT! فرصة جديدة","desc":"إذا كانت هناك طريقة واحدة غيّرت بها التكنولوجيا اللاسلكية الطريقة التي نعمل بها ، فسيكون الجميع متصلين الآن","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"}]');
;// CONCATENATED MODULE: ./src/components/Blog/PopularPosts.jsx




const PopularPosts = ({ style ="4" , rtl  })=>{
    const postsData = rtl ? popular_posts_rtl_namespaceObject : popular_posts_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "popular-posts pt-50 pb-100 border-bottom brd-gray",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "post-sc-title text-center text-uppercase mb-70",
                    children: rtl ? "أخبار شائعة" : "Popular Posts"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-5",
                    children: postsData.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `col-lg-4 ${index !== popular_posts_namespaceObject.length - 1 ? "border-end brd-gray" : ""}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img radius-7 overflow-hidden img-cover",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: post.cover,
                                            className: "card-img-top",
                                            alt: "..."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card-body px-0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                className: "d-block date mt-10 fs-10px fw-bold",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style}`,
                                                        children: rtl ? "أخبار" : "News"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bi bi-clock me-1"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        className: "op-8",
                                                        children: [
                                                            rtl ? "موعد النشر" : "Posted on",
                                                            " ",
                                                            post.time
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "fw-bold mt-10 title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: rtl ? "/rtl-page-single-post" : "/page-single-post-5",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: post.title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "small mt-2 op-8 fs-10px",
                                                children: [
                                                    post.desc,
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
                                                                className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white",
                                                                children: post.userImgLetter
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#",
                                                                className: "mt-1",
                                                                children: [
                                                                    rtl ? "بواسطة" : "By",
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
                                ]
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Blog_PopularPosts = (PopularPosts);


/***/ }),

/***/ 8691:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/blog/s_blog.png","type":"أخبار","time":"منذ 3 ايام","title":"حلول لمشكلة البيانات الضخمة ، منظور الخبراء","desc":"إن الانغماس في تقنية النانو على طول ارتفاع المعلومات سوف يغلق الحلقة في التركيز فقط"},{"image":"/assets/img/blog/1.jpeg","type":"أخبار","time":"منذ 3 ايام","title":"حلول لمشكلة البيانات الضخمة ، منظور الخبراء","desc":"إن الانغماس في تقنية النانو على طول ارتفاع المعلومات سوف يغلق الحلقة في التركيز فقط"},{"image":"/assets/img/blog/2.jpeg","type":"أخبار","time":"منذ 3 ايام","title":"حلول لمشكلة البيانات الضخمة ، منظور الخبراء","desc":"إن الانغماس في تقنية النانو على طول ارتفاع المعلومات سوف يغلق الحلقة في التركيز فقط"}]');

/***/ }),

/***/ 7672:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/blog/s_blog.png","type":"News","time":"3 Days ago","title":"Solutions For Big Data Issue, Expert Perspective","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"},{"image":"/assets/img/blog/1.jpeg","type":"News","time":"3 Days ago","title":"Solutions For Big Data Issue, Expert Perspective","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"},{"image":"/assets/img/blog/2.jpeg","type":"News","time":"3 Days ago","title":"Solutions For Big Data Issue, Expert Perspective","desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected"}]');

/***/ })

};
;