import path from 'path'
import fs from 'fs-extra'
import Pinboard from 'pinboard.js'
import prepareBookmarks from './bookmarks'
import user from '../conf/user'

const pinboard = new Pinboard({
  auth: {
    type: 'token',
    username: user.username,
    token: process.env.PINBOARD_TOKEN
  }
})

pinboard.postsAll({format: 'json'}, (err, res, body) => {
  if (err) throw err

  if (res.statusCode === 200) {
    let result = JSON.parse(body)
    let timestamp = Date.now()
    // TODO: add timestamp to filename
    let filename = path.join(__dirname, '/../bookmarks.json')
    // let filename = __dirname + '/../bookmarks-' + timestamp + '.json'

    fs.outputJSON(filename, result, function (err) {
      if (err) throw err
      console.log('downloaded & wrote bookmarks.json')

      let bookmarks = fs.readJsonSync(filename)
      let bookmarksByYear = prepareBookmarks(bookmarks)
      let processedFilename = __dirname + '/../data/all-bookmarks.json'

      fs.outputJson(processedFilename, bookmarksByYear, (err) => {
        if (err) throw err
        console.log('processed bookmarks & wrote data/all-booksmarks.json')

        process.exit(0)
      })
    })
  }
})
