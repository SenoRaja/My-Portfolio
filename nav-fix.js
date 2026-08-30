document.addEventListener('DOMContentLoaded', function() {
  function updateDropdownSize() {
    const ref = document.querySelector('.link-cards .card-link');
    if (!ref) return;
    const cs = getComputedStyle(ref);
    const width = cs.width;
    const height = cs.height;
    const fontSize = cs.fontSize;
    const lineHeight = cs.lineHeight;
    const fontFamily = cs.fontFamily || 'Arial, Helvetica, sans-serif';
    const toggles = document.querySelectorAll('.dropdown .card-link');
    toggles.forEach(el => {
      el.style.width = width;
      el.style.height = height;
      el.style.fontSize = fontSize;
      el.style.lineHeight = lineHeight;
      el.style.fontFamily = fontFamily;
    });
  }

  updateDropdownSize();
  window.addEventListener('resize', function() {
    requestAnimationFrame(updateDropdownSize);
  });
});
