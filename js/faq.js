// FAQ TOGGLE
function toggleFaq(el) {
  const allQ = document.querySelectorAll('.faq-q');
  allQ.forEach(q => { if (q !== el) q.classList.remove('open'); });
  el.classList.toggle('open');
}
