// 개발용 미리보기: http://localhost:3000
// 휴대폰 메뉴 열기/닫기 + 부드러운 이동
(function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });
  nav.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.tagName === 'A') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', '메뉴 열기');
    }
  });
})();
