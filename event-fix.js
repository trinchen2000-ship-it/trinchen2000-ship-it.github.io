// QUICK FIX für Event-Probleme
// Kopiere diesen Code in die Browser-Konsole (F12) und drücke Enter

// 1. Reset Events komplett
localStorage.removeItem('events');
console.log('❌ Events gelöscht');

// 2. Test-Events erstellen
const testEvents = [
    {
        id: Date.now(),
        title: "Flash Day Samstag",
        dateRange: "23. November",
        date: "23. November",
        timeRange: "10:00 - 18:00 Uhr",
        description: "Walk-in Tattoos ab 50€! Kommt vorbei und sichert euch coole Flash Designs.",
        startDate: "2024-11-23",
        endDate: "2024-11-23",
        startTime: "10:00",
        endTime: "18:00"
    },
    {
        id: Date.now() + 1,
        title: "Tattoo Nachtmarkt",
        dateRange: "7. - 8. Dezember",
        date: "7. - 8. Dezember",
        timeRange: "16:00 - 00:00 Uhr",
        description: "Live Musik, Food Trucks und Tattoos bis Mitternacht! Bringt eure Freunde mit.",
        startDate: "2024-12-07",
        endDate: "2024-12-08",
        startTime: "16:00",
        endTime: "00:00"
    }
];

// 3. Events speichern
localStorage.setItem('events', JSON.stringify(testEvents));
console.log('✅ Test-Events erstellt:', testEvents);

// 4. Seite neu laden
console.log('🔄 Lade Seite neu in 2 Sekunden...');
setTimeout(() => {
    location.reload();
}, 2000);
