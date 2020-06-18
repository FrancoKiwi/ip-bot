const publicIp = require('public-ip');
var fs = require('fs');
var minutes = 0.5, the_interval = minutes * 60 *1000;

publicIp.v4().then(ip => {
    console.log("your public ip address", ip);
    var data = fs.writeFileSync('./ip.txt', ip, 'utf8')
});
setInterval(function() {
  publicIp.v4().then(ip => {
    console.log("your public ip address", ip);
    var data = fs.writeFileSync('./ip.txt', ip, 'utf8')
  });
},the_interval);
