/*
 * 子集：输入无重复元素数组，且每个元素最多使用一次，输出所有子集
 * 解决方案： 动态规划
*/

function getSubsets<Type> (nums: Type[]): Array<Type[]> {
  const backtrack = (path: Type[], options: Type[]) => {
    if (path.length) {
      res.push([...path])
    }

    for (let i = 0; i < options.length; i++) {
      path.push(options[i])
      backtrack(path, options.slice(i + 1))
      path.pop()
    }
  }

  const res: Array<Type[]> = []
  const path: [] = []
  backtrack(path, nums)

  return res
}

export default getSubsets
