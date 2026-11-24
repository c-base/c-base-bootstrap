/* Switch between the blue c-base theme and the amber variant (css/c-base-amber.css).
 *
 * Load this in <head>, without defer, so the stored variant is set before the
 * page is painted. Every element with the attribute data-cbase-theme-toggle
 * then switches on click:
 *
 *   <button type="button" data-cbase-theme-toggle>colour:
 *     <span class="cbase-if-default">blue</span><span class="cbase-if-amber">amber</span>
 *   </button>
 *
 * The choice is kept in localStorage, so it holds per browser and site.
 */
(function () {
  var KEY = 'c-base-theme';
  var root = document.documentElement;

  function apply(theme) {
    if (theme === 'amber') root.setAttribute('data-cbase-theme', 'amber');
    else root.removeAttribute('data-cbase-theme');
  }

  try { apply(localStorage.getItem(KEY)); } catch (error) {}

  document.addEventListener('click', function (event) {
    if (!event.target.closest || !event.target.closest('[data-cbase-theme-toggle]')) return;
    var theme = root.getAttribute('data-cbase-theme') === 'amber' ? 'default' : 'amber';
    apply(theme);
    try { localStorage.setItem(KEY, theme); } catch (error) {}
  });
})();
