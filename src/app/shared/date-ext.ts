interface Date 
{
    toYMDStart: () => string;
    toYMDEnd: () => string;
}

Date.prototype.toYMDStart = function() 
{
    var year, month, day;
    year = String(this.getFullYear());
    month = String(this.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = String(this.getDate());
    if (day.length == 1) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day + " 00:00:00";
};

Date.prototype.toYMDEnd = function() 
{
    var year, month, day;
    year = String(this.getFullYear());
    month = String(this.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = String(this.getDate());
    if (day.length == 1) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day + " 23:59:59";
};
