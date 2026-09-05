// ==========================================
// SPRÁVA VERZÍ A AKTUALIZACÍ (verze.js)
// ==========================================

const APP_VERSION = "1.2.0"; // Aktuální verze tvé aplikace

// Funkce pro kontrolu, zda uživatel nemá starou verzi (můžeš zavolat při startu aplikace)
window.checkAppVersion = async function() {
    console.log("Aktuální běžící verze aplikace:", APP_VERSION);
    
    // Příklad uložení verze do localStorage pro porovnání
    const savedVersion = localStorage.getItem('app_version');
    
    if (!savedVersion) {
        localStorage.setItem('app_version', APP_VERSION);
    } else if (savedVersion !== APP_VERSION) {
        console. zaznamenána nová verze aplikce!");
        // Zde můžeš uživatele upozornit na aktualizaci nebo promazat starou mezipaměť (cache)
        localStorage.setItem('app_version', APP_VERSION);
    }
};

// Funkce pro zobrazení informací o verzi v administraci nebo v menu
window.renderVersionModal = function() {
    const modalHtml = `
        <div id="versionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="duo-card bg-white p-6 max-w-sm w-full text-center shadow-xl">
                <h3 class="text-2xl font-black text-gray-700 mb-2">O aplikaci</h3>
                <p class="text-gray-500 font-semibold mb-4">Jazyková Akademie</p>
                <div class="bg-sky-50 p-3 rounded-xl border border-sky-200 mb-6">
                    <p class="text-sm text-sky-700 font-bold">Verze: ${APP_VERSION}</p>
                    <p class="text-xs text-gray-400 mt-1">Stav: Stabilní vydání</p>
                </div>
                <button onclick="document.getElementById('versionModal').remove()" class="w-full py-3 duo-btn-green text-lg">Zavřít</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// Automatické spuštění kontroly při načtení souboru
window.checkAppVersion();
