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

// run the code respectively for 'bind()', 'call()' or 'apply()'
const check = ['bind()', 'call()', 'apply()'];

for(let val in check) {
    func = check[val];
    console.log(func, 'example', '----------------------------');

    for(let sw in installList) {
        if(func == 'bind()') {
            var installer = software.getInstall.bind(installList[sw]);
            installer('Installed with', func);
        } else if(func == 'call()') {
            software.getInstall.call(installList[sw], 'Installed with', func);
        } else if(func == 'apply()') {
            software.getInstall.apply(installList[sw], ['Installed with', func]);
        } else {
            console.log('Error with the value of check: ', func);
        }
    }
    console.log(' ');
}
