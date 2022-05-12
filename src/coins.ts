/*
 * 动态规划：一般用于求最值
*/

/*
 * 解题框架
 // 初始化 base
 dp[0][0][...] = base

 // 状态转移
 for 状态1 in 状态1所有取值
  for 状态2 in 状态2所有取值
    for ...
      dp[状态1][状态2][...] = 最值(选择1, 选择2)
*/

/*
 * 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，
   每种硬币的数量无限，再给一个总金额 amount，
   问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 
*/

// 递归的方式
export function coinChange1 (coins:number[] = [], amount:number = 0): number {
  const visited: number[] = (new Array(amount + 1)).fill(-1)
  function dp (coins: number[], amount: number): number {
    if (amount === 0) return 0
    if (amount < 0) return -1
    if (visited[amount] > 0) return visited[amount]
    let res: number = Number.MAX_SAFE_INTEGER
    coins.forEach(coin => {
      const counts:number = dp(coins, amount - coin)
      if (counts === -1) return
      res = Math.min(res, counts + 1)
    })
    visited[amount] = res
    return visited[amount]
  }

  return dp(coins, amount)
}

// 数组迭代的方式
export function coinChange2 (coins:number[] = [], amount:number = 0): number {
  const dp: number[] = (new Array(amount + 1)).fill(amount + 1)

  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    coins.forEach(coin => {
      if (i - coin < 0) return
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    })
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}
