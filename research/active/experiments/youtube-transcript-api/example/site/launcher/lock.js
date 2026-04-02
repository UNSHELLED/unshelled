(function () {
  "use strict";

  var statusTime = document.getElementById("lock-status-time");
  var unlockStrip = document.getElementById("lock-unlock");

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function updateClock() {
    if (statusTime) {
      var now = new Date();
      statusTime.textContent = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    }
  }

  if (statusTime) {
    updateClock();
    setInterval(updateClock, 1000);
  }

  /* Real device: battery % and network type when APIs available */
  var batteryPercent = document.getElementById("lock-battery-percent");
  var batteryIcon = document.querySelector(".lock-status .android-battery-icon");
  var cellularLabel = document.getElementById("lock-cellular-label");
  if (navigator.getBattery) {
    navigator.getBattery().then(function (b) {
      function setBattery() {
        var pct = Math.round(b.level * 100);
        if (batteryPercent) batteryPercent.textContent = pct + "%";
        if (batteryIcon) batteryIcon.style.setProperty("--android-battery-width", pct + "%");
      }
      setBattery();
      b.addEventListener("levelchange", setBattery);
    });
  }
  if (cellularLabel && navigator.connection) {
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    function setNetwork() {
      var type = (conn.effectiveType || conn.type || "").toUpperCase();
      if (type === "4G" || type === "3G" || type === "2G") cellularLabel.textContent = type;
      else if (conn.effectiveType === "slow-2g" || conn.effectiveType === "2g") cellularLabel.textContent = "2G";
      else if (conn.effectiveType === "3g") cellularLabel.textContent = "3G";
      else if (conn.effectiveType === "4g") cellularLabel.textContent = "4G";
      else cellularLabel.textContent = "4G";
    }
    setNetwork();
    if (conn.addEventListener) conn.addEventListener("change", setNetwork);
  }

  function handleUnlock() {
    var screen = document.body;
    if (screen.classList.contains("lock-unlocked")) return;
    screen.classList.add("lock-unlocked");

    var duration = prefersReducedMotion() ? 0 : 500;
    setTimeout(function () {
      window.location.href = "home.html";
    }, duration);
  }

  if (unlockStrip) {
    unlockStrip.addEventListener("click", handleUnlock);
    unlockStrip.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleUnlock();
      }
    });
  }

  var touchStartY = 0;
  document.body.addEventListener(
    "touchstart",
    function (e) {
      if (e.target.closest(".lock-unlock-strip") || e.target.closest(".lock-hero")) {
        touchStartY = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : 0;
      }
    },
    { passive: true }
  );
  document.body.addEventListener(
    "touchend",
    function (e) {
      var touch = e.changedTouches && e.changedTouches[0];
      if (touch && (e.target.closest(".lock-unlock-strip") || e.target.closest(".lock-hero")) && touchStartY - touch.clientY > 40) {
        handleUnlock();
      }
    },
    { passive: true }
  );
})();
