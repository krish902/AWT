function fact(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

//global variable
let ans = fact(5);
console.log("factorial : ", ans);

//nested
function fun1(a) {
  function fun2(b) {
    return a + b;
  }
  return fun2;
}
let ans1 = fun1(1)(2);
console.log("Sum : ", ans1);

function localscope() {
  let ans2 = 20;
  console.log("global access", ans);
}
localscope();

//accessing local variable
console.log(ans2);
