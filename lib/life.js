module.exports = function update(cells, rule) {
  if (!cells.length) return
  var stack = cells.slice()
  var count = cells.length
  cells.length = 0
  for (var i = 0; i < stack.length; i += 2) {
    var x = stack[i]
    var y = stack[i + 1]
    var n = 0
    for (var dy = -1; dy <= 1; dy++) {
      var ny = y + dy
      for (var dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue // ignore center cell (closed neighborhood)
        var nx = x + dx
        for (var j = 0; j < stack.length; j += 2) {
          if (stack[j] === nx && stack[j + 1] === ny) {
            break // this neighbor has previously been added to the stack, ignore it
          }
        }
        if (j < stack.length) { // if we broke early
          if (j < count) { // if the cell we broke on is alive
            n++ // increase the count of living neighbors for the current cell
          }
        } else if (i < count) { // otherwise if the current cell is alive
          stack.push(nx, ny) // add the neighbor cell to the perimeter
        }
      }
    }
    if (rule.birth.indexOf(n) !== -1 && i >= count
    || rule.survival.indexOf(n) !== -1 && i < count) {
      cells.push(x, y) // this cell will live during the next generation
    }
  }
}
