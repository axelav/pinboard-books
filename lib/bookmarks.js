import groupBy from 'lodash.groupby'
import data from '../pinboard_all.json'

let bookmarksByYear = prepareBookmarks(data)
let years = Object.keys(bookmarksByYear)

function prepareBookmarks (bookmarks) {
  return groupBy(bookmarks.map((bookmark) => {
    let date = new Date(bookmark.time)
    let tagsList = bookmark.tags.split(' ')

    return {
      href: bookmark.href,
      description: bookmark.description,
      extended: bookmark.extended,
      datetime: date,
      tags: tagsList,
      year: date.getFullYear()
    }
  }), 'year')
}

export default bookmarksByYear
export { years }
