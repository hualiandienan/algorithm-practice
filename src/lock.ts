/*
 * BFS: 解决找最短路径的问题 （在图中从start到end）
*/

/*
 * 解题框架：
  int BFS (Node start, Node end) {
    Queue<Node> q; // 核心数据
    Set<Node> visited; // 已遍历过的节点
    int step = 0; // 记录走过的步数

    // 加入起始点
    q.offer(start)
    visited.add(start)

    while (!!q) {
      int size = q.size()

      // 向四周扩散 
      for (i = 0; i < size; i++) {
        Node cur = q.poll()
        
        // 到达终点
        if (cur is target) {
          return step
        }
        // 将相连节点加入队列中
        for (Node x: cur.adj()) {
          if (x not in visited) {
            q.offer(x)
            visited.add(x)
          }
        }
      }
      // 更新步数
      step++
    }
  }
*/

/*
 * 题面见 lock 图片
*/

function nextOne (cur: string, pos: number, type: 'plus'|'minus' = 'plus') {
  let num = cur[pos]
  if (type === 'plus') {
    if (num === '9') {
      num = '0'
    } else {
      num = (+num - 0 + 1) + ''
    }
  } else {
    if (num === '0') {
      num = '9'
    } else {
      num = (+num - 1) + ''
    }
  }
  const arr = cur.split('')
  arr.splice(pos, 1, num)
  return arr.join('')
}

export default function lock (target: string, deads: string[] = []): number {
  const q: string[] = []
  const visited: string[] = []

  let step: number = 0
  q.push('0000')
  visited.push('0000')

  while (q.length) {
    const size: number = q.length

    for (let i = 0; i < size; i++) {
      const cur: string = q.shift()

      // 碰到死锁本轮结束
      // 碰到目标直接返回步数
      if (deads.includes(cur)) continue
      if (cur === target) return step

      for (let j = 0; j < 4; j++) {
        // 向上拨动
        const upStr: string = nextOne(cur, j, 'plus')
        // 向下波动
        const downStr: string = nextOne(cur, j, 'minus')
        if (!visited.includes(upStr)) {
          q.push(upStr)
          visited.push(upStr)
        }
        if (!visited.includes(downStr)) {
          q.push(downStr)
          visited.push(downStr)
        }
      }
    }
    step++
  }
  return -1
}