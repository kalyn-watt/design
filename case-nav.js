/* Mobile bottom nav: keep the active section's link in view as the page scrolls */
(function () {
  var nav = document.querySelector(".case-nav");
  if (!nav || !window.MutationObserver) return;
  var mq = window.matchMedia("(max-width: 860px)");

  function reveal() {
    var active = nav.querySelector('a[aria-current="true"]');
    if (!active || !mq.matches || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollTo({
      left: active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2,
      behavior: "smooth"
    });
  }

  new MutationObserver(reveal).observe(nav, {
    attributes: true,
    attributeFilter: ["aria-current"],
    subtree: true
  });
  reveal();
})();
