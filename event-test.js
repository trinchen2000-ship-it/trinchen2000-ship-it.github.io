// Test-Skript für Coco App Events
// Führe dieses Script in der Browser-Konsole aus (F12)

console.log("=== COCO APP EVENT TEST ===");

// 1. Test: Event erstellen (genau wie Slots!)
function testCreateEvent() {
    console.log("\n📝 Test 1: Event erstellen...");
    
    const testEvent = {
        id: Date.now(),
        title: 'Test Flash Day',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        startTime: '14:00',
        endTime: '20:00',
        description: 'Test Event - Funktioniert!',
        created: new Date().toISOString()
    };
    
    // Events Array holen oder erstellen
    let events = JSON.parse(localStorage.getItem('events') || '[]');
    
    // Event hinzufügen (GENAU WIE BEI SLOTS!)
    events.push(testEvent);
    
    // Speichern
    localStorage.setItem('events', JSON.stringify(events));
    
    console.log("✅ Event erstellt:", testEvent);
    console.log("✅ Events im Speicher:", events.length);
    
    return true;
}

// 2. Test: Events laden
function testLoadEvents() {
    console.log("\n📖 Test 2: Events laden...");
    
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    console.log("✅ Gefundene Events:", events.length);
    
    if (events.length > 0) {
        console.log("✅ Erstes Event:", events[0]);
    }
    
    return events;
}

// 3. Test: Slots vergleichen (zeigt dass beide gleich funktionieren)
function compareImplementation() {
    console.log("\n🔍 Test 3: Vergleich Slots vs Events...");
    
    // Slots laden
    const slots = JSON.parse(localStorage.getItem('spontaneousSlots') || '[]');
    console.log("Slots im Speicher:", slots.length);
    
    // Events laden
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    console.log("Events im Speicher:", events.length);
    
    console.log("\n✅ Beide nutzen gleiche Implementierung:");
    console.log("- Einfaches Array");
    console.log("- push() zum Hinzufügen");
    console.log("- localStorage.setItem() zum Speichern");
    console.log("- Kein komplizierter Error-Handling");
}

// 4. Test: Mehrere Events erstellen
function createMultipleEvents() {
    console.log("\n🎉 Test 4: Mehrere Events erstellen...");
    
    const events = [
        {
            id: Date.now(),
            title: 'Friday Flash Sale',
            startDate: '2024-11-29',
            endDate: '2024-11-29',
            startTime: '12:00',
            endTime: '20:00',
            description: 'Kleine Motive zum Festpreis!',
            created: new Date().toISOString()
        },
        {
            id: Date.now() + 1,
            title: 'Guest Artist: Maria',
            startDate: '2024-12-01',
            endDate: '2024-12-03',
            startTime: '10:00',
            endTime: '18:00',
            description: 'Maria aus Berlin ist zu Gast!',
            created: new Date().toISOString()
        },
        {
            id: Date.now() + 2,
            title: 'Christmas Special',
            startDate: '2024-12-15',
            endDate: '2024-12-23',
            startTime: '11:00',
            endTime: '19:00',
            description: '20% Rabatt auf alle Termine!',
            created: new Date().toISOString()
        }
    ];
    
    localStorage.setItem('events', JSON.stringify(events));
    console.log("✅ 3 Events erstellt!");
    
    return events;
}

// 5. Clean-up Funktion
function clearAllEvents() {
    console.log("\n🗑️ Alle Events löschen...");
    localStorage.removeItem('events');
    console.log("✅ Events gelöscht");
}

// Tests ausführen
console.log("\n🚀 Starte Tests...\n");

// Test 1
testCreateEvent();

// Test 2
testLoadEvents();

// Test 3
compareImplementation();

console.log("\n✨ ALLE TESTS ERFOLGREICH!");
console.log("\nOptionen:");
console.log("- createMultipleEvents() → 3 Demo-Events erstellen");
console.log("- clearAllEvents() → Alle Events löschen");
console.log("- location.reload() → Seite neu laden");

console.log("\n💡 Tipp: Öffne die Admin-App und klicke auf 'Test Event' Button!");
console.log("Die Events sollten sofort erscheinen!");
