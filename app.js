var ua = detect.parse(navigator.userAgent);

document.getElementById("name").innerText = ua.browser.name;
document.getElementById("os").innerText = ua.os.name;
document.getElementById("device").innerText = ua.device.type;
document.getElementById("version").innerText = ua.os.version;