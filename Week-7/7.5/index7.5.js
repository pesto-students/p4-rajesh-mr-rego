function nextGreaterElement(arr) {
    var s = [];
    let res = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        if (s.length != 0) {
            while (s.length != 0 && s[s.length - 1] <= arr[i]) {
                s.pop();
            }
        }
        res[i] = s.length == 0 ? -1 : s[s.length - 1];
        s.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i] + " --> " + res[i]);
}

var arr = [11, 13, 21, 3];
nextGreaterElement(arr);
