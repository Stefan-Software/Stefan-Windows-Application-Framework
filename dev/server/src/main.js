/**
 * ╭── @SWAFEntryFile ───────────────────────────────────────────╮
 * │ This is the main entry file of SWAF                         │
 * │ You can delete this box if you want                         │
 * │                                                             │
 * │ Base Packages:                                              │
 * │ @package express         │  @package                        │
 * │ @package fs-extra        │  @package                        │
 * │ @package body-parser     │  @package                        │
 * │                                                             │
 * │ @version 1.0                                                │
 * │ @template BaseSwafTemplate                                  │
 * │ @license MIT                                                │
 * │ @namespace Main                                             │
 * │                                                             │
 * │      We wish you a successful development of your app!      │
 * ╰─────────────────────────────────────────────────────────────╯
*/
// * NPM packages
import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs-extra';
import path from 'path';
/**
 * __dirname variable creation
 */
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
var Main;
(function (Main_1) {
    const settings = fs.readJSONSync('../config/dev.json');
    /**
     * This is where to write your code for the application
    */
    async function Main() {
        const app = express();
        app.use(bodyParser.json());
        express.static(path.join(__dirname, '../../website'));
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../../website/index.html'));
        });
        app.listen(Number(settings.app.port), String(settings.app.hostname), () => {
            console.log(`SWAF - Console Activated`);
            console.log(`You can access the app at http://${settings.app.hostname}:${settings.app.port} or open the .exe app`);
        });
    }
    Main_1.Main = Main;
})(Main || (Main = {}));
await Main.Main();
