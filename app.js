async function fetchBatteryLevel() {
    const response = await fetch('/battery-level');
    const batteryLevel = await response.text();
    return parseInt(batteryLevel, 10);
}

function updateBatteryUI(batteryLevel) {
    const batteryLevelElement = document.querySelector('.battery-level');
    batteryLevelElement.style.width = `${batteryLevel}%`;

    if (batteryLevel <= 20) {
        batteryLevelElement.style.backgroundColor = 'red';
    } else if (batteryLevel <= 60) {
        batteryLevelElement.style.backgroundColor = 'yellow';
    } else {
        batteryLevelElement.style.backgroundColor = 'green';
    }
}

async function updateBatteryLevel() {
    const batteryLevel = await fetchBatteryLevel();
    updateBatteryUI(batteryLevel);
}

function init() {
    updateBatteryLevel();
    setInterval(updateBatteryLevel, 2000); // Fetch battery level every 2 seconds (2000 ms)
}

init();
