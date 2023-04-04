/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
self.addEventListener("push", event => {
  var _event$data$text, _event$data;
  const body = (_event$data$text = (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.text()) !== null && _event$data$text !== void 0 ? _event$data$text : "";
  event.waitUntil(self.registration.showNotification("PushNotifications", {
    body: body,
    icon: "https://example.com/icon.png"
  }));
});
/******/ })()
;