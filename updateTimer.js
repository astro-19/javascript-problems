function updateTimer(isoDate, timerInfo) {
    const date = new Date(isoDate);
    console.log(date, Date.now())
    const timeTillDate = date - Date.now();

    const seconds = Math.floor(timeTillDate / 1000)

    const minutes = Math.floor(seconds / 60)

    const hours = Math.floor(minutes / 60)

    timerInfo.seconds = seconds % 60;
    timerInfo.minutes = minutes % 60;
    timerInfo.hours = hours;
}

let timerInfo = { hours: 0, minutes: 0, seconds: 0 }
const newDate = "2024-02-28T00:00:00.000-17:58"
updateTimer(newDate, timerInfo)
console.log(timerInfo)