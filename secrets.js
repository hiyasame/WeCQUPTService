// 学号
const studentId = process.env.WE_STU_ID
// 名字
const name = process.env.WE_NAME
// 密码
const password = process.env.WE_PWD
// 统一验证码
const tyCode = process.env.WE_TY_CODE
// 性别
const sex = process.env.WE_SEX
// 是否使用Github Action CI运行该程序
const useGithubAction = true

export {
    studentId, name, password, tyCode, sex, useGithubAction
}