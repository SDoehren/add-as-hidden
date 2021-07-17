

export const registerSettings = function () {


    game.settings.register("add-as-hidden", "NPCS", {
        name: "Auto Hide NPCs:",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register("add-as-hidden", "PCS", {
        name: "Auto Hide PCs:",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register("add-as-hidden", "LatestVersion", {
        name: "Latest Version",
        scope: "world",
        config: false,
        default: "",
        type: String
    });

    game.settings.register("add-as-hidden", "DontShowAgain", {
        name: "Dont Show Again",
        scope: "world",
        config: false,
        default: false,
        type: Boolean
    });
};
