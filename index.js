const fs = require('fs');

function isFunnyFolder() {
    if ("index.js") {
        if (fs.existsSync("./myFunnyFolder") === false) {
            fs.mkdir("./myFunnyFolder", () => { })
        }
        else if ("./myFunnyFolder") {
            fs.rmdir("./myFunnyFolder", () => { })
        }
    }
}
function whatIsThis() {
    if ("index.js") {
        if (fs.existsSync("./what") === false) {
            console.log("no what");
            fs.mkdir("./what", () => {
                fs.writeFile("./what/isThis.txt", "text", () => { })
            })
        }
    }
}
isFunnyFolder();
whatIsThis()