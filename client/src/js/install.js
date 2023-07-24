const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // prevent browser from automatically showing the prompt
    event.preventDefault();
    // store the event for later use
    deferredPrompt = event;
    // show the install button
    butInstall.style.display = 'block';
});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // hide the install button
    butInstall.style.display = 'none';

    if (deferredPrompt) {
        // show the prompt
        deferredPrompt.prompt();

        //wait for user reponse
        const { outcome } = await deferredPrompt.userChoice;

        // or you console log the reponse
        console.log(`User response: ${outcome}`);

        // no longer need prompt so clear it
        deferredPrompt = null;
    }
});

// Added a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
});
