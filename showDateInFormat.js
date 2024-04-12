// Write a JavaScript program to display the date in the following way.
// input 2024-04-12
// output 12th April, 2024


function Ordinal(n) {
    let order = ["th", "st", "nd", "rd"],
        date = n % 100;
    return (order[(date - 20) % 10] || order[date] || order[0]);
}


function dateFunction(n) {
    const date = new Date(n);
    const month = date.toLocaleDateString("en-IN", { month: "long" });
    const dayNumber = date.getDate();
    const dayOrdinal = Ordinal(dayNumber)

    const formattedDateWithOrdinal = `${dayNumber}${dayOrdinal} ${month}, ${date.getFullYear()}`;
    return formattedDateWithOrdinal;
}
let n = "2024-04-2"
console.log(dateFunction(n))