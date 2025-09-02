"use strict";
exports.id = 8758;
exports.ids = [8758];
exports.modules = {

/***/ 1270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SinglePost_AllNews)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Details.jsx


const Details = ({ details , style , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blog-details-slider mb-100",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section-head text-center mb-60 style-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mb-20 color-000",
                        children: details.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                        className: "d-block date text",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`,
                                children: details.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-clock me-1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "op-8 ms-1",
                                children: [
                                    rtl ? "تم النشر" : "Posted on",
                                    " ",
                                    details.time
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content-card",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/img/blog/1.jpeg",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "info",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cont",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                            className: "date small mb-20",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-uppercase border-end brd-gray pe-3 me-3",
                                                    children: " News "
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-clock me-1"
                                                }),
                                                " Posted on 3 Days ago "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "title",
                                            children: "Solutions For Big Data Issue, Expert Perspective"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "fs-12px mt-10 text-light text-info",
                                            children: "If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]"
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
/* harmony default export */ const AllNews_Details = (Details);

;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Metadata.jsx

const Metadata = ({ metadata , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "d-flex small align-items-center justify-content-between mb-70 fs-12px",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "l_side d-flex align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "me-3 me-lg-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white",
                                children: metadata.user.imgLetter
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "",
                                children: [
                                    rtl ? "بواسطة" : "By",
                                    " ",
                                    metadata.user.name
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "me-3 me-lg-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-chat-left-text me-1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    metadata.commentsCount,
                                    " ",
                                    rtl ? "تعليقات" : "Comments"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-eye me-1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    metadata.viewsCount,
                                    " ",
                                    rtl ? "مشاهدات" : "Views"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "r-side mt-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "bi bi-info-circle me-1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: rtl ? "تبليغ" : "Report"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const AllNews_Metadata = (Metadata);

;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Content.jsx


const Content = ({ style , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                className: "fw-bold color-000 lh-4 mb-30",
                children: [
                    rtl ? "بمناسبة العرض الأول في المملكة المتحدة للفنان هنري باراندي ، المطور" : "To mark the first UK show of artist Henri Barande, developer",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: `color-blue${style}`,
                        children: rtl ? "موسي" : "Moussa"
                    }),
                    " ",
                    rtl ? "واستوديو Schultzschultz الألماني قاما بإنشاء The Lodge Wooden في مدينة برلين" : "and German studio Schultzschultz  have created The Lodge Wooden at Berlin City"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text mb-10 color-666",
                children: [
                    rtl ? "اليوم ، يمارس معظم الناس في المتوسط 4 إلى 6 ساعات من التمارين كل يوم ، ويتأكدون من أن كل شيء يضعونه في أفواههم ليس مليئًا بالسكريات أو المواد الحافظة ، لكنهم لا يهتمون بصحتهم العقلية ، ولا إجازات ، ولا حتى بين الحين والآخر. عطلة نهاية أسبوع طويلة. كل هذا على أمل الحصول على هذا الترويج الكبير في يوم من الأيام." : "Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion",
                    "."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text color-666 mb-20",
                children: rtl ? "كوفنتري مدينة لها ألف عام من التاريخ ولديها الكثير لتقدمه للسائح الزائر. يقع في قلب وارويكشاير." : "Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. <br /> Located in the heart of Warwickshire."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "info-imgs",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "img text-center mt-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/blog/13.png",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "color-999 fs-12px mt-20",
                                        children: [
                                            rtl ? "الصور بواسطة" : "Images by",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "color-000",
                                                children: rtl ? "@مثال" : "@sample"
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "img text-center mt-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/blog/14.png",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "color-999 fs-12px mt-20",
                                        children: [
                                            rtl ? "الصور بواسطة" : "Images by",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "color-000",
                                                children: rtl ? "@مثال" : "@sample"
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text mt-50 color-666",
                children: rtl ? "الإجابة القصيرة هي نعم. وفقًا لكروس ، عندما تفكر في نفسك كشخص آخر ، فهذا يسمح لك أن تمنح نفسك المزيد. نوتردام في نفس الهدف اللوريم ، ردود فعل مفيدة." : "The short answer is yes. According to Kross, when you think of yourself as another person, it allows you lorem ispum lorem suo give yourself more. Notre dame at sume lorem objective, helpful feedback."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "twitter-info mt-60",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "twitter-card",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "twitter-header d-flex align-items-center justify-content-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "twitter-user d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon-50 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/img/team/3.jpeg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inf",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold",
                                                        children: rtl ? "راسيل" : "Russel B."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "color-999",
                                                        children: " @russelb  - 15 Dec, 2022 "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "twitter-icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-twitter"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "twitter-info mt-40",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                    children: [
                                        "“",
                                        rtl ? "فريق في" : "The team at",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: `color-blue${style}`,
                                            children: "@iteckagency"
                                        }),
                                        " ",
                                        rtl ? "هو مكرس بشكل لا يصدق ، وواسع المعرفة ، ومفيد. كان المنتج النهائي جميلًا ويستحق كل بنس. أوصي بشدة بموضوع Iteck WP." : "is incredibly dedicated, knowledgeable, and helpful. The finished product was beautiful, and worth every penny. I would absolutely recommend Iteck WP Theme.",
                                        "”"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: rtl ? "التقصير في اليقظة" : "Defaulting to Mindfulness"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text color-666 mt-30",
                        children: rtl ? "Cray منقوشة ما بعد السخرية ، قامت Helvetica keffiyeh بتشكيل كارليس بانجو قبل بيعها كشك صور المدونة Marfa semio tics Truffaut. مدونة Moustache Schlitz المستوى التالي Williamsburg ، حقيبة حمل آلة كاتبة عميقة على شكل حرف V" : "Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they sold out blog photo booth Marfa semio tics Truffaut. Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "ps-1 ps-lg-5 my-4 color-666 fs-14px lh-7",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bi bi-dot me-2 fs-3 lh-2 pt-1"
                                    }),
                                    rtl ? "تلخص الروائية الويلزية سارة ووترز الأمر ببلاغة" : "Welsh novelist Sarah Waters sums it up eloquently"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bi bi-dot me-2 fs-3 lh-2 pt-1"
                                    }),
                                    rtl ? "في كتابهم الكلاسيكي ، الإبداع في الأعمال ، استنادًا إلى دورة شائعة قاموا بتدريسها" : "In their classic book, Creativity in Business, based on a popular course they co-taught"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bi bi-dot me-2 fs-3 lh-2 pt-1"
                                    }),
                                    rtl ? "الروائي وكاتب السيناريو ستيفن بريسفيلد" : "Novelist and screenwriter Steven Pressfield"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text color-666 mt-30",
                        children: [
                            rtl ? "هذا على الفور جلب إلى الأذهان واحد من" : "That immediately brought to mind one of",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: `text-decoration-underline color-blue${style}`,
                                children: rtl ? "اعز" : "my fondest"
                            }),
                            " ",
                            rtl ? "ذكريات ، عن ابنتي عندما كانت مجرد طفلة صغيرة." : "memories, involving my daughter when she was just a toddler of one."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "blog-share mt-80",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "side-tags",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "me-1",
                                                    children: rtl ? "ووردبريس" : "WordPress"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "me-1",
                                                    children: rtl ? "بي أتش بي" : "PHP"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "me-1",
                                                    children: "HTML/CSS"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: rtl ? "فيجما" : "Figma"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "share-icons d-flex justify-content-lg-end mt-3 mt-lg-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "fw-bold me-3 flex-shrink-0 text-uppercase",
                                                children: rtl ? "مشاركة على" : "Share on"
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
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-tumblr"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-rss"
                                                })
                                            })
                                        ]
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
/* harmony default export */ const AllNews_Content = (Content);

;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Comments.jsx

const Comments = ({ commentCard , comments , style , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blog-comments mt-70",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "comment-card card p-5 radius-5 border-0 mt-50",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: commentCard.user.picture,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inf",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "fw-bold",
                                    children: commentCard.user.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    className: "color-999",
                                    children: commentCard.date
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text color-000 fs-12px mt-10",
                                    children: commentCard.text
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-icons d-flex mt-20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "comments-content mt-70",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "color-000 mb-0",
                        children: [
                            comments.length < 10 ? `0${comments.length}` : comments.length,
                            " ",
                            rtl ? "تعليقات" : "Comments"
                        ]
                    }),
                    comments.map((comment, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `comment-replay-cont ${index !== comments.length - 1 ? "border-bottom border-1 brd-gray" : ""} pb-40 pt-40`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "d-flex comment-cont",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: comment.user.picture,
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
                                                            children: comment.user.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "time fs-12px text-uppercase",
                                                            children: comment.time
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text color-000 fs-12px mt-10",
                                                    children: comment.content
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: `butn border border-1 rounded-pill border-blue${style} mt-20 py-2 px-3 hover-blue${style} color-blue${style}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fs-10px",
                                                        children: rtl ? "رد" : "replay"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                comment.replies.map((reply, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex comment-replay ps-5 mt-30 ms-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon-40 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: reply.user.picture,
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
                                                                children: reply.user.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "time fs-12px text-uppercase",
                                                                children: reply.time
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text color-000 fs-12px mt-10",
                                                        children: reply.content
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: `butn border border-1 rounded-pill border-blue${style} mt-20 py-2 px-3 hover-blue${style} color-blue${style}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fs-10px",
                                                            children: rtl ? "رد" : "replay"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i))
                            ]
                        }, index))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "comment-form d-block pt-30",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "color-000 mb-40",
                        children: [
                            " ",
                            rtl ? "اضافة تعليق" : "Leave A Comment",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "form-group mb-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        className: "form-control radius-4 fs-12px p-3",
                                        rows: "6",
                                        placeholder: rtl ? "اكتب تعليقك هنا" : "Write your comment here"
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
                                        placeholder: rtl ? "بريدك الالكترونى *" : "Your Email *"
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
                                            value: "",
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
                                    className: `btn rounded-pill blue${style}-3Dbutn hover-blue4 sm-butn fw-bold mt-40`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: rtl ? "ارسال التعليق" : "Submit Comment"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AllNews_Comments = (Comments);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "lightgallery/react"
var react_ = __webpack_require__(1006);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Sidebar.jsx





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

;// CONCATENATED MODULE: ./src/data/SinglePost/all-news.json
const all_news_namespaceObject = JSON.parse('{"title":"Crypto Trend 2023","time":"15 Days ago","type":"news","user":{"name":"Admin","imgLetter":"a"},"commentsCount":24,"viewsCount":"774k","commentCard":{"user":{"picture":"/assets/img/team/3.jpeg","name":"Russel B."},"date":"@russelb  - 15 Dec, 2022","text":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde. Lorem ispum dolor sit amet"},"comments":[{"user":{"picture":"/assets/img/team/2.jpeg","name":"Robert Downey Jr"},"time":"3 hours ago","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria","replies":[{"user":{"picture":"/assets/img/team/5.jpeg","name":"Tobey McGuire"},"time":"2 dayes ago","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria"}]},{"user":{"picture":"/assets/img/team/4.jpeg","name":"Ben Chiwell"},"time":"December 25, 2022","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria","replies":[]}],"sidebar":{"recentPosts":[{"title":"Crypto Trend 2023","image":"/assets/img/blog/1.jpeg"},{"title":"How To Become Web Developer","image":"/assets/img/blog/2.jpeg"},{"title":"Wireframe for UI/UX","image":"/assets/img/blog/3.jpeg"},{"title":"AI With Fingerprint","image":"/assets/img/blog/7.png"}],"categories":[{"title":"all","count":265},{"title":"News","count":38},{"title":"Technology","count":16},{"title":"Tips & Tricks","count":85},{"title":"Career","count":21},{"title":"Community","count":874},{"title":"Videos","count":54},{"title":"Others","count":85}],"instagram":["/assets/img/blog/1.jpeg","/assets/img/blog/10.png","/assets/img/blog/11.png","/assets/img/blog/12.png","/assets/img/blog/2.jpeg","/assets/img/blog/3.jpeg"],"tags":["WordPress","PHP","HTML/CSS","Figma","Technology","Marketing","Consultation","Seo","Envato","Psd"]}}');
;// CONCATENATED MODULE: ./src/data/SinglePost/all-news-rtl.json
const all_news_rtl_namespaceObject = JSON.parse('{"title":"اتجاه التشفير 2023","time":"منذ 15 يوم","type":"اخبار","user":{"name":"الادمن","imgLetter":"a"},"commentsCount":24,"viewsCount":"774k","commentCard":{"user":{"picture":"/assets/img/team/3.jpeg","name":"راسيل"},"date":"@russelb  - 15 Dec, 2022","text":"وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد"},"comments":[{"user":{"picture":"/assets/img/team/2.jpeg","name":"روبيرت داونى"},"time":"منذ 3 ساعات","content":"وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد","replies":[{"user":{"picture":"/assets/img/team/5.jpeg","name":"جاكوب"},"time":"منذ يومين","content":"وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد"}]},{"user":{"picture":"/assets/img/team/4.jpeg","name":"بين كويل"},"time":"ديسمبر 25, 2022","content":"وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد","replies":[]}],"sidebar":{"recentPosts":[{"title":"اتجاه التشفير 2023","image":"/assets/img/blog/1.jpeg"},{"title":"كيف تصبح مطور ويب ","image":"/assets/img/blog/2.jpeg"},{"title":"المخططات ل UI/UX","image":"/assets/img/blog/3.jpeg"},{"title":"AI مع بصمة الإصبع","image":"/assets/img/blog/7.png"}],"categories":[{"title":"الكل","count":265},{"title":"أخبار","count":38},{"title":"تكنولوجيا","count":16},{"title":"نصائح وافكار","count":85},{"title":"الوظائف","count":21},{"title":"تواصل اجتماعي","count":874},{"title":"فيديو","count":54},{"title":"اخر","count":85}],"instagram":["/assets/img/blog/1.jpeg","/assets/img/blog/10.png","/assets/img/blog/11.png","/assets/img/blog/12.png","/assets/img/blog/2.jpeg","/assets/img/blog/3.jpeg"],"tags":["ووردبريس","بي أتش بي","HTML/CSS","فيجما","تكنولوجى","تسويق","استشارة","سيو","إنفاتو","فوتوشوب"]}}');
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/index.jsx








const AllNews = ({ isWide , leftSidebar , style ="4" , rtl  })=>{
    const data = rtl ? all_news_rtl_namespaceObject : all_news_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "all-news section-padding pt-50 blog bg-transparent style-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Details, {
                    details: {
                        title: data.title,
                        time: data.time,
                        type: data.type
                    },
                    style: style,
                    rtl: rtl
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-4 gx-lg-5",
                    children: [
                        !isWide && leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            data: data.sidebar,
                            style: style,
                            rtl: rtl
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: isWide ? "col-lg-12" : "col-lg-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Metadata, {
                                    metadata: {
                                        imgLetter: data.imgLetter,
                                        user: data.user,
                                        commentsCount: data.commentsCount,
                                        viewsCount: data.viewsCount
                                    },
                                    rtl: rtl
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "blog-content-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Content, {
                                            style: style,
                                            rtl: rtl
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Comments, {
                                            comments: data.comments,
                                            commentCard: data.commentCard,
                                            style: style,
                                            rtl: rtl
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isWide && !leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            data: data.sidebar,
                            style: style,
                            rtl: rtl
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const SinglePost_AllNews = (AllNews);


/***/ }),

/***/ 2446:
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
/* harmony import */ var _data_SinglePost_posts_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5960);
/* harmony import */ var _data_SinglePost_posts_rtl_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const PopularPosts = ({ style ="4" , rtl  })=>{
    const data = rtl ? _data_SinglePost_posts_rtl_json__WEBPACK_IMPORTED_MODULE_5__ : _data_SinglePost_posts_json__WEBPACK_IMPORTED_MODULE_4__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "popular-posts related Posts section-padding pb-100 bg-gray5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "fw-bold text-uppercase mb-50",
                    children: rtl ? "المنشورات ذات الصلة" : "Related Posts"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "related-postes-slider position-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            className: "swiper-container",
                            slidesPerView: 3,
                            spaceBetween: 80,
                            centeredSlides: true,
                            speed: 1000,
                            pagination: false,
                            navigation: {
                                nextEl: ".related-postes-slider .swiper-button-next",
                                prevEl: ".related-postes-slider .swiper-button-prev"
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
                            children: data.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card border-0 bg-transparent rounded-0 p-0 d-block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/page-single-post-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "img radius-7 overflow-hidden img-cover",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: post.image,
                                                        className: "card-img-top",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "card-body px-0",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                        className: "d-block date mt-10 fs-10px fw-bold",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style}`,
                                                                children: post.type
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "bi bi-clock me-1"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                href: "#",
                                                                className: "op-8",
                                                                children: [
                                                                    rtl ? "تم النشر" : "Posted on",
                                                                    " ",
                                                                    post.time
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "fw-bold mt-10 title",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/page-single-post-5",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: post.title
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "small mt-2 op-8",
                                                        children: post.short_desc
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex small mt-20 align-items-center justify-content-between op-9",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "l_side d-flex align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white",
                                                                        children: post.userImgLetter
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
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
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "r-side mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "bi bi-chat-left-text me-1"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: post.comments
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "bi bi-eye ms-4 me-1"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularPosts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6300:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/blog/1.jpeg","type":"اخبار","time":"منذ 3 ايام","title":"اتجاه التشفير 2023","short_desc":"إذا كانت هناك طريقة واحدة غيرت بها التكنولوجيا اللاسلكية طريقة عملنا.","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"image":"/assets/img/blog/7.png","type":"اخبار","time":"منذ 3 ايام","title":"AI مع بصمة الإصبع","short_desc":"إذا كانت هناك طريقة واحدة غيرت بها التكنولوجيا اللاسلكية طريقة عملنا.","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"image":"/assets/img/blog/5.png","type":"اخبار","time":"منذ 3 ايام","title":"لعبة NFT! فرصة جديدة","short_desc":"إذا كانت هناك طريقة واحدة غيرت بها التكنولوجيا اللاسلكية طريقة عملنا.","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"}]');

/***/ }),

/***/ 5960:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/blog/1.jpeg","type":"News","time":"3 Days ago","title":"Crypto Trend 2023","short_desc":"If there’s one way that wireless technology has changed the way we work.","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"image":"/assets/img/blog/7.png","type":"News","time":"3 Days ago","title":"AI With Fingerprint","short_desc":"If there’s one way that wireless technology has changed the way we work.","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"},{"image":"/assets/img/blog/5.png","type":"News","time":"3 Days ago","title":"NFT Game! New Oppoturnity","short_desc":"If there’s one way that wireless technology has changed the way we work.","userImgLetter":"a","username":"Admin","comments":"24","views":"774k"}]');

/***/ })

};
;