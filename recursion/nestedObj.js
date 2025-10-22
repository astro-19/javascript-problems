const o1 = {
    o2: {
        name: "Sourav",
        contacts: {
            emails: ["sourav@example.com", "sourav.work@example.com"],
            phone: "123-456-7890"
        }
    }
};

function printNested(obj) {
    if (typeof obj === 'object') {
        for (let key in obj) {
            printNested(obj[key]);
        }
    } else {
        console.log(obj);
    }
}

printNested(o1);