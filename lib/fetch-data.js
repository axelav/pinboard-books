import path from 'path'
import fs from 'fs-extra'
import Pinboard from 'pinboard.js'
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
    let filename = path.join(__dirname, '/../bookmarks.json')

    fs.outputJSON(filename, result, function (err) {
      if (err) throw err
      console.log('wrote data.json')
      process.exit(0)
    })
  }
})
