//格式日期处理
// {{ '2018-09-14 01:05' | formaDate(yyyy-MM-dd hh:mm:ss) }} 
// {{ '2018-09-14 01:05' | formaDate(yyyy-MM-dd) }} 
export function formaDate(value, fmStr) {
  
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1 + "";
    let day = date.getDate() + "";
    let hour = date.getHours() + "";
    let minute = date.getMinutes() + "";
    let second = date.getSeconds() + "";
    if(fmStr && fmStr === "yyyy-MM-dd"){
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
  }
  

