import { Request, Response, Router } from "express";

var fs = require('fs');
var path = require('path');
var squidInstallProps = require('../resources/config/index.d').squidInstallProps

const configRouter: Router = express.Router();
configRouter.get('/', function(req:Request, res:Response) {
    res.send(squidInstallProps);
    res.end('Downloaded', 'UTF-8');
  });
  
  configRouter.get('/:config', function(req:Request, res:Response) {
    var filePath = '';
    if(req.params.config == "squid"){
        console.log(' filePath :;'+squidInstallProps.SQUID_CONFIGFILE)
        //filePath = path.dirname(squidInstallProps.SQUID_CONFIGFILE);
        
        transfer(squidInstallProps.SQUID_CONFIGFILE,res)
    } else if(req.params.config == "squidguard" ){
        transfer(squidInstallProps.SQUIDGUARD_CONFIGFILE,res)
    } else {
        res.status(503)
        res.json({"error":"squid config does not exists", "errorMsg" :"Check if Squid is installed! @ "+filePath})
    }
});

configRouter.put('/:config', function(req:Request, res:Response) {
    var filePath = '';
    if(req.params.config == "squid"){
        console.log(' filePath :;'+squidInstallProps.SQUID_CONFIGFILE)
        //filePath = path.dirname(squidInstallProps.SQUID_CONFIGFILE);
        
        writeData(squidInstallProps.SQUID_CONFIGFILE,res)
    } else if(req.params.config == "squidguard" ){
        writeData(squidInstallProps.SQUIDGUARD_CONFIGFILE,res)
    } else {
        res.status(503)
        res.json({"error":"squid config does not exists", "errorMsg" :"Check if Squid is installed! @ "+filePath})
    }
});

var transfer = function(filePath, res){
    if (path.isAbsolute(filePath)) {
        fs.access('file:'+filePath, function (exist) {
            if (exist) {
                var filename = path.basename(filePath);
                
                res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
                res.setHeader('Content-Transfer-Encoding', 'binary');
                res.setHeader('Content-Type', 'application/octet-stream');
    
                res.sendFile(filePath)
            } else {
                console.error('Proxy server config cannot be read.');
                res.redirect('error');
            }
        });    
    } else {
        console.error('Proxy server is not installed.');
        res.status(503)
        res.json({"error": "Proxy server is not installed."});
    }
    
};


var writeData = function(filePath, res){
    if (path.isAbsolute(filePath)) {
        fs.access('file:'+filePath, function (exist) {
            if (exist) {
                var filename = path.basename(filePath);
    
                res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
                res.setHeader('Content-Transfer-Encoding', 'binary');
                res.setHeader('Content-Type', 'application/octet-stream');
    
                res.sendFile(filePath)
            } else {
                console.error('Proxy server config cannot be read.');
                res.redirect('error');
            }
        });    
    } else {
        console.error('Proxy server is not installed.');
        res.redirect('error');
    }
    
};

export { configRouter };
