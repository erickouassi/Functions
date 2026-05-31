function showUpdateNotification() {
    const banner = document.createElement("div");
    banner.id = "updateBanner";
    banner.style.position = "fixed";
    banner.style.bottom = "0";
    banner.style.left = "0";
    banner.style.right = "0";
    banner.style.background = "#800000";
    banner.style.color = "#fff";
    banner.style.padding = "15px";
    banner.style.textAlign = "center";
    banner.style.zIndex = "9999";
    banner.style.fontFamily = "Arial, sans-serif";

    banner.innerHTML = `
        🌟 Une nouvelle version du Rosaire du Jour est disponible.<br>
        <button id="refreshApp" style="margin-top:10px; padding:10px 20px; background:#fff; color:#800000; border:none; cursor:pointer; border-radius:5px;">
            Actualiser maintenant
        </button>
    `;

    document.body.appendChild(banner);

    document.getElementById("refreshApp").addEventListener("click", () => {
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage("checkForUpdate");
        }
        banner.remove();
        window.location.reload();
    });
}
