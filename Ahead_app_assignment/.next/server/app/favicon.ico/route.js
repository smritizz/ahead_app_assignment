"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 5127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("AAABAAEAOTkAAAEAIAC0NAAAFgAAACgAAAA5AAAAcgAAAAEAIAAAAAAAxDIAAHQSAAB0EgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAiklJypORUpRZ1pibHdmcXx8anaBgG15hYJwfIiDcnyKhHJ+i4d1gY6KeISSkXyKmJeDj5+jjJqqq5OitLSbqby7obHDvaKzxr2is8a9orPGu6GyxLqgsMK3nKy/tZuqvbWbqr20m6m8rZaltqePnq+hipeomYKPn4dyfotvXmlyUERLUiUgIyYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsYGht3ZnJ+tJOmu9Gnv9rltdDv77vb+/O94P72vuP/977j//O94P7zvd/+873f/vO93/7zvd/+873f/vO93/72v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e+4f/2vuH/+L7h//m/4v/2vt/87LfW9Neoxd+uiqC1alhibhMQEhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbl9odL2dscvhs87u9L7e//W+3//3v+D/97/h//i/4v/4vuL/+L7i//e/4f/2v+D/9r/g//a/4P/2v+D/9r/g//a/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//a+4P/2vuH/97/i//e+4f/1veD/9r/h//bA4v/0v+D/67vZ+MSetNByYGt5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLDAyReYea3rLM6/O/3f/2v+D/+L/h//i+4f/5vuL/+b7i//m+4v/5vuL/+L/h//e/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//e/4P/3v+D/97/g//a+4P/2veD/9r7g//a94P/1vuH/9sDj//bA4//2v+L/97/i//W/4f/qu9n4qY2duColKCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExESE6SGl67hss7u9sDh//S+3//2v+H/97/h//e/4v/3v+L/97/i//e/4v/3v+L/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+H/97/h//e/4f/3v+L/97/i//e/4v/3v+L/9r/i//a/4v/3v+L/97/h//a/4f/3wOL/88Lg/8ymvt1RRk1WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBwgIjXiFl+m51Pb2wOH/97/j//W+4f/3wOL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3vuH/9r7h//e/4f/3v+L/98Dh//TA3//Mpr3dMSsuMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrWmVv06jC4fa/3//0vuH/9b7j//a/4v/4wOL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/977h//a+4f/3v+L/+L/i//i/4f/zwd7/t5epyAUEBQUAAAAAAAAAAAAAAAAAAAAAAAAAAColKCvAmrHL9MDg//a/4f/0vuH/9b/i//e/4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/+L/i//i/4f/3weD/7r/b/4RwfI8AAAAAAAAAAAAAAAAAAAAAAAAAAIpzgJHptNXy98Di//W/4v/1v+L/9r/i//i/4v/4vuL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/+L/i//m/4f/5wOL/9cDg/82mv9wRDxARAAAAAAAAAAAAAAAAFBITFLGRpb/4v+L/97/i//a/4v/2v+L/9r/i//e+4v/3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4v/3v+L/9r/i//a/4v/2v+L/9r/i//a/4v/2v+L/97/i//e/4v/3v+L/+b/i//m/4v/5v+H/97/h//TB4P9aTFRgAAAAAAAAAAAAAAAANS4yNsaguNP3v+L/97/i//e/4v/3v+L/97/i//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4//3vuP/977j//e+4v/3v+L/9r/i//W/4v/1v+L/9b/i//W/4v/2v+L/97/i//e/4v/3v+L/+b/i//m/4v/5vuL/977g//fA4f+TeIicAAAAAAAAAAAAAAAAd2FvgOKxz+z3vuP/977j//e+4//2v+L/9r/i//e/4v/3vuL/977i//e+4v/3vuL/977i//e+4v/3vuL/977i//e+4v/3vuL/977i//e+4v/3vuL/977i//e+4v/3vuL/+L/j//e+4//2veP/977j//e+4//3v+P/97/j//e+4v/3vuL/977i//e+4v/3vuL/977i//a/4v/1v+L/9b/i//W/4v/2v+L/9r/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//i/4v/4v+L/977h//W+4P++nLLNCQgJCgAAAAAAAAAAlHSIn/C63fv3vuP/977j//e+4//1v+L/9b/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/+MDj//i/5P/4v+T/977k//i/4//3v+L/+L/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//a/4v/1v+L/9b/i//W/4v/2v+L/97/i//i/4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/9r/i//a/4v/gttDwGRYYGwAAAAAAAAAAknWHm/a+4v/3vuP/977j//e+4//1v+L/9b/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/4v+L/97/i//e+4//3vuP/977k//e/4//2veD/9r7h//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/2v+L/9r/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/sv9r8LyktMgAAAAAAAAAAknWHm/i/4//4vuP/+L7j//e+4//2v+L/9r/h//e/4f/3v+H/97/h//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3vuH/977h//e+4f/3vuH/977i//e+4//2veL/9r3i//a+4v/2vuH/977h//e/4v/3v+L/97/i//a/4v/2v+L/9r/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/wwN3/QDc8QwAAAAAAAAAAkHKGmfi/4v/5vuL/+b7i//m+4v/3v+H/97/g//i/4P/4v+D/97/h//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/2vuH/9r7h//a+4f/2vuH/9r7h//a+4v/xud7/8bje//a+4v/3v+L/97/i//e/4v/3v+L/9r/i//W/4v/1v+L/9b/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//i+4f/xwN3/TUJIUAAAAAAAAAAAjnGClvi/4v/5vuL/+b7i//m/4f/4v+D/97/g//m/4P/4v+D/97/h//e/4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e+4v/vtt3/zpS+/7Z9pv+rcZv/rHOc/7yCq//Yn8j/8bjf//e+4v/4v+P/9r7h//a/4v/2v+L/9r/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//i+4f/xwN3/V0tRWwAAAAAAAAAAjW+Clfi/4v/5vuL/+b7i//m/4f/4v+D/97/g//m/4P/4v+D/97/h//i/4v/5vuL/+L/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/9r7h/+uz1/+obpr/dDlp/3c9a/+BRnX/gEZ0/3U7av+BRnf/wIex//C33P/4wOT/9r7h//jA4//3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//m+4v/ywN3/ZFZdaAAAAAAAAAAAjnGClvi/4v/5vuL/+b7i//m/4f/4v+D/97/g//m/4P/4v+D/9r/h//e/4v/4v+L/97/i//a+4f/2v+H/97/i//m/4v/5v+L/97/i//e/4v/3v+L/97/j/7J6oP9nLlf/p22Y/9GYwf/bocn/2aDI/8eNt/+NU3//eUBp/9OZwf/3vuT/+L/j//jA4//2vuH/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//m+4v/ywN3/cGBpdQAAAAAAAAAAkHKGmfi/4v/5vuL/+b7i//m/4f/4v+D/97/g//m/4P/4v+D/9r/h//a/4v/3v+H/97/h//W+4P/1v+H/9r/i//m/4f/4vuH/97/i//e/4f/2vuH/67PY/4BJcP+NVXz/67LZ//jA5P/4wOP/97/i//W94v/SmcH/e0Jq/6lwmP/utdz/9r7i//a+4f/2vuH/9r7h//a+4f/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//i+4v/ywN3/fWt1gwAAAAAAAAAAk3WInPi/4v/5vuL/+b7i//m/4f/4v+D/97/g//m/4P/5v+H/+L7i//e/4v/3v+D/9b/g//S/4P/1v+H/98Di//bA4f/1v9//9L/g//a/4f/2vt//6bDU/41Uev/HjrP/87vf//a/4//3v+T/9b7j//S94v/wud//lFyC/5hfhv/qsdf/977j//e+4v/3v+H/9r7h//a+4f/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/wwN3/gW95hwAAAAAAAAAAl3iKn/i/4v/5vuL/+b7i//i/4f/3v+D/97/g//i/4P/5v+H/+b7i//i/4f/3v+D/87/f//LB4P/xwd7/88Xh//jO5//50en/9Mrk//DD3v/ywd3/9L3f//G33P/1vN//97/j//S84v/qs9r/8Lng//S94//zveH/6bHW/+212f/zu9//977i//e/4v/3v+L/977h//a+4f/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/wwN7/iXaBkAAAAAAAAAAAmnqOovi/4v/3v+L/97/i//e/4f/2v+D/9r/g//e/4P/3v+D/+L/h//i/4v/3v+H/8sDe/+7E3f/72+3///X////7/////P////v////x///21+n/8cPf//e+4f/3v+H/9r3h/6Vslv9UG0f/gUh0/+mw2f/3wOP/97/i//e/4f/3v+H/+MDi//a+4P/2vuH/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e+4//wwN//k3+LmgAAAAAAAAAAnHuPpPi/4v/3v+L/97/i//e/4f/1v+D/9b/g//a/4P/3v+D/+b/h//nA4v/2v+D/8Mff///m9///+P////f///Xk8//y4O//++n4///3////+P///dvv//PD4P/0wN//9r7g/4tSfP9YHkr/eT9s/9ifx//3v+H/9r/g//e/4P/3v+D/98Di//W+4P/2vuH/97/h//e/4f/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e+4//wwN//nYiVpQAAAAAAAAAAnXuQpfe/4v/3v+L/97/i//e/4f/1v+D/9b/g//a/4P/4v+H/+r7i//nA4v/3wuD/+t3u///4///+7f7/wafB/35Zff9uR2z/jWqL/9G5zv/88/n///X///TT5f/yw93/97/g/9Sbw/+XXYj/uX+q//O64P/3v+D/+MDh//fA4P/3wOL/9b/h//S+4f/2v+H/9r7h//a+4f/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//i/5P/wwN//qZKgsgAAAAAAAAAApoKXrvi/4v/3vuL/977i//e+4v/1v+H/9b/h//a/4f/3vuL/+b7i//bA4P/5yuX//+z7///9//+5obv/TCdO/0obSf9KGUn/SBtI/2RDY//NvMz///r///zl8v/yxt//97/h//a94//3vuX/977l//e/4//4wOH/7bbZ/+u02f/0vuH/9L/h//O+4P/1v+L/9b7i//W+4v/1v+L/9r/j//G53v/FjLP/26LI//e/4//2vuH/97/i//e/4v/3v+L/97/i//e/4v/3v+L/977i//i/5P/xwN//r5enuQAAAAAAAAAAroeftfq/4//3vuP/977j//e+4//1v+L/9b/i//W+4//1vuP/9r7h//LB3v/70+n///P///72//9wT3P/ShlN/00XTf9OF0//TRdQ/0gdSv+egJ7//+/////w+//xyOL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/wIiv/6Bpkv/dqM3/88Di//G+3//0wOL/9L7j//O+4//zv+P/8Lvh/7yFrf9qMlz/wIex//e/5P/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/977i//m+4//ywOD/tJupvAAAAAAAAAAAwZOrx/2+4v/3vuP/+L7j//i+4//2v+L/9b/i//a+4//3v+P/+L/h//LB3v/71O3///X///bx9/9fQGD/SRhK/0sWTf9NFk7/ThdP/0UbR/+PdJL/+uj5///0/f/yyeL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/xo60/3E6Y/+JVH3/1qHJ//G94//0vuX/9L7l//S95f/ostn/tHyn/3A3Y/+PVoD/5qzU//e+4//3vuL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//m/4//zv97/x6a3zgAAAAABAQEB0JSv5v++4f/3vuP/+L7j//m+4//2v+L/9b/i//e+4//4vuL/+b/g//G/3v/2zur///H8//77/v9+YXz/SRxJ/0oYTP9MGE//TRhN/0oiTP+kjaj///T///7t9v/xx+D/97/i//e/4v/3v+L/97/i//e/4v/3v+L/77jd/8CJsP9vOWT/cDpm/5hjjf+5g6z/wImz/694of+HUHn/ajFd/5Zbif/epM3/9r3i//i/5P/3v+P/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/h//rA4//xutj/z6K05QAAAAANDAwN1X6d/v+94P/1vuL/9r3h//i+4v/3v+L/97/i//i+4v/4vuL/+L/i//W/4//0xOf//+j6///+///ey9v/VzhV/0IbRf9FG0j/Rx1H/3dbeP/g1eL///v///je7//ww+D/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/j//K63//Zosn/nGaO/2s1Xv9fKVL/YClT/2MsVv9+R3H/uoKr/+iv2P/1u+L/+b/k//e94//3veP/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/h//m/4f/vss//0Y+j/AAAAAAbFxgbxVx8//+43P/3v+L/+L7h//i+4f/3v+L/97/i//m+4v/4vuL/977j//W+5P/0vuX/9tXs///1////+f//9OHy/6aLqP+NcJD/uJq4//fi9v//+v///+////HN5v/xwN//97/i//e/4v/3v+L/97/i//e/4v/3v+L/+L/i//e/4v/1vuL/8Lnf/+633v/hqdL/3aXO/+Wu1v/utt//9Lvi//e94v/4vuP/+r/k//i94//3veL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/+b/h//6+3//qor//v2+E/wAAAAAgGx0gwkNj//+Xu//7vuH/+b7h//i/4v/3v+L/97/h//m+4v/4v+L/9r/i//a+4//5v+X/8cLg//3b8P//9v////v////8////+/////r////6////8v//99Ps//LA4v/1v+H/97/i//e/4v/3v+L/97/i//e/4v/3v+L/9r7i//a94v/3v+T/977j//m/5P/4vuP/+L/l//e/5P/2vuP/+L/j//m/4v/5vuL/+b7i//m/4f/4v+H/97/h//e/4v/3v+L/97/i//e/4v/3v+L//r7h//+63P/MdZL/uGV5+gAAAAAcGBkcvzJR/+VtkP//uNz//b3f//m/4f/3vuH/973g//i+4v/3vuL/9b/i//e/4//4v+P/9L/h/+/A3v/y0OX//+n5///z////8/////H////i9v/wzeT/78Hg//W+4v/2vuL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/977i//e+4//2veL/+L/j//i+4v/4vuL/977j//e+4v/2vuH/977h//m/4v/5v+L/+b/h//i/4f/4v+H/97/h//e/4f/4v+L/+L7i//i/4v/3v+L//73g//+sz/+pQF3/t2J18AAAAAAeGRsewitJ/9BKbf/1ncH//77g//u/4f/5vuH/+L7h//e+4//2vuP/9b/i//W/4v/2wOP/9r/i//W+4v/wv97/7cDc//PE3//1xuH/8cPf//HA3//0v+D/9b/h//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/2vuH/+L/i//m/4v/5vuL/+b/i//i/4v/4wOL/97/g//i/4f/5vuH/+L7i//m/4//4v+P//73g//Z5nf+qLUv/tV5w6gAAAAAbFxgbxilH/8gxVP/pcZf//7TX//q/4P/6v+P/+L7i//e+4//2vuP/9b/i//W/4v/2v+L/97/i//a+4v/0v+D/9L/g//S/3//0v9//87/f//W/4f/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4f/3v+H/+L/h//m/4f/5v+H/+b/i//i/4v/3v+L/97/h//e/4f/2vuH/9r3g//q+4v//vuH//6nN/8s7X/+3LUv/s1ts5gAAAAAYFBUYyilG/9EoS//eQ2r/+5W5//i+3//5v+P/973i//e+4//3v+P/9b/i//a/4v/3v+L/9r7h//a+4f/2vuD/9r7h//e+4//2vuP/9b/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4f/3v+D/+L/g//m/4P/5v+D/+b/g//e/4f/3v+L/97/i//a/4v/1v+L/9b7g//y/4P//ud3/3GaL/8koTP/AK0j/sVpq4gAAAAAVEhMVySlG/9coS//VK1H/4WKH//+tz///vuL/9r7i//e+4//3v+P/9r/i//a/4v/3v+L/977h//a+4f/2vuH/9r7h//a/4v/2v+L/9r/i//e/4v/4v+L/+b7i//m+4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4f/3v+D/97/g//i/4P/5v+D/+b/g//i/4P/3v+H/9r7i//W/4v/1v+D/+b/g//+/4P/+jLD/yDVa/9MnTP/BKkj/r1lo3gAAAAARDg8RySpH/9woSv/dJ0z/yDNX//R/o///t9r/+L7i//e+4//2vuL/97/i//e/4v/3v+L/97/i//e/4v/3v+L/9r/i//W/4v/2v+L/97/i//i/4v/5vuL/+r7i//q+4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4f/3v+D/97/g//e/4P/4v+D/+b/g//m/4P/3v+H/9b7j//bA4//1v+D//7/g//2mx//USm7/1ShO/9smS//CKkn/rFdn3AAAAAAODAwOyipH/9soSv/bJ0z/0ClO/9A6YP//mr7//7zg//6/4//2veD/9r/i//a/4v/3v+L/97/i//e/4v/3v+L/97/i//a/4v/2v+L/97/i//i/4v/5vuL/+b7i//m+4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4f/3v+D/97/g//e/4P/3v+D/+L/g//i/4P/4v+D/+L/i//q/4v/6v+D//7LU/95fgf/MLVH/2ihM/9woTP/AKkj/rVdn3AAAAAANCwwNySpH/9soSv/cKEz/2yhN/9MoTf/IQ2j//63Q//++4f/5u97/9r7g//a+4f/3v+L/97/i//a/4v/2v+L/97/i//e/4v/3v+L/97/i//i/4v/5vuL/+b7i//i+4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4f/3v+D/97/g//e/4P/3v+D/97/g//e/4P/5wOH/+8Dj//++4f//udv/6nKV/84xVf/UKEv/3ilM/9snS/+/KUj/rVdp3QAAAAANCwwNySpH/9soSf/cJ0r/3ChK/9opS//KKUz/0Ult//+y1f//vuD/+r7f//m/4f/5v+L/9r7h//W/4v/1v+L/9r/i//i/4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//i/4f/5v+H/+L/h//e/4f/3v+H/9r/h//W/4P/2vt//+r/g//+52//yfqD/yDZZ/9MnTP/ZKEv/3CdK/9snS//AK0n/rFdo3AAAAAANCwsNxylG/9onSf/cJ0r/3ilK/9woSf/WJ0n/xihK/9BRdP//qcv//73e//+/4f/6v+L/+L/i//a/4v/2v+L/97/i//i+4v/5vuL/+L/i//i/4v/4v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/4vuL/97/h//e/4f/3vuD/97/g//i/3///vt///7bY//OCpP/NO17/zClM/9koTP/bKEv/2idK/9soTP+/Kkn/rFlo3AAAAAANCwsNxitH/9goSf/bKEr/3ChK/90pS//bKEn/1ShJ/88rUP/YUHT//Z6///+63P/6v+D/+sDi//rA4//5v+L/+b7i//m+4v/5vuL/+b7i//m+4v/5vuL/+L/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/i//e/4v/3v+L/97/h//e/4P/4v+D/+L7f//y/3///s9T/93yf/805Xf/RJ0z/1CZJ/9gnSv/YJ0r/2ihL/9koTP+9Kkj/rFhq2wAAAAAMCgsMxzNN/9UoSP/aJ0r/2ydK/9woSv/bKEj/2ihJ/9cn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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5CYoga%5CDownloads%5Cahead_app_assignment-1%5CAhead_app_assignment%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\Yoga\\Downloads\\ahead_app_assignment-1\\Ahead_app_assignment\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(5127)));
module.exports = __webpack_exports__;

})();