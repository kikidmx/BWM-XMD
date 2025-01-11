const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW4+iSBj9L/WqPS2IICadLCDiDQXBC2wmmwIKKLmVBajY8b9PaLvT/bAz28tTBahTp87lewV5gUu0QA0YvQJC8RlWqF1WDUFgBOQ6DBEFXRDACoIRkCTdnZC+69aGXYllUrrHo1XEu541FDqLxuZcW+hbBR7vnRdw7wJSeyn2/wDoBbzKh02nHrAOZUzm2VsZ0sHUererO48Uq6LWPCz2rMFyL+DeIkJMcR6pJEYZojBdoMaAmH6PvjMJx8tOjDGWnJsrHNTsUspQO9s2w7s3btxM+nCOJsJtq3+PvusIobnZbeZj/TndzNZEXCTOXJouGIUTYVGymW+bkkWL7exBv8RRjoJZgPIKV823dW/G4mEilmyzMpCvWqyTwNCg+vPCjVPx6HOns9wLpMmlnhTfI45VbzNHz1k0DkW1JGNiXi15H/hFLqA1u7aqoLkWyqQDp72vxA36kZXk/+ieyZsFWR73ep5tArFYz6u67BhnOp2IlzjJLsi5sdhR63yvfo++1Rdqf4y988LNdROtPJfyHDpa9RmSIWXmSdaTDtvhbjCWPunDqqZ/FHmhznqZFBvOEe+vM75DGvsgDHE6dfeWQJhzpj9zqz1v6J623dWmd9GI09HL2p50VnEsuCxWDjPGjjZu0pyS6fj4HCvRy9uNEtTMAjBi7l1AUYTLisIKF/nbO4brAhicLeRTVL3JC1ISLYqSxanKFOeQzrdxSi4zblnTrZ55mkOs5ZFuVH5WJC+gCwgtfFSWKJjisipoo6OyhBEqwejvn12Qo2v1MK49jme6IMS0rLZ5TdICBh+ufnyEvl/UeWU1ua+0C0TBqPf5GlUVzqOy1bHOIfVjfEZKDKsSjEKYlujeBQE6Yx+1eIDNcO8fex1aDpQva29QppZbRy3luMgfv4RD3ud8iJ4Y0R8+cT1++ORBVngKBz3Y91mPFwcC6AL83pl2z28tPDjC3td2hy1/iOZDvtxoxs3jU+uiP+bRQ3tEUQBGFa1RF3jQT2piFwnK/4CLnBWbK6tsOixlZhPdyBIuzXQlmNPLF9yHp2D0+jmnlCJo8RacbS44kwVdkL1FELc353oCywz6HMfzoz7/V/nj0uoICfmRo6qFfde83RCgCuK0BCOgzLVOTGayujIU7F00TVIjSYkk8OnRR9gfYVIMqfFnDnuq1+rpGA7sHbbkftJPMlkh9KBMWUPU1zs2j4uXfwEBI1AowYkqYnFIIi2Wvet2hw63k2rQa75x5IEMXeLlUhGoPbmTTbwU1hVNNRGFJ/Z0k1eTvinK1vnQIRxnzBmtsMdSILfN+MjK18O8YCUWN//WWSiz8WrCpOOBUarudtc5LPVZR0KaLW/iAXFgY1wC0gS2L/LKKd/hmQmttXSmfl/Ukolhr2dMMOxfybYvm48avo2B9H384reCvL4nK8TobZrlsHXoP7z5mvHevfsF4n08/iZHsnm86LmirU70GC+KfmfLOEkUDFaDeWSeIHOJxeOzPU4DwkFwv//sApLCKixoBkYA5gEtcAC6IIVlJX3W1MYZKiuYETBihD4/EIXhgO+CrJEIsSpYfbQbSO2zvG3B/RdBpL/v+QcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kiki",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "0721534466",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

