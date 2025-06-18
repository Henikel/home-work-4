function rectangle() {
  let width = 1, height = 1;
  return {
    setWidth: function(w) {
      if (typeof w === 'number' && w > 0) width = w;
    },
    setHeight: function(h) {
      if (typeof h === 'number' && h > 0) height = h;
    },
    getPerimeter: function() {
      return 2 * (width + height);
    },
    getArea: function() {
      return width * height;
    }
  };
}