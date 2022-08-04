/*
This is a common object for any software. It installs and confirms installion.
*/
var software = {
    softname: 'SoftWare',
    version: 'v0.0',

    getInstall: function(message, example) {
        if(message == undefined) message = "";
        var installed = this.softname + ' ' + this.version + ' - ' + message + ' ' + example;
        installed = installed.trim();
        console.log('---Software :', installed);
    }
}

// This is the list of software to be installed in order.
const installList = [
    { softname: 'JavaScript', version: 'v2.1'},
    { softname: 'FileZilla', version: 'v5.6.0'},
    { softname: 'Windows X', version: 'v22H2'},
];

// please change the following variable check to run the code respectively for 'bind()', 'call()' or 'apply()'
const check = 'apply()';

if(check == 'bind()') {
    console.log('"BIND" Example');
    for(let sw in installList) {
        console.log("---Installing...");
        var installer = software.getInstall.bind(installList[sw]);
        installer('Installed with', check);
        console.log('--------------------------------------------');
    }
} else if(check == 'call()') {
    console.log('"CALL" Example');
    for(let sw in installList) {
        console.log("---Installing...");
        software.getInstall.call(installList[sw], 'Installed with', check);
        console.log('--------------------------------------------');
    }
} else if(check == 'apply()') {
    console.log('"APPLY" Example');
    for(let sw in installList) {
        console.log("---Installing...");
        software.getInstall.apply(installList[sw], ['Installed with', check]);
        console.log('--------------------------------------------');
    }
} else {
    console.log('Error with the value of check: ', check);
}




