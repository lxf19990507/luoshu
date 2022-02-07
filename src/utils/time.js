/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-13 10:46:56
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-12-30 17:43:46
 */
export default function handleTime(timeVal, val, connect = "/") {
    let time = new Date(timeVal)
    val = val //|| "Y-M-D"
    time == 'Invalid Date' ? time = new Date() : ""
    let obj = {
        Y() {
            if (connect == "china") {
                return time.getFullYear() + "年";
            }
            return time.getFullYear();
        },
        M() {
            if (connect == "china") {
                return (time.getMonth() + 1) + "月";
            }
            return time.getMonth() + 1;
        },
        D() {
            if (connect == "china") {
                return time.getDate() + "日";
            }
            return time.getDate();
        },
        h() {
            let hours = time.getHours()
            hours < 10?hours="0"+hours:""
            if (connect == "china") {
                return hours + "时";
            }
            return hours;
        },
        m() {
            let minute = time.getMinutes()
            minute < 10?minute="0"+minute:""
            if (connect == "china") {
                return minute + "分";
            }
            return minute;
        },
        s() {
            let seconds = time.getSeconds()
            seconds < 10?seconds="0"+seconds:""
            if (connect == "china") {
                return seconds + "秒";
            }
            return seconds;
        }
    }
    if(!val){
        
        return `${handleTime(timeVal,"Y-M-D")} ${handleTime(timeVal,"h-m-s",":")}`
    }
    val = val.split("-")
    let returnTime = ""
    if (connect == "china") {
        for (let item of val) {
            returnTime += obj[item]()
        }
        return returnTime
    } else {
        for (let item of val) {
            returnTime += connect + obj[item]()
        }
        return returnTime.slice(1)
    }
}