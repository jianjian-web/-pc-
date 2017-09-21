/*上线环境和开发环境区别处理*/
/*
*baseUrl=>domain主机名
*
*
*
*/
let baseUrl ='';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:3000'
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = ''
}

export {
  baseUrl
}
