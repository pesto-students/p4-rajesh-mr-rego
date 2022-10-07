function returnMaxProfit(arr, quantity) {
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

    return maxProfit;
}

function tradeStockAdvanced(arr, quantity) {
    let maxProfit = 0;
    let buyDay = 0;
    let sellDay = 0;

    for(let bday=0 ; bday<arr.length-1 ; bday++) {
        for(let sday=bday+1 ; sday<arr.length ; sday++) {
            // console.log('buy day =', arr[bday], 'sell day =', arr[sday]);

            let currProfit = quantity * (arr[sday] - arr[bday]);
            if(currProfit >= maxProfit) {
                maxProfit = currProfit;
                buyDay = bday + 1;
                sellDay = sday + 1;
            }
        }

    }

    return [maxProfit, buyDay, sellDay];
}


const stockA = [7, 1, 5, 3, 6, 4];
const stockB = [7, 6, 5, 4, 3, 2];
const quantity1 = 1;

const profit = returnMaxProfit(stockA, quantity1);
console.log('Maximum profit possible is Rs.', profit, 'for', quantity1, 'stock/s.');

console.log('-----------------------------------------');
const stockC = [3, 1, 8, 9, 1, 5];
const stockD = [1, 2, 3, 4, 5, 6];
const quantity2 = 1;

const newProfit = tradeStockAdvanced(stockC, quantity2);
console.log(`Maximum profit of Rs. ${newProfit[0]} can be earned by buying on day ${newProfit[1]} and selling on day ${newProfit[2]}.`);

