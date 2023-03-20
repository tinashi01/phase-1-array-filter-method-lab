// Code your solution here
function findMatching(drivers, name) {
    for (const driver of drivers) {
        if (name == driver.name) {
            console.log(name);
        }
    }
}