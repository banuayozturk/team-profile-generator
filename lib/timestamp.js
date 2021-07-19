function timestamp(date) {
    let d = date ? new Date(date) : new Date();
        year = d.getFullYear();
        month = d.getMonth() + 1;
        day = d.getDate();
        //hour = d.getHours();
        //minute = d.getMinutes();
        //second = d.getSeconds();
    let timestamp = [year, month, day].map(function(unit) {
        return (unit < 8) ? unit = "0" + unit : unit;
    });
    return timestamp.join('');
}

module.exports = timestamp;
