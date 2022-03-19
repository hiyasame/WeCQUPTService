
// 还需请求参数: name xh xb openid mrdkkey timestamp
function getRequestObj(name, xh, xb, openid, mrdkkey, timestamp) {
    const json = JSON.parse(`
    {"szdq":"重庆市,重庆市,南岸区","locationBig":"中国,重庆市,重庆市,南岸区","locationSmall":"重庆市南岸区金紫街8-14号","latitude":29.52168,"longitude":106.56256,"ywjcqzbl":"低风险","ywjchblj":"无","xjzdywqzbl":"无","twsfzc":"是","ywytdzz":"无","jkmresult":"绿色","xxdz":"重庆邮电大学","beizhu":"无"}
    `)
    json.name = name
    json.xh = xh
    json.xb = xb
    json.openid = openid
    json.mrdkkey = mrdkkey
    json.timestamp = timestamp
    return json
}

// 日期【0-30】
const r=["s9ZS","jQkB","RuQM","O0_L","Buxf","LepV","Ec6w","zPLD","eZry","QjBF","XPB0","zlTr","YDr2","Mfdu","HSoi","frhT","GOdB","AEN0","zX0T","wJg1","fCmn","SM3z","2U5I","LI3u","3rAY","aoa4","Jf9u","M69T","XCea","63gc","6_Kf"]
// 小时【0-23】
const u=["89KC","pzTS","wgte","29_3","GpdG","FDYl","vsE9","SPJk","_buC","GPHN","OKax","_Kk4","hYxa","1BC5","oBk_","JgUW","0CPR","jlEh","gBGg","frS6","4ads","Iwfk","TCgR","wbjP"];
const keymrdk = function(e, f) { return (r[e] || r[0])+u[f] }

export {
    getRequestObj, keymrdk
}