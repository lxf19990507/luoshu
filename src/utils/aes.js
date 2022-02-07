/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-03-18 10:49:57
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-18 15:28:59
 */
import CryptoJS from 'crypto-js';
//加密
export function encrypt(word, keyStr,customiv) {
	keyStr = keyStr ? keyStr : 'sunrundfs2018dfs'; //判断是否存在ksy，不存在就用定义好的key
	var key = CryptoJS.enc.Utf8.parse(keyStr);
	var srcs = CryptoJS.enc.Utf8.parse(word);
	let iv = CryptoJS.enc.Utf8.parse(customiv || keyStr);
	var encrypted = CryptoJS.AES.encrypt(srcs, key, {
		iv,
		mode: CryptoJS.mode.CBC,
		// padding: CryptoJS.pad.ZeroPadding
	});
	return encrypted.toString();
}

function isBase64(str) {
    if (str ==='' || str.trim() ===''){ return false; }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

//解密
export function decrypt(word, keyStr, ivStr) {
    keyStr = keyStr ? keyStr : 'sunrundfs2018dfs'; //判断是否存在ksy，不存在就用定义好的key
	var key = CryptoJS.enc.Utf8.parse(keyStr);
	
	let iv = CryptoJS.enc.Utf8.parse(ivStr || keyStr);
	var decryptstr = CryptoJS.AES.decrypt(word, key, {
		iv,
		mode: CryptoJS.mode.CBC,
	});

	console.log(CryptoJS.enc.Utf8.stringify(decryptstr).toString(),"解密")
    return CryptoJS.enc.Utf8.stringify(decryptstr).toString();
}

//加密为base64
export function encryptBase64(val){
	let str = encrypt(val)
		console.log(str,"aes密文")
	    // 对字符串进行编码
	    var encode = encodeURI(str);
	    // 对编码的字符串转化base64
	    var base64 = btoa(encode);
		console.log(base64,"base64")
	    return base64;
}
