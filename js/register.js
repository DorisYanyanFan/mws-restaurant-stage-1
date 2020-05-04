/* Set up service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js', {scope: "/"})
    .then(reg => {
      console.log('Service Worker Registration Worked: ' + reg.scope);
    })
    .catch(error => {
      console.log('Service Worker registration failed: ' + error);
    });
}
