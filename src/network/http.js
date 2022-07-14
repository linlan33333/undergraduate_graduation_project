import axios from "axios";

const service = axios.create({
    //跨域是否带token
    withCredentials: false,
    baseURL: 'http://127.0.0.1:5000',
    timeout: 1500000
})

// //request拦截器
// service.interceptors.request.use(config => {
//
//     //一定要把config发出去，不然拦截下来不发服务器收不到请求
//     return config
// }, error => {
//     Promise.reject(error)
// })
//
// // respone拦截器
// service.interceptors.response.use(
//     response => {
//         if (response.data.code !== 200) {
//             switch (response.data.code) {
//                 case 401: // 用户未登录
//                     break;
//                 default:
//                     console.log(response.data.msg);
//                     break;
//             }
//             return Promise.reject(response)
//         } else {
//             return response.data
//         }
//     },
//     error => {
//         if (error.response) {
//             const res = error.response.data
//
//             return Promise.reject(res)
//         } else {
//             return Promise.reject(error)
//         }
//     }
// )

export default service