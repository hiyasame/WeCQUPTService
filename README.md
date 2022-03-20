# WeCQUPT-Service

基于Node.js的We重邮自动打卡程序

## Usage

### Github Action

- fork该项目
- 配置如下环境变量:
    + NAME 名称
    + STU_ID 学号
    + TY_CODE 统一验证码
    + SEX 性别
    + PASSWORD 密码
- 重新运行 github action ci

### 部署到服务器

- 修改secrets.js中的内容
- `npm install`
- `npm run start`

## Run

~~~
npm run start
~~~