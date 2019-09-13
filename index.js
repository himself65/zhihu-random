const axios = require('axios')

let offset = 0
let collection = []
const genUrl = () =>
  `https://www.zhihu.com/api/v4/pins/1155919442730016768/comments?order=normal&limit=20&offset=${offset}&status=open`
const randomNumber =
  (max = collection.length, min = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min
;(async function f () {
  await axios.get(genUrl()).then(res => {

    const arr = Array.from(res.data.data)
    if (arr.length <= 0) {
      console.log('评论总数：', collection.length)
      Array.from({ length: 3 })
        .forEach((_, index) => {
          const idx = randomNumber()
          console.log('第', index + 1, '位用户：', collection[idx].author.member.name,
            `--- https://www.zhihu.com/people/${collection[idx].author.member.id}`)
        })
    } else {
      collection = [...collection, ...arr]
      offset += 20
      f()
    }
  })
})()
