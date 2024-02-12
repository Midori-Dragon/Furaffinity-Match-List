// ==UserScript==
// @name        Furaffinity-Match-List
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     1.0.2
// @author      Midori Dragon
// @description Helper Script to create a matchlist for your Furaffinity Script
// @icon        https://www.furaffinity.net/themes/beta/img/banners/fa_logo.png?v2
// @homepageURL https://greasyfork.org/de/scripts/485827-furaffinity-match-list
// @supportURL  https://greasyfork.org/de/scripts/485827-furaffinity-match-list/feedback
// @license     MIT
// ==/UserScript==

(() => {
    class MatchList {
        constructor(customSettings) {
            this.matches = [];
            this.runInIFrame = false;
            this.customSettings = customSettings;
        }

        addMatch(match) {
            this.matches.push(match);
        }

        removeMatch(match) {
            this.matches = this.matches.filter(m => m !== match);
        }

        hasMatch() {
            if (this.runInIFrame == false && this.isWindowIFrame() == true)
                return false;

            if (!this.matches.some(x => window.location.toString().includes(x)))
                return false;

            let color = "color: blue";
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
                color = "color: aqua";

            let runString = `${GM_info.script.name} v${GM_info.script.version}`;
            let run = true;

            if (window.location.toString().includes("settings?extension")) {
                runString = "Settings: " + runString;
                run = false;
            } else if (this.customSettings)
                runString = `Running: ${runString} ${this.customSettings.toString()}`;
            else
                runString = "Running: " + runString;

            console.info(`%c${runString}`, color);

            return run;
        }

        getMatch() {
            if (this.runInIFrame == false && window.parent !== window)
                return;

            return this.matches.find(x => window.location.toString().includes(x));
        }

        isWindowIFrame() {
            return window !== window.parent;
        }
    }
    window.MatchList = MatchList;
})();
