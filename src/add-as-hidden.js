import {registerSettings} from './settings.js';
import {displaypopup} from './popup.js';

'use strict';


Hooks.once('init', async () => {
    console.log('add-as-hidden | Initializing add-as-hidden');
    registerSettings();
});

Hooks.on("ready", () => {
    console.log('add-as-hidden | Ready');
    if (game.user.isGM) {
        if (game.settings.get("add-as-hidden", "DontShowAgain") === false || game.settings.get("add-as-hidden", "LatestVersion") !== game.modules.get("add-as-hidden").data.version) {
            displaypopup()
        }
    }
});

Hooks.on("createCombatant", (combatant,notes,id) => {
    if (combatant.actor.hasPlayerOwner && game.settings.get("add-as-hidden", "PCS")){
        combatant.update({hidden: true})
    }

    if (!(combatant.actor.hasPlayerOwner) && game.settings.get("add-as-hidden", "NPCS")){
        combatant.update({hidden: true})
    }
});