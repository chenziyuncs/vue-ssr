const autoprefixer = require('autoprefixer')
//autoprefixer自动处理预处理css编译后的文件，添加前缀。
module.exports = {
  plugins: [
    autoprefixer()
  ]
}