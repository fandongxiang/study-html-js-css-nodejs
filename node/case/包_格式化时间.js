function dateFormat(dtStr) {
    const dt = new Date(dtStr);
    const year = dt.getFullYear();
    const month = padZero(dt.getMonth() + 1);
    const date = padZero(dt.getDate());

    const hour = padZero(dt.getHours());
    const minute = padZero(dt.getMinutes());
    const second = padZero(dt.getSeconds());
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}
function padZero(n) {
    return n > 9 ? n : '0' + n;
}
module.exports = {
    dateFormat
}