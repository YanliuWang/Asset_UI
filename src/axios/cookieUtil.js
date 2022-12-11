
    export default function getCookie(name) {
        var arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        // eslint-disable-next-line
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
        
    }

    export function setCookie(name, value, days) {
        var exp = new Date();
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
    }

    export function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
    }

