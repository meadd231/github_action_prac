class Calculate {
  add = (x, y) => {
    if (y % 2 == 0) {
      return 0;
    }
    return x + y;
  }
}

module.exports = Calculate;