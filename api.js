import fetch from 'node-fetch'

const BASE_URL = "https://we.cqupt.edu.cn"

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
        headers: {
            'Content-Type': 'application/json'
        },
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
        headers: {
            'Content-Type': 'application/json'
        },
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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: Buffer.from(JSON.stringify(obj)).toString("base64")
        })
    })
    return await res.json()
}

export {
    bind, getMrdkFlag, postMrdkInfo
}