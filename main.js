// Add simple helpers: basic form validation and lightbox placeholder
document.addEventListener('click', (e) => {
  // lightbox not implemented - placeholder for future
  if (e.target.matches('.img-thumb')) {
    const src = e.target.getAttribute('data-full') || e.target.src;
    const light = document.createElement('div');
    light.style.position='fixed'; light.style.inset=0; light.style.background='rgba(0,0,0,0.85)';
    light.style.display='flex'; light.style.alignItems='center'; light.style.justifyContent='center';
    light.style.zIndex=9999;
    const im = document.createElement('img'); im.src = src; im.style.maxWidth='90%'; im.style.maxHeight='90%'; light.appendChild(im);
    light.addEventListener('click', ()=> light.remove());
    document.body.appendChild(light);
  }
});