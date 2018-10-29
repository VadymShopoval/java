! function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var l = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var l in e) n.d(o, l, function (t) {
        return e[t]
      }.bind(null, l));
    return o
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
  window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let e = n(1);
    slider = n(2), tabs = n(3), timer = n(4), calc = n(5), modal = n(6), e(), slider(), tabs(), timer(), calc(), modal()
  })
}, function (e, t) {
  e.exports = function () {
    let e = {
        loading: "Загрузка...",
        success: "Спасибо! Скроро мы с вами  свяжемся!",
        failure: "Что-то пошло не так ..."
      },
      t = document.querySelector(".main-form"),
      n = t.getElementsByTagName("input"),
      o = document.createElement("div"),
      l = document.getElementById("in"),
      r = document.getElementById("form");
    o.classList.add("status"), n[0].addEventListener("input", () => {
        n[0].value = n[0].value.replace(/[^0-9+()]/gi, "")
      }), l.addEventListener("input", () => {
        l.value = l.value.replace(/[^0-9+()]/gi, "")
      }), t.addEventListener("submit", function (n) {
        n.preventDefault(), t.appendChild(o);
        let l = new XMLHttpRequest;
        console.log(l), l.open("POST", "server.php"), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), console.log(l), console.log(t);
        let r = new FormData(t);
        l.send(r), l.addEventListener("readystatechange", function () {
          l.readyState < 4 ? o.innerHTML = e.loading : 4 === l.readyState && 200 == l.status ? o.innerHTML = e.success : o.innerHTML = e.failure
        })
      }),
      function (t) {
        t.addEventListener("submit", function (l) {
          l.preventDefault(), t.appendChild(o),
            function (e) {
              return new Promise(function (t, n) {
                let o = new XMLHttpRequest;
                o.open("POST", "server.php"), o.setRequestHeader("Content-Type", "applicatiom/json; charset=utf-8"), o.onreadystatechange = function () {
                  o.readyState < 4 ? t() : 4 === o.readyState && (200 == o.status && o.status < 3 ? t() : n())
                }, o.send(e)
              })
            }(new FormData(t)).then(() => o.innerHTML = e.loading).then(() => {
              overlay.style.display = "block", overlay.style.display = "none", o.innerHTML = "ура"
            }).catch(() => o.innerHTML = e.failure).then(function () {
              for (let e = 0; e < n.length; e++) n[e].value = ""
            })
        })
      }(t);
  }
}, function (e, t) {
  e.exports = function () {
    let e = 1,
      t = document.querySelectorAll(".slider-item"),
      n = document.querySelector(".prev"),
      o = document.querySelector(".next"),
      l = document.querySelector(".slider-dots"),
      r = document.querySelectorAll(".dot");

    function i(n) {
      n > t.length && (e = 1), n < 1 && (e = t.length), t.forEach(e => e.style.display = "none"), r.forEach(e => e.classList.remove("dot-active")), t[e - 1].style.display = "block", r[e - 1].classList.add("dot-active")
    }

    function s(t) {
      i(e += t)
    }

    function c(t) {
      i(e = t)
    }
    i(e), n.addEventListener("click", function () {
      s(-1)
    }), o.addEventListener("click", function () {
      s(1)
    }), l.addEventListener("click", function (e) {
      for (let t = 0; t < r.length + 1; t++) e.target.classList.contains("dot") && e.target == r[t - 1] && c(t)
    })
  }
}, function (e, t) {
  e.exports = function () {
    let e = document.querySelectorAll(".info-header-tab"),
      t = document.querySelector(".info-header"),
      n = document.querySelectorAll(".info-tabcontent");

    function o(e) {
      for (let t = e; t < n.length; t++) n[t].classList.remove("show"), n[t].classList.add("hide")
    }

    function l(e) {
      n[e].classList.contains("hide") && (n[e].classList.remove("hide"), n[e].classList.add("show"))
    }
    o(1), t.addEventListener("click", function (t) {
      let n = t.target;
      if (n && n.classList.contains("info-header-tab"))
        for (let t = 0; t < e.length; t++)
          if (n == e[t]) {
            o(0), l(t);
            break
          }
    })
  }
}, function (e, t) {
  e.exports = function () {
    ! function (e, t) {
      let n = document.getElementById(e),
        o = n.querySelector(".hours"),
        l = n.querySelector(".minutes"),
        r = n.querySelector(".seconds"),
        i = setInterval(function () {
          let e = function (e) {
            let t = Date.parse(e) - Date.parse(new Date),
              n = Math.floor(t / 1e3 % 60),
              o = Math.floor(t / 1e3 / 60 % 60);
            return {
              total: t,
              hours: Math.floor(t / 36e5),
              minutes: o,
              seconds: n
            }
          }(t);
          o.textContent = ("0" + e.hours).slice(-2), l.textContent = ("0" + e.minutes).slice(-2), r.textContent = ("0" + e.seconds).slice(-2), e.total <= 0 && (console.log("t.total<= 0"), clearInterval(i), o.textContent = "00", l.textContent = "00", r.textContent = "00")
        }, 1e3)
    }("timer", "2018-10-30")
  }
}, function (e, t) {
  e.exports = function () {
    let e = document.querySelectorAll(".counter-block-input")[0],
      t = document.querySelectorAll(".counter-block-input")[1],
      n = document.getElementById("select"),
      o = document.getElementById("total"),
      l = 0,
      r = 0,
      i = 0;
    o.innerHTML = 0, e.addEventListener("input", () => {
      e.value = e.value.replace(/[^0-9]/gi, "")
    }), t.addEventListener("input", () => {
      t.value = t.value.replace(/[^0-9]/gi, "")
    });
    let s = 1;

    function c(e, t) {
      l = +e.value.replace(/[^0-9\.]/g, ""), i = 4e3 * (r + l), "" == e.value || 0 == e.value ? o.innerHTML = 0 : "" == t.value || 0 == t.value ? o.innerHTML = 0 : (o.innerHTML = i * s, console.log(s))
    }
    e.addEventListener("change", function () {
      c(e, t)
    }), t.addEventListener("change", function () {
      c(t, e)
    }), n.addEventListener("change", function () {
      if ("" == t.value || "" == e.value) o.innerHTML = 0, s = this.options[this.selectedIndex].value;
      else {
        let e = i;
        s = this.options[this.selectedIndex].value, o.innerHTML = e * s
      }
    })
  }
}, function (e, t) {
  e.exports = function () {
    let e = document.querySelector(".more"),
      t = document.querySelector(".overlay"),
      n = document.querySelector("body");
    document.querySelector(".more"), n.addEventListener("click", function (n) {
      let o = n.target;
      "description-btn" == o.classList && (console.log("class"), t.style.display = "block", this.classList.add("more-splash"), document.body.style.overflow = "hidden"), o.classList.contains("more") && (console.log("butto"), t.style.display = "block", this.classList.add("more-splash"), document.body.style.overflow = "hidden"), o.classList.contains("popup-close") && (t.style.display = "none", e.classList.remove("more-splash"), document.body.style.overflow = "")
    })
  }
}]);