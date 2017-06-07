import { app, BrowserWindow } from "electron";
import * as path from "path";

let win: Electron.BrowserWindow;
app.on("ready", () => {
    win = new BrowserWindow({
        show: false,
        width: 600,
        height: 800,
        autoHideMenuBar: true,
        icon: path.join(__dirname, "../../resources", "icon.png")
    });
    win.on("ready-to-show", () => {
        win.show();
        if (process.env.NODE_ENV !== "production") {
            win.webContents.openDevTools();
        }
    });
    win.loadURL(`file:///${__dirname}/window.html`);
});
app.on("window-all-closed", () => {
    app.quit();
});
