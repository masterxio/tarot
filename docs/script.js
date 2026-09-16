const checkoutUrl = window.KIWIFY_CHECKOUT_URL || "#oferta";
const hasCheckout = Boolean(checkoutUrl) && !checkoutUrl.includes("SEU_CODIGO");

document.querySelectorAll("[data-checkout]").forEach((link) => {
  link.setAttribute("href", hasCheckout ? checkoutUrl : "#oferta");
  if (hasCheckout) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});

const header = document.querySelector(".site-header");
if (header) {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
