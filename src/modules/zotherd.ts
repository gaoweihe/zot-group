import { config } from "../../package.json";
import { getLocaleID, getString } from "../utils/locale";

export class ZotherdFactory {

    static registerPrefs() {
      Zotero.PreferencePanes.register({
        pluginID: config.addonID,
        src: rootURI + "chrome/content/preferences.xhtml",
        label: getString("prefs-title"),
        image: `chrome://${config.addonRef}/content/icons/favicon.png`,
      });
    }

}