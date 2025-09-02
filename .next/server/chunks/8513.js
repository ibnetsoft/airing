"use strict";
exports.id = 8513;
exports.ids = [8513];
exports.modules = {

/***/ 7549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ navbarScroll)
/* harmony export */ });
function navbarScroll(navbar, isTransparent, isFaqPage) {
    if (!navbar) return;
    if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        if (isTransparent) navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.remove("nav-scroll");
        if (isTransparent) navbar.classList.add("bg-transparent");
    }
    window.addEventListener("scroll", ()=>{
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
            if (isTransparent) navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.remove("nav-scroll");
            if (isTransparent) navbar.classList.add("bg-transparent");
        }
    });
};


/***/ }),

/***/ 8438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    let preloader = document.querySelector("#preloader");
    if (!preloader) return;
    if (document.body.classList.contains("pace-done")) preloader.classList.add("isdone");
    document.addEventListener("load", ()=>preloader.classList.add("isdone"));
    if (typeof Pace === "undefined") return;
    Pace.on("start", ()=>preloader.classList.remove("isdone"));
    Pace.on("done", ()=>preloader.classList.add("isdone"));
};
/* harmony default export */ const common_loadingPace = (loadingPace);

;// CONCATENATED MODULE: ./src/components/PreLoader/index.jsx



const PreLoader = ()=>{
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>common_loadingPace(), 0);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader"
    });
};
/* harmony default export */ const components_PreLoader = (PreLoader);

;// CONCATENATED MODULE: ./src/common/scrollToTop.js
function scrollToTop() {
    const toTop = document.querySelector(".to_top");
    if (!toTop) return;
    window.addEventListener("scroll", function() {
        var bodyScroll = window.scrollY;
        if (bodyScroll > 700) {
            toTop.classList.add("show");
        } else {
            toTop.classList.remove("show");
        }
    });
    toTop.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

;// CONCATENATED MODULE: ./src/components/ScrollToTop/index.jsx



const ScrollToTop = ({ topText  })=>{
    (0,external_react_.useEffect)(()=>{
        scrollToTop();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: "#",
        className: `to_top ${topText ? "" : "bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: `bi bi-chevron-up ${topText ? "" : "fs-6 text-dark"}`
            }),
            topText && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                children: "Top"
            })
        ]
    });
};
/* harmony default export */ const components_ScrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./src/common/fixStylesheetsOrder.js
function fixStylesheetsOrder(isRTL) {
    if (isRTL) {
        let rtlCss = document.querySelector('link[href="/assets/css/rtl_style.css"]');
        let mainCss = document.querySelector('link[href="/assets/css/style.css"]');
        if (!rtlCss || !mainCss) return;
        if (mainCss.nextElementSibling.href?.includes("/assets/css/rtl_style.css")) return;
        // Insert main css before rtl css 
        rtlCss.before(mainCss);
    } else {
        let bootstrapCss = document.querySelector('link[href="/assets/css/lib/bootstrap.min.css"]');
        let mainCss1 = document.querySelector('link[href="/assets/css/style.css"]');
        if (!bootstrapCss || !mainCss1) return;
        if (bootstrapCss.nextElementSibling.href?.includes("/assets/css/style.css")) return;
        // Insert main css after bootstrap css 
        bootstrapCss.after(mainCss1);
    }
};

;// CONCATENATED MODULE: ./src/layouts/Main.jsx

//= React



//= Components


//= Scripts

const MainLayout = ({ children , scrollTopText , isRTL  })=>{
    (0,external_react_.useEffect)(()=>{
        fixStylesheetsOrder(isRTL);
    }, [
        isRTL
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/all.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/animate.css"
                    }),
                    isRTL ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap.rtl.min.css"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/style.css"
                    }),
                    isRTL ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/rtl_style.css"
                    }) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_PreLoader, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_ScrollToTop, {
                topText: scrollTopText
            })
        ]
    });
};
/* harmony default export */ const Main = (MainLayout);


/***/ })

};
;