const device = require("current-device");

function getDeviceType() {
    return device.type
}

module.exports = {
    getDeviceType
}