// Super Simple Event Test
// Kopiere diesen Code in die Browser-Konsole (F12)

// 1. Clear everything
localStorage.removeItem('events');
console.log('✅ Events gelöscht');

// 2. Create a simple test event
const testEvent = {
    id: Date.now(),
    title: "Test Event",
    dateRange: "25. November",
    date: "25. November",
    timeRange: "10:00 - 18:00 Uhr",
    description: "Test Event Beschreibung",
    startDate: "2024-11-25",
    endDate: "2024-11-25", 
    startTime: "10:00",
    endTime: "18:00"
};

// 3. Save it
localStorage.setItem('events', JSON.stringify([testEvent]));
console.log('✅ Test Event gespeichert');

// 4. Reload page
console.log('🔄 Lade Seite neu...');
setTimeout(() => {
    location.reload();
}, 1000);
