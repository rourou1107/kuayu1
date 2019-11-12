// 1. CORS请求来解决跨域
// const request = new XMLHttpRequest()
// request.open('GET', 'http://rourou.com:8888/friends.json')
// request.onreadystatechange = ()=> {
//     if(request.readyState === 4) {
//         if(request.status >= 200 && request.status < 300) {
//             console.log(request.response)
//         }
//     }
// }
// request.send()

// 封装ajax
function ajax(method, url){
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest()
        request.open(method, url)
        request.onreadystatechange = ()=> {
            if(request.readyState === 4) {
                if(request.status >= 200 && request.status < 300) {
                    resolve(request.response)
                }else {
                    reject(1)
                }
            }
        }
        request.send()
    })
}
ajax('GET', 'http://rourou.com:8888/friends.json').then((data)=>{
    console.log(data)
}, (data)=>{
    console.log(data)
})


// 2. JSONP解决跨域
// let random = 'frankName' + Math.random()
// window[random] = (data) => {
//     console.log(data)
// }
// // 因为script不会有跨域问题
// let script = document.createElement('script')
// script.src = `http://rourou.com:8888/friends.js?callback=${random}`
// document.body.appendChild(script)
//
// script.onload = () =>{
//     script.remove() // 加载完数据已经拿到,为了让页面没那么臃肿,故移除
// }

// 3. 封装JSONP
// function jsonp(url){
//     return new Promise((resolve, reject) => {
//         let random = 'frankName' + Math.random()
//         window[random] = (data) => {
//             resolve(data)
//         }
//         // 因为script不会有跨域问题
//         let script = document.createElement('script')
//         script.src = `${url}?callback=${random}`
//         document.body.appendChild(script)
//
//         script.onload = () =>{
//             script.remove() // 加载完数据已经拿到,为了让页面没那么臃肿,故移除
//         }
//         script.onerror = () =>{
//             reject()
//         }
//     })
// }
// jsonp('http://rourou.com:8888/friends.js').then((data) => {
//     console.log(data)
// })
