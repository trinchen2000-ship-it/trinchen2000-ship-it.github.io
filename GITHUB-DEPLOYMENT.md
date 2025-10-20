# 🚀 COCO Tattoo App - GitHub Deployment Guide

## 📦 Dateien die du hochladen musst:
1. ✅ `coco-app-customer.html` - Kunden-App
2. ✅ `coco-app-admin.html` - Admin-Panel
3. ✅ `manifest.json` - PWA Manifest
4. ✅ `service-worker.js` - Service Worker
5. ✅ `.nojekyll` - GitHub Pages Konfiguration
6. ✅ `README.md` - Dokumentation

## 🎯 Schritt-für-Schritt GitHub Setup

### 1️⃣ GitHub Account erstellen (falls noch nicht vorhanden)
- Gehe zu [github.com](https://github.com)
- Klicke "Sign up"
- Erstelle kostenlosen Account

### 2️⃣ Neues Repository erstellen
1. Klicke auf das **+** Symbol oben rechts
2. Wähle **"New repository"**
3. Repository Name: `coco-tattoo` (oder beliebig)
4. Description: "COCO Tattoo Booking App"
5. **Public** auswählen (wichtig für GitHub Pages!)
6. NICHT "Add README" ankreuzen (haben wir schon)
7. Klicke **"Create repository"**

### 3️⃣ Dateien hochladen
1. Klicke auf **"uploading an existing file"**
2. Ziehe alle 6 Dateien in das Upload-Fenster:
   - `coco-app-customer.html`
   - `coco-app-admin.html`  
   - `manifest.json`
   - `service-worker.js`
   - `.nojekyll`
   - `README.md`
3. Commit message: "Initial COCO Tattoo App setup"
4. Klicke **"Commit changes"**

### 4️⃣ GitHub Pages aktivieren
1. Gehe zu **Settings** (im Repository)
2. Scrolle runter zu **"Pages"** (linke Sidebar)
3. Source: **"Deploy from a branch"**
4. Branch: **"main"** (oder "master")
5. Folder: **"/ (root)"**
6. Klicke **"Save"**

### 5️⃣ Warte 2-5 Minuten
- GitHub zeigt oben einen grünen Haken ✅ wenn fertig
- Die URL erscheint in den Pages-Settings

### 6️⃣ Deine Apps sind live! 🎉

**Deine URLs:**
- 🌐 Kunden-App: `https://[DEIN-USERNAME].github.io/coco-tattoo/coco-app-customer.html`
- 🔧 Admin-Panel: `https://[DEIN-USERNAME].github.io/coco-tattoo/coco-app-admin.html`

Ersetze `[DEIN-USERNAME]` mit deinem GitHub Benutzernamen!

## 📱 Mobile Installation

### iPhone/iPad:
1. Öffne Kunden-App URL in **Safari** (wichtig!)
2. Tippe auf Teilen-Button (□↑)
3. Scrolle und wähle **"Zum Home-Bildschirm"**
4. Name: "COCO Tattoo"
5. **"Hinzufügen"** tippen

### Android:
1. Öffne Kunden-App URL in **Chrome**
2. Tippe auf ⋮ (drei Punkte)
3. Wähle **"App installieren"**
4. Bestätige Installation

## 🔄 Updates durchführen

### Option 1: Direkt auf GitHub
1. Gehe zu deinem Repository
2. Klicke auf die Datei (z.B. `coco-app-customer.html`)
3. Klicke auf ✏️ **"Edit"**
4. Mache deine Änderungen
5. Scrolle runter, schreibe Commit-Message
6. Klicke **"Commit changes"**
7. Warte 2-3 Minuten → Live! ✅

### Option 2: Neue Version hochladen
1. Gehe zu deinem Repository
2. Klicke auf **"Add file"** → **"Upload files"**
3. Lade die geänderte Datei hoch
4. Sie ersetzt automatisch die alte Version
5. Commit und fertig!

## 🎨 Erste Schritte im Admin-Panel

### 1. Artists anlegen
1. Öffne Admin-Panel
2. Gehe zu "Artists"
3. Klicke "+ Neuer Artist"
4. Fülle aus: Name, Beschreibung, Stile
5. Speichern

### 2. Ersten Slot erstellen
1. Gehe zu "Slots"
2. Klicke "+ Neuer Slot"
3. Wähle Artist, Datum, Zeit
4. Speichern → Erscheint sofort in Kunden-App!

### 3. Test-Event anlegen
1. Gehe zu "Events"
2. Klicke "+ Neues Event"
3. Titel: "Flash Day"
4. Beschreibung und Datum eingeben
5. Speichern

## 🚨 Troubleshooting

### App lädt nicht?
- Cache leeren (Strg+Shift+R oder Cmd+Shift+R)
- JavaScript muss aktiviert sein
- Cookies/LocalStorage muss erlaubt sein

### Änderungen nicht sichtbar?
- Warte 5 Minuten (GitHub braucht Zeit)
- Browser-Cache leeren
- Prüfe ob Commit erfolgreich war

### Push-Notifications funktionieren nicht?
- Browser muss Notifications erlauben
- HTTPS ist erforderlich (GitHub Pages hat das ✅)
- Service Worker braucht Zeit zum Laden

## 💡 Pro-Tipps

### Eigene Domain verwenden:
1. Gehe zu Settings → Pages
2. Custom domain eingeben
3. DNS-Einstellungen bei deinem Provider anpassen

### Backup erstellen:
1. Klicke "Code" → "Download ZIP"
2. Speichere lokal als Backup

### Team-Zugriff:
1. Settings → Manage access
2. "Invite a collaborator"
3. GitHub-Username eingeben

## 📊 Admin-Features im Detail

**Dashboard:**
- Übersicht aller Aktivitäten
- Statistiken zu Slots und Anfragen
- Schnellzugriff auf alle Bereiche

**Slot-Verwaltung:**
- Spontane Termine freischalten
- Artist zuweisen
- Zeitfenster definieren
- Sofort in Kunden-App sichtbar

**Anfragen-System:**
- Alle Kundenanfragen einsehen
- Bilder und Details prüfen
- Bestätigen oder Ablehnen
- Automatische Status-Updates

**Push-Nachrichten:**
- Last-Minute Termine bewerben
- Zielgruppen auswählen
- Historie einsehen

## ✅ Checkliste für Go-Live

- [ ] GitHub Repository erstellt
- [ ] Alle 6 Dateien hochgeladen
- [ ] GitHub Pages aktiviert
- [ ] URLs funktionieren
- [ ] Admin-Panel getestet
- [ ] Kunden-App getestet
- [ ] Mindestens 3 Artists angelegt
- [ ] Test-Slot erstellt
- [ ] Test-Anfrage gesendet
- [ ] Mobile Installation getestet

## 🎉 Fertig!

Deine COCO Tattoo App ist jetzt live und einsatzbereit!

**Support:** Bei Fragen einfach ein Issue im GitHub Repository erstellen.

---
*Made with 🖤 and 💙 (Schwarz & Pastelltürkis)*