//best Time to buy and sell stock

//brute-force approches
function profitChecker(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let k = prices[j] - prices[i];
        profit = profit < k ? k : profit;
      }
    }
  }
  return profit > 0 ? profit : 0;
}



//optimal-way
function profitChecker(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (maxProfit < prices[i] - min) maxProfit = prices[i] - min;
    if (prices[i] < min) min = prices[i];
  }
  return maxProfit;
}


//test-area
let prices = [7,6,4,3,1];
console.log(profitChecker(prices));

//pricatice
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=problem-list-v2&envId=array
