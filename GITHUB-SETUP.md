# 🚀 GitHub Pages Setup - Coco App

## ⚠️ Problem: "Seite nicht gefunden"

### Lösung in 3 Schritten:

## 1️⃣ GitHub Pages aktivieren
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **"Settings"** (oben rechts)
3. Scrolle zu **"Pages"** (linke Sidebar)
4. Unter **"Source"** wähle:
   - **Deploy from a branch**
   - Branch: **main** (oder master)
   - Folder: **/ (root)**
5. Klicke **"Save"**

## 2️⃣ Warte 2-5 Minuten
- GitHub braucht Zeit zum Deployen
- Die URL findest du oben auf der Pages-Seite:
  - Format: `https://[dein-username].github.io/[repository-name]/`

## 3️⃣ Richtige URLs verwenden

### Wenn dein Repo "ship-it" heißt:
- **Startseite:** `https://trinchen2000.github.io/ship-it/`
- **Kunden-App:** `https://trinchen2000.github.io/ship-it/coco-colours-app.html`
- **Admin:** `https://trinchen2000.github.io/ship-it/coco-colours-admin.html`

### Wenn dein Repo anders heißt:
Ersetze "coco-app" mit deinem Repository-Namen

## 📁 Datei-Struktur (wichtig!)

Dein Repository sollte so aussehen:
```
/
├── index.html              (Startseite - WICHTIG!)
├── coco-colours-app.html   (Kunden App)
├── coco-colours-admin.html (Admin Panel)
├── fix-events.html         (Fix-Tool)
├── event-test.js           (Test-Script)
└── README.md               (Dokumentation)
```

## 🔍 Troubleshooting

### "404 - Not Found" immer noch?

**Check 1: Pages aktiviert?**
- Settings → Pages → Source muss konfiguriert sein

**Check 2: Richtiger Branch?**
- Stelle sicher, dass du den richtigen Branch gewählt hast (main oder master)

**Check 3: index.html vorhanden?**
- GitHub Pages braucht eine `index.html` als Startseite
- Diese habe ich dir erstellt!

**Check 4: Groß-/Kleinschreibung**
- GitHub unterscheidet Groß-/Kleinschreibung!
- `Index.html` ≠ `index.html`

**Check 5: Cache leeren**
- Browser-Cache: Strg+Shift+R
- Oder im Inkognito-Modus testen

### Status prüfen:
1. Gehe zu **Actions** Tab in deinem Repo
2. Schau ob der "pages build and deployment" Workflow grün ist ✅
3. Wenn rot ❌ → Klick drauf für Fehlerdetails

## 🎯 Quick Fix

### Alle Dateien die du brauchst:
1. `index.html` - **NEU! Als Startseite**
2. `coco-colours-app.html`
3. `coco-colours-admin.html`  
4. `fix-events.html`
5. `event-test.js`
6. `README.md`

### Upload-Reihenfolge:
1. Lösche alle alten Dateien
2. Lade alle 6 Dateien hoch
3. Warte 5 Minuten
4. Öffne: `https://[username].github.io/[repo-name]/`

## 🔗 Beispiel-URLs

Für dein Repository "ship-it" mit Username "trinchen2000":
- Start: `https://trinchen2000.github.io/ship-it/`
- Kunden: `https://trinchen2000.github.io/ship-it/coco-colours-app.html`
- Admin: `https://trinchen2000.github.io/ship-it/coco-colours-admin.html`

## ⏱️ Zeitplan
- **0-2 Min:** Nach Upload
- **2-5 Min:** GitHub baut die Seite
- **5+ Min:** Seite sollte live sein

## 💡 Profi-Tipp
Bookmark diese URLs nach dem ersten erfolgreichen Aufruf:
- Admin-Panel 
- Kunden-App
- Fix-Tool

So findest du sie immer schnell wieder!

## ✅ Erfolgs-Check
Wenn alles funktioniert:
1. Startseite zeigt 2 große Buttons (Kunde/Admin)
2. Beide Apps laden ohne Fehler
3. localStorage funktioniert zwischen den Seiten

---

**Viel Erfolg!** 🚀 Die Seite sollte in wenigen Minuten online sein!
