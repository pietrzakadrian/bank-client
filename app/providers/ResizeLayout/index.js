export const onResize = () => {
  if (typeof Event === 'function') {
    // modern browsers
    window.dispatchEvent(new Event('resize'));
  } else {
    // This will be executed on old browsers and especially IE
    const resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }
};
