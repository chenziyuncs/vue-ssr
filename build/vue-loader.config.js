module.exports = (isDev) => {
  return {
    /* eslint-disable */
    //控制vue文件template渲染中空格的问题
    preserveWhitepace: true,
    extractCSS: !isDev,//打包vue文件的css
    cssModules: {
      //编译classname根据路径文件名生成的hashbase64独一无二的名字
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      //命名方式使用首字母大写连接两个单词
      camelCase: true
    }
  }
}