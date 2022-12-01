// /**
// * @param {timestamp} string  - 要转换的时间戳
// * @param {template} string - 转换之后的格式
// * @param {splitChar} string - 日期分隔符
// * @return {date}  string - 格式化之后的日期
// */
// function formatTimestamp(timestamp, template) {
//     let time = new Date(Number(timestamp))
//     let format = {
//         YYYY: time.getFullYear(),
//         MM: time.getMonth() + 1,
//         DD: time.getDay(),
//         hh: time.getHours(),
//         mm: time.getMinutes(),
//         ss: time.getSeconds(),
//     }
//     let str = template
//     for (let key in format) {
//         if (format[key] < 10) {
//             format[key] = '0' + format[key]
//         }
//         if(str.indexOf('key')){
//             str = str.replace(key, format[key])
//         }
//     }
//     return str
// }

// formatTimestamp('1663204527885', 'YYYY-MM-DD hh:mm:ss', '-')  // 2022-09-15 20:00:00
// formatTimestamp('1663204527885', 'MM-DD hh:mm', '/')  // 09/15 20:00
// formatTimestamp('1663204527885', 'YYYY-MM-DD hh:mm', '-')  // 2022-09-15 20:00


// function handleData(obj) {
//     Object.keys(obj).map((key) => {
//         const item = obj[key]
//         if (Array.isArray(item) || item instanceof Object) {
//             handleData(item)
//         }
//         if (handleData_(key) !== key) {
//             obj[handleData_(key)] = obj[key]
//             delete obj[key]
//         }
//     })
//     return obj
// }

// function handleData_(key) {
//     const arr = key.split('_')
//     arr.forEach((v, i) => {
//         if (i !== 0) {
//             arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
//         }
//     })
//     return arr.join('')
// }

// const obj = {
//     user_name: 'name1',
//     user_id: 1000,
//     age: 10,
//     detail: {
//         user_avatar_url: 'xxx',
//         object_one: {
//             a_num: 1,
//             str: 'str1'
//         },
//         array_one: [
//             [
//                 {
//                     a_num: 111,
//                     b_num: 222
//                 }
//             ],
//             [
//                 {
//                     c_obj: {
//                         c_num: 333,
//                         str: 'str111'
//                     }
//                 }
//             ]
//         ]
//     }
// }
// console.log(handleData(obj));