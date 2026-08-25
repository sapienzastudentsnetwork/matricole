(function () {
  "use strict";

  var script = document.getElementById("goatcounter-script");
  var counter = document.getElementById("page-view-counter");
  var count = document.getElementById("page-view-count");

  if (!script || !counter || !count) return;

  function loadPageViewCount() {
    if (!window.goatcounter || typeof window.goatcounter.get_data !== "function") {
      return;
    }

    var path = window.goatcounter.get_data().p.replace(/\/$/, "");
    var endpoint =
      "https://matricole.goatcounter.com/counter/" +
      encodeURIComponent(path) +
      ".json";

    window.fetch(endpoint, {
      mode: "cors",
      credentials: "omit"
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Unable to load page view count");
        return response.json();
      })
      .then(function (data) {
        if (data.count === undefined || data.count === null) return;
        count.textContent = data.count;
        counter.hidden = false;
      })
      .catch(function () {
        // Keep the optional counter hidden if GoatCounter is unavailable.
      });
  }

  if (window.goatcounter && typeof window.goatcounter.get_data === "function") {
    loadPageViewCount();
  } else {
    script.addEventListener("load", loadPageViewCount, { once: true });
  }
})();
