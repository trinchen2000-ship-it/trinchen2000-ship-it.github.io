# 🎨 Coco Colours Tattoo App

## 🚀 Quick Start

### Die Apps starten:
1. **Admin Dashboard:** `coco-colours-admin.html` öffnen
2. **Kunden App:** `coco-colours-app.html` öffnen  
3. **Fix-Tool (bei Problemen):** `fix-events.html` öffnen

## ⚠️ Aktueller Fix: Event-Problem gelöst!

### Das Problem war:
- **Format-Konflikt** zwischen alten und neuen Events
- Alte Events: `date`, `time`, `location`
- Neue Events: `startDate`, `endDate`, `startTime`, `endTime`

### Die Lösung:
1. **Öffne `fix-events.html`**
2. Klick **"🔍 Events prüfen"** → zeigt Probleme
3. Klick **"🔧 Events reparieren"** → behebt automatisch
4. Fertig! Events funktionieren wieder

## 📱 App-Übersicht

### Admin Dashboard (`coco-admin.html`)
**Features:**
- 📍 **Spontane Slots** erstellen und verwalten
- 🎉 **Events** planen (Flash Days, Guest Artists)
- 👥 **Artists** hinzufügen
- 📋 **Anfragen** bestätigen/ablehnen
- 📢 **Push-Nachrichten** senden
- 📊 **Dashboard** mit Live-Statistiken

### Kunden App (`coco-app.html`)
**Features:**
- ⚡ **Spontane Termine** buchen
- 🎉 **Events** ansehen
- 📋 **Eigene Anfragen** verfolgen
- 🔔 **Push-Nachrichten** empfangen
- 🔄 **Auto-Refresh** alle 3 Sekunden

## 🧪 Testen

### Schnelltest mit Test-Buttons:
1. Admin → Events → **"Test Event"** klicken
2. Admin → Slots → **"Test Slot"** klicken
3. Kunden-App öffnen → Daten erscheinen sofort

### Manuell testen:
1. **Admin:** Neuen Slot/Event erstellen
2. **Kunde:** App öffnen, Slot buchen
3. **Admin:** Anfrage bestätigen
4. **Kunde:** Status in "Meine Anfragen" prüfen

## 💾 Technische Details

### Datenspeicherung:
- Alle Daten im Browser **localStorage**
- Beide Apps müssen im **gleichen Browser** laufen
- Keine Server/Datenbank nötig

### Datenformat Events (korrekt):
```javascript
{
    id: Date.now(),
    title: "Flash Day",
    startDate: "2024-11-27",
    endDate: "2024-11-27", 
    startTime: "10:00",
    endTime: "18:00",
    description: "..."
}
```

### Datenformat Slots:
```javascript
{
    id: Date.now(),
    date: "2024-11-27",
    startTime: "15:30",
    endTime: "17:30",
    duration: "2 Stunden",
    artist: "Max",
    style: "Traditional",
    urgent: false
}
```

## 🔧 Problemlösungen

### Events werden nicht angezeigt:
1. **Fix-Tool nutzen:** `fix-events.html` öffnen
2. "Events prüfen" → "Events reparieren"
3. Alternativ: Browser-Konsole → `localStorage.removeItem('events')`

### Slots funktionieren nicht:
1. Browser-Cache leeren: `Strg+Shift+R`
2. localStorage zurücksetzen: `localStorage.clear()`
3. Seite neu laden

### Daten zwischen Apps synchronisieren sich nicht:
- Beide Apps im **gleichen Browser** öffnen
- Nicht in Inkognito/Private-Modus
- Gleiche Domain/Ordner verwenden

## 🛠️ Debug-Tools

### Browser-Konsole (F12):
```javascript
// Alle Events anzeigen
console.log(JSON.parse(localStorage.getItem('events')));

// Alle Slots anzeigen  
console.log(JSON.parse(localStorage.getItem('spontaneousSlots')));

// Alle Anfragen anzeigen
console.log(JSON.parse(localStorage.getItem('bookingRequests')));

// Alles zurücksetzen
localStorage.clear();
location.reload();
```

### Fix-Tool Features:
- 🔍 **Events prüfen** - Zeigt Format-Probleme
- 🔧 **Events reparieren** - Konvertiert alte Formate
- 🗑️ **Events löschen** - Kompletter Reset
- ➕ **Test-Event** - Erstellt korrektes Event

## 📁 Alle Dateien

| Datei | Beschreibung |
|-------|--------------|
| `coco-colours-admin.html` | Admin Dashboard |
| `coco-colours-app.html` | Kunden App |
| `fix-events.html` | Debug & Repair Tool |
| `README.md` | Diese Anleitung |

## ✨ Features im Detail

### Spontane Slots:
- Last-Minute Markierung (bei <24h)
- Artist-Zuordnung
- Style-Angabe
- Zeitdauer-Auswahl

### Events:
- Mehrtägige Events möglich
- Start- und Endzeit
- Beschreibung
- Automatische Anzeige in Kunden-App

### Push-Nachrichten:
- Sofort in Kunden-App sichtbar
- Historie im Admin-Panel
- Zeitstempel

### Buchungsanfragen:
- Kontaktdaten erfassen
- Tattoo-Idee beschreiben
- Körperstelle & Größe
- Status-Tracking (Ausstehend/Bestätigt/Abgelehnt)

## 🚀 Weitere Entwicklung

### Geplante Features:
- [ ] Foto-Upload für Referenzen
- [ ] Kalender-Integration
- [ ] Email-Benachrichtigungen
- [ ] Artist-Profile mit Portfolio
- [ ] Preiskalkulator

## 💡 Tipps

1. **Regelmäßig testen:** Nach jeder Änderung in beiden Apps prüfen
2. **localStorage sichern:** Bei wichtigen Daten exportieren
3. **Browser-Kompatibilität:** Chrome/Firefox/Safari empfohlen
4. **Mobile Ansicht:** Responsive Design bereits integriert

## 📞 Support

Bei Problemen:
1. Fix-Tool (`fix-events.html`) nutzen
2. Browser-Konsole auf Fehler prüfen
3. localStorage zurücksetzen und neu beginnen
4. Diese README konsultieren

---

**Viel Erfolg mit der Coco Colours App!** 🎨✨

*Version 2.0 - Event-Fix Edition*
