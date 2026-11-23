(() => {
    const LAST_OPEN_KEY = "OADS";
    const COOLDOWN_MS = 60 * 1000;
    const SMARTLINK = "https://araplhn.org/4/f695c1d6b472f348cdd6068490bb4ac0";
    const FALLBACK = "https://bony-teaching.com/bv3rV/0fP.3Yp_vpblmMV/J/ZNDL0g3/NbDZY/wFNRTxIq1bLFTbcp0DNajEA/1/Mij/kC";

    let resolvedLink = null;

    (async () => {
        try {
            const text = await (await fetch(SMARTLINK)).text();
            resolvedLink = (text.length > 1000 && !text.includes("Anonymous")) ? SMARTLINK : FALLBACK;
        } catch {
            resolvedLink = FALLBACK;
        }
    })();

    document.addEventListener("click", () => {
        if (typeof window.isOpiumMenu === "function" && !window.isOpiumMenu()) return;

        const now = Date.now();
        if (now - Number(localStorage.getItem(LAST_OPEN_KEY) || 0) < COOLDOWN_MS) return;

        localStorage.setItem(LAST_OPEN_KEY, String(now));
        window.open(resolvedLink || FALLBACK, "_blank")?.blur();
        window.focus();
    });
})();
