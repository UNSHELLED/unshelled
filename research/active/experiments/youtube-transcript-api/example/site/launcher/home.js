(function () {
  "use strict";

  var statusTime = document.getElementById("home-status-time");
  var dateEl = document.getElementById("home-date");

  function updateClock() {
    var now = new Date();
    if (statusTime) {
      statusTime.textContent = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    }
  }

  function updateDate() {
    if (dateEl) {
      var now = new Date();
      dateEl.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "short"
      });
    }
  }

  updateClock();
  updateDate();
  setInterval(updateClock, 1000);
  setInterval(updateDate, 60000);
  /* Real device: battery % and network type when APIs available */
  var batteryPercent = document.getElementById("home-battery-percent");
  var batteryIcon = document.querySelector(".home-status .android-battery-icon");
  var cellularLabel = document.getElementById("home-cellular-label");
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

  /* App drawer: open/close, dock center, swipe down */
  var drawerBackdrop = document.getElementById("drawer-backdrop");
  var drawerPanel = document.getElementById("drawer-panel");
  var openDrawerBtn = document.getElementById("open-drawer");
  var drawerCloseBtn = document.getElementById("drawer-close");

  function openDrawer() {
    if (!drawerBackdrop) return;
    drawerBackdrop.classList.add("drawer-open");
    drawerBackdrop.setAttribute("aria-hidden", "false");
    if (drawerCloseBtn) drawerCloseBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!drawerBackdrop) return;
    drawerBackdrop.classList.remove("drawer-open");
    drawerBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (openDrawerBtn) openDrawerBtn.focus();
  }

  if (openDrawerBtn) openDrawerBtn.addEventListener("click", function (e) { e.preventDefault(); openDrawer(); });
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", function (e) {
      if (e.target === drawerBackdrop) closeDrawer();
    });
  }

  /* Swipe down on panel to close */
  var drawerScroll = document.getElementById("drawer-scroll");
  if (drawerPanel && drawerScroll) {
    var startY = 0;
    drawerPanel.addEventListener("touchstart", function (e) {
      startY = e.touches && e.touches[0] ? e.touches[0].clientY : 0;
    }, { passive: true });
    drawerPanel.addEventListener("touchend", function (e) {
      var endY = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : 0;
      if (startY > 0 && endY - startY > 80) closeDrawer();
    }, { passive: true });
  }

  /* Escape key closes drawer */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawerBackdrop && drawerBackdrop.classList.contains("drawer-open")) closeDrawer();
  });
})();
