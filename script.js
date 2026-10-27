const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#copy-address')?.addEventListener('click', async () => {
  const address = '0xC9CA82fb600517E0119C6Dff589dF421C0fb474F';
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(address);
    status.textContent = 'Address copied.';
  } catch {
    status.textContent = 'Copy unavailable. Select the address above.';
  }
});
