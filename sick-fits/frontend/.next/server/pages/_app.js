(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2404:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "@apollo/client"
var client_namespaceObject = require("@apollo/client");;
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Nav.js



function Nav() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/products",
      children: "Products"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/sell",
      children: "Sell"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/orders",
      children: "Orders"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/account",
      children: "Account"
    })]
  });
}
;// CONCATENATED MODULE: ./components/Header.js





const LogoStyles = external_styled_components_default().h1.withConfig({
  displayName: "Header__LogoStyles",
  componentId: "sc-2cpreo-0"
})(["background:red;font-size:4rem;margin-left:2rem;z-index:2;transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = external_styled_components_default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:center;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bar",
      children: /*#__PURE__*/jsx_runtime_.jsx(LogoStyles, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Sick Fits"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sub-bar",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Search"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {})]
  });
}
;// CONCATENATED MODULE: ./components/Page.js




const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}body{font-family:'radnika_next',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;};button{font-family:'radnika_next',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}*,*:before,*:after{box-sizing:inherit;}a{text-decoration:none;color:var(--black)}a:hover{text-decoration:underline;}html{--red:#ff1234;--black:#393939;--grey:#3A3A3A;--light-grey:#E1E1E1;--off-white:#EDEDED;--max-width:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;}"]);
const InnerStyles = external_styled_components_default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InnerStyles, {
      children: [" ", children]
    })]
  });
}
;// CONCATENATED MODULE: external "@apollo/link-error"
var link_error_namespaceObject = require("@apollo/link-error");;
;// CONCATENATED MODULE: external "@apollo/client/react/ssr"
var ssr_namespaceObject = require("@apollo/client/react/ssr");;
;// CONCATENATED MODULE: external "apollo-upload-client"
var external_apollo_upload_client_namespaceObject = require("apollo-upload-client");;
;// CONCATENATED MODULE: external "next-with-apollo"
var external_next_with_apollo_namespaceObject = require("next-with-apollo");;
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_namespaceObject);
;// CONCATENATED MODULE: ./config.js
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = (/* unused pure expression or super */ null && (`http://localhost:3000/api/graphql`));
const prodEndpoint = `fill me in when we deploy`;
const perPage = 4;
;// CONCATENATED MODULE: ./lib/withData.js





 // usually we could use apollo boost, but since we need to upload files, we had to write this out ourselves.

function createClient({
  headers,
  initialState
}) {
  return new client_namespaceObject.ApolloClient({
    link: client_namespaceObject.ApolloLink.from([(0,link_error_namespaceObject.onError)(({
      graphQLErrors,
      networkError
    }) => {
      // Handles Netword and GraphQL errors so we don't ahve to go into network tab
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    // this lets us use usequery/usemutation.
    (0,external_apollo_upload_client_namespaceObject.createUploadLink)({
      uri:  false ? 0 : prodEndpoint,
      fetchOptions: {
        credentials: 'include' // include cookies in every request.

      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    // Where will we store cache? For us, we store it in the browser.
    cache: new client_namespaceObject.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {// TODO: We will add this together!
            // allProducts: paginationField(),
          }
        }
      }
    }).restore(initialState || {}) // restore the cache from the server

  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient, {
  getDataFromTree: ssr_namespaceObject.getDataFromTree
})); // getDatafromTree
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // swap with our own
// import 'nprogress/nprogress.css';


router_default().events.on('routeChangeStart', () => {
  external_nprogress_default().start();
});
router_default().events.on('routeChangeComplete', () => {
  external_nprogress_default().done();
});
router_default().events.on('routeChangeError', () => {
  external_nprogress_default().done();
});

function myApp({
  apollo,
  Component,
  pageProps
}) {
  return (
    /*#__PURE__*/
    // Apollo Provider is set up in withData.js
    jsx_runtime_.jsx(client_namespaceObject.ApolloProvider, {
      client: apollo,
      children: /*#__PURE__*/jsx_runtime_.jsx(Page, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  );
}

myApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ var _app = (withData(myApp));

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(2404); });
module.exports = __webpack_exports__;

})();