(function (arr) {
  const randomNumber =
    (max = arr.length, min = 1) =>
      Math.floor(Math.random() * (max - min + 1)) + min
  Array.from({ length: 3 }).forEach(() => {
    console.log(randomNumber())
  })
}(Array.from(document.getElementsByClassName('NestComment'))))
