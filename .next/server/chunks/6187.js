"use strict";
exports.id = 6187;
exports.ids = [6187];
exports.modules = {

/***/ 6187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const propTypes = {
    from: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    to: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    speed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    delay: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    onComplete: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    digits: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    tagName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    easing: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    position: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        startY: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    })
};
const defaultProps = {
    from: 0,
    delay: 100,
    digits: 0,
    tagName: "span",
    easing: (t)=>t
};
class CountTo extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
    constructor(props){
        super(props);
        const { from  } = props;
        this.state = {
            counter: from,
            restart: false
        };
        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
        this.next = this.next.bind(this);
        this.updateCounter = this.updateCounter.bind(this);
    }
    componentDidMount() {
        this.start();
        window.addEventListener("scroll", ()=>{
            if (!this.props.position) return;
            const { from , to  } = this.props.position;
            if (window.scrollY > from && window.scrollY < to && this.state.restart) {
                this.start();
                this.setState({
                    restart: false
                });
            }
            if (window.scrollY < from && !this.state.restart) {
                this.setState({
                    restart: true
                });
            }
        });
    }
    componentWillUnmount() {
        this.clear();
    }
    start(props = this.props) {
        this.clear();
        const { from  } = props;
        this.setState({
            counter: from
        }, ()=>{
            const { speed , delay  } = this.props;
            const now = Date.now();
            this.endDate = now + speed;
            this.scheduleNextUpdate(now, delay);
            this.raf = requestAnimationFrame(this.next);
        });
    }
    next() {
        const now = Date.now();
        const { speed , onComplete , delay  } = this.props;
        if (now >= this.nextUpdate) {
            const progress = Math.max(0, Math.min(1, 1 - (this.endDate - now) / speed));
            this.updateCounter(progress);
            this.scheduleNextUpdate(now, delay);
        }
        if (now < this.endDate) {
            this.raf = requestAnimationFrame(this.next);
        } else if (onComplete) {
            onComplete();
        }
    }
    scheduleNextUpdate(now, delay) {
        this.nextUpdate = Math.min(now + delay, this.endDate);
    }
    updateCounter(progress) {
        const { from , to , easing  } = this.props;
        const delta = to - from;
        const counter = from + delta * easing(progress);
        this.setState({
            counter
        });
    }
    clear() {
        cancelAnimationFrame(this.raf);
    }
    render() {
        const { className , digits , tagName: Tag , children: fn  } = this.props;
        const { counter  } = this.state;
        const value = counter.toFixed(digits);
        if (fn) {
            return fn(value);
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
            className: className,
            children: value
        });
    }
}
CountTo.propTypes = propTypes;
CountTo.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountTo);


/***/ })

};
;