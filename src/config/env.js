/*上线环境和开发环境区别处理*/
/*
*baseUrl=>domain主机名
*
*
*
*/
let baseUrl ='';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://212.64.86.54:3000'
}

export {
  baseUrl
}
