# COCO Tattoo App - Setup & Installation

## 🎨 Über die App
Die COCO Tattoo App ist eine moderne Buchungs- und Verwaltungslösung für Tattoo-Studios mit:
- **Kunden-App**: Slot-Buchung, Artist-Übersicht, Events, Anfragen
- **Admin-Panel**: Vollständige Verwaltung aller Funktionen
- **Push-Benachrichtigungen**: Last-Minute-Termine und Updates
- **Design**: Schwarz/Pastelltürkis Farbschema

## 📱 App-Links
- **Kunden-App**: `coco-app-customer.html`
- **Admin-Panel**: `coco-app-admin.html`

## 🚀 GitHub Pages Setup

### Schritt 1: Repository erstellen
1. Gehe zu [GitHub.com](https://github.com)
2. Klicke auf "New Repository"
3. Name: `coco-tattoo-app` (oder beliebiger Name)
4. Visibility: **Public** (für GitHub Pages)
5. Klicke "Create Repository"

### Schritt 2: Dateien hochladen
1. Klicke auf "uploading an existing file"
2. Lade beide HTML-Dateien hoch:
   - `coco-app-customer.html`
   - `coco-app-admin.html`
3. Commit Message: "Initial app setup"
4. Klicke "Commit changes"

### Schritt 3: GitHub Pages aktivieren
1. Gehe zu **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** (oder master)
4. Folder: **/ (root)**
5. Klicke "Save"

### Schritt 4: Warte 2-5 Minuten
GitHub braucht etwas Zeit zum Deployment

### Schritt 5: Deine App ist live!
- **Kunden-App**: `https://[dein-username].github.io/coco-tattoo-app/coco-app-customer.html`
- **Admin-Panel**: `https://[dein-username].github.io/coco-tattoo-app/coco-app-admin.html`

## 📲 Mobile App Installation

### Auf iPhone/iPad:
1. Öffne die Kunden-App URL in Safari
2. Tippe auf das Teilen-Symbol (□ mit Pfeil nach oben)
3. Wähle "Zum Home-Bildschirm"
4. Name: "COCO Tattoo"
5. Tippe "Hinzufügen"

### Auf Android:
1. Öffne die Kunden-App URL in Chrome
2. Tippe auf die drei Punkte (⋮)
3. Wähle "App installieren" oder "Zum Startbildschirm hinzufügen"
4. Name: "COCO Tattoo"
5. Tippe "Hinzufügen"

## 🔧 Admin-Funktionen

### Slots verwalten:
- Neue Slots für spontane Termine anlegen
- Artist, Datum, Zeit und Dauer festlegen
- Slots können gelöscht werden

### Anfragen bearbeiten:
- Kundenanfragen einsehen mit allen Details
- Anfragen bestätigen oder ablehnen
- Automatische Status-Updates für Kunden

### Artists verwalten:
- Neue Artists hinzufügen
- Beschreibungen und Stile pflegen
- Artist-Profile bearbeiten/löschen

### Events erstellen:
- Studio-Events anlegen
- Datum, Zeit und Beschreibung
- Automatische Anzeige in Kunden-App

### Push-Benachrichtigungen:
- Nachrichten an alle Kunden senden
- Zielgruppen auswählen
- Historie der gesendeten Nachrichten

## 🎨 Features

### Kunden-App:
- ✅ Freie Slots durchsuchen und buchen
- ✅ Artist-Profile mit Stilen ansehen
- ✅ Events und Veranstaltungen
- ✅ Anfragen-Status verfolgen
- ✅ Push-Benachrichtigungen erhalten
- ✅ Bildupload für Motivvorschläge

### Admin-Panel:
- ✅ Dashboard mit Übersicht
- ✅ Vollständige Slot-Verwaltung
- ✅ Anfragen-Management
- ✅ Artist-Verwaltung
- ✅ Event-Verwaltung
- ✅ Push-Notification-System

## 💾 Datenspeicherung
Die App nutzt **LocalStorage** zur Datenspeicherung:
- Alle Daten werden lokal im Browser gespeichert
- Daten bleiben zwischen Sessions erhalten
- Kein Server erforderlich

## 🔄 Updates durchführen
1. Bearbeite die HTML-Dateien lokal
2. Gehe zu deinem GitHub Repository
3. Klicke auf die Datei → "Edit"
4. Füge die Änderungen ein
5. Commit die Änderungen
6. GitHub Pages aktualisiert automatisch (2-5 Min.)

## 📱 PWA-Funktionen
Die App ist als Progressive Web App (PWA) optimiert:
- Installierbar auf Smartphones
- Offline-Fähigkeit (Cache)
- Push-Benachrichtigungen (in Entwicklung)
- App-ähnliche Erfahrung

## 🎨 Anpassungen

### Farben ändern:
In beiden HTML-Dateien, suche nach `:root` und passe die Farben an:
```css
:root {
    --turquoise: #7dd3c0;  /* Deine Farbe hier */
}
```

### Logo ändern:
Suche nach `logo-icon` und ersetze das Emoji:
```html
<div class="logo-icon">🎨</div>  <!-- Dein Icon hier -->
```

## 🚨 Wichtige Hinweise
- Beide Apps teilen sich denselben LocalStorage
- Änderungen im Admin sind sofort in der Kunden-App sichtbar
- Die Apps funktionieren komplett ohne Server
- Für echte Push-Notifications ist ein Service Worker nötig

## 📞 Support
Bei Fragen oder Problemen:
- Überprüfe die Browser-Konsole (F12)
- Stelle sicher, dass JavaScript aktiviert ist
- Lösche Cache/Cookies bei Problemen

## 🎉 Viel Erfolg mit deiner COCO Tattoo App!