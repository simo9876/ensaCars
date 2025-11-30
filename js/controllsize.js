function sendHeight() {
    const height = document.body.scrollHeight;
    parent.postMessage({ type: "resizeIframe", height: height }, "*");
}

// exposer la fonction au scope global
window.sendHeight = sendHeight;

// recalcul apres chargement
window.onload = sendHeight;
setTimeout(sendHeight, 300);

// recalcul si les resultats changent
new MutationObserver(sendHeight).observe(document.body, {
    childList: true,
    subtree: true
});
