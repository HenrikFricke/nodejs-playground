var url = require("url")

var config = {
  path: './contents'
}

module.exports = function(path, callback) {
  if (!path)
    callback('Error: No path submitted.')
  var page = url.parse(path).pathname
  if (page == "/")
    page = '/index.jade'
  if (page.charAt(page.length - 1) == "/") {
    page = page.substring(0, page.length - 1)
  }
  if (page.split('.jade').length == 1) {
    page = page + '.jade'
  }
  callback(null, config.path + page)
}