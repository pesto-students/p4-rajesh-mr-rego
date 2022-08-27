function tradeStock(arr, quantity) {
    let mainArr = arr;
    let arrLen = mainArr.length;
    // console.log(arrLen);

    let maxProfit = 0;

    while(arrLen > 2) {
        // console.log('-------------------------------------------')
        arr = mainArr.slice();
        // console.log('mainarr', mainArr);
        let buy_price = quantity * arr[0];
        // console.log('buy price =', buy_price);
        let sell_price = 0;

        for(let day=1;  day<arr.length; day++) {
            sell_price  = quantity * arr[day];
            // console.log('sell price =', sell_price);
            currProfit = sell_price - buy_price; 
            // console.log('curr profit =', currProfit);
            maxProfit = Math.max(maxProfit, currProfit);
        }

        mainArr.shift();
        arrLen = mainArr.length;
    }

    console.log('max profit =', maxProfit);
    return maxProfit;
}

let stockA = [7, 1, 5, 3, 6, 4];
let stockB = [7, 6, 5, 4, 3, 2];
let stockC = [3, 1, 8, 9, 1, 5];
let stockD = [1, 2, 3, 4, 5, 6];
let quantity = 1;

tradeStock(stockA, quantity);
