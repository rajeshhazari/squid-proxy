import { Request, Response, Router } from "express";

const { spawn, exec } = require ('child_process');
var express = require('express');
var queryString = require('querystring');
var path = require ('path')
var squidInstallProps = require('../resources/config/index.d').squidInstallProps
var shell = require('shelljs');

const aclScriptUpdateRouter: Router  = express.Router();


aclScriptUpdateRouter.get('/db/all', function(req:Request, res:Response) {
    // I prefer using spawn from the child process module instead of the Python shell
    //const scriptPath = 'hello.py'
    //const process = spawn('python', [scriptPath, arg1, arg2])
    const scriptPath = squidInstallProps.SQUIDGUARD_CONFIGFILE
    if (!shell.which(scriptPath)) {
        shell.echo('Sorry, this script does not exist::  '+ scriptPath);
        shell.exit(1);
      }
      if (shell.exec(scriptPath + " -C  all").code !== 0) {
        shell.echo('Error: Git commit failed');
        shell.exit(1);
      }
    const process = spawn('sh', [scriptPath, "-C", "all"])

    process.stdout.on('data', (myData) => {
        // Do whatever you want with the returned data.
        // ...
        res.json({"status":"Done!"});
    })
    process.stderr.on('data', (myErr) => {
        // If anything gets written to stderr, it'll be in the myErr variable
        res.status(500).json({ error: myErr })
    })
})


aclScriptUpdateRouter.get('/db/file/update', function(req:Request, res:Response) {
    console.dir(req.xhr)
    req.accepts('json, text/plain');
    // Call your python script here.
    // I prefer using spawn from the child process module instead of the Python shell
    var fname = decodeURI(req.params.filename);
    var domainname = req.query.domain;
    
    var domaindbFileName = squidInstallProps.DATABASE.concat(req.query.filename)
    
    //update domain to db file using the script  update-squidguard-db.sh
    var updateScriptcmd = "sudo update-squidguard-db.sh append " + fname + " " + domainname 
    
    const scriptPath = squidInstallProps.SQUIDGUARD_CONFIGFILE;
    var shellCmd = " sudo squidGuard -b -u -C " + domaindbFileName;
    

    console.log("updateScriptcmd:: ", updateScriptcmd , " shellCmd :: " , shellCmd, "   path :: ", path.join(squidInstallProps.DATABASE,fname))
    res.sendStatus(200).json({"data": updateScriptcmd, "params" : shellCmd});
    // const process = spawn('sh', [scriptPath, "-C", file])

    // process.stdout.on('data', (myData) => {
    //     // TODO on success call squid -k reconfigure
    //     res.send("Done!")
    // })
    // process.stderr.on('data', (myErr) => {
    //     // If anything gets written to stderr, it'll be in the myErr variable
    // })
})



//
//JS Code
// button(type="button", onclick="makeCallToFoo()")
// 
//function makeCallToFoo() {
//    fetch('/foo').then(function(response) {
//        // Use the response sent here
//    })
//}
export { aclScriptUpdateRouter };
