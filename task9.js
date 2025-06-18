var arr = [];

for (var i = 0; i <= 2; i++) {
   (function(index) {
      arr[index] = function () {
         console.log(index);
      };
   })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2
