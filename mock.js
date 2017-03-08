var mocky = require('mocky');

mocky.createServer([{
// simple GET route without request body to match
  url: '/profile',
  method: 'get',
  headers: {'Content-type': 'text/json'},
  res: JSON.stringify({'nickname': ''})
}, {
// POST route with request body to match and respose with status, headers and body
  url: '/profile',
  method: 'post',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: JSON.stringify({'status': 'ok'})
}, {
// PUT route with dynamic response body
  url: '/profile',
  method: 'put',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: JSON.stringify({'status': 'ok'})
}
]).listen(4321);
