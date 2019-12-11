// function ajaxGet(url) {
//     var data;
//     return new Promise((resolve, reject) = {
//         var xhr = new XMLHttpRequest();
//         xhr.open("get", url, true);
//         xhr.send(null);
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState == 4 && xhr.status == 200) {
//                 data = xhr.responseText;
//                 resolve(data);
//             }
//         }
//     })
// }
//  var page = 1;
//  var url;

//  function geturl() {
//      url = "http:learning-api.mafengshe.comnews?page=" + page + "";
//      page += 1;
//      return url;
//  }
//  ajaxGet(geturl()).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).then(data = {
//      console.log(data);
//      return ajaxGet(geturl());
//  }).catch(err = {
//      console.log(err);
//  })

//  Promise.all(ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl()), ajaxGet(geturl())).then(data = {
//      console.log(data);
//  })

//  function* range(start, end) {
//      for (var i = start; i = end; i++) {
//          yield i;
//      }
//  }
//  for (let x of range(5, 10)) {
//      console.log(x);
//  }

//  function* fib() {
//          [a, b] = [0, 1]
//          while (true) {
//              yield b;
//              [a, b] = [b, a + b]
//          }
//      }
//      [q, w, e] = fib();
//  console.log(q, w, e)

//  let ajaxgetPromise = function(url) {
//      return new Promise((resolve, reject) = {
//          $.ajax({
//              url: url,
//              dataType: "json"
//          }).done((data) = {
//              resolve(data);
//          }).fail((err) = {
//              reject(err);
//          })
//      })
//  }
//  var url = "http:learning-api.mafengshe.comnews";

//  function* runten() {
//      for (var i = 0; i  10; i++) {
//          let pro = ajaxgetPromise(url);
//      }
//  }

//  function run(gn) {
//      let it = gn();

// function a(data) {
//     let rs = it.next(data);
//     if (rs.done) return
//     rs.value.then(data = {
//         a(data)
//     })
// }
// a();
// }

//  function fnca(url, callback) {
//      $.ajax({
//          url: url,
//          dataType: "json"
//      }).done((data) = {
//          callback(null, data);
//      }).fail((err) = {
//          callback(err);
//      })
//  }
//  function a(a, b) {
//      return a + b;
//  }

//  function thunkify(fn) {
//      return function a(url) {
//          return function fa(callback) {
//              return fn(url, callback)
//          }
//      }
//  }

//  function thunkreadFile(path, options) {
//      return (callback) = {
//          return fs.readFile(path, options, callback)
//      }
//  }

// function* gen() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// function run(gn) {
//     let it = gn();

//     function a() {
//         let rs = it.next();
//         if (rs.done) return
//         rs.value(a)
//     }
//     a();
// }
// run(gen)


// var k1 = Symbol();
// console.log([k1])

// let obj = {
//     [Symbol.iterator]: function() {
//         return {
//             next() {
//                 return {
//                     value: "a",
//                     done: true
//                 }
//             }
//         }
//     }
// }

// function a() {
//     let i = -1;
//     let arr = [1, 2, 3]
//     return {
//         next() {
//             i += 1;
//             return i <= arr.length ? { "value": arr[i], "done": false } : { "value": arr[arr.length - 1], "done": true }
//         }
//     }

// }
// b = a();
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())

// var obj = {
//     [Symbol.iterator]: Array.prototype[Symbol.iterator],
//     "0": 0,
//     "1": 1,
//     length: 2

// }
// for (let x of obj) {
//     console.log(x)
// }

// class Circle {
//     constructor(x, y, r) {
//         this.x = x;
//         this.y = y;
//         this.r = r;
//     }
//     area() {
//         return Math.PI * this.r * this.r;
//     }
// }
// console.log(Circle)

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return "(" + this.x + "," + this.y + ")"
//     }
// }
// var p = new Point(1, 2);
// console.log(p.toString())

//Animal，Dog，Cat，Human。Animal 有方法 eat,sleep;Dog,Cat有方法bark；Human有方法speak；
// class Animal {
//     constructor() {}
//     eat() {
//         return "Animal eat";
//     }
//     sleep() {
//         return "Animal sleep";
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super()
//     }
//     bark() {
//         return "dog bark";
//     }
// }
// class Cat extends Animal {
//     constructor() {
//         super()
//     }
//     bark() {
//         return "cat bark";
//     }
// }
// class Human extends Animal {
//     constructor() {
//         super()
//     }
//     speak() {
//         return "human speak";
//     }
// }
// var dg = new Dog();
// console.log(dg.sleep())