import { Request, Response, Router } from 'express';
import * as path from 'path';
import { shell } from 'shelljs';
// import { squidInstallProps } from '../resources/config/index';
import { squidInstallProps as squidInstallProps } from '../resources/squidInstallProps';
const fs = require('fs');


const aclScriptUpdateRouter: Router  = Router();


aclScriptUpdateRouter.get('/db/all', function(req: Request, res: Response) {
    // I prefer using spawn from the child process module instead of the Python shell
    // const scriptPath = 'hello.py'
    // const process = spawn('python', [scriptPath, arg1, arg2])
    if ( shell.test('-e', squidInstallProps.SQUID_INSTALL_DIR ) ) {
    const scriptPath = squidInstallProps.SQUIDGUARD_CONFIGFILE;
    shell.cd(squidInstallProps.SQUID_INSTALL_DIR);
    if (!shell.which(scriptPath)) {
        shell.echo('Sorry, this script does not exist::  ' + scriptPath);
        shell.exit(1);
      } else if (shell.exec('sudo squid -C  all').code == 0) {
        shell.echo('SquidGuard update db failed!');
      } else {
        res.sendStatus(400).json({data: 'update of db failed'});
      }
    res.sendStatus(200).json({data: 'update of db failed'});
    } else {

    }
    /* const process = spawn('sh', [scriptPath, '-C', 'all']);

    process.stdout.on('data', (myData) => {
        // Do whatever you want with the returned data.
        // ...
        res.json({status: 'Done!'});
    });
    process.stderr.on('data', (myErr) => {
        // If anything gets written to stderr, it'll be in the myErr variable
        res.status(500).json({ error: myErr });
    }); */
});


aclScriptUpdateRouter.get('/db/file/update', function(req: Request, res: Response) {
    console.dir(req.xhr);
    req.accepts('json, text/plain');
    // Call your python script here.
    // I prefer using spawn from the child process module instead of the Python shell
    let fname = decodeURI(req.params.filename);
    const domainname = req.query.domain;

    const domaindbFileName = squidInstallProps.DATABASE.concat(fname);

    // update domain to db file using the script  update-squidguard-db.sh
    const updateScriptcmd = ' update-squidguard-db.sh append ' + fname + ' ' + domainname;

    const scriptPath = squidInstallProps.SQUIDGUARD_CONFIGFILE;
    const shellCmd = ' squidGuard -b -u -C ' + domaindbFileName;

    if ( shell.test('-e', updateScriptcmd ) ) {

    console.log('updateScriptcmd:: ', updateScriptcmd +
        ' shellCmd :: ' + shellCmd + '   path :: ' + path.join(squidInstallProps.DATABASE, fname));
    res.sendStatus(200).json({data: updateScriptcmd, params : shellCmd});
    // const process = spawn('sh', [scriptPath, "-C", file])

    // process.stdout.on('data', (myData) => {
    //     // TODO on success call squid -k reconfigure
    //     res.send("Done!")
    // })
    // process.stderr.on('data', (myErr) => {
    //     // If anything gets written to stderr, it'll be in the myErr variable
    // })
    }
});

export { aclScriptUpdateRouter };
