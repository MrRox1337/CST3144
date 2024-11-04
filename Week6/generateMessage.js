function randomWelcome() {
    var welcomeString = ["Hello User!", "Sup Sup!", "Asuh dude!"];

    return welcomeString[Math.floor(Math.random() * welcomeString.length)];
}

module.exports = randomWelcome;
