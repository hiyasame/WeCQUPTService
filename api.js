import fetch from 'node-fetch'

const BASE_URL = "https://we.cqupt.edu.cn"


function getHeader() {
    return {
        'Host': 'we.cqupt.edu.cn',
        'charset': 'utf-8',
        'Content-Type': 'application/json',
        'Referer': 'https://servicewechat.com/wx8227f55dc4490f45/54/page-frame.html',
        'User-Agent': "Mozilla/5.0 (Linux; Android 10; MI 6 Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2581 MMWEBSDK/200801 Mobile Safari/537.36 MMWEBID/8301 MicroMessenger/7.0.18.1740(0x27001235) Process/appbrand2 WeChat/arm64 NetType/WIFI Language/zh_CN ABI/arm64"
    }
}

/**
 * 绑定openid
 * 
 * @param {*} openid 随意，不要跟别人重
 * @param {*} yktid 统一验证码
 * @param {*} passwd 密码
 * @param {*} timestamp Unix时间戳
 * @returns 
 */
async function bind(openid, yktid, passwd, timestamp) {

    const res = await fetch(BASE_URL + '/api/users/bind.php', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify({
            key: Buffer.from(JSON.stringify({
                openid, yktid, passwd, timestamp
            })).toString("base64"),
        })
    })
    return await res.json()
}

/**
 * 是否已经打卡
 * 
 * @param {*} xh 学号
 * @param {*} openid 
 * @param {*} timestamp Unix时间戳
 * @returns 
 */
async function getMrdkFlag(xh, openid, timestamp) {
    const res = await fetch(BASE_URL + '/api/mrdk/get_mrdk_flag.php', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify({
            key: Buffer.from(JSON.stringify({
                xh, openid, timestamp
            })).toString("base64"),
        })
    })
    return await res.json()
}

/**
 * 打卡
 * 
 * @param {*} obj 
 * @returns 
 */
async function postMrdkInfo(obj) {
    const res = await fetch(BASE_URL + '/api/mrdk/post_mrdk_info.php', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify({
            key: Buffer.from(JSON.stringify(obj)).toString("base64")
        })
    })
    return await res.json()
}

export {
    bind, getMrdkFlag, postMrdkInfo
}