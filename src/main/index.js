'use strict'

import { app, BrowserWindow, Menu, screen } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const fullscreen = process.argv.indexOf('--fullscreen') !== -1
  const monitor2 = process.argv.indexOf('--monitor2') !== -1
  const displays = screen.getAllDisplays()
  var display

  if (monitor2) {
    display = displays.find((display) => {
      return display.bounds.x !== 0 || display.bounds.y !== 0
    })
  } else {
    display = displays.find((display) => {
      return display.bounds.x === 0 || display.bounds.y === 0
    })
  }

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    x: display.bounds.x,
    y: display.bounds.y,
    useContentSize: true,
    autoHideMenuBar: true,
    fullscreen: fullscreen,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.maximize()

  const template = [
    {
      label: 'View',
      submenu: [
        {
          label: 'Settings',
          click () {
            if (mainWindow.webContents) {
              mainWindow.webContents.send('navigate', '/settings')
            }
          }
        },
        {
          label: 'HideMenu',
          click () {
            if (mainWindow.webContents) {
              Menu.setApplicationMenu(null)
            }
          }
        },
        {type: 'separator'},
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'About',
          click () { require('electron').shell.openExternal('http://novosga.org') }
        }
      ]
    }
  ]

  if (!fullscreen) {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
