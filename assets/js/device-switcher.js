// The device switcher on the Using MK Plus pages: which device's version of
// each picture shows. The choice is kept in this browser, so every page opens
// on it. Without this script, the pages show the iPhone 18 Pro Max.
(function () {
  var KEY = "mkplus-guide-device";
  var root = document.documentElement;
  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (e) {}
  if (saved) root.setAttribute("data-device", saved);
  root.classList.add("has-device-switcher");

  function mark() {
    var current = root.getAttribute("data-device") || "iphone-18-pro-max";
    var buttons = document.querySelectorAll(".device-switcher button[data-device]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-device") === current));
    }
  }

  document.addEventListener("DOMContentLoaded", mark);
  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest(".device-switcher button[data-device]");
    if (!button) return;
    var device = button.getAttribute("data-device");
    root.setAttribute("data-device", device);
    try { window.localStorage.setItem(KEY, device); } catch (e) {}
    mark();
  });
})();
