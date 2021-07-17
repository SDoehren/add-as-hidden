
export function displaypopup() {
    let support = "<a href=\"https://ko-fi.com/sdoehren\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
        "                    <img src=\"https://img.shields.io/badge/ko--fi-Support-red?style=flat-square&amp;logo=ko-fi\" alt=\"ko-fi\"></a>\n" +
        "                <a href=\"https://www.patreon.com/bePatron?u=49614365\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
        "                    <img src=\"https://img.shields.io/badge/Patreon-Support-red?style=flat-square&amp;logo=patreon\" alt=\"Patreon\"></a>\n" +
        "                <a href=\"https://sdoehren.github.io/support.html\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
        "                    <img src=\"https://img.shields.io/badge/Crypto-Support-red?style=flat-square\" alt=\"Crpto\"></a>\n"


    let post = "<h1>Support Add As Hidden</h1>\n" + support +
        "<h1 id=\"change-log\">Change Log</h1>\n" +
        "<h4 id=\"0-0-01\">0.0.01</h4>\n" +
        "<ul>\n" +
        "<li>Initial Release </li>\n"


    let d = new Dialog({
        title: "Add As Hidden Update " + game.modules.get("add-as-hidden").data.version,
        content: post,
        buttons: {
            one: {
                icon: '<i class="fas fa-check"></i>',
                label: "Close",
                callback: () => console.log("Closed")
            },
            two: {
                icon: '<i class="fas fa-times"></i>',
                label: "Close until next update",
                callback: () => game.settings.set("add-as-hidden", "DontShowAgain", true)
            },
            three: {
                icon: '<i class="fab fa-patreon"></i>',
                label: "Goto Patreon",
                callback: () => window.open("https://www.patreon.com/sdoehren", '_blank')
            }
        },
        default: "one",
        render: html => console.log("Register interactivity in the rendered dialog"),
        close: html => game.settings.set("add-as-hidden", "LatestVersion", game.modules.get("add-as-hidden").data.version)
    });
    d.render(true);
}