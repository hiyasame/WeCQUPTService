# WeCQUPT-Service

基于Node.js的We重邮自动打卡程序

## Usage

- 补全secrets.js

~~~js
const studentId = '学号'
const name = '姓名'
const password = '密码'
const tyCode = '统一验证码'
const sex = '性别'
// 是否使用github action
const useGithubAction = true

export {
    studentId, name, password, tyCode, sex, useGithubAction
}
~~~

- 部署到服务器/Github Action(推荐)

## Run

~~~
npm run start
~~~