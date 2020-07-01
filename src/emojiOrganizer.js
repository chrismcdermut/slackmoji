// const fs = require('fs')
//
// fs.readdir('./output', (err, files) => {
//   files.forEach((file, _) => {
//     // :. because /. appears as :. for some reason
//     const cleanedFileName = file.replace(':.', '.')
//     fs.rename(`./output/${file}`, `./output/${cleanedFileName}`, (err) => {
//       if (err)
//         console.log(err)
//     })
//   })
// })
const { execFile } = require('child_process');

var { emoji } = require('./emojiList.json');
var ext = url => url.split('.').slice(-1)[0];
Object.entries(emoji).forEach(([name, url]) => {
  execFile(`curl -s -o ./output/${name}.${ext(url)} ${url}`)
});
