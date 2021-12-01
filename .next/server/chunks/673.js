"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ modalState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const modalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "modalState",
    default: false
});


/***/ }),

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(377);









function Header() {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const [open, setOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__/* .modalState */ .e);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shadow-sm bg-black sticky top-0 z-50 sm:px-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-between max-w-5xl mx-5 md:mx-auto xl:mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>router.push('/')
                    ,
                    className: "relative hidden lg:inline-grid w-24 cursor-pointer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: "/assets/img/instagram_logo.svg",
                        layout: "fill",
                        objectFit: "contain",
                        className: "w-10 h-10"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>router.push('/')
                    ,
                    className: "relative w-7 lg:hidden flex-shrink-0 cursor-pointer text-white",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: "/assets/img/instagram_logo_icon.svg",
                        layout: "fill",
                        objectFit: "contain"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xs",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative mt-1 p-3 rounded-md",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-y-0 pl-3 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
                                    className: "h-5 w-5 text-gray-500"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-xl",
                                type: "text",
                                placeholder: "Search",
                                name: "",
                                id: ""
                            })
                        ]
                    })
                }),
                session ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.HomeIcon, {
                                onClick: ()=>router.push('/')
                                ,
                                className: "navBtn text-white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
                                className: "h-6 text-white md:hidden cursor-pointer"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative navBtn",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ChatIcon, {
                                        className: "navBtn text-white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute -top-2 -right-2 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center",
                                        children: "3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {
                                onClick: ()=>setOpen(true)
                                ,
                                className: "navBtn text-white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.UserGroupIcon, {
                                className: "navBtn text-white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.HeartIcon, {
                                className: "navBtn text-white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut,
                                src: session.user.image,
                                alt: "Profile picture",
                                className: "h-10 w-10 rounded-full cursor-pointer"
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn,
                    className: "text-white",
                    children: "Sign in"
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;