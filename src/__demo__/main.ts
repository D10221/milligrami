import { app, BrowserWindow } from "electron";

let win: Electron.BrowserWindow;
app.on("ready", () => {
    win = new BrowserWindow({
        show: false,
        width: 600,
        height: 800,
        autoHideMenuBar: true
    });
    win.on("ready-to-show", ()=>{
        win.show();
        if(process.env.NODE_ENV !== "production"){
            win.webContents.openDevTools();
        }
    });
    win.loadURL(`file:///${__dirname}/window.html`)
});
app.on("window-all-closed", ()=>{
    app.quit();
})
