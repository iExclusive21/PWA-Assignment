const buttonInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // console.log("event" + event)
    // event.preventDefault();
    window.deferredPrompt = event;
    buttonInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if(!promptEvent){
    return;
  }  
  promptEvent.prompt()
  window.deferredPrompt = null;

  buttonInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('install')  
  window.deferredPrompt = null;
});
