// DUCO-S1 algorithm (probably made mostly by revox)
// This code isn't purposely obscufated, it came directly from the web miner code and 
// I've tried to make it prettier. SHA-1 magic go brrrrrrrrrrrrr

// Source at https://github.com/revoxhere/duco-webservices/blob/master/js/webminer/hashes.js (not used in webminer anymore)

!function () {
    var r;
    function v(r, n) {
      var t = (65535 & r) + (65535 & n);
      return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    r = {SHA1: function (r) {
      var n = !(!r || "boolean" != typeof r.uppercase) && r.uppercase, t = !r || "boolean" != typeof r.utf8 || r.utf8;
      this.hex = function (r) {
        return function (r, n) {
          for (var t, e = n ? "0123456789ABCDEF" : "0123456789abcdef", o = "", f = 0, u = r.length; f < u; f += 1) t = r.charCodeAt(f), o += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
          return o;
        }((r = r, function (r) {
          for (var n = 32 * r.length, t = "", e = 0; e < n; e += 8) t += String.fromCharCode(r[e >> 5] >>> 24 - e % 32 & 255);
          return t;
        }(function (r, n) {
          var t, e, o, f, u, a, h, i, c = Array(80), C = 1732584193, g = -271733879, d = -1732584194, l = 271733878, A = -1009589776;
          for (r[n >> 5] |= 128 << 24 - n % 32, r[15 + (n + 64 >> 9 << 4)] = n, t = 0; t < r.length; t += 16) {
            for (f = C, u = g, a = d, h = l, i = A, e = 0; e < 80; e += 1) c[e] = e < 16 ? r[t + e] : (c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16]) << 1 | (c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16]) >>> 31, o = v(v(C << 5 | C >>> 27, function (r, n, t, e) {
              if (r < 20) return n & t | ~n & e;
              if (r < 40) return n ^ t ^ e;
              if (r < 60) return n & t | n & e | t & e;
              return n ^ t ^ e;
            }(e, g, d, l)), v(v(A, c[e]), function (r) {
              return r < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514;
            }(e))), A = l, l = d, d = g << 30 | g >>> 2, g = C, C = o;
            C = v(C, f), g = v(g, u), d = v(d, a), l = v(l, h), A = v(A, i);
          }
          return Array(C, g, d, l, A);
        }(function (r) {
          for (var n = 8 * r.length, t = Array(r.length >> 2), e = t.length, o = 0; o < e; o += 1) t[o] = 0;
          for (o = 0; o < n; o += 8) t[o >> 5] |= (255 & r.charCodeAt(o / 8)) << 24 - o % 32;
          return t;
        }(r = t ? function (r) {
          var n, t, e, o = "", f = -1;
          if (r && r.length) for (e = r.length; (f += 1) < e;) n = r.charCodeAt(f), t = f + 1 < e ? r.charCodeAt(f + 1) : 0, 55296 <= n && n <= 56319 && 56320 <= t && t <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & t), f += 1), n <= 127 ? o += String.fromCharCode(n) : n <= 2047 ? o += String.fromCharCode(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? o += String.fromCharCode(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (o += String.fromCharCode(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));
          return o;
        }(r) : r), 8 * r.length))), n);
      };
    }}, duco = r;
  }();