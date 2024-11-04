function getCurrentTime() {
    var date = new Date();
    return date.toLocaleString();
}

function getServerStatus() {
    return { status: "online", uptime: process.uptime() };
}

module.exports = { getCurrentTime, getServerStatus };
