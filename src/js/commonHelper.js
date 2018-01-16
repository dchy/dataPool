//对外暴露的函数,替换掉/Date( )/
function convertTime(jsonTime, format) {
    if (jsonTime == null || jsonTime.length==0) {
        return "";
    }
    var date = new Date(parseInt(jsonTime.replace("/Date(", "").replace(")/", ""), 10));
    var formatDate = date.format(format);
    return formatDate;
}

//先扩展一下javascript的Date类型,增加一个函数,用于返回我们想要的 yyyy-MM-dd HH:mm:ss 这种时间格式
Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };

    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }

    return format;
}

function getStringValue(obj) {
    if (obj == undefined || obj == null) {
        return "";
    } else {
        return obj;
    }
}
//$(function () {
//    var dt = '/Date(1436595149269)/';
//    var formatTime1 = convertTime(dt, "yyyy-MM-dd hh:mm:ss");//2015-07-11 14:12:29
//    $("#div1").text(formatTime1);
//    var formatTime2 = convertTime(dt, "yyyy年MM月dd日 hh时mm分ss秒");//2015年07月11日 14时12分29秒
//    $("#div2").text(formatTime2);
//})