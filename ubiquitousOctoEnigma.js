(function () {
  if (window.__ac) return;
  window.__ac = true;

  var base = "";
  try {
    base = typeof getBase === "function" ? getBase() : (window.getBase ? window.getBase() : "");
  } catch (e) {}

  var el = document.createElement("script");
  el.src = base + "/aclib.js";
  el.id = "aclib";
  el.onload = function () {
    try {
      window.aclib.runPop({
        zoneId: "12196614",
        popGate: function () {
          try {
            if (typeof isOpiumMenu === "function") return !!isOpiumMenu();
            if (window.isOpiumMenu) return !!window.isOpiumMenu();
          } catch (e) {}
          return true;
        }
      });
    } catch (e) {}
  };

  (document.head || document.documentElement).appendChild(el);
})();
