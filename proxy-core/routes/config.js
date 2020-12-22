var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var squidInstallProps = require('../resources/config/index.d').squidInstallProps


router.get('/', function(req, res, next) {
    res.send(squidInstallProps);
    res.end('Downloaded', 'UTF-8');
  });
  
router.get('/:config', function(req, res, next) {
    var filePath = '';
    if(req.params.config == "squid"){
        console.log(' filePath :;'+squidInstallProps.SQUID_CONFIGFILE)
        //filePath = path.dirname(squidInstallProps.SQUID_CONFIGFILE);
        
        transfer(squidInstallProps.SQUID_CONFIGFILE,res)
    } else if(req.params.config == "squidguard" ){
        filePath = path.join(squidInstallProps.SQUIDGUARD_CONFIGFILE);
        transfer(squidInstallProps.SQUIDGUARD_CONFIGFILE,res)
    } else {
        res.redirect('error')
    }
});

var transfer = function(filePath, res){
    if (path.isAbsolute(filePath)) {
        fs.access(filePath, function (exist) {
            if (exist) {
                var filename = path.basename(filePath);
    
                res.setHeader('Content-Disposition', 'attachment; filename=' + filePath);
                res.setHeader('Content-Transfer-Encoding', 'binary');
                res.setHeader('Content-Type', 'application/octet-stream');
    
                res.sendFile(filePath)
            } else {
                console.error('Proxy server is not installed.');
                res.redirect('error');
            }
        });    
    } else {
        console.error('Proxy server is not installed.');
        res.redirect('error');
    }
    
};

module.exports = router;
