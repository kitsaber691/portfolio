$("document").ready(function () {
  'use strict';
  function ieSucks() {
    var browserVersion = navigator.appName, dialog = $("#popup");
    if (browserVersion === "Microsoft Internet Explorer") {
      // window.alert("You are using an unsupported browser. In order to best view this site, you should upgrade to the latest version of Internet Explorer, or use a different browser such as Safari, Chrome, or Firefox.");
      dialog.popup("open");
    } else {
      dialog.remove();
    }
  }
  ieSucks();
});