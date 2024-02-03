/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ !function(t1, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t1 = "undefined" != typeof globalThis ? globalThis : t1 || self).THREE = {});
}(this, function(t1) {
    "use strict";
    const e = "149", i = 100, n = 300, r = 301, s = 302, a = 303, o = 304, l = 306, c = 1e3, h = 1001, u = 1002, d = 1003, p = 1004, m = 1005, f = 1006, g = 1007, v = 1008, x = 1009, _ = 1012, y = 1014, M = 1015, b = 1016, S = 1020, w = 1023, T = 1026, A = 1027, E = 33776, C = 33777, L = 33778, R = 33779, P = 35840, I = 35841, D = 35842, N = 35843, O = 37492, z = 37496, U = 37808, B = 37809, F = 37810, k = 37811, G = 37812, V = 37813, H = 37814, W = 37815, j = 37816, q = 37817, X = 37818, Y = 37819, Z = 37820, J = 37821, K = 36492, $ = 36284, Q = 36285, tt = 36286, et = 2300, it = 2301, nt = 2302, rt = 2400, st = 2401, at = 2402, ot = 2500, lt = 2501, ct = 3e3, ht = 3001, ut = "srgb", dt = "srgb-linear", pt = 7680, mt = 35044, ft = "300 es", gt = 1035;
    class vt {
        addEventListener(t1, e) {
            void 0 === this._listeners && (this._listeners = {});
            const i = this._listeners;
            void 0 === i[t1] && (i[t1] = []), -1 === i[t1].indexOf(e) && i[t1].push(e);
        }
        hasEventListener(t1, e) {
            if (void 0 === this._listeners) return !1;
            const i = this._listeners;
            return void 0 !== i[t1] && -1 !== i[t1].indexOf(e);
        }
        removeEventListener(t1, e) {
            if (void 0 === this._listeners) return;
            const i = this._listeners[t1];
            if (void 0 !== i) {
                const t1 = i.indexOf(e);
                -1 !== t1 && i.splice(t1, 1);
            }
        }
        dispatchEvent(t1) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t1.type];
            if (void 0 !== e) {
                t1.target = this;
                const i = e.slice(0);
                for(let e = 0, n = i.length; e < n; e++)i[e].call(this, t1);
                t1.target = null;
            }
        }
    }
    const xt = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff"
    ];
    let _t = 1234567;
    const yt = Math.PI / 180, Mt = 180 / Math.PI;
    function bt() {
        const t1 = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0;
        return (xt[255 & t1] + xt[t1 >> 8 & 255] + xt[t1 >> 16 & 255] + xt[t1 >> 24 & 255] + "-" + xt[255 & e] + xt[e >> 8 & 255] + "-" + xt[e >> 16 & 15 | 64] + xt[e >> 24 & 255] + "-" + xt[63 & i | 128] + xt[i >> 8 & 255] + "-" + xt[i >> 16 & 255] + xt[i >> 24 & 255] + xt[255 & n] + xt[n >> 8 & 255] + xt[n >> 16 & 255] + xt[n >> 24 & 255]).toLowerCase();
    }
    function St(t1, e, i) {
        return Math.max(e, Math.min(i, t1));
    }
    function wt(t1, e) {
        return (t1 % e + e) % e;
    }
    function Tt(t1, e, i) {
        return (1 - i) * t1 + i * e;
    }
    function At(t1) {
        return 0 == (t1 & t1 - 1) && 0 !== t1;
    }
    function Et(t1) {
        return Math.pow(2, Math.ceil(Math.log(t1) / Math.LN2));
    }
    function Ct(t1) {
        return Math.pow(2, Math.floor(Math.log(t1) / Math.LN2));
    }
    function Lt(t1, e) {
        switch(e.constructor){
            case Float32Array:
                return t1;
            case Uint16Array:
                return t1 / 65535;
            case Uint8Array:
                return t1 / 255;
            case Int16Array:
                return Math.max(t1 / 32767, -1);
            case Int8Array:
                return Math.max(t1 / 127, -1);
            default:
                throw new Error("Invalid component type.");
        }
    }
    function Rt(t1, e) {
        switch(e.constructor){
            case Float32Array:
                return t1;
            case Uint16Array:
                return Math.round(65535 * t1);
            case Uint8Array:
                return Math.round(255 * t1);
            case Int16Array:
                return Math.round(32767 * t1);
            case Int8Array:
                return Math.round(127 * t1);
            default:
                throw new Error("Invalid component type.");
        }
    }
    var Pt = Object.freeze({
        __proto__: null,
        DEG2RAD: yt,
        RAD2DEG: Mt,
        ceilPowerOfTwo: Et,
        clamp: St,
        damp: function(t1, e, i, n) {
            return Tt(t1, e, 1 - Math.exp(-i * n));
        },
        degToRad: function(t1) {
            return t1 * yt;
        },
        denormalize: Lt,
        euclideanModulo: wt,
        floorPowerOfTwo: Ct,
        generateUUID: bt,
        inverseLerp: function(t1, e, i) {
            return t1 !== e ? (i - t1) / (e - t1) : 0;
        },
        isPowerOfTwo: At,
        lerp: Tt,
        mapLinear: function(t1, e, i, n, r) {
            return n + (t1 - e) * (r - n) / (i - e);
        },
        normalize: Rt,
        pingpong: function(t1, e = 1) {
            return e - Math.abs(wt(t1, 2 * e) - e);
        },
        radToDeg: function(t1) {
            return t1 * Mt;
        },
        randFloat: function(t1, e) {
            return t1 + Math.random() * (e - t1);
        },
        randFloatSpread: function(t1) {
            return t1 * (.5 - Math.random());
        },
        randInt: function(t1, e) {
            return t1 + Math.floor(Math.random() * (e - t1 + 1));
        },
        seededRandom: function(t1) {
            void 0 !== t1 && (_t = t1);
            let e = _t += 1831565813;
            return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
        },
        setQuaternionFromProperEuler: function(t1, e, i, n, r) {
            const s = Math.cos, a = Math.sin, o = s(i / 2), l = a(i / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), m = a((n - e) / 2);
            switch(r){
                case "XYX":
                    t1.set(o * h, l * u, l * d, o * c);
                    break;
                case "YZY":
                    t1.set(l * d, o * h, l * u, o * c);
                    break;
                case "ZXZ":
                    t1.set(l * u, l * d, o * h, o * c);
                    break;
                case "XZX":
                    t1.set(o * h, l * m, l * p, o * c);
                    break;
                case "YXY":
                    t1.set(l * p, o * h, l * m, o * c);
                    break;
                case "ZYZ":
                    t1.set(l * m, l * p, o * h, o * c);
                    break;
                default:
                    console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
            }
        },
        smootherstep: function(t1, e, i) {
            return t1 <= e ? 0 : t1 >= i ? 1 : (t1 = (t1 - e) / (i - e)) * t1 * t1 * (t1 * (6 * t1 - 15) + 10);
        },
        smoothstep: function(t1, e, i) {
            return t1 <= e ? 0 : t1 >= i ? 1 : (t1 = (t1 - e) / (i - e)) * t1 * (3 - 2 * t1);
        }
    });
    class It {
        constructor(t1 = 0, e = 0){
            It.prototype.isVector2 = !0, this.x = t1, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t1) {
            this.x = t1;
        }
        get height() {
            return this.y;
        }
        set height(t1) {
            this.y = t1;
        }
        set(t1, e) {
            return this.x = t1, this.y = e, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this;
        }
        add(t1) {
            return this.x += t1.x, this.y += t1.y, this;
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this;
        }
        sub(t1) {
            return this.x -= t1.x, this.y -= t1.y, this;
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this;
        }
        divide(t1) {
            return this.x /= t1.x, this.y /= t1.y, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        applyMatrix3(t1) {
            const e = this.x, i = this.y, n = t1.elements;
            return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this;
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this;
        }
        clampLength(t1, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t1, Math.min(e, i)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y;
        }
        cross(t1) {
            return this.x * t1.y - this.y * t1.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t1) {
            return Math.sqrt(this.distanceToSquared(t1));
        }
        distanceToSquared(t1) {
            const e = this.x - t1.x, i = this.y - t1.y;
            return e * e + i * i;
        }
        manhattanDistanceTo(t1) {
            return Math.abs(this.x - t1.x) + Math.abs(this.y - t1.y);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this;
        }
        lerpVectors(t1, e, i) {
            return this.x = t1.x + (e.x - t1.x) * i, this.y = t1.y + (e.y - t1.y) * i, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.x = t1.getX(e), this.y = t1.getY(e), this;
        }
        rotateAround(t1, e) {
            const i = Math.cos(e), n = Math.sin(e), r = this.x - t1.x, s = this.y - t1.y;
            return this.x = r * i - s * n + t1.x, this.y = r * n + s * i + t1.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class Dt {
        constructor(){
            Dt.prototype.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ];
        }
        set(t1, e, i, n, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t1, c[1] = n, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = i, c[7] = s, c[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t1) {
            const e = this.elements, i = t1.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this;
        }
        extractBasis(t1, e, i) {
            return t1.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t1) {
            const e = t1.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t1) {
            return this.multiplyMatrices(this, t1);
        }
        premultiply(t1) {
            return this.multiplyMatrices(t1, this);
        }
        multiplyMatrices(t1, e) {
            const i = t1.elements, n = e.elements, r = this.elements, s = i[0], a = i[3], o = i[6], l = i[1], c = i[4], h = i[7], u = i[2], d = i[5], p = i[8], m = n[0], f = n[3], g = n[6], v = n[1], x = n[4], _ = n[7], y = n[2], M = n[5], b = n[8];
            return r[0] = s * m + a * v + o * y, r[3] = s * f + a * x + o * M, r[6] = s * g + a * _ + o * b, r[1] = l * m + c * v + h * y, r[4] = l * f + c * x + h * M, r[7] = l * g + c * _ + h * b, r[2] = u * m + d * v + p * y, r[5] = u * f + d * x + p * M, r[8] = u * g + d * _ + p * b, this;
        }
        multiplyScalar(t1) {
            const e = this.elements;
            return e[0] *= t1, e[3] *= t1, e[6] *= t1, e[1] *= t1, e[4] *= t1, e[7] *= t1, e[2] *= t1, e[5] *= t1, e[8] *= t1, this;
        }
        determinant() {
            const t1 = this.elements, e = t1[0], i = t1[1], n = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8];
            return e * s * c - e * a * l - i * r * c + i * a * o + n * r * l - n * s * o;
        }
        invert() {
            const t1 = this.elements, e = t1[0], i = t1[1], n = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + i * u + n * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t1[0] = h * m, t1[1] = (n * l - c * i) * m, t1[2] = (a * i - n * s) * m, t1[3] = u * m, t1[4] = (c * e - n * o) * m, t1[5] = (n * r - a * e) * m, t1[6] = d * m, t1[7] = (i * o - l * e) * m, t1[8] = (s * e - i * r) * m, this;
        }
        transpose() {
            let t1;
            const e = this.elements;
            return t1 = e[1], e[1] = e[3], e[3] = t1, t1 = e[2], e[2] = e[6], e[6] = t1, t1 = e[5], e[5] = e[7], e[7] = t1, this;
        }
        getNormalMatrix(t1) {
            return this.setFromMatrix4(t1).invert().transpose();
        }
        transposeIntoArray(t1) {
            const e = this.elements;
            return t1[0] = e[0], t1[1] = e[3], t1[2] = e[6], t1[3] = e[1], t1[4] = e[4], t1[5] = e[7], t1[6] = e[2], t1[7] = e[5], t1[8] = e[8], this;
        }
        setUvTransform(t1, e, i, n, r, s, a) {
            const o = Math.cos(r), l = Math.sin(r);
            return this.set(i * o, i * l, -i * (o * s + l * a) + s + t1, -n * l, n * o, -n * (-l * s + o * a) + a + e, 0, 0, 1), this;
        }
        scale(t1, e) {
            return this.premultiply(Nt.makeScale(t1, e)), this;
        }
        rotate(t1) {
            return this.premultiply(Nt.makeRotation(-t1)), this;
        }
        translate(t1, e) {
            return this.premultiply(Nt.makeTranslation(t1, e)), this;
        }
        makeTranslation(t1, e) {
            return this.set(1, 0, t1, 0, 1, e, 0, 0, 1), this;
        }
        makeRotation(t1) {
            const e = Math.cos(t1), i = Math.sin(t1);
            return this.set(e, -i, 0, i, e, 0, 0, 0, 1), this;
        }
        makeScale(t1, e) {
            return this.set(t1, 0, 0, 0, e, 0, 0, 0, 1), this;
        }
        equals(t1) {
            const e = this.elements, i = t1.elements;
            for(let t1 = 0; t1 < 9; t1++)if (e[t1] !== i[t1]) return !1;
            return !0;
        }
        fromArray(t1, e = 0) {
            for(let i = 0; i < 9; i++)this.elements[i] = t1[i + e];
            return this;
        }
        toArray(t1 = [], e = 0) {
            const i = this.elements;
            return t1[e] = i[0], t1[e + 1] = i[1], t1[e + 2] = i[2], t1[e + 3] = i[3], t1[e + 4] = i[4], t1[e + 5] = i[5], t1[e + 6] = i[6], t1[e + 7] = i[7], t1[e + 8] = i[8], t1;
        }
        clone() {
            return (new this.constructor).fromArray(this.elements);
        }
    }
    const Nt = new Dt;
    function Ot(t1) {
        for(let e = t1.length - 1; e >= 0; --e)if (t1[e] >= 65535) return !0;
        return !1;
    }
    const zt = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: Uint8ClampedArray,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function Ut(t1, e) {
        return new zt[t1](e);
    }
    function Bt(t1) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t1);
    }
    function Ft(t1) {
        return t1 < .04045 ? .0773993808 * t1 : Math.pow(.9478672986 * t1 + .0521327014, 2.4);
    }
    function kt(t1) {
        return t1 < .0031308 ? 12.92 * t1 : 1.055 * Math.pow(t1, .41666) - .055;
    }
    const Gt = {
        [ut]: {
            [dt]: Ft
        },
        [dt]: {
            [ut]: kt
        }
    }, Vt = {
        legacyMode: !0,
        get workingColorSpace () {
            return dt;
        },
        set workingColorSpace (t){
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
        },
        convert: function(t1, e, i) {
            if (this.legacyMode || e === i || !e || !i) return t1;
            if (Gt[e] && void 0 !== Gt[e][i]) {
                const n = Gt[e][i];
                return t1.r = n(t1.r), t1.g = n(t1.g), t1.b = n(t1.b), t1;
            }
            throw new Error("Unsupported color space conversion.");
        },
        fromWorkingColorSpace: function(t1, e) {
            return this.convert(t1, this.workingColorSpace, e);
        },
        toWorkingColorSpace: function(t1, e) {
            return this.convert(t1, e, this.workingColorSpace);
        }
    }, Ht = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, Wt = {
        r: 0,
        g: 0,
        b: 0
    }, jt = {
        h: 0,
        s: 0,
        l: 0
    }, qt = {
        h: 0,
        s: 0,
        l: 0
    };
    function Xt(t1, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t1 + 6 * (e - t1) * i : i < .5 ? e : i < 2 / 3 ? t1 + 6 * (e - t1) * (2 / 3 - i) : t1;
    }
    function Yt(t1, e) {
        return e.r = t1.r, e.g = t1.g, e.b = t1.b, e;
    }
    class Zt {
        constructor(t1, e, i){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === i ? this.set(t1) : this.setRGB(t1, e, i);
        }
        set(t1) {
            return t1 && t1.isColor ? this.copy(t1) : "number" == typeof t1 ? this.setHex(t1) : "string" == typeof t1 && this.setStyle(t1), this;
        }
        setScalar(t1) {
            return this.r = t1, this.g = t1, this.b = t1, this;
        }
        setHex(t1, e = ut) {
            return t1 = Math.floor(t1), this.r = (t1 >> 16 & 255) / 255, this.g = (t1 >> 8 & 255) / 255, this.b = (255 & t1) / 255, Vt.toWorkingColorSpace(this, e), this;
        }
        setRGB(t1, e, i, n = Vt.workingColorSpace) {
            return this.r = t1, this.g = e, this.b = i, Vt.toWorkingColorSpace(this, n), this;
        }
        setHSL(t1, e, i, n = Vt.workingColorSpace) {
            if (t1 = wt(t1, 1), e = St(e, 0, 1), i = St(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
            else {
                const n = i <= .5 ? i * (1 + e) : i + e - i * e, r = 2 * i - n;
                this.r = Xt(r, n, t1 + 1 / 3), this.g = Xt(r, n, t1), this.b = Xt(r, n, t1 - 1 / 3);
            }
            return Vt.toWorkingColorSpace(this, n), this;
        }
        setStyle(t1, e = ut) {
            function i(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t1 + " will be ignored.");
            }
            let n;
            if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t1)) {
                let t1;
                const r = n[1], s = n[2];
                switch(r){
                    case "rgb":
                    case "rgba":
                        if (t1 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t1[1], 10)) / 255, this.g = Math.min(255, parseInt(t1[2], 10)) / 255, this.b = Math.min(255, parseInt(t1[3], 10)) / 255, Vt.toWorkingColorSpace(this, e), i(t1[4]), this;
                        if (t1 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t1[1], 10)) / 100, this.g = Math.min(100, parseInt(t1[2], 10)) / 100, this.b = Math.min(100, parseInt(t1[3], 10)) / 100, Vt.toWorkingColorSpace(this, e), i(t1[4]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (t1 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                            const n = parseFloat(t1[1]) / 360, r = parseFloat(t1[2]) / 100, s = parseFloat(t1[3]) / 100;
                            return i(t1[4]), this.setHSL(n, r, s, e);
                        }
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t1)) {
                const t1 = n[1], i = t1.length;
                if (3 === i) return this.r = parseInt(t1.charAt(0) + t1.charAt(0), 16) / 255, this.g = parseInt(t1.charAt(1) + t1.charAt(1), 16) / 255, this.b = parseInt(t1.charAt(2) + t1.charAt(2), 16) / 255, Vt.toWorkingColorSpace(this, e), this;
                if (6 === i) return this.r = parseInt(t1.charAt(0) + t1.charAt(1), 16) / 255, this.g = parseInt(t1.charAt(2) + t1.charAt(3), 16) / 255, this.b = parseInt(t1.charAt(4) + t1.charAt(5), 16) / 255, Vt.toWorkingColorSpace(this, e), this;
            }
            return t1 && t1.length > 0 ? this.setColorName(t1, e) : this;
        }
        setColorName(t1, e = ut) {
            const i = Ht[t1.toLowerCase()];
            return void 0 !== i ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t1), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t1) {
            return this.r = t1.r, this.g = t1.g, this.b = t1.b, this;
        }
        copySRGBToLinear(t1) {
            return this.r = Ft(t1.r), this.g = Ft(t1.g), this.b = Ft(t1.b), this;
        }
        copyLinearToSRGB(t1) {
            return this.r = kt(t1.r), this.g = kt(t1.g), this.b = kt(t1.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t1 = ut) {
            return Vt.fromWorkingColorSpace(Yt(this, Wt), t1), St(255 * Wt.r, 0, 255) << 16 ^ St(255 * Wt.g, 0, 255) << 8 ^ St(255 * Wt.b, 0, 255) << 0;
        }
        getHexString(t1 = ut) {
            return ("000000" + this.getHex(t1).toString(16)).slice(-6);
        }
        getHSL(t1, e = Vt.workingColorSpace) {
            Vt.fromWorkingColorSpace(Yt(this, Wt), e);
            const i = Wt.r, n = Wt.g, r = Wt.b, s = Math.max(i, n, r), a = Math.min(i, n, r);
            let o, l;
            const c = (a + s) / 2;
            if (a === s) o = 0, l = 0;
            else {
                const t1 = s - a;
                switch(l = c <= .5 ? t1 / (s + a) : t1 / (2 - s - a), s){
                    case i:
                        o = (n - r) / t1 + (n < r ? 6 : 0);
                        break;
                    case n:
                        o = (r - i) / t1 + 2;
                        break;
                    case r:
                        o = (i - n) / t1 + 4;
                }
                o /= 6;
            }
            return t1.h = o, t1.s = l, t1.l = c, t1;
        }
        getRGB(t1, e = Vt.workingColorSpace) {
            return Vt.fromWorkingColorSpace(Yt(this, Wt), e), t1.r = Wt.r, t1.g = Wt.g, t1.b = Wt.b, t1;
        }
        getStyle(t1 = ut) {
            return Vt.fromWorkingColorSpace(Yt(this, Wt), t1), t1 !== ut ? `color(${t1} ${Wt.r} ${Wt.g} ${Wt.b})` : `rgb(${255 * Wt.r | 0},${255 * Wt.g | 0},${255 * Wt.b | 0})`;
        }
        offsetHSL(t1, e, i) {
            return this.getHSL(jt), jt.h += t1, jt.s += e, jt.l += i, this.setHSL(jt.h, jt.s, jt.l), this;
        }
        add(t1) {
            return this.r += t1.r, this.g += t1.g, this.b += t1.b, this;
        }
        addColors(t1, e) {
            return this.r = t1.r + e.r, this.g = t1.g + e.g, this.b = t1.b + e.b, this;
        }
        addScalar(t1) {
            return this.r += t1, this.g += t1, this.b += t1, this;
        }
        sub(t1) {
            return this.r = Math.max(0, this.r - t1.r), this.g = Math.max(0, this.g - t1.g), this.b = Math.max(0, this.b - t1.b), this;
        }
        multiply(t1) {
            return this.r *= t1.r, this.g *= t1.g, this.b *= t1.b, this;
        }
        multiplyScalar(t1) {
            return this.r *= t1, this.g *= t1, this.b *= t1, this;
        }
        lerp(t1, e) {
            return this.r += (t1.r - this.r) * e, this.g += (t1.g - this.g) * e, this.b += (t1.b - this.b) * e, this;
        }
        lerpColors(t1, e, i) {
            return this.r = t1.r + (e.r - t1.r) * i, this.g = t1.g + (e.g - t1.g) * i, this.b = t1.b + (e.b - t1.b) * i, this;
        }
        lerpHSL(t1, e) {
            this.getHSL(jt), t1.getHSL(qt);
            const i = Tt(jt.h, qt.h, e), n = Tt(jt.s, qt.s, e), r = Tt(jt.l, qt.l, e);
            return this.setHSL(i, n, r), this;
        }
        equals(t1) {
            return t1.r === this.r && t1.g === this.g && t1.b === this.b;
        }
        fromArray(t1, e = 0) {
            return this.r = t1[e], this.g = t1[e + 1], this.b = t1[e + 2], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.r, t1[e + 1] = this.g, t1[e + 2] = this.b, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.r = t1.getX(e), this.g = t1.getY(e), this.b = t1.getZ(e), this;
        }
        toJSON() {
            return this.getHex();
        }
        *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
        }
    }
    let Jt;
    Zt.NAMES = Ht;
    class Kt {
        static getDataURL(t1) {
            if (/^data:/i.test(t1.src)) return t1.src;
            if ("undefined" == typeof HTMLCanvasElement) return t1.src;
            let e;
            if (t1 instanceof HTMLCanvasElement) e = t1;
            else {
                void 0 === Jt && (Jt = Bt("canvas")), Jt.width = t1.width, Jt.height = t1.height;
                const i = Jt.getContext("2d");
                t1 instanceof ImageData ? i.putImageData(t1, 0, 0) : i.drawImage(t1, 0, 0, t1.width, t1.height), e = Jt;
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t1), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
        }
        static sRGBToLinear(t1) {
            if ("undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap) {
                const e = Bt("canvas");
                e.width = t1.width, e.height = t1.height;
                const i = e.getContext("2d");
                i.drawImage(t1, 0, 0, t1.width, t1.height);
                const n = i.getImageData(0, 0, t1.width, t1.height), r = n.data;
                for(let t1 = 0; t1 < r.length; t1++)r[t1] = 255 * Ft(r[t1] / 255);
                return i.putImageData(n, 0, 0), e;
            }
            if (t1.data) {
                const e = t1.data.slice(0);
                for(let t1 = 0; t1 < e.length; t1++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t1] = Math.floor(255 * Ft(e[t1] / 255)) : e[t1] = Ft(e[t1]);
                return {
                    data: e,
                    width: t1.width,
                    height: t1.height
                };
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t1;
        }
    }
    class $t {
        constructor(t1 = null){
            this.isSource = !0, this.uuid = bt(), this.data = t1, this.version = 0;
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            if (!e && void 0 !== t1.images[this.uuid]) return t1.images[this.uuid];
            const i = {
                uuid: this.uuid,
                url: ""
            }, n = this.data;
            if (null !== n) {
                let t1;
                if (Array.isArray(n)) {
                    t1 = [];
                    for(let e = 0, i = n.length; e < i; e++)n[e].isDataTexture ? t1.push(Qt(n[e].image)) : t1.push(Qt(n[e]));
                } else t1 = Qt(n);
                i.url = t1;
            }
            return e || (t1.images[this.uuid] = i), i;
        }
    }
    function Qt(t1) {
        return "undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap ? Kt.getDataURL(t1) : t1.data ? {
            data: Array.from(t1.data),
            width: t1.width,
            height: t1.height,
            type: t1.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let te = 0;
    class ee extends vt {
        constructor(t1 = ee.DEFAULT_IMAGE, e = ee.DEFAULT_MAPPING, i = 1001, n = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = ee.DEFAULT_ANISOTROPY, c = 3e3){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: te++
            }), this.uuid = bt(), this.name = "", this.source = new $t(t1), this.mipmaps = [], this.mapping = e, this.wrapS = i, this.wrapT = n, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new It(0, 0), this.repeat = new It(1, 1), this.center = new It(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Dt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
        }
        get image() {
            return this.source.data;
        }
        set image(t1) {
            this.source.data = t1;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.name = t1.name, this.source = t1.source, this.mipmaps = t1.mipmaps.slice(0), this.mapping = t1.mapping, this.wrapS = t1.wrapS, this.wrapT = t1.wrapT, this.magFilter = t1.magFilter, this.minFilter = t1.minFilter, this.anisotropy = t1.anisotropy, this.format = t1.format, this.internalFormat = t1.internalFormat, this.type = t1.type, this.offset.copy(t1.offset), this.repeat.copy(t1.repeat), this.center.copy(t1.center), this.rotation = t1.rotation, this.matrixAutoUpdate = t1.matrixAutoUpdate, this.matrix.copy(t1.matrix), this.generateMipmaps = t1.generateMipmaps, this.premultiplyAlpha = t1.premultiplyAlpha, this.flipY = t1.flipY, this.unpackAlignment = t1.unpackAlignment, this.encoding = t1.encoding, this.userData = JSON.parse(JSON.stringify(t1.userData)), this.needsUpdate = !0, this;
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            if (!e && void 0 !== t1.textures[this.uuid]) return t1.textures[this.uuid];
            const i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(t1).uuid,
                mapping: this.mapping,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                generateMipmaps: this.generateMipmaps,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return Object.keys(this.userData).length > 0 && (i.userData = this.userData), e || (t1.textures[this.uuid] = i), i;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t1) {
            if (this.mapping !== n) return t1;
            if (t1.applyMatrix3(this.matrix), t1.x < 0 || t1.x > 1) switch(this.wrapS){
                case c:
                    t1.x = t1.x - Math.floor(t1.x);
                    break;
                case h:
                    t1.x = t1.x < 0 ? 0 : 1;
                    break;
                case u:
                    1 === Math.abs(Math.floor(t1.x) % 2) ? t1.x = Math.ceil(t1.x) - t1.x : t1.x = t1.x - Math.floor(t1.x);
            }
            if (t1.y < 0 || t1.y > 1) switch(this.wrapT){
                case c:
                    t1.y = t1.y - Math.floor(t1.y);
                    break;
                case h:
                    t1.y = t1.y < 0 ? 0 : 1;
                    break;
                case u:
                    1 === Math.abs(Math.floor(t1.y) % 2) ? t1.y = Math.ceil(t1.y) - t1.y : t1.y = t1.y - Math.floor(t1.y);
            }
            return this.flipY && (t1.y = 1 - t1.y), t1;
        }
        set needsUpdate(t1) {
            !0 === t1 && (this.version++, this.source.needsUpdate = !0);
        }
    }
    ee.DEFAULT_IMAGE = null, ee.DEFAULT_MAPPING = n, ee.DEFAULT_ANISOTROPY = 1;
    class ie {
        constructor(t1 = 0, e = 0, i = 0, n = 1){
            ie.prototype.isVector4 = !0, this.x = t1, this.y = e, this.z = i, this.w = n;
        }
        get width() {
            return this.z;
        }
        set width(t1) {
            this.z = t1;
        }
        get height() {
            return this.w;
        }
        set height(t1) {
            this.w = t1;
        }
        set(t1, e, i, n) {
            return this.x = t1, this.y = e, this.z = i, this.w = n, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this.z = t1, this.w = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setZ(t1) {
            return this.z = t1, this;
        }
        setW(t1) {
            return this.w = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this.z = t1.z, this.w = void 0 !== t1.w ? t1.w : 1, this;
        }
        add(t1) {
            return this.x += t1.x, this.y += t1.y, this.z += t1.z, this.w += t1.w, this;
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this.z += t1, this.w += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this.z = t1.z + e.z, this.w = t1.w + e.w, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this.z += t1.z * e, this.w += t1.w * e, this;
        }
        sub(t1) {
            return this.x -= t1.x, this.y -= t1.y, this.z -= t1.z, this.w -= t1.w, this;
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this.z -= t1, this.w -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this.z = t1.z - e.z, this.w = t1.w - e.w, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this.z *= t1.z, this.w *= t1.w, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this.z *= t1, this.w *= t1, this;
        }
        applyMatrix4(t1) {
            const e = this.x, i = this.y, n = this.z, r = this.w, s = t1.elements;
            return this.x = s[0] * e + s[4] * i + s[8] * n + s[12] * r, this.y = s[1] * e + s[5] * i + s[9] * n + s[13] * r, this.z = s[2] * e + s[6] * i + s[10] * n + s[14] * r, this.w = s[3] * e + s[7] * i + s[11] * n + s[15] * r, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        setAxisAngleFromQuaternion(t1) {
            this.w = 2 * Math.acos(t1.w);
            const e = Math.sqrt(1 - t1.w * t1.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t1.x / e, this.y = t1.y / e, this.z = t1.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t1) {
            let e, i, n, r;
            const s = .01, a = .1, o = t1.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], m = o[2], f = o[6], g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const t1 = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, x = (c + u) / 4, _ = (h + m) / 4, y = (p + f) / 4;
                return t1 > o && t1 > v ? t1 < s ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(t1), n = x / i, r = _ / i) : o > v ? o < s ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(o), i = x / n, r = y / n) : v < s ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(v), i = _ / r, n = y / r), this.set(i, n, r, e), this;
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (h - m) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this.z = Math.min(this.z, t1.z), this.w = Math.min(this.w, t1.w), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this.z = Math.max(this.z, t1.z), this.w = Math.max(this.w, t1.w), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this.z = Math.max(t1.z, Math.min(e.z, this.z)), this.w = Math.max(t1.w, Math.min(e.w, this.w)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this.z = Math.max(t1, Math.min(e, this.z)), this.w = Math.max(t1, Math.min(e, this.w)), this;
        }
        clampLength(t1, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t1, Math.min(e, i)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y + this.z * t1.z + this.w * t1.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this.z += (t1.z - this.z) * e, this.w += (t1.w - this.w) * e, this;
        }
        lerpVectors(t1, e, i) {
            return this.x = t1.x + (e.x - t1.x) * i, this.y = t1.y + (e.y - t1.y) * i, this.z = t1.z + (e.z - t1.z) * i, this.w = t1.w + (e.w - t1.w) * i, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y && t1.z === this.z && t1.w === this.w;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this.z = t1[e + 2], this.w = t1[e + 3], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1[e + 2] = this.z, t1[e + 3] = this.w, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.x = t1.getX(e), this.y = t1.getY(e), this.z = t1.getZ(e), this.w = t1.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    class ne extends vt {
        constructor(t1 = 1, e = 1, i = {}){
            super(), this.isWebGLRenderTarget = !0, this.width = t1, this.height = e, this.depth = 1, this.scissor = new ie(0, 0, t1, e), this.scissorTest = !1, this.viewport = new ie(0, 0, t1, e);
            const n = {
                width: t1,
                height: e,
                depth: 1
            };
            this.texture = new ee(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : f, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null, this.samples = void 0 !== i.samples ? i.samples : 0;
        }
        setSize(t1, e, i = 1) {
            this.width === t1 && this.height === e && this.depth === i || (this.width = t1, this.height = e, this.depth = i, this.texture.image.width = t1, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t1, e), this.scissor.set(0, 0, t1, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.width = t1.width, this.height = t1.height, this.depth = t1.depth, this.viewport.copy(t1.viewport), this.texture = t1.texture.clone(), this.texture.isRenderTargetTexture = !0;
            const e = Object.assign({}, t1.texture.image);
            return this.texture.source = new $t(e), this.depthBuffer = t1.depthBuffer, this.stencilBuffer = t1.stencilBuffer, null !== t1.depthTexture && (this.depthTexture = t1.depthTexture.clone()), this.samples = t1.samples, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    class re extends ee {
        constructor(t1 = null, e = 1, i = 1, n = 1){
            super(null), this.isDataArrayTexture = !0, this.image = {
                data: t1,
                width: e,
                height: i,
                depth: n
            }, this.magFilter = d, this.minFilter = d, this.wrapR = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class se extends ee {
        constructor(t1 = null, e = 1, i = 1, n = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: t1,
                width: e,
                height: i,
                depth: n
            }, this.magFilter = d, this.minFilter = d, this.wrapR = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class ae {
        constructor(t1 = 0, e = 0, i = 0, n = 1){
            this.isQuaternion = !0, this._x = t1, this._y = e, this._z = i, this._w = n;
        }
        static slerpFlat(t1, e, i, n, r, s, a) {
            let o = i[n + 0], l = i[n + 1], c = i[n + 2], h = i[n + 3];
            const u = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
            if (0 === a) return t1[e + 0] = o, t1[e + 1] = l, t1[e + 2] = c, void (t1[e + 3] = h);
            if (1 === a) return t1[e + 0] = u, t1[e + 1] = d, t1[e + 2] = p, void (t1[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t1 = 1 - a;
                const e = o * u + l * d + c * p + h * m, i = e >= 0 ? 1 : -1, n = 1 - e * e;
                if (n > Number.EPSILON) {
                    const r = Math.sqrt(n), s = Math.atan2(r, e * i);
                    t1 = Math.sin(t1 * s) / r, a = Math.sin(a * s) / r;
                }
                const r = a * i;
                if (o = o * t1 + u * r, l = l * t1 + d * r, c = c * t1 + p * r, h = h * t1 + m * r, t1 === 1 - a) {
                    const t1 = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t1, l *= t1, c *= t1, h *= t1;
                }
            }
            t1[e] = o, t1[e + 1] = l, t1[e + 2] = c, t1[e + 3] = h;
        }
        static multiplyQuaternionsFlat(t1, e, i, n, r, s) {
            const a = i[n], o = i[n + 1], l = i[n + 2], c = i[n + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3];
            return t1[e] = a * p + c * h + o * d - l * u, t1[e + 1] = o * p + c * u + l * h - a * d, t1[e + 2] = l * p + c * d + a * u - o * h, t1[e + 3] = c * p - a * h - o * u - l * d, t1;
        }
        get x() {
            return this._x;
        }
        set x(t1) {
            this._x = t1, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t1) {
            this._y = t1, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t1) {
            this._z = t1, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t1) {
            this._w = t1, this._onChangeCallback();
        }
        set(t1, e, i, n) {
            return this._x = t1, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t1) {
            return this._x = t1.x, this._y = t1.y, this._z = t1.z, this._w = t1.w, this._onChangeCallback(), this;
        }
        setFromEuler(t1, e) {
            const i = t1._x, n = t1._y, r = t1._z, s = t1._order, a = Math.cos, o = Math.sin, l = a(i / 2), c = a(n / 2), h = a(r / 2), u = o(i / 2), d = o(n / 2), p = o(r / 2);
            switch(s){
                case "XYZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
            }
            return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t1, e) {
            const i = e / 2, n = Math.sin(i);
            return this._x = t1.x * n, this._y = t1.y * n, this._z = t1.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t1) {
            const e = t1.elements, i = e[0], n = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = i + a + h;
            if (u > 0) {
                const t1 = .5 / Math.sqrt(u + 1);
                this._w = .25 / t1, this._x = (c - o) * t1, this._y = (r - l) * t1, this._z = (s - n) * t1;
            } else if (i > a && i > h) {
                const t1 = 2 * Math.sqrt(1 + i - a - h);
                this._w = (c - o) / t1, this._x = .25 * t1, this._y = (n + s) / t1, this._z = (r + l) / t1;
            } else if (a > h) {
                const t1 = 2 * Math.sqrt(1 + a - i - h);
                this._w = (r - l) / t1, this._x = (n + s) / t1, this._y = .25 * t1, this._z = (o + c) / t1;
            } else {
                const t1 = 2 * Math.sqrt(1 + h - i - a);
                this._w = (s - n) / t1, this._x = (r + l) / t1, this._y = (o + c) / t1, this._z = .25 * t1;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t1, e) {
            let i = t1.dot(e) + 1;
            return i < Number.EPSILON ? (i = 0, Math.abs(t1.x) > Math.abs(t1.z) ? (this._x = -t1.y, this._y = t1.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t1.z, this._z = t1.y, this._w = i)) : (this._x = t1.y * e.z - t1.z * e.y, this._y = t1.z * e.x - t1.x * e.z, this._z = t1.x * e.y - t1.y * e.x, this._w = i), this.normalize();
        }
        angleTo(t1) {
            return 2 * Math.acos(Math.abs(St(this.dot(t1), -1, 1)));
        }
        rotateTowards(t1, e) {
            const i = this.angleTo(t1);
            if (0 === i) return this;
            const n = Math.min(1, e / i);
            return this.slerp(t1, n), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t1) {
            return this._x * t1._x + this._y * t1._y + this._z * t1._z + this._w * t1._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t1 = this.length();
            return 0 === t1 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t1 = 1 / t1, this._x = this._x * t1, this._y = this._y * t1, this._z = this._z * t1, this._w = this._w * t1), this._onChangeCallback(), this;
        }
        multiply(t1) {
            return this.multiplyQuaternions(this, t1);
        }
        premultiply(t1) {
            return this.multiplyQuaternions(t1, this);
        }
        multiplyQuaternions(t1, e) {
            const i = t1._x, n = t1._y, r = t1._z, s = t1._w, a = e._x, o = e._y, l = e._z, c = e._w;
            return this._x = i * c + s * a + n * l - r * o, this._y = n * c + s * o + r * a - i * l, this._z = r * c + s * l + i * o - n * a, this._w = s * c - i * a - n * o - r * l, this._onChangeCallback(), this;
        }
        slerp(t1, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t1);
            const i = this._x, n = this._y, r = this._z, s = this._w;
            let a = s * t1._w + i * t1._x + n * t1._y + r * t1._z;
            if (a < 0 ? (this._w = -t1._w, this._x = -t1._x, this._y = -t1._y, this._z = -t1._z, a = -a) : this.copy(t1), a >= 1) return this._w = s, this._x = i, this._y = n, this._z = r, this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t1 = 1 - e;
                return this._w = t1 * s + e * this._w, this._x = t1 * i + e * this._x, this._y = t1 * n + e * this._y, this._z = t1 * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
            }
            const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u, this._x = i * h + this._x * u, this._y = n * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
        }
        slerpQuaternions(t1, e, i) {
            return this.copy(t1).slerp(e, i);
        }
        random() {
            const t1 = Math.random(), e = Math.sqrt(1 - t1), i = Math.sqrt(t1), n = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
            return this.set(e * Math.cos(n), i * Math.sin(r), i * Math.cos(r), e * Math.sin(n));
        }
        equals(t1) {
            return t1._x === this._x && t1._y === this._y && t1._z === this._z && t1._w === this._w;
        }
        fromArray(t1, e = 0) {
            return this._x = t1[e], this._y = t1[e + 1], this._z = t1[e + 2], this._w = t1[e + 3], this._onChangeCallback(), this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this._x, t1[e + 1] = this._y, t1[e + 2] = this._z, t1[e + 3] = this._w, t1;
        }
        fromBufferAttribute(t1, e) {
            return this._x = t1.getX(e), this._y = t1.getY(e), this._z = t1.getZ(e), this._w = t1.getW(e), this;
        }
        _onChange(t1) {
            return this._onChangeCallback = t1, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    }
    class oe {
        constructor(t1 = 0, e = 0, i = 0){
            oe.prototype.isVector3 = !0, this.x = t1, this.y = e, this.z = i;
        }
        set(t1, e, i) {
            return void 0 === i && (i = this.z), this.x = t1, this.y = e, this.z = i, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this.z = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setZ(t1) {
            return this.z = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this.z = t1.z, this;
        }
        add(t1) {
            return this.x += t1.x, this.y += t1.y, this.z += t1.z, this;
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this.z += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this.z = t1.z + e.z, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this.z += t1.z * e, this;
        }
        sub(t1) {
            return this.x -= t1.x, this.y -= t1.y, this.z -= t1.z, this;
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this.z -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this.z = t1.z - e.z, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this.z *= t1.z, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this.z *= t1, this;
        }
        multiplyVectors(t1, e) {
            return this.x = t1.x * e.x, this.y = t1.y * e.y, this.z = t1.z * e.z, this;
        }
        applyEuler(t1) {
            return this.applyQuaternion(ce.setFromEuler(t1));
        }
        applyAxisAngle(t1, e) {
            return this.applyQuaternion(ce.setFromAxisAngle(t1, e));
        }
        applyMatrix3(t1) {
            const e = this.x, i = this.y, n = this.z, r = t1.elements;
            return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this;
        }
        applyNormalMatrix(t1) {
            return this.applyMatrix3(t1).normalize();
        }
        applyMatrix4(t1) {
            const e = this.x, i = this.y, n = this.z, r = t1.elements, s = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * s, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * s, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * s, this;
        }
        applyQuaternion(t1) {
            const e = this.x, i = this.y, n = this.z, r = t1.x, s = t1.y, a = t1.z, o = t1.w, l = o * e + s * n - a * i, c = o * i + a * e - r * n, h = o * n + r * i - s * e, u = -r * e - s * i - a * n;
            return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this;
        }
        project(t1) {
            return this.applyMatrix4(t1.matrixWorldInverse).applyMatrix4(t1.projectionMatrix);
        }
        unproject(t1) {
            return this.applyMatrix4(t1.projectionMatrixInverse).applyMatrix4(t1.matrixWorld);
        }
        transformDirection(t1) {
            const e = this.x, i = this.y, n = this.z, r = t1.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize();
        }
        divide(t1) {
            return this.x /= t1.x, this.y /= t1.y, this.z /= t1.z, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this.z = Math.min(this.z, t1.z), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this.z = Math.max(this.z, t1.z), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this.z = Math.max(t1.z, Math.min(e.z, this.z)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this.z = Math.max(t1, Math.min(e, this.z)), this;
        }
        clampLength(t1, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t1, Math.min(e, i)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y + this.z * t1.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this.z += (t1.z - this.z) * e, this;
        }
        lerpVectors(t1, e, i) {
            return this.x = t1.x + (e.x - t1.x) * i, this.y = t1.y + (e.y - t1.y) * i, this.z = t1.z + (e.z - t1.z) * i, this;
        }
        cross(t1) {
            return this.crossVectors(this, t1);
        }
        crossVectors(t1, e) {
            const i = t1.x, n = t1.y, r = t1.z, s = e.x, a = e.y, o = e.z;
            return this.x = n * o - r * a, this.y = r * s - i * o, this.z = i * a - n * s, this;
        }
        projectOnVector(t1) {
            const e = t1.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const i = t1.dot(this) / e;
            return this.copy(t1).multiplyScalar(i);
        }
        projectOnPlane(t1) {
            return le.copy(this).projectOnVector(t1), this.sub(le);
        }
        reflect(t1) {
            return this.sub(le.copy(t1).multiplyScalar(2 * this.dot(t1)));
        }
        angleTo(t1) {
            const e = Math.sqrt(this.lengthSq() * t1.lengthSq());
            if (0 === e) return Math.PI / 2;
            const i = this.dot(t1) / e;
            return Math.acos(St(i, -1, 1));
        }
        distanceTo(t1) {
            return Math.sqrt(this.distanceToSquared(t1));
        }
        distanceToSquared(t1) {
            const e = this.x - t1.x, i = this.y - t1.y, n = this.z - t1.z;
            return e * e + i * i + n * n;
        }
        manhattanDistanceTo(t1) {
            return Math.abs(this.x - t1.x) + Math.abs(this.y - t1.y) + Math.abs(this.z - t1.z);
        }
        setFromSpherical(t1) {
            return this.setFromSphericalCoords(t1.radius, t1.phi, t1.theta);
        }
        setFromSphericalCoords(t1, e, i) {
            const n = Math.sin(e) * t1;
            return this.x = n * Math.sin(i), this.y = Math.cos(e) * t1, this.z = n * Math.cos(i), this;
        }
        setFromCylindrical(t1) {
            return this.setFromCylindricalCoords(t1.radius, t1.theta, t1.y);
        }
        setFromCylindricalCoords(t1, e, i) {
            return this.x = t1 * Math.sin(e), this.y = i, this.z = t1 * Math.cos(e), this;
        }
        setFromMatrixPosition(t1) {
            const e = t1.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t1) {
            const e = this.setFromMatrixColumn(t1, 0).length(), i = this.setFromMatrixColumn(t1, 1).length(), n = this.setFromMatrixColumn(t1, 2).length();
            return this.x = e, this.y = i, this.z = n, this;
        }
        setFromMatrixColumn(t1, e) {
            return this.fromArray(t1.elements, 4 * e);
        }
        setFromMatrix3Column(t1, e) {
            return this.fromArray(t1.elements, 3 * e);
        }
        setFromEuler(t1) {
            return this.x = t1._x, this.y = t1._y, this.z = t1._z, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y && t1.z === this.z;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this.z = t1[e + 2], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1[e + 2] = this.z, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.x = t1.getX(e), this.y = t1.getY(e), this.z = t1.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const t1 = 2 * (Math.random() - .5), e = Math.random() * Math.PI * 2, i = Math.sqrt(1 - t1 ** 2);
            return this.x = i * Math.cos(e), this.y = i * Math.sin(e), this.z = t1, this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    }
    const le = new oe, ce = new ae;
    class he {
        constructor(t1 = new oe(1 / 0, 1 / 0, 1 / 0), e = new oe(-1 / 0, -1 / 0, -1 / 0)){
            this.isBox3 = !0, this.min = t1, this.max = e;
        }
        set(t1, e) {
            return this.min.copy(t1), this.max.copy(e), this;
        }
        setFromArray(t1) {
            let e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t1.length; o < l; o += 3){
                const l = t1[o], c = t1[o + 1], h = t1[o + 2];
                l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, i, n), this.max.set(r, s, a), this;
        }
        setFromBufferAttribute(t1) {
            let e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t1.count; o < l; o++){
                const l = t1.getX(o), c = t1.getY(o), h = t1.getZ(o);
                l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, i, n), this.max.set(r, s, a), this;
        }
        setFromPoints(t1) {
            this.makeEmpty();
            for(let e = 0, i = t1.length; e < i; e++)this.expandByPoint(t1[e]);
            return this;
        }
        setFromCenterAndSize(t1, e) {
            const i = de.copy(e).multiplyScalar(.5);
            return this.min.copy(t1).sub(i), this.max.copy(t1).add(i), this;
        }
        setFromObject(t1, e = !1) {
            return this.makeEmpty(), this.expandByObject(t1, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.min.copy(t1.min), this.max.copy(t1.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t1) {
            return this.isEmpty() ? t1.set(0, 0, 0) : t1.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t1) {
            return this.isEmpty() ? t1.set(0, 0, 0) : t1.subVectors(this.max, this.min);
        }
        expandByPoint(t1) {
            return this.min.min(t1), this.max.max(t1), this;
        }
        expandByVector(t1) {
            return this.min.sub(t1), this.max.add(t1), this;
        }
        expandByScalar(t1) {
            return this.min.addScalar(-t1), this.max.addScalar(t1), this;
        }
        expandByObject(t1, e = !1) {
            t1.updateWorldMatrix(!1, !1);
            const i = t1.geometry;
            if (void 0 !== i) {
                if (e && null != i.attributes && void 0 !== i.attributes.position) {
                    const e = i.attributes.position;
                    for(let i = 0, n = e.count; i < n; i++)de.fromBufferAttribute(e, i).applyMatrix4(t1.matrixWorld), this.expandByPoint(de);
                } else null === i.boundingBox && i.computeBoundingBox(), pe.copy(i.boundingBox), pe.applyMatrix4(t1.matrixWorld), this.union(pe);
            }
            const n = t1.children;
            for(let t1 = 0, i = n.length; t1 < i; t1++)this.expandByObject(n[t1], e);
            return this;
        }
        containsPoint(t1) {
            return !(t1.x < this.min.x || t1.x > this.max.x || t1.y < this.min.y || t1.y > this.max.y || t1.z < this.min.z || t1.z > this.max.z);
        }
        containsBox(t1) {
            return this.min.x <= t1.min.x && t1.max.x <= this.max.x && this.min.y <= t1.min.y && t1.max.y <= this.max.y && this.min.z <= t1.min.z && t1.max.z <= this.max.z;
        }
        getParameter(t1, e) {
            return e.set((t1.x - this.min.x) / (this.max.x - this.min.x), (t1.y - this.min.y) / (this.max.y - this.min.y), (t1.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t1) {
            return !(t1.max.x < this.min.x || t1.min.x > this.max.x || t1.max.y < this.min.y || t1.min.y > this.max.y || t1.max.z < this.min.z || t1.min.z > this.max.z);
        }
        intersectsSphere(t1) {
            return this.clampPoint(t1.center, de), de.distanceToSquared(t1.center) <= t1.radius * t1.radius;
        }
        intersectsPlane(t1) {
            let e, i;
            return t1.normal.x > 0 ? (e = t1.normal.x * this.min.x, i = t1.normal.x * this.max.x) : (e = t1.normal.x * this.max.x, i = t1.normal.x * this.min.x), t1.normal.y > 0 ? (e += t1.normal.y * this.min.y, i += t1.normal.y * this.max.y) : (e += t1.normal.y * this.max.y, i += t1.normal.y * this.min.y), t1.normal.z > 0 ? (e += t1.normal.z * this.min.z, i += t1.normal.z * this.max.z) : (e += t1.normal.z * this.max.z, i += t1.normal.z * this.min.z), e <= -t1.constant && i >= -t1.constant;
        }
        intersectsTriangle(t1) {
            if (this.isEmpty()) return !1;
            this.getCenter(ye), Me.subVectors(this.max, ye), me.subVectors(t1.a, ye), fe.subVectors(t1.b, ye), ge.subVectors(t1.c, ye), ve.subVectors(fe, me), xe.subVectors(ge, fe), _e.subVectors(me, ge);
            let e = [
                0,
                -ve.z,
                ve.y,
                0,
                -xe.z,
                xe.y,
                0,
                -_e.z,
                _e.y,
                ve.z,
                0,
                -ve.x,
                xe.z,
                0,
                -xe.x,
                _e.z,
                0,
                -_e.x,
                -ve.y,
                ve.x,
                0,
                -xe.y,
                xe.x,
                0,
                -_e.y,
                _e.x,
                0
            ];
            return !!we(e, me, fe, ge, Me) && (e = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !!we(e, me, fe, ge, Me) && (be.crossVectors(ve, xe), e = [
                be.x,
                be.y,
                be.z
            ], we(e, me, fe, ge, Me)));
        }
        clampPoint(t1, e) {
            return e.copy(t1).clamp(this.min, this.max);
        }
        distanceToPoint(t1) {
            return de.copy(t1).clamp(this.min, this.max).sub(t1).length();
        }
        getBoundingSphere(t1) {
            return this.getCenter(t1.center), t1.radius = .5 * this.getSize(de).length(), t1;
        }
        intersect(t1) {
            return this.min.max(t1.min), this.max.min(t1.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t1) {
            return this.min.min(t1.min), this.max.max(t1.max), this;
        }
        applyMatrix4(t1) {
            return this.isEmpty() || (ue[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t1), ue[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t1), ue[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t1), ue[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t1), ue[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t1), ue[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t1), ue[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t1), ue[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t1), this.setFromPoints(ue)), this;
        }
        translate(t1) {
            return this.min.add(t1), this.max.add(t1), this;
        }
        equals(t1) {
            return t1.min.equals(this.min) && t1.max.equals(this.max);
        }
    }
    const ue = [
        new oe,
        new oe,
        new oe,
        new oe,
        new oe,
        new oe,
        new oe,
        new oe
    ], de = new oe, pe = new he, me = new oe, fe = new oe, ge = new oe, ve = new oe, xe = new oe, _e = new oe, ye = new oe, Me = new oe, be = new oe, Se = new oe;
    function we(t1, e, i, n, r) {
        for(let s = 0, a = t1.length - 3; s <= a; s += 3){
            Se.fromArray(t1, s);
            const a = r.x * Math.abs(Se.x) + r.y * Math.abs(Se.y) + r.z * Math.abs(Se.z), o = e.dot(Se), l = i.dot(Se), c = n.dot(Se);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
    }
    const Te = new he, Ae = new oe, Ee = new oe;
    class Ce {
        constructor(t1 = new oe, e = -1){
            this.center = t1, this.radius = e;
        }
        set(t1, e) {
            return this.center.copy(t1), this.radius = e, this;
        }
        setFromPoints(t1, e) {
            const i = this.center;
            void 0 !== e ? i.copy(e) : Te.setFromPoints(t1).getCenter(i);
            let n = 0;
            for(let e = 0, r = t1.length; e < r; e++)n = Math.max(n, i.distanceToSquared(t1[e]));
            return this.radius = Math.sqrt(n), this;
        }
        copy(t1) {
            return this.center.copy(t1.center), this.radius = t1.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t1) {
            return t1.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t1) {
            return t1.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t1) {
            const e = this.radius + t1.radius;
            return t1.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t1) {
            return t1.intersectsSphere(this);
        }
        intersectsPlane(t1) {
            return Math.abs(t1.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t1, e) {
            const i = this.center.distanceToSquared(t1);
            return e.copy(t1), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t1) {
            return this.isEmpty() ? (t1.makeEmpty(), t1) : (t1.set(this.center, this.center), t1.expandByScalar(this.radius), t1);
        }
        applyMatrix4(t1) {
            return this.center.applyMatrix4(t1), this.radius = this.radius * t1.getMaxScaleOnAxis(), this;
        }
        translate(t1) {
            return this.center.add(t1), this;
        }
        expandByPoint(t1) {
            if (this.isEmpty()) return this.center.copy(t1), this.radius = 0, this;
            Ae.subVectors(t1, this.center);
            const e = Ae.lengthSq();
            if (e > this.radius * this.radius) {
                const t1 = Math.sqrt(e), i = .5 * (t1 - this.radius);
                this.center.addScaledVector(Ae, i / t1), this.radius += i;
            }
            return this;
        }
        union(t1) {
            return t1.isEmpty() ? this : this.isEmpty() ? (this.copy(t1), this) : (!0 === this.center.equals(t1.center) ? this.radius = Math.max(this.radius, t1.radius) : (Ee.subVectors(t1.center, this.center).setLength(t1.radius), this.expandByPoint(Ae.copy(t1.center).add(Ee)), this.expandByPoint(Ae.copy(t1.center).sub(Ee))), this);
        }
        equals(t1) {
            return t1.center.equals(this.center) && t1.radius === this.radius;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const Le = new oe, Re = new oe, Pe = new oe, Ie = new oe, De = new oe, Ne = new oe, Oe = new oe;
    class ze {
        constructor(t1 = new oe, e = new oe(0, 0, -1)){
            this.origin = t1, this.direction = e;
        }
        set(t1, e) {
            return this.origin.copy(t1), this.direction.copy(e), this;
        }
        copy(t1) {
            return this.origin.copy(t1.origin), this.direction.copy(t1.direction), this;
        }
        at(t1, e) {
            return e.copy(this.direction).multiplyScalar(t1).add(this.origin);
        }
        lookAt(t1) {
            return this.direction.copy(t1).sub(this.origin).normalize(), this;
        }
        recast(t1) {
            return this.origin.copy(this.at(t1, Le)), this;
        }
        closestPointToPoint(t1, e) {
            e.subVectors(t1, this.origin);
            const i = e.dot(this.direction);
            return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin);
        }
        distanceToPoint(t1) {
            return Math.sqrt(this.distanceSqToPoint(t1));
        }
        distanceSqToPoint(t1) {
            const e = Le.subVectors(t1, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t1) : (Le.copy(this.direction).multiplyScalar(e).add(this.origin), Le.distanceToSquared(t1));
        }
        distanceSqToSegment(t1, e, i, n) {
            Re.copy(t1).add(e).multiplyScalar(.5), Pe.copy(e).sub(t1).normalize(), Ie.copy(this.origin).sub(Re);
            const r = .5 * t1.distanceTo(e), s = -this.direction.dot(Pe), a = Ie.dot(this.direction), o = -Ie.dot(Pe), l = Ie.lengthSq(), c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0) {
                if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
                    if (u >= -p) {
                        if (u <= p) {
                            const t1 = 1 / c;
                            h *= t1, u *= t1, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
                        } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                    } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            return i && i.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(Pe).multiplyScalar(u).add(Re), d;
        }
        intersectSphere(t1, e) {
            Le.subVectors(t1.center, this.origin);
            const i = Le.dot(this.direction), n = Le.dot(Le) - i * i, r = t1.radius * t1.radius;
            if (n > r) return null;
            const s = Math.sqrt(r - n), a = i - s, o = i + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t1) {
            return this.distanceSqToPoint(t1.center) <= t1.radius * t1.radius;
        }
        distanceToPlane(t1) {
            const e = t1.normal.dot(this.direction);
            if (0 === e) return 0 === t1.distanceToPoint(this.origin) ? 0 : null;
            const i = -(this.origin.dot(t1.normal) + t1.constant) / e;
            return i >= 0 ? i : null;
        }
        intersectPlane(t1, e) {
            const i = this.distanceToPlane(t1);
            return null === i ? null : this.at(i, e);
        }
        intersectsPlane(t1) {
            const e = t1.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t1.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t1, e) {
            let i, n, r, s, a, o;
            const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
            return l >= 0 ? (i = (t1.min.x - u.x) * l, n = (t1.max.x - u.x) * l) : (i = (t1.max.x - u.x) * l, n = (t1.min.x - u.x) * l), c >= 0 ? (r = (t1.min.y - u.y) * c, s = (t1.max.y - u.y) * c) : (r = (t1.max.y - u.y) * c, s = (t1.min.y - u.y) * c), i > s || r > n ? null : ((r > i || isNaN(i)) && (i = r), (s < n || isNaN(n)) && (n = s), h >= 0 ? (a = (t1.min.z - u.z) * h, o = (t1.max.z - u.z) * h) : (a = (t1.max.z - u.z) * h, o = (t1.min.z - u.z) * h), i > o || a > n ? null : ((a > i || i != i) && (i = a), (o < n || n != n) && (n = o), n < 0 ? null : this.at(i >= 0 ? i : n, e)));
        }
        intersectsBox(t1) {
            return null !== this.intersectBox(t1, Le);
        }
        intersectTriangle(t1, e, i, n, r) {
            De.subVectors(e, t1), Ne.subVectors(i, t1), Oe.crossVectors(De, Ne);
            let s, a = this.direction.dot(Oe);
            if (a > 0) {
                if (n) return null;
                s = 1;
            } else {
                if (!(a < 0)) return null;
                s = -1, a = -a;
            }
            Ie.subVectors(this.origin, t1);
            const o = s * this.direction.dot(Ne.crossVectors(Ie, Ne));
            if (o < 0) return null;
            const l = s * this.direction.dot(De.cross(Ie));
            if (l < 0) return null;
            if (o + l > a) return null;
            const c = -s * Ie.dot(Oe);
            return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t1) {
            return this.origin.applyMatrix4(t1), this.direction.transformDirection(t1), this;
        }
        equals(t1) {
            return t1.origin.equals(this.origin) && t1.direction.equals(this.direction);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class Ue {
        constructor(){
            Ue.prototype.isMatrix4 = !0, this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ];
        }
        set(t1, e, i, n, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t1, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return (new Ue).fromArray(this.elements);
        }
        copy(t1) {
            const e = this.elements, i = t1.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
        }
        copyPosition(t1) {
            const e = this.elements, i = t1.elements;
            return e[12] = i[12], e[13] = i[13], e[14] = i[14], this;
        }
        setFromMatrix3(t1) {
            const e = t1.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t1, e, i) {
            return t1.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t1, e, i) {
            return this.set(t1.x, e.x, i.x, 0, t1.y, e.y, i.y, 0, t1.z, e.z, i.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t1) {
            const e = this.elements, i = t1.elements, n = 1 / Be.setFromMatrixColumn(t1, 0).length(), r = 1 / Be.setFromMatrixColumn(t1, 1).length(), s = 1 / Be.setFromMatrixColumn(t1, 2).length();
            return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * s, e[9] = i[9] * s, e[10] = i[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t1) {
            const e = this.elements, i = t1.x, n = t1.y, r = t1.z, s = Math.cos(i), a = Math.sin(i), o = Math.cos(n), l = Math.sin(n), c = Math.cos(r), h = Math.sin(r);
            if ("XYZ" === t1.order) {
                const t1 = s * c, i = s * h, n = a * c, r = a * h;
                e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = i + n * l, e[5] = t1 - r * l, e[9] = -a * o, e[2] = r - t1 * l, e[6] = n + i * l, e[10] = s * o;
            } else if ("YXZ" === t1.order) {
                const t1 = o * c, i = o * h, n = l * c, r = l * h;
                e[0] = t1 + r * a, e[4] = n * a - i, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = i * a - n, e[6] = r + t1 * a, e[10] = s * o;
            } else if ("ZXY" === t1.order) {
                const t1 = o * c, i = o * h, n = l * c, r = l * h;
                e[0] = t1 - r * a, e[4] = -s * h, e[8] = n + i * a, e[1] = i + n * a, e[5] = s * c, e[9] = r - t1 * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
            } else if ("ZYX" === t1.order) {
                const t1 = s * c, i = s * h, n = a * c, r = a * h;
                e[0] = o * c, e[4] = n * l - i, e[8] = t1 * l + r, e[1] = o * h, e[5] = r * l + t1, e[9] = i * l - n, e[2] = -l, e[6] = a * o, e[10] = s * o;
            } else if ("YZX" === t1.order) {
                const t1 = s * o, i = s * l, n = a * o, r = a * l;
                e[0] = o * c, e[4] = r - t1 * h, e[8] = n * h + i, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = i * h + n, e[10] = t1 - r * h;
            } else if ("XZY" === t1.order) {
                const t1 = s * o, i = s * l, n = a * o, r = a * l;
                e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t1 * h + r, e[5] = s * c, e[9] = i * h - n, e[2] = n * h - i, e[6] = a * c, e[10] = r * h + t1;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t1) {
            return this.compose(ke, t1, Ge);
        }
        lookAt(t1, e, i) {
            const n = this.elements;
            return We.subVectors(t1, e), 0 === We.lengthSq() && (We.z = 1), We.normalize(), Ve.crossVectors(i, We), 0 === Ve.lengthSq() && (1 === Math.abs(i.z) ? We.x += 1e-4 : We.z += 1e-4, We.normalize(), Ve.crossVectors(i, We)), Ve.normalize(), He.crossVectors(We, Ve), n[0] = Ve.x, n[4] = He.x, n[8] = We.x, n[1] = Ve.y, n[5] = He.y, n[9] = We.y, n[2] = Ve.z, n[6] = He.z, n[10] = We.z, this;
        }
        multiply(t1) {
            return this.multiplyMatrices(this, t1);
        }
        premultiply(t1) {
            return this.multiplyMatrices(t1, this);
        }
        multiplyMatrices(t1, e) {
            const i = t1.elements, n = e.elements, r = this.elements, s = i[0], a = i[4], o = i[8], l = i[12], c = i[1], h = i[5], u = i[9], d = i[13], p = i[2], m = i[6], f = i[10], g = i[14], v = i[3], x = i[7], _ = i[11], y = i[15], M = n[0], b = n[4], S = n[8], w = n[12], T = n[1], A = n[5], E = n[9], C = n[13], L = n[2], R = n[6], P = n[10], I = n[14], D = n[3], N = n[7], O = n[11], z = n[15];
            return r[0] = s * M + a * T + o * L + l * D, r[4] = s * b + a * A + o * R + l * N, r[8] = s * S + a * E + o * P + l * O, r[12] = s * w + a * C + o * I + l * z, r[1] = c * M + h * T + u * L + d * D, r[5] = c * b + h * A + u * R + d * N, r[9] = c * S + h * E + u * P + d * O, r[13] = c * w + h * C + u * I + d * z, r[2] = p * M + m * T + f * L + g * D, r[6] = p * b + m * A + f * R + g * N, r[10] = p * S + m * E + f * P + g * O, r[14] = p * w + m * C + f * I + g * z, r[3] = v * M + x * T + _ * L + y * D, r[7] = v * b + x * A + _ * R + y * N, r[11] = v * S + x * E + _ * P + y * O, r[15] = v * w + x * C + _ * I + y * z, this;
        }
        multiplyScalar(t1) {
            const e = this.elements;
            return e[0] *= t1, e[4] *= t1, e[8] *= t1, e[12] *= t1, e[1] *= t1, e[5] *= t1, e[9] *= t1, e[13] *= t1, e[2] *= t1, e[6] *= t1, e[10] *= t1, e[14] *= t1, e[3] *= t1, e[7] *= t1, e[11] *= t1, e[15] *= t1, this;
        }
        determinant() {
            const t1 = this.elements, e = t1[0], i = t1[4], n = t1[8], r = t1[12], s = t1[1], a = t1[5], o = t1[9], l = t1[13], c = t1[2], h = t1[6], u = t1[10], d = t1[14];
            return t1[3] * (+r * o * h - n * l * h - r * a * u + i * l * u + n * a * d - i * o * d) + t1[7] * (+e * o * d - e * l * u + r * s * u - n * s * d + n * l * c - r * o * c) + t1[11] * (+e * l * h - e * a * d - r * s * h + i * s * d + r * a * c - i * l * c) + t1[15] * (-n * a * c - e * o * h + e * a * u + n * s * h - i * s * u + i * o * c);
        }
        transpose() {
            const t1 = this.elements;
            let e;
            return e = t1[1], t1[1] = t1[4], t1[4] = e, e = t1[2], t1[2] = t1[8], t1[8] = e, e = t1[6], t1[6] = t1[9], t1[9] = e, e = t1[3], t1[3] = t1[12], t1[12] = e, e = t1[7], t1[7] = t1[13], t1[13] = e, e = t1[11], t1[11] = t1[14], t1[14] = e, this;
        }
        setPosition(t1, e, i) {
            const n = this.elements;
            return t1.isVector3 ? (n[12] = t1.x, n[13] = t1.y, n[14] = t1.z) : (n[12] = t1, n[13] = e, n[14] = i), this;
        }
        invert() {
            const t1 = this.elements, e = t1[0], i = t1[1], n = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8], h = t1[9], u = t1[10], d = t1[11], p = t1[12], m = t1[13], f = t1[14], g = t1[15], v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g, x = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g, _ = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g, y = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f, M = e * v + i * x + n * _ + r * y;
            if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const b = 1 / M;
            return t1[0] = v * b, t1[1] = (m * u * r - h * f * r - m * n * d + i * f * d + h * n * g - i * u * g) * b, t1[2] = (a * f * r - m * o * r + m * n * l - i * f * l - a * n * g + i * o * g) * b, t1[3] = (h * o * r - a * u * r - h * n * l + i * u * l + a * n * d - i * o * d) * b, t1[4] = x * b, t1[5] = (c * f * r - p * u * r + p * n * d - e * f * d - c * n * g + e * u * g) * b, t1[6] = (p * o * r - s * f * r - p * n * l + e * f * l + s * n * g - e * o * g) * b, t1[7] = (s * u * r - c * o * r + c * n * l - e * u * l - s * n * d + e * o * d) * b, t1[8] = _ * b, t1[9] = (p * h * r - c * m * r - p * i * d + e * m * d + c * i * g - e * h * g) * b, t1[10] = (s * m * r - p * a * r + p * i * l - e * m * l - s * i * g + e * a * g) * b, t1[11] = (c * a * r - s * h * r - c * i * l + e * h * l + s * i * d - e * a * d) * b, t1[12] = y * b, t1[13] = (c * m * n - p * h * n + p * i * u - e * m * u - c * i * f + e * h * f) * b, t1[14] = (p * a * n - s * m * n - p * i * o + e * m * o + s * i * f - e * a * f) * b, t1[15] = (s * h * n - c * a * n + c * i * o - e * h * o - s * i * u + e * a * u) * b, this;
        }
        scale(t1) {
            const e = this.elements, i = t1.x, n = t1.y, r = t1.z;
            return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this;
        }
        getMaxScaleOnAxis() {
            const t1 = this.elements, e = t1[0] * t1[0] + t1[1] * t1[1] + t1[2] * t1[2], i = t1[4] * t1[4] + t1[5] * t1[5] + t1[6] * t1[6], n = t1[8] * t1[8] + t1[9] * t1[9] + t1[10] * t1[10];
            return Math.sqrt(Math.max(e, i, n));
        }
        makeTranslation(t1, e, i) {
            return this.set(1, 0, 0, t1, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
        }
        makeRotationX(t1) {
            const e = Math.cos(t1), i = Math.sin(t1);
            return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t1) {
            const e = Math.cos(t1), i = Math.sin(t1);
            return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t1) {
            const e = Math.cos(t1), i = Math.sin(t1);
            return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t1, e) {
            const i = Math.cos(e), n = Math.sin(e), r = 1 - i, s = t1.x, a = t1.y, o = t1.z, l = r * s, c = r * a;
            return this.set(l * s + i, l * a - n * o, l * o + n * a, 0, l * a + n * o, c * a + i, c * o - n * s, 0, l * o - n * a, c * o + n * s, r * o * o + i, 0, 0, 0, 0, 1), this;
        }
        makeScale(t1, e, i) {
            return this.set(t1, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        }
        makeShear(t1, e, i, n, r, s) {
            return this.set(1, i, r, 0, t1, 1, s, 0, e, n, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t1, e, i) {
            const n = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l, d = r * c, p = r * h, m = s * c, f = s * h, g = a * h, v = o * l, x = o * c, _ = o * h, y = i.x, M = i.y, b = i.z;
            return n[0] = (1 - (m + g)) * y, n[1] = (d + _) * y, n[2] = (p - x) * y, n[3] = 0, n[4] = (d - _) * M, n[5] = (1 - (u + g)) * M, n[6] = (f + v) * M, n[7] = 0, n[8] = (p + x) * b, n[9] = (f - v) * b, n[10] = (1 - (u + m)) * b, n[11] = 0, n[12] = t1.x, n[13] = t1.y, n[14] = t1.z, n[15] = 1, this;
        }
        decompose(t1, e, i) {
            const n = this.elements;
            let r = Be.set(n[0], n[1], n[2]).length();
            const s = Be.set(n[4], n[5], n[6]).length(), a = Be.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (r = -r), t1.x = n[12], t1.y = n[13], t1.z = n[14], Fe.copy(this);
            const o = 1 / r, l = 1 / s, c = 1 / a;
            return Fe.elements[0] *= o, Fe.elements[1] *= o, Fe.elements[2] *= o, Fe.elements[4] *= l, Fe.elements[5] *= l, Fe.elements[6] *= l, Fe.elements[8] *= c, Fe.elements[9] *= c, Fe.elements[10] *= c, e.setFromRotationMatrix(Fe), i.x = r, i.y = s, i.z = a, this;
        }
        makePerspective(t1, e, i, n, r, s) {
            const a = this.elements, o = 2 * r / (e - t1), l = 2 * r / (i - n), c = (e + t1) / (e - t1), h = (i + n) / (i - n), u = -(s + r) / (s - r), d = -2 * s * r / (s - r);
            return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
        }
        makeOrthographic(t1, e, i, n, r, s) {
            const a = this.elements, o = 1 / (e - t1), l = 1 / (i - n), c = 1 / (s - r), h = (e + t1) * o, u = (i + n) * l, d = (s + r) * c;
            return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
        }
        equals(t1) {
            const e = this.elements, i = t1.elements;
            for(let t1 = 0; t1 < 16; t1++)if (e[t1] !== i[t1]) return !1;
            return !0;
        }
        fromArray(t1, e = 0) {
            for(let i = 0; i < 16; i++)this.elements[i] = t1[i + e];
            return this;
        }
        toArray(t1 = [], e = 0) {
            const i = this.elements;
            return t1[e] = i[0], t1[e + 1] = i[1], t1[e + 2] = i[2], t1[e + 3] = i[3], t1[e + 4] = i[4], t1[e + 5] = i[5], t1[e + 6] = i[6], t1[e + 7] = i[7], t1[e + 8] = i[8], t1[e + 9] = i[9], t1[e + 10] = i[10], t1[e + 11] = i[11], t1[e + 12] = i[12], t1[e + 13] = i[13], t1[e + 14] = i[14], t1[e + 15] = i[15], t1;
        }
    }
    const Be = new oe, Fe = new Ue, ke = new oe(0, 0, 0), Ge = new oe(1, 1, 1), Ve = new oe, He = new oe, We = new oe, je = new Ue, qe = new ae;
    class Xe {
        constructor(t1 = 0, e = 0, i = 0, n = Xe.DEFAULT_ORDER){
            this.isEuler = !0, this._x = t1, this._y = e, this._z = i, this._order = n;
        }
        get x() {
            return this._x;
        }
        set x(t1) {
            this._x = t1, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t1) {
            this._y = t1, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t1) {
            this._z = t1, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t1) {
            this._order = t1, this._onChangeCallback();
        }
        set(t1, e, i, n = this._order) {
            return this._x = t1, this._y = e, this._z = i, this._order = n, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t1) {
            return this._x = t1._x, this._y = t1._y, this._z = t1._z, this._order = t1._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t1, e = this._order, i = !0) {
            const n = t1.elements, r = n[0], s = n[4], a = n[8], o = n[1], l = n[5], c = n[9], h = n[2], u = n[6], d = n[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(St(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-St(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(St(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-St(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                    break;
                case "YZX":
                    this._z = Math.asin(St(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-St(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, !0 === i && this._onChangeCallback(), this;
        }
        setFromQuaternion(t1, e, i) {
            return je.makeRotationFromQuaternion(t1), this.setFromRotationMatrix(je, e, i);
        }
        setFromVector3(t1, e = this._order) {
            return this.set(t1.x, t1.y, t1.z, e);
        }
        reorder(t1) {
            return qe.setFromEuler(this), this.setFromQuaternion(qe, t1);
        }
        equals(t1) {
            return t1._x === this._x && t1._y === this._y && t1._z === this._z && t1._order === this._order;
        }
        fromArray(t1) {
            return this._x = t1[0], this._y = t1[1], this._z = t1[2], void 0 !== t1[3] && (this._order = t1[3]), this._onChangeCallback(), this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this._x, t1[e + 1] = this._y, t1[e + 2] = this._z, t1[e + 3] = this._order, t1;
        }
        _onChange(t1) {
            return this._onChangeCallback = t1, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
    }
    Xe.DEFAULT_ORDER = "XYZ";
    class Ye {
        constructor(){
            this.mask = 1;
        }
        set(t1) {
            this.mask = (1 << t1 | 0) >>> 0;
        }
        enable(t1) {
            this.mask |= 1 << t1 | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t1) {
            this.mask ^= 1 << t1 | 0;
        }
        disable(t1) {
            this.mask &= ~(1 << t1 | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t1) {
            return 0 != (this.mask & t1.mask);
        }
        isEnabled(t1) {
            return 0 != (this.mask & (1 << t1 | 0));
        }
    }
    let Ze = 0;
    const Je = new oe, Ke = new ae, $e = new Ue, Qe = new oe, ti = new oe, ei = new oe, ii = new ae, ni = new oe(1, 0, 0), ri = new oe(0, 1, 0), si = new oe(0, 0, 1), ai = {
        type: "added"
    }, oi = {
        type: "removed"
    };
    class li extends vt {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: Ze++
            }), this.uuid = bt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = li.DEFAULT_UP.clone();
            const t1 = new oe, e = new Xe, i = new ae, n = new oe(1, 1, 1);
            e._onChange(function() {
                i.setFromEuler(e, !1);
            }), i._onChange(function() {
                e.setFromQuaternion(i, void 0, !1);
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t1
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                modelViewMatrix: {
                    value: new Ue
                },
                normalMatrix: {
                    value: new Dt
                }
            }), this.matrix = new Ue, this.matrixWorld = new Ue, this.matrixAutoUpdate = li.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Ye, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t1) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t1), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t1) {
            return this.quaternion.premultiply(t1), this;
        }
        setRotationFromAxisAngle(t1, e) {
            this.quaternion.setFromAxisAngle(t1, e);
        }
        setRotationFromEuler(t1) {
            this.quaternion.setFromEuler(t1, !0);
        }
        setRotationFromMatrix(t1) {
            this.quaternion.setFromRotationMatrix(t1);
        }
        setRotationFromQuaternion(t1) {
            this.quaternion.copy(t1);
        }
        rotateOnAxis(t1, e) {
            return Ke.setFromAxisAngle(t1, e), this.quaternion.multiply(Ke), this;
        }
        rotateOnWorldAxis(t1, e) {
            return Ke.setFromAxisAngle(t1, e), this.quaternion.premultiply(Ke), this;
        }
        rotateX(t1) {
            return this.rotateOnAxis(ni, t1);
        }
        rotateY(t1) {
            return this.rotateOnAxis(ri, t1);
        }
        rotateZ(t1) {
            return this.rotateOnAxis(si, t1);
        }
        translateOnAxis(t1, e) {
            return Je.copy(t1).applyQuaternion(this.quaternion), this.position.add(Je.multiplyScalar(e)), this;
        }
        translateX(t1) {
            return this.translateOnAxis(ni, t1);
        }
        translateY(t1) {
            return this.translateOnAxis(ri, t1);
        }
        translateZ(t1) {
            return this.translateOnAxis(si, t1);
        }
        localToWorld(t1) {
            return this.updateWorldMatrix(!0, !1), t1.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t1) {
            return this.updateWorldMatrix(!0, !1), t1.applyMatrix4($e.copy(this.matrixWorld).invert());
        }
        lookAt(t1, e, i) {
            t1.isVector3 ? Qe.copy(t1) : Qe.set(t1, e, i);
            const n = this.parent;
            this.updateWorldMatrix(!0, !1), ti.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? $e.lookAt(ti, Qe, this.up) : $e.lookAt(Qe, ti, this.up), this.quaternion.setFromRotationMatrix($e), n && ($e.extractRotation(n.matrixWorld), Ke.setFromRotationMatrix($e), this.quaternion.premultiply(Ke.invert()));
        }
        add(t1) {
            if (arguments.length > 1) {
                for(let t1 = 0; t1 < arguments.length; t1++)this.add(arguments[t1]);
                return this;
            }
            return t1 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t1), this) : (t1 && t1.isObject3D ? (null !== t1.parent && t1.parent.remove(t1), t1.parent = this, this.children.push(t1), t1.dispatchEvent(ai)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t1), this);
        }
        remove(t1) {
            if (arguments.length > 1) {
                for(let t1 = 0; t1 < arguments.length; t1++)this.remove(arguments[t1]);
                return this;
            }
            const e = this.children.indexOf(t1);
            return -1 !== e && (t1.parent = null, this.children.splice(e, 1), t1.dispatchEvent(oi)), this;
        }
        removeFromParent() {
            const t1 = this.parent;
            return null !== t1 && t1.remove(this), this;
        }
        clear() {
            for(let t1 = 0; t1 < this.children.length; t1++){
                const e = this.children[t1];
                e.parent = null, e.dispatchEvent(oi);
            }
            return this.children.length = 0, this;
        }
        attach(t1) {
            return this.updateWorldMatrix(!0, !1), $e.copy(this.matrixWorld).invert(), null !== t1.parent && (t1.parent.updateWorldMatrix(!0, !1), $e.multiply(t1.parent.matrixWorld)), t1.applyMatrix4($e), this.add(t1), t1.updateWorldMatrix(!1, !0), this;
        }
        getObjectById(t1) {
            return this.getObjectByProperty("id", t1);
        }
        getObjectByName(t1) {
            return this.getObjectByProperty("name", t1);
        }
        getObjectByProperty(t1, e) {
            if (this[t1] === e) return this;
            for(let i = 0, n = this.children.length; i < n; i++){
                const n = this.children[i].getObjectByProperty(t1, e);
                if (void 0 !== n) return n;
            }
        }
        getObjectsByProperty(t1, e) {
            let i = [];
            this[t1] === e && i.push(this);
            for(let n = 0, r = this.children.length; n < r; n++){
                const r = this.children[n].getObjectsByProperty(t1, e);
                r.length > 0 && (i = i.concat(r));
            }
            return i;
        }
        getWorldPosition(t1) {
            return this.updateWorldMatrix(!0, !1), t1.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t1) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ti, t1, ei), t1;
        }
        getWorldScale(t1) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ti, ii, t1), t1;
        }
        getWorldDirection(t1) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t1.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t1) {
            t1(this);
            const e = this.children;
            for(let i = 0, n = e.length; i < n; i++)e[i].traverse(t1);
        }
        traverseVisible(t1) {
            if (!1 === this.visible) return;
            t1(this);
            const e = this.children;
            for(let i = 0, n = e.length; i < n; i++)e[i].traverseVisible(t1);
        }
        traverseAncestors(t1) {
            const e = this.parent;
            null !== e && (t1(e), e.traverseAncestors(t1));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t1) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t1) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t1 = !0);
            const e = this.children;
            for(let i = 0, n = e.length; i < n; i++){
                const n = e[i];
                !0 !== n.matrixWorldAutoUpdate && !0 !== t1 || n.updateMatrixWorld(t1);
            }
        }
        updateWorldMatrix(t1, e) {
            const i = this.parent;
            if (!0 === t1 && null !== i && !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
                const t1 = this.children;
                for(let e = 0, i = t1.length; e < i; e++){
                    const i = t1[e];
                    !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!1, !0);
                }
            }
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1, i = {};
            e && (t1 = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, i.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const n = {};
            function r(e, i) {
                return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t1)), i.uuid;
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(t1).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (n.environment = this.environment.toJSON(t1).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                n.geometry = r(t1.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const i = e.shapes;
                    if (Array.isArray(i)) for(let e = 0, n = i.length; e < n; e++){
                        const n = i[e];
                        r(t1.shapes, n);
                    }
                    else r(t1.shapes, i);
                }
            }
            if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t1.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                if (Array.isArray(this.material)) {
                    const e = [];
                    for(let i = 0, n = this.material.length; i < n; i++)e.push(r(t1.materials, this.material[i]));
                    n.material = e;
                } else n.material = r(t1.materials, this.material);
            }
            if (this.children.length > 0) {
                n.children = [];
                for(let e = 0; e < this.children.length; e++)n.children.push(this.children[e].toJSON(t1).object);
            }
            if (this.animations.length > 0) {
                n.animations = [];
                for(let e = 0; e < this.animations.length; e++){
                    const i = this.animations[e];
                    n.animations.push(r(t1.animations, i));
                }
            }
            if (e) {
                const e = s(t1.geometries), n = s(t1.materials), r = s(t1.textures), a = s(t1.images), o = s(t1.shapes), l = s(t1.skeletons), c = s(t1.animations), h = s(t1.nodes);
                e.length > 0 && (i.geometries = e), n.length > 0 && (i.materials = n), r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a), o.length > 0 && (i.shapes = o), l.length > 0 && (i.skeletons = l), c.length > 0 && (i.animations = c), h.length > 0 && (i.nodes = h);
            }
            return i.object = n, i;
            function s(t1) {
                const e = [];
                for(const i in t1){
                    const n = t1[i];
                    delete n.metadata, e.push(n);
                }
                return e;
            }
        }
        clone(t1) {
            return (new this.constructor).copy(this, t1);
        }
        copy(t1, e = !0) {
            if (this.name = t1.name, this.up.copy(t1.up), this.position.copy(t1.position), this.rotation.order = t1.rotation.order, this.quaternion.copy(t1.quaternion), this.scale.copy(t1.scale), this.matrix.copy(t1.matrix), this.matrixWorld.copy(t1.matrixWorld), this.matrixAutoUpdate = t1.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t1.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t1.matrixWorldAutoUpdate, this.layers.mask = t1.layers.mask, this.visible = t1.visible, this.castShadow = t1.castShadow, this.receiveShadow = t1.receiveShadow, this.frustumCulled = t1.frustumCulled, this.renderOrder = t1.renderOrder, this.userData = JSON.parse(JSON.stringify(t1.userData)), !0 === e) for(let e = 0; e < t1.children.length; e++){
                const i = t1.children[e];
                this.add(i.clone());
            }
            return this;
        }
    }
    li.DEFAULT_UP = new oe(0, 1, 0), li.DEFAULT_MATRIX_AUTO_UPDATE = !0, li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const ci = new oe, hi = new oe, ui = new oe, di = new oe, pi = new oe, mi = new oe, fi = new oe, gi = new oe, vi = new oe, xi = new oe;
    class _i {
        constructor(t1 = new oe, e = new oe, i = new oe){
            this.a = t1, this.b = e, this.c = i;
        }
        static getNormal(t1, e, i, n) {
            n.subVectors(i, e), ci.subVectors(t1, e), n.cross(ci);
            const r = n.lengthSq();
            return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
        }
        static getBarycoord(t1, e, i, n, r) {
            ci.subVectors(n, e), hi.subVectors(i, e), ui.subVectors(t1, e);
            const s = ci.dot(ci), a = ci.dot(hi), o = ci.dot(ui), l = hi.dot(hi), c = hi.dot(ui), h = s * l - a * a;
            if (0 === h) return r.set(-2, -1, -1);
            const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d);
        }
        static containsPoint(t1, e, i, n) {
            return this.getBarycoord(t1, e, i, n, di), di.x >= 0 && di.y >= 0 && di.x + di.y <= 1;
        }
        static getUV(t1, e, i, n, r, s, a, o) {
            return this.getBarycoord(t1, e, i, n, di), o.set(0, 0), o.addScaledVector(r, di.x), o.addScaledVector(s, di.y), o.addScaledVector(a, di.z), o;
        }
        static isFrontFacing(t1, e, i, n) {
            return ci.subVectors(i, e), hi.subVectors(t1, e), ci.cross(hi).dot(n) < 0;
        }
        set(t1, e, i) {
            return this.a.copy(t1), this.b.copy(e), this.c.copy(i), this;
        }
        setFromPointsAndIndices(t1, e, i, n) {
            return this.a.copy(t1[e]), this.b.copy(t1[i]), this.c.copy(t1[n]), this;
        }
        setFromAttributeAndIndices(t1, e, i, n) {
            return this.a.fromBufferAttribute(t1, e), this.b.fromBufferAttribute(t1, i), this.c.fromBufferAttribute(t1, n), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.a.copy(t1.a), this.b.copy(t1.b), this.c.copy(t1.c), this;
        }
        getArea() {
            return ci.subVectors(this.c, this.b), hi.subVectors(this.a, this.b), .5 * ci.cross(hi).length();
        }
        getMidpoint(t1) {
            return t1.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t1) {
            return _i.getNormal(this.a, this.b, this.c, t1);
        }
        getPlane(t1) {
            return t1.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t1, e) {
            return _i.getBarycoord(t1, this.a, this.b, this.c, e);
        }
        getUV(t1, e, i, n, r) {
            return _i.getUV(t1, this.a, this.b, this.c, e, i, n, r);
        }
        containsPoint(t1) {
            return _i.containsPoint(t1, this.a, this.b, this.c);
        }
        isFrontFacing(t1) {
            return _i.isFrontFacing(this.a, this.b, this.c, t1);
        }
        intersectsBox(t1) {
            return t1.intersectsTriangle(this);
        }
        closestPointToPoint(t1, e) {
            const i = this.a, n = this.b, r = this.c;
            let s, a;
            pi.subVectors(n, i), mi.subVectors(r, i), gi.subVectors(t1, i);
            const o = pi.dot(gi), l = mi.dot(gi);
            if (o <= 0 && l <= 0) return e.copy(i);
            vi.subVectors(t1, n);
            const c = pi.dot(vi), h = mi.dot(vi);
            if (c >= 0 && h <= c) return e.copy(n);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(i).addScaledVector(pi, s);
            xi.subVectors(t1, r);
            const d = pi.dot(xi), p = mi.dot(xi);
            if (p >= 0 && d <= p) return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(i).addScaledVector(mi, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0) return fi.subVectors(r, n), a = (h - c) / (h - c + (d - p)), e.copy(n).addScaledVector(fi, a);
            const g = 1 / (f + m + u);
            return s = m * g, a = u * g, e.copy(i).addScaledVector(pi, s).addScaledVector(mi, a);
        }
        equals(t1) {
            return t1.a.equals(this.a) && t1.b.equals(this.b) && t1.c.equals(this.c);
        }
    }
    let yi = 0;
    class Mi extends vt {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: yi++
            }), this.uuid = bt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = i, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = pt, this.stencilZFail = pt, this.stencilZPass = pt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(t1) {
            this._alphaTest > 0 != t1 > 0 && this.version++, this._alphaTest = t1;
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t1) {
            if (void 0 !== t1) for(const e in t1){
                const i = t1[e];
                if (void 0 === i) {
                    console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    continue;
                }
                const n = this[e];
                void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
            }
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            e && (t1 = {
                textures: {},
                images: {}
            });
            const i = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function n(t1) {
                const e = [];
                for(const i in t1){
                    const n = t1[i];
                    delete n.metadata, e.push(n);
                }
                return e;
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), void 0 !== this.sheen && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t1).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t1).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t1).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t1).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t1).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t1).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t1).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t1).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t1).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t1).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t1).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t1).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t1).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t1).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t1).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t1).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t1).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t1).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t1).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t1).uuid, void 0 !== this.combine && (i.combine = this.combine)), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t1).uuid), void 0 !== this.transmission && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t1).uuid), void 0 !== this.thickness && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t1).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), 0 !== this.side && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.forceSinglePass && (i.forceSinglePass = this.forceSinglePass), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), !1 === this.fog && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData), e) {
                const e = n(t1.textures), r = n(t1.images);
                e.length > 0 && (i.textures = e), r.length > 0 && (i.images = r);
            }
            return i;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.name = t1.name, this.blending = t1.blending, this.side = t1.side, this.vertexColors = t1.vertexColors, this.opacity = t1.opacity, this.transparent = t1.transparent, this.blendSrc = t1.blendSrc, this.blendDst = t1.blendDst, this.blendEquation = t1.blendEquation, this.blendSrcAlpha = t1.blendSrcAlpha, this.blendDstAlpha = t1.blendDstAlpha, this.blendEquationAlpha = t1.blendEquationAlpha, this.depthFunc = t1.depthFunc, this.depthTest = t1.depthTest, this.depthWrite = t1.depthWrite, this.stencilWriteMask = t1.stencilWriteMask, this.stencilFunc = t1.stencilFunc, this.stencilRef = t1.stencilRef, this.stencilFuncMask = t1.stencilFuncMask, this.stencilFail = t1.stencilFail, this.stencilZFail = t1.stencilZFail, this.stencilZPass = t1.stencilZPass, this.stencilWrite = t1.stencilWrite;
            const e = t1.clippingPlanes;
            let i = null;
            if (null !== e) {
                const t1 = e.length;
                i = new Array(t1);
                for(let n = 0; n !== t1; ++n)i[n] = e[n].clone();
            }
            return this.clippingPlanes = i, this.clipIntersection = t1.clipIntersection, this.clipShadows = t1.clipShadows, this.shadowSide = t1.shadowSide, this.colorWrite = t1.colorWrite, this.precision = t1.precision, this.polygonOffset = t1.polygonOffset, this.polygonOffsetFactor = t1.polygonOffsetFactor, this.polygonOffsetUnits = t1.polygonOffsetUnits, this.dithering = t1.dithering, this.alphaTest = t1.alphaTest, this.alphaToCoverage = t1.alphaToCoverage, this.premultipliedAlpha = t1.premultipliedAlpha, this.forceSinglePass = t1.forceSinglePass, this.visible = t1.visible, this.toneMapped = t1.toneMapped, this.userData = JSON.parse(JSON.stringify(t1.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
    }
    class bi extends Mi {
        constructor(t1){
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Zt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.fog = t1.fog, this;
        }
    }
    const Si = new oe, wi = new It;
    class Ti {
        constructor(t1, e, i = !1){
            if (Array.isArray(t1)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, this.name = "", this.array = t1, this.itemSize = e, this.count = void 0 !== t1 ? t1.length / e : 0, this.normalized = i, this.usage = mt, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        copy(t1) {
            return this.name = t1.name, this.array = new t1.array.constructor(t1.array), this.itemSize = t1.itemSize, this.count = t1.count, this.normalized = t1.normalized, this.usage = t1.usage, this;
        }
        copyAt(t1, e, i) {
            t1 *= this.itemSize, i *= e.itemSize;
            for(let n = 0, r = this.itemSize; n < r; n++)this.array[t1 + n] = e.array[i + n];
            return this;
        }
        copyArray(t1) {
            return this.array.set(t1), this;
        }
        applyMatrix3(t1) {
            if (2 === this.itemSize) for(let e = 0, i = this.count; e < i; e++)wi.fromBufferAttribute(this, e), wi.applyMatrix3(t1), this.setXY(e, wi.x, wi.y);
            else if (3 === this.itemSize) for(let e = 0, i = this.count; e < i; e++)Si.fromBufferAttribute(this, e), Si.applyMatrix3(t1), this.setXYZ(e, Si.x, Si.y, Si.z);
            return this;
        }
        applyMatrix4(t1) {
            for(let e = 0, i = this.count; e < i; e++)Si.fromBufferAttribute(this, e), Si.applyMatrix4(t1), this.setXYZ(e, Si.x, Si.y, Si.z);
            return this;
        }
        applyNormalMatrix(t1) {
            for(let e = 0, i = this.count; e < i; e++)Si.fromBufferAttribute(this, e), Si.applyNormalMatrix(t1), this.setXYZ(e, Si.x, Si.y, Si.z);
            return this;
        }
        transformDirection(t1) {
            for(let e = 0, i = this.count; e < i; e++)Si.fromBufferAttribute(this, e), Si.transformDirection(t1), this.setXYZ(e, Si.x, Si.y, Si.z);
            return this;
        }
        set(t1, e = 0) {
            return this.array.set(t1, e), this;
        }
        getX(t1) {
            let e = this.array[t1 * this.itemSize];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        setX(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.array[t1 * this.itemSize] = e, this;
        }
        getY(t1) {
            let e = this.array[t1 * this.itemSize + 1];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        setY(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.array[t1 * this.itemSize + 1] = e, this;
        }
        getZ(t1) {
            let e = this.array[t1 * this.itemSize + 2];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        setZ(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.array[t1 * this.itemSize + 2] = e, this;
        }
        getW(t1) {
            let e = this.array[t1 * this.itemSize + 3];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        setW(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.array[t1 * this.itemSize + 3] = e, this;
        }
        setXY(t1, e, i) {
            return t1 *= this.itemSize, this.normalized && (e = Rt(e, this.array), i = Rt(i, this.array)), this.array[t1 + 0] = e, this.array[t1 + 1] = i, this;
        }
        setXYZ(t1, e, i, n) {
            return t1 *= this.itemSize, this.normalized && (e = Rt(e, this.array), i = Rt(i, this.array), n = Rt(n, this.array)), this.array[t1 + 0] = e, this.array[t1 + 1] = i, this.array[t1 + 2] = n, this;
        }
        setXYZW(t1, e, i, n, r) {
            return t1 *= this.itemSize, this.normalized && (e = Rt(e, this.array), i = Rt(i, this.array), n = Rt(n, this.array), r = Rt(r, this.array)), this.array[t1 + 0] = e, this.array[t1 + 1] = i, this.array[t1 + 2] = n, this.array[t1 + 3] = r, this;
        }
        onUpload(t1) {
            return this.onUploadCallback = t1, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t1 = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.from(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t1.name = this.name), this.usage !== mt && (t1.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t1.updateRange = this.updateRange), t1;
        }
        copyColorsArray() {
            console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
        }
        copyVector2sArray() {
            console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
        }
        copyVector3sArray() {
            console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
        }
        copyVector4sArray() {
            console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
        }
    }
    class Ai extends Ti {
        constructor(t1, e, i){
            super(new Uint16Array(t1), e, i);
        }
    }
    class Ei extends Ti {
        constructor(t1, e, i){
            super(new Uint32Array(t1), e, i);
        }
    }
    class Ci extends Ti {
        constructor(t1, e, i){
            super(new Float32Array(t1), e, i);
        }
    }
    let Li = 0;
    const Ri = new Ue, Pi = new li, Ii = new oe, Di = new he, Ni = new he, Oi = new oe;
    class zi extends vt {
        constructor(){
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: Li++
            }), this.uuid = bt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(t1) {
            return Array.isArray(t1) ? this.index = new (Ot(t1) ? Ei : Ai)(t1, 1) : this.index = t1, this;
        }
        getAttribute(t1) {
            return this.attributes[t1];
        }
        setAttribute(t1, e) {
            return this.attributes[t1] = e, this;
        }
        deleteAttribute(t1) {
            return delete this.attributes[t1], this;
        }
        hasAttribute(t1) {
            return void 0 !== this.attributes[t1];
        }
        addGroup(t1, e, i = 0) {
            this.groups.push({
                start: t1,
                count: e,
                materialIndex: i
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t1, e) {
            this.drawRange.start = t1, this.drawRange.count = e;
        }
        applyMatrix4(t1) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t1), e.needsUpdate = !0);
            const i = this.attributes.normal;
            if (void 0 !== i) {
                const e = (new Dt).getNormalMatrix(t1);
                i.applyNormalMatrix(e), i.needsUpdate = !0;
            }
            const n = this.attributes.tangent;
            return void 0 !== n && (n.transformDirection(t1), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t1) {
            return Ri.makeRotationFromQuaternion(t1), this.applyMatrix4(Ri), this;
        }
        rotateX(t1) {
            return Ri.makeRotationX(t1), this.applyMatrix4(Ri), this;
        }
        rotateY(t1) {
            return Ri.makeRotationY(t1), this.applyMatrix4(Ri), this;
        }
        rotateZ(t1) {
            return Ri.makeRotationZ(t1), this.applyMatrix4(Ri), this;
        }
        translate(t1, e, i) {
            return Ri.makeTranslation(t1, e, i), this.applyMatrix4(Ri), this;
        }
        scale(t1, e, i) {
            return Ri.makeScale(t1, e, i), this.applyMatrix4(Ri), this;
        }
        lookAt(t1) {
            return Pi.lookAt(t1), Pi.updateMatrix(), this.applyMatrix4(Pi.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Ii).negate(), this.translate(Ii.x, Ii.y, Ii.z), this;
        }
        setFromPoints(t1) {
            const e = [];
            for(let i = 0, n = t1.length; i < n; i++){
                const n = t1[i];
                e.push(n.x, n.y, n.z || 0);
            }
            return this.setAttribute("position", new Ci(e, 3)), this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new he);
            const t1 = this.attributes.position, e = this.morphAttributes.position;
            if (t1 && t1.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new oe(-1 / 0, -1 / 0, -1 / 0), new oe(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t1) {
                if (this.boundingBox.setFromBufferAttribute(t1), e) for(let t1 = 0, i = e.length; t1 < i; t1++){
                    const i = e[t1];
                    Di.setFromBufferAttribute(i), this.morphTargetsRelative ? (Oi.addVectors(this.boundingBox.min, Di.min), this.boundingBox.expandByPoint(Oi), Oi.addVectors(this.boundingBox.max, Di.max), this.boundingBox.expandByPoint(Oi)) : (this.boundingBox.expandByPoint(Di.min), this.boundingBox.expandByPoint(Di.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new Ce);
            const t1 = this.attributes.position, e = this.morphAttributes.position;
            if (t1 && t1.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new oe, 1 / 0);
            if (t1) {
                const i = this.boundingSphere.center;
                if (Di.setFromBufferAttribute(t1), e) for(let t1 = 0, i = e.length; t1 < i; t1++){
                    const i = e[t1];
                    Ni.setFromBufferAttribute(i), this.morphTargetsRelative ? (Oi.addVectors(Di.min, Ni.min), Di.expandByPoint(Oi), Oi.addVectors(Di.max, Ni.max), Di.expandByPoint(Oi)) : (Di.expandByPoint(Ni.min), Di.expandByPoint(Ni.max));
                }
                Di.getCenter(i);
                let n = 0;
                for(let e = 0, r = t1.count; e < r; e++)Oi.fromBufferAttribute(t1, e), n = Math.max(n, i.distanceToSquared(Oi));
                if (e) for(let r = 0, s = e.length; r < s; r++){
                    const s = e[r], a = this.morphTargetsRelative;
                    for(let e = 0, r = s.count; e < r; e++)Oi.fromBufferAttribute(s, e), a && (Ii.fromBufferAttribute(t1, e), Oi.add(Ii)), n = Math.max(n, i.distanceToSquared(Oi));
                }
                this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeTangents() {
            const t1 = this.index, e = this.attributes;
            if (null === t1 || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const i = t1.array, n = e.position.array, r = e.normal.array, s = e.uv.array, a = n.length / 3;
            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Ti(new Float32Array(4 * a), 4));
            const o = this.getAttribute("tangent").array, l = [], c = [];
            for(let t1 = 0; t1 < a; t1++)l[t1] = new oe, c[t1] = new oe;
            const h = new oe, u = new oe, d = new oe, p = new It, m = new It, f = new It, g = new oe, v = new oe;
            function x(t1, e, i) {
                h.fromArray(n, 3 * t1), u.fromArray(n, 3 * e), d.fromArray(n, 3 * i), p.fromArray(s, 2 * t1), m.fromArray(s, 2 * e), f.fromArray(s, 2 * i), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t1].add(g), l[e].add(g), l[i].add(g), c[t1].add(v), c[e].add(v), c[i].add(v));
            }
            let _ = this.groups;
            0 === _.length && (_ = [
                {
                    start: 0,
                    count: i.length
                }
            ]);
            for(let t1 = 0, e = _.length; t1 < e; ++t1){
                const e = _[t1], n = e.start;
                for(let t1 = n, r = n + e.count; t1 < r; t1 += 3)x(i[t1 + 0], i[t1 + 1], i[t1 + 2]);
            }
            const y = new oe, M = new oe, b = new oe, S = new oe;
            function w(t1) {
                b.fromArray(r, 3 * t1), S.copy(b);
                const e = l[t1];
                y.copy(e), y.sub(b.multiplyScalar(b.dot(e))).normalize(), M.crossVectors(S, e);
                const i = M.dot(c[t1]) < 0 ? -1 : 1;
                o[4 * t1] = y.x, o[4 * t1 + 1] = y.y, o[4 * t1 + 2] = y.z, o[4 * t1 + 3] = i;
            }
            for(let t1 = 0, e = _.length; t1 < e; ++t1){
                const e = _[t1], n = e.start;
                for(let t1 = n, r = n + e.count; t1 < r; t1 += 3)w(i[t1 + 0]), w(i[t1 + 1]), w(i[t1 + 2]);
            }
        }
        computeVertexNormals() {
            const t1 = this.index, e = this.getAttribute("position");
            if (void 0 !== e) {
                let i = this.getAttribute("normal");
                if (void 0 === i) i = new Ti(new Float32Array(3 * e.count), 3), this.setAttribute("normal", i);
                else for(let t1 = 0, e = i.count; t1 < e; t1++)i.setXYZ(t1, 0, 0, 0);
                const n = new oe, r = new oe, s = new oe, a = new oe, o = new oe, l = new oe, c = new oe, h = new oe;
                if (t1) for(let u = 0, d = t1.count; u < d; u += 3){
                    const d = t1.getX(u + 0), p = t1.getX(u + 1), m = t1.getX(u + 2);
                    n.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), a.fromBufferAttribute(i, d), o.fromBufferAttribute(i, p), l.fromBufferAttribute(i, m), a.add(c), o.add(c), l.add(c), i.setXYZ(d, a.x, a.y, a.z), i.setXYZ(p, o.x, o.y, o.z), i.setXYZ(m, l.x, l.y, l.z);
                }
                else for(let t1 = 0, a = e.count; t1 < a; t1 += 3)n.fromBufferAttribute(e, t1 + 0), r.fromBufferAttribute(e, t1 + 1), s.fromBufferAttribute(e, t1 + 2), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), i.setXYZ(t1 + 0, c.x, c.y, c.z), i.setXYZ(t1 + 1, c.x, c.y, c.z), i.setXYZ(t1 + 2, c.x, c.y, c.z);
                this.normalizeNormals(), i.needsUpdate = !0;
            }
        }
        merge() {
            return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
        }
        normalizeNormals() {
            const t1 = this.attributes.normal;
            for(let e = 0, i = t1.count; e < i; e++)Oi.fromBufferAttribute(t1, e), Oi.normalize(), t1.setXYZ(e, Oi.x, Oi.y, Oi.z);
        }
        toNonIndexed() {
            function t1(t1, e) {
                const i = t1.array, n = t1.itemSize, r = t1.normalized, s = new i.constructor(e.length * n);
                let a = 0, o = 0;
                for(let r = 0, l = e.length; r < l; r++){
                    a = t1.isInterleavedBufferAttribute ? e[r] * t1.data.stride + t1.offset : e[r] * n;
                    for(let t1 = 0; t1 < n; t1++)s[o++] = i[a++];
                }
                return new Ti(s, n, r);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e = new zi, i = this.index.array, n = this.attributes;
            for(const r in n){
                const s = t1(n[r], i);
                e.setAttribute(r, s);
            }
            const r = this.morphAttributes;
            for(const n in r){
                const s = [], a = r[n];
                for(let e = 0, n = a.length; e < n; e++){
                    const n = t1(a[e], i);
                    s.push(n);
                }
                e.morphAttributes[n] = s;
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const s = this.groups;
            for(let t1 = 0, i = s.length; t1 < i; t1++){
                const i = s[t1];
                e.addGroup(i.start, i.count, i.materialIndex);
            }
            return e;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t1.uuid = this.uuid, t1.type = this.type, "" !== this.name && (t1.name = this.name), Object.keys(this.userData).length > 0 && (t1.userData = this.userData), void 0 !== this.parameters) {
                const e = this.parameters;
                for(const i in e)void 0 !== e[i] && (t1[i] = e[i]);
                return t1;
            }
            t1.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t1.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const i = this.attributes;
            for(const e in i){
                const n = i[e];
                t1.data.attributes[e] = n.toJSON(t1.data);
            }
            const n = {};
            let r = !1;
            for(const e in this.morphAttributes){
                const i = this.morphAttributes[e], s = [];
                for(let e = 0, n = i.length; e < n; e++){
                    const n = i[e];
                    s.push(n.toJSON(t1.data));
                }
                s.length > 0 && (n[e] = s, r = !0);
            }
            r && (t1.data.morphAttributes = n, t1.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t1.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t1.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }), t1;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t1.name;
            const i = t1.index;
            null !== i && this.setIndex(i.clone(e));
            const n = t1.attributes;
            for(const t1 in n){
                const i = n[t1];
                this.setAttribute(t1, i.clone(e));
            }
            const r = t1.morphAttributes;
            for(const t1 in r){
                const i = [], n = r[t1];
                for(let t1 = 0, r = n.length; t1 < r; t1++)i.push(n[t1].clone(e));
                this.morphAttributes[t1] = i;
            }
            this.morphTargetsRelative = t1.morphTargetsRelative;
            const s = t1.groups;
            for(let t1 = 0, e = s.length; t1 < e; t1++){
                const e = s[t1];
                this.addGroup(e.start, e.count, e.materialIndex);
            }
            const a = t1.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t1.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t1.drawRange.start, this.drawRange.count = t1.drawRange.count, this.userData = t1.userData, void 0 !== t1.parameters && (this.parameters = Object.assign({}, t1.parameters)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    const Ui = new Ue, Bi = new ze, Fi = new Ce, ki = new oe, Gi = new oe, Vi = new oe, Hi = new oe, Wi = new oe, ji = new It, qi = new It, Xi = new It, Yi = new oe, Zi = new oe;
    class Ji extends li {
        constructor(t1 = new zi, e = new bi){
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1, e) {
            return super.copy(t1, e), void 0 !== t1.morphTargetInfluences && (this.morphTargetInfluences = t1.morphTargetInfluences.slice()), void 0 !== t1.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t1.morphTargetDictionary)), this.material = t1.material, this.geometry = t1.geometry, this;
        }
        updateMorphTargets() {
            const t1 = this.geometry.morphAttributes, e = Object.keys(t1);
            if (e.length > 0) {
                const i = t1[e[0]];
                if (void 0 !== i) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t1 = 0, e = i.length; t1 < e; t1++){
                        const e = i[t1].name || String(t1);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t1;
                    }
                }
            }
        }
        getVertexPosition(t1, e) {
            const i = this.geometry, n = i.attributes.position, r = i.morphAttributes.position, s = i.morphTargetsRelative;
            e.fromBufferAttribute(n, t1);
            const a = this.morphTargetInfluences;
            if (r && a) {
                Wi.set(0, 0, 0);
                for(let i = 0, n = r.length; i < n; i++){
                    const n = a[i], o = r[i];
                    0 !== n && (Hi.fromBufferAttribute(o, t1), s ? Wi.addScaledVector(Hi, n) : Wi.addScaledVector(Hi.sub(e), n));
                }
                e.add(Wi);
            }
            return this.isSkinnedMesh && this.boneTransform(t1, e), e;
        }
        raycast(t1, e) {
            const i = this.geometry, n = this.material, r = this.matrixWorld;
            if (void 0 === n) return;
            if (null === i.boundingSphere && i.computeBoundingSphere(), Fi.copy(i.boundingSphere), Fi.applyMatrix4(r), !1 === t1.ray.intersectsSphere(Fi)) return;
            if (Ui.copy(r).invert(), Bi.copy(t1.ray).applyMatrix4(Ui), null !== i.boundingBox && !1 === Bi.intersectsBox(i.boundingBox)) return;
            let s;
            const a = i.index, o = i.attributes.position, l = i.attributes.uv, c = i.attributes.uv2, h = i.groups, u = i.drawRange;
            if (null !== a) {
                if (Array.isArray(n)) for(let i = 0, r = h.length; i < r; i++){
                    const r = h[i], o = n[r.materialIndex];
                    for(let i = Math.max(r.start, u.start), n = Math.min(a.count, Math.min(r.start + r.count, u.start + u.count)); i < n; i += 3){
                        const n = a.getX(i), h = a.getX(i + 1), u = a.getX(i + 2);
                        s = Ki(this, o, t1, Bi, l, c, n, h, u), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                    }
                }
                else for(let i = Math.max(0, u.start), r = Math.min(a.count, u.start + u.count); i < r; i += 3){
                    const r = a.getX(i), o = a.getX(i + 1), h = a.getX(i + 2);
                    s = Ki(this, n, t1, Bi, l, c, r, o, h), s && (s.faceIndex = Math.floor(i / 3), e.push(s));
                }
            } else if (void 0 !== o) {
                if (Array.isArray(n)) for(let i = 0, r = h.length; i < r; i++){
                    const r = h[i], a = n[r.materialIndex];
                    for(let i = Math.max(r.start, u.start), n = Math.min(o.count, Math.min(r.start + r.count, u.start + u.count)); i < n; i += 3)s = Ki(this, a, t1, Bi, l, c, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                }
                else for(let i = Math.max(0, u.start), r = Math.min(o.count, u.start + u.count); i < r; i += 3)s = Ki(this, n, t1, Bi, l, c, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), e.push(s));
            }
        }
    }
    function Ki(t1, e, i, n, r, s, a, o, l) {
        t1.getVertexPosition(a, ki), t1.getVertexPosition(o, Gi), t1.getVertexPosition(l, Vi);
        const c = function(t1, e, i, n, r, s, a, o) {
            let l;
            if (l = 1 === e.side ? n.intersectTriangle(a, s, r, !0, o) : n.intersectTriangle(r, s, a, 0 === e.side, o), null === l) return null;
            Zi.copy(o), Zi.applyMatrix4(t1.matrixWorld);
            const c = i.ray.origin.distanceTo(Zi);
            return c < i.near || c > i.far ? null : {
                distance: c,
                point: Zi.clone(),
                object: t1
            };
        }(t1, e, i, n, ki, Gi, Vi, Yi);
        if (c) {
            r && (ji.fromBufferAttribute(r, a), qi.fromBufferAttribute(r, o), Xi.fromBufferAttribute(r, l), c.uv = _i.getUV(Yi, ki, Gi, Vi, ji, qi, Xi, new It)), s && (ji.fromBufferAttribute(s, a), qi.fromBufferAttribute(s, o), Xi.fromBufferAttribute(s, l), c.uv2 = _i.getUV(Yi, ki, Gi, Vi, ji, qi, Xi, new It));
            const t1 = {
                a: a,
                b: o,
                c: l,
                normal: new oe,
                materialIndex: 0
            };
            _i.getNormal(ki, Gi, Vi, t1.normal), c.face = t1;
        }
        return c;
    }
    class $i extends zi {
        constructor(t1 = 1, e = 1, i = 1, n = 1, r = 1, s = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t1,
                height: e,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: s
            };
            const a = this;
            n = Math.floor(n), r = Math.floor(r), s = Math.floor(s);
            const o = [], l = [], c = [], h = [];
            let u = 0, d = 0;
            function p(t1, e, i, n, r, s, p, m, f, g, v) {
                const x = s / f, _ = p / g, y = s / 2, M = p / 2, b = m / 2, S = f + 1, w = g + 1;
                let T = 0, A = 0;
                const E = new oe;
                for(let s = 0; s < w; s++){
                    const a = s * _ - M;
                    for(let o = 0; o < S; o++){
                        const u = o * x - y;
                        E[t1] = u * n, E[e] = a * r, E[i] = b, l.push(E.x, E.y, E.z), E[t1] = 0, E[e] = 0, E[i] = m > 0 ? 1 : -1, c.push(E.x, E.y, E.z), h.push(o / f), h.push(1 - s / g), T += 1;
                    }
                }
                for(let t1 = 0; t1 < g; t1++)for(let e = 0; e < f; e++){
                    const i = u + e + S * t1, n = u + e + S * (t1 + 1), r = u + (e + 1) + S * (t1 + 1), s = u + (e + 1) + S * t1;
                    o.push(i, n, s), o.push(n, r, s), A += 6;
                }
                a.addGroup(d, A, v), d += A, u += T;
            }
            p("z", "y", "x", -1, -1, i, e, t1, s, r, 0), p("z", "y", "x", 1, -1, i, e, -t1, s, r, 1), p("x", "z", "y", 1, 1, t1, i, e, n, s, 2), p("x", "z", "y", 1, -1, t1, i, -e, n, s, 3), p("x", "y", "z", 1, -1, t1, e, i, n, r, 4), p("x", "y", "z", -1, -1, t1, e, -i, n, r, 5), this.setIndex(o), this.setAttribute("position", new Ci(l, 3)), this.setAttribute("normal", new Ci(c, 3)), this.setAttribute("uv", new Ci(h, 2));
        }
        static fromJSON(t1) {
            return new $i(t1.width, t1.height, t1.depth, t1.widthSegments, t1.heightSegments, t1.depthSegments);
        }
    }
    function Qi(t1) {
        const e = {};
        for(const i in t1){
            e[i] = {};
            for(const n in t1[i]){
                const r = t1[i][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r;
            }
        }
        return e;
    }
    function tn(t1) {
        const e = {};
        for(let i = 0; i < t1.length; i++){
            const n = Qi(t1[i]);
            for(const t1 in n)e[t1] = n[t1];
        }
        return e;
    }
    function en(t1) {
        return null === t1.getRenderTarget() && t1.outputEncoding === ht ? ut : dt;
    }
    const nn = {
        clone: Qi,
        merge: tn
    };
    class rn extends Mi {
        constructor(t1){
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv2: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t1 && this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.fragmentShader = t1.fragmentShader, this.vertexShader = t1.vertexShader, this.uniforms = Qi(t1.uniforms), this.uniformsGroups = function(t1) {
                const e = [];
                for(let i = 0; i < t1.length; i++)e.push(t1[i].clone());
                return e;
            }(t1.uniformsGroups), this.defines = Object.assign({}, t1.defines), this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.fog = t1.fog, this.lights = t1.lights, this.clipping = t1.clipping, this.extensions = Object.assign({}, t1.extensions), this.glslVersion = t1.glslVersion, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for(const i in this.uniforms){
                const n = this.uniforms[i].value;
                n && n.isTexture ? e.uniforms[i] = {
                    type: "t",
                    value: n.toJSON(t1).uuid
                } : n && n.isColor ? e.uniforms[i] = {
                    type: "c",
                    value: n.getHex()
                } : n && n.isVector2 ? e.uniforms[i] = {
                    type: "v2",
                    value: n.toArray()
                } : n && n.isVector3 ? e.uniforms[i] = {
                    type: "v3",
                    value: n.toArray()
                } : n && n.isVector4 ? e.uniforms[i] = {
                    type: "v4",
                    value: n.toArray()
                } : n && n.isMatrix3 ? e.uniforms[i] = {
                    type: "m3",
                    value: n.toArray()
                } : n && n.isMatrix4 ? e.uniforms[i] = {
                    type: "m4",
                    value: n.toArray()
                } : e.uniforms[i] = {
                    value: n
                };
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
            const i = {};
            for(const t1 in this.extensions)!0 === this.extensions[t1] && (i[t1] = !0);
            return Object.keys(i).length > 0 && (e.extensions = i), e;
        }
    }
    class sn extends li {
        constructor(){
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ue, this.projectionMatrix = new Ue, this.projectionMatrixInverse = new Ue;
        }
        copy(t1, e) {
            return super.copy(t1, e), this.matrixWorldInverse.copy(t1.matrixWorldInverse), this.projectionMatrix.copy(t1.projectionMatrix), this.projectionMatrixInverse.copy(t1.projectionMatrixInverse), this;
        }
        getWorldDirection(t1) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t1.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t1, e) {
            super.updateWorldMatrix(t1, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class an extends sn {
        constructor(t1 = 50, e = 1, i = .1, n = 2e3){
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t1, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.fov = t1.fov, this.zoom = t1.zoom, this.near = t1.near, this.far = t1.far, this.focus = t1.focus, this.aspect = t1.aspect, this.view = null === t1.view ? null : Object.assign({}, t1.view), this.filmGauge = t1.filmGauge, this.filmOffset = t1.filmOffset, this;
        }
        setFocalLength(t1) {
            const e = .5 * this.getFilmHeight() / t1;
            this.fov = 2 * Mt * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t1 = Math.tan(.5 * yt * this.fov);
            return .5 * this.getFilmHeight() / t1;
        }
        getEffectiveFOV() {
            return 2 * Mt * Math.atan(Math.tan(.5 * yt * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t1, e, i, n, r, s) {
            this.aspect = t1 / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t1, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t1 = this.near;
            let e = t1 * Math.tan(.5 * yt * this.fov) / this.zoom, i = 2 * e, n = this.aspect * i, r = -0.5 * n;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t1 = s.fullWidth, a = s.fullHeight;
                r += s.offsetX * n / t1, e -= s.offsetY * i / a, n *= s.width / t1, i *= s.height / a;
            }
            const a = this.filmOffset;
            0 !== a && (r += t1 * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t1, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
    }
    const on = -90;
    class ln extends li {
        constructor(t1, e, i){
            super(), this.type = "CubeCamera", this.renderTarget = i;
            const n = new an(on, 1, t1, e);
            n.layers = this.layers, n.up.set(0, 1, 0), n.lookAt(1, 0, 0), this.add(n);
            const r = new an(on, 1, t1, e);
            r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
            const s = new an(on, 1, t1, e);
            s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(0, 1, 0), this.add(s);
            const a = new an(on, 1, t1, e);
            a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
            const o = new an(on, 1, t1, e);
            o.layers = this.layers, o.up.set(0, 1, 0), o.lookAt(0, 0, 1), this.add(o);
            const l = new an(on, 1, t1, e);
            l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
        }
        update(t1, e) {
            null === this.parent && this.updateMatrixWorld();
            const i = this.renderTarget, [n, r, s, a, o, l] = this.children, c = t1.getRenderTarget(), h = t1.toneMapping, u = t1.xr.enabled;
            t1.toneMapping = 0, t1.xr.enabled = !1;
            const d = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, t1.setRenderTarget(i, 0), t1.render(e, n), t1.setRenderTarget(i, 1), t1.render(e, r), t1.setRenderTarget(i, 2), t1.render(e, s), t1.setRenderTarget(i, 3), t1.render(e, a), t1.setRenderTarget(i, 4), t1.render(e, o), i.texture.generateMipmaps = d, t1.setRenderTarget(i, 5), t1.render(e, l), t1.setRenderTarget(c), t1.toneMapping = h, t1.xr.enabled = u, i.texture.needsPMREMUpdate = !0;
        }
    }
    class cn extends ee {
        constructor(t1, e, i, n, s, a, o, l, c, h){
            super(t1 = void 0 !== t1 ? t1 : [], e = void 0 !== e ? e : r, i, n, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(t1) {
            this.image = t1;
        }
    }
    class hn extends ne {
        constructor(t1 = 1, e = {}){
            super(t1, t1, e), this.isWebGLCubeRenderTarget = !0;
            const i = {
                width: t1,
                height: t1,
                depth: 1
            }, n = [
                i,
                i,
                i,
                i,
                i,
                i
            ];
            this.texture = new cn(n, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : f;
        }
        fromEquirectangularTexture(t1, e) {
            this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const i = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
                fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
            }, n = new $i(5, 5, 5), r = new rn({
                name: "CubemapFromEquirect",
                uniforms: Qi(i.uniforms),
                vertexShader: i.vertexShader,
                fragmentShader: i.fragmentShader,
                side: 1,
                blending: 0
            });
            r.uniforms.tEquirect.value = e;
            const s = new Ji(n, r), a = e.minFilter;
            e.minFilter === v && (e.minFilter = f);
            return new ln(1, 10, this).update(t1, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
        }
        clear(t1, e, i, n) {
            const r = t1.getRenderTarget();
            for(let r = 0; r < 6; r++)t1.setRenderTarget(this, r), t1.clear(e, i, n);
            t1.setRenderTarget(r);
        }
    }
    const un = new oe, dn = new oe, pn = new Dt;
    class mn {
        constructor(t1 = new oe(1, 0, 0), e = 0){
            this.isPlane = !0, this.normal = t1, this.constant = e;
        }
        set(t1, e) {
            return this.normal.copy(t1), this.constant = e, this;
        }
        setComponents(t1, e, i, n) {
            return this.normal.set(t1, e, i), this.constant = n, this;
        }
        setFromNormalAndCoplanarPoint(t1, e) {
            return this.normal.copy(t1), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t1, e, i) {
            const n = un.subVectors(i, e).cross(dn.subVectors(t1, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(n, t1), this;
        }
        copy(t1) {
            return this.normal.copy(t1.normal), this.constant = t1.constant, this;
        }
        normalize() {
            const t1 = 1 / this.normal.length();
            return this.normal.multiplyScalar(t1), this.constant *= t1, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t1) {
            return this.normal.dot(t1) + this.constant;
        }
        distanceToSphere(t1) {
            return this.distanceToPoint(t1.center) - t1.radius;
        }
        projectPoint(t1, e) {
            return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t1)).add(t1);
        }
        intersectLine(t1, e) {
            const i = t1.delta(un), n = this.normal.dot(i);
            if (0 === n) return 0 === this.distanceToPoint(t1.start) ? e.copy(t1.start) : null;
            const r = -(t1.start.dot(this.normal) + this.constant) / n;
            return r < 0 || r > 1 ? null : e.copy(i).multiplyScalar(r).add(t1.start);
        }
        intersectsLine(t1) {
            const e = this.distanceToPoint(t1.start), i = this.distanceToPoint(t1.end);
            return e < 0 && i > 0 || i < 0 && e > 0;
        }
        intersectsBox(t1) {
            return t1.intersectsPlane(this);
        }
        intersectsSphere(t1) {
            return t1.intersectsPlane(this);
        }
        coplanarPoint(t1) {
            return t1.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t1, e) {
            const i = e || pn.getNormalMatrix(t1), n = this.coplanarPoint(un).applyMatrix4(t1), r = this.normal.applyMatrix3(i).normalize();
            return this.constant = -n.dot(r), this;
        }
        translate(t1) {
            return this.constant -= t1.dot(this.normal), this;
        }
        equals(t1) {
            return t1.normal.equals(this.normal) && t1.constant === this.constant;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const fn = new Ce, gn = new oe;
    class vn {
        constructor(t1 = new mn, e = new mn, i = new mn, n = new mn, r = new mn, s = new mn){
            this.planes = [
                t1,
                e,
                i,
                n,
                r,
                s
            ];
        }
        set(t1, e, i, n, r, s) {
            const a = this.planes;
            return a[0].copy(t1), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(s), this;
        }
        copy(t1) {
            const e = this.planes;
            for(let i = 0; i < 6; i++)e[i].copy(t1.planes[i]);
            return this;
        }
        setFromProjectionMatrix(t1) {
            const e = this.planes, i = t1.elements, n = i[0], r = i[1], s = i[2], a = i[3], o = i[4], l = i[5], c = i[6], h = i[7], u = i[8], d = i[9], p = i[10], m = i[11], f = i[12], g = i[13], v = i[14], x = i[15];
            return e[0].setComponents(a - n, h - o, m - u, x - f).normalize(), e[1].setComponents(a + n, h + o, m + u, x + f).normalize(), e[2].setComponents(a + r, h + l, m + d, x + g).normalize(), e[3].setComponents(a - r, h - l, m - d, x - g).normalize(), e[4].setComponents(a - s, h - c, m - p, x - v).normalize(), e[5].setComponents(a + s, h + c, m + p, x + v).normalize(), this;
        }
        intersectsObject(t1) {
            const e = t1.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), fn.copy(e.boundingSphere).applyMatrix4(t1.matrixWorld), this.intersectsSphere(fn);
        }
        intersectsSprite(t1) {
            return fn.center.set(0, 0, 0), fn.radius = .7071067811865476, fn.applyMatrix4(t1.matrixWorld), this.intersectsSphere(fn);
        }
        intersectsSphere(t1) {
            const e = this.planes, i = t1.center, n = -t1.radius;
            for(let t1 = 0; t1 < 6; t1++){
                if (e[t1].distanceToPoint(i) < n) return !1;
            }
            return !0;
        }
        intersectsBox(t1) {
            const e = this.planes;
            for(let i = 0; i < 6; i++){
                const n = e[i];
                if (gn.x = n.normal.x > 0 ? t1.max.x : t1.min.x, gn.y = n.normal.y > 0 ? t1.max.y : t1.min.y, gn.z = n.normal.z > 0 ? t1.max.z : t1.min.z, n.distanceToPoint(gn) < 0) return !1;
            }
            return !0;
        }
        containsPoint(t1) {
            const e = this.planes;
            for(let i = 0; i < 6; i++)if (e[i].distanceToPoint(t1) < 0) return !1;
            return !0;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    function xn() {
        let t1 = null, e = !1, i = null, n = null;
        function r(e, s) {
            i(e, s), n = t1.requestAnimationFrame(r);
        }
        return {
            start: function() {
                !0 !== e && null !== i && (n = t1.requestAnimationFrame(r), e = !0);
            },
            stop: function() {
                t1.cancelAnimationFrame(n), e = !1;
            },
            setAnimationLoop: function(t1) {
                i = t1;
            },
            setContext: function(e) {
                t1 = e;
            }
        };
    }
    function _n(t1, e) {
        const i = e.isWebGL2, n = new WeakMap;
        return {
            get: function(t1) {
                return t1.isInterleavedBufferAttribute && (t1 = t1.data), n.get(t1);
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const i = n.get(e);
                i && (t1.deleteBuffer(i.buffer), n.delete(e));
            },
            update: function(e, r) {
                if (e.isGLBufferAttribute) {
                    const t1 = n.get(e);
                    return void ((!t1 || t1.version < e.version) && n.set(e, {
                        buffer: e.buffer,
                        type: e.type,
                        bytesPerElement: e.elementSize,
                        version: e.version
                    }));
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const s = n.get(e);
                void 0 === s ? n.set(e, function(e, n) {
                    const r = e.array, s = e.usage, a = t1.createBuffer();
                    let o;
                    if (t1.bindBuffer(n, a), t1.bufferData(n, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
                    else if (r instanceof Uint16Array) {
                        if (e.isFloat16BufferAttribute) {
                            if (!i) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                            o = 5131;
                        } else o = 5123;
                    } else if (r instanceof Int16Array) o = 5122;
                    else if (r instanceof Uint32Array) o = 5125;
                    else if (r instanceof Int32Array) o = 5124;
                    else if (r instanceof Int8Array) o = 5120;
                    else if (r instanceof Uint8Array) o = 5121;
                    else {
                        if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                        o = 5121;
                    }
                    return {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    };
                }(e, r)) : s.version < e.version && (!function(e, n, r) {
                    const s = n.array, a = n.updateRange;
                    t1.bindBuffer(r, e), -1 === a.count ? t1.bufferSubData(r, 0, s) : (i ? t1.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t1.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1), n.onUploadCallback();
                }(s.buffer, e, r), s.version = e.version);
            }
        };
    }
    class yn extends zi {
        constructor(t1 = 1, e = 1, i = 1, n = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: t1,
                height: e,
                widthSegments: i,
                heightSegments: n
            };
            const r = t1 / 2, s = e / 2, a = Math.floor(i), o = Math.floor(n), l = a + 1, c = o + 1, h = t1 / a, u = e / o, d = [], p = [], m = [], f = [];
            for(let t1 = 0; t1 < c; t1++){
                const e = t1 * u - s;
                for(let i = 0; i < l; i++){
                    const n = i * h - r;
                    p.push(n, -e, 0), m.push(0, 0, 1), f.push(i / a), f.push(1 - t1 / o);
                }
            }
            for(let t1 = 0; t1 < o; t1++)for(let e = 0; e < a; e++){
                const i = e + l * t1, n = e + l * (t1 + 1), r = e + 1 + l * (t1 + 1), s = e + 1 + l * t1;
                d.push(i, n, s), d.push(n, r, s);
            }
            this.setIndex(d), this.setAttribute("position", new Ci(p, 3)), this.setAttribute("normal", new Ci(m, 3)), this.setAttribute("uv", new Ci(f, 2));
        }
        static fromJSON(t1) {
            return new yn(t1.width, t1.height, t1.widthSegments, t1.heightSegments);
        }
    }
    const Mn = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
        alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif",
        iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			 return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float R21 = R12;\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = dFdx( surf_pos.xyz );\n		vec3 vSigmaY = dFdy( surf_pos.xyz );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_v0 0.339\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_v1 0.276\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_v4 0.046\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_v5 0.016\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_v6 0.0038\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
        lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	#ifdef USE_IRIDESCENCE\n		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n	#else\n		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometry.viewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
        iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
        output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
        shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
        shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
        backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
        meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}"
    }, bn = {
        common: {
            diffuse: {
                value: new Zt(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Dt
            },
            uv2Transform: {
                value: new Dt
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new It(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Zt(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotLightMap: {
                value: []
            },
            spotShadowMap: {
                value: []
            },
            spotLightMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Zt(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Dt
            }
        },
        sprite: {
            diffuse: {
                value: new Zt(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new It(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Dt
            }
        }
    }, Sn = {
        basic: {
            uniforms: tn([
                bn.common,
                bn.specularmap,
                bn.envmap,
                bn.aomap,
                bn.lightmap,
                bn.fog
            ]),
            vertexShader: Mn.meshbasic_vert,
            fragmentShader: Mn.meshbasic_frag
        },
        lambert: {
            uniforms: tn([
                bn.common,
                bn.specularmap,
                bn.envmap,
                bn.aomap,
                bn.lightmap,
                bn.emissivemap,
                bn.bumpmap,
                bn.normalmap,
                bn.displacementmap,
                bn.fog,
                bn.lights,
                {
                    emissive: {
                        value: new Zt(0)
                    }
                }
            ]),
            vertexShader: Mn.meshlambert_vert,
            fragmentShader: Mn.meshlambert_frag
        },
        phong: {
            uniforms: tn([
                bn.common,
                bn.specularmap,
                bn.envmap,
                bn.aomap,
                bn.lightmap,
                bn.emissivemap,
                bn.bumpmap,
                bn.normalmap,
                bn.displacementmap,
                bn.fog,
                bn.lights,
                {
                    emissive: {
                        value: new Zt(0)
                    },
                    specular: {
                        value: new Zt(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: Mn.meshphong_vert,
            fragmentShader: Mn.meshphong_frag
        },
        standard: {
            uniforms: tn([
                bn.common,
                bn.envmap,
                bn.aomap,
                bn.lightmap,
                bn.emissivemap,
                bn.bumpmap,
                bn.normalmap,
                bn.displacementmap,
                bn.roughnessmap,
                bn.metalnessmap,
                bn.fog,
                bn.lights,
                {
                    emissive: {
                        value: new Zt(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Mn.meshphysical_vert,
            fragmentShader: Mn.meshphysical_frag
        },
        toon: {
            uniforms: tn([
                bn.common,
                bn.aomap,
                bn.lightmap,
                bn.emissivemap,
                bn.bumpmap,
                bn.normalmap,
                bn.displacementmap,
                bn.gradientmap,
                bn.fog,
                bn.lights,
                {
                    emissive: {
                        value: new Zt(0)
                    }
                }
            ]),
            vertexShader: Mn.meshtoon_vert,
            fragmentShader: Mn.meshtoon_frag
        },
        matcap: {
            uniforms: tn([
                bn.common,
                bn.bumpmap,
                bn.normalmap,
                bn.displacementmap,
                bn.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: Mn.meshmatcap_vert,
            fragmentShader: Mn.meshmatcap_frag
        },
        points: {
            uniforms: tn([
                bn.points,
                bn.fog
            ]),
            vertexShader: Mn.points_vert,
            fragmentShader: Mn.points_frag
        },
        dashed: {
            uniforms: tn([
                bn.common,
                bn.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: Mn.linedashed_vert,
            fragmentShader: Mn.linedashed_frag
        },
        depth: {
            uniforms: tn([
                bn.common,
                bn.displacementmap
            ]),
            vertexShader: Mn.depth_vert,
            fragmentShader: Mn.depth_frag
        },
        normal: {
            uniforms: tn([
                bn.common,
                bn.bumpmap,
                bn.normalmap,
                bn.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Mn.meshnormal_vert,
            fragmentShader: Mn.meshnormal_frag
        },
        sprite: {
            uniforms: tn([
                bn.sprite,
                bn.fog
            ]),
            vertexShader: Mn.sprite_vert,
            fragmentShader: Mn.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Dt
                },
                t2D: {
                    value: null
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: Mn.background_vert,
            fragmentShader: Mn.background_frag
        },
        backgroundCube: {
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                backgroundBlurriness: {
                    value: 0
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: Mn.backgroundCube_vert,
            fragmentShader: Mn.backgroundCube_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Mn.cube_vert,
            fragmentShader: Mn.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Mn.equirect_vert,
            fragmentShader: Mn.equirect_frag
        },
        distanceRGBA: {
            uniforms: tn([
                bn.common,
                bn.displacementmap,
                {
                    referencePosition: {
                        value: new oe
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: Mn.distanceRGBA_vert,
            fragmentShader: Mn.distanceRGBA_frag
        },
        shadow: {
            uniforms: tn([
                bn.lights,
                bn.fog,
                {
                    color: {
                        value: new Zt(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Mn.shadow_vert,
            fragmentShader: Mn.shadow_frag
        }
    };
    Sn.physical = {
        uniforms: tn([
            Sn.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new It(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                iridescence: {
                    value: 0
                },
                iridescenceMap: {
                    value: null
                },
                iridescenceIOR: {
                    value: 1.3
                },
                iridescenceThicknessMinimum: {
                    value: 100
                },
                iridescenceThicknessMaximum: {
                    value: 400
                },
                iridescenceThicknessMap: {
                    value: null
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new Zt(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionSamplerSize: {
                    value: new It
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new Zt(0)
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularColor: {
                    value: new Zt(1, 1, 1)
                },
                specularColorMap: {
                    value: null
                }
            }
        ]),
        vertexShader: Mn.meshphysical_vert,
        fragmentShader: Mn.meshphysical_frag
    };
    const wn = {
        r: 0,
        b: 0,
        g: 0
    };
    function Tn(t1, e, i, n, r, s, a) {
        const o = new Zt(0);
        let c, h, u = !0 === s ? 0 : 1, d = null, p = 0, m = null;
        function f(e, i) {
            e.getRGB(wn, en(t1)), n.buffers.color.setClear(wn.r, wn.g, wn.b, i, a);
        }
        return {
            getClearColor: function() {
                return o;
            },
            setClearColor: function(t1, e = 1) {
                o.set(t1), u = e, f(o, u);
            },
            getClearAlpha: function() {
                return u;
            },
            setClearAlpha: function(t1) {
                u = t1, f(o, u);
            },
            render: function(n, s) {
                let a = !1, g = !0 === s.isScene ? s.background : null;
                if (g && g.isTexture) g = (s.backgroundBlurriness > 0 ? i : e).get(g);
                const v = t1.xr, x = v.getSession && v.getSession();
                x && "additive" === x.environmentBlendMode && (g = null), null === g ? f(o, u) : g && g.isColor && (f(g, 1), a = !0), (t1.autoClear || a) && t1.clear(t1.autoClearColor, t1.autoClearDepth, t1.autoClearStencil), g && (g.isCubeTexture || g.mapping === l) ? (void 0 === h && (h = new Ji(new $i(1, 1, 1), new rn({
                    name: "BackgroundCubeMaterial",
                    uniforms: Qi(Sn.backgroundCube.uniforms),
                    vertexShader: Sn.backgroundCube.vertexShader,
                    fragmentShader: Sn.backgroundCube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(t1, e, i) {
                    this.matrixWorld.copyPosition(i.matrixWorld);
                }, Object.defineProperty(h.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                }), r.update(h)), h.material.uniforms.envMap.value = g, h.material.uniforms.flipEnvMap.value = g.isCubeTexture && !1 === g.isRenderTargetTexture ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = s.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = s.backgroundIntensity, h.material.toneMapped = g.encoding !== ht, d === g && p === g.version && m === t1.toneMapping || (h.material.needsUpdate = !0, d = g, p = g.version, m = t1.toneMapping), h.layers.enableAll(), n.unshift(h, h.geometry, h.material, 0, 0, null)) : g && g.isTexture && (void 0 === c && (c = new Ji(new yn(2, 2), new rn({
                    name: "BackgroundMaterial",
                    uniforms: Qi(Sn.background.uniforms),
                    vertexShader: Sn.background.vertexShader,
                    fragmentShader: Sn.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                }), r.update(c)), c.material.uniforms.t2D.value = g, c.material.uniforms.backgroundIntensity.value = s.backgroundIntensity, c.material.toneMapped = g.encoding !== ht, !0 === g.matrixAutoUpdate && g.updateMatrix(), c.material.uniforms.uvTransform.value.copy(g.matrix), d === g && p === g.version && m === t1.toneMapping || (c.material.needsUpdate = !0, d = g, p = g.version, m = t1.toneMapping), c.layers.enableAll(), n.unshift(c, c.geometry, c.material, 0, 0, null));
            }
        };
    }
    function An(t1, e, i, n) {
        const r = t1.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || null !== s, o = {}, l = p(null);
        let c = l, h = !1;
        function u(e) {
            return n.isWebGL2 ? t1.bindVertexArray(e) : s.bindVertexArrayOES(e);
        }
        function d(e) {
            return n.isWebGL2 ? t1.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
        }
        function p(t1) {
            const e = [], i = [], n = [];
            for(let t1 = 0; t1 < r; t1++)e[t1] = 0, i[t1] = 0, n[t1] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: i,
                attributeDivisors: n,
                object: t1,
                attributes: {},
                index: null
            };
        }
        function m() {
            const t1 = c.newAttributes;
            for(let e = 0, i = t1.length; e < i; e++)t1[e] = 0;
        }
        function f(t1) {
            g(t1, 0);
        }
        function g(i, r) {
            const s = c.newAttributes, a = c.enabledAttributes, o = c.attributeDivisors;
            if (s[i] = 1, 0 === a[i] && (t1.enableVertexAttribArray(i), a[i] = 1), o[i] !== r) (n.isWebGL2 ? t1 : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), o[i] = r;
        }
        function v() {
            const e = c.newAttributes, i = c.enabledAttributes;
            for(let n = 0, r = i.length; n < r; n++)i[n] !== e[n] && (t1.disableVertexAttribArray(n), i[n] = 0);
        }
        function x(e, i, r, s, a, o) {
            !0 !== n.isWebGL2 || 5124 !== r && 5125 !== r ? t1.vertexAttribPointer(e, i, r, s, a, o) : t1.vertexAttribIPointer(e, i, r, a, o);
        }
        function _() {
            y(), h = !0, c !== l && (c = l, u(c.object));
        }
        function y() {
            l.geometry = null, l.program = null, l.wireframe = !1;
        }
        return {
            setup: function(r, l, d, _, y) {
                let M = !1;
                if (a) {
                    const e = function(e, i, r) {
                        const a = !0 === r.wireframe;
                        let l = o[e.id];
                        void 0 === l && (l = {}, o[e.id] = l);
                        let c = l[i.id];
                        void 0 === c && (c = {}, l[i.id] = c);
                        let h = c[a];
                        void 0 === h && (h = p(n.isWebGL2 ? t1.createVertexArray() : s.createVertexArrayOES()), c[a] = h);
                        return h;
                    }(_, d, l);
                    c !== e && (c = e, u(c.object)), M = function(t1, e, i, n) {
                        const r = c.attributes, s = e.attributes;
                        let a = 0;
                        const o = i.getAttributes();
                        for(const e in o)if (o[e].location >= 0) {
                            const i = r[e];
                            let n = s[e];
                            if (void 0 === n && ("instanceMatrix" === e && t1.instanceMatrix && (n = t1.instanceMatrix), "instanceColor" === e && t1.instanceColor && (n = t1.instanceColor)), void 0 === i) return !0;
                            if (i.attribute !== n) return !0;
                            if (n && i.data !== n.data) return !0;
                            a++;
                        }
                        return c.attributesNum !== a || c.index !== n;
                    }(r, _, d, y), M && function(t1, e, i, n) {
                        const r = {}, s = e.attributes;
                        let a = 0;
                        const o = i.getAttributes();
                        for(const e in o)if (o[e].location >= 0) {
                            let i = s[e];
                            void 0 === i && ("instanceMatrix" === e && t1.instanceMatrix && (i = t1.instanceMatrix), "instanceColor" === e && t1.instanceColor && (i = t1.instanceColor));
                            const n = {};
                            n.attribute = i, i && i.data && (n.data = i.data), r[e] = n, a++;
                        }
                        c.attributes = r, c.attributesNum = a, c.index = n;
                    }(r, _, d, y);
                } else {
                    const t1 = !0 === l.wireframe;
                    c.geometry === _.id && c.program === d.id && c.wireframe === t1 || (c.geometry = _.id, c.program = d.id, c.wireframe = t1, M = !0);
                }
                null !== y && i.update(y, 34963), (M || h) && (h = !1, function(r, s, a, o) {
                    if (!1 === n.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                    m();
                    const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues;
                    for(const e in c){
                        const n = c[e];
                        if (n.location >= 0) {
                            let s = l[e];
                            if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                                const e = s.normalized, a = s.itemSize, l = i.get(s);
                                if (void 0 === l) continue;
                                const c = l.buffer, h = l.type, u = l.bytesPerElement;
                                if (s.isInterleavedBufferAttribute) {
                                    const i = s.data, l = i.stride, d = s.offset;
                                    if (i.isInstancedInterleavedBuffer) {
                                        for(let t1 = 0; t1 < n.locationSize; t1++)g(n.location + t1, i.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count);
                                    } else for(let t1 = 0; t1 < n.locationSize; t1++)f(n.location + t1);
                                    t1.bindBuffer(34962, c);
                                    for(let t1 = 0; t1 < n.locationSize; t1++)x(n.location + t1, a / n.locationSize, h, e, l * u, (d + a / n.locationSize * t1) * u);
                                } else {
                                    if (s.isInstancedBufferAttribute) {
                                        for(let t1 = 0; t1 < n.locationSize; t1++)g(n.location + t1, s.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count);
                                    } else for(let t1 = 0; t1 < n.locationSize; t1++)f(n.location + t1);
                                    t1.bindBuffer(34962, c);
                                    for(let t1 = 0; t1 < n.locationSize; t1++)x(n.location + t1, a / n.locationSize, h, e, a * u, a / n.locationSize * t1 * u);
                                }
                            } else if (void 0 !== h) {
                                const i = h[e];
                                if (void 0 !== i) switch(i.length){
                                    case 2:
                                        t1.vertexAttrib2fv(n.location, i);
                                        break;
                                    case 3:
                                        t1.vertexAttrib3fv(n.location, i);
                                        break;
                                    case 4:
                                        t1.vertexAttrib4fv(n.location, i);
                                        break;
                                    default:
                                        t1.vertexAttrib1fv(n.location, i);
                                }
                            }
                        }
                    }
                    v();
                }(r, l, d, _), null !== y && t1.bindBuffer(34963, i.get(y).buffer));
            },
            reset: _,
            resetDefaultState: y,
            dispose: function() {
                _();
                for(const t1 in o){
                    const e = o[t1];
                    for(const t1 in e){
                        const i = e[t1];
                        for(const t1 in i)d(i[t1].object), delete i[t1];
                        delete e[t1];
                    }
                    delete o[t1];
                }
            },
            releaseStatesOfGeometry: function(t1) {
                if (void 0 === o[t1.id]) return;
                const e = o[t1.id];
                for(const t1 in e){
                    const i = e[t1];
                    for(const t1 in i)d(i[t1].object), delete i[t1];
                    delete e[t1];
                }
                delete o[t1.id];
            },
            releaseStatesOfProgram: function(t1) {
                for(const e in o){
                    const i = o[e];
                    if (void 0 === i[t1.id]) continue;
                    const n = i[t1.id];
                    for(const t1 in n)d(n[t1].object), delete n[t1];
                    delete i[t1.id];
                }
            },
            initAttributes: m,
            enableAttribute: f,
            disableUnusedAttributes: v
        };
    }
    function En(t1, e, i, n) {
        const r = n.isWebGL2;
        let s;
        this.setMode = function(t1) {
            s = t1;
        }, this.render = function(e, n) {
            t1.drawArrays(s, e, n), i.update(n, s, 1);
        }, this.renderInstances = function(n, a, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = t1, c = "drawArraysInstanced";
            else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, n, a, o), i.update(a, s, o);
        };
    }
    function Cn(t1, e, i) {
        let n;
        function r(e) {
            if ("highp" === e) {
                if (t1.getShaderPrecisionFormat(35633, 36338).precision > 0 && t1.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump";
            }
            return "mediump" === e && t1.getShaderPrecisionFormat(35633, 36337).precision > 0 && t1.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t1 instanceof WebGL2RenderingContext;
        let a = void 0 !== i.precision ? i.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e.has("WEBGL_draw_buffers"), c = !0 === i.logarithmicDepthBuffer, h = t1.getParameter(34930), u = t1.getParameter(35660), d = t1.getParameter(3379), p = t1.getParameter(34076), m = t1.getParameter(34921), f = t1.getParameter(36347), g = t1.getParameter(36348), v = t1.getParameter(36349), x = u > 0, _ = s || e.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== n) return n;
                if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                    const i = e.get("EXT_texture_filter_anisotropic");
                    n = t1.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                } else n = 0;
                return n;
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: m,
            maxVertexUniforms: f,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: x,
            floatFragmentTextures: _,
            floatVertexTextures: x && _,
            maxSamples: s ? t1.getParameter(36183) : 0
        };
    }
    function Ln(t1) {
        const e = this;
        let i = null, n = 0, r = !1, s = !1;
        const a = new mn, o = new Dt, l = {
            value: null,
            needsUpdate: !1
        };
        function c(t1, i, n, r) {
            const s = null !== t1 ? t1.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value, !0 !== r || null === c) {
                    const e = n + 4 * s, r = i.matrixWorldInverse;
                    o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                    for(let e = 0, i = n; e !== s; ++e, i += 4)a.copy(t1[e]).applyMatrix4(r, o), a.normal.toArray(c, i), c[i + 3] = a.constant;
                }
                l.value = c, l.needsUpdate = !0;
            }
            return e.numPlanes = s, e.numIntersection = 0, c;
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t1, e) {
            const i = 0 !== t1.length || e || 0 !== n || r;
            return r = e, n = t1.length, i;
        }, this.beginShadows = function() {
            s = !0, c(null);
        }, this.endShadows = function() {
            s = !1;
        }, this.setGlobalState = function(t1, e) {
            i = c(t1, e, 0);
        }, this.setState = function(a, o, h) {
            const u = a.clippingPlanes, d = a.clipIntersection, p = a.clipShadows, m = t1.get(a);
            if (!r || null === u || 0 === u.length || s && !p) s ? c(null) : function() {
                l.value !== i && (l.value = i, l.needsUpdate = n > 0);
                e.numPlanes = n, e.numIntersection = 0;
            }();
            else {
                const t1 = s ? 0 : n, e = 4 * t1;
                let r = m.clippingState || null;
                l.value = r, r = c(u, o, e, h);
                for(let t1 = 0; t1 !== e; ++t1)r[t1] = i[t1];
                m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t1;
            }
        };
    }
    function Rn(t1) {
        let e = new WeakMap;
        function i(t1, e) {
            return e === a ? t1.mapping = r : e === o && (t1.mapping = s), t1;
        }
        function n(t1) {
            const i = t1.target;
            i.removeEventListener("dispose", n);
            const r = e.get(i);
            void 0 !== r && (e.delete(i), r.dispose());
        }
        return {
            get: function(r) {
                if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                    const s = r.mapping;
                    if (s === a || s === o) {
                        if (e.has(r)) return i(e.get(r).texture, r.mapping);
                        {
                            const s = r.image;
                            if (s && s.height > 0) {
                                const a = new hn(s.height / 2);
                                return a.fromEquirectangularTexture(t1, r), e.set(r, a), r.addEventListener("dispose", n), i(a.texture, r.mapping);
                            }
                            return null;
                        }
                    }
                }
                return r;
            },
            dispose: function() {
                e = new WeakMap;
            }
        };
    }
    class Pn extends sn {
        constructor(t1 = -1, e = 1, i = 1, n = -1, r = .1, s = 2e3){
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t1, this.right = e, this.top = i, this.bottom = n, this.near = r, this.far = s, this.updateProjectionMatrix();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.left = t1.left, this.right = t1.right, this.top = t1.top, this.bottom = t1.bottom, this.near = t1.near, this.far = t1.far, this.zoom = t1.zoom, this.view = null === t1.view ? null : Object.assign({}, t1.view), this;
        }
        setViewOffset(t1, e, i, n, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t1, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t1 = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
            let r = i - t1, s = i + t1, a = n + e, o = n - e;
            if (null !== this.view && this.view.enabled) {
                const t1 = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t1 * this.view.offsetX, s = r + t1 * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
        }
    }
    const In = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], Dn = 20, Nn = new Pn, On = new Zt;
    let zn = null;
    const Un = (1 + Math.sqrt(5)) / 2, Bn = 1 / Un, Fn = [
        new oe(1, 1, 1),
        new oe(-1, 1, 1),
        new oe(1, 1, -1),
        new oe(-1, 1, -1),
        new oe(0, Un, Bn),
        new oe(0, Un, -Bn),
        new oe(Bn, 0, Un),
        new oe(-Bn, 0, Un),
        new oe(Un, Bn, 0),
        new oe(-Un, Bn, 0)
    ];
    class kn {
        constructor(t1){
            this._renderer = t1, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t1, e = 0, i = .1, n = 100) {
            zn = this._renderer.getRenderTarget(), this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0, this._sceneToCubeUV(t1, i, n, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
        }
        fromEquirectangular(t1, e = null) {
            return this._fromTexture(t1, e);
        }
        fromCubemap(t1, e = null) {
            return this._fromTexture(t1, e);
        }
        compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = Wn(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = Hn(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t1) {
            this._lodMax = Math.floor(Math.log2(t1)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for(let t1 = 0; t1 < this._lodPlanes.length; t1++)this._lodPlanes[t1].dispose();
        }
        _cleanup(t1) {
            this._renderer.setRenderTarget(zn), t1.scissorTest = !1, Vn(t1, 0, 0, t1.width, t1.height);
        }
        _fromTexture(t1, e) {
            t1.mapping === r || t1.mapping === s ? this._setSize(0 === t1.image.length ? 16 : t1.image[0].width || t1.image[0].image.width) : this._setSize(t1.image.width / 4), zn = this._renderer.getRenderTarget();
            const i = e || this._allocateTargets();
            return this._textureToCubeUV(t1, i), this._applyPMREM(i), this._cleanup(i), i;
        }
        _allocateTargets() {
            const t1 = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, i = {
                magFilter: f,
                minFilter: f,
                generateMipmaps: !1,
                type: b,
                format: w,
                encoding: ct,
                depthBuffer: !1
            }, n = Gn(t1, e, i);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t1 || this._pingPongRenderTarget.height !== e) {
                null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Gn(t1, e, i);
                const { _lodMax: n } = this;
                ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(t1) {
                    const e = [], i = [], n = [];
                    let r = t1;
                    const s = t1 - 4 + 1 + In.length;
                    for(let a = 0; a < s; a++){
                        const s = Math.pow(2, r);
                        i.push(s);
                        let o = 1 / s;
                        a > t1 - 4 ? o = In[a - t1 + 4 - 1] : 0 === a && (o = 0), n.push(o);
                        const l = 1 / (s - 2), c = -l, h = 1 + l, u = [
                            c,
                            c,
                            h,
                            c,
                            h,
                            h,
                            c,
                            c,
                            h,
                            h,
                            c,
                            h
                        ], d = 6, p = 6, m = 3, f = 2, g = 1, v = new Float32Array(m * p * d), x = new Float32Array(f * p * d), _ = new Float32Array(g * p * d);
                        for(let t1 = 0; t1 < d; t1++){
                            const e = t1 % 3 * 2 / 3 - 1, i = t1 > 2 ? 0 : -1, n = [
                                e,
                                i,
                                0,
                                e + 2 / 3,
                                i,
                                0,
                                e + 2 / 3,
                                i + 1,
                                0,
                                e,
                                i,
                                0,
                                e + 2 / 3,
                                i + 1,
                                0,
                                e,
                                i + 1,
                                0
                            ];
                            v.set(n, m * p * t1), x.set(u, f * p * t1);
                            const r = [
                                t1,
                                t1,
                                t1,
                                t1,
                                t1,
                                t1
                            ];
                            _.set(r, g * p * t1);
                        }
                        const y = new zi;
                        y.setAttribute("position", new Ti(v, m)), y.setAttribute("uv", new Ti(x, f)), y.setAttribute("faceIndex", new Ti(_, g)), e.push(y), r > 4 && r--;
                    }
                    return {
                        lodPlanes: e,
                        sizeLods: i,
                        sigmas: n
                    };
                }(n)), this._blurMaterial = function(t1, e, i) {
                    const n = new Float32Array(Dn), r = new oe(0, 1, 0), s = new rn({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: Dn,
                            CUBEUV_TEXEL_WIDTH: 1 / e,
                            CUBEUV_TEXEL_HEIGHT: 1 / i,
                            CUBEUV_MAX_MIP: `${t1}.0`
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: n
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: r
                            }
                        },
                        vertexShader: jn(),
                        fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    });
                    return s;
                }(n, t1, e);
            }
            return n;
        }
        _compileMaterial(t1) {
            const e = new Ji(this._lodPlanes[0], t1);
            this._renderer.compile(e, Nn);
        }
        _sceneToCubeUV(t1, e, i, n) {
            const r = new an(90, 1, e, i), s = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], a = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], o = this._renderer, l = o.autoClear, c = o.toneMapping;
            o.getClearColor(On), o.toneMapping = 0, o.autoClear = !1;
            const h = new bi({
                name: "PMREM.Background",
                side: 1,
                depthWrite: !1,
                depthTest: !1
            }), u = new Ji(new $i, h);
            let d = !1;
            const p = t1.background;
            p ? p.isColor && (h.color.copy(p), t1.background = null, d = !0) : (h.color.copy(On), d = !0);
            for(let e = 0; e < 6; e++){
                const i = e % 3;
                0 === i ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 === i ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e]));
                const l = this._cubeSize;
                Vn(n, i * l, e > 2 ? l : 0, l, l), o.setRenderTarget(n), d && o.render(u, r), o.render(t1, r);
            }
            u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t1.background = p;
        }
        _textureToCubeUV(t1, e) {
            const i = this._renderer, n = t1.mapping === r || t1.mapping === s;
            n ? (null === this._cubemapMaterial && (this._cubemapMaterial = Wn()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t1.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Hn());
            const a = n ? this._cubemapMaterial : this._equirectMaterial, o = new Ji(this._lodPlanes[0], a);
            a.uniforms.envMap.value = t1;
            const l = this._cubeSize;
            Vn(e, 0, 0, 3 * l, 2 * l), i.setRenderTarget(e), i.render(o, Nn);
        }
        _applyPMREM(t1) {
            const e = this._renderer, i = e.autoClear;
            e.autoClear = !1;
            for(let e = 1; e < this._lodPlanes.length; e++){
                const i = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]), n = Fn[(e - 1) % Fn.length];
                this._blur(t1, e - 1, e, i, n);
            }
            e.autoClear = i;
        }
        _blur(t1, e, i, n, r) {
            const s = this._pingPongRenderTarget;
            this._halfBlur(t1, s, e, i, n, "latitudinal", r), this._halfBlur(s, t1, i, i, n, "longitudinal", r);
        }
        _halfBlur(t1, e, i, n, r, s, a) {
            const o = this._renderer, l = this._blurMaterial;
            "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new Ji(this._lodPlanes[n], l), h = l.uniforms, u = this._sizeLods[i] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, m = isFinite(r) ? 1 + Math.floor(3 * p) : Dn;
            m > Dn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
            const f = [];
            let g = 0;
            for(let t1 = 0; t1 < Dn; ++t1){
                const e = t1 / p, i = Math.exp(-e * e / 2);
                f.push(i), 0 === t1 ? g += i : t1 < m && (g += 2 * i);
            }
            for(let t1 = 0; t1 < f.length; t1++)f[t1] = f[t1] / g;
            h.envMap.value = t1.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a);
            const { _lodMax: v } = this;
            h.dTheta.value = d, h.mipInt.value = v - i;
            const x = this._sizeLods[n];
            Vn(e, 3 * x * (n > v - 4 ? n - v + 4 : 0), 4 * (this._cubeSize - x), 3 * x, 2 * x), o.setRenderTarget(e), o.render(c, Nn);
        }
    }
    function Gn(t1, e, i) {
        const n = new ne(t1, e, i);
        return n.texture.mapping = l, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
    }
    function Vn(t1, e, i, n, r) {
        t1.viewport.set(e, i, n, r), t1.scissor.set(e, i, n, r);
    }
    function Hn() {
        return new rn({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: jn(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function Wn() {
        return new rn({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: jn(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function jn() {
        return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
    }
    function qn(t1) {
        let e = new WeakMap, i = null;
        function n(t1) {
            const i = t1.target;
            i.removeEventListener("dispose", n);
            const r = e.get(i);
            void 0 !== r && (e.delete(i), r.dispose());
        }
        return {
            get: function(l) {
                if (l && l.isTexture) {
                    const c = l.mapping, h = c === a || c === o, u = c === r || c === s;
                    if (h || u) {
                        if (l.isRenderTargetTexture && !0 === l.needsPMREMUpdate) {
                            l.needsPMREMUpdate = !1;
                            let n = e.get(l);
                            return null === i && (i = new kn(t1)), n = h ? i.fromEquirectangular(l, n) : i.fromCubemap(l, n), e.set(l, n), n.texture;
                        }
                        if (e.has(l)) return e.get(l).texture;
                        {
                            const r = l.image;
                            if (h && r && r.height > 0 || u && r && function(t1) {
                                let e = 0;
                                const i = 6;
                                for(let n = 0; n < i; n++)void 0 !== t1[n] && e++;
                                return e === i;
                            }(r)) {
                                null === i && (i = new kn(t1));
                                const r = h ? i.fromEquirectangular(l) : i.fromCubemap(l);
                                return e.set(l, r), l.addEventListener("dispose", n), r.texture;
                            }
                            return null;
                        }
                    }
                }
                return l;
            },
            dispose: function() {
                e = new WeakMap, null !== i && (i.dispose(), i = null);
            }
        };
    }
    function Xn(t1) {
        const e = {};
        function i(i) {
            if (void 0 !== e[i]) return e[i];
            let n;
            switch(i){
                case "WEBGL_depth_texture":
                    n = t1.getExtension("WEBGL_depth_texture") || t1.getExtension("MOZ_WEBGL_depth_texture") || t1.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = t1.getExtension("EXT_texture_filter_anisotropic") || t1.getExtension("MOZ_EXT_texture_filter_anisotropic") || t1.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = t1.getExtension("WEBGL_compressed_texture_s3tc") || t1.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t1.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = t1.getExtension("WEBGL_compressed_texture_pvrtc") || t1.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    n = t1.getExtension(i);
            }
            return e[i] = n, n;
        }
        return {
            has: function(t1) {
                return null !== i(t1);
            },
            init: function(t1) {
                t1.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture");
            },
            get: function(t1) {
                const e = i(t1);
                return null === e && console.warn("THREE.WebGLRenderer: " + t1 + " extension not supported."), e;
            }
        };
    }
    function Yn(t1, e, i, n) {
        const r = {}, s = new WeakMap;
        function a(t1) {
            const o = t1.target;
            null !== o.index && e.remove(o.index);
            for(const t1 in o.attributes)e.remove(o.attributes[t1]);
            o.removeEventListener("dispose", a), delete r[o.id];
            const l = s.get(o);
            l && (e.remove(l), s.delete(o)), n.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i.memory.geometries--;
        }
        function o(t1) {
            const i = [], n = t1.index, r = t1.attributes.position;
            let a = 0;
            if (null !== n) {
                const t1 = n.array;
                a = n.version;
                for(let e = 0, n = t1.length; e < n; e += 3){
                    const n = t1[e + 0], r = t1[e + 1], s = t1[e + 2];
                    i.push(n, r, r, s, s, n);
                }
            } else {
                const t1 = r.array;
                a = r.version;
                for(let e = 0, n = t1.length / 3 - 1; e < n; e += 3){
                    const t1 = e + 0, n = e + 1, r = e + 2;
                    i.push(t1, n, n, r, r, t1);
                }
            }
            const o = new (Ot(i) ? Ei : Ai)(i, 1);
            o.version = a;
            const l = s.get(t1);
            l && e.remove(l), s.set(t1, o);
        }
        return {
            get: function(t1, e) {
                return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, i.memory.geometries++), e;
            },
            update: function(t1) {
                const i = t1.attributes;
                for(const t1 in i)e.update(i[t1], 34962);
                const n = t1.morphAttributes;
                for(const t1 in n){
                    const i = n[t1];
                    for(let t1 = 0, n = i.length; t1 < n; t1++)e.update(i[t1], 34962);
                }
            },
            getWireframeAttribute: function(t1) {
                const e = s.get(t1);
                if (e) {
                    const i = t1.index;
                    null !== i && e.version < i.version && o(t1);
                } else o(t1);
                return s.get(t1);
            }
        };
    }
    function Zn(t1, e, i, n) {
        const r = n.isWebGL2;
        let s, a, o;
        this.setMode = function(t1) {
            s = t1;
        }, this.setIndex = function(t1) {
            a = t1.type, o = t1.bytesPerElement;
        }, this.render = function(e, n) {
            t1.drawElements(s, n, a, e * o), i.update(n, s, 1);
        }, this.renderInstances = function(n, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = t1, u = "drawElementsInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, n * o, c), i.update(l, s, c);
        };
    }
    function Jn(t1) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
            },
            update: function(t1, i, n) {
                switch(e.calls++, i){
                    case 4:
                        e.triangles += n * (t1 / 3);
                        break;
                    case 1:
                        e.lines += n * (t1 / 2);
                        break;
                    case 3:
                        e.lines += n * (t1 - 1);
                        break;
                    case 2:
                        e.lines += n * t1;
                        break;
                    case 0:
                        e.points += n * t1;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i);
                }
            }
        };
    }
    function Kn(t1, e) {
        return t1[0] - e[0];
    }
    function $n(t1, e) {
        return Math.abs(e[1]) - Math.abs(t1[1]);
    }
    function Qn(t1, e, i) {
        const n = {}, r = new Float32Array(8), s = new WeakMap, a = new ie, o = [];
        for(let t1 = 0; t1 < 8; t1++)o[t1] = [
            t1,
            0
        ];
        return {
            update: function(l, c, h, u) {
                const d = l.morphTargetInfluences;
                if (!0 === e.isWebGL2) {
                    const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, m = void 0 !== p ? p.length : 0;
                    let f = s.get(c);
                    if (void 0 === f || f.count !== m) {
                        void 0 !== f && f.texture.dispose();
                        const x = void 0 !== c.morphAttributes.position, _ = void 0 !== c.morphAttributes.normal, y = void 0 !== c.morphAttributes.color, b = c.morphAttributes.position || [], S = c.morphAttributes.normal || [], w = c.morphAttributes.color || [];
                        let T = 0;
                        !0 === x && (T = 1), !0 === _ && (T = 2), !0 === y && (T = 3);
                        let A = c.attributes.position.count * T, E = 1;
                        A > e.maxTextureSize && (E = Math.ceil(A / e.maxTextureSize), A = e.maxTextureSize);
                        const C = new Float32Array(A * E * 4 * m), L = new re(C, A, E, m);
                        L.type = M, L.needsUpdate = !0;
                        const R = 4 * T;
                        for(let I = 0; I < m; I++){
                            const D = b[I], N = S[I], O = w[I], z = A * E * 4 * I;
                            for(let U = 0; U < D.count; U++){
                                const B = U * R;
                                !0 === x && (a.fromBufferAttribute(D, U), C[z + B + 0] = a.x, C[z + B + 1] = a.y, C[z + B + 2] = a.z, C[z + B + 3] = 0), !0 === _ && (a.fromBufferAttribute(N, U), C[z + B + 4] = a.x, C[z + B + 5] = a.y, C[z + B + 6] = a.z, C[z + B + 7] = 0), !0 === y && (a.fromBufferAttribute(O, U), C[z + B + 8] = a.x, C[z + B + 9] = a.y, C[z + B + 10] = a.z, C[z + B + 11] = 4 === O.itemSize ? a.w : 1);
                            }
                        }
                        function P() {
                            L.dispose(), s.delete(c), c.removeEventListener("dispose", P);
                        }
                        f = {
                            count: m,
                            texture: L,
                            size: new It(A, E)
                        }, s.set(c, f), c.addEventListener("dispose", P);
                    }
                    let g = 0;
                    for(let F = 0; F < d.length; F++)g += d[F];
                    const v = c.morphTargetsRelative ? 1 : 1 - g;
                    u.getUniforms().setValue(t1, "morphTargetBaseInfluence", v), u.getUniforms().setValue(t1, "morphTargetInfluences", d), u.getUniforms().setValue(t1, "morphTargetsTexture", f.texture, i), u.getUniforms().setValue(t1, "morphTargetsTextureSize", f.size);
                } else {
                    const k = void 0 === d ? 0 : d.length;
                    let G = n[c.id];
                    if (void 0 === G || G.length !== k) {
                        G = [];
                        for(let q = 0; q < k; q++)G[q] = [
                            q,
                            0
                        ];
                        n[c.id] = G;
                    }
                    for(let X = 0; X < k; X++){
                        const Y = G[X];
                        Y[0] = X, Y[1] = d[X];
                    }
                    G.sort($n);
                    for(let Z = 0; Z < 8; Z++)Z < k && G[Z][1] ? (o[Z][0] = G[Z][0], o[Z][1] = G[Z][1]) : (o[Z][0] = Number.MAX_SAFE_INTEGER, o[Z][1] = 0);
                    o.sort(Kn);
                    const V = c.morphAttributes.position, H = c.morphAttributes.normal;
                    let W = 0;
                    for(let J = 0; J < 8; J++){
                        const K = o[J], $ = K[0], Q = K[1];
                        $ !== Number.MAX_SAFE_INTEGER && Q ? (V && c.getAttribute("morphTarget" + J) !== V[$] && c.setAttribute("morphTarget" + J, V[$]), H && c.getAttribute("morphNormal" + J) !== H[$] && c.setAttribute("morphNormal" + J, H[$]), r[J] = Q, W += Q) : (V && !0 === c.hasAttribute("morphTarget" + J) && c.deleteAttribute("morphTarget" + J), H && !0 === c.hasAttribute("morphNormal" + J) && c.deleteAttribute("morphNormal" + J), r[J] = 0);
                    }
                    const j = c.morphTargetsRelative ? 1 : 1 - W;
                    u.getUniforms().setValue(t1, "morphTargetBaseInfluence", j), u.getUniforms().setValue(t1, "morphTargetInfluences", r);
                }
            }
        };
    }
    function tr(t1, e, i, n) {
        let r = new WeakMap;
        function s(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", s), i.remove(e.instanceMatrix), null !== e.instanceColor && i.remove(e.instanceColor);
        }
        return {
            update: function(t1) {
                const a = n.render.frame, o = t1.geometry, l = e.get(t1, o);
                return r.get(l) !== a && (e.update(l), r.set(l, a)), t1.isInstancedMesh && (!1 === t1.hasEventListener("dispose", s) && t1.addEventListener("dispose", s), i.update(t1.instanceMatrix, 34962), null !== t1.instanceColor && i.update(t1.instanceColor, 34962)), l;
            },
            dispose: function() {
                r = new WeakMap;
            }
        };
    }
    const er = new ee, ir = new re, nr = new se, rr = new cn, sr = [], ar = [], or = new Float32Array(16), lr = new Float32Array(9), cr = new Float32Array(4);
    function hr(t1, e, i) {
        const n = t1[0];
        if (n <= 0 || n > 0) return t1;
        const r = e * i;
        let s = sr[r];
        if (void 0 === s && (s = new Float32Array(r), sr[r] = s), 0 !== e) {
            n.toArray(s, 0);
            for(let n = 1, r = 0; n !== e; ++n)r += i, t1[n].toArray(s, r);
        }
        return s;
    }
    function ur(t1, e) {
        if (t1.length !== e.length) return !1;
        for(let i = 0, n = t1.length; i < n; i++)if (t1[i] !== e[i]) return !1;
        return !0;
    }
    function dr(t1, e) {
        for(let i = 0, n = e.length; i < n; i++)t1[i] = e[i];
    }
    function pr(t1, e) {
        let i = ar[e];
        void 0 === i && (i = new Int32Array(e), ar[e] = i);
        for(let n = 0; n !== e; ++n)i[n] = t1.allocateTextureUnit();
        return i;
    }
    function mr(t1, e) {
        const i = this.cache;
        i[0] !== e && (t1.uniform1f(this.addr, e), i[0] = e);
    }
    function fr(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t1.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
        else {
            if (ur(i, e)) return;
            t1.uniform2fv(this.addr, e), dr(i, e);
        }
    }
    function gr(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t1.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
        else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t1.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
        else {
            if (ur(i, e)) return;
            t1.uniform3fv(this.addr, e), dr(i, e);
        }
    }
    function vr(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t1.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
        else {
            if (ur(i, e)) return;
            t1.uniform4fv(this.addr, e), dr(i, e);
        }
    }
    function xr(t1, e) {
        const i = this.cache, n = e.elements;
        if (void 0 === n) {
            if (ur(i, e)) return;
            t1.uniformMatrix2fv(this.addr, !1, e), dr(i, e);
        } else {
            if (ur(i, n)) return;
            cr.set(n), t1.uniformMatrix2fv(this.addr, !1, cr), dr(i, n);
        }
    }
    function _r(t1, e) {
        const i = this.cache, n = e.elements;
        if (void 0 === n) {
            if (ur(i, e)) return;
            t1.uniformMatrix3fv(this.addr, !1, e), dr(i, e);
        } else {
            if (ur(i, n)) return;
            lr.set(n), t1.uniformMatrix3fv(this.addr, !1, lr), dr(i, n);
        }
    }
    function yr(t1, e) {
        const i = this.cache, n = e.elements;
        if (void 0 === n) {
            if (ur(i, e)) return;
            t1.uniformMatrix4fv(this.addr, !1, e), dr(i, e);
        } else {
            if (ur(i, n)) return;
            or.set(n), t1.uniformMatrix4fv(this.addr, !1, or), dr(i, n);
        }
    }
    function Mr(t1, e) {
        const i = this.cache;
        i[0] !== e && (t1.uniform1i(this.addr, e), i[0] = e);
    }
    function br(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t1.uniform2i(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
        else {
            if (ur(i, e)) return;
            t1.uniform2iv(this.addr, e), dr(i, e);
        }
    }
    function Sr(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t1.uniform3i(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
        else {
            if (ur(i, e)) return;
            t1.uniform3iv(this.addr, e), dr(i, e);
        }
    }
    function wr(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t1.uniform4i(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
        else {
            if (ur(i, e)) return;
            t1.uniform4iv(this.addr, e), dr(i, e);
        }
    }
    function Tr(t1, e) {
        const i = this.cache;
        i[0] !== e && (t1.uniform1ui(this.addr, e), i[0] = e);
    }
    function Ar(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t1.uniform2ui(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
        else {
            if (ur(i, e)) return;
            t1.uniform2uiv(this.addr, e), dr(i, e);
        }
    }
    function Er(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t1.uniform3ui(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
        else {
            if (ur(i, e)) return;
            t1.uniform3uiv(this.addr, e), dr(i, e);
        }
    }
    function Cr(t1, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t1.uniform4ui(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
        else {
            if (ur(i, e)) return;
            t1.uniform4uiv(this.addr, e), dr(i, e);
        }
    }
    function Lr(t1, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t1.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || er, r);
    }
    function Rr(t1, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t1.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || nr, r);
    }
    function Pr(t1, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t1.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || rr, r);
    }
    function Ir(t1, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t1.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(e || ir, r);
    }
    function Dr(t1, e) {
        t1.uniform1fv(this.addr, e);
    }
    function Nr(t1, e) {
        const i = hr(e, this.size, 2);
        t1.uniform2fv(this.addr, i);
    }
    function Or(t1, e) {
        const i = hr(e, this.size, 3);
        t1.uniform3fv(this.addr, i);
    }
    function zr(t1, e) {
        const i = hr(e, this.size, 4);
        t1.uniform4fv(this.addr, i);
    }
    function Ur(t1, e) {
        const i = hr(e, this.size, 4);
        t1.uniformMatrix2fv(this.addr, !1, i);
    }
    function Br(t1, e) {
        const i = hr(e, this.size, 9);
        t1.uniformMatrix3fv(this.addr, !1, i);
    }
    function Fr(t1, e) {
        const i = hr(e, this.size, 16);
        t1.uniformMatrix4fv(this.addr, !1, i);
    }
    function kr(t1, e) {
        t1.uniform1iv(this.addr, e);
    }
    function Gr(t1, e) {
        t1.uniform2iv(this.addr, e);
    }
    function Vr(t1, e) {
        t1.uniform3iv(this.addr, e);
    }
    function Hr(t1, e) {
        t1.uniform4iv(this.addr, e);
    }
    function Wr(t1, e) {
        t1.uniform1uiv(this.addr, e);
    }
    function jr(t1, e) {
        t1.uniform2uiv(this.addr, e);
    }
    function qr(t1, e) {
        t1.uniform3uiv(this.addr, e);
    }
    function Xr(t1, e) {
        t1.uniform4uiv(this.addr, e);
    }
    function Yr(t1, e, i) {
        const n = this.cache, r = e.length, s = pr(i, r);
        ur(n, s) || (t1.uniform1iv(this.addr, s), dr(n, s));
        for(let t1 = 0; t1 !== r; ++t1)i.setTexture2D(e[t1] || er, s[t1]);
    }
    function Zr(t1, e, i) {
        const n = this.cache, r = e.length, s = pr(i, r);
        ur(n, s) || (t1.uniform1iv(this.addr, s), dr(n, s));
        for(let t1 = 0; t1 !== r; ++t1)i.setTexture3D(e[t1] || nr, s[t1]);
    }
    function Jr(t1, e, i) {
        const n = this.cache, r = e.length, s = pr(i, r);
        ur(n, s) || (t1.uniform1iv(this.addr, s), dr(n, s));
        for(let t1 = 0; t1 !== r; ++t1)i.setTextureCube(e[t1] || rr, s[t1]);
    }
    function Kr(t1, e, i) {
        const n = this.cache, r = e.length, s = pr(i, r);
        ur(n, s) || (t1.uniform1iv(this.addr, s), dr(n, s));
        for(let t1 = 0; t1 !== r; ++t1)i.setTexture2DArray(e[t1] || ir, s[t1]);
    }
    class $r {
        constructor(t1, e, i){
            this.id = t1, this.addr = i, this.cache = [], this.setValue = function(t1) {
                switch(t1){
                    case 5126:
                        return mr;
                    case 35664:
                        return fr;
                    case 35665:
                        return gr;
                    case 35666:
                        return vr;
                    case 35674:
                        return xr;
                    case 35675:
                        return _r;
                    case 35676:
                        return yr;
                    case 5124:
                    case 35670:
                        return Mr;
                    case 35667:
                    case 35671:
                        return br;
                    case 35668:
                    case 35672:
                        return Sr;
                    case 35669:
                    case 35673:
                        return wr;
                    case 5125:
                        return Tr;
                    case 36294:
                        return Ar;
                    case 36295:
                        return Er;
                    case 36296:
                        return Cr;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Lr;
                    case 35679:
                    case 36299:
                    case 36307:
                        return Rr;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Pr;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Ir;
                }
            }(e.type);
        }
    }
    class Qr {
        constructor(t1, e, i){
            this.id = t1, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t1) {
                switch(t1){
                    case 5126:
                        return Dr;
                    case 35664:
                        return Nr;
                    case 35665:
                        return Or;
                    case 35666:
                        return zr;
                    case 35674:
                        return Ur;
                    case 35675:
                        return Br;
                    case 35676:
                        return Fr;
                    case 5124:
                    case 35670:
                        return kr;
                    case 35667:
                    case 35671:
                        return Gr;
                    case 35668:
                    case 35672:
                        return Vr;
                    case 35669:
                    case 35673:
                        return Hr;
                    case 5125:
                        return Wr;
                    case 36294:
                        return jr;
                    case 36295:
                        return qr;
                    case 36296:
                        return Xr;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Yr;
                    case 35679:
                    case 36299:
                    case 36307:
                        return Zr;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Jr;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Kr;
                }
            }(e.type);
        }
    }
    class ts {
        constructor(t1){
            this.id = t1, this.seq = [], this.map = {};
        }
        setValue(t1, e, i) {
            const n = this.seq;
            for(let r = 0, s = n.length; r !== s; ++r){
                const s = n[r];
                s.setValue(t1, e[s.id], i);
            }
        }
    }
    const es = /(\w+)(\])?(\[|\.)?/g;
    function is(t1, e) {
        t1.seq.push(e), t1.map[e.id] = e;
    }
    function ns(t1, e, i) {
        const n = t1.name, r = n.length;
        for(es.lastIndex = 0;;){
            const s = es.exec(n), a = es.lastIndex;
            let o = s[1];
            const l = "]" === s[2], c = s[3];
            if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
                is(i, void 0 === c ? new $r(o, t1, e) : new Qr(o, t1, e));
                break;
            }
            {
                let t1 = i.map[o];
                void 0 === t1 && (t1 = new ts(o), is(i, t1)), i = t1;
            }
        }
    }
    class rs {
        constructor(t1, e){
            this.seq = [], this.map = {};
            const i = t1.getProgramParameter(e, 35718);
            for(let n = 0; n < i; ++n){
                const i = t1.getActiveUniform(e, n);
                ns(i, t1.getUniformLocation(e, i.name), this);
            }
        }
        setValue(t1, e, i, n) {
            const r = this.map[e];
            void 0 !== r && r.setValue(t1, i, n);
        }
        setOptional(t1, e, i) {
            const n = e[i];
            void 0 !== n && this.setValue(t1, i, n);
        }
        static upload(t1, e, i, n) {
            for(let r = 0, s = e.length; r !== s; ++r){
                const s = e[r], a = i[s.id];
                !1 !== a.needsUpdate && s.setValue(t1, a.value, n);
            }
        }
        static seqWithValue(t1, e) {
            const i = [];
            for(let n = 0, r = t1.length; n !== r; ++n){
                const r = t1[n];
                r.id in e && i.push(r);
            }
            return i;
        }
    }
    function ss(t1, e, i) {
        const n = t1.createShader(e);
        return t1.shaderSource(n, i), t1.compileShader(n), n;
    }
    let as = 0;
    function os(t1, e, i) {
        const n = t1.getShaderParameter(e, 35713), r = t1.getShaderInfoLog(e).trim();
        if (n && "" === r) return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
            const n = parseInt(s[1]);
            return i.toUpperCase() + "\n\n" + r + "\n\n" + function(t1, e) {
                const i = t1.split("\n"), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, i.length);
                for(let t1 = r; t1 < s; t1++){
                    const r = t1 + 1;
                    n.push(`${r === e ? ">" : " "} ${r}: ${i[t1]}`);
                }
                return n.join("\n");
            }(t1.getShaderSource(e), n);
        }
        return r;
    }
    function ls(t1, e) {
        const i = function(t1) {
            switch(t1){
                case ct:
                    return [
                        "Linear",
                        "( value )"
                    ];
                case ht:
                    return [
                        "sRGB",
                        "( value )"
                    ];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", t1), [
                        "Linear",
                        "( value )"
                    ];
            }
        }(e);
        return "vec4 " + t1 + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }";
    }
    function cs(t1, e) {
        let i;
        switch(e){
            case 1:
                i = "Linear";
                break;
            case 2:
                i = "Reinhard";
                break;
            case 3:
                i = "OptimizedCineon";
                break;
            case 4:
                i = "ACESFilmic";
                break;
            case 5:
                i = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), i = "Linear";
        }
        return "vec3 " + t1 + "( vec3 color ) { return " + i + "ToneMapping( color ); }";
    }
    function hs(t1) {
        return "" !== t1;
    }
    function us(t1, e) {
        const i = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
        return t1.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function ds(t1, e) {
        return t1.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const ps = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function ms(t1) {
        return t1.replace(ps, fs);
    }
    function fs(t1, e) {
        const i = Mn[e];
        if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
        return ms(i);
    }
    const gs = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function vs(t1) {
        return t1.replace(gs, xs);
    }
    function xs(t1, e, i, n) {
        let r = "";
        for(let t1 = parseInt(e); t1 < parseInt(i); t1++)r += n.replace(/\[\s*i\s*\]/g, "[ " + t1 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t1);
        return r;
    }
    function _s(t1) {
        let e = "precision " + t1.precision + " float;\nprecision " + t1.precision + " int;";
        return "highp" === t1.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t1.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t1.precision && (e += "\n#define LOW_PRECISION"), e;
    }
    function ys(t1, e, i, n) {
        const a = t1.getContext(), o = i.defines;
        let c = i.vertexShader, h = i.fragmentShader;
        const u = function(t1) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t1.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t1.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t1.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
        }(i), d = function(t1) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t1.envMap) switch(t1.envMapMode){
                case r:
                case s:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case l:
                    e = "ENVMAP_TYPE_CUBE_UV";
            }
            return e;
        }(i), p = function(t1) {
            let e = "ENVMAP_MODE_REFLECTION";
            t1.envMap && t1.envMapMode === s && (e = "ENVMAP_MODE_REFRACTION");
            return e;
        }(i), m = function(t1) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t1.envMap) switch(t1.combine){
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD";
            }
            return e;
        }(i), f = function(t1) {
            const e = t1.envMapCubeUVHeight;
            if (null === e) return null;
            const i = Math.log2(e) - 2, n = 1 / e;
            return {
                texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
                texelHeight: n,
                maxMip: i
            };
        }(i), g = i.isWebGL2 ? "" : function(t1) {
            return [
                t1.extensionDerivatives || t1.envMapCubeUVHeight || t1.bumpMap || t1.tangentSpaceNormalMap || t1.clearcoatNormalMap || t1.flatShading || "physical" === t1.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
                (t1.extensionFragDepth || t1.logarithmicDepthBuffer) && t1.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
                t1.extensionDrawBuffers && t1.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
                (t1.extensionShaderTextureLOD || t1.envMap || t1.transmission) && t1.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
            ].filter(hs).join("\n");
        }(i), v = function(t1) {
            const e = [];
            for(const i in t1){
                const n = t1[i];
                !1 !== n && e.push("#define " + i + " " + n);
            }
            return e.join("\n");
        }(o), x = a.createProgram();
        let _, y, M = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
        i.isRawShaderMaterial ? (_ = [
            v
        ].filter(hs).join("\n"), _.length > 0 && (_ += "\n"), y = [
            g,
            v
        ].filter(hs).join("\n"), y.length > 0 && (y += "\n")) : (_ = [
            _s(i),
            "#define SHADER_NAME " + i.shaderName,
            v,
            i.instancing ? "#define USE_INSTANCING" : "",
            i.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            i.useFog && i.fog ? "#define USE_FOG" : "",
            i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
            i.map ? "#define USE_MAP" : "",
            i.envMap ? "#define USE_ENVMAP" : "",
            i.envMap ? "#define " + p : "",
            i.lightMap ? "#define USE_LIGHTMAP" : "",
            i.aoMap ? "#define USE_AOMAP" : "",
            i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            i.bumpMap ? "#define USE_BUMPMAP" : "",
            i.normalMap ? "#define USE_NORMALMAP" : "",
            i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
            i.specularMap ? "#define USE_SPECULARMAP" : "",
            i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            i.metalnessMap ? "#define USE_METALNESSMAP" : "",
            i.alphaMap ? "#define USE_ALPHAMAP" : "",
            i.transmission ? "#define USE_TRANSMISSION" : "",
            i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            i.vertexTangents ? "#define USE_TANGENT" : "",
            i.vertexColors ? "#define USE_COLOR" : "",
            i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            i.vertexUvs ? "#define USE_UV" : "",
            i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            i.flatShading ? "#define FLAT_SHADED" : "",
            i.skinning ? "#define USE_SKINNING" : "",
            i.morphTargets ? "#define USE_MORPHTARGETS" : "",
            i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "",
            i.morphColors && i.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
            i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
            i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "",
            i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "",
            i.doubleSided ? "#define DOUBLE_SIDED" : "",
            i.flipSided ? "#define FLIP_SIDED" : "",
            i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            i.shadowMapEnabled ? "#define " + u : "",
            i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "	attribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "	attribute vec3 instanceColor;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "	attribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "	attribute vec3 color;",
            "#endif",
            "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(hs).join("\n"), y = [
            g,
            _s(i),
            "#define SHADER_NAME " + i.shaderName,
            v,
            i.useFog && i.fog ? "#define USE_FOG" : "",
            i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
            i.map ? "#define USE_MAP" : "",
            i.matcap ? "#define USE_MATCAP" : "",
            i.envMap ? "#define USE_ENVMAP" : "",
            i.envMap ? "#define " + d : "",
            i.envMap ? "#define " + p : "",
            i.envMap ? "#define " + m : "",
            f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
            f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
            f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
            i.lightMap ? "#define USE_LIGHTMAP" : "",
            i.aoMap ? "#define USE_AOMAP" : "",
            i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            i.bumpMap ? "#define USE_BUMPMAP" : "",
            i.normalMap ? "#define USE_NORMALMAP" : "",
            i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            i.clearcoat ? "#define USE_CLEARCOAT" : "",
            i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            i.iridescence ? "#define USE_IRIDESCENCE" : "",
            i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            i.specularMap ? "#define USE_SPECULARMAP" : "",
            i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            i.metalnessMap ? "#define USE_METALNESSMAP" : "",
            i.alphaMap ? "#define USE_ALPHAMAP" : "",
            i.alphaTest ? "#define USE_ALPHATEST" : "",
            i.sheen ? "#define USE_SHEEN" : "",
            i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            i.transmission ? "#define USE_TRANSMISSION" : "",
            i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
            i.vertexTangents ? "#define USE_TANGENT" : "",
            i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "",
            i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            i.vertexUvs ? "#define USE_UV" : "",
            i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            i.gradientMap ? "#define USE_GRADIENTMAP" : "",
            i.flatShading ? "#define FLAT_SHADED" : "",
            i.doubleSided ? "#define DOUBLE_SIDED" : "",
            i.flipSided ? "#define FLIP_SIDED" : "",
            i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            i.shadowMapEnabled ? "#define " + u : "",
            i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
            i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            0 !== i.toneMapping ? "#define TONE_MAPPING" : "",
            0 !== i.toneMapping ? Mn.tonemapping_pars_fragment : "",
            0 !== i.toneMapping ? cs("toneMapping", i.toneMapping) : "",
            i.dithering ? "#define DITHERING" : "",
            i.opaque ? "#define OPAQUE" : "",
            Mn.encodings_pars_fragment,
            ls("linearToOutputTexel", i.outputEncoding),
            i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "",
            "\n"
        ].filter(hs).join("\n")), c = ms(c), c = us(c, i), c = ds(c, i), h = ms(h), h = us(h, i), h = ds(h, i), c = vs(c), h = vs(h), i.isWebGL2 && !0 !== i.isRawShaderMaterial && (M = "#version 300 es\n", _ = [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join("\n") + "\n" + _, y = [
            "#define varying in",
            i.glslVersion === ft ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            i.glslVersion === ft ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join("\n") + "\n" + y);
        const b = M + y + h, S = ss(a, 35633, M + _ + c), w = ss(a, 35632, b);
        if (a.attachShader(x, S), a.attachShader(x, w), void 0 !== i.index0AttributeName ? a.bindAttribLocation(x, 0, i.index0AttributeName) : !0 === i.morphTargets && a.bindAttribLocation(x, 0, "position"), a.linkProgram(x), t1.debug.checkShaderErrors) {
            const t1 = a.getProgramInfoLog(x).trim(), e = a.getShaderInfoLog(S).trim(), i = a.getShaderInfoLog(w).trim();
            let n = !0, r = !0;
            if (!1 === a.getProgramParameter(x, 35714)) {
                n = !1;
                const e = os(a, S, "vertex"), i = os(a, w, "fragment");
                console.error("THREE.WebGLProgram: Shader Error " + a.getError() + " - VALIDATE_STATUS " + a.getProgramParameter(x, 35715) + "\n\nProgram Info Log: " + t1 + "\n" + e + "\n" + i);
            } else "" !== t1 ? console.warn("THREE.WebGLProgram: Program Info Log:", t1) : "" !== e && "" !== i || (r = !1);
            r && (this.diagnostics = {
                runnable: n,
                programLog: t1,
                vertexShader: {
                    log: e,
                    prefix: _
                },
                fragmentShader: {
                    log: i,
                    prefix: y
                }
            });
        }
        let T, A;
        return a.deleteShader(S), a.deleteShader(w), this.getUniforms = function() {
            return void 0 === T && (T = new rs(a, x)), T;
        }, this.getAttributes = function() {
            return void 0 === A && (A = function(t1, e) {
                const i = {}, n = t1.getProgramParameter(e, 35721);
                for(let r = 0; r < n; r++){
                    const n = t1.getActiveAttrib(e, r), s = n.name;
                    let a = 1;
                    35674 === n.type && (a = 2), 35675 === n.type && (a = 3), 35676 === n.type && (a = 4), i[s] = {
                        type: n.type,
                        location: t1.getAttribLocation(e, s),
                        locationSize: a
                    };
                }
                return i;
            }(a, x)), A;
        }, this.destroy = function() {
            n.releaseStatesOfProgram(this), a.deleteProgram(x), this.program = void 0;
        }, this.name = i.shaderName, this.id = as++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = S, this.fragmentShader = w, this;
    }
    let Ms = 0;
    class bs {
        constructor(){
            this.shaderCache = new Map, this.materialCache = new Map;
        }
        update(t1) {
            const e = t1.vertexShader, i = t1.fragmentShader, n = this._getShaderStage(e), r = this._getShaderStage(i), s = this._getShaderCacheForMaterial(t1);
            return !1 === s.has(n) && (s.add(n), n.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this;
        }
        remove(t1) {
            const e = this.materialCache.get(t1);
            for (const t1 of e)t1.usedTimes--, 0 === t1.usedTimes && this.shaderCache.delete(t1.code);
            return this.materialCache.delete(t1), this;
        }
        getVertexShaderID(t1) {
            return this._getShaderStage(t1.vertexShader).id;
        }
        getFragmentShaderID(t1) {
            return this._getShaderStage(t1.fragmentShader).id;
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t1) {
            const e = this.materialCache;
            let i = e.get(t1);
            return void 0 === i && (i = new Set, e.set(t1, i)), i;
        }
        _getShaderStage(t1) {
            const e = this.shaderCache;
            let i = e.get(t1);
            return void 0 === i && (i = new Ss(t1), e.set(t1, i)), i;
        }
    }
    class Ss {
        constructor(t1){
            this.id = Ms++, this.code = t1, this.usedTimes = 0;
        }
    }
    function ws(t1, e, i, n, r, s, a) {
        const o = new Ye, c = new bs, h = [], u = r.isWebGL2, d = r.logarithmicDepthBuffer, p = r.vertexTextures;
        let m = r.precision;
        const f = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        return {
            getParameters: function(s, o, h, g, v) {
                const x = g.fog, _ = v.geometry, y = s.isMeshStandardMaterial ? g.environment : null, M = (s.isMeshStandardMaterial ? i : e).get(s.envMap || y), b = M && M.mapping === l ? M.image.height : null, S = f[s.type];
                null !== s.precision && (m = r.getMaxPrecision(s.precision), m !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", m, "instead."));
                const w = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color, T = void 0 !== w ? w.length : 0;
                let A, E, C, L, R = 0;
                if (void 0 !== _.morphAttributes.position && (R = 1), void 0 !== _.morphAttributes.normal && (R = 2), void 0 !== _.morphAttributes.color && (R = 3), S) {
                    const t1 = Sn[S];
                    A = t1.vertexShader, E = t1.fragmentShader;
                } else A = s.vertexShader, E = s.fragmentShader, c.update(s), C = c.getVertexShaderID(s), L = c.getFragmentShaderID(s);
                const P = t1.getRenderTarget(), I = s.alphaTest > 0, D = s.clearcoat > 0, N = s.iridescence > 0;
                return {
                    isWebGL2: u,
                    shaderID: S,
                    shaderName: s.type,
                    vertexShader: A,
                    fragmentShader: E,
                    defines: s.defines,
                    customVertexShaderID: C,
                    customFragmentShaderID: L,
                    isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                    glslVersion: s.glslVersion,
                    precision: m,
                    instancing: !0 === v.isInstancedMesh,
                    instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                    supportsVertexTextures: p,
                    outputEncoding: null === P ? t1.outputEncoding : !0 === P.isXRRenderTarget ? P.texture.encoding : ct,
                    map: !!s.map,
                    matcap: !!s.matcap,
                    envMap: !!M,
                    envMapMode: M && M.mapping,
                    envMapCubeUVHeight: b,
                    lightMap: !!s.lightMap,
                    aoMap: !!s.aoMap,
                    emissiveMap: !!s.emissiveMap,
                    bumpMap: !!s.bumpMap,
                    normalMap: !!s.normalMap,
                    objectSpaceNormalMap: 1 === s.normalMapType,
                    tangentSpaceNormalMap: 0 === s.normalMapType,
                    decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === ht,
                    clearcoat: D,
                    clearcoatMap: D && !!s.clearcoatMap,
                    clearcoatRoughnessMap: D && !!s.clearcoatRoughnessMap,
                    clearcoatNormalMap: D && !!s.clearcoatNormalMap,
                    iridescence: N,
                    iridescenceMap: N && !!s.iridescenceMap,
                    iridescenceThicknessMap: N && !!s.iridescenceThicknessMap,
                    displacementMap: !!s.displacementMap,
                    roughnessMap: !!s.roughnessMap,
                    metalnessMap: !!s.metalnessMap,
                    specularMap: !!s.specularMap,
                    specularIntensityMap: !!s.specularIntensityMap,
                    specularColorMap: !!s.specularColorMap,
                    opaque: !1 === s.transparent && 1 === s.blending,
                    alphaMap: !!s.alphaMap,
                    alphaTest: I,
                    gradientMap: !!s.gradientMap,
                    sheen: s.sheen > 0,
                    sheenColorMap: !!s.sheenColorMap,
                    sheenRoughnessMap: !!s.sheenRoughnessMap,
                    transmission: s.transmission > 0,
                    transmissionMap: !!s.transmissionMap,
                    thicknessMap: !!s.thicknessMap,
                    combine: s.combine,
                    vertexTangents: !!s.normalMap && !!_.attributes.tangent,
                    vertexColors: s.vertexColors,
                    vertexAlphas: !0 === s.vertexColors && !!_.attributes.color && 4 === _.attributes.color.itemSize,
                    vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
                    uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
                    fog: !!x,
                    useFog: !0 === s.fog,
                    fogExp2: x && x.isFogExp2,
                    flatShading: !!s.flatShading,
                    sizeAttenuation: s.sizeAttenuation,
                    logarithmicDepthBuffer: d,
                    skinning: !0 === v.isSkinnedMesh,
                    morphTargets: void 0 !== _.morphAttributes.position,
                    morphNormals: void 0 !== _.morphAttributes.normal,
                    morphColors: void 0 !== _.morphAttributes.color,
                    morphTargetsCount: T,
                    morphTextureStride: R,
                    numDirLights: o.directional.length,
                    numPointLights: o.point.length,
                    numSpotLights: o.spot.length,
                    numSpotLightMaps: o.spotLightMap.length,
                    numRectAreaLights: o.rectArea.length,
                    numHemiLights: o.hemi.length,
                    numDirLightShadows: o.directionalShadowMap.length,
                    numPointLightShadows: o.pointShadowMap.length,
                    numSpotLightShadows: o.spotShadowMap.length,
                    numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
                    numClippingPlanes: a.numPlanes,
                    numClipIntersection: a.numIntersection,
                    dithering: s.dithering,
                    shadowMapEnabled: t1.shadowMap.enabled && h.length > 0,
                    shadowMapType: t1.shadowMap.type,
                    toneMapping: s.toneMapped ? t1.toneMapping : 0,
                    physicallyCorrectLights: t1.physicallyCorrectLights,
                    premultipliedAlpha: s.premultipliedAlpha,
                    doubleSided: 2 === s.side,
                    flipSided: 1 === s.side,
                    useDepthPacking: !!s.depthPacking,
                    depthPacking: s.depthPacking || 0,
                    index0AttributeName: s.index0AttributeName,
                    extensionDerivatives: s.extensions && s.extensions.derivatives,
                    extensionFragDepth: s.extensions && s.extensions.fragDepth,
                    extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
                    extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: s.customProgramCacheKey()
                };
            },
            getProgramCacheKey: function(e) {
                const i = [];
                if (e.shaderID ? i.push(e.shaderID) : (i.push(e.customVertexShaderID), i.push(e.customFragmentShaderID)), void 0 !== e.defines) for(const t1 in e.defines)i.push(t1), i.push(e.defines[t1]);
                return !1 === e.isRawShaderMaterial && (!function(t1, e) {
                    t1.push(e.precision), t1.push(e.outputEncoding), t1.push(e.envMapMode), t1.push(e.envMapCubeUVHeight), t1.push(e.combine), t1.push(e.vertexUvs), t1.push(e.fogExp2), t1.push(e.sizeAttenuation), t1.push(e.morphTargetsCount), t1.push(e.morphAttributeCount), t1.push(e.numDirLights), t1.push(e.numPointLights), t1.push(e.numSpotLights), t1.push(e.numSpotLightMaps), t1.push(e.numHemiLights), t1.push(e.numRectAreaLights), t1.push(e.numDirLightShadows), t1.push(e.numPointLightShadows), t1.push(e.numSpotLightShadows), t1.push(e.numSpotLightShadowsWithMaps), t1.push(e.shadowMapType), t1.push(e.toneMapping), t1.push(e.numClippingPlanes), t1.push(e.numClipIntersection), t1.push(e.depthPacking);
                }(i, e), function(t1, e) {
                    o.disableAll(), e.isWebGL2 && o.enable(0);
                    e.supportsVertexTextures && o.enable(1);
                    e.instancing && o.enable(2);
                    e.instancingColor && o.enable(3);
                    e.map && o.enable(4);
                    e.matcap && o.enable(5);
                    e.envMap && o.enable(6);
                    e.lightMap && o.enable(7);
                    e.aoMap && o.enable(8);
                    e.emissiveMap && o.enable(9);
                    e.bumpMap && o.enable(10);
                    e.normalMap && o.enable(11);
                    e.objectSpaceNormalMap && o.enable(12);
                    e.tangentSpaceNormalMap && o.enable(13);
                    e.clearcoat && o.enable(14);
                    e.clearcoatMap && o.enable(15);
                    e.clearcoatRoughnessMap && o.enable(16);
                    e.clearcoatNormalMap && o.enable(17);
                    e.iridescence && o.enable(18);
                    e.iridescenceMap && o.enable(19);
                    e.iridescenceThicknessMap && o.enable(20);
                    e.displacementMap && o.enable(21);
                    e.specularMap && o.enable(22);
                    e.roughnessMap && o.enable(23);
                    e.metalnessMap && o.enable(24);
                    e.gradientMap && o.enable(25);
                    e.alphaMap && o.enable(26);
                    e.alphaTest && o.enable(27);
                    e.vertexColors && o.enable(28);
                    e.vertexAlphas && o.enable(29);
                    e.vertexUvs && o.enable(30);
                    e.vertexTangents && o.enable(31);
                    e.uvsVertexOnly && o.enable(32);
                    t1.push(o.mask), o.disableAll(), e.fog && o.enable(0);
                    e.useFog && o.enable(1);
                    e.flatShading && o.enable(2);
                    e.logarithmicDepthBuffer && o.enable(3);
                    e.skinning && o.enable(4);
                    e.morphTargets && o.enable(5);
                    e.morphNormals && o.enable(6);
                    e.morphColors && o.enable(7);
                    e.premultipliedAlpha && o.enable(8);
                    e.shadowMapEnabled && o.enable(9);
                    e.physicallyCorrectLights && o.enable(10);
                    e.doubleSided && o.enable(11);
                    e.flipSided && o.enable(12);
                    e.useDepthPacking && o.enable(13);
                    e.dithering && o.enable(14);
                    e.specularIntensityMap && o.enable(15);
                    e.specularColorMap && o.enable(16);
                    e.transmission && o.enable(17);
                    e.transmissionMap && o.enable(18);
                    e.thicknessMap && o.enable(19);
                    e.sheen && o.enable(20);
                    e.sheenColorMap && o.enable(21);
                    e.sheenRoughnessMap && o.enable(22);
                    e.decodeVideoTexture && o.enable(23);
                    e.opaque && o.enable(24);
                    t1.push(o.mask);
                }(i, e), i.push(t1.outputEncoding)), i.push(e.customProgramCacheKey), i.join();
            },
            getUniforms: function(t1) {
                const e = f[t1.type];
                let i;
                if (e) {
                    const t1 = Sn[e];
                    i = nn.clone(t1.uniforms);
                } else i = t1.uniforms;
                return i;
            },
            acquireProgram: function(e, i) {
                let n;
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    if (e.cacheKey === i) {
                        n = e, ++n.usedTimes;
                        break;
                    }
                }
                return void 0 === n && (n = new ys(t1, i, e, s), h.push(n)), n;
            },
            releaseProgram: function(t1) {
                if (0 == --t1.usedTimes) {
                    const e = h.indexOf(t1);
                    h[e] = h[h.length - 1], h.pop(), t1.destroy();
                }
            },
            releaseShaderCache: function(t1) {
                c.remove(t1);
            },
            programs: h,
            dispose: function() {
                c.dispose();
            }
        };
    }
    function Ts() {
        let t1 = new WeakMap;
        return {
            get: function(e) {
                let i = t1.get(e);
                return void 0 === i && (i = {}, t1.set(e, i)), i;
            },
            remove: function(e) {
                t1.delete(e);
            },
            update: function(e, i, n) {
                t1.get(e)[i] = n;
            },
            dispose: function() {
                t1 = new WeakMap;
            }
        };
    }
    function As(t1, e) {
        return t1.groupOrder !== e.groupOrder ? t1.groupOrder - e.groupOrder : t1.renderOrder !== e.renderOrder ? t1.renderOrder - e.renderOrder : t1.material.id !== e.material.id ? t1.material.id - e.material.id : t1.z !== e.z ? t1.z - e.z : t1.id - e.id;
    }
    function Es(t1, e) {
        return t1.groupOrder !== e.groupOrder ? t1.groupOrder - e.groupOrder : t1.renderOrder !== e.renderOrder ? t1.renderOrder - e.renderOrder : t1.z !== e.z ? e.z - t1.z : t1.id - e.id;
    }
    function Cs() {
        const t1 = [];
        let e = 0;
        const i = [], n = [], r = [];
        function s(i, n, r, s, a, o) {
            let l = t1[e];
            return void 0 === l ? (l = {
                id: i.id,
                object: i,
                geometry: n,
                material: r,
                groupOrder: s,
                renderOrder: i.renderOrder,
                z: a,
                group: o
            }, t1[e] = l) : (l.id = i.id, l.object = i, l.geometry = n, l.material = r, l.groupOrder = s, l.renderOrder = i.renderOrder, l.z = a, l.group = o), e++, l;
        }
        return {
            opaque: i,
            transmissive: n,
            transparent: r,
            init: function() {
                e = 0, i.length = 0, n.length = 0, r.length = 0;
            },
            push: function(t1, e, a, o, l, c) {
                const h = s(t1, e, a, o, l, c);
                a.transmission > 0 ? n.push(h) : !0 === a.transparent ? r.push(h) : i.push(h);
            },
            unshift: function(t1, e, a, o, l, c) {
                const h = s(t1, e, a, o, l, c);
                a.transmission > 0 ? n.unshift(h) : !0 === a.transparent ? r.unshift(h) : i.unshift(h);
            },
            finish: function() {
                for(let i = e, n = t1.length; i < n; i++){
                    const e = t1[i];
                    if (null === e.id) break;
                    e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null;
                }
            },
            sort: function(t1, e) {
                i.length > 1 && i.sort(t1 || As), n.length > 1 && n.sort(e || Es), r.length > 1 && r.sort(e || Es);
            }
        };
    }
    function Ls() {
        let t1 = new WeakMap;
        return {
            get: function(e, i) {
                const n = t1.get(e);
                let r;
                return void 0 === n ? (r = new Cs, t1.set(e, [
                    r
                ])) : i >= n.length ? (r = new Cs, n.push(r)) : r = n[i], r;
            },
            dispose: function() {
                t1 = new WeakMap;
            }
        };
    }
    function Rs() {
        const t1 = {};
        return {
            get: function(e) {
                if (void 0 !== t1[e.id]) return t1[e.id];
                let i;
                switch(e.type){
                    case "DirectionalLight":
                        i = {
                            direction: new oe,
                            color: new Zt
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new oe,
                            direction: new oe,
                            color: new Zt,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new oe,
                            color: new Zt,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new oe,
                            skyColor: new Zt,
                            groundColor: new Zt
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new Zt,
                            position: new oe,
                            halfWidth: new oe,
                            halfHeight: new oe
                        };
                }
                return t1[e.id] = i, i;
            }
        };
    }
    let Ps = 0;
    function Is(t1, e) {
        return (e.castShadow ? 2 : 0) - (t1.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t1.map ? 1 : 0);
    }
    function Ds(t1, e) {
        const i = new Rs, n = function() {
            const t1 = {};
            return {
                get: function(e) {
                    if (void 0 !== t1[e.id]) return t1[e.id];
                    let i;
                    switch(e.type){
                        case "DirectionalLight":
                        case "SpotLight":
                            i = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new It
                            };
                            break;
                        case "PointLight":
                            i = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new It,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                    }
                    return t1[e.id] = i, i;
                }
            };
        }(), r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1,
                numSpotMaps: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0
        };
        for(let t1 = 0; t1 < 9; t1++)r.probe.push(new oe);
        const s = new oe, a = new Ue, o = new Ue;
        return {
            setup: function(s, a) {
                let o = 0, l = 0, c = 0;
                for(let t1 = 0; t1 < 9; t1++)r.probe[t1].set(0, 0, 0);
                let h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0, v = 0, x = 0, _ = 0;
                s.sort(Is);
                const y = !0 !== a ? Math.PI : 1;
                for(let t1 = 0, e = s.length; t1 < e; t1++){
                    const e = s[t1], a = e.color, M = e.intensity, b = e.distance, S = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight) o += a.r * M * y, l += a.g * M * y, c += a.b * M * y;
                    else if (e.isLightProbe) for(let t1 = 0; t1 < 9; t1++)r.probe[t1].addScaledVector(e.sh.coefficients[t1], M);
                    else if (e.isDirectionalLight) {
                        const t1 = i.get(e);
                        if (t1.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                            const t1 = e.shadow, i = n.get(e);
                            i.shadowBias = t1.bias, i.shadowNormalBias = t1.normalBias, i.shadowRadius = t1.radius, i.shadowMapSize = t1.mapSize, r.directionalShadow[h] = i, r.directionalShadowMap[h] = S, r.directionalShadowMatrix[h] = e.shadow.matrix, f++;
                        }
                        r.directional[h] = t1, h++;
                    } else if (e.isSpotLight) {
                        const t1 = i.get(e);
                        t1.position.setFromMatrixPosition(e.matrixWorld), t1.color.copy(a).multiplyScalar(M * y), t1.distance = b, t1.coneCos = Math.cos(e.angle), t1.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t1.decay = e.decay, r.spot[d] = t1;
                        const s = e.shadow;
                        if (e.map && (r.spotLightMap[x] = e.map, x++, s.updateMatrices(e), e.castShadow && _++), r.spotLightMatrix[d] = s.matrix, e.castShadow) {
                            const t1 = n.get(e);
                            t1.shadowBias = s.bias, t1.shadowNormalBias = s.normalBias, t1.shadowRadius = s.radius, t1.shadowMapSize = s.mapSize, r.spotShadow[d] = t1, r.spotShadowMap[d] = S, v++;
                        }
                        d++;
                    } else if (e.isRectAreaLight) {
                        const t1 = i.get(e);
                        t1.color.copy(a).multiplyScalar(M), t1.halfWidth.set(.5 * e.width, 0, 0), t1.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t1, p++;
                    } else if (e.isPointLight) {
                        const t1 = i.get(e);
                        if (t1.color.copy(e.color).multiplyScalar(e.intensity * y), t1.distance = e.distance, t1.decay = e.decay, e.castShadow) {
                            const t1 = e.shadow, i = n.get(e);
                            i.shadowBias = t1.bias, i.shadowNormalBias = t1.normalBias, i.shadowRadius = t1.radius, i.shadowMapSize = t1.mapSize, i.shadowCameraNear = t1.camera.near, i.shadowCameraFar = t1.camera.far, r.pointShadow[u] = i, r.pointShadowMap[u] = S, r.pointShadowMatrix[u] = e.shadow.matrix, g++;
                        }
                        r.point[u] = t1, u++;
                    } else if (e.isHemisphereLight) {
                        const t1 = i.get(e);
                        t1.skyColor.copy(e.color).multiplyScalar(M * y), t1.groundColor.copy(e.groundColor).multiplyScalar(M * y), r.hemi[m] = t1, m++;
                    }
                }
                p > 0 && (e.isWebGL2 || !0 === t1.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = bn.LTC_FLOAT_1, r.rectAreaLTC2 = bn.LTC_FLOAT_2) : !0 === t1.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = bn.LTC_HALF_1, r.rectAreaLTC2 = bn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
                const M = r.hash;
                M.directionalLength === h && M.pointLength === u && M.spotLength === d && M.rectAreaLength === p && M.hemiLength === m && M.numDirectionalShadows === f && M.numPointShadows === g && M.numSpotShadows === v && M.numSpotMaps === x || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = v + x - _, r.spotLightMap.length = x, r.numSpotLightShadowsWithMaps = _, M.directionalLength = h, M.pointLength = u, M.spotLength = d, M.rectAreaLength = p, M.hemiLength = m, M.numDirectionalShadows = f, M.numPointShadows = g, M.numSpotShadows = v, M.numSpotMaps = x, r.version = Ps++);
            },
            setupView: function(t1, e) {
                let i = 0, n = 0, l = 0, c = 0, h = 0;
                const u = e.matrixWorldInverse;
                for(let e = 0, d = t1.length; e < d; e++){
                    const d = t1[e];
                    if (d.isDirectionalLight) {
                        const t1 = r.directional[i];
                        t1.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t1.direction.sub(s), t1.direction.transformDirection(u), i++;
                    } else if (d.isSpotLight) {
                        const t1 = r.spot[l];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), t1.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t1.direction.sub(s), t1.direction.transformDirection(u), l++;
                    } else if (d.isRectAreaLight) {
                        const t1 = r.rectArea[c];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t1.halfWidth.set(.5 * d.width, 0, 0), t1.halfHeight.set(0, .5 * d.height, 0), t1.halfWidth.applyMatrix4(o), t1.halfHeight.applyMatrix4(o), c++;
                    } else if (d.isPointLight) {
                        const t1 = r.point[n];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), n++;
                    } else if (d.isHemisphereLight) {
                        const t1 = r.hemi[h];
                        t1.direction.setFromMatrixPosition(d.matrixWorld), t1.direction.transformDirection(u), h++;
                    }
                }
            },
            state: r
        };
    }
    function Ns(t1, e) {
        const i = new Ds(t1, e), n = [], r = [];
        return {
            init: function() {
                n.length = 0, r.length = 0;
            },
            state: {
                lightsArray: n,
                shadowsArray: r,
                lights: i
            },
            setupLights: function(t1) {
                i.setup(n, t1);
            },
            setupLightsView: function(t1) {
                i.setupView(n, t1);
            },
            pushLight: function(t1) {
                n.push(t1);
            },
            pushShadow: function(t1) {
                r.push(t1);
            }
        };
    }
    function Os(t1, e) {
        let i = new WeakMap;
        return {
            get: function(n, r = 0) {
                const s = i.get(n);
                let a;
                return void 0 === s ? (a = new Ns(t1, e), i.set(n, [
                    a
                ])) : r >= s.length ? (a = new Ns(t1, e), s.push(a)) : a = s[r], a;
            },
            dispose: function() {
                i = new WeakMap;
            }
        };
    }
    class zs extends Mi {
        constructor(t1){
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.depthPacking = t1.depthPacking, this.map = t1.map, this.alphaMap = t1.alphaMap, this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this;
        }
    }
    class Us extends Mi {
        constructor(t1){
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new oe, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.referencePosition.copy(t1.referencePosition), this.nearDistance = t1.nearDistance, this.farDistance = t1.farDistance, this.map = t1.map, this.alphaMap = t1.alphaMap, this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this;
        }
    }
    function Bs(t1, e, i) {
        let n = new vn;
        const r = new It, s = new It, a = new ie, o = new zs({
            depthPacking: 3201
        }), l = new Us, c = {}, h = i.maxTextureSize, u = {
            0: 1,
            1: 0,
            2: 2
        }, p = new rn({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new It
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }), m = p.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const f = new zi;
        f.setAttribute("position", new Ti(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const g = new Ji(f, p), v = this;
        function x(i, n) {
            const s = e.update(g);
            p.defines.VSM_SAMPLES !== i.blurSamples && (p.defines.VSM_SAMPLES = i.blurSamples, m.defines.VSM_SAMPLES = i.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), null === i.mapPass && (i.mapPass = new ne(r.x, r.y)), p.uniforms.shadow_pass.value = i.map.texture, p.uniforms.resolution.value = i.mapSize, p.uniforms.radius.value = i.radius, t1.setRenderTarget(i.mapPass), t1.clear(), t1.renderBufferDirect(n, null, s, p, g, null), m.uniforms.shadow_pass.value = i.mapPass.texture, m.uniforms.resolution.value = i.mapSize, m.uniforms.radius.value = i.radius, t1.setRenderTarget(i.map), t1.clear(), t1.renderBufferDirect(n, null, s, m, g, null);
        }
        function _(e, i, n, r, s, a) {
            let h = null;
            const d = !0 === n.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
            if (void 0 !== d) h = d;
            else if (h = !0 === n.isPointLight ? l : o, t1.localClippingEnabled && !0 === i.clipShadows && Array.isArray(i.clippingPlanes) && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0 || i.map && i.alphaTest > 0) {
                const t1 = h.uuid, e = i.uuid;
                let n = c[t1];
                void 0 === n && (n = {}, c[t1] = n);
                let r = n[e];
                void 0 === r && (r = h.clone(), n[e] = r), h = r;
            }
            return h.visible = i.visible, h.wireframe = i.wireframe, h.side = 3 === a ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side], h.alphaMap = i.alphaMap, h.alphaTest = i.alphaTest, h.map = i.map, h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.displacementMap = i.displacementMap, h.displacementScale = i.displacementScale, h.displacementBias = i.displacementBias, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, !0 === n.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(n.matrixWorld), h.nearDistance = r, h.farDistance = s), h;
        }
        function y(i, r, s, a, o) {
            if (!1 === i.visible) return;
            if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && 3 === o) && (!i.frustumCulled || n.intersectsObject(i))) {
                i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, i.matrixWorld);
                const n = e.update(i), r = i.material;
                if (Array.isArray(r)) {
                    const e = n.groups;
                    for(let l = 0, c = e.length; l < c; l++){
                        const c = e[l], h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = _(i, h, a, s.near, s.far, o);
                            t1.renderBufferDirect(s, null, n, e, i, c);
                        }
                    }
                } else if (r.visible) {
                    const e = _(i, r, a, s.near, s.far, o);
                    t1.renderBufferDirect(s, null, n, e, i, null);
                }
            }
            const l = i.children;
            for(let t1 = 0, e = l.length; t1 < e; t1++)y(l[t1], r, s, a, o);
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, i, o) {
            if (!1 === v.enabled) return;
            if (!1 === v.autoUpdate && !1 === v.needsUpdate) return;
            if (0 === e.length) return;
            const l = t1.getRenderTarget(), c = t1.getActiveCubeFace(), u = t1.getActiveMipmapLevel(), p = t1.state;
            p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
            for(let l = 0, c = e.length; l < c; l++){
                const c = e[l], u = c.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                    continue;
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                r.copy(u.mapSize);
                const m = u.getFrameExtents();
                if (r.multiply(m), s.copy(u.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / m.x), r.x = s.x * m.x, u.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / m.y), r.y = s.y * m.y, u.mapSize.y = s.y)), null === u.map) {
                    const t1 = 3 !== this.type ? {
                        minFilter: d,
                        magFilter: d
                    } : {};
                    u.map = new ne(r.x, r.y, t1), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
                }
                t1.setRenderTarget(u.map), t1.clear();
                const f = u.getViewportCount();
                for(let t1 = 0; t1 < f; t1++){
                    const e = u.getViewport(t1);
                    a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), p.viewport(a), u.updateMatrices(c, t1), n = u.getFrustum(), y(i, o, u.camera, c, this.type);
                }
                !0 !== u.isPointLightShadow && 3 === this.type && x(u, o), u.needsUpdate = !1;
            }
            v.needsUpdate = !1, t1.setRenderTarget(l, c, u);
        };
    }
    function Fs(t1, e, n) {
        const r = n.isWebGL2;
        const s = new function() {
            let e = !1;
            const i = new ie;
            let n = null;
            const r = new ie(0, 0, 0, 0);
            return {
                setMask: function(i) {
                    n === i || e || (t1.colorMask(i, i, i, i), n = i);
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e, n, s, a, o) {
                    !0 === o && (e *= a, n *= a, s *= a), i.set(e, n, s, a), !1 === r.equals(i) && (t1.clearColor(e, n, s, a), r.copy(i));
                },
                reset: function() {
                    e = !1, n = null, r.set(-1, 0, 0, 0);
                }
            };
        }, a = new function() {
            let e = !1, i = null, n = null, r = null;
            return {
                setTest: function(t1) {
                    t1 ? G(2929) : V(2929);
                },
                setMask: function(n) {
                    i === n || e || (t1.depthMask(n), i = n);
                },
                setFunc: function(e) {
                    if (n !== e) {
                        switch(e){
                            case 0:
                                t1.depthFunc(512);
                                break;
                            case 1:
                                t1.depthFunc(519);
                                break;
                            case 2:
                                t1.depthFunc(513);
                                break;
                            case 3:
                            default:
                                t1.depthFunc(515);
                                break;
                            case 4:
                                t1.depthFunc(514);
                                break;
                            case 5:
                                t1.depthFunc(518);
                                break;
                            case 6:
                                t1.depthFunc(516);
                                break;
                            case 7:
                                t1.depthFunc(517);
                        }
                        n = e;
                    }
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e) {
                    r !== e && (t1.clearDepth(e), r = e);
                },
                reset: function() {
                    e = !1, i = null, n = null, r = null;
                }
            };
        }, o = new function() {
            let e = !1, i = null, n = null, r = null, s = null, a = null, o = null, l = null, c = null;
            return {
                setTest: function(t1) {
                    e || (t1 ? G(2960) : V(2960));
                },
                setMask: function(n) {
                    i === n || e || (t1.stencilMask(n), i = n);
                },
                setFunc: function(e, i, a) {
                    n === e && r === i && s === a || (t1.stencilFunc(e, i, a), n = e, r = i, s = a);
                },
                setOp: function(e, i, n) {
                    a === e && o === i && l === n || (t1.stencilOp(e, i, n), a = e, o = i, l = n);
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e) {
                    c !== e && (t1.clearStencil(e), c = e);
                },
                reset: function() {
                    e = !1, i = null, n = null, r = null, s = null, a = null, o = null, l = null, c = null;
                }
            };
        }, l = new WeakMap, c = new WeakMap;
        let h = {}, u = {}, d = new WeakMap, p = [], m = null, f = !1, g = null, v = null, x = null, _ = null, y = null, M = null, b = null, S = !1, w = null, T = null, A = null, E = null, C = null;
        const L = t1.getParameter(35661);
        let R = !1, P = 0;
        const I = t1.getParameter(7938);
        -1 !== I.indexOf("WebGL") ? (P = parseFloat(/^WebGL (\d)/.exec(I)[1]), R = P >= 1) : -1 !== I.indexOf("OpenGL ES") && (P = parseFloat(/^OpenGL ES (\d)/.exec(I)[1]), R = P >= 2);
        let D = null, N = {};
        const O = t1.getParameter(3088), z = t1.getParameter(2978), U = (new ie).fromArray(O), B = (new ie).fromArray(z);
        function F(e, i, n) {
            const r = new Uint8Array(4), s = t1.createTexture();
            t1.bindTexture(e, s), t1.texParameteri(e, 10241, 9728), t1.texParameteri(e, 10240, 9728);
            for(let e = 0; e < n; e++)t1.texImage2D(i + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return s;
        }
        const k = {};
        function G(e) {
            !0 !== h[e] && (t1.enable(e), h[e] = !0);
        }
        function V(e) {
            !1 !== h[e] && (t1.disable(e), h[e] = !1);
        }
        k[3553] = F(3553, 3553, 1), k[34067] = F(34067, 34069, 6), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), G(2929), a.setFunc(3), q(!1), X(1), G(2884), j(0);
        const H = {
            [i]: 32774,
            101: 32778,
            102: 32779
        };
        if (r) H[103] = 32775, H[104] = 32776;
        else {
            const t1 = e.get("EXT_blend_minmax");
            null !== t1 && (H[103] = t1.MIN_EXT, H[104] = t1.MAX_EXT);
        }
        const W = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };
        function j(e, n, r, s, a, o, l, c) {
            if (0 !== e) {
                if (!1 === f && (G(3042), f = !0), 5 === e) a = a || n, o = o || r, l = l || s, n === v && a === y || (t1.blendEquationSeparate(H[n], H[a]), v = n, y = a), r === x && s === _ && o === M && l === b || (t1.blendFuncSeparate(W[r], W[s], W[o], W[l]), x = r, _ = s, M = o, b = l), g = e, S = !1;
                else if (e !== g || c !== S) {
                    if (v === i && y === i || (t1.blendEquation(32774), v = i, y = i), c) switch(e){
                        case 1:
                            t1.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            t1.blendFunc(1, 1);
                            break;
                        case 3:
                            t1.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t1.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    else switch(e){
                        case 1:
                            t1.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            t1.blendFunc(770, 1);
                            break;
                        case 3:
                            t1.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t1.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    x = null, _ = null, M = null, b = null, g = e, S = c;
                }
            } else !0 === f && (V(3042), f = !1);
        }
        function q(e) {
            w !== e && (e ? t1.frontFace(2304) : t1.frontFace(2305), w = e);
        }
        function X(e) {
            0 !== e ? (G(2884), e !== T && (1 === e ? t1.cullFace(1029) : 2 === e ? t1.cullFace(1028) : t1.cullFace(1032))) : V(2884), T = e;
        }
        function Y(e, i, n) {
            e ? (G(32823), E === i && C === n || (t1.polygonOffset(i, n), E = i, C = n)) : V(32823);
        }
        return {
            buffers: {
                color: s,
                depth: a,
                stencil: o
            },
            enable: G,
            disable: V,
            bindFramebuffer: function(e, i) {
                return u[e] !== i && (t1.bindFramebuffer(e, i), u[e] = i, r && (36009 === e && (u[36160] = i), 36160 === e && (u[36009] = i)), !0);
            },
            drawBuffers: function(i, r) {
                let s = p, a = !1;
                if (i) {
                    if (s = d.get(r), void 0 === s && (s = [], d.set(r, s)), i.isWebGLMultipleRenderTargets) {
                        const t1 = i.texture;
                        if (s.length !== t1.length || 36064 !== s[0]) {
                            for(let e = 0, i = t1.length; e < i; e++)s[e] = 36064 + e;
                            s.length = t1.length, a = !0;
                        }
                    } else 36064 !== s[0] && (s[0] = 36064, a = !0);
                } else 1029 !== s[0] && (s[0] = 1029, a = !0);
                a && (n.isWebGL2 ? t1.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
            },
            useProgram: function(e) {
                return m !== e && (t1.useProgram(e), m = e, !0);
            },
            setBlending: j,
            setMaterial: function(t1, e) {
                2 === t1.side ? V(2884) : G(2884);
                let i = 1 === t1.side;
                e && (i = !i), q(i), 1 === t1.blending && !1 === t1.transparent ? j(0) : j(t1.blending, t1.blendEquation, t1.blendSrc, t1.blendDst, t1.blendEquationAlpha, t1.blendSrcAlpha, t1.blendDstAlpha, t1.premultipliedAlpha), a.setFunc(t1.depthFunc), a.setTest(t1.depthTest), a.setMask(t1.depthWrite), s.setMask(t1.colorWrite);
                const n = t1.stencilWrite;
                o.setTest(n), n && (o.setMask(t1.stencilWriteMask), o.setFunc(t1.stencilFunc, t1.stencilRef, t1.stencilFuncMask), o.setOp(t1.stencilFail, t1.stencilZFail, t1.stencilZPass)), Y(t1.polygonOffset, t1.polygonOffsetFactor, t1.polygonOffsetUnits), !0 === t1.alphaToCoverage ? G(32926) : V(32926);
            },
            setFlipSided: q,
            setCullFace: X,
            setLineWidth: function(e) {
                e !== A && (R && t1.lineWidth(e), A = e);
            },
            setPolygonOffset: Y,
            setScissorTest: function(t1) {
                t1 ? G(3089) : V(3089);
            },
            activeTexture: function(e) {
                void 0 === e && (e = 33984 + L - 1), D !== e && (t1.activeTexture(e), D = e);
            },
            bindTexture: function(e, i, n) {
                void 0 === n && (n = null === D ? 33984 + L - 1 : D);
                let r = N[n];
                void 0 === r && (r = {
                    type: void 0,
                    texture: void 0
                }, N[n] = r), r.type === e && r.texture === i || (D !== n && (t1.activeTexture(n), D = n), t1.bindTexture(e, i || k[e]), r.type = e, r.texture = i);
            },
            unbindTexture: function() {
                const e = N[D];
                void 0 !== e && void 0 !== e.type && (t1.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
            },
            compressedTexImage2D: function() {
                try {
                    t1.compressedTexImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            compressedTexImage3D: function() {
                try {
                    t1.compressedTexImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texImage2D: function() {
                try {
                    t1.texImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texImage3D: function() {
                try {
                    t1.texImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            updateUBOMapping: function(e, i) {
                let n = c.get(i);
                void 0 === n && (n = new WeakMap, c.set(i, n));
                let r = n.get(e);
                void 0 === r && (r = t1.getUniformBlockIndex(i, e.name), n.set(e, r));
            },
            uniformBlockBinding: function(e, i) {
                const n = c.get(i).get(e);
                l.get(i) !== n && (t1.uniformBlockBinding(i, n, e.__bindingPointIndex), l.set(i, n));
            },
            texStorage2D: function() {
                try {
                    t1.texStorage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texStorage3D: function() {
                try {
                    t1.texStorage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texSubImage2D: function() {
                try {
                    t1.texSubImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texSubImage3D: function() {
                try {
                    t1.texSubImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            compressedTexSubImage2D: function() {
                try {
                    t1.compressedTexSubImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            compressedTexSubImage3D: function() {
                try {
                    t1.compressedTexSubImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            scissor: function(e) {
                !1 === U.equals(e) && (t1.scissor(e.x, e.y, e.z, e.w), U.copy(e));
            },
            viewport: function(e) {
                !1 === B.equals(e) && (t1.viewport(e.x, e.y, e.z, e.w), B.copy(e));
            },
            reset: function() {
                t1.disable(3042), t1.disable(2884), t1.disable(2929), t1.disable(32823), t1.disable(3089), t1.disable(2960), t1.disable(32926), t1.blendEquation(32774), t1.blendFunc(1, 0), t1.blendFuncSeparate(1, 0, 1, 0), t1.colorMask(!0, !0, !0, !0), t1.clearColor(0, 0, 0, 0), t1.depthMask(!0), t1.depthFunc(513), t1.clearDepth(1), t1.stencilMask(4294967295), t1.stencilFunc(519, 0, 4294967295), t1.stencilOp(7680, 7680, 7680), t1.clearStencil(0), t1.cullFace(1029), t1.frontFace(2305), t1.polygonOffset(0, 0), t1.activeTexture(33984), t1.bindFramebuffer(36160, null), !0 === r && (t1.bindFramebuffer(36009, null), t1.bindFramebuffer(36008, null)), t1.useProgram(null), t1.lineWidth(1), t1.scissor(0, 0, t1.canvas.width, t1.canvas.height), t1.viewport(0, 0, t1.canvas.width, t1.canvas.height), h = {}, D = null, N = {}, u = {}, d = new WeakMap, p = [], m = null, f = !1, g = null, v = null, x = null, _ = null, y = null, M = null, b = null, S = !1, w = null, T = null, A = null, E = null, C = null, U.set(0, 0, t1.canvas.width, t1.canvas.height), B.set(0, 0, t1.canvas.width, t1.canvas.height), s.reset(), a.reset(), o.reset();
            }
        };
    }
    function ks(t1, e, i, n, r, s, a) {
        const o = r.isWebGL2, l = r.maxTextures, E = r.maxCubemapSize, C = r.maxTextureSize, L = r.maxSamples, R = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, P = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), I = new WeakMap;
        let D;
        const N = new WeakMap;
        let O = !1;
        try {
            O = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t1) {}
        function z(t1, e) {
            return O ? new OffscreenCanvas(t1, e) : Bt("canvas");
        }
        function U(t1, e, i, n) {
            let r = 1;
            if ((t1.width > n || t1.height > n) && (r = n / Math.max(t1.width, t1.height)), r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap) {
                    const n = e ? Ct : Math.floor, s = n(r * t1.width), a = n(r * t1.height);
                    void 0 === D && (D = z(s, a));
                    const o = i ? z(s, a) : D;
                    o.width = s, o.height = a;
                    return o.getContext("2d").drawImage(t1, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t1.width + "x" + t1.height + ") to (" + s + "x" + a + ")."), o;
                }
                return "data" in t1 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t1.width + "x" + t1.height + ")."), t1;
            }
            return t1;
        }
        function B(t1) {
            return At(t1.width) && At(t1.height);
        }
        function F(t1, e) {
            return t1.generateMipmaps && e && t1.minFilter !== d && t1.minFilter !== f;
        }
        function k(e) {
            t1.generateMipmap(e);
        }
        function G(i, n, r, s, a = !1) {
            if (!1 === o) return n;
            if (null !== i) {
                if (void 0 !== t1[i]) return t1[i];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'");
            }
            let l = n;
            return 6403 === n && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === n && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === n && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === ht && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l;
        }
        function V(t1, e, i) {
            return !0 === F(t1, i) || t1.isFramebufferTexture && t1.minFilter !== d && t1.minFilter !== f ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t1.mipmaps && t1.mipmaps.length > 0 ? t1.mipmaps.length : t1.isCompressedTexture && Array.isArray(t1.image) ? e.mipmaps.length : 1;
        }
        function H(t1) {
            return t1 === d || t1 === p || t1 === m ? 9728 : 9729;
        }
        function W(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", W), function(t1) {
                const e = n.get(t1);
                if (void 0 === e.__webglInit) return;
                const i = t1.source, r = N.get(i);
                if (r) {
                    const n = r[e.__cacheKey];
                    n.usedTimes--, 0 === n.usedTimes && q(t1), 0 === Object.keys(r).length && N.delete(i);
                }
                n.remove(t1);
            }(e), e.isVideoTexture && I.delete(e);
        }
        function j(e) {
            const i = e.target;
            i.removeEventListener("dispose", j), function(e) {
                const i = e.texture, r = n.get(e), s = n.get(i);
                void 0 !== s.__webglTexture && (t1.deleteTexture(s.__webglTexture), a.memory.textures--);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget) for(let e = 0; e < 6; e++)t1.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t1.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                else {
                    if (t1.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t1.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t1.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer) for(let e = 0; e < r.__webglColorRenderbuffer.length; e++)r.__webglColorRenderbuffer[e] && t1.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                    r.__webglDepthRenderbuffer && t1.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                }
                if (e.isWebGLMultipleRenderTargets) for(let e = 0, r = i.length; e < r; e++){
                    const r = n.get(i[e]);
                    r.__webglTexture && (t1.deleteTexture(r.__webglTexture), a.memory.textures--), n.remove(i[e]);
                }
                n.remove(i), n.remove(e);
            }(i);
        }
        function q(e) {
            const i = n.get(e);
            t1.deleteTexture(i.__webglTexture);
            const r = e.source;
            delete N.get(r)[i.__cacheKey], a.memory.textures--;
        }
        let X = 0;
        function Y(t1, e) {
            const r = n.get(t1);
            if (t1.isVideoTexture && function(t1) {
                const e = a.render.frame;
                I.get(t1) !== e && (I.set(t1, e), t1.update());
            }(t1), !1 === t1.isRenderTargetTexture && t1.version > 0 && r.__version !== t1.version) {
                const i = t1.image;
                if (null === i) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else {
                    if (!1 !== i.complete) return void Q(r, t1, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                }
            }
            i.bindTexture(3553, r.__webglTexture, 33984 + e);
        }
        const Z = {
            [c]: 10497,
            [h]: 33071,
            [u]: 33648
        }, J = {
            [d]: 9728,
            [p]: 9984,
            [m]: 9986,
            [f]: 9729,
            [g]: 9985,
            [v]: 9987
        };
        function K(i, s, a) {
            if (a ? (t1.texParameteri(i, 10242, Z[s.wrapS]), t1.texParameteri(i, 10243, Z[s.wrapT]), 32879 !== i && 35866 !== i || t1.texParameteri(i, 32882, Z[s.wrapR]), t1.texParameteri(i, 10240, J[s.magFilter]), t1.texParameteri(i, 10241, J[s.minFilter])) : (t1.texParameteri(i, 10242, 33071), t1.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t1.texParameteri(i, 32882, 33071), s.wrapS === h && s.wrapT === h || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t1.texParameteri(i, 10240, H(s.magFilter)), t1.texParameteri(i, 10241, H(s.minFilter)), s.minFilter !== d && s.minFilter !== f && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
                const a = e.get("EXT_texture_filter_anisotropic");
                if (s.magFilter === d) return;
                if (s.minFilter !== m && s.minFilter !== v) return;
                if (s.type === M && !1 === e.has("OES_texture_float_linear")) return;
                if (!1 === o && s.type === b && !1 === e.has("OES_texture_half_float_linear")) return;
                (s.anisotropy > 1 || n.get(s).__currentAnisotropy) && (t1.texParameterf(i, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), n.get(s).__currentAnisotropy = s.anisotropy);
            }
        }
        function $(e, i) {
            let n = !1;
            void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", W));
            const r = i.source;
            let s = N.get(r);
            void 0 === s && (s = {}, N.set(r, s));
            const o = function(t1) {
                const e = [];
                return e.push(t1.wrapS), e.push(t1.wrapT), e.push(t1.wrapR || 0), e.push(t1.magFilter), e.push(t1.minFilter), e.push(t1.anisotropy), e.push(t1.internalFormat), e.push(t1.format), e.push(t1.type), e.push(t1.generateMipmaps), e.push(t1.premultiplyAlpha), e.push(t1.flipY), e.push(t1.unpackAlignment), e.push(t1.encoding), e.join();
            }(i);
            if (o !== e.__cacheKey) {
                void 0 === s[o] && (s[o] = {
                    texture: t1.createTexture(),
                    usedTimes: 0
                }, a.memory.textures++, n = !0), s[o].usedTimes++;
                const r = s[e.__cacheKey];
                void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && q(i)), e.__cacheKey = o, e.__webglTexture = s[o].texture;
            }
            return n;
        }
        function Q(e, r, a) {
            let l = 3553;
            (r.isDataArrayTexture || r.isCompressedArrayTexture) && (l = 35866), r.isData3DTexture && (l = 32879);
            const c = $(e, r), u = r.source;
            i.bindTexture(l, e.__webglTexture, 33984 + a);
            const p = n.get(u);
            if (u.version !== p.__version || !0 === c) {
                i.activeTexture(33984 + a), t1.pixelStorei(37440, r.flipY), t1.pixelStorei(37441, r.premultiplyAlpha), t1.pixelStorei(3317, r.unpackAlignment), t1.pixelStorei(37443, 0);
                const e = function(t1) {
                    return !o && (t1.wrapS !== h || t1.wrapT !== h || t1.minFilter !== d && t1.minFilter !== f);
                }(r) && !1 === B(r.image);
                let n = U(r.image, e, !1, C);
                n = st(r, n);
                const m = B(n) || o, g = s.convert(r.format, r.encoding);
                let v, x = s.convert(r.type), b = G(r.internalFormat, g, x, r.encoding, r.isVideoTexture);
                K(l, r, m);
                const E = r.mipmaps, L = o && !0 !== r.isVideoTexture, R = void 0 === p.__version || !0 === c, P = V(r, n, m);
                if (r.isDepthTexture) b = 6402, o ? b = r.type === M ? 36012 : r.type === y ? 33190 : r.type === S ? 35056 : 33189 : r.type === M && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r.format === T && 6402 === b && r.type !== _ && r.type !== y && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = y, x = s.convert(r.type)), r.format === A && 6402 === b && (b = 34041, r.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = S, x = s.convert(r.type))), R && (L ? i.texStorage2D(3553, 1, b, n.width, n.height) : i.texImage2D(3553, 0, b, n.width, n.height, 0, g, x, null));
                else if (r.isDataTexture) {
                    if (E.length > 0 && m) {
                        L && R && i.texStorage2D(3553, P, b, E[0].width, E[0].height);
                        for(let t1 = 0, e = E.length; t1 < e; t1++)v = E[t1], L ? i.texSubImage2D(3553, t1, 0, 0, v.width, v.height, g, x, v.data) : i.texImage2D(3553, t1, b, v.width, v.height, 0, g, x, v.data);
                        r.generateMipmaps = !1;
                    } else L ? (R && i.texStorage2D(3553, P, b, n.width, n.height), i.texSubImage2D(3553, 0, 0, 0, n.width, n.height, g, x, n.data)) : i.texImage2D(3553, 0, b, n.width, n.height, 0, g, x, n.data);
                } else if (r.isCompressedTexture) {
                    if (r.isCompressedArrayTexture) {
                        L && R && i.texStorage3D(35866, P, b, E[0].width, E[0].height, n.depth);
                        for(let t1 = 0, e = E.length; t1 < e; t1++)v = E[t1], r.format !== w ? null !== g ? L ? i.compressedTexSubImage3D(35866, t1, 0, 0, 0, v.width, v.height, n.depth, g, v.data, 0, 0) : i.compressedTexImage3D(35866, t1, b, v.width, v.height, n.depth, 0, v.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : L ? i.texSubImage3D(35866, t1, 0, 0, 0, v.width, v.height, n.depth, g, x, v.data) : i.texImage3D(35866, t1, b, v.width, v.height, n.depth, 0, g, x, v.data);
                    } else {
                        L && R && i.texStorage2D(3553, P, b, E[0].width, E[0].height);
                        for(let t1 = 0, e = E.length; t1 < e; t1++)v = E[t1], r.format !== w ? null !== g ? L ? i.compressedTexSubImage2D(3553, t1, 0, 0, v.width, v.height, g, v.data) : i.compressedTexImage2D(3553, t1, b, v.width, v.height, 0, v.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : L ? i.texSubImage2D(3553, t1, 0, 0, v.width, v.height, g, x, v.data) : i.texImage2D(3553, t1, b, v.width, v.height, 0, g, x, v.data);
                    }
                } else if (r.isDataArrayTexture) L ? (R && i.texStorage3D(35866, P, b, n.width, n.height, n.depth), i.texSubImage3D(35866, 0, 0, 0, 0, n.width, n.height, n.depth, g, x, n.data)) : i.texImage3D(35866, 0, b, n.width, n.height, n.depth, 0, g, x, n.data);
                else if (r.isData3DTexture) L ? (R && i.texStorage3D(32879, P, b, n.width, n.height, n.depth), i.texSubImage3D(32879, 0, 0, 0, 0, n.width, n.height, n.depth, g, x, n.data)) : i.texImage3D(32879, 0, b, n.width, n.height, n.depth, 0, g, x, n.data);
                else if (r.isFramebufferTexture) {
                    if (R) {
                        if (L) i.texStorage2D(3553, P, b, n.width, n.height);
                        else {
                            let t1 = n.width, e = n.height;
                            for(let n = 0; n < P; n++)i.texImage2D(3553, n, b, t1, e, 0, g, x, null), t1 >>= 1, e >>= 1;
                        }
                    }
                } else if (E.length > 0 && m) {
                    L && R && i.texStorage2D(3553, P, b, E[0].width, E[0].height);
                    for(let t1 = 0, e = E.length; t1 < e; t1++)v = E[t1], L ? i.texSubImage2D(3553, t1, 0, 0, g, x, v) : i.texImage2D(3553, t1, b, g, x, v);
                    r.generateMipmaps = !1;
                } else L ? (R && i.texStorage2D(3553, P, b, n.width, n.height), i.texSubImage2D(3553, 0, 0, 0, g, x, n)) : i.texImage2D(3553, 0, b, g, x, n);
                F(r, m) && k(l), p.__version = u.version, r.onUpdate && r.onUpdate(r);
            }
            e.__version = r.version;
        }
        function tt(e, r, a, o, l) {
            const c = s.convert(a.format, a.encoding), h = s.convert(a.type), u = G(a.internalFormat, c, h, a.encoding);
            n.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? i.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : i.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), i.bindFramebuffer(36160, e), rt(r) ? R.framebufferTexture2DMultisampleEXT(36160, o, l, n.get(a).__webglTexture, 0, nt(r)) : (3553 === l || l >= 34069 && l <= 34074) && t1.framebufferTexture2D(36160, o, l, n.get(a).__webglTexture, 0), i.bindFramebuffer(36160, null);
        }
        function et(e, i, n) {
            if (t1.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
                let r = 33189;
                if (n || rt(i)) {
                    const e = i.depthTexture;
                    e && e.isDepthTexture && (e.type === M ? r = 36012 : e.type === y && (r = 33190));
                    const n = nt(i);
                    rt(i) ? R.renderbufferStorageMultisampleEXT(36161, n, r, i.width, i.height) : t1.renderbufferStorageMultisample(36161, n, r, i.width, i.height);
                } else t1.renderbufferStorage(36161, r, i.width, i.height);
                t1.framebufferRenderbuffer(36160, 36096, 36161, e);
            } else if (i.depthBuffer && i.stencilBuffer) {
                const r = nt(i);
                n && !1 === rt(i) ? t1.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height) : rt(i) ? R.renderbufferStorageMultisampleEXT(36161, r, 35056, i.width, i.height) : t1.renderbufferStorage(36161, 34041, i.width, i.height), t1.framebufferRenderbuffer(36160, 33306, 36161, e);
            } else {
                const e = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [
                    i.texture
                ];
                for(let r = 0; r < e.length; r++){
                    const a = e[r], o = s.convert(a.format, a.encoding), l = s.convert(a.type), c = G(a.internalFormat, o, l, a.encoding), h = nt(i);
                    n && !1 === rt(i) ? t1.renderbufferStorageMultisample(36161, h, c, i.width, i.height) : rt(i) ? R.renderbufferStorageMultisampleEXT(36161, h, c, i.width, i.height) : t1.renderbufferStorage(36161, c, i.width, i.height);
                }
            }
            t1.bindRenderbuffer(36161, null);
        }
        function it(e) {
            const r = n.get(e), s = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
                if (s) throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (i.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), Y(r.depthTexture, 0);
                    const s = n.get(r.depthTexture).__webglTexture, a = nt(r);
                    if (r.depthTexture.format === T) rt(r) ? R.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t1.framebufferTexture2D(36160, 36096, 3553, s, 0);
                    else {
                        if (r.depthTexture.format !== A) throw new Error("Unknown depthTexture format");
                        rt(r) ? R.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t1.framebufferTexture2D(36160, 33306, 3553, s, 0);
                    }
                }(r.__webglFramebuffer, e);
            } else if (s) {
                r.__webglDepthbuffer = [];
                for(let n = 0; n < 6; n++)i.bindFramebuffer(36160, r.__webglFramebuffer[n]), r.__webglDepthbuffer[n] = t1.createRenderbuffer(), et(r.__webglDepthbuffer[n], e, !1);
            } else i.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t1.createRenderbuffer(), et(r.__webglDepthbuffer, e, !1);
            i.bindFramebuffer(36160, null);
        }
        function nt(t1) {
            return Math.min(L, t1.samples);
        }
        function rt(t1) {
            const i = n.get(t1);
            return o && t1.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== i.__useRenderToTexture;
        }
        function st(t1, i) {
            const n = t1.encoding, r = t1.format, s = t1.type;
            return !0 === t1.isCompressedTexture || !0 === t1.isVideoTexture || t1.format === gt || n !== ct && (n === ht ? !1 === o ? !0 === e.has("EXT_sRGB") && r === w ? (t1.format = gt, t1.minFilter = f, t1.generateMipmaps = !1) : i = Kt.sRGBToLinear(i) : r === w && s === x || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n)), i;
        }
        this.allocateTextureUnit = function() {
            const t1 = X;
            return t1 >= l && console.warn("THREE.WebGLTextures: Trying to use " + t1 + " texture units while this GPU supports only " + l), X += 1, t1;
        }, this.resetTextureUnits = function() {
            X = 0;
        }, this.setTexture2D = Y, this.setTexture2DArray = function(t1, e) {
            const r = n.get(t1);
            t1.version > 0 && r.__version !== t1.version ? Q(r, t1, e) : i.bindTexture(35866, r.__webglTexture, 33984 + e);
        }, this.setTexture3D = function(t1, e) {
            const r = n.get(t1);
            t1.version > 0 && r.__version !== t1.version ? Q(r, t1, e) : i.bindTexture(32879, r.__webglTexture, 33984 + e);
        }, this.setTextureCube = function(e, r) {
            const a = n.get(e);
            e.version > 0 && a.__version !== e.version ? function(e, r, a) {
                if (6 !== r.image.length) return;
                const l = $(e, r), c = r.source;
                i.bindTexture(34067, e.__webglTexture, 33984 + a);
                const h = n.get(c);
                if (c.version !== h.__version || !0 === l) {
                    i.activeTexture(33984 + a), t1.pixelStorei(37440, r.flipY), t1.pixelStorei(37441, r.premultiplyAlpha), t1.pixelStorei(3317, r.unpackAlignment), t1.pixelStorei(37443, 0);
                    const e = r.isCompressedTexture || r.image[0].isCompressedTexture, n = r.image[0] && r.image[0].isDataTexture, u = [];
                    for(let t1 = 0; t1 < 6; t1++)u[t1] = e || n ? n ? r.image[t1].image : r.image[t1] : U(r.image[t1], !1, !0, E), u[t1] = st(r, u[t1]);
                    const d = u[0], p = B(d) || o, m = s.convert(r.format, r.encoding), f = s.convert(r.type), g = G(r.internalFormat, m, f, r.encoding), v = o && !0 !== r.isVideoTexture, x = void 0 === h.__version || !0 === l;
                    let _, y = V(r, d, p);
                    if (K(34067, r, p), e) {
                        v && x && i.texStorage2D(34067, y, g, d.width, d.height);
                        for(let t1 = 0; t1 < 6; t1++){
                            _ = u[t1].mipmaps;
                            for(let e = 0; e < _.length; e++){
                                const n = _[e];
                                r.format !== w ? null !== m ? v ? i.compressedTexSubImage2D(34069 + t1, e, 0, 0, n.width, n.height, m, n.data) : i.compressedTexImage2D(34069 + t1, e, g, n.width, n.height, 0, n.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v ? i.texSubImage2D(34069 + t1, e, 0, 0, n.width, n.height, m, f, n.data) : i.texImage2D(34069 + t1, e, g, n.width, n.height, 0, m, f, n.data);
                            }
                        }
                    } else {
                        _ = r.mipmaps, v && x && (_.length > 0 && y++, i.texStorage2D(34067, y, g, u[0].width, u[0].height));
                        for(let t1 = 0; t1 < 6; t1++)if (n) {
                            v ? i.texSubImage2D(34069 + t1, 0, 0, 0, u[t1].width, u[t1].height, m, f, u[t1].data) : i.texImage2D(34069 + t1, 0, g, u[t1].width, u[t1].height, 0, m, f, u[t1].data);
                            for(let e = 0; e < _.length; e++){
                                const n = _[e].image[t1].image;
                                v ? i.texSubImage2D(34069 + t1, e + 1, 0, 0, n.width, n.height, m, f, n.data) : i.texImage2D(34069 + t1, e + 1, g, n.width, n.height, 0, m, f, n.data);
                            }
                        } else {
                            v ? i.texSubImage2D(34069 + t1, 0, 0, 0, m, f, u[t1]) : i.texImage2D(34069 + t1, 0, g, m, f, u[t1]);
                            for(let e = 0; e < _.length; e++){
                                const n = _[e];
                                v ? i.texSubImage2D(34069 + t1, e + 1, 0, 0, m, f, n.image[t1]) : i.texImage2D(34069 + t1, e + 1, g, m, f, n.image[t1]);
                            }
                        }
                    }
                    F(r, p) && k(34067), h.__version = c.version, r.onUpdate && r.onUpdate(r);
                }
                e.__version = r.version;
            }(a, e, r) : i.bindTexture(34067, a.__webglTexture, 33984 + r);
        }, this.rebindTextures = function(t1, e, i) {
            const r = n.get(t1);
            void 0 !== e && tt(r.__webglFramebuffer, t1, t1.texture, 36064, 3553), void 0 !== i && it(t1);
        }, this.setupRenderTarget = function(e) {
            const l = e.texture, c = n.get(e), h = n.get(l);
            e.addEventListener("dispose", j), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t1.createTexture()), h.__version = l.version, a.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = B(e) || o;
            if (u) {
                c.__webglFramebuffer = [];
                for(let e = 0; e < 6; e++)c.__webglFramebuffer[e] = t1.createFramebuffer();
            } else {
                if (c.__webglFramebuffer = t1.createFramebuffer(), d) {
                    if (r.drawBuffers) {
                        const i = e.texture;
                        for(let e = 0, r = i.length; e < r; e++){
                            const r = n.get(i[e]);
                            void 0 === r.__webglTexture && (r.__webglTexture = t1.createTexture(), a.memory.textures++);
                        }
                    } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                }
                if (o && e.samples > 0 && !1 === rt(e)) {
                    const n = d ? l : [
                        l
                    ];
                    c.__webglMultisampledFramebuffer = t1.createFramebuffer(), c.__webglColorRenderbuffer = [], i.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
                    for(let i = 0; i < n.length; i++){
                        const r = n[i];
                        c.__webglColorRenderbuffer[i] = t1.createRenderbuffer(), t1.bindRenderbuffer(36161, c.__webglColorRenderbuffer[i]);
                        const a = s.convert(r.format, r.encoding), o = s.convert(r.type), l = G(r.internalFormat, a, o, r.encoding, !0 === e.isXRRenderTarget), h = nt(e);
                        t1.renderbufferStorageMultisample(36161, h, l, e.width, e.height), t1.framebufferRenderbuffer(36160, 36064 + i, 36161, c.__webglColorRenderbuffer[i]);
                    }
                    t1.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t1.createRenderbuffer(), et(c.__webglDepthRenderbuffer, e, !0)), i.bindFramebuffer(36160, null);
                }
            }
            if (u) {
                i.bindTexture(34067, h.__webglTexture), K(34067, l, p);
                for(let t1 = 0; t1 < 6; t1++)tt(c.__webglFramebuffer[t1], e, l, 36064, 34069 + t1);
                F(l, p) && k(34067), i.unbindTexture();
            } else if (d) {
                const t1 = e.texture;
                for(let r = 0, s = t1.length; r < s; r++){
                    const s = t1[r], a = n.get(s);
                    i.bindTexture(3553, a.__webglTexture), K(3553, s, p), tt(c.__webglFramebuffer, e, s, 36064 + r, 3553), F(s, p) && k(3553);
                }
                i.unbindTexture();
            } else {
                let t1 = 3553;
                (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t1 = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), i.bindTexture(t1, h.__webglTexture), K(t1, l, p), tt(c.__webglFramebuffer, e, l, 36064, t1), F(l, p) && k(t1), i.unbindTexture();
            }
            e.depthBuffer && it(e);
        }, this.updateRenderTargetMipmap = function(t1) {
            const e = B(t1) || o, r = !0 === t1.isWebGLMultipleRenderTargets ? t1.texture : [
                t1.texture
            ];
            for(let s = 0, a = r.length; s < a; s++){
                const a = r[s];
                if (F(a, e)) {
                    const e = t1.isWebGLCubeRenderTarget ? 34067 : 3553, r = n.get(a).__webglTexture;
                    i.bindTexture(e, r), k(e), i.unbindTexture();
                }
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (o && e.samples > 0 && !1 === rt(e)) {
                const r = e.isWebGLMultipleRenderTargets ? e.texture : [
                    e.texture
                ], s = e.width, a = e.height;
                let o = 16384;
                const l = [], c = e.stencilBuffer ? 33306 : 36096, h = n.get(e), u = !0 === e.isWebGLMultipleRenderTargets;
                if (u) for(let e = 0; e < r.length; e++)i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t1.framebufferRenderbuffer(36160, 36064 + e, 36161, null), i.bindFramebuffer(36160, h.__webglFramebuffer), t1.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
                i.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, h.__webglFramebuffer);
                for(let i = 0; i < r.length; i++){
                    l.push(36064 + i), e.depthBuffer && l.push(c);
                    const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
                    if (!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t1.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[i]), !0 === d && (t1.invalidateFramebuffer(36008, [
                        c
                    ]), t1.invalidateFramebuffer(36009, [
                        c
                    ])), u) {
                        const e = n.get(r[i]).__webglTexture;
                        t1.framebufferTexture2D(36009, 36064, 3553, e, 0);
                    }
                    t1.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728), P && t1.invalidateFramebuffer(36008, l);
                }
                if (i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, null), u) for(let e = 0; e < r.length; e++){
                    i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t1.framebufferRenderbuffer(36160, 36064 + e, 36161, h.__webglColorRenderbuffer[e]);
                    const s = n.get(r[e]).__webglTexture;
                    i.bindFramebuffer(36160, h.__webglFramebuffer), t1.framebufferTexture2D(36009, 36064 + e, 3553, s, 0);
                }
                i.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
            }
        }, this.setupDepthRenderbuffer = it, this.setupFrameBufferTexture = tt, this.useMultisampledRTT = rt;
    }
    function Gs(t1, e, i) {
        const n = i.isWebGL2;
        return {
            convert: function(i, r = null) {
                let s;
                if (i === x) return 5121;
                if (1017 === i) return 32819;
                if (1018 === i) return 32820;
                if (1010 === i) return 5120;
                if (1011 === i) return 5122;
                if (i === _) return 5123;
                if (1013 === i) return 5124;
                if (i === y) return 5125;
                if (i === M) return 5126;
                if (i === b) return n ? 5131 : (s = e.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null);
                if (1021 === i) return 6406;
                if (i === w) return 6408;
                if (1024 === i) return 6409;
                if (1025 === i) return 6410;
                if (i === T) return 6402;
                if (i === A) return 34041;
                if (i === gt) return s = e.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null;
                if (1028 === i) return 6403;
                if (1029 === i) return 36244;
                if (1030 === i) return 33319;
                if (1031 === i) return 33320;
                if (1033 === i) return 36249;
                if (i === E || i === C || i === L || i === R) {
                    if (r === ht) {
                        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === s) return null;
                        if (i === E) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (i === C) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (i === L) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (i === R) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                    } else {
                        if (s = e.get("WEBGL_compressed_texture_s3tc"), null === s) return null;
                        if (i === E) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (i === C) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (i === L) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (i === R) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    }
                }
                if (i === P || i === I || i === D || i === N) {
                    if (s = e.get("WEBGL_compressed_texture_pvrtc"), null === s) return null;
                    if (i === P) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (i === I) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (i === D) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (i === N) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
                if (36196 === i) return s = e.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
                if (i === O || i === z) {
                    if (s = e.get("WEBGL_compressed_texture_etc"), null === s) return null;
                    if (i === O) return r === ht ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                    if (i === z) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
                }
                if (i === U || i === B || i === F || i === k || i === G || i === V || i === H || i === W || i === j || i === q || i === X || i === Y || i === Z || i === J) {
                    if (s = e.get("WEBGL_compressed_texture_astc"), null === s) return null;
                    if (i === U) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (i === B) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (i === F) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (i === k) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (i === G) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (i === V) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (i === H) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (i === W) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (i === j) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (i === q) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (i === X) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (i === Y) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (i === Z) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (i === J) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
                }
                if (i === K) {
                    if (s = e.get("EXT_texture_compression_bptc"), null === s) return null;
                    if (i === K) return r === ht ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                }
                if (36283 === i || i === $ || i === Q || i === tt) {
                    if (s = e.get("EXT_texture_compression_rgtc"), null === s) return null;
                    if (i === K) return s.COMPRESSED_RED_RGTC1_EXT;
                    if (i === $) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                    if (i === Q) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                    if (i === tt) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
                }
                return i === S ? n ? 34042 : (s = e.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t1[i] ? t1[i] : null;
            }
        };
    }
    class Vs extends an {
        constructor(t1 = []){
            super(), this.isArrayCamera = !0, this.cameras = t1;
        }
    }
    class Hs extends li {
        constructor(){
            super(), this.isGroup = !0, this.type = "Group";
        }
    }
    const Ws = {
        type: "move"
    };
    class js {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new Hs, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new Hs, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new oe, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new oe), this._targetRay;
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new Hs, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new oe, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new oe), this._grip;
        }
        dispatchEvent(t1) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t1), null !== this._grip && this._grip.dispatchEvent(t1), null !== this._hand && this._hand.dispatchEvent(t1), this;
        }
        connect(t1) {
            if (t1 && t1.hand) {
                const e = this._hand;
                if (e) for (const i of t1.hand.values())this._getHandJoint(e, i);
            }
            return this.dispatchEvent({
                type: "connected",
                data: t1
            }), this;
        }
        disconnect(t1) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t1
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
        }
        update(t1, e, i) {
            let n = null, r = null, s = null;
            const a = this._targetRay, o = this._grip, l = this._hand;
            if (t1 && "visible-blurred" !== e.session.visibilityState) {
                if (l && t1.hand) {
                    s = !0;
                    for (const n of t1.hand.values()){
                        const t1 = e.getJointPose(n, i), r = this._getHandJoint(l, n);
                        null !== t1 && (r.matrix.fromArray(t1.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t1.radius), r.visible = null !== t1;
                    }
                    const n = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = n.position.distanceTo(r.position), o = .02, c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: t1.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t1.handedness,
                        target: this
                    }));
                } else null !== o && t1.gripSpace && (r = e.getPose(t1.gripSpace, i), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
                null !== a && (n = e.getPose(t1.targetRaySpace, i), null === n && null !== r && (n = r), null !== n && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), n.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(n.linearVelocity)) : a.hasLinearVelocity = !1, n.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(n.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ws)));
            }
            return null !== a && (a.visible = null !== n), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
        }
        _getHandJoint(t1, e) {
            if (void 0 === t1.joints[e.jointName]) {
                const i = new Hs;
                i.matrixAutoUpdate = !1, i.visible = !1, t1.joints[e.jointName] = i, t1.add(i);
            }
            return t1.joints[e.jointName];
        }
    }
    class qs extends ee {
        constructor(t1, e, i, n, r, s, a, o, l, c){
            if ((c = void 0 !== c ? c : T) !== T && c !== A) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === i && c === T && (i = y), void 0 === i && c === A && (i = S), super(null, n, r, s, a, o, c, i, l), this.isDepthTexture = !0, this.image = {
                width: t1,
                height: e
            }, this.magFilter = void 0 !== a ? a : d, this.minFilter = void 0 !== o ? o : d, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    class Xs extends vt {
        constructor(t1, e){
            super();
            const i = this;
            let n = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, h = null, u = null, d = null, p = null;
            const m = e.getContextAttributes();
            let f = null, g = null;
            const v = [], _ = [], M = new Set, b = new Map, E = new an;
            E.layers.enable(1), E.viewport = new ie;
            const C = new an;
            C.layers.enable(2), C.viewport = new ie;
            const L = [
                E,
                C
            ], R = new Vs;
            R.layers.enable(1), R.layers.enable(2);
            let P = null, I = null;
            function D(t1) {
                const e = _.indexOf(t1.inputSource);
                if (-1 === e) return;
                const i = v[e];
                void 0 !== i && i.dispatchEvent({
                    type: t1.type,
                    data: t1.inputSource
                });
            }
            function N() {
                n.removeEventListener("select", D), n.removeEventListener("selectstart", D), n.removeEventListener("selectend", D), n.removeEventListener("squeeze", D), n.removeEventListener("squeezestart", D), n.removeEventListener("squeezeend", D), n.removeEventListener("end", N), n.removeEventListener("inputsourceschange", O);
                for(let t1 = 0; t1 < v.length; t1++){
                    const e = _[t1];
                    null !== e && (_[t1] = null, v[t1].disconnect(e));
                }
                P = null, I = null, t1.setRenderTarget(f), d = null, u = null, h = null, n = null, g = null, k.stop(), i.isPresenting = !1, i.dispatchEvent({
                    type: "sessionend"
                });
            }
            function O(t1) {
                for(let e = 0; e < t1.removed.length; e++){
                    const i = t1.removed[e], n = _.indexOf(i);
                    n >= 0 && (_[n] = null, v[n].disconnect(i));
                }
                for(let e = 0; e < t1.added.length; e++){
                    const i = t1.added[e];
                    let n = _.indexOf(i);
                    if (-1 === n) {
                        for(let t1 = 0; t1 < v.length; t1++){
                            if (t1 >= _.length) {
                                _.push(i), n = t1;
                                break;
                            }
                            if (null === _[t1]) {
                                _[t1] = i, n = t1;
                                break;
                            }
                        }
                        if (-1 === n) break;
                    }
                    const r = v[n];
                    r && r.connect(i);
                }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t1) {
                let e = v[t1];
                return void 0 === e && (e = new js, v[t1] = e), e.getTargetRaySpace();
            }, this.getControllerGrip = function(t1) {
                let e = v[t1];
                return void 0 === e && (e = new js, v[t1] = e), e.getGripSpace();
            }, this.getHand = function(t1) {
                let e = v[t1];
                return void 0 === e && (e = new js, v[t1] = e), e.getHandSpace();
            }, this.setFramebufferScaleFactor = function(t1) {
                r = t1, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(t1) {
                a = t1, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return l || s;
            }, this.setReferenceSpace = function(t1) {
                l = t1;
            }, this.getBaseLayer = function() {
                return null !== u ? u : d;
            }, this.getBinding = function() {
                return h;
            }, this.getFrame = function() {
                return p;
            }, this.getSession = function() {
                return n;
            }, this.setSession = async function(c) {
                if (n = c, null !== n) {
                    if (f = t1.getRenderTarget(), n.addEventListener("select", D), n.addEventListener("selectstart", D), n.addEventListener("selectend", D), n.addEventListener("squeeze", D), n.addEventListener("squeezestart", D), n.addEventListener("squeezeend", D), n.addEventListener("end", N), n.addEventListener("inputsourceschange", O), !0 !== m.xrCompatible && await e.makeXRCompatible(), void 0 === n.renderState.layers || !1 === t1.capabilities.isWebGL2) {
                        const i = {
                            antialias: void 0 !== n.renderState.layers || m.antialias,
                            alpha: m.alpha,
                            depth: m.depth,
                            stencil: m.stencil,
                            framebufferScaleFactor: r
                        };
                        d = new XRWebGLLayer(n, e, i), n.updateRenderState({
                            baseLayer: d
                        }), g = new ne(d.framebufferWidth, d.framebufferHeight, {
                            format: w,
                            type: x,
                            encoding: t1.outputEncoding,
                            stencilBuffer: m.stencil
                        });
                    } else {
                        let i = null, s = null, a = null;
                        m.depth && (a = m.stencil ? 35056 : 33190, i = m.stencil ? A : T, s = m.stencil ? S : y);
                        const o = {
                            colorFormat: 32856,
                            depthFormat: a,
                            scaleFactor: r
                        };
                        h = new XRWebGLBinding(n, e), u = h.createProjectionLayer(o), n.updateRenderState({
                            layers: [
                                u
                            ]
                        }), g = new ne(u.textureWidth, u.textureHeight, {
                            format: w,
                            type: x,
                            depthTexture: new qs(u.textureWidth, u.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, i),
                            stencilBuffer: m.stencil,
                            encoding: t1.outputEncoding,
                            samples: m.antialias ? 4 : 0
                        });
                        t1.properties.get(g).__ignoreDepthValues = u.ignoreDepthValues;
                    }
                    g.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = await n.requestReferenceSpace(a), k.setContext(n), k.start(), i.isPresenting = !0, i.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            };
            const z = new oe, U = new oe;
            function B(t1, e) {
                null === e ? t1.matrixWorld.copy(t1.matrix) : t1.matrixWorld.multiplyMatrices(e.matrixWorld, t1.matrix), t1.matrixWorldInverse.copy(t1.matrixWorld).invert();
            }
            this.updateCamera = function(t1) {
                if (null === n) return;
                R.near = C.near = E.near = t1.near, R.far = C.far = E.far = t1.far, P === R.near && I === R.far || (n.updateRenderState({
                    depthNear: R.near,
                    depthFar: R.far
                }), P = R.near, I = R.far);
                const e = t1.parent, i = R.cameras;
                B(R, e);
                for(let t1 = 0; t1 < i.length; t1++)B(i[t1], e);
                R.matrixWorld.decompose(R.position, R.quaternion, R.scale), t1.matrix.copy(R.matrix), t1.matrix.decompose(t1.position, t1.quaternion, t1.scale);
                const r = t1.children;
                for(let t1 = 0, e = r.length; t1 < e; t1++)r[t1].updateMatrixWorld(!0);
                2 === i.length ? function(t1, e, i) {
                    z.setFromMatrixPosition(e.matrixWorld), U.setFromMatrixPosition(i.matrixWorld);
                    const n = z.distanceTo(U), r = e.projectionMatrix.elements, s = i.projectionMatrix.elements, a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, m = n / (-h + u), f = m * -h;
                    e.matrixWorld.decompose(t1.position, t1.quaternion, t1.scale), t1.translateX(f), t1.translateZ(m), t1.matrixWorld.compose(t1.position, t1.quaternion, t1.scale), t1.matrixWorldInverse.copy(t1.matrixWorld).invert();
                    const g = a + m, v = o + m, x = d - f, _ = p + (n - f), y = l * o / v * g, M = c * o / v * g;
                    t1.projectionMatrix.makePerspective(x, _, y, M, g, v);
                }(R, E, C) : R.projectionMatrix.copy(E.projectionMatrix);
            }, this.getCamera = function() {
                return R;
            }, this.getFoveation = function() {
                if (null !== u || null !== d) return o;
            }, this.setFoveation = function(t1) {
                o = t1, null !== u && (u.fixedFoveation = t1), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t1);
            }, this.getPlanes = function() {
                return M;
            };
            let F = null;
            const k = new xn;
            k.setAnimationLoop(function(e, n) {
                if (c = n.getViewerPose(l || s), p = n, null !== c) {
                    const e = c.views;
                    null !== d && (t1.setRenderTargetFramebuffer(g, d.framebuffer), t1.setRenderTarget(g));
                    let i = !1;
                    e.length !== R.cameras.length && (R.cameras.length = 0, i = !0);
                    for(let n = 0; n < e.length; n++){
                        const r = e[n];
                        let s = null;
                        if (null !== d) s = d.getViewport(r);
                        else {
                            const e = h.getViewSubImage(u, r);
                            s = e.viewport, 0 === n && (t1.setRenderTargetTextures(g, e.colorTexture, u.ignoreDepthValues ? void 0 : e.depthStencilTexture), t1.setRenderTarget(g));
                        }
                        let a = L[n];
                        void 0 === a && (a = new an, a.layers.enable(n), a.viewport = new ie, L[n] = a), a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === n && R.matrix.copy(a.matrix), !0 === i && R.cameras.push(a);
                    }
                }
                for(let t1 = 0; t1 < v.length; t1++){
                    const e = _[t1], i = v[t1];
                    null !== e && void 0 !== i && i.update(e, n, l || s);
                }
                if (F && F(e, n), n.detectedPlanes) {
                    i.dispatchEvent({
                        type: "planesdetected",
                        data: n.detectedPlanes
                    });
                    let t1 = null;
                    for (const e of M)n.detectedPlanes.has(e) || (null === t1 && (t1 = []), t1.push(e));
                    if (null !== t1) for (const e of t1)M.delete(e), b.delete(e), i.dispatchEvent({
                        type: "planeremoved",
                        data: e
                    });
                    for (const t1 of n.detectedPlanes)if (M.has(t1)) {
                        const e = b.get(t1);
                        t1.lastChangedTime > e && (b.set(t1, t1.lastChangedTime), i.dispatchEvent({
                            type: "planechanged",
                            data: t1
                        }));
                    } else M.add(t1), b.set(t1, n.lastChangedTime), i.dispatchEvent({
                        type: "planeadded",
                        data: t1
                    });
                }
                p = null;
            }), this.setAnimationLoop = function(t1) {
                F = t1;
            }, this.dispose = function() {};
        }
    }
    function Ys(t1, e) {
        function i(i, n) {
            i.opacity.value = n.opacity, n.color && i.diffuse.value.copy(n.color), n.emissive && i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (i.map.value = n.map), n.alphaMap && (i.alphaMap.value = n.alphaMap), n.bumpMap && (i.bumpMap.value = n.bumpMap, i.bumpScale.value = n.bumpScale, 1 === n.side && (i.bumpScale.value *= -1)), n.displacementMap && (i.displacementMap.value = n.displacementMap, i.displacementScale.value = n.displacementScale, i.displacementBias.value = n.displacementBias), n.emissiveMap && (i.emissiveMap.value = n.emissiveMap), n.normalMap && (i.normalMap.value = n.normalMap, i.normalScale.value.copy(n.normalScale), 1 === n.side && i.normalScale.value.negate()), n.specularMap && (i.specularMap.value = n.specularMap), n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest);
            const r = e.get(n).envMap;
            if (r && (i.envMap.value = r, i.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = n.reflectivity, i.ior.value = n.ior, i.refractionRatio.value = n.refractionRatio), n.lightMap) {
                i.lightMap.value = n.lightMap;
                const e = !0 !== t1.physicallyCorrectLights ? Math.PI : 1;
                i.lightMapIntensity.value = n.lightMapIntensity * e;
            }
            let s, a;
            n.aoMap && (i.aoMap.value = n.aoMap, i.aoMapIntensity.value = n.aoMapIntensity), n.map ? s = n.map : n.specularMap ? s = n.specularMap : n.displacementMap ? s = n.displacementMap : n.normalMap ? s = n.normalMap : n.bumpMap ? s = n.bumpMap : n.roughnessMap ? s = n.roughnessMap : n.metalnessMap ? s = n.metalnessMap : n.alphaMap ? s = n.alphaMap : n.emissiveMap ? s = n.emissiveMap : n.clearcoatMap ? s = n.clearcoatMap : n.clearcoatNormalMap ? s = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? s = n.clearcoatRoughnessMap : n.iridescenceMap ? s = n.iridescenceMap : n.iridescenceThicknessMap ? s = n.iridescenceThicknessMap : n.specularIntensityMap ? s = n.specularIntensityMap : n.specularColorMap ? s = n.specularColorMap : n.transmissionMap ? s = n.transmissionMap : n.thicknessMap ? s = n.thicknessMap : n.sheenColorMap ? s = n.sheenColorMap : n.sheenRoughnessMap && (s = n.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), i.uvTransform.value.copy(s.matrix)), n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), i.uv2Transform.value.copy(a.matrix));
        }
        return {
            refreshFogUniforms: function(e, i) {
                i.color.getRGB(e.fogColor.value, en(t1)), i.isFog ? (e.fogNear.value = i.near, e.fogFar.value = i.far) : i.isFogExp2 && (e.fogDensity.value = i.density);
            },
            refreshMaterialUniforms: function(t1, n, r, s, a) {
                n.isMeshBasicMaterial || n.isMeshLambertMaterial ? i(t1, n) : n.isMeshToonMaterial ? (i(t1, n), function(t1, e) {
                    e.gradientMap && (t1.gradientMap.value = e.gradientMap);
                }(t1, n)) : n.isMeshPhongMaterial ? (i(t1, n), function(t1, e) {
                    t1.specular.value.copy(e.specular), t1.shininess.value = Math.max(e.shininess, 1e-4);
                }(t1, n)) : n.isMeshStandardMaterial ? (i(t1, n), function(t1, i) {
                    t1.roughness.value = i.roughness, t1.metalness.value = i.metalness, i.roughnessMap && (t1.roughnessMap.value = i.roughnessMap);
                    i.metalnessMap && (t1.metalnessMap.value = i.metalnessMap);
                    const n = e.get(i).envMap;
                    n && (t1.envMapIntensity.value = i.envMapIntensity);
                }(t1, n), n.isMeshPhysicalMaterial && function(t1, e, i) {
                    t1.ior.value = e.ior, e.sheen > 0 && (t1.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t1.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t1.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t1.sheenRoughnessMap.value = e.sheenRoughnessMap));
                    e.clearcoat > 0 && (t1.clearcoat.value = e.clearcoat, t1.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t1.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t1.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t1.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t1.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t1.clearcoatNormalScale.value.negate()));
                    e.iridescence > 0 && (t1.iridescence.value = e.iridescence, t1.iridescenceIOR.value = e.iridescenceIOR, t1.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t1.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t1.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t1.iridescenceThicknessMap.value = e.iridescenceThicknessMap));
                    e.transmission > 0 && (t1.transmission.value = e.transmission, t1.transmissionSamplerMap.value = i.texture, t1.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t1.transmissionMap.value = e.transmissionMap), t1.thickness.value = e.thickness, e.thicknessMap && (t1.thicknessMap.value = e.thicknessMap), t1.attenuationDistance.value = e.attenuationDistance, t1.attenuationColor.value.copy(e.attenuationColor));
                    t1.specularIntensity.value = e.specularIntensity, t1.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t1.specularIntensityMap.value = e.specularIntensityMap);
                    e.specularColorMap && (t1.specularColorMap.value = e.specularColorMap);
                }(t1, n, a)) : n.isMeshMatcapMaterial ? (i(t1, n), function(t1, e) {
                    e.matcap && (t1.matcap.value = e.matcap);
                }(t1, n)) : n.isMeshDepthMaterial ? i(t1, n) : n.isMeshDistanceMaterial ? (i(t1, n), function(t1, e) {
                    t1.referencePosition.value.copy(e.referencePosition), t1.nearDistance.value = e.nearDistance, t1.farDistance.value = e.farDistance;
                }(t1, n)) : n.isMeshNormalMaterial ? i(t1, n) : n.isLineBasicMaterial ? (function(t1, e) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity;
                }(t1, n), n.isLineDashedMaterial && function(t1, e) {
                    t1.dashSize.value = e.dashSize, t1.totalSize.value = e.dashSize + e.gapSize, t1.scale.value = e.scale;
                }(t1, n)) : n.isPointsMaterial ? function(t1, e, i, n) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity, t1.size.value = e.size * i, t1.scale.value = .5 * n, e.map && (t1.map.value = e.map);
                    e.alphaMap && (t1.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t1.alphaTest.value = e.alphaTest);
                    let r;
                    e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t1.uvTransform.value.copy(r.matrix));
                }(t1, n, r, s) : n.isSpriteMaterial ? function(t1, e) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity, t1.rotation.value = e.rotation, e.map && (t1.map.value = e.map);
                    e.alphaMap && (t1.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t1.alphaTest.value = e.alphaTest);
                    let i;
                    e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
                    void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t1.uvTransform.value.copy(i.matrix));
                }(t1, n) : n.isShadowMaterial ? (t1.color.value.copy(n.color), t1.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1);
            }
        };
    }
    function Zs(t1, e, i, n) {
        let r = {}, s = {}, a = [];
        const o = i.isWebGL2 ? t1.getParameter(35375) : 0;
        function l(t1, e, i) {
            const n = t1.value;
            if (void 0 === i[e]) {
                if ("number" == typeof n) i[e] = n;
                else {
                    const t1 = Array.isArray(n) ? n : [
                        n
                    ], r = [];
                    for(let e = 0; e < t1.length; e++)r.push(t1[e].clone());
                    i[e] = r;
                }
                return !0;
            }
            if ("number" == typeof n) {
                if (i[e] !== n) return i[e] = n, !0;
            } else {
                const t1 = Array.isArray(i[e]) ? i[e] : [
                    i[e]
                ], r = Array.isArray(n) ? n : [
                    n
                ];
                for(let e = 0; e < t1.length; e++){
                    const i = t1[e];
                    if (!1 === i.equals(r[e])) return i.copy(r[e]), !0;
                }
            }
            return !1;
        }
        function c(t1) {
            const e = {
                boundary: 0,
                storage: 0
            };
            return "number" == typeof t1 ? (e.boundary = 4, e.storage = 4) : t1.isVector2 ? (e.boundary = 8, e.storage = 8) : t1.isVector3 || t1.isColor ? (e.boundary = 16, e.storage = 12) : t1.isVector4 ? (e.boundary = 16, e.storage = 16) : t1.isMatrix3 ? (e.boundary = 48, e.storage = 48) : t1.isMatrix4 ? (e.boundary = 64, e.storage = 64) : t1.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t1), e;
        }
        function h(e) {
            const i = e.target;
            i.removeEventListener("dispose", h);
            const n = a.indexOf(i.__bindingPointIndex);
            a.splice(n, 1), t1.deleteBuffer(r[i.id]), delete r[i.id], delete s[i.id];
        }
        return {
            bind: function(t1, e) {
                const i = e.program;
                n.uniformBlockBinding(t1, i);
            },
            update: function(i, u) {
                let d = r[i.id];
                void 0 === d && (!function(t1) {
                    const e = t1.uniforms;
                    let i = 0;
                    const n = 16;
                    let r = 0;
                    for(let t1 = 0, s = e.length; t1 < s; t1++){
                        const s = e[t1], a = {
                            boundary: 0,
                            storage: 0
                        }, o = Array.isArray(s.value) ? s.value : [
                            s.value
                        ];
                        for(let t1 = 0, e = o.length; t1 < e; t1++){
                            const e = c(o[t1]);
                            a.boundary += e.boundary, a.storage += e.storage;
                        }
                        if (s.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), s.__offset = i, t1 > 0) {
                            r = i % n;
                            0 !== r && n - r - a.boundary < 0 && (i += n - r, s.__offset = i);
                        }
                        i += a.storage;
                    }
                    r = i % n, r > 0 && (i += n - r);
                    t1.__size = i, t1.__cache = {};
                }(i), d = function(e) {
                    const i = function() {
                        for(let t1 = 0; t1 < o; t1++)if (-1 === a.indexOf(t1)) return a.push(t1), t1;
                        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
                    }();
                    e.__bindingPointIndex = i;
                    const n = t1.createBuffer(), r = e.__size, s = e.usage;
                    return t1.bindBuffer(35345, n), t1.bufferData(35345, r, s), t1.bindBuffer(35345, null), t1.bindBufferBase(35345, i, n), n;
                }(i), r[i.id] = d, i.addEventListener("dispose", h));
                const p = u.program;
                n.updateUBOMapping(i, p);
                const m = e.render.frame;
                s[i.id] !== m && (!function(e) {
                    const i = r[e.id], n = e.uniforms, s = e.__cache;
                    t1.bindBuffer(35345, i);
                    for(let e = 0, i = n.length; e < i; e++){
                        const i = n[e];
                        if (!0 === l(i, e, s)) {
                            const e = i.__offset, n = Array.isArray(i.value) ? i.value : [
                                i.value
                            ];
                            let r = 0;
                            for(let s = 0; s < n.length; s++){
                                const a = n[s], o = c(a);
                                "number" == typeof a ? (i.__data[0] = a, t1.bufferSubData(35345, e + r, i.__data)) : a.isMatrix3 ? (i.__data[0] = a.elements[0], i.__data[1] = a.elements[1], i.__data[2] = a.elements[2], i.__data[3] = a.elements[0], i.__data[4] = a.elements[3], i.__data[5] = a.elements[4], i.__data[6] = a.elements[5], i.__data[7] = a.elements[0], i.__data[8] = a.elements[6], i.__data[9] = a.elements[7], i.__data[10] = a.elements[8], i.__data[11] = a.elements[0]) : (a.toArray(i.__data, r), r += o.storage / Float32Array.BYTES_PER_ELEMENT);
                            }
                            t1.bufferSubData(35345, e, i.__data);
                        }
                    }
                    t1.bindBuffer(35345, null);
                }(i), s[i.id] = m);
            },
            dispose: function() {
                for(const e in r)t1.deleteBuffer(r[e]);
                a = [], r = {}, s = {};
            }
        };
    }
    function Js(t1 = {}) {
        this.isWebGLRenderer = !0;
        const i = void 0 !== t1.canvas ? t1.canvas : function() {
            const t1 = Bt("canvas");
            return t1.style.display = "block", t1;
        }(), n = void 0 !== t1.context ? t1.context : null, r = void 0 === t1.depth || t1.depth, s = void 0 === t1.stencil || t1.stencil, a = void 0 !== t1.antialias && t1.antialias, o = void 0 === t1.premultipliedAlpha || t1.premultipliedAlpha, l = void 0 !== t1.preserveDrawingBuffer && t1.preserveDrawingBuffer, c = void 0 !== t1.powerPreference ? t1.powerPreference : "default", h = void 0 !== t1.failIfMajorPerformanceCaveat && t1.failIfMajorPerformanceCaveat;
        let u;
        u = null !== n ? n.getContextAttributes().alpha : void 0 !== t1.alpha && t1.alpha;
        let d = null, p = null;
        const m = [], f = [];
        this.domElement = i, this.debug = {
            checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = ct, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
        const g = this;
        let _ = !1, y = 0, S = 0, T = null, A = -1, E = null;
        const C = new ie, L = new ie;
        let R = null, P = i.width, I = i.height, D = 1, N = null, O = null;
        const z = new ie(0, 0, P, I), U = new ie(0, 0, P, I);
        let B = !1;
        const F = new vn;
        let k = !1, G = !1, V = null;
        const H = new Ue, W = new It, j = new oe, q = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function X() {
            return null === T ? D : 1;
        }
        let Y, Z, J, K, $, Q, tt, et, it, nt, rt, st, at, ot, lt, ht, ut, dt, pt, mt, ft, gt, vt, xt, _t = n;
        function yt(t1, e) {
            for(let n = 0; n < t1.length; n++){
                const r = t1[n], s = i.getContext(r, e);
                if (null !== s) return s;
            }
            return null;
        }
        try {
            const t1 = {
                alpha: !0,
                depth: r,
                stencil: s,
                antialias: a,
                premultipliedAlpha: o,
                preserveDrawingBuffer: l,
                powerPreference: c,
                failIfMajorPerformanceCaveat: h
            };
            if ("setAttribute" in i && i.setAttribute("data-engine", `three.js r${e}`), i.addEventListener("webglcontextlost", St, !1), i.addEventListener("webglcontextrestored", wt, !1), i.addEventListener("webglcontextcreationerror", Tt, !1), null === _t) {
                const e = [
                    "webgl2",
                    "webgl",
                    "experimental-webgl"
                ];
                if (!0 === g.isWebGL1Renderer && e.shift(), _t = yt(e, t1), null === _t) throw yt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            void 0 === _t.getShaderPrecisionFormat && (_t.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                };
            });
        } catch (t1) {
            throw console.error("THREE.WebGLRenderer: " + t1.message), t1;
        }
        function Mt() {
            Y = new Xn(_t), Z = new Cn(_t, Y, t1), Y.init(Z), gt = new Gs(_t, Y, Z), J = new Fs(_t, Y, Z), K = new Jn, $ = new Ts, Q = new ks(_t, Y, J, $, Z, gt, K), tt = new Rn(g), et = new qn(g), it = new _n(_t, Z), vt = new An(_t, Y, it, Z), nt = new Yn(_t, it, K, vt), rt = new tr(_t, nt, it, K), pt = new Qn(_t, Z, Q), ht = new Ln($), st = new ws(g, tt, et, Y, Z, vt, ht), at = new Ys(g, $), ot = new Ls, lt = new Os(Y, Z), dt = new Tn(g, tt, et, J, rt, u, o), ut = new Bs(g, rt, Z), xt = new Zs(_t, K, Z, J), mt = new En(_t, Y, K, Z), ft = new Zn(_t, Y, K, Z), K.programs = st.programs, g.capabilities = Z, g.extensions = Y, g.properties = $, g.renderLists = ot, g.shadowMap = ut, g.state = J, g.info = K;
        }
        Mt();
        const bt = new Xs(g, _t);
        function St(t1) {
            t1.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0;
        }
        function wt() {
            console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
            const t1 = K.autoReset, e = ut.enabled, i = ut.autoUpdate, n = ut.needsUpdate, r = ut.type;
            Mt(), K.autoReset = t1, ut.enabled = e, ut.autoUpdate = i, ut.needsUpdate = n, ut.type = r;
        }
        function Tt(t1) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t1.statusMessage);
        }
        function At(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", At), function(t1) {
                (function(t1) {
                    const e = $.get(t1).programs;
                    void 0 !== e && (e.forEach(function(t1) {
                        st.releaseProgram(t1);
                    }), t1.isShaderMaterial && st.releaseShaderCache(t1));
                })(t1), $.remove(t1);
            }(e);
        }
        this.xr = bt, this.getContext = function() {
            return _t;
        }, this.getContextAttributes = function() {
            return _t.getContextAttributes();
        }, this.forceContextLoss = function() {
            const t1 = Y.get("WEBGL_lose_context");
            t1 && t1.loseContext();
        }, this.forceContextRestore = function() {
            const t1 = Y.get("WEBGL_lose_context");
            t1 && t1.restoreContext();
        }, this.getPixelRatio = function() {
            return D;
        }, this.setPixelRatio = function(t1) {
            void 0 !== t1 && (D = t1, this.setSize(P, I, !1));
        }, this.getSize = function(t1) {
            return t1.set(P, I);
        }, this.setSize = function(t1, e, n) {
            bt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (P = t1, I = e, i.width = Math.floor(t1 * D), i.height = Math.floor(e * D), !1 !== n && (i.style.width = t1 + "px", i.style.height = e + "px"), this.setViewport(0, 0, t1, e));
        }, this.getDrawingBufferSize = function(t1) {
            return t1.set(P * D, I * D).floor();
        }, this.setDrawingBufferSize = function(t1, e, n) {
            P = t1, I = e, D = n, i.width = Math.floor(t1 * n), i.height = Math.floor(e * n), this.setViewport(0, 0, t1, e);
        }, this.getCurrentViewport = function(t1) {
            return t1.copy(C);
        }, this.getViewport = function(t1) {
            return t1.copy(z);
        }, this.setViewport = function(t1, e, i, n) {
            t1.isVector4 ? z.set(t1.x, t1.y, t1.z, t1.w) : z.set(t1, e, i, n), J.viewport(C.copy(z).multiplyScalar(D).floor());
        }, this.getScissor = function(t1) {
            return t1.copy(U);
        }, this.setScissor = function(t1, e, i, n) {
            t1.isVector4 ? U.set(t1.x, t1.y, t1.z, t1.w) : U.set(t1, e, i, n), J.scissor(L.copy(U).multiplyScalar(D).floor());
        }, this.getScissorTest = function() {
            return B;
        }, this.setScissorTest = function(t1) {
            J.setScissorTest(B = t1);
        }, this.setOpaqueSort = function(t1) {
            N = t1;
        }, this.setTransparentSort = function(t1) {
            O = t1;
        }, this.getClearColor = function(t1) {
            return t1.copy(dt.getClearColor());
        }, this.setClearColor = function() {
            dt.setClearColor.apply(dt, arguments);
        }, this.getClearAlpha = function() {
            return dt.getClearAlpha();
        }, this.setClearAlpha = function() {
            dt.setClearAlpha.apply(dt, arguments);
        }, this.clear = function(t1 = !0, e = !0, i = !0) {
            let n = 0;
            t1 && (n |= 16384), e && (n |= 256), i && (n |= 1024), _t.clear(n);
        }, this.clearColor = function() {
            this.clear(!0, !1, !1);
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1);
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0);
        }, this.dispose = function() {
            i.removeEventListener("webglcontextlost", St, !1), i.removeEventListener("webglcontextrestored", wt, !1), i.removeEventListener("webglcontextcreationerror", Tt, !1), ot.dispose(), lt.dispose(), $.dispose(), tt.dispose(), et.dispose(), rt.dispose(), vt.dispose(), xt.dispose(), st.dispose(), bt.dispose(), bt.removeEventListener("sessionstart", Lt), bt.removeEventListener("sessionend", Rt), V && (V.dispose(), V = null), Pt.stop();
        }, this.renderBufferDirect = function(t1, e, i, n, r, s) {
            null === e && (e = q);
            const a = r.isMesh && r.matrixWorld.determinant() < 0, o = function(t1, e, i, n, r) {
                !0 !== e.isScene && (e = q);
                Q.resetTextureUnits();
                const s = e.fog, a = n.isMeshStandardMaterial ? e.environment : null, o = null === T ? g.outputEncoding : !0 === T.isXRRenderTarget ? T.texture.encoding : ct, l = (n.isMeshStandardMaterial ? et : tt).get(n.envMap || a), c = !0 === n.vertexColors && !!i.attributes.color && 4 === i.attributes.color.itemSize, h = !!n.normalMap && !!i.attributes.tangent, u = !!i.morphAttributes.position, d = !!i.morphAttributes.normal, m = !!i.morphAttributes.color, f = n.toneMapped ? g.toneMapping : 0, v = i.morphAttributes.position || i.morphAttributes.normal || i.morphAttributes.color, x = void 0 !== v ? v.length : 0, _ = $.get(n), y = p.state.lights;
                if (!0 === k && (!0 === G || t1 !== E)) {
                    const e = t1 === E && n.id === A;
                    ht.setState(n, t1, e);
                }
                let M = !1;
                n.version === _.__version ? _.needsLights && _.lightsStateVersion !== y.state.version || _.outputEncoding !== o || r.isInstancedMesh && !1 === _.instancing ? M = !0 : r.isInstancedMesh || !0 !== _.instancing ? r.isSkinnedMesh && !1 === _.skinning ? M = !0 : r.isSkinnedMesh || !0 !== _.skinning ? _.envMap !== l || !0 === n.fog && _.fog !== s ? M = !0 : void 0 === _.numClippingPlanes || _.numClippingPlanes === ht.numPlanes && _.numIntersection === ht.numIntersection ? (_.vertexAlphas !== c || _.vertexTangents !== h || _.morphTargets !== u || _.morphNormals !== d || _.morphColors !== m || _.toneMapping !== f || !0 === Z.isWebGL2 && _.morphTargetsCount !== x) && (M = !0) : M = !0 : M = !0 : M = !0 : (M = !0, _.__version = n.version);
                let b = _.currentProgram;
                !0 === M && (b = Ut(n, e, r));
                let S = !1, w = !1, C = !1;
                const L = b.getUniforms(), R = _.uniforms;
                J.useProgram(b.program) && (S = !0, w = !0, C = !0);
                n.id !== A && (A = n.id, w = !0);
                if (S || E !== t1) {
                    if (L.setValue(_t, "projectionMatrix", t1.projectionMatrix), Z.logarithmicDepthBuffer && L.setValue(_t, "logDepthBufFC", 2 / (Math.log(t1.far + 1) / Math.LN2)), E !== t1 && (E = t1, w = !0, C = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                        const e = L.map.cameraPosition;
                        void 0 !== e && e.setValue(_t, j.setFromMatrixPosition(t1.matrixWorld));
                    }
                    (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && L.setValue(_t, "isOrthographic", !0 === t1.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || r.isSkinnedMesh) && L.setValue(_t, "viewMatrix", t1.matrixWorldInverse);
                }
                if (r.isSkinnedMesh) {
                    L.setOptional(_t, r, "bindMatrix"), L.setOptional(_t, r, "bindMatrixInverse");
                    const t1 = r.skeleton;
                    t1 && (Z.floatVertexTextures ? (null === t1.boneTexture && t1.computeBoneTexture(), L.setValue(_t, "boneTexture", t1.boneTexture, Q), L.setValue(_t, "boneTextureSize", t1.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
                }
                const P = i.morphAttributes;
                (void 0 !== P.position || void 0 !== P.normal || void 0 !== P.color && !0 === Z.isWebGL2) && pt.update(r, i, n, b);
                (w || _.receiveShadow !== r.receiveShadow) && (_.receiveShadow = r.receiveShadow, L.setValue(_t, "receiveShadow", r.receiveShadow));
                n.isMeshGouraudMaterial && null !== n.envMap && (R.envMap.value = l, R.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1);
                w && (L.setValue(_t, "toneMappingExposure", g.toneMappingExposure), _.needsLights && (O = C, (N = R).ambientLightColor.needsUpdate = O, N.lightProbe.needsUpdate = O, N.directionalLights.needsUpdate = O, N.directionalLightShadows.needsUpdate = O, N.pointLights.needsUpdate = O, N.pointLightShadows.needsUpdate = O, N.spotLights.needsUpdate = O, N.spotLightShadows.needsUpdate = O, N.rectAreaLights.needsUpdate = O, N.hemisphereLights.needsUpdate = O), s && !0 === n.fog && at.refreshFogUniforms(R, s), at.refreshMaterialUniforms(R, n, D, I, V), rs.upload(_t, _.uniformsList, R, Q));
                var N, O;
                n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (rs.upload(_t, _.uniformsList, R, Q), n.uniformsNeedUpdate = !1);
                n.isSpriteMaterial && L.setValue(_t, "center", r.center);
                if (L.setValue(_t, "modelViewMatrix", r.modelViewMatrix), L.setValue(_t, "normalMatrix", r.normalMatrix), L.setValue(_t, "modelMatrix", r.matrixWorld), n.isShaderMaterial || n.isRawShaderMaterial) {
                    const t1 = n.uniformsGroups;
                    for(let e = 0, i = t1.length; e < i; e++)if (Z.isWebGL2) {
                        const i = t1[e];
                        xt.update(i, b), xt.bind(i, b);
                    } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
                }
                return b;
            }(t1, e, i, n, r);
            J.setMaterial(n, a);
            let l = i.index, c = 1;
            !0 === n.wireframe && (l = nt.getWireframeAttribute(i), c = 2);
            const h = i.drawRange, u = i.attributes.position;
            let d = h.start * c, m = (h.start + h.count) * c;
            null !== s && (d = Math.max(d, s.start * c), m = Math.min(m, (s.start + s.count) * c)), null !== l ? (d = Math.max(d, 0), m = Math.min(m, l.count)) : null != u && (d = Math.max(d, 0), m = Math.min(m, u.count));
            const f = m - d;
            if (f < 0 || f === 1 / 0) return;
            let v;
            vt.setup(r, n, o, i, l);
            let x = mt;
            if (null !== l && (v = it.get(l), x = ft, x.setIndex(v)), r.isMesh) !0 === n.wireframe ? (J.setLineWidth(n.wireframeLinewidth * X()), x.setMode(1)) : x.setMode(4);
            else if (r.isLine) {
                let t1 = n.linewidth;
                void 0 === t1 && (t1 = 1), J.setLineWidth(t1 * X()), r.isLineSegments ? x.setMode(1) : r.isLineLoop ? x.setMode(2) : x.setMode(3);
            } else r.isPoints ? x.setMode(0) : r.isSprite && x.setMode(4);
            if (r.isInstancedMesh) x.renderInstances(d, f, r.count);
            else if (i.isInstancedBufferGeometry) {
                const t1 = void 0 !== i._maxInstanceCount ? i._maxInstanceCount : 1 / 0, e = Math.min(i.instanceCount, t1);
                x.renderInstances(d, f, e);
            } else x.render(d, f);
        }, this.compile = function(t1, e) {
            function i(t1, e, i) {
                !0 === t1.transparent && 2 === t1.side && !1 === t1.forceSinglePass ? (t1.side = 1, t1.needsUpdate = !0, Ut(t1, e, i), t1.side = 0, t1.needsUpdate = !0, Ut(t1, e, i), t1.side = 2) : Ut(t1, e, i);
            }
            p = lt.get(t1), p.init(), f.push(p), t1.traverseVisible(function(t1) {
                t1.isLight && t1.layers.test(e.layers) && (p.pushLight(t1), t1.castShadow && p.pushShadow(t1));
            }), p.setupLights(g.physicallyCorrectLights), t1.traverse(function(e) {
                const n = e.material;
                if (n) {
                    if (Array.isArray(n)) for(let r = 0; r < n.length; r++)i(n[r], t1, e);
                    else i(n, t1, e);
                }
            }), f.pop(), p = null;
        };
        let Et = null;
        function Lt() {
            Pt.stop();
        }
        function Rt() {
            Pt.start();
        }
        const Pt = new xn;
        function Dt(t1, e, i, n) {
            if (!1 === t1.visible) return;
            if (t1.layers.test(e.layers)) {
                if (t1.isGroup) i = t1.renderOrder;
                else if (t1.isLOD) !0 === t1.autoUpdate && t1.update(e);
                else if (t1.isLight) p.pushLight(t1), t1.castShadow && p.pushShadow(t1);
                else if (t1.isSprite) {
                    if (!t1.frustumCulled || F.intersectsSprite(t1)) {
                        n && j.setFromMatrixPosition(t1.matrixWorld).applyMatrix4(H);
                        const e = rt.update(t1), r = t1.material;
                        r.visible && d.push(t1, e, r, i, j.z, null);
                    }
                } else if ((t1.isMesh || t1.isLine || t1.isPoints) && (t1.isSkinnedMesh && t1.skeleton.frame !== K.render.frame && (t1.skeleton.update(), t1.skeleton.frame = K.render.frame), !t1.frustumCulled || F.intersectsObject(t1))) {
                    n && j.setFromMatrixPosition(t1.matrixWorld).applyMatrix4(H);
                    const e = rt.update(t1), r = t1.material;
                    if (Array.isArray(r)) {
                        const n = e.groups;
                        for(let s = 0, a = n.length; s < a; s++){
                            const a = n[s], o = r[a.materialIndex];
                            o && o.visible && d.push(t1, e, o, i, j.z, a);
                        }
                    } else r.visible && d.push(t1, e, r, i, j.z, null);
                }
            }
            const r = t1.children;
            for(let t1 = 0, s = r.length; t1 < s; t1++)Dt(r[t1], e, i, n);
        }
        function Nt(t1, e, i, n) {
            const r = t1.opaque, s = t1.transmissive, o = t1.transparent;
            p.setupLightsView(i), !0 === k && ht.setGlobalState(g.clippingPlanes, i), s.length > 0 && function(t1, e, i) {
                const n = Z.isWebGL2;
                null === V && (V = new ne(1, 1, {
                    generateMipmaps: !0,
                    type: Y.has("EXT_color_buffer_half_float") ? b : x,
                    minFilter: v,
                    samples: n && !0 === a ? 4 : 0
                }));
                g.getDrawingBufferSize(W), n ? V.setSize(W.x, W.y) : V.setSize(Ct(W.x), Ct(W.y));
                const r = g.getRenderTarget();
                g.setRenderTarget(V), g.clear();
                const s = g.toneMapping;
                g.toneMapping = 0, Ot(t1, e, i), g.toneMapping = s, Q.updateMultisampleRenderTarget(V), Q.updateRenderTargetMipmap(V), g.setRenderTarget(r);
            }(r, e, i), n && J.viewport(C.copy(n)), r.length > 0 && Ot(r, e, i), s.length > 0 && Ot(s, e, i), o.length > 0 && Ot(o, e, i), J.buffers.depth.setTest(!0), J.buffers.depth.setMask(!0), J.buffers.color.setMask(!0), J.setPolygonOffset(!1);
        }
        function Ot(t1, e, i) {
            const n = !0 === e.isScene ? e.overrideMaterial : null;
            for(let r = 0, s = t1.length; r < s; r++){
                const s = t1[r], a = s.object, o = s.geometry, l = null === n ? s.material : n, c = s.group;
                a.layers.test(i.layers) && zt(a, e, i, o, l, c);
            }
        }
        function zt(t1, e, i, n, r, s) {
            t1.onBeforeRender(g, e, i, n, r, s), t1.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t1.matrixWorld), t1.normalMatrix.getNormalMatrix(t1.modelViewMatrix), r.onBeforeRender(g, e, i, n, t1, s), !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass ? (r.side = 1, r.needsUpdate = !0, g.renderBufferDirect(i, e, n, r, t1, s), r.side = 0, r.needsUpdate = !0, g.renderBufferDirect(i, e, n, r, t1, s), r.side = 2) : g.renderBufferDirect(i, e, n, r, t1, s), t1.onAfterRender(g, e, i, n, r, s);
        }
        function Ut(t1, e, i) {
            !0 !== e.isScene && (e = q);
            const n = $.get(t1), r = p.state.lights, s = p.state.shadowsArray, a = r.state.version, o = st.getParameters(t1, r.state, s, e, i), l = st.getProgramCacheKey(o);
            let c = n.programs;
            n.environment = t1.isMeshStandardMaterial ? e.environment : null, n.fog = e.fog, n.envMap = (t1.isMeshStandardMaterial ? et : tt).get(t1.envMap || n.environment), void 0 === c && (t1.addEventListener("dispose", At), c = new Map, n.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (n.currentProgram === h && n.lightsStateVersion === a) return Ft(t1, o), h;
            } else o.uniforms = st.getUniforms(t1), t1.onBuild(i, o, g), t1.onBeforeCompile(o, g), h = st.acquireProgram(o, l), c.set(l, h), n.uniforms = o.uniforms;
            const u = n.uniforms;
            (t1.isShaderMaterial || t1.isRawShaderMaterial) && !0 !== t1.clipping || (u.clippingPlanes = ht.uniform), Ft(t1, o), n.needsLights = function(t1) {
                return t1.isMeshLambertMaterial || t1.isMeshToonMaterial || t1.isMeshPhongMaterial || t1.isMeshStandardMaterial || t1.isShadowMaterial || t1.isShaderMaterial && !0 === t1.lights;
            }(t1), n.lightsStateVersion = a, n.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotLightMatrix.value = r.state.spotLightMatrix, u.spotLightMap.value = r.state.spotLightMap, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const d = h.getUniforms(), m = rs.seqWithValue(d.seq, u);
            return n.currentProgram = h, n.uniformsList = m, h;
        }
        function Ft(t1, e) {
            const i = $.get(t1);
            i.outputEncoding = e.outputEncoding, i.instancing = e.instancing, i.skinning = e.skinning, i.morphTargets = e.morphTargets, i.morphNormals = e.morphNormals, i.morphColors = e.morphColors, i.morphTargetsCount = e.morphTargetsCount, i.numClippingPlanes = e.numClippingPlanes, i.numIntersection = e.numClipIntersection, i.vertexAlphas = e.vertexAlphas, i.vertexTangents = e.vertexTangents, i.toneMapping = e.toneMapping;
        }
        Pt.setAnimationLoop(function(t1) {
            Et && Et(t1);
        }), "undefined" != typeof self && Pt.setContext(self), this.setAnimationLoop = function(t1) {
            Et = t1, bt.setAnimationLoop(t1), null === t1 ? Pt.stop() : Pt.start();
        }, bt.addEventListener("sessionstart", Lt), bt.addEventListener("sessionend", Rt), this.render = function(t1, e) {
            if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === _) return;
            !0 === t1.matrixWorldAutoUpdate && t1.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === bt.enabled && !0 === bt.isPresenting && (!0 === bt.cameraAutoUpdate && bt.updateCamera(e), e = bt.getCamera()), !0 === t1.isScene && t1.onBeforeRender(g, t1, e, T), p = lt.get(t1, f.length), p.init(), f.push(p), H.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), F.setFromProjectionMatrix(H), G = this.localClippingEnabled, k = ht.init(this.clippingPlanes, G), d = ot.get(t1, m.length), d.init(), m.push(d), Dt(t1, e, 0, g.sortObjects), d.finish(), !0 === g.sortObjects && d.sort(N, O), !0 === k && ht.beginShadows();
            const i = p.state.shadowsArray;
            if (ut.render(i, t1, e), !0 === k && ht.endShadows(), !0 === this.info.autoReset && this.info.reset(), dt.render(d, t1), p.setupLights(g.physicallyCorrectLights), e.isArrayCamera) {
                const i = e.cameras;
                for(let e = 0, n = i.length; e < n; e++){
                    const n = i[e];
                    Nt(d, t1, n, n.viewport);
                }
            } else Nt(d, t1, e);
            null !== T && (Q.updateMultisampleRenderTarget(T), Q.updateRenderTargetMipmap(T)), !0 === t1.isScene && t1.onAfterRender(g, t1, e), vt.resetDefaultState(), A = -1, E = null, f.pop(), p = f.length > 0 ? f[f.length - 1] : null, m.pop(), d = m.length > 0 ? m[m.length - 1] : null;
        }, this.getActiveCubeFace = function() {
            return y;
        }, this.getActiveMipmapLevel = function() {
            return S;
        }, this.getRenderTarget = function() {
            return T;
        }, this.setRenderTargetTextures = function(t1, e, i) {
            $.get(t1.texture).__webglTexture = e, $.get(t1.depthTexture).__webglTexture = i;
            const n = $.get(t1);
            n.__hasExternalTextures = !0, n.__hasExternalTextures && (n.__autoAllocateDepthBuffer = void 0 === i, n.__autoAllocateDepthBuffer || !0 === Y.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), n.__useRenderToTexture = !1));
        }, this.setRenderTargetFramebuffer = function(t1, e) {
            const i = $.get(t1);
            i.__webglFramebuffer = e, i.__useDefaultFramebuffer = void 0 === e;
        }, this.setRenderTarget = function(t1, e = 0, i = 0) {
            T = t1, y = e, S = i;
            let n = !0, r = null, s = !1, a = !1;
            if (t1) {
                const i = $.get(t1);
                void 0 !== i.__useDefaultFramebuffer ? (J.bindFramebuffer(36160, null), n = !1) : void 0 === i.__webglFramebuffer ? Q.setupRenderTarget(t1) : i.__hasExternalTextures && Q.rebindTextures(t1, $.get(t1.texture).__webglTexture, $.get(t1.depthTexture).__webglTexture);
                const o = t1.texture;
                (o.isData3DTexture || o.isDataArrayTexture || o.isCompressedArrayTexture) && (a = !0);
                const l = $.get(t1).__webglFramebuffer;
                t1.isWebGLCubeRenderTarget ? (r = l[e], s = !0) : r = Z.isWebGL2 && t1.samples > 0 && !1 === Q.useMultisampledRTT(t1) ? $.get(t1).__webglMultisampledFramebuffer : l, C.copy(t1.viewport), L.copy(t1.scissor), R = t1.scissorTest;
            } else C.copy(z).multiplyScalar(D).floor(), L.copy(U).multiplyScalar(D).floor(), R = B;
            if (J.bindFramebuffer(36160, r) && Z.drawBuffers && n && J.drawBuffers(t1, r), J.viewport(C), J.scissor(L), J.setScissorTest(R), s) {
                const n = $.get(t1.texture);
                _t.framebufferTexture2D(36160, 36064, 34069 + e, n.__webglTexture, i);
            } else if (a) {
                const n = $.get(t1.texture), r = e || 0;
                _t.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, r);
            }
            A = -1;
        }, this.readRenderTargetPixels = function(t1, e, i, n, r, s, a) {
            if (!t1 || !t1.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = $.get(t1).__webglFramebuffer;
            if (t1.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
                J.bindFramebuffer(36160, o);
                try {
                    const a = t1.texture, o = a.format, l = a.type;
                    if (o !== w && gt.convert(o) !== _t.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const c = l === b && (Y.has("EXT_color_buffer_half_float") || Z.isWebGL2 && Y.has("EXT_color_buffer_float"));
                    if (!(l === x || gt.convert(l) === _t.getParameter(35738) || l === M && (Z.isWebGL2 || Y.has("OES_texture_float") || Y.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    e >= 0 && e <= t1.width - n && i >= 0 && i <= t1.height - r && _t.readPixels(e, i, n, r, gt.convert(o), gt.convert(l), s);
                } finally{
                    const t1 = null !== T ? $.get(T).__webglFramebuffer : null;
                    J.bindFramebuffer(36160, t1);
                }
            }
        }, this.copyFramebufferToTexture = function(t1, e, i = 0) {
            const n = Math.pow(2, -i), r = Math.floor(e.image.width * n), s = Math.floor(e.image.height * n);
            Q.setTexture2D(e, 0), _t.copyTexSubImage2D(3553, i, 0, 0, t1.x, t1.y, r, s), J.unbindTexture();
        }, this.copyTextureToTexture = function(t1, e, i, n = 0) {
            const r = e.image.width, s = e.image.height, a = gt.convert(i.format), o = gt.convert(i.type);
            Q.setTexture2D(i, 0), _t.pixelStorei(37440, i.flipY), _t.pixelStorei(37441, i.premultiplyAlpha), _t.pixelStorei(3317, i.unpackAlignment), e.isDataTexture ? _t.texSubImage2D(3553, n, t1.x, t1.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? _t.compressedTexSubImage2D(3553, n, t1.x, t1.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : _t.texSubImage2D(3553, n, t1.x, t1.y, a, o, e.image), 0 === n && i.generateMipmaps && _t.generateMipmap(3553), J.unbindTexture();
        }, this.copyTextureToTexture3D = function(t1, e, i, n, r = 0) {
            if (g.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const s = t1.max.x - t1.min.x + 1, a = t1.max.y - t1.min.y + 1, o = t1.max.z - t1.min.z + 1, l = gt.convert(n.format), c = gt.convert(n.type);
            let h;
            if (n.isData3DTexture) Q.setTexture3D(n, 0), h = 32879;
            else {
                if (!n.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                Q.setTexture2DArray(n, 0), h = 35866;
            }
            _t.pixelStorei(37440, n.flipY), _t.pixelStorei(37441, n.premultiplyAlpha), _t.pixelStorei(3317, n.unpackAlignment);
            const u = _t.getParameter(3314), d = _t.getParameter(32878), p = _t.getParameter(3316), m = _t.getParameter(3315), f = _t.getParameter(32877), v = i.isCompressedTexture ? i.mipmaps[0] : i.image;
            _t.pixelStorei(3314, v.width), _t.pixelStorei(32878, v.height), _t.pixelStorei(3316, t1.min.x), _t.pixelStorei(3315, t1.min.y), _t.pixelStorei(32877, t1.min.z), i.isDataTexture || i.isData3DTexture ? _t.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v.data) : i.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), _t.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, v.data)) : _t.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v), _t.pixelStorei(3314, u), _t.pixelStorei(32878, d), _t.pixelStorei(3316, p), _t.pixelStorei(3315, m), _t.pixelStorei(32877, f), 0 === r && n.generateMipmaps && _t.generateMipmap(h), J.unbindTexture();
        }, this.initTexture = function(t1) {
            t1.isCubeTexture ? Q.setTextureCube(t1, 0) : t1.isData3DTexture ? Q.setTexture3D(t1, 0) : t1.isDataArrayTexture || t1.isCompressedArrayTexture ? Q.setTexture2DArray(t1, 0) : Q.setTexture2D(t1, 0), J.unbindTexture();
        }, this.resetState = function() {
            y = 0, S = 0, T = null, J.reset(), vt.reset();
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    class Ks extends Js {
    }
    Ks.prototype.isWebGL1Renderer = !0;
    class $s {
        constructor(t1, e = 25e-5){
            this.isFogExp2 = !0, this.name = "", this.color = new Zt(t1), this.density = e;
        }
        clone() {
            return new $s(this.color, this.density);
        }
        toJSON() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            };
        }
    }
    class Qs {
        constructor(t1, e = 1, i = 1e3){
            this.isFog = !0, this.name = "", this.color = new Zt(t1), this.near = e, this.far = i;
        }
        clone() {
            return new Qs(this.color, this.near, this.far);
        }
        toJSON() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    }
    class ta extends li {
        constructor(){
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(t1, e) {
            return super.copy(t1, e), null !== t1.background && (this.background = t1.background.clone()), null !== t1.environment && (this.environment = t1.environment.clone()), null !== t1.fog && (this.fog = t1.fog.clone()), this.backgroundBlurriness = t1.backgroundBlurriness, this.backgroundIntensity = t1.backgroundIntensity, null !== t1.overrideMaterial && (this.overrideMaterial = t1.overrideMaterial.clone()), this.matrixAutoUpdate = t1.matrixAutoUpdate, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e;
        }
        get autoUpdate() {
            return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
        }
        set autoUpdate(t1) {
            console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t1;
        }
    }
    class ea {
        constructor(t1, e){
            this.isInterleavedBuffer = !0, this.array = t1, this.stride = e, this.count = void 0 !== t1 ? t1.length / e : 0, this.usage = mt, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0, this.uuid = bt();
        }
        onUploadCallback() {}
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        copy(t1) {
            return this.array = new t1.array.constructor(t1.array), this.count = t1.count, this.stride = t1.stride, this.usage = t1.usage, this;
        }
        copyAt(t1, e, i) {
            t1 *= this.stride, i *= e.stride;
            for(let n = 0, r = this.stride; n < r; n++)this.array[t1 + n] = e.array[i + n];
            return this;
        }
        set(t1, e = 0) {
            return this.array.set(t1, e), this;
        }
        clone(t1) {
            void 0 === t1.arrayBuffers && (t1.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = bt()), void 0 === t1.arrayBuffers[this.array.buffer._uuid] && (t1.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t1.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(e, this.stride);
            return i.setUsage(this.usage), i;
        }
        onUpload(t1) {
            return this.onUploadCallback = t1, this;
        }
        toJSON(t1) {
            return void 0 === t1.arrayBuffers && (t1.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = bt()), void 0 === t1.arrayBuffers[this.array.buffer._uuid] && (t1.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            };
        }
    }
    const ia = new oe;
    class na {
        constructor(t1, e, i, n = !1){
            this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t1, this.itemSize = e, this.offset = i, this.normalized = n;
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t1) {
            this.data.needsUpdate = t1;
        }
        applyMatrix4(t1) {
            for(let e = 0, i = this.data.count; e < i; e++)ia.fromBufferAttribute(this, e), ia.applyMatrix4(t1), this.setXYZ(e, ia.x, ia.y, ia.z);
            return this;
        }
        applyNormalMatrix(t1) {
            for(let e = 0, i = this.count; e < i; e++)ia.fromBufferAttribute(this, e), ia.applyNormalMatrix(t1), this.setXYZ(e, ia.x, ia.y, ia.z);
            return this;
        }
        transformDirection(t1) {
            for(let e = 0, i = this.count; e < i; e++)ia.fromBufferAttribute(this, e), ia.transformDirection(t1), this.setXYZ(e, ia.x, ia.y, ia.z);
            return this;
        }
        setX(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.data.array[t1 * this.data.stride + this.offset] = e, this;
        }
        setY(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.data.array[t1 * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.data.array[t1 * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t1, e) {
            return this.normalized && (e = Rt(e, this.array)), this.data.array[t1 * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        getY(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset + 1];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        getZ(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset + 2];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        getW(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset + 3];
            return this.normalized && (e = Lt(e, this.array)), e;
        }
        setXY(t1, e, i) {
            return t1 = t1 * this.data.stride + this.offset, this.normalized && (e = Rt(e, this.array), i = Rt(i, this.array)), this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = i, this;
        }
        setXYZ(t1, e, i, n) {
            return t1 = t1 * this.data.stride + this.offset, this.normalized && (e = Rt(e, this.array), i = Rt(i, this.array), n = Rt(n, this.array)), this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = i, this.data.array[t1 + 2] = n, this;
        }
        setXYZW(t1, e, i, n, r) {
            return t1 = t1 * this.data.stride + this.offset, this.normalized && (e = Rt(e, this.array), i = Rt(i, this.array), n = Rt(n, this.array), r = Rt(r, this.array)), this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = i, this.data.array[t1 + 2] = n, this.data.array[t1 + 3] = r, this;
        }
        clone(t1) {
            if (void 0 === t1) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
                const t1 = [];
                for(let e = 0; e < this.count; e++){
                    const i = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t1.push(this.data.array[i + e]);
                }
                return new Ti(new this.array.constructor(t1), this.itemSize, this.normalized);
            }
            return void 0 === t1.interleavedBuffers && (t1.interleavedBuffers = {}), void 0 === t1.interleavedBuffers[this.data.uuid] && (t1.interleavedBuffers[this.data.uuid] = this.data.clone(t1)), new na(t1.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t1) {
            if (void 0 === t1) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
                const t1 = [];
                for(let e = 0; e < this.count; e++){
                    const i = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t1.push(this.data.array[i + e]);
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t1,
                    normalized: this.normalized
                };
            }
            return void 0 === t1.interleavedBuffers && (t1.interleavedBuffers = {}), void 0 === t1.interleavedBuffers[this.data.uuid] && (t1.interleavedBuffers[this.data.uuid] = this.data.toJSON(t1)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            };
        }
    }
    class ra extends Mi {
        constructor(t1){
            super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Zt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.alphaMap = t1.alphaMap, this.rotation = t1.rotation, this.sizeAttenuation = t1.sizeAttenuation, this.fog = t1.fog, this;
        }
    }
    let sa;
    const aa = new oe, oa = new oe, la = new oe, ca = new It, ha = new It, ua = new Ue, da = new oe, pa = new oe, ma = new oe, fa = new It, ga = new It, va = new It;
    class xa extends li {
        constructor(t1){
            if (super(), this.isSprite = !0, this.type = "Sprite", void 0 === sa) {
                sa = new zi;
                const t1 = new Float32Array([
                    -0.5,
                    -0.5,
                    0,
                    0,
                    0,
                    .5,
                    -0.5,
                    0,
                    1,
                    0,
                    .5,
                    .5,
                    0,
                    1,
                    1,
                    -0.5,
                    .5,
                    0,
                    0,
                    1
                ]), e = new ea(t1, 5);
                sa.setIndex([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]), sa.setAttribute("position", new na(e, 3, 0, !1)), sa.setAttribute("uv", new na(e, 2, 3, !1));
            }
            this.geometry = sa, this.material = void 0 !== t1 ? t1 : new ra, this.center = new It(.5, .5);
        }
        raycast(t1, e) {
            null === t1.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), oa.setFromMatrixScale(this.matrixWorld), ua.copy(t1.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t1.camera.matrixWorldInverse, this.matrixWorld), la.setFromMatrixPosition(this.modelViewMatrix), t1.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && oa.multiplyScalar(-la.z);
            const i = this.material.rotation;
            let n, r;
            0 !== i && (r = Math.cos(i), n = Math.sin(i));
            const s = this.center;
            _a(da.set(-0.5, -0.5, 0), la, s, oa, n, r), _a(pa.set(.5, -0.5, 0), la, s, oa, n, r), _a(ma.set(.5, .5, 0), la, s, oa, n, r), fa.set(0, 0), ga.set(1, 0), va.set(1, 1);
            let a = t1.ray.intersectTriangle(da, pa, ma, !1, aa);
            if (null === a && (_a(pa.set(-0.5, .5, 0), la, s, oa, n, r), ga.set(0, 1), a = t1.ray.intersectTriangle(da, ma, pa, !1, aa), null === a)) return;
            const o = t1.ray.origin.distanceTo(aa);
            o < t1.near || o > t1.far || e.push({
                distance: o,
                point: aa.clone(),
                uv: _i.getUV(aa, da, pa, ma, fa, ga, va, new It),
                face: null,
                object: this
            });
        }
        copy(t1, e) {
            return super.copy(t1, e), void 0 !== t1.center && this.center.copy(t1.center), this.material = t1.material, this;
        }
    }
    function _a(t1, e, i, n, r, s) {
        ca.subVectors(t1, i).addScalar(.5).multiply(n), void 0 !== r ? (ha.x = s * ca.x - r * ca.y, ha.y = r * ca.x + s * ca.y) : ha.copy(ca), t1.copy(e), t1.x += ha.x, t1.y += ha.y, t1.applyMatrix4(ua);
    }
    const ya = new oe, Ma = new oe;
    class ba extends li {
        constructor(){
            super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                isLOD: {
                    value: !0
                }
            }), this.autoUpdate = !0;
        }
        copy(t1) {
            super.copy(t1, !1);
            const e = t1.levels;
            for(let t1 = 0, i = e.length; t1 < i; t1++){
                const i = e[t1];
                this.addLevel(i.object.clone(), i.distance, i.hysteresis);
            }
            return this.autoUpdate = t1.autoUpdate, this;
        }
        addLevel(t1, e = 0, i = 0) {
            e = Math.abs(e);
            const n = this.levels;
            let r;
            for(r = 0; r < n.length && !(e < n[r].distance); r++);
            return n.splice(r, 0, {
                distance: e,
                hysteresis: i,
                object: t1
            }), this.add(t1), this;
        }
        getCurrentLevel() {
            return this._currentLevel;
        }
        getObjectForDistance(t1) {
            const e = this.levels;
            if (e.length > 0) {
                let i, n;
                for(i = 1, n = e.length; i < n; i++){
                    let n = e[i].distance;
                    if (e[i].object.visible && (n -= n * e[i].hysteresis), t1 < n) break;
                }
                return e[i - 1].object;
            }
            return null;
        }
        raycast(t1, e) {
            if (this.levels.length > 0) {
                ya.setFromMatrixPosition(this.matrixWorld);
                const i = t1.ray.origin.distanceTo(ya);
                this.getObjectForDistance(i).raycast(t1, e);
            }
        }
        update(t1) {
            const e = this.levels;
            if (e.length > 1) {
                ya.setFromMatrixPosition(t1.matrixWorld), Ma.setFromMatrixPosition(this.matrixWorld);
                const i = ya.distanceTo(Ma) / t1.zoom;
                let n, r;
                for(e[0].object.visible = !0, n = 1, r = e.length; n < r; n++){
                    let t1 = e[n].distance;
                    if (e[n].object.visible && (t1 -= t1 * e[n].hysteresis), !(i >= t1)) break;
                    e[n - 1].object.visible = !1, e[n].object.visible = !0;
                }
                for(this._currentLevel = n - 1; n < r; n++)e[n].object.visible = !1;
            }
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
            const i = this.levels;
            for(let t1 = 0, n = i.length; t1 < n; t1++){
                const n = i[t1];
                e.object.levels.push({
                    object: n.object.uuid,
                    distance: n.distance,
                    hysteresis: n.hysteresis
                });
            }
            return e;
        }
    }
    const Sa = new oe, wa = new ie, Ta = new ie, Aa = new oe, Ea = new Ue;
    class Ca extends Ji {
        constructor(t1, e){
            super(t1, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ue, this.bindMatrixInverse = new Ue;
        }
        copy(t1, e) {
            return super.copy(t1, e), this.bindMode = t1.bindMode, this.bindMatrix.copy(t1.bindMatrix), this.bindMatrixInverse.copy(t1.bindMatrixInverse), this.skeleton = t1.skeleton, this;
        }
        bind(t1, e) {
            this.skeleton = t1, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t1 = new ie, e = this.geometry.attributes.skinWeight;
            for(let i = 0, n = e.count; i < n; i++){
                t1.fromBufferAttribute(e, i);
                const n = 1 / t1.manhattanLength();
                n !== 1 / 0 ? t1.multiplyScalar(n) : t1.set(1, 0, 0, 0), e.setXYZW(i, t1.x, t1.y, t1.z, t1.w);
            }
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        boneTransform(t1, e) {
            const i = this.skeleton, n = this.geometry;
            wa.fromBufferAttribute(n.attributes.skinIndex, t1), Ta.fromBufferAttribute(n.attributes.skinWeight, t1), Sa.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for(let t1 = 0; t1 < 4; t1++){
                const n = Ta.getComponent(t1);
                if (0 !== n) {
                    const r = wa.getComponent(t1);
                    Ea.multiplyMatrices(i.bones[r].matrixWorld, i.boneInverses[r]), e.addScaledVector(Aa.copy(Sa).applyMatrix4(Ea), n);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
    }
    class La extends li {
        constructor(){
            super(), this.isBone = !0, this.type = "Bone";
        }
    }
    class Ra extends ee {
        constructor(t1 = null, e = 1, i = 1, n, r, s, a, o, l = 1003, c = 1003, h, u){
            super(null, s, a, o, l, c, n, r, h, u), this.isDataTexture = !0, this.image = {
                data: t1,
                width: e,
                height: i
            }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    const Pa = new Ue, Ia = new Ue;
    class Da {
        constructor(t1 = [], e = []){
            this.uuid = bt(), this.bones = t1.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
        }
        init() {
            const t1 = this.bones, e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t1.length), 0 === e.length) this.calculateInverses();
            else if (t1.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                for(let t1 = 0, e = this.bones.length; t1 < e; t1++)this.boneInverses.push(new Ue);
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = new Ue;
                this.bones[t1] && e.copy(this.bones[t1].matrixWorld).invert(), this.boneInverses.push(e);
            }
        }
        pose() {
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = this.bones[t1];
                e && e.matrixWorld.copy(this.boneInverses[t1]).invert();
            }
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = this.bones[t1];
                e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
            }
        }
        update() {
            const t1 = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture;
            for(let n = 0, r = t1.length; n < r; n++){
                const r = t1[n] ? t1[n].matrixWorld : Ia;
                Pa.multiplyMatrices(r, e[n]), Pa.toArray(i, 16 * n);
            }
            null !== n && (n.needsUpdate = !0);
        }
        clone() {
            return new Da(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
            let t1 = Math.sqrt(4 * this.bones.length);
            t1 = Et(t1), t1 = Math.max(t1, 4);
            const e = new Float32Array(t1 * t1 * 4);
            e.set(this.boneMatrices);
            const i = new Ra(e, t1, t1, w, M);
            return i.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = i, this.boneTextureSize = t1, this;
        }
        getBoneByName(t1) {
            for(let e = 0, i = this.bones.length; e < i; e++){
                const i = this.bones[e];
                if (i.name === t1) return i;
            }
        }
        dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t1, e) {
            this.uuid = t1.uuid;
            for(let i = 0, n = t1.bones.length; i < n; i++){
                const n = t1.bones[i];
                let r = e[n];
                void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", n), r = new La), this.bones.push(r), this.boneInverses.push((new Ue).fromArray(t1.boneInverses[i]));
            }
            return this.init(), this;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.5,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t1.uuid = this.uuid;
            const e = this.bones, i = this.boneInverses;
            for(let n = 0, r = e.length; n < r; n++){
                const r = e[n];
                t1.bones.push(r.uuid);
                const s = i[n];
                t1.boneInverses.push(s.toArray());
            }
            return t1;
        }
    }
    class Na extends Ti {
        constructor(t1, e, i, n = 1){
            super(t1, e, i), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = n;
        }
        copy(t1) {
            return super.copy(t1), this.meshPerAttribute = t1.meshPerAttribute, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.meshPerAttribute = this.meshPerAttribute, t1.isInstancedBufferAttribute = !0, t1;
        }
    }
    const Oa = new Ue, za = new Ue, Ua = [], Ba = new Ue, Fa = new Ji;
    class ka extends Ji {
        constructor(t1, e, i){
            super(t1, e), this.isInstancedMesh = !0, this.instanceMatrix = new Na(new Float32Array(16 * i), 16), this.instanceColor = null, this.count = i, this.frustumCulled = !1;
            for(let t1 = 0; t1 < i; t1++)this.setMatrixAt(t1, Ba);
        }
        copy(t1, e) {
            return super.copy(t1, e), this.instanceMatrix.copy(t1.instanceMatrix), null !== t1.instanceColor && (this.instanceColor = t1.instanceColor.clone()), this.count = t1.count, this;
        }
        getColorAt(t1, e) {
            e.fromArray(this.instanceColor.array, 3 * t1);
        }
        getMatrixAt(t1, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t1);
        }
        raycast(t1, e) {
            const i = this.matrixWorld, n = this.count;
            if (Fa.geometry = this.geometry, Fa.material = this.material, void 0 !== Fa.material) for(let r = 0; r < n; r++){
                this.getMatrixAt(r, Oa), za.multiplyMatrices(i, Oa), Fa.matrixWorld = za, Fa.raycast(t1, Ua);
                for(let t1 = 0, i = Ua.length; t1 < i; t1++){
                    const i = Ua[t1];
                    i.instanceId = r, i.object = this, e.push(i);
                }
                Ua.length = 0;
            }
        }
        setColorAt(t1, e) {
            null === this.instanceColor && (this.instanceColor = new Na(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t1);
        }
        setMatrixAt(t1, e) {
            e.toArray(this.instanceMatrix.array, 16 * t1);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    class Ga extends Mi {
        constructor(t1){
            super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Zt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.linewidth = t1.linewidth, this.linecap = t1.linecap, this.linejoin = t1.linejoin, this.fog = t1.fog, this;
        }
    }
    const Va = new oe, Ha = new oe, Wa = new Ue, ja = new ze, qa = new Ce;
    class Xa extends li {
        constructor(t1 = new zi, e = new Ga){
            super(), this.isLine = !0, this.type = "Line", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.material = t1.material, this.geometry = t1.geometry, this;
        }
        computeLineDistances() {
            const t1 = this.geometry;
            if (null === t1.index) {
                const e = t1.attributes.position, i = [
                    0
                ];
                for(let t1 = 1, n = e.count; t1 < n; t1++)Va.fromBufferAttribute(e, t1 - 1), Ha.fromBufferAttribute(e, t1), i[t1] = i[t1 - 1], i[t1] += Va.distanceTo(Ha);
                t1.setAttribute("lineDistance", new Ci(i, 1));
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
        raycast(t1, e) {
            const i = this.geometry, n = this.matrixWorld, r = t1.params.Line.threshold, s = i.drawRange;
            if (null === i.boundingSphere && i.computeBoundingSphere(), qa.copy(i.boundingSphere), qa.applyMatrix4(n), qa.radius += r, !1 === t1.ray.intersectsSphere(qa)) return;
            Wa.copy(n).invert(), ja.copy(t1.ray).applyMatrix4(Wa);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new oe, c = new oe, h = new oe, u = new oe, d = this.isLineSegments ? 2 : 1, p = i.index, m = i.attributes.position;
            if (null !== p) for(let i = Math.max(0, s.start), n = Math.min(p.count, s.start + s.count) - 1; i < n; i += d){
                const n = p.getX(i), r = p.getX(i + 1);
                l.fromBufferAttribute(m, n), c.fromBufferAttribute(m, r);
                if (ja.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const s = t1.ray.origin.distanceTo(u);
                s < t1.near || s > t1.far || e.push({
                    distance: s,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: i,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
            else for(let i = Math.max(0, s.start), n = Math.min(m.count, s.start + s.count) - 1; i < n; i += d){
                l.fromBufferAttribute(m, i), c.fromBufferAttribute(m, i + 1);
                if (ja.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const n = t1.ray.origin.distanceTo(u);
                n < t1.near || n > t1.far || e.push({
                    distance: n,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: i,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
        }
        updateMorphTargets() {
            const t1 = this.geometry.morphAttributes, e = Object.keys(t1);
            if (e.length > 0) {
                const i = t1[e[0]];
                if (void 0 !== i) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t1 = 0, e = i.length; t1 < e; t1++){
                        const e = i[t1].name || String(t1);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t1;
                    }
                }
            }
        }
    }
    const Ya = new oe, Za = new oe;
    class Ja extends Xa {
        constructor(t1, e){
            super(t1, e), this.isLineSegments = !0, this.type = "LineSegments";
        }
        computeLineDistances() {
            const t1 = this.geometry;
            if (null === t1.index) {
                const e = t1.attributes.position, i = [];
                for(let t1 = 0, n = e.count; t1 < n; t1 += 2)Ya.fromBufferAttribute(e, t1), Za.fromBufferAttribute(e, t1 + 1), i[t1] = 0 === t1 ? 0 : i[t1 - 1], i[t1 + 1] = i[t1] + Ya.distanceTo(Za);
                t1.setAttribute("lineDistance", new Ci(i, 1));
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
    }
    class Ka extends Xa {
        constructor(t1, e){
            super(t1, e), this.isLineLoop = !0, this.type = "LineLoop";
        }
    }
    class $a extends Mi {
        constructor(t1){
            super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Zt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.alphaMap = t1.alphaMap, this.size = t1.size, this.sizeAttenuation = t1.sizeAttenuation, this.fog = t1.fog, this;
        }
    }
    const Qa = new Ue, to = new ze, eo = new Ce, io = new oe;
    class no extends li {
        constructor(t1 = new zi, e = new $a){
            super(), this.isPoints = !0, this.type = "Points", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.material = t1.material, this.geometry = t1.geometry, this;
        }
        raycast(t1, e) {
            const i = this.geometry, n = this.matrixWorld, r = t1.params.Points.threshold, s = i.drawRange;
            if (null === i.boundingSphere && i.computeBoundingSphere(), eo.copy(i.boundingSphere), eo.applyMatrix4(n), eo.radius += r, !1 === t1.ray.intersectsSphere(eo)) return;
            Qa.copy(n).invert(), to.copy(t1.ray).applyMatrix4(Qa);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = i.index, c = i.attributes.position;
            if (null !== l) for(let i = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count); i < r; i++){
                const r = l.getX(i);
                io.fromBufferAttribute(c, r), ro(io, r, o, n, t1, e, this);
            }
            else for(let i = Math.max(0, s.start), r = Math.min(c.count, s.start + s.count); i < r; i++)io.fromBufferAttribute(c, i), ro(io, i, o, n, t1, e, this);
        }
        updateMorphTargets() {
            const t1 = this.geometry.morphAttributes, e = Object.keys(t1);
            if (e.length > 0) {
                const i = t1[e[0]];
                if (void 0 !== i) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t1 = 0, e = i.length; t1 < e; t1++){
                        const e = i[t1].name || String(t1);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t1;
                    }
                }
            }
        }
    }
    function ro(t1, e, i, n, r, s, a) {
        const o = to.distanceSqToPoint(t1);
        if (o < i) {
            const i = new oe;
            to.closestPointToPoint(t1, i), i.applyMatrix4(n);
            const l = r.ray.origin.distanceTo(i);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: i,
                index: e,
                face: null,
                object: a
            });
        }
    }
    class so extends ee {
        constructor(t1, e, i, n, r, s, a, o, l, c, h, u){
            super(null, s, a, o, l, c, n, r, h, u), this.isCompressedTexture = !0, this.image = {
                width: e,
                height: i
            }, this.mipmaps = t1, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    class ao {
        constructor(){
            this.type = "Curve", this.arcLengthDivisions = 200;
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
        }
        getPointAt(t1, e) {
            const i = this.getUtoTmapping(t1);
            return this.getPoint(i, e);
        }
        getPoints(t1 = 5) {
            const e = [];
            for(let i = 0; i <= t1; i++)e.push(this.getPoint(i / t1));
            return e;
        }
        getSpacedPoints(t1 = 5) {
            const e = [];
            for(let i = 0; i <= t1; i++)e.push(this.getPointAt(i / t1));
            return e;
        }
        getLength() {
            const t1 = this.getLengths();
            return t1[t1.length - 1];
        }
        getLengths(t1 = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t1 + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let i, n = this.getPoint(0), r = 0;
            e.push(0);
            for(let s = 1; s <= t1; s++)i = this.getPoint(s / t1), r += i.distanceTo(n), e.push(r), n = i;
            return this.cacheArcLengths = e, e;
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.getLengths();
        }
        getUtoTmapping(t1, e) {
            const i = this.getLengths();
            let n = 0;
            const r = i.length;
            let s;
            s = e || t1 * i[r - 1];
            let a, o = 0, l = r - 1;
            for(; o <= l;)if (n = Math.floor(o + (l - o) / 2), a = i[n] - s, a < 0) o = n + 1;
            else {
                if (!(a > 0)) {
                    l = n;
                    break;
                }
                l = n - 1;
            }
            if (n = l, i[n] === s) return n / (r - 1);
            const c = i[n];
            return (n + (s - c) / (i[n + 1] - c)) / (r - 1);
        }
        getTangent(t1, e) {
            const i = 1e-4;
            let n = t1 - i, r = t1 + i;
            n < 0 && (n = 0), r > 1 && (r = 1);
            const s = this.getPoint(n), a = this.getPoint(r), o = e || (s.isVector2 ? new It : new oe);
            return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t1, e) {
            const i = this.getUtoTmapping(t1);
            return this.getTangent(i, e);
        }
        computeFrenetFrames(t1, e) {
            const i = new oe, n = [], r = [], s = [], a = new oe, o = new Ue;
            for(let e = 0; e <= t1; e++){
                const i = e / t1;
                n[e] = this.getTangentAt(i, new oe);
            }
            r[0] = new oe, s[0] = new oe;
            let l = Number.MAX_VALUE;
            const c = Math.abs(n[0].x), h = Math.abs(n[0].y), u = Math.abs(n[0].z);
            c <= l && (l = c, i.set(1, 0, 0)), h <= l && (l = h, i.set(0, 1, 0)), u <= l && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], a), s[0].crossVectors(n[0], r[0]);
            for(let e = 1; e <= t1; e++){
                if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(n[e - 1], n[e]), a.length() > Number.EPSILON) {
                    a.normalize();
                    const t1 = Math.acos(St(n[e - 1].dot(n[e]), -1, 1));
                    r[e].applyMatrix4(o.makeRotationAxis(a, t1));
                }
                s[e].crossVectors(n[e], r[e]);
            }
            if (!0 === e) {
                let e = Math.acos(St(r[0].dot(r[t1]), -1, 1));
                e /= t1, n[0].dot(a.crossVectors(r[0], r[t1])) > 0 && (e = -e);
                for(let i = 1; i <= t1; i++)r[i].applyMatrix4(o.makeRotationAxis(n[i], e * i)), s[i].crossVectors(n[i], r[i]);
            }
            return {
                tangents: n,
                normals: r,
                binormals: s
            };
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.arcLengthDivisions = t1.arcLengthDivisions, this;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t1.arcLengthDivisions = this.arcLengthDivisions, t1.type = this.type, t1;
        }
        fromJSON(t1) {
            return this.arcLengthDivisions = t1.arcLengthDivisions, this;
        }
    }
    class oo extends ao {
        constructor(t1 = 0, e = 0, i = 1, n = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0){
            super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t1, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
        }
        getPoint(t1, e) {
            const i = e || new It, n = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for(; r < 0;)r += n;
            for(; r > n;)r -= n;
            r < Number.EPSILON && (r = s ? 0 : n), !0 !== this.aClockwise || s || (r === n ? r = -n : r -= n);
            const a = this.aStartAngle + t1 * r;
            let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t1 = Math.cos(this.aRotation), e = Math.sin(this.aRotation), i = o - this.aX, n = l - this.aY;
                o = i * t1 - n * e + this.aX, l = i * e + n * t1 + this.aY;
            }
            return i.set(o, l);
        }
        copy(t1) {
            return super.copy(t1), this.aX = t1.aX, this.aY = t1.aY, this.xRadius = t1.xRadius, this.yRadius = t1.yRadius, this.aStartAngle = t1.aStartAngle, this.aEndAngle = t1.aEndAngle, this.aClockwise = t1.aClockwise, this.aRotation = t1.aRotation, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.aX = this.aX, t1.aY = this.aY, t1.xRadius = this.xRadius, t1.yRadius = this.yRadius, t1.aStartAngle = this.aStartAngle, t1.aEndAngle = this.aEndAngle, t1.aClockwise = this.aClockwise, t1.aRotation = this.aRotation, t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.aX = t1.aX, this.aY = t1.aY, this.xRadius = t1.xRadius, this.yRadius = t1.yRadius, this.aStartAngle = t1.aStartAngle, this.aEndAngle = t1.aEndAngle, this.aClockwise = t1.aClockwise, this.aRotation = t1.aRotation, this;
        }
    }
    class lo extends oo {
        constructor(t1, e, i, n, r, s){
            super(t1, e, i, i, n, r, s), this.isArcCurve = !0, this.type = "ArcCurve";
        }
    }
    function co() {
        let t1 = 0, e = 0, i = 0, n = 0;
        function r(r, s, a, o) {
            t1 = r, e = a, i = -3 * r + 3 * s - 2 * a - o, n = 2 * r - 2 * s + a + o;
        }
        return {
            initCatmullRom: function(t1, e, i, n, s) {
                r(e, i, s * (i - t1), s * (n - e));
            },
            initNonuniformCatmullRom: function(t1, e, i, n, s, a, o) {
                let l = (e - t1) / s - (i - t1) / (s + a) + (i - e) / a, c = (i - e) / a - (n - e) / (a + o) + (n - i) / o;
                l *= a, c *= a, r(e, i, l, c);
            },
            calc: function(r) {
                const s = r * r;
                return t1 + e * r + i * s + n * (s * r);
            }
        };
    }
    const ho = new oe, uo = new co, po = new co, mo = new co;
    class fo extends ao {
        constructor(t1 = [], e = !1, i = "centripetal", n = .5){
            super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t1, this.closed = e, this.curveType = i, this.tension = n;
        }
        getPoint(t1, e = new oe) {
            const i = e, n = this.points, r = n.length, s = (r - (this.closed ? 0 : 1)) * t1;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = n[(l - 1) % r] : (ho.subVectors(n[0], n[1]).add(n[0]), a = ho);
            const h = n[l % r], u = n[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = n[(l + 2) % r] : (ho.subVectors(n[r - 1], n[r - 2]).add(n[r - 1]), o = ho), "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t1 = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t1), i = Math.pow(h.distanceToSquared(u), t1), n = Math.pow(u.distanceToSquared(o), t1);
                i < 1e-4 && (i = 1), e < 1e-4 && (e = i), n < 1e-4 && (n = i), uo.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, i, n), po.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, i, n), mo.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, i, n);
            } else "catmullrom" === this.curveType && (uo.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), po.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), mo.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return i.set(uo.calc(c), po.calc(c), mo.calc(c)), i;
        }
        copy(t1) {
            super.copy(t1), this.points = [];
            for(let e = 0, i = t1.points.length; e < i; e++){
                const i = t1.points[e];
                this.points.push(i.clone());
            }
            return this.closed = t1.closed, this.curveType = t1.curveType, this.tension = t1.tension, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.points = [];
            for(let e = 0, i = this.points.length; e < i; e++){
                const i = this.points[e];
                t1.points.push(i.toArray());
            }
            return t1.closed = this.closed, t1.curveType = this.curveType, t1.tension = this.tension, t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.points = [];
            for(let e = 0, i = t1.points.length; e < i; e++){
                const i = t1.points[e];
                this.points.push((new oe).fromArray(i));
            }
            return this.closed = t1.closed, this.curveType = t1.curveType, this.tension = t1.tension, this;
        }
    }
    function go(t1, e, i, n, r) {
        const s = .5 * (n - e), a = .5 * (r - i), o = t1 * t1;
        return (2 * i - 2 * n + s + a) * (t1 * o) + (-3 * i + 3 * n - 2 * s - a) * o + s * t1 + i;
    }
    function vo(t1, e, i, n) {
        return function(t1, e) {
            const i = 1 - t1;
            return i * i * e;
        }(t1, e) + function(t1, e) {
            return 2 * (1 - t1) * t1 * e;
        }(t1, i) + function(t1, e) {
            return t1 * t1 * e;
        }(t1, n);
    }
    function xo(t1, e, i, n, r) {
        return function(t1, e) {
            const i = 1 - t1;
            return i * i * i * e;
        }(t1, e) + function(t1, e) {
            const i = 1 - t1;
            return 3 * i * i * t1 * e;
        }(t1, i) + function(t1, e) {
            return 3 * (1 - t1) * t1 * t1 * e;
        }(t1, n) + function(t1, e) {
            return t1 * t1 * t1 * e;
        }(t1, r);
    }
    class _o extends ao {
        constructor(t1 = new It, e = new It, i = new It, n = new It){
            super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t1, this.v1 = e, this.v2 = i, this.v3 = n;
        }
        getPoint(t1, e = new It) {
            const i = e, n = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return i.set(xo(t1, n.x, r.x, s.x, a.x), xo(t1, n.y, r.y, s.y, a.y)), i;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this.v3.copy(t1.v3), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1.v3 = this.v3.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this.v3.fromArray(t1.v3), this;
        }
    }
    class yo extends ao {
        constructor(t1 = new oe, e = new oe, i = new oe, n = new oe){
            super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t1, this.v1 = e, this.v2 = i, this.v3 = n;
        }
        getPoint(t1, e = new oe) {
            const i = e, n = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return i.set(xo(t1, n.x, r.x, s.x, a.x), xo(t1, n.y, r.y, s.y, a.y), xo(t1, n.z, r.z, s.z, a.z)), i;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this.v3.copy(t1.v3), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1.v3 = this.v3.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this.v3.fromArray(t1.v3), this;
        }
    }
    class Mo extends ao {
        constructor(t1 = new It, e = new It){
            super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t1, this.v2 = e;
        }
        getPoint(t1, e = new It) {
            const i = e;
            return 1 === t1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t1).add(this.v1)), i;
        }
        getPointAt(t1, e) {
            return this.getPoint(t1, e);
        }
        getTangent(t1, e) {
            const i = e || new It;
            return i.copy(this.v2).sub(this.v1).normalize(), i;
        }
        copy(t1) {
            return super.copy(t1), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class bo extends ao {
        constructor(t1 = new oe, e = new oe){
            super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t1, this.v2 = e;
        }
        getPoint(t1, e = new oe) {
            const i = e;
            return 1 === t1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t1).add(this.v1)), i;
        }
        getPointAt(t1, e) {
            return this.getPoint(t1, e);
        }
        copy(t1) {
            return super.copy(t1), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class So extends ao {
        constructor(t1 = new It, e = new It, i = new It){
            super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t1, this.v1 = e, this.v2 = i;
        }
        getPoint(t1, e = new It) {
            const i = e, n = this.v0, r = this.v1, s = this.v2;
            return i.set(vo(t1, n.x, r.x, s.x), vo(t1, n.y, r.y, s.y)), i;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class wo extends ao {
        constructor(t1 = new oe, e = new oe, i = new oe){
            super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t1, this.v1 = e, this.v2 = i;
        }
        getPoint(t1, e = new oe) {
            const i = e, n = this.v0, r = this.v1, s = this.v2;
            return i.set(vo(t1, n.x, r.x, s.x), vo(t1, n.y, r.y, s.y), vo(t1, n.z, r.z, s.z)), i;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class To extends ao {
        constructor(t1 = []){
            super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t1;
        }
        getPoint(t1, e = new It) {
            const i = e, n = this.points, r = (n.length - 1) * t1, s = Math.floor(r), a = r - s, o = n[0 === s ? s : s - 1], l = n[s], c = n[s > n.length - 2 ? n.length - 1 : s + 1], h = n[s > n.length - 3 ? n.length - 1 : s + 2];
            return i.set(go(a, o.x, l.x, c.x, h.x), go(a, o.y, l.y, c.y, h.y)), i;
        }
        copy(t1) {
            super.copy(t1), this.points = [];
            for(let e = 0, i = t1.points.length; e < i; e++){
                const i = t1.points[e];
                this.points.push(i.clone());
            }
            return this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.points = [];
            for(let e = 0, i = this.points.length; e < i; e++){
                const i = this.points[e];
                t1.points.push(i.toArray());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.points = [];
            for(let e = 0, i = t1.points.length; e < i; e++){
                const i = t1.points[e];
                this.points.push((new It).fromArray(i));
            }
            return this;
        }
    }
    var Ao = Object.freeze({
        __proto__: null,
        ArcCurve: lo,
        CatmullRomCurve3: fo,
        CubicBezierCurve: _o,
        CubicBezierCurve3: yo,
        EllipseCurve: oo,
        LineCurve: Mo,
        LineCurve3: bo,
        QuadraticBezierCurve: So,
        QuadraticBezierCurve3: wo,
        SplineCurve: To
    });
    class Eo extends ao {
        constructor(){
            super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
        }
        add(t1) {
            this.curves.push(t1);
        }
        closePath() {
            const t1 = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            t1.equals(e) || this.curves.push(new Mo(e, t1));
        }
        getPoint(t1, e) {
            const i = t1 * this.getLength(), n = this.getCurveLengths();
            let r = 0;
            for(; r < n.length;){
                if (n[r] >= i) {
                    const t1 = n[r] - i, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t1 / a;
                    return s.getPointAt(o, e);
                }
                r++;
            }
            return null;
        }
        getLength() {
            const t1 = this.getCurveLengths();
            return t1[t1.length - 1];
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            const t1 = [];
            let e = 0;
            for(let i = 0, n = this.curves.length; i < n; i++)e += this.curves[i].getLength(), t1.push(e);
            return this.cacheLengths = t1, t1;
        }
        getSpacedPoints(t1 = 40) {
            const e = [];
            for(let i = 0; i <= t1; i++)e.push(this.getPoint(i / t1));
            return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t1 = 12) {
            const e = [];
            let i;
            for(let n = 0, r = this.curves; n < r.length; n++){
                const s = r[n], a = s.isEllipseCurve ? 2 * t1 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t1 * s.points.length : t1, o = s.getPoints(a);
                for(let t1 = 0; t1 < o.length; t1++){
                    const n = o[t1];
                    i && i.equals(n) || (e.push(n), i = n);
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        }
        copy(t1) {
            super.copy(t1), this.curves = [];
            for(let e = 0, i = t1.curves.length; e < i; e++){
                const i = t1.curves[e];
                this.curves.push(i.clone());
            }
            return this.autoClose = t1.autoClose, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.autoClose = this.autoClose, t1.curves = [];
            for(let e = 0, i = this.curves.length; e < i; e++){
                const i = this.curves[e];
                t1.curves.push(i.toJSON());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.autoClose = t1.autoClose, this.curves = [];
            for(let e = 0, i = t1.curves.length; e < i; e++){
                const i = t1.curves[e];
                this.curves.push((new Ao[i.type]).fromJSON(i));
            }
            return this;
        }
    }
    class Co extends Eo {
        constructor(t1){
            super(), this.type = "Path", this.currentPoint = new It, t1 && this.setFromPoints(t1);
        }
        setFromPoints(t1) {
            this.moveTo(t1[0].x, t1[0].y);
            for(let e = 1, i = t1.length; e < i; e++)this.lineTo(t1[e].x, t1[e].y);
            return this;
        }
        moveTo(t1, e) {
            return this.currentPoint.set(t1, e), this;
        }
        lineTo(t1, e) {
            const i = new Mo(this.currentPoint.clone(), new It(t1, e));
            return this.curves.push(i), this.currentPoint.set(t1, e), this;
        }
        quadraticCurveTo(t1, e, i, n) {
            const r = new So(this.currentPoint.clone(), new It(t1, e), new It(i, n));
            return this.curves.push(r), this.currentPoint.set(i, n), this;
        }
        bezierCurveTo(t1, e, i, n, r, s) {
            const a = new _o(this.currentPoint.clone(), new It(t1, e), new It(i, n), new It(r, s));
            return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t1) {
            const e = [
                this.currentPoint.clone()
            ].concat(t1), i = new To(e);
            return this.curves.push(i), this.currentPoint.copy(t1[t1.length - 1]), this;
        }
        arc(t1, e, i, n, r, s) {
            const a = this.currentPoint.x, o = this.currentPoint.y;
            return this.absarc(t1 + a, e + o, i, n, r, s), this;
        }
        absarc(t1, e, i, n, r, s) {
            return this.absellipse(t1, e, i, i, n, r, s), this;
        }
        ellipse(t1, e, i, n, r, s, a, o) {
            const l = this.currentPoint.x, c = this.currentPoint.y;
            return this.absellipse(t1 + l, e + c, i, n, r, s, a, o), this;
        }
        absellipse(t1, e, i, n, r, s, a, o) {
            const l = new oo(t1, e, i, n, r, s, a, o);
            if (this.curves.length > 0) {
                const t1 = l.getPoint(0);
                t1.equals(this.currentPoint) || this.lineTo(t1.x, t1.y);
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c), this;
        }
        copy(t1) {
            return super.copy(t1), this.currentPoint.copy(t1.currentPoint), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.currentPoint = this.currentPoint.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.currentPoint.fromArray(t1.currentPoint), this;
        }
    }
    class Lo extends zi {
        constructor(t1 = [
            new It(0, -0.5),
            new It(.5, 0),
            new It(0, .5)
        ], e = 12, i = 0, n = 2 * Math.PI){
            super(), this.type = "LatheGeometry", this.parameters = {
                points: t1,
                segments: e,
                phiStart: i,
                phiLength: n
            }, e = Math.floor(e), n = St(n, 0, 2 * Math.PI);
            const r = [], s = [], a = [], o = [], l = [], c = 1 / e, h = new oe, u = new It, d = new oe, p = new oe, m = new oe;
            let f = 0, g = 0;
            for(let e = 0; e <= t1.length - 1; e++)switch(e){
                case 0:
                    f = t1[e + 1].x - t1[e].x, g = t1[e + 1].y - t1[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, m.copy(d), d.normalize(), o.push(d.x, d.y, d.z);
                    break;
                case t1.length - 1:
                    o.push(m.x, m.y, m.z);
                    break;
                default:
                    f = t1[e + 1].x - t1[e].x, g = t1[e + 1].y - t1[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, p.copy(d), d.x += m.x, d.y += m.y, d.z += m.z, d.normalize(), o.push(d.x, d.y, d.z), m.copy(p);
            }
            for(let r = 0; r <= e; r++){
                const d = i + r * c * n, p = Math.sin(d), m = Math.cos(d);
                for(let i = 0; i <= t1.length - 1; i++){
                    h.x = t1[i].x * p, h.y = t1[i].y, h.z = t1[i].x * m, s.push(h.x, h.y, h.z), u.x = r / e, u.y = i / (t1.length - 1), a.push(u.x, u.y);
                    const n = o[3 * i + 0] * p, c = o[3 * i + 1], d = o[3 * i + 0] * m;
                    l.push(n, c, d);
                }
            }
            for(let i = 0; i < e; i++)for(let e = 0; e < t1.length - 1; e++){
                const n = e + i * t1.length, s = n, a = n + t1.length, o = n + t1.length + 1, l = n + 1;
                r.push(s, a, l), r.push(o, l, a);
            }
            this.setIndex(r), this.setAttribute("position", new Ci(s, 3)), this.setAttribute("uv", new Ci(a, 2)), this.setAttribute("normal", new Ci(l, 3));
        }
        static fromJSON(t1) {
            return new Lo(t1.points, t1.segments, t1.phiStart, t1.phiLength);
        }
    }
    class Ro extends Lo {
        constructor(t1 = 1, e = 1, i = 4, n = 8){
            const r = new Co;
            r.absarc(0, -e / 2, t1, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t1, 0, .5 * Math.PI), super(r.getPoints(i), n), this.type = "CapsuleGeometry", this.parameters = {
                radius: t1,
                height: e,
                capSegments: i,
                radialSegments: n
            };
        }
        static fromJSON(t1) {
            return new Ro(t1.radius, t1.length, t1.capSegments, t1.radialSegments);
        }
    }
    class Po extends zi {
        constructor(t1 = 1, e = 32, i = 0, n = 2 * Math.PI){
            super(), this.type = "CircleGeometry", this.parameters = {
                radius: t1,
                segments: e,
                thetaStart: i,
                thetaLength: n
            }, e = Math.max(3, e);
            const r = [], s = [], a = [], o = [], l = new oe, c = new It;
            s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
            for(let r = 0, h = 3; r <= e; r++, h += 3){
                const u = i + r / e * n;
                l.x = t1 * Math.cos(u), l.y = t1 * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t1 + 1) / 2, c.y = (s[h + 1] / t1 + 1) / 2, o.push(c.x, c.y);
            }
            for(let t1 = 1; t1 <= e; t1++)r.push(t1, t1 + 1, 0);
            this.setIndex(r), this.setAttribute("position", new Ci(s, 3)), this.setAttribute("normal", new Ci(a, 3)), this.setAttribute("uv", new Ci(o, 2));
        }
        static fromJSON(t1) {
            return new Po(t1.radius, t1.segments, t1.thetaStart, t1.thetaLength);
        }
    }
    class Io extends zi {
        constructor(t1 = 1, e = 1, i = 1, n = 32, r = 1, s = !1, a = 0, o = 2 * Math.PI){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t1,
                radiusBottom: e,
                height: i,
                radialSegments: n,
                heightSegments: r,
                openEnded: s,
                thetaStart: a,
                thetaLength: o
            };
            const l = this;
            n = Math.floor(n), r = Math.floor(r);
            const c = [], h = [], u = [], d = [];
            let p = 0;
            const m = [], f = i / 2;
            let g = 0;
            function v(i) {
                const r = p, s = new It, m = new oe;
                let v = 0;
                const x = !0 === i ? t1 : e, _ = !0 === i ? 1 : -1;
                for(let t1 = 1; t1 <= n; t1++)h.push(0, f * _, 0), u.push(0, _, 0), d.push(.5, .5), p++;
                const y = p;
                for(let t1 = 0; t1 <= n; t1++){
                    const e = t1 / n * o + a, i = Math.cos(e), r = Math.sin(e);
                    m.x = x * r, m.y = f * _, m.z = x * i, h.push(m.x, m.y, m.z), u.push(0, _, 0), s.x = .5 * i + .5, s.y = .5 * r * _ + .5, d.push(s.x, s.y), p++;
                }
                for(let t1 = 0; t1 < n; t1++){
                    const e = r + t1, n = y + t1;
                    !0 === i ? c.push(n, n + 1, e) : c.push(n + 1, n, e), v += 3;
                }
                l.addGroup(g, v, !0 === i ? 1 : 2), g += v;
            }
            !function() {
                const s = new oe, v = new oe;
                let x = 0;
                const _ = (e - t1) / i;
                for(let l = 0; l <= r; l++){
                    const c = [], g = l / r, x = g * (e - t1) + t1;
                    for(let t1 = 0; t1 <= n; t1++){
                        const e = t1 / n, r = e * o + a, l = Math.sin(r), m = Math.cos(r);
                        v.x = x * l, v.y = -g * i + f, v.z = x * m, h.push(v.x, v.y, v.z), s.set(l, _, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++);
                    }
                    m.push(c);
                }
                for(let t1 = 0; t1 < n; t1++)for(let e = 0; e < r; e++){
                    const i = m[e][t1], n = m[e + 1][t1], r = m[e + 1][t1 + 1], s = m[e][t1 + 1];
                    c.push(i, n, s), c.push(n, r, s), x += 6;
                }
                l.addGroup(g, x, 0), g += x;
            }(), !1 === s && (t1 > 0 && v(!0), e > 0 && v(!1)), this.setIndex(c), this.setAttribute("position", new Ci(h, 3)), this.setAttribute("normal", new Ci(u, 3)), this.setAttribute("uv", new Ci(d, 2));
        }
        static fromJSON(t1) {
            return new Io(t1.radiusTop, t1.radiusBottom, t1.height, t1.radialSegments, t1.heightSegments, t1.openEnded, t1.thetaStart, t1.thetaLength);
        }
    }
    class Do extends Io {
        constructor(t1 = 1, e = 1, i = 32, n = 1, r = !1, s = 0, a = 2 * Math.PI){
            super(0, t1, e, i, n, r, s, a), this.type = "ConeGeometry", this.parameters = {
                radius: t1,
                height: e,
                radialSegments: i,
                heightSegments: n,
                openEnded: r,
                thetaStart: s,
                thetaLength: a
            };
        }
        static fromJSON(t1) {
            return new Do(t1.radius, t1.height, t1.radialSegments, t1.heightSegments, t1.openEnded, t1.thetaStart, t1.thetaLength);
        }
    }
    class No extends zi {
        constructor(t1 = [], e = [], i = 1, n = 0){
            super(), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t1,
                indices: e,
                radius: i,
                detail: n
            };
            const r = [], s = [];
            function a(t1, e, i, n) {
                const r = n + 1, s = [];
                for(let n = 0; n <= r; n++){
                    s[n] = [];
                    const a = t1.clone().lerp(i, n / r), o = e.clone().lerp(i, n / r), l = r - n;
                    for(let t1 = 0; t1 <= l; t1++)s[n][t1] = 0 === t1 && n === r ? a : a.clone().lerp(o, t1 / l);
                }
                for(let t1 = 0; t1 < r; t1++)for(let e = 0; e < 2 * (r - t1) - 1; e++){
                    const i = Math.floor(e / 2);
                    e % 2 == 0 ? (o(s[t1][i + 1]), o(s[t1 + 1][i]), o(s[t1][i])) : (o(s[t1][i + 1]), o(s[t1 + 1][i + 1]), o(s[t1 + 1][i]));
                }
            }
            function o(t1) {
                r.push(t1.x, t1.y, t1.z);
            }
            function l(e, i) {
                const n = 3 * e;
                i.x = t1[n + 0], i.y = t1[n + 1], i.z = t1[n + 2];
            }
            function c(t1, e, i, n) {
                n < 0 && 1 === t1.x && (s[e] = t1.x - 1), 0 === i.x && 0 === i.z && (s[e] = n / 2 / Math.PI + .5);
            }
            function h(t1) {
                return Math.atan2(t1.z, -t1.x);
            }
            !function(t1) {
                const i = new oe, n = new oe, r = new oe;
                for(let s = 0; s < e.length; s += 3)l(e[s + 0], i), l(e[s + 1], n), l(e[s + 2], r), a(i, n, r, t1);
            }(n), function(t1) {
                const e = new oe;
                for(let i = 0; i < r.length; i += 3)e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t1), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z;
            }(i), function() {
                const t1 = new oe;
                for(let i = 0; i < r.length; i += 3){
                    t1.x = r[i + 0], t1.y = r[i + 1], t1.z = r[i + 2];
                    const n = h(t1) / 2 / Math.PI + .5, a = (e = t1, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
                    s.push(n, 1 - a);
                }
                var e;
                (function() {
                    const t1 = new oe, e = new oe, i = new oe, n = new oe, a = new It, o = new It, l = new It;
                    for(let u = 0, d = 0; u < r.length; u += 9, d += 6){
                        t1.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), n.copy(t1).add(e).add(i).divideScalar(3);
                        const p = h(n);
                        c(a, d + 0, t1, p), c(o, d + 2, e, p), c(l, d + 4, i, p);
                    }
                })(), function() {
                    for(let t1 = 0; t1 < s.length; t1 += 6){
                        const e = s[t1 + 0], i = s[t1 + 2], n = s[t1 + 4], r = Math.max(e, i, n), a = Math.min(e, i, n);
                        r > .9 && a < .1 && (e < .2 && (s[t1 + 0] += 1), i < .2 && (s[t1 + 2] += 1), n < .2 && (s[t1 + 4] += 1));
                    }
                }();
            }(), this.setAttribute("position", new Ci(r, 3)), this.setAttribute("normal", new Ci(r.slice(), 3)), this.setAttribute("uv", new Ci(s, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals();
        }
        static fromJSON(t1) {
            return new No(t1.vertices, t1.indices, t1.radius, t1.details);
        }
    }
    class Oo extends No {
        constructor(t1 = 1, e = 0){
            const i = (1 + Math.sqrt(5)) / 2, n = 1 / i;
            super([
                -1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1,
                1,
                0,
                -n,
                -i,
                0,
                -n,
                i,
                0,
                n,
                -i,
                0,
                n,
                i,
                -n,
                -i,
                0,
                -n,
                i,
                0,
                n,
                -i,
                0,
                n,
                i,
                0,
                -i,
                0,
                -n,
                i,
                0,
                -n,
                -i,
                0,
                n,
                i,
                0,
                n
            ], [
                3,
                11,
                7,
                3,
                7,
                15,
                3,
                15,
                13,
                7,
                19,
                17,
                7,
                17,
                6,
                7,
                6,
                15,
                17,
                4,
                8,
                17,
                8,
                10,
                17,
                10,
                6,
                8,
                0,
                16,
                8,
                16,
                2,
                8,
                2,
                10,
                0,
                12,
                1,
                0,
                1,
                18,
                0,
                18,
                16,
                6,
                10,
                2,
                6,
                2,
                13,
                6,
                13,
                15,
                2,
                16,
                18,
                2,
                18,
                3,
                2,
                3,
                13,
                18,
                1,
                9,
                18,
                9,
                11,
                18,
                11,
                3,
                4,
                14,
                12,
                4,
                12,
                0,
                4,
                0,
                8,
                11,
                9,
                5,
                11,
                5,
                19,
                11,
                19,
                7,
                19,
                5,
                14,
                19,
                14,
                4,
                19,
                4,
                17,
                1,
                12,
                14,
                1,
                14,
                5,
                1,
                5,
                9
            ], t1, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Oo(t1.radius, t1.detail);
        }
    }
    const zo = new oe, Uo = new oe, Bo = new oe, Fo = new _i;
    class ko extends zi {
        constructor(t1 = null, e = 1){
            if (super(), this.type = "EdgesGeometry", this.parameters = {
                geometry: t1,
                thresholdAngle: e
            }, null !== t1) {
                const i = 4, n = Math.pow(10, i), r = Math.cos(yt * e), s = t1.getIndex(), a = t1.getAttribute("position"), o = s ? s.count : a.count, l = [
                    0,
                    0,
                    0
                ], c = [
                    "a",
                    "b",
                    "c"
                ], h = new Array(3), u = {}, d = [];
                for(let t1 = 0; t1 < o; t1 += 3){
                    s ? (l[0] = s.getX(t1), l[1] = s.getX(t1 + 1), l[2] = s.getX(t1 + 2)) : (l[0] = t1, l[1] = t1 + 1, l[2] = t1 + 2);
                    const { a: e, b: i, c: o } = Fo;
                    if (e.fromBufferAttribute(a, l[0]), i.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), Fo.getNormal(Bo), h[0] = `${Math.round(e.x * n)},${Math.round(e.y * n)},${Math.round(e.z * n)}`, h[1] = `${Math.round(i.x * n)},${Math.round(i.y * n)},${Math.round(i.z * n)}`, h[2] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`, h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for(let t1 = 0; t1 < 3; t1++){
                        const e = (t1 + 1) % 3, i = h[t1], n = h[e], s = Fo[c[t1]], a = Fo[c[e]], o = `${i}_${n}`, p = `${n}_${i}`;
                        p in u && u[p] ? (Bo.dot(u[p].normal) <= r && (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)), u[p] = null) : o in u || (u[o] = {
                            index0: l[t1],
                            index1: l[e],
                            normal: Bo.clone()
                        });
                    }
                }
                for(const t1 in u)if (u[t1]) {
                    const { index0: e, index1: i } = u[t1];
                    zo.fromBufferAttribute(a, e), Uo.fromBufferAttribute(a, i), d.push(zo.x, zo.y, zo.z), d.push(Uo.x, Uo.y, Uo.z);
                }
                this.setAttribute("position", new Ci(d, 3));
            }
        }
    }
    class Go extends Co {
        constructor(t1){
            super(t1), this.uuid = bt(), this.type = "Shape", this.holes = [];
        }
        getPointsHoles(t1) {
            const e = [];
            for(let i = 0, n = this.holes.length; i < n; i++)e[i] = this.holes[i].getPoints(t1);
            return e;
        }
        extractPoints(t1) {
            return {
                shape: this.getPoints(t1),
                holes: this.getPointsHoles(t1)
            };
        }
        copy(t1) {
            super.copy(t1), this.holes = [];
            for(let e = 0, i = t1.holes.length; e < i; e++){
                const i = t1.holes[e];
                this.holes.push(i.clone());
            }
            return this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.uuid = this.uuid, t1.holes = [];
            for(let e = 0, i = this.holes.length; e < i; e++){
                const i = this.holes[e];
                t1.holes.push(i.toJSON());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.uuid = t1.uuid, this.holes = [];
            for(let e = 0, i = t1.holes.length; e < i; e++){
                const i = t1.holes[e];
                this.holes.push((new Co).fromJSON(i));
            }
            return this;
        }
    }
    const Vo = function(t1, e, i = 2) {
        const n = e && e.length, r = n ? e[0] * i : t1.length;
        let s = Ho(t1, 0, r, i, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (n && (s = function(t1, e, i, n) {
            const r = [];
            let s, a, o, l, c;
            for(s = 0, a = e.length; s < a; s++)o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : t1.length, c = Ho(t1, o, l, n, !1), c === c.next && (c.steiner = !0), r.push(tl(c));
            for(r.sort(Jo), s = 0; s < r.length; s++)i = Ko(r[s], i);
            return i;
        }(t1, e, s, i)), t1.length > 80 * i) {
            o = c = t1[0], l = h = t1[1];
            for(let e = i; e < r; e += i)u = t1[e], d = t1[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            p = Math.max(c - o, h - l), p = 0 !== p ? 32767 / p : 0;
        }
        return jo(s, a, i, o, l, p, 0), a;
    };
    function Ho(t1, e, i, n, r) {
        let s, a;
        if (r === function(t1, e, i, n) {
            let r = 0;
            for(let s = e, a = i - n; s < i; s += n)r += (t1[a] - t1[s]) * (t1[s + 1] + t1[a + 1]), a = s;
            return r;
        }(t1, e, i, n) > 0) for(s = e; s < i; s += n)a = hl(s, t1[s], t1[s + 1], a);
        else for(s = i - n; s >= e; s -= n)a = hl(s, t1[s], t1[s + 1], a);
        return a && rl(a, a.next) && (ul(a), a = a.next), a;
    }
    function Wo(t1, e) {
        if (!t1) return t1;
        e || (e = t1);
        let i, n = t1;
        do if (i = !1, n.steiner || !rl(n, n.next) && 0 !== nl(n.prev, n, n.next)) n = n.next;
        else {
            if (ul(n), n = e = n.prev, n === n.next) break;
            i = !0;
        }
        while (i || n !== e);
        return e;
    }
    function jo(t1, e, i, n, r, s, a) {
        if (!t1) return;
        !a && s && function(t1, e, i, n) {
            let r = t1;
            do 0 === r.z && (r.z = Qo(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
            while (r !== t1);
            r.prevZ.nextZ = null, r.prevZ = null, function(t1) {
                let e, i, n, r, s, a, o, l, c = 1;
                do {
                    for(i = t1, t1 = null, s = null, a = 0; i;){
                        for(a++, n = i, o = 0, e = 0; e < c && (o++, n = n.nextZ, n); e++);
                        for(l = c; o > 0 || l > 0 && n;)0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, l--), s ? s.nextZ = r : t1 = r, r.prevZ = s, s = r;
                        i = n;
                    }
                    s.nextZ = null, c *= 2;
                }while (a > 1);
            }(r);
        }(t1, n, r, s);
        let o, l, c = t1;
        for(; t1.prev !== t1.next;)if (o = t1.prev, l = t1.next, s ? Xo(t1, n, r, s) : qo(t1)) e.push(o.i / i | 0), e.push(t1.i / i | 0), e.push(l.i / i | 0), ul(t1), t1 = l.next, c = l.next;
        else if ((t1 = l) === c) {
            a ? 1 === a ? jo(t1 = Yo(Wo(t1), e, i), e, i, n, r, s, 2) : 2 === a && Zo(t1, e, i, n, r, s) : jo(Wo(t1), e, i, n, r, s, 1);
            break;
        }
    }
    function qo(t1) {
        const e = t1.prev, i = t1, n = t1.next;
        if (nl(e, i, n) >= 0) return !1;
        const r = e.x, s = i.x, a = n.x, o = e.y, l = i.y, c = n.y, h = r < s ? r < a ? r : a : s < a ? s : a, u = o < l ? o < c ? o : c : l < c ? l : c, d = r > s ? r > a ? r : a : s > a ? s : a, p = o > l ? o > c ? o : c : l > c ? l : c;
        let m = n.next;
        for(; m !== e;){
            if (m.x >= h && m.x <= d && m.y >= u && m.y <= p && el(r, o, s, l, a, c, m.x, m.y) && nl(m.prev, m, m.next) >= 0) return !1;
            m = m.next;
        }
        return !0;
    }
    function Xo(t1, e, i, n) {
        const r = t1.prev, s = t1, a = t1.next;
        if (nl(r, s, a) >= 0) return !1;
        const o = r.x, l = s.x, c = a.x, h = r.y, u = s.y, d = a.y, p = o < l ? o < c ? o : c : l < c ? l : c, m = h < u ? h < d ? h : d : u < d ? u : d, f = o > l ? o > c ? o : c : l > c ? l : c, g = h > u ? h > d ? h : d : u > d ? u : d, v = Qo(p, m, e, i, n), x = Qo(f, g, e, i, n);
        let _ = t1.prevZ, y = t1.nextZ;
        for(; _ && _.z >= v && y && y.z <= x;){
            if (_.x >= p && _.x <= f && _.y >= m && _.y <= g && _ !== r && _ !== a && el(o, h, l, u, c, d, _.x, _.y) && nl(_.prev, _, _.next) >= 0) return !1;
            if (_ = _.prevZ, y.x >= p && y.x <= f && y.y >= m && y.y <= g && y !== r && y !== a && el(o, h, l, u, c, d, y.x, y.y) && nl(y.prev, y, y.next) >= 0) return !1;
            y = y.nextZ;
        }
        for(; _ && _.z >= v;){
            if (_.x >= p && _.x <= f && _.y >= m && _.y <= g && _ !== r && _ !== a && el(o, h, l, u, c, d, _.x, _.y) && nl(_.prev, _, _.next) >= 0) return !1;
            _ = _.prevZ;
        }
        for(; y && y.z <= x;){
            if (y.x >= p && y.x <= f && y.y >= m && y.y <= g && y !== r && y !== a && el(o, h, l, u, c, d, y.x, y.y) && nl(y.prev, y, y.next) >= 0) return !1;
            y = y.nextZ;
        }
        return !0;
    }
    function Yo(t1, e, i) {
        let n = t1;
        do {
            const r = n.prev, s = n.next.next;
            !rl(r, s) && sl(r, n, n.next, s) && ll(r, s) && ll(s, r) && (e.push(r.i / i | 0), e.push(n.i / i | 0), e.push(s.i / i | 0), ul(n), ul(n.next), n = t1 = s), n = n.next;
        }while (n !== t1);
        return Wo(n);
    }
    function Zo(t1, e, i, n, r, s) {
        let a = t1;
        do {
            let t1 = a.next.next;
            for(; t1 !== a.prev;){
                if (a.i !== t1.i && il(a, t1)) {
                    let o = cl(a, t1);
                    return a = Wo(a, a.next), o = Wo(o, o.next), jo(a, e, i, n, r, s, 0), void jo(o, e, i, n, r, s, 0);
                }
                t1 = t1.next;
            }
            a = a.next;
        }while (a !== t1);
    }
    function Jo(t1, e) {
        return t1.x - e.x;
    }
    function Ko(t1, e) {
        const i = function(t1, e) {
            let i, n = e, r = -1 / 0;
            const s = t1.x, a = t1.y;
            do {
                if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                    const t1 = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (t1 <= s && t1 > r && (r = t1, i = n.x < n.next.x ? n : n.next, t1 === s)) return i;
                }
                n = n.next;
            }while (n !== e);
            if (!i) return null;
            const o = i, l = i.x, c = i.y;
            let h, u = 1 / 0;
            n = i;
            do s >= n.x && n.x >= l && s !== n.x && el(a < c ? s : r, a, l, c, a < c ? r : s, a, n.x, n.y) && (h = Math.abs(a - n.y) / (s - n.x), ll(n, t1) && (h < u || h === u && (n.x > i.x || n.x === i.x && $o(i, n))) && (i = n, u = h)), n = n.next;
            while (n !== o);
            return i;
        }(t1, e);
        if (!i) return e;
        const n = cl(i, t1);
        return Wo(n, n.next), Wo(i, i.next);
    }
    function $o(t1, e) {
        return nl(t1.prev, t1, e.prev) < 0 && nl(e.next, t1, t1.next) < 0;
    }
    function Qo(t1, e, i, n, r) {
        return (t1 = 1431655765 & ((t1 = 858993459 & ((t1 = 252645135 & ((t1 = 16711935 & ((t1 = (t1 - i) * r | 0) | t1 << 8)) | t1 << 4)) | t1 << 2)) | t1 << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - n) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function tl(t1) {
        let e = t1, i = t1;
        do (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next;
        while (e !== t1);
        return i;
    }
    function el(t1, e, i, n, r, s, a, o) {
        return (r - a) * (e - o) >= (t1 - a) * (s - o) && (t1 - a) * (n - o) >= (i - a) * (e - o) && (i - a) * (s - o) >= (r - a) * (n - o);
    }
    function il(t1, e) {
        return t1.next.i !== e.i && t1.prev.i !== e.i && !function(t1, e) {
            let i = t1;
            do {
                if (i.i !== t1.i && i.next.i !== t1.i && i.i !== e.i && i.next.i !== e.i && sl(i, i.next, t1, e)) return !0;
                i = i.next;
            }while (i !== t1);
            return !1;
        }(t1, e) && (ll(t1, e) && ll(e, t1) && function(t1, e) {
            let i = t1, n = !1;
            const r = (t1.x + e.x) / 2, s = (t1.y + e.y) / 2;
            do i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next;
            while (i !== t1);
            return n;
        }(t1, e) && (nl(t1.prev, t1, e.prev) || nl(t1, e.prev, e)) || rl(t1, e) && nl(t1.prev, t1, t1.next) > 0 && nl(e.prev, e, e.next) > 0);
    }
    function nl(t1, e, i) {
        return (e.y - t1.y) * (i.x - e.x) - (e.x - t1.x) * (i.y - e.y);
    }
    function rl(t1, e) {
        return t1.x === e.x && t1.y === e.y;
    }
    function sl(t1, e, i, n) {
        const r = ol(nl(t1, e, i)), s = ol(nl(t1, e, n)), a = ol(nl(i, n, t1)), o = ol(nl(i, n, e));
        return r !== s && a !== o || !(0 !== r || !al(t1, i, e)) || !(0 !== s || !al(t1, n, e)) || !(0 !== a || !al(i, t1, n)) || !(0 !== o || !al(i, e, n));
    }
    function al(t1, e, i) {
        return e.x <= Math.max(t1.x, i.x) && e.x >= Math.min(t1.x, i.x) && e.y <= Math.max(t1.y, i.y) && e.y >= Math.min(t1.y, i.y);
    }
    function ol(t1) {
        return t1 > 0 ? 1 : t1 < 0 ? -1 : 0;
    }
    function ll(t1, e) {
        return nl(t1.prev, t1, t1.next) < 0 ? nl(t1, e, t1.next) >= 0 && nl(t1, t1.prev, e) >= 0 : nl(t1, e, t1.prev) < 0 || nl(t1, t1.next, e) < 0;
    }
    function cl(t1, e) {
        const i = new dl(t1.i, t1.x, t1.y), n = new dl(e.i, e.x, e.y), r = t1.next, s = e.prev;
        return t1.next = e, e.prev = t1, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, n.prev = s, n;
    }
    function hl(t1, e, i, n) {
        const r = new dl(t1, e, i);
        return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r;
    }
    function ul(t1) {
        t1.next.prev = t1.prev, t1.prev.next = t1.next, t1.prevZ && (t1.prevZ.nextZ = t1.nextZ), t1.nextZ && (t1.nextZ.prevZ = t1.prevZ);
    }
    function dl(t1, e, i) {
        this.i = t1, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    class pl {
        static area(t1) {
            const e = t1.length;
            let i = 0;
            for(let n = e - 1, r = 0; r < e; n = r++)i += t1[n].x * t1[r].y - t1[r].x * t1[n].y;
            return .5 * i;
        }
        static isClockWise(t1) {
            return pl.area(t1) < 0;
        }
        static triangulateShape(t1, e) {
            const i = [], n = [], r = [];
            ml(t1), fl(i, t1);
            let s = t1.length;
            e.forEach(ml);
            for(let t1 = 0; t1 < e.length; t1++)n.push(s), s += e[t1].length, fl(i, e[t1]);
            const a = Vo(i, n);
            for(let t1 = 0; t1 < a.length; t1 += 3)r.push(a.slice(t1, t1 + 3));
            return r;
        }
    }
    function ml(t1) {
        const e = t1.length;
        e > 2 && t1[e - 1].equals(t1[0]) && t1.pop();
    }
    function fl(t1, e) {
        for(let i = 0; i < e.length; i++)t1.push(e[i].x), t1.push(e[i].y);
    }
    class gl extends zi {
        constructor(t1 = new Go([
            new It(.5, .5),
            new It(-0.5, .5),
            new It(-0.5, -0.5),
            new It(.5, -0.5)
        ]), e = {}){
            super(), this.type = "ExtrudeGeometry", this.parameters = {
                shapes: t1,
                options: e
            }, t1 = Array.isArray(t1) ? t1 : [
                t1
            ];
            const i = this, n = [], r = [];
            for(let e = 0, i = t1.length; e < i; e++)s(t1[e]);
            function s(t1) {
                const s = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1, l = void 0 !== e.depth ? e.depth : 1;
                let c = void 0 === e.bevelEnabled || e.bevelEnabled, h = void 0 !== e.bevelThickness ? e.bevelThickness : .2, u = void 0 !== e.bevelSize ? e.bevelSize : h - .1, d = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
                const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : vl;
                let g, v, x, _, y, M = !1;
                m && (g = m.getSpacedPoints(o), M = !0, c = !1, v = m.computeFrenetFrames(o, !1), x = new oe, _ = new oe, y = new oe), c || (p = 0, h = 0, u = 0, d = 0);
                const b = t1.extractPoints(a);
                let S = b.shape;
                const w = b.holes;
                if (!pl.isClockWise(S)) {
                    S = S.reverse();
                    for(let t1 = 0, e = w.length; t1 < e; t1++){
                        const e = w[t1];
                        pl.isClockWise(e) && (w[t1] = e.reverse());
                    }
                }
                const T = pl.triangulateShape(S, w), A = S;
                for(let t1 = 0, e = w.length; t1 < e; t1++){
                    const e = w[t1];
                    S = S.concat(e);
                }
                function E(t1, e, i) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t1);
                }
                const C = S.length, L = T.length;
                function R(t1, e, i) {
                    let n, r, s;
                    const a = t1.x - e.x, o = t1.y - e.y, l = i.x - t1.x, c = i.y - t1.y, h = a * a + o * o, u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, m = e.y + a / u, f = ((i.x - c / d - p) * c - (i.y + l / d - m) * l) / (a * c - o * l);
                        n = p + a * f - t1.x, r = m + o * f - t1.y;
                        const g = n * n + r * r;
                        if (g <= 2) return new It(n, r);
                        s = Math.sqrt(g / 2);
                    } else {
                        let t1 = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t1 = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t1 = !0) : Math.sign(o) === Math.sign(c) && (t1 = !0), t1 ? (n = -o, r = a, s = Math.sqrt(h)) : (n = a, r = o, s = Math.sqrt(h / 2));
                    }
                    return new It(n / s, r / s);
                }
                const P = [];
                for(let t1 = 0, e = A.length, i = e - 1, n = t1 + 1; t1 < e; t1++, i++, n++)i === e && (i = 0), n === e && (n = 0), P[t1] = R(A[t1], A[i], A[n]);
                const I = [];
                let D, N = P.concat();
                for(let t1 = 0, e = w.length; t1 < e; t1++){
                    const e = w[t1];
                    D = [];
                    for(let t1 = 0, i = e.length, n = i - 1, r = t1 + 1; t1 < i; t1++, n++, r++)n === i && (n = 0), r === i && (r = 0), D[t1] = R(e[t1], e[n], e[r]);
                    I.push(D), N = N.concat(D);
                }
                for(let t1 = 0; t1 < p; t1++){
                    const e = t1 / p, i = h * Math.cos(e * Math.PI / 2), n = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t1 = 0, e = A.length; t1 < e; t1++){
                        const e = E(A[t1], P[t1], n);
                        U(e.x, e.y, -i);
                    }
                    for(let t1 = 0, e = w.length; t1 < e; t1++){
                        const e = w[t1];
                        D = I[t1];
                        for(let t1 = 0, r = e.length; t1 < r; t1++){
                            const r = E(e[t1], D[t1], n);
                            U(r.x, r.y, -i);
                        }
                    }
                }
                const O = u + d;
                for(let t1 = 0; t1 < C; t1++){
                    const e = c ? E(S[t1], N[t1], O) : S[t1];
                    M ? (_.copy(v.normals[0]).multiplyScalar(e.x), x.copy(v.binormals[0]).multiplyScalar(e.y), y.copy(g[0]).add(_).add(x), U(y.x, y.y, y.z)) : U(e.x, e.y, 0);
                }
                for(let t1 = 1; t1 <= o; t1++)for(let e = 0; e < C; e++){
                    const i = c ? E(S[e], N[e], O) : S[e];
                    M ? (_.copy(v.normals[t1]).multiplyScalar(i.x), x.copy(v.binormals[t1]).multiplyScalar(i.y), y.copy(g[t1]).add(_).add(x), U(y.x, y.y, y.z)) : U(i.x, i.y, l / o * t1);
                }
                for(let t1 = p - 1; t1 >= 0; t1--){
                    const e = t1 / p, i = h * Math.cos(e * Math.PI / 2), n = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t1 = 0, e = A.length; t1 < e; t1++){
                        const e = E(A[t1], P[t1], n);
                        U(e.x, e.y, l + i);
                    }
                    for(let t1 = 0, e = w.length; t1 < e; t1++){
                        const e = w[t1];
                        D = I[t1];
                        for(let t1 = 0, r = e.length; t1 < r; t1++){
                            const r = E(e[t1], D[t1], n);
                            M ? U(r.x, r.y + g[o - 1].y, g[o - 1].x + i) : U(r.x, r.y, l + i);
                        }
                    }
                }
                function z(t1, e) {
                    let i = t1.length;
                    for(; --i >= 0;){
                        const n = i;
                        let r = i - 1;
                        r < 0 && (r = t1.length - 1);
                        for(let t1 = 0, i = o + 2 * p; t1 < i; t1++){
                            const i = C * t1, s = C * (t1 + 1);
                            F(e + n + i, e + r + i, e + r + s, e + n + s);
                        }
                    }
                }
                function U(t1, e, i) {
                    s.push(t1), s.push(e), s.push(i);
                }
                function B(t1, e, r) {
                    k(t1), k(e), k(r);
                    const s = n.length / 3, a = f.generateTopUV(i, n, s - 3, s - 2, s - 1);
                    G(a[0]), G(a[1]), G(a[2]);
                }
                function F(t1, e, r, s) {
                    k(t1), k(e), k(s), k(e), k(r), k(s);
                    const a = n.length / 3, o = f.generateSideWallUV(i, n, a - 6, a - 3, a - 2, a - 1);
                    G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
                }
                function k(t1) {
                    n.push(s[3 * t1 + 0]), n.push(s[3 * t1 + 1]), n.push(s[3 * t1 + 2]);
                }
                function G(t1) {
                    r.push(t1.x), r.push(t1.y);
                }
                !function() {
                    const t1 = n.length / 3;
                    if (c) {
                        let t1 = 0, e = C * t1;
                        for(let t1 = 0; t1 < L; t1++){
                            const i = T[t1];
                            B(i[2] + e, i[1] + e, i[0] + e);
                        }
                        t1 = o + 2 * p, e = C * t1;
                        for(let t1 = 0; t1 < L; t1++){
                            const i = T[t1];
                            B(i[0] + e, i[1] + e, i[2] + e);
                        }
                    } else {
                        for(let t1 = 0; t1 < L; t1++){
                            const e = T[t1];
                            B(e[2], e[1], e[0]);
                        }
                        for(let t1 = 0; t1 < L; t1++){
                            const e = T[t1];
                            B(e[0] + C * o, e[1] + C * o, e[2] + C * o);
                        }
                    }
                    i.addGroup(t1, n.length / 3 - t1, 0);
                }(), function() {
                    const t1 = n.length / 3;
                    let e = 0;
                    z(A, e), e += A.length;
                    for(let t1 = 0, i = w.length; t1 < i; t1++){
                        const i = w[t1];
                        z(i, e), e += i.length;
                    }
                    i.addGroup(t1, n.length / 3 - t1, 1);
                }();
            }
            this.setAttribute("position", new Ci(n, 3)), this.setAttribute("uv", new Ci(r, 2)), this.computeVertexNormals();
        }
        toJSON() {
            const t1 = super.toJSON();
            return function(t1, e, i) {
                if (i.shapes = [], Array.isArray(t1)) for(let e = 0, n = t1.length; e < n; e++){
                    const n = t1[e];
                    i.shapes.push(n.uuid);
                }
                else i.shapes.push(t1.uuid);
                i.options = Object.assign({}, e), void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON());
                return i;
            }(this.parameters.shapes, this.parameters.options, t1);
        }
        static fromJSON(t1, e) {
            const i = [];
            for(let n = 0, r = t1.shapes.length; n < r; n++){
                const r = e[t1.shapes[n]];
                i.push(r);
            }
            const n = t1.options.extrudePath;
            return void 0 !== n && (t1.options.extrudePath = (new Ao[n.type]).fromJSON(n)), new gl(i, t1.options);
        }
    }
    const vl = {
        generateTopUV: function(t1, e, i, n, r) {
            const s = e[3 * i], a = e[3 * i + 1], o = e[3 * n], l = e[3 * n + 1], c = e[3 * r], h = e[3 * r + 1];
            return [
                new It(s, a),
                new It(o, l),
                new It(c, h)
            ];
        },
        generateSideWallUV: function(t1, e, i, n, r, s) {
            const a = e[3 * i], o = e[3 * i + 1], l = e[3 * i + 2], c = e[3 * n], h = e[3 * n + 1], u = e[3 * n + 2], d = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [
                new It(a, 1 - l),
                new It(c, 1 - u),
                new It(d, 1 - m),
                new It(f, 1 - v)
            ] : [
                new It(o, 1 - l),
                new It(h, 1 - u),
                new It(p, 1 - m),
                new It(g, 1 - v)
            ];
        }
    };
    class xl extends No {
        constructor(t1 = 1, e = 0){
            const i = (1 + Math.sqrt(5)) / 2;
            super([
                -1,
                i,
                0,
                1,
                i,
                0,
                -1,
                -i,
                0,
                1,
                -i,
                0,
                0,
                -1,
                i,
                0,
                1,
                i,
                0,
                -1,
                -i,
                0,
                1,
                -i,
                i,
                0,
                -1,
                i,
                0,
                1,
                -i,
                0,
                -1,
                -i,
                0,
                1
            ], [
                0,
                11,
                5,
                0,
                5,
                1,
                0,
                1,
                7,
                0,
                7,
                10,
                0,
                10,
                11,
                1,
                5,
                9,
                5,
                11,
                4,
                11,
                10,
                2,
                10,
                7,
                6,
                7,
                1,
                8,
                3,
                9,
                4,
                3,
                4,
                2,
                3,
                2,
                6,
                3,
                6,
                8,
                3,
                8,
                9,
                4,
                9,
                5,
                2,
                4,
                11,
                6,
                2,
                10,
                8,
                6,
                7,
                9,
                8,
                1
            ], t1, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new xl(t1.radius, t1.detail);
        }
    }
    class _l extends No {
        constructor(t1 = 1, e = 0){
            super([
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1
            ], [
                0,
                2,
                4,
                0,
                4,
                3,
                0,
                3,
                5,
                0,
                5,
                2,
                1,
                2,
                5,
                1,
                5,
                3,
                1,
                3,
                4,
                1,
                4,
                2
            ], t1, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new _l(t1.radius, t1.detail);
        }
    }
    class yl extends zi {
        constructor(t1 = .5, e = 1, i = 32, n = 1, r = 0, s = 2 * Math.PI){
            super(), this.type = "RingGeometry", this.parameters = {
                innerRadius: t1,
                outerRadius: e,
                thetaSegments: i,
                phiSegments: n,
                thetaStart: r,
                thetaLength: s
            }, i = Math.max(3, i);
            const a = [], o = [], l = [], c = [];
            let h = t1;
            const u = (e - t1) / (n = Math.max(1, n)), d = new oe, p = new It;
            for(let t1 = 0; t1 <= n; t1++){
                for(let t1 = 0; t1 <= i; t1++){
                    const n = r + t1 / i * s;
                    d.x = h * Math.cos(n), d.y = h * Math.sin(n), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
                }
                h += u;
            }
            for(let t1 = 0; t1 < n; t1++){
                const e = t1 * (i + 1);
                for(let t1 = 0; t1 < i; t1++){
                    const n = t1 + e, r = n, s = n + i + 1, o = n + i + 2, l = n + 1;
                    a.push(r, s, l), a.push(s, o, l);
                }
            }
            this.setIndex(a), this.setAttribute("position", new Ci(o, 3)), this.setAttribute("normal", new Ci(l, 3)), this.setAttribute("uv", new Ci(c, 2));
        }
        static fromJSON(t1) {
            return new yl(t1.innerRadius, t1.outerRadius, t1.thetaSegments, t1.phiSegments, t1.thetaStart, t1.thetaLength);
        }
    }
    class Ml extends zi {
        constructor(t1 = new Go([
            new It(0, .5),
            new It(-0.5, -0.5),
            new It(.5, -0.5)
        ]), e = 12){
            super(), this.type = "ShapeGeometry", this.parameters = {
                shapes: t1,
                curveSegments: e
            };
            const i = [], n = [], r = [], s = [];
            let a = 0, o = 0;
            if (!1 === Array.isArray(t1)) l(t1);
            else for(let e = 0; e < t1.length; e++)l(t1[e]), this.addGroup(a, o, e), a += o, o = 0;
            function l(t1) {
                const a = n.length / 3, l = t1.extractPoints(e);
                let c = l.shape;
                const h = l.holes;
                !1 === pl.isClockWise(c) && (c = c.reverse());
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    !0 === pl.isClockWise(e) && (h[t1] = e.reverse());
                }
                const u = pl.triangulateShape(c, h);
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    c = c.concat(e);
                }
                for(let t1 = 0, e = c.length; t1 < e; t1++){
                    const e = c[t1];
                    n.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
                }
                for(let t1 = 0, e = u.length; t1 < e; t1++){
                    const e = u[t1], n = e[0] + a, r = e[1] + a, s = e[2] + a;
                    i.push(n, r, s), o += 3;
                }
            }
            this.setIndex(i), this.setAttribute("position", new Ci(n, 3)), this.setAttribute("normal", new Ci(r, 3)), this.setAttribute("uv", new Ci(s, 2));
        }
        toJSON() {
            const t1 = super.toJSON();
            return function(t1, e) {
                if (e.shapes = [], Array.isArray(t1)) for(let i = 0, n = t1.length; i < n; i++){
                    const n = t1[i];
                    e.shapes.push(n.uuid);
                }
                else e.shapes.push(t1.uuid);
                return e;
            }(this.parameters.shapes, t1);
        }
        static fromJSON(t1, e) {
            const i = [];
            for(let n = 0, r = t1.shapes.length; n < r; n++){
                const r = e[t1.shapes[n]];
                i.push(r);
            }
            return new Ml(i, t1.curveSegments);
        }
    }
    class bl extends zi {
        constructor(t1 = 1, e = 32, i = 16, n = 0, r = 2 * Math.PI, s = 0, a = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: t1,
                widthSegments: e,
                heightSegments: i,
                phiStart: n,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, e = Math.max(3, Math.floor(e)), i = Math.max(2, Math.floor(i));
            const o = Math.min(s + a, Math.PI);
            let l = 0;
            const c = [], h = new oe, u = new oe, d = [], p = [], m = [], f = [];
            for(let d = 0; d <= i; d++){
                const g = [], v = d / i;
                let x = 0;
                0 == d && 0 == s ? x = .5 / e : d == i && o == Math.PI && (x = -0.5 / e);
                for(let i = 0; i <= e; i++){
                    const o = i / e;
                    h.x = -t1 * Math.cos(n + o * r) * Math.sin(s + v * a), h.y = t1 * Math.cos(s + v * a), h.z = t1 * Math.sin(n + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(o + x, 1 - v), g.push(l++);
                }
                c.push(g);
            }
            for(let t1 = 0; t1 < i; t1++)for(let n = 0; n < e; n++){
                const e = c[t1][n + 1], r = c[t1][n], a = c[t1 + 1][n], l = c[t1 + 1][n + 1];
                (0 !== t1 || s > 0) && d.push(e, r, l), (t1 !== i - 1 || o < Math.PI) && d.push(r, a, l);
            }
            this.setIndex(d), this.setAttribute("position", new Ci(p, 3)), this.setAttribute("normal", new Ci(m, 3)), this.setAttribute("uv", new Ci(f, 2));
        }
        static fromJSON(t1) {
            return new bl(t1.radius, t1.widthSegments, t1.heightSegments, t1.phiStart, t1.phiLength, t1.thetaStart, t1.thetaLength);
        }
    }
    class Sl extends No {
        constructor(t1 = 1, e = 0){
            super([
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                -1,
                -1
            ], [
                2,
                1,
                0,
                0,
                3,
                2,
                1,
                3,
                0,
                2,
                3,
                1
            ], t1, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Sl(t1.radius, t1.detail);
        }
    }
    class wl extends zi {
        constructor(t1 = 1, e = .4, i = 12, n = 48, r = 2 * Math.PI){
            super(), this.type = "TorusGeometry", this.parameters = {
                radius: t1,
                tube: e,
                radialSegments: i,
                tubularSegments: n,
                arc: r
            }, i = Math.floor(i), n = Math.floor(n);
            const s = [], a = [], o = [], l = [], c = new oe, h = new oe, u = new oe;
            for(let s = 0; s <= i; s++)for(let d = 0; d <= n; d++){
                const p = d / n * r, m = s / i * Math.PI * 2;
                h.x = (t1 + e * Math.cos(m)) * Math.cos(p), h.y = (t1 + e * Math.cos(m)) * Math.sin(p), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t1 * Math.cos(p), c.y = t1 * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / n), l.push(s / i);
            }
            for(let t1 = 1; t1 <= i; t1++)for(let e = 1; e <= n; e++){
                const i = (n + 1) * t1 + e - 1, r = (n + 1) * (t1 - 1) + e - 1, a = (n + 1) * (t1 - 1) + e, o = (n + 1) * t1 + e;
                s.push(i, r, o), s.push(r, a, o);
            }
            this.setIndex(s), this.setAttribute("position", new Ci(a, 3)), this.setAttribute("normal", new Ci(o, 3)), this.setAttribute("uv", new Ci(l, 2));
        }
        static fromJSON(t1) {
            return new wl(t1.radius, t1.tube, t1.radialSegments, t1.tubularSegments, t1.arc);
        }
    }
    class Tl extends zi {
        constructor(t1 = 1, e = .4, i = 64, n = 8, r = 2, s = 3){
            super(), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t1,
                tube: e,
                tubularSegments: i,
                radialSegments: n,
                p: r,
                q: s
            }, i = Math.floor(i), n = Math.floor(n);
            const a = [], o = [], l = [], c = [], h = new oe, u = new oe, d = new oe, p = new oe, m = new oe, f = new oe, g = new oe;
            for(let a = 0; a <= i; ++a){
                const x = a / i * r * Math.PI * 2;
                v(x, r, s, t1, d), v(x + .01, r, s, t1, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
                for(let t1 = 0; t1 <= n; ++t1){
                    const r = t1 / n * Math.PI * 2, s = -e * Math.cos(r), p = e * Math.sin(r);
                    h.x = d.x + (s * g.x + p * m.x), h.y = d.y + (s * g.y + p * m.y), h.z = d.z + (s * g.z + p * m.z), o.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l.push(u.x, u.y, u.z), c.push(a / i), c.push(t1 / n);
                }
            }
            for(let t1 = 1; t1 <= i; t1++)for(let e = 1; e <= n; e++){
                const i = (n + 1) * (t1 - 1) + (e - 1), r = (n + 1) * t1 + (e - 1), s = (n + 1) * t1 + e, o = (n + 1) * (t1 - 1) + e;
                a.push(i, r, o), a.push(r, s, o);
            }
            function v(t1, e, i, n, r) {
                const s = Math.cos(t1), a = Math.sin(t1), o = i / e * t1, l = Math.cos(o);
                r.x = n * (2 + l) * .5 * s, r.y = n * (2 + l) * a * .5, r.z = n * Math.sin(o) * .5;
            }
            this.setIndex(a), this.setAttribute("position", new Ci(o, 3)), this.setAttribute("normal", new Ci(l, 3)), this.setAttribute("uv", new Ci(c, 2));
        }
        static fromJSON(t1) {
            return new Tl(t1.radius, t1.tube, t1.tubularSegments, t1.radialSegments, t1.p, t1.q);
        }
    }
    class Al extends zi {
        constructor(t1 = new wo(new oe(-1, -1, 0), new oe(-1, 1, 0), new oe(1, 1, 0)), e = 64, i = 1, n = 8, r = !1){
            super(), this.type = "TubeGeometry", this.parameters = {
                path: t1,
                tubularSegments: e,
                radius: i,
                radialSegments: n,
                closed: r
            };
            const s = t1.computeFrenetFrames(e, r);
            this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
            const a = new oe, o = new oe, l = new It;
            let c = new oe;
            const h = [], u = [], d = [], p = [];
            function m(r) {
                c = t1.getPointAt(r / e, c);
                const l = s.normals[r], d = s.binormals[r];
                for(let t1 = 0; t1 <= n; t1++){
                    const e = t1 / n * Math.PI * 2, r = Math.sin(e), s = -Math.cos(e);
                    o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = c.x + i * o.x, a.y = c.y + i * o.y, a.z = c.z + i * o.z, h.push(a.x, a.y, a.z);
                }
            }
            !function() {
                for(let t1 = 0; t1 < e; t1++)m(t1);
                m(!1 === r ? e : 0), function() {
                    for(let t1 = 0; t1 <= e; t1++)for(let i = 0; i <= n; i++)l.x = t1 / e, l.y = i / n, d.push(l.x, l.y);
                }(), function() {
                    for(let t1 = 1; t1 <= e; t1++)for(let e = 1; e <= n; e++){
                        const i = (n + 1) * (t1 - 1) + (e - 1), r = (n + 1) * t1 + (e - 1), s = (n + 1) * t1 + e, a = (n + 1) * (t1 - 1) + e;
                        p.push(i, r, a), p.push(r, s, a);
                    }
                }();
            }(), this.setIndex(p), this.setAttribute("position", new Ci(h, 3)), this.setAttribute("normal", new Ci(u, 3)), this.setAttribute("uv", new Ci(d, 2));
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.path = this.parameters.path.toJSON(), t1;
        }
        static fromJSON(t1) {
            return new Al((new Ao[t1.path.type]).fromJSON(t1.path), t1.tubularSegments, t1.radius, t1.radialSegments, t1.closed);
        }
    }
    class El extends zi {
        constructor(t1 = null){
            if (super(), this.type = "WireframeGeometry", this.parameters = {
                geometry: t1
            }, null !== t1) {
                const e = [], i = new Set, n = new oe, r = new oe;
                if (null !== t1.index) {
                    const s = t1.attributes.position, a = t1.index;
                    let o = t1.groups;
                    0 === o.length && (o = [
                        {
                            start: 0,
                            count: a.count,
                            materialIndex: 0
                        }
                    ]);
                    for(let t1 = 0, l = o.length; t1 < l; ++t1){
                        const l = o[t1], c = l.start;
                        for(let t1 = c, o = c + l.count; t1 < o; t1 += 3)for(let o = 0; o < 3; o++){
                            const l = a.getX(t1 + o), c = a.getX(t1 + (o + 1) % 3);
                            n.fromBufferAttribute(s, l), r.fromBufferAttribute(s, c), !0 === Cl(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z));
                        }
                    }
                } else {
                    const s = t1.attributes.position;
                    for(let t1 = 0, a = s.count / 3; t1 < a; t1++)for(let a = 0; a < 3; a++){
                        const o = 3 * t1 + a, l = 3 * t1 + (a + 1) % 3;
                        n.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === Cl(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z));
                    }
                }
                this.setAttribute("position", new Ci(e, 3));
            }
        }
    }
    function Cl(t1, e, i) {
        const n = `${t1.x},${t1.y},${t1.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t1.x},${t1.y},${t1.z}`;
        return !0 !== i.has(n) && !0 !== i.has(r) && (i.add(n), i.add(r), !0);
    }
    var Ll = Object.freeze({
        __proto__: null,
        BoxGeometry: $i,
        CapsuleGeometry: Ro,
        CircleGeometry: Po,
        ConeGeometry: Do,
        CylinderGeometry: Io,
        DodecahedronGeometry: Oo,
        EdgesGeometry: ko,
        ExtrudeGeometry: gl,
        IcosahedronGeometry: xl,
        LatheGeometry: Lo,
        OctahedronGeometry: _l,
        PlaneGeometry: yn,
        PolyhedronGeometry: No,
        RingGeometry: yl,
        ShapeGeometry: Ml,
        SphereGeometry: bl,
        TetrahedronGeometry: Sl,
        TorusGeometry: wl,
        TorusKnotGeometry: Tl,
        TubeGeometry: Al,
        WireframeGeometry: El
    });
    class Rl extends Mi {
        constructor(t1){
            super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Zt(0), this.transparent = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.fog = t1.fog, this;
        }
    }
    class Pl extends rn {
        constructor(t1){
            super(t1), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
        }
    }
    class Il extends Mi {
        constructor(t1){
            super(), this.isMeshStandardMaterial = !0, this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new Zt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new It(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                STANDARD: ""
            }, this.color.copy(t1.color), this.roughness = t1.roughness, this.metalness = t1.metalness, this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.roughnessMap = t1.roughnessMap, this.metalnessMap = t1.metalnessMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.envMapIntensity = t1.envMapIntensity, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class Dl extends Il {
        constructor(t1){
            super(), this.isMeshPhysicalMaterial = !0, this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new It(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return St(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
                },
                set: function(t1) {
                    this.ior = (1 + .4 * t1) / (1 - .4 * t1);
                }
            }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
                100,
                400
            ], this.iridescenceThicknessMap = null, this.sheenColor = new Zt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Zt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Zt(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t1);
        }
        get sheen() {
            return this._sheen;
        }
        set sheen(t1) {
            this._sheen > 0 != t1 > 0 && this.version++, this._sheen = t1;
        }
        get clearcoat() {
            return this._clearcoat;
        }
        set clearcoat(t1) {
            this._clearcoat > 0 != t1 > 0 && this.version++, this._clearcoat = t1;
        }
        get iridescence() {
            return this._iridescence;
        }
        set iridescence(t1) {
            this._iridescence > 0 != t1 > 0 && this.version++, this._iridescence = t1;
        }
        get transmission() {
            return this._transmission;
        }
        set transmission(t1) {
            this._transmission > 0 != t1 > 0 && this.version++, this._transmission = t1;
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.clearcoat = t1.clearcoat, this.clearcoatMap = t1.clearcoatMap, this.clearcoatRoughness = t1.clearcoatRoughness, this.clearcoatRoughnessMap = t1.clearcoatRoughnessMap, this.clearcoatNormalMap = t1.clearcoatNormalMap, this.clearcoatNormalScale.copy(t1.clearcoatNormalScale), this.ior = t1.ior, this.iridescence = t1.iridescence, this.iridescenceMap = t1.iridescenceMap, this.iridescenceIOR = t1.iridescenceIOR, this.iridescenceThicknessRange = [
                ...t1.iridescenceThicknessRange
            ], this.iridescenceThicknessMap = t1.iridescenceThicknessMap, this.sheen = t1.sheen, this.sheenColor.copy(t1.sheenColor), this.sheenColorMap = t1.sheenColorMap, this.sheenRoughness = t1.sheenRoughness, this.sheenRoughnessMap = t1.sheenRoughnessMap, this.transmission = t1.transmission, this.transmissionMap = t1.transmissionMap, this.thickness = t1.thickness, this.thicknessMap = t1.thicknessMap, this.attenuationDistance = t1.attenuationDistance, this.attenuationColor.copy(t1.attenuationColor), this.specularIntensity = t1.specularIntensity, this.specularIntensityMap = t1.specularIntensityMap, this.specularColor.copy(t1.specularColor), this.specularColorMap = t1.specularColorMap, this;
        }
    }
    class Nl extends Mi {
        constructor(t1){
            super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Zt(16777215), this.specular = new Zt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new It(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.specular.copy(t1.specular), this.shininess = t1.shininess, this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class Ol extends Mi {
        constructor(t1){
            super(), this.isMeshToonMaterial = !0, this.defines = {
                TOON: ""
            }, this.type = "MeshToonMaterial", this.color = new Zt(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new It(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.gradientMap = t1.gradientMap, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.alphaMap = t1.alphaMap, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.fog = t1.fog, this;
        }
    }
    class zl extends Mi {
        constructor(t1){
            super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new It(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.flatShading = t1.flatShading, this;
        }
    }
    class Ul extends Mi {
        constructor(t1){
            super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Zt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new It(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class Bl extends Mi {
        constructor(t1){
            super(), this.isMeshMatcapMaterial = !0, this.defines = {
                MATCAP: ""
            }, this.type = "MeshMatcapMaterial", this.color = new Zt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new It(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                MATCAP: ""
            }, this.color.copy(t1.color), this.matcap = t1.matcap, this.map = t1.map, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.alphaMap = t1.alphaMap, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class Fl extends Ga {
        constructor(t1){
            super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.scale = t1.scale, this.dashSize = t1.dashSize, this.gapSize = t1.gapSize, this;
        }
    }
    function kl(t1, e, i) {
        return Vl(t1) ? new t1.constructor(t1.subarray(e, void 0 !== i ? i : t1.length)) : t1.slice(e, i);
    }
    function Gl(t1, e, i) {
        return !t1 || !i && t1.constructor === e ? t1 : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t1) : Array.prototype.slice.call(t1);
    }
    function Vl(t1) {
        return ArrayBuffer.isView(t1) && !(t1 instanceof DataView);
    }
    function Hl(t1) {
        const e = t1.length, i = new Array(e);
        for(let t1 = 0; t1 !== e; ++t1)i[t1] = t1;
        return i.sort(function(e, i) {
            return t1[e] - t1[i];
        }), i;
    }
    function Wl(t1, e, i) {
        const n = t1.length, r = new t1.constructor(n);
        for(let s = 0, a = 0; a !== n; ++s){
            const n = i[s] * e;
            for(let i = 0; i !== e; ++i)r[a++] = t1[n + i];
        }
        return r;
    }
    function jl(t1, e, i, n) {
        let r = 1, s = t1[0];
        for(; void 0 !== s && void 0 === s[n];)s = t1[r++];
        if (void 0 === s) return;
        let a = s[n];
        if (void 0 !== a) {
            if (Array.isArray(a)) do a = s[n], void 0 !== a && (e.push(s.time), i.push.apply(i, a)), s = t1[r++];
            while (void 0 !== s);
            else if (void 0 !== a.toArray) do a = s[n], void 0 !== a && (e.push(s.time), a.toArray(i, i.length)), s = t1[r++];
            while (void 0 !== s);
            else do a = s[n], void 0 !== a && (e.push(s.time), i.push(a)), s = t1[r++];
            while (void 0 !== s);
        }
    }
    var ql = Object.freeze({
        __proto__: null,
        arraySlice: kl,
        convertArray: Gl,
        flattenJSON: jl,
        getKeyframeOrder: Hl,
        isTypedArray: Vl,
        makeClipAdditive: function(t1, e = 0, i = t1, n = 30) {
            n <= 0 && (n = 30);
            const r = i.tracks.length, s = e / n;
            for(let e = 0; e < r; ++e){
                const n = i.tracks[e], r = n.ValueTypeName;
                if ("bool" === r || "string" === r) continue;
                const a = t1.tracks.find(function(t1) {
                    return t1.name === n.name && t1.ValueTypeName === r;
                });
                if (void 0 === a) continue;
                let o = 0;
                const l = n.getValueSize();
                n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = n.times.length - 1;
                let d;
                if (s <= n.times[0]) {
                    const t1 = o, e = l - o;
                    d = kl(n.values, t1, e);
                } else if (s >= n.times[u]) {
                    const t1 = u * l + o, e = t1 + l - o;
                    d = kl(n.values, t1, e);
                } else {
                    const t1 = n.createInterpolant(), e = o, i = l - o;
                    t1.evaluate(s), d = kl(t1.resultBuffer, e, i);
                }
                if ("quaternion" === r) (new ae).fromArray(d).normalize().conjugate().toArray(d);
                const p = a.times.length;
                for(let t1 = 0; t1 < p; ++t1){
                    const e = t1 * h + c;
                    if ("quaternion" === r) ae.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t1 = h - 2 * c;
                        for(let i = 0; i < t1; ++i)a.values[e + i] -= d[i];
                    }
                }
            }
            return t1.blendMode = lt, t1;
        },
        sortedArray: Wl,
        subclip: function(t1, e, i, n, r = 30) {
            const s = t1.clone();
            s.name = e;
            const a = [];
            for(let t1 = 0; t1 < s.tracks.length; ++t1){
                const e = s.tracks[t1], o = e.getValueSize(), l = [], c = [];
                for(let t1 = 0; t1 < e.times.length; ++t1){
                    const s = e.times[t1] * r;
                    if (!(s < i || s >= n)) {
                        l.push(e.times[t1]);
                        for(let i = 0; i < o; ++i)c.push(e.values[t1 * o + i]);
                    }
                }
                0 !== l.length && (e.times = Gl(l, e.times.constructor), e.values = Gl(c, e.values.constructor), a.push(e));
            }
            s.tracks = a;
            let o = 1 / 0;
            for(let t1 = 0; t1 < s.tracks.length; ++t1)o > s.tracks[t1].times[0] && (o = s.tracks[t1].times[0]);
            for(let t1 = 0; t1 < s.tracks.length; ++t1)s.tracks[t1].shift(-1 * o);
            return s.resetDuration(), s;
        }
    });
    class Xl {
        constructor(t1, e, i, n){
            this.parameterPositions = t1, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t1) {
            const e = this.parameterPositions;
            let i = this._cachedIndex, n = e[i], r = e[i - 1];
            t: {
                e: {
                    let s;
                    i: {
                        n: if (!(t1 < n)) {
                            for(let s = i + 2;;){
                                if (void 0 === n) {
                                    if (t1 < r) break n;
                                    return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
                                }
                                if (i === s) break;
                                if (r = n, n = e[++i], t1 < n) break e;
                            }
                            s = e.length;
                            break i;
                        }
                        if (t1 >= r) break t;
                        {
                            const a = e[1];
                            t1 < a && (i = 2, r = a);
                            for(let s = i - 2;;){
                                if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                                if (i === s) break;
                                if (n = r, r = e[--i - 1], t1 >= r) break e;
                            }
                            s = i, i = 0;
                        }
                    }
                    for(; i < s;){
                        const n = i + s >>> 1;
                        t1 < e[n] ? s = n : i = n + 1;
                    }
                    if (n = e[i], r = e[i - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                    if (void 0 === n) return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
                }
                this._cachedIndex = i, this.intervalChanged_(i, r, n);
            }
            return this.interpolate_(i, r, t1, n);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t1) {
            const e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t1 * n;
            for(let t1 = 0; t1 !== n; ++t1)e[t1] = i[r + t1];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    }
    class Yl extends Xl {
        constructor(t1, e, i, n){
            super(t1, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                endingStart: rt,
                endingEnd: rt
            };
        }
        intervalChanged_(t1, e, i) {
            const n = this.parameterPositions;
            let r = t1 - 2, s = t1 + 1, a = n[r], o = n[s];
            if (void 0 === a) switch(this.getSettings_().endingStart){
                case st:
                    r = t1, a = 2 * e - i;
                    break;
                case at:
                    r = n.length - 2, a = e + n[r] - n[r + 1];
                    break;
                default:
                    r = t1, a = i;
            }
            if (void 0 === o) switch(this.getSettings_().endingEnd){
                case st:
                    s = t1, o = 2 * i - e;
                    break;
                case at:
                    s = 1, o = i + n[1] - n[0];
                    break;
                default:
                    s = t1 - 1, o = e;
            }
            const l = .5 * (i - e), c = this.valueSize;
            this._weightPrev = l / (e - a), this._weightNext = l / (o - i), this._offsetPrev = r * c, this._offsetNext = s * c;
        }
        interpolate_(t1, e, i, n) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t1 * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (i - e) / (n - e), m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p, v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1, x = (-1 - d) * f + (1.5 + d) * m + .5 * p, _ = d * f - d * m;
            for(let t1 = 0; t1 !== a; ++t1)r[t1] = g * s[c + t1] + v * s[l + t1] + x * s[o + t1] + _ * s[h + t1];
            return r;
        }
    }
    class Zl extends Xl {
        constructor(t1, e, i, n){
            super(t1, e, i, n);
        }
        interpolate_(t1, e, i, n) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t1 * a, l = o - a, c = (i - e) / (n - e), h = 1 - c;
            for(let t1 = 0; t1 !== a; ++t1)r[t1] = s[l + t1] * h + s[o + t1] * c;
            return r;
        }
    }
    class Jl extends Xl {
        constructor(t1, e, i, n){
            super(t1, e, i, n);
        }
        interpolate_(t1) {
            return this.copySampleValue_(t1 - 1);
        }
    }
    class Kl {
        constructor(t1, e, i, n){
            if (void 0 === t1) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t1);
            this.name = t1, this.times = Gl(e, this.TimeBufferType), this.values = Gl(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation);
        }
        static toJSON(t1) {
            const e = t1.constructor;
            let i;
            if (e.toJSON !== this.toJSON) i = e.toJSON(t1);
            else {
                i = {
                    name: t1.name,
                    times: Gl(t1.times, Array),
                    values: Gl(t1.values, Array)
                };
                const e = t1.getInterpolation();
                e !== t1.DefaultInterpolation && (i.interpolation = e);
            }
            return i.type = t1.ValueTypeName, i;
        }
        InterpolantFactoryMethodDiscrete(t1) {
            return new Jl(this.times, this.values, this.getValueSize(), t1);
        }
        InterpolantFactoryMethodLinear(t1) {
            return new Zl(this.times, this.values, this.getValueSize(), t1);
        }
        InterpolantFactoryMethodSmooth(t1) {
            return new Yl(this.times, this.values, this.getValueSize(), t1);
        }
        setInterpolation(t1) {
            let e;
            switch(t1){
                case et:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case it:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case nt:
                    e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t1 === this.DefaultInterpolation) throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation);
                }
                return console.warn("THREE.KeyframeTrack:", e), this;
            }
            return this.createInterpolant = e, this;
        }
        getInterpolation() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return et;
                case this.InterpolantFactoryMethodLinear:
                    return it;
                case this.InterpolantFactoryMethodSmooth:
                    return nt;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t1) {
            if (0 !== t1) {
                const e = this.times;
                for(let i = 0, n = e.length; i !== n; ++i)e[i] += t1;
            }
            return this;
        }
        scale(t1) {
            if (1 !== t1) {
                const e = this.times;
                for(let i = 0, n = e.length; i !== n; ++i)e[i] *= t1;
            }
            return this;
        }
        trim(t1, e) {
            const i = this.times, n = i.length;
            let r = 0, s = n - 1;
            for(; r !== n && i[r] < t1;)++r;
            for(; -1 !== s && i[s] > e;)--s;
            if (++s, 0 !== r || s !== n) {
                r >= s && (s = Math.max(s, 1), r = s - 1);
                const t1 = this.getValueSize();
                this.times = kl(i, r, s), this.values = kl(this.values, r * t1, s * t1);
            }
            return this;
        }
        validate() {
            let t1 = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t1 = !1);
            const i = this.times, n = this.values, r = i.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t1 = !1);
            let s = null;
            for(let e = 0; e !== r; e++){
                const n = i[e];
                if ("number" == typeof n && isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, n), t1 = !1;
                    break;
                }
                if (null !== s && s > n) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e, n, s), t1 = !1;
                    break;
                }
                s = n;
            }
            if (void 0 !== n && Vl(n)) for(let e = 0, i = n.length; e !== i; ++e){
                const i = n[e];
                if (isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, i), t1 = !1;
                    break;
                }
            }
            return t1;
        }
        optimize() {
            const t1 = kl(this.times), e = kl(this.values), i = this.getValueSize(), n = this.getInterpolation() === nt, r = t1.length - 1;
            let s = 1;
            for(let a = 1; a < r; ++a){
                let r = !1;
                const o = t1[a];
                if (o !== t1[a + 1] && (1 !== a || o !== t1[0])) {
                    if (n) r = !0;
                    else {
                        const t1 = a * i, n = t1 - i, s = t1 + i;
                        for(let a = 0; a !== i; ++a){
                            const i = e[t1 + a];
                            if (i !== e[n + a] || i !== e[s + a]) {
                                r = !0;
                                break;
                            }
                        }
                    }
                }
                if (r) {
                    if (a !== s) {
                        t1[s] = t1[a];
                        const n = a * i, r = s * i;
                        for(let t1 = 0; t1 !== i; ++t1)e[r + t1] = e[n + t1];
                    }
                    ++s;
                }
            }
            if (r > 0) {
                t1[s] = t1[r];
                for(let t1 = r * i, n = s * i, a = 0; a !== i; ++a)e[n + a] = e[t1 + a];
                ++s;
            }
            return s !== t1.length ? (this.times = kl(t1, 0, s), this.values = kl(e, 0, s * i)) : (this.times = t1, this.values = e), this;
        }
        clone() {
            const t1 = kl(this.times, 0), e = kl(this.values, 0), i = new this.constructor(this.name, t1, e);
            return i.createInterpolant = this.createInterpolant, i;
        }
    }
    Kl.prototype.TimeBufferType = Float32Array, Kl.prototype.ValueBufferType = Float32Array, Kl.prototype.DefaultInterpolation = it;
    class $l extends Kl {
    }
    $l.prototype.ValueTypeName = "bool", $l.prototype.ValueBufferType = Array, $l.prototype.DefaultInterpolation = et, $l.prototype.InterpolantFactoryMethodLinear = void 0, $l.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Ql extends Kl {
    }
    Ql.prototype.ValueTypeName = "color";
    class tc extends Kl {
    }
    tc.prototype.ValueTypeName = "number";
    class ec extends Xl {
        constructor(t1, e, i, n){
            super(t1, e, i, n);
        }
        interpolate_(t1, e, i, n) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (i - e) / (n - e);
            let l = t1 * a;
            for(let t1 = l + a; l !== t1; l += 4)ae.slerpFlat(r, 0, s, l - a, s, l, o);
            return r;
        }
    }
    class ic extends Kl {
        InterpolantFactoryMethodLinear(t1) {
            return new ec(this.times, this.values, this.getValueSize(), t1);
        }
    }
    ic.prototype.ValueTypeName = "quaternion", ic.prototype.DefaultInterpolation = it, ic.prototype.InterpolantFactoryMethodSmooth = void 0;
    class nc extends Kl {
    }
    nc.prototype.ValueTypeName = "string", nc.prototype.ValueBufferType = Array, nc.prototype.DefaultInterpolation = et, nc.prototype.InterpolantFactoryMethodLinear = void 0, nc.prototype.InterpolantFactoryMethodSmooth = void 0;
    class rc extends Kl {
    }
    rc.prototype.ValueTypeName = "vector";
    class sc {
        constructor(t1, e = -1, i, n = 2500){
            this.name = t1, this.tracks = i, this.duration = e, this.blendMode = n, this.uuid = bt(), this.duration < 0 && this.resetDuration();
        }
        static parse(t1) {
            const e = [], i = t1.tracks, n = 1 / (t1.fps || 1);
            for(let t1 = 0, r = i.length; t1 !== r; ++t1)e.push(ac(i[t1]).scale(n));
            const r = new this(t1.name, t1.duration, e, t1.blendMode);
            return r.uuid = t1.uuid, r;
        }
        static toJSON(t1) {
            const e = [], i = t1.tracks, n = {
                name: t1.name,
                duration: t1.duration,
                tracks: e,
                uuid: t1.uuid,
                blendMode: t1.blendMode
            };
            for(let t1 = 0, n = i.length; t1 !== n; ++t1)e.push(Kl.toJSON(i[t1]));
            return n;
        }
        static CreateFromMorphTargetSequence(t1, e, i, n) {
            const r = e.length, s = [];
            for(let t1 = 0; t1 < r; t1++){
                let a = [], o = [];
                a.push((t1 + r - 1) % r, t1, (t1 + 1) % r), o.push(0, 1, 0);
                const l = Hl(a);
                a = Wl(a, 1, l), o = Wl(o, 1, l), n || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new tc(".morphTargetInfluences[" + e[t1].name + "]", a, o).scale(1 / i));
            }
            return new this(t1, -1, s);
        }
        static findByName(t1, e) {
            let i = t1;
            if (!Array.isArray(t1)) {
                const e = t1;
                i = e.geometry && e.geometry.animations || e.animations;
            }
            for(let t1 = 0; t1 < i.length; t1++)if (i[t1].name === e) return i[t1];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t1, e, i) {
            const n = {}, r = /^([\w-]*?)([\d]+)$/;
            for(let e = 0, i = t1.length; e < i; e++){
                const i = t1[e], s = i.name.match(r);
                if (s && s.length > 1) {
                    const t1 = s[1];
                    let e = n[t1];
                    e || (n[t1] = e = []), e.push(i);
                }
            }
            const s = [];
            for(const t1 in n)s.push(this.CreateFromMorphTargetSequence(t1, n[t1], e, i));
            return s;
        }
        static parseAnimation(t1, e) {
            if (!t1) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const i = function(t1, e, i, n, r) {
                if (0 !== i.length) {
                    const s = [], a = [];
                    jl(i, s, a, n), 0 !== s.length && r.push(new t1(e, s, a));
                }
            }, n = [], r = t1.name || "default", s = t1.fps || 30, a = t1.blendMode;
            let o = t1.length || -1;
            const l = t1.hierarchy || [];
            for(let t1 = 0; t1 < l.length; t1++){
                const r = l[t1].keys;
                if (r && 0 !== r.length) {
                    if (r[0].morphTargets) {
                        const t1 = {};
                        let e;
                        for(e = 0; e < r.length; e++)if (r[e].morphTargets) for(let i = 0; i < r[e].morphTargets.length; i++)t1[r[e].morphTargets[i]] = -1;
                        for(const i in t1){
                            const t1 = [], s = [];
                            for(let n = 0; n !== r[e].morphTargets.length; ++n){
                                const n = r[e];
                                t1.push(n.time), s.push(n.morphTarget === i ? 1 : 0);
                            }
                            n.push(new tc(".morphTargetInfluence[" + i + "]", t1, s));
                        }
                        o = t1.length * s;
                    } else {
                        const s = ".bones[" + e[t1].name + "]";
                        i(rc, s + ".position", r, "pos", n), i(ic, s + ".quaternion", r, "rot", n), i(rc, s + ".scale", r, "scl", n);
                    }
                }
            }
            if (0 === n.length) return null;
            return new this(r, o, n, a);
        }
        resetDuration() {
            let t1 = 0;
            for(let e = 0, i = this.tracks.length; e !== i; ++e){
                const i = this.tracks[e];
                t1 = Math.max(t1, i.times[i.times.length - 1]);
            }
            return this.duration = t1, this;
        }
        trim() {
            for(let t1 = 0; t1 < this.tracks.length; t1++)this.tracks[t1].trim(0, this.duration);
            return this;
        }
        validate() {
            let t1 = !0;
            for(let e = 0; e < this.tracks.length; e++)t1 = t1 && this.tracks[e].validate();
            return t1;
        }
        optimize() {
            for(let t1 = 0; t1 < this.tracks.length; t1++)this.tracks[t1].optimize();
            return this;
        }
        clone() {
            const t1 = [];
            for(let e = 0; e < this.tracks.length; e++)t1.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t1, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    }
    function ac(t1) {
        if (void 0 === t1.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t1) {
            switch(t1.toLowerCase()){
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return tc;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return rc;
                case "color":
                    return Ql;
                case "quaternion":
                    return ic;
                case "bool":
                case "boolean":
                    return $l;
                case "string":
                    return nc;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t1);
        }(t1.type);
        if (void 0 === t1.times) {
            const e = [], i = [];
            jl(t1.keys, e, i, "value"), t1.times = e, t1.values = i;
        }
        return void 0 !== e.parse ? e.parse(t1) : new e(t1.name, t1.times, t1.values, t1.interpolation);
    }
    const oc = {
        enabled: !1,
        files: {},
        add: function(t1, e) {
            !1 !== this.enabled && (this.files[t1] = e);
        },
        get: function(t1) {
            if (!1 !== this.enabled) return this.files[t1];
        },
        remove: function(t1) {
            delete this.files[t1];
        },
        clear: function() {
            this.files = {};
        }
    };
    class lc {
        constructor(t1, e, i){
            const n = this;
            let r, s = !1, a = 0, o = 0;
            const l = [];
            this.onStart = void 0, this.onLoad = t1, this.onProgress = e, this.onError = i, this.itemStart = function(t1) {
                o++, !1 === s && void 0 !== n.onStart && n.onStart(t1, a, o), s = !0;
            }, this.itemEnd = function(t1) {
                a++, void 0 !== n.onProgress && n.onProgress(t1, a, o), a === o && (s = !1, void 0 !== n.onLoad && n.onLoad());
            }, this.itemError = function(t1) {
                void 0 !== n.onError && n.onError(t1);
            }, this.resolveURL = function(t1) {
                return r ? r(t1) : t1;
            }, this.setURLModifier = function(t1) {
                return r = t1, this;
            }, this.addHandler = function(t1, e) {
                return l.push(t1, e), this;
            }, this.removeHandler = function(t1) {
                const e = l.indexOf(t1);
                return -1 !== e && l.splice(e, 2), this;
            }, this.getHandler = function(t1) {
                for(let e = 0, i = l.length; e < i; e += 2){
                    const i = l[e], n = l[e + 1];
                    if (i.global && (i.lastIndex = 0), i.test(t1)) return n;
                }
                return null;
            };
        }
    }
    const cc = new lc;
    class hc {
        constructor(t1){
            this.manager = void 0 !== t1 ? t1 : cc, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t1, e) {
            const i = this;
            return new Promise(function(n, r) {
                i.load(t1, n, e, r);
            });
        }
        parse() {}
        setCrossOrigin(t1) {
            return this.crossOrigin = t1, this;
        }
        setWithCredentials(t1) {
            return this.withCredentials = t1, this;
        }
        setPath(t1) {
            return this.path = t1, this;
        }
        setResourcePath(t1) {
            return this.resourcePath = t1, this;
        }
        setRequestHeader(t1) {
            return this.requestHeader = t1, this;
        }
    }
    const uc = {};
    class dc extends Error {
        constructor(t1, e){
            super(t1), this.response = e;
        }
    }
    class pc extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            void 0 === t1 && (t1 = ""), void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = oc.get(t1);
            if (void 0 !== r) return this.manager.itemStart(t1), setTimeout(()=>{
                e && e(r), this.manager.itemEnd(t1);
            }, 0), r;
            if (void 0 !== uc[t1]) return void uc[t1].push({
                onLoad: e,
                onProgress: i,
                onError: n
            });
            uc[t1] = [], uc[t1].push({
                onLoad: e,
                onProgress: i,
                onError: n
            });
            const s = new Request(t1, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }), a = this.mimeType, o = this.responseType;
            fetch(s).then((e)=>{
                if (200 === e.status || 0 === e.status) {
                    if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
                    const i = uc[t1], n = e.body.getReader(), r = e.headers.get("Content-Length") || e.headers.get("X-File-Size"), s = r ? parseInt(r) : 0, a = 0 !== s;
                    let o = 0;
                    const l = new ReadableStream({
                        start (t1) {
                            !function e() {
                                n.read().then(({ done: n, value: r })=>{
                                    if (n) t1.close();
                                    else {
                                        o += r.byteLength;
                                        const n = new ProgressEvent("progress", {
                                            lengthComputable: a,
                                            loaded: o,
                                            total: s
                                        });
                                        for(let t1 = 0, e = i.length; t1 < e; t1++){
                                            const e = i[t1];
                                            e.onProgress && e.onProgress(n);
                                        }
                                        t1.enqueue(r), e();
                                    }
                                });
                            }();
                        }
                    });
                    return new Response(l);
                }
                throw new dc(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`, e);
            }).then((t1)=>{
                switch(o){
                    case "arraybuffer":
                        return t1.arrayBuffer();
                    case "blob":
                        return t1.blob();
                    case "document":
                        return t1.text().then((t1)=>(new DOMParser).parseFromString(t1, a));
                    case "json":
                        return t1.json();
                    default:
                        if (void 0 === a) return t1.text();
                        {
                            const e = /charset="?([^;"\s]*)"?/i.exec(a), i = e && e[1] ? e[1].toLowerCase() : void 0, n = new TextDecoder(i);
                            return t1.arrayBuffer().then((t1)=>n.decode(t1));
                        }
                }
            }).then((e)=>{
                oc.add(t1, e);
                const i = uc[t1];
                delete uc[t1];
                for(let t1 = 0, n = i.length; t1 < n; t1++){
                    const n = i[t1];
                    n.onLoad && n.onLoad(e);
                }
            }).catch((e)=>{
                const i = uc[t1];
                if (void 0 === i) throw this.manager.itemError(t1), e;
                delete uc[t1];
                for(let t1 = 0, n = i.length; t1 < n; t1++){
                    const n = i[t1];
                    n.onError && n.onError(e);
                }
                this.manager.itemError(t1);
            }).finally(()=>{
                this.manager.itemEnd(t1);
            }), this.manager.itemStart(t1);
        }
        setResponseType(t1) {
            return this.responseType = t1, this;
        }
        setMimeType(t1) {
            return this.mimeType = t1, this;
        }
    }
    class mc extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = this, s = oc.get(t1);
            if (void 0 !== s) return r.manager.itemStart(t1), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t1);
            }, 0), s;
            const a = Bt("img");
            function o() {
                c(), oc.add(t1, this), e && e(this), r.manager.itemEnd(t1);
            }
            function l(e) {
                c(), n && n(e), r.manager.itemError(t1), r.manager.itemEnd(t1);
            }
            function c() {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t1.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t1), a.src = t1, a;
        }
    }
    class fc extends li {
        constructor(t1, e = 1){
            super(), this.isLight = !0, this.type = "Light", this.color = new Zt(t1), this.intensity = e;
        }
        dispose() {}
        copy(t1, e) {
            return super.copy(t1, e), this.color.copy(t1.color), this.intensity = t1.intensity, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
        }
    }
    class gc extends fc {
        constructor(t1, e, i){
            super(t1, i), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(li.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Zt(e);
        }
        copy(t1, e) {
            return super.copy(t1, e), this.groundColor.copy(t1.groundColor), this;
        }
    }
    const vc = new Ue, xc = new oe, _c = new oe;
    class yc {
        constructor(t1){
            this.camera = t1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new It(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ue, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new vn, this._frameExtents = new It(1, 1), this._viewportCount = 1, this._viewports = [
                new ie(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t1) {
            const e = this.camera, i = this.matrix;
            xc.setFromMatrixPosition(t1.matrixWorld), e.position.copy(xc), _c.setFromMatrixPosition(t1.target.matrixWorld), e.lookAt(_c), e.updateMatrixWorld(), vc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(vc), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(vc);
        }
        getViewport(t1) {
            return this._viewports[t1];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t1) {
            return this.camera = t1.camera.clone(), this.bias = t1.bias, this.radius = t1.radius, this.mapSize.copy(t1.mapSize), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t1 = {};
            return 0 !== this.bias && (t1.bias = this.bias), 0 !== this.normalBias && (t1.normalBias = this.normalBias), 1 !== this.radius && (t1.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t1.mapSize = this.mapSize.toArray()), t1.camera = this.camera.toJSON(!1).object, delete t1.camera.matrix, t1;
        }
    }
    class Mc extends yc {
        constructor(){
            super(new an(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
        }
        updateMatrices(t1) {
            const e = this.camera, i = 2 * Mt * t1.angle * this.focus, n = this.mapSize.width / this.mapSize.height, r = t1.distance || e.far;
            i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t1);
        }
        copy(t1) {
            return super.copy(t1), this.focus = t1.focus, this;
        }
    }
    class bc extends fc {
        constructor(t1, e, i = 0, n = Math.PI / 3, r = 0, s = 2){
            super(t1, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(li.DEFAULT_UP), this.updateMatrix(), this.target = new li, this.distance = i, this.angle = n, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new Mc;
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.distance = t1.distance, this.angle = t1.angle, this.penumbra = t1.penumbra, this.decay = t1.decay, this.target = t1.target.clone(), this.shadow = t1.shadow.clone(), this;
        }
    }
    const Sc = new Ue, wc = new oe, Tc = new oe;
    class Ac extends yc {
        constructor(){
            super(new an(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new It(4, 2), this._viewportCount = 6, this._viewports = [
                new ie(2, 1, 1, 1),
                new ie(0, 1, 1, 1),
                new ie(3, 1, 1, 1),
                new ie(1, 1, 1, 1),
                new ie(3, 0, 1, 1),
                new ie(1, 0, 1, 1)
            ], this._cubeDirections = [
                new oe(1, 0, 0),
                new oe(-1, 0, 0),
                new oe(0, 0, 1),
                new oe(0, 0, -1),
                new oe(0, 1, 0),
                new oe(0, -1, 0)
            ], this._cubeUps = [
                new oe(0, 1, 0),
                new oe(0, 1, 0),
                new oe(0, 1, 0),
                new oe(0, 1, 0),
                new oe(0, 0, 1),
                new oe(0, 0, -1)
            ];
        }
        updateMatrices(t1, e = 0) {
            const i = this.camera, n = this.matrix, r = t1.distance || i.far;
            r !== i.far && (i.far = r, i.updateProjectionMatrix()), wc.setFromMatrixPosition(t1.matrixWorld), i.position.copy(wc), Tc.copy(i.position), Tc.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(Tc), i.updateMatrixWorld(), n.makeTranslation(-wc.x, -wc.y, -wc.z), Sc.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Sc);
        }
    }
    class Ec extends fc {
        constructor(t1, e, i = 0, n = 2){
            super(t1, e), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new Ac;
        }
        get power() {
            return 4 * this.intensity * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.distance = t1.distance, this.decay = t1.decay, this.shadow = t1.shadow.clone(), this;
        }
    }
    class Cc extends yc {
        constructor(){
            super(new Pn(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
        }
    }
    class Lc extends fc {
        constructor(t1, e){
            super(t1, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(li.DEFAULT_UP), this.updateMatrix(), this.target = new li, this.shadow = new Cc;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1) {
            return super.copy(t1), this.target = t1.target.clone(), this.shadow = t1.shadow.clone(), this;
        }
    }
    class Rc extends fc {
        constructor(t1, e){
            super(t1, e), this.isAmbientLight = !0, this.type = "AmbientLight";
        }
    }
    class Pc extends fc {
        constructor(t1, e, i = 10, n = 10){
            super(t1, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = i, this.height = n;
        }
        get power() {
            return this.intensity * this.width * this.height * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / (this.width * this.height * Math.PI);
        }
        copy(t1) {
            return super.copy(t1), this.width = t1.width, this.height = t1.height, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.width = this.width, e.object.height = this.height, e;
        }
    }
    class Ic {
        constructor(){
            this.isSphericalHarmonics3 = !0, this.coefficients = [];
            for(let t1 = 0; t1 < 9; t1++)this.coefficients.push(new oe);
        }
        set(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].copy(t1[e]);
            return this;
        }
        zero() {
            for(let t1 = 0; t1 < 9; t1++)this.coefficients[t1].set(0, 0, 0);
            return this;
        }
        getAt(t1, e) {
            const i = t1.x, n = t1.y, r = t1.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * n), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * i), e.addScaledVector(s[4], i * n * 1.092548), e.addScaledVector(s[5], n * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], i * r * 1.092548), e.addScaledVector(s[8], .546274 * (i * i - n * n)), e;
        }
        getIrradianceAt(t1, e) {
            const i = t1.x, n = t1.y, r = t1.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * n), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * i), e.addScaledVector(s[4], .858086 * i * n), e.addScaledVector(s[5], .858086 * n * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * i * r), e.addScaledVector(s[8], .429043 * (i * i - n * n)), e;
        }
        add(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].add(t1.coefficients[e]);
            return this;
        }
        addScaledSH(t1, e) {
            for(let i = 0; i < 9; i++)this.coefficients[i].addScaledVector(t1.coefficients[i], e);
            return this;
        }
        scale(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].multiplyScalar(t1);
            return this;
        }
        lerp(t1, e) {
            for(let i = 0; i < 9; i++)this.coefficients[i].lerp(t1.coefficients[i], e);
            return this;
        }
        equals(t1) {
            for(let e = 0; e < 9; e++)if (!this.coefficients[e].equals(t1.coefficients[e])) return !1;
            return !0;
        }
        copy(t1) {
            return this.set(t1.coefficients);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        fromArray(t1, e = 0) {
            const i = this.coefficients;
            for(let n = 0; n < 9; n++)i[n].fromArray(t1, e + 3 * n);
            return this;
        }
        toArray(t1 = [], e = 0) {
            const i = this.coefficients;
            for(let n = 0; n < 9; n++)i[n].toArray(t1, e + 3 * n);
            return t1;
        }
        static getBasisAt(t1, e) {
            const i = t1.x, n = t1.y, r = t1.z;
            e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * r, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * i * r, e[8] = .546274 * (i * i - n * n);
        }
    }
    class Dc extends fc {
        constructor(t1 = new Ic, e = 1){
            super(void 0, e), this.isLightProbe = !0, this.sh = t1;
        }
        copy(t1) {
            return super.copy(t1), this.sh.copy(t1.sh), this;
        }
        fromJSON(t1) {
            return this.intensity = t1.intensity, this.sh.fromArray(t1.sh), this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.sh = this.sh.toArray(), e;
        }
    }
    class Nc extends hc {
        constructor(t1){
            super(t1), this.textures = {};
        }
        load(t1, e, i, n) {
            const r = this, s = new pc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t1, function(i) {
                try {
                    e(r.parse(JSON.parse(i)));
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t1);
                }
            }, i, n);
        }
        parse(t1) {
            const e = this.textures;
            function i(t1) {
                return void 0 === e[t1] && console.warn("THREE.MaterialLoader: Undefined texture", t1), e[t1];
            }
            const n = Nc.createMaterialFromType(t1.type);
            if (void 0 !== t1.uuid && (n.uuid = t1.uuid), void 0 !== t1.name && (n.name = t1.name), void 0 !== t1.color && void 0 !== n.color && n.color.setHex(t1.color), void 0 !== t1.roughness && (n.roughness = t1.roughness), void 0 !== t1.metalness && (n.metalness = t1.metalness), void 0 !== t1.sheen && (n.sheen = t1.sheen), void 0 !== t1.sheenColor && (n.sheenColor = (new Zt).setHex(t1.sheenColor)), void 0 !== t1.sheenRoughness && (n.sheenRoughness = t1.sheenRoughness), void 0 !== t1.emissive && void 0 !== n.emissive && n.emissive.setHex(t1.emissive), void 0 !== t1.specular && void 0 !== n.specular && n.specular.setHex(t1.specular), void 0 !== t1.specularIntensity && (n.specularIntensity = t1.specularIntensity), void 0 !== t1.specularColor && void 0 !== n.specularColor && n.specularColor.setHex(t1.specularColor), void 0 !== t1.shininess && (n.shininess = t1.shininess), void 0 !== t1.clearcoat && (n.clearcoat = t1.clearcoat), void 0 !== t1.clearcoatRoughness && (n.clearcoatRoughness = t1.clearcoatRoughness), void 0 !== t1.iridescence && (n.iridescence = t1.iridescence), void 0 !== t1.iridescenceIOR && (n.iridescenceIOR = t1.iridescenceIOR), void 0 !== t1.iridescenceThicknessRange && (n.iridescenceThicknessRange = t1.iridescenceThicknessRange), void 0 !== t1.transmission && (n.transmission = t1.transmission), void 0 !== t1.thickness && (n.thickness = t1.thickness), void 0 !== t1.attenuationDistance && (n.attenuationDistance = t1.attenuationDistance), void 0 !== t1.attenuationColor && void 0 !== n.attenuationColor && n.attenuationColor.setHex(t1.attenuationColor), void 0 !== t1.fog && (n.fog = t1.fog), void 0 !== t1.flatShading && (n.flatShading = t1.flatShading), void 0 !== t1.blending && (n.blending = t1.blending), void 0 !== t1.combine && (n.combine = t1.combine), void 0 !== t1.side && (n.side = t1.side), void 0 !== t1.shadowSide && (n.shadowSide = t1.shadowSide), void 0 !== t1.opacity && (n.opacity = t1.opacity), void 0 !== t1.transparent && (n.transparent = t1.transparent), void 0 !== t1.alphaTest && (n.alphaTest = t1.alphaTest), void 0 !== t1.depthTest && (n.depthTest = t1.depthTest), void 0 !== t1.depthWrite && (n.depthWrite = t1.depthWrite), void 0 !== t1.colorWrite && (n.colorWrite = t1.colorWrite), void 0 !== t1.stencilWrite && (n.stencilWrite = t1.stencilWrite), void 0 !== t1.stencilWriteMask && (n.stencilWriteMask = t1.stencilWriteMask), void 0 !== t1.stencilFunc && (n.stencilFunc = t1.stencilFunc), void 0 !== t1.stencilRef && (n.stencilRef = t1.stencilRef), void 0 !== t1.stencilFuncMask && (n.stencilFuncMask = t1.stencilFuncMask), void 0 !== t1.stencilFail && (n.stencilFail = t1.stencilFail), void 0 !== t1.stencilZFail && (n.stencilZFail = t1.stencilZFail), void 0 !== t1.stencilZPass && (n.stencilZPass = t1.stencilZPass), void 0 !== t1.wireframe && (n.wireframe = t1.wireframe), void 0 !== t1.wireframeLinewidth && (n.wireframeLinewidth = t1.wireframeLinewidth), void 0 !== t1.wireframeLinecap && (n.wireframeLinecap = t1.wireframeLinecap), void 0 !== t1.wireframeLinejoin && (n.wireframeLinejoin = t1.wireframeLinejoin), void 0 !== t1.rotation && (n.rotation = t1.rotation), 1 !== t1.linewidth && (n.linewidth = t1.linewidth), void 0 !== t1.dashSize && (n.dashSize = t1.dashSize), void 0 !== t1.gapSize && (n.gapSize = t1.gapSize), void 0 !== t1.scale && (n.scale = t1.scale), void 0 !== t1.polygonOffset && (n.polygonOffset = t1.polygonOffset), void 0 !== t1.polygonOffsetFactor && (n.polygonOffsetFactor = t1.polygonOffsetFactor), void 0 !== t1.polygonOffsetUnits && (n.polygonOffsetUnits = t1.polygonOffsetUnits), void 0 !== t1.dithering && (n.dithering = t1.dithering), void 0 !== t1.alphaToCoverage && (n.alphaToCoverage = t1.alphaToCoverage), void 0 !== t1.premultipliedAlpha && (n.premultipliedAlpha = t1.premultipliedAlpha), void 0 !== t1.forceSinglePass && (n.forceSinglePass = t1.forceSinglePass), void 0 !== t1.visible && (n.visible = t1.visible), void 0 !== t1.toneMapped && (n.toneMapped = t1.toneMapped), void 0 !== t1.userData && (n.userData = t1.userData), void 0 !== t1.vertexColors && ("number" == typeof t1.vertexColors ? n.vertexColors = t1.vertexColors > 0 : n.vertexColors = t1.vertexColors), void 0 !== t1.uniforms) for(const e in t1.uniforms){
                const r = t1.uniforms[e];
                switch(n.uniforms[e] = {}, r.type){
                    case "t":
                        n.uniforms[e].value = i(r.value);
                        break;
                    case "c":
                        n.uniforms[e].value = (new Zt).setHex(r.value);
                        break;
                    case "v2":
                        n.uniforms[e].value = (new It).fromArray(r.value);
                        break;
                    case "v3":
                        n.uniforms[e].value = (new oe).fromArray(r.value);
                        break;
                    case "v4":
                        n.uniforms[e].value = (new ie).fromArray(r.value);
                        break;
                    case "m3":
                        n.uniforms[e].value = (new Dt).fromArray(r.value);
                        break;
                    case "m4":
                        n.uniforms[e].value = (new Ue).fromArray(r.value);
                        break;
                    default:
                        n.uniforms[e].value = r.value;
                }
            }
            if (void 0 !== t1.defines && (n.defines = t1.defines), void 0 !== t1.vertexShader && (n.vertexShader = t1.vertexShader), void 0 !== t1.fragmentShader && (n.fragmentShader = t1.fragmentShader), void 0 !== t1.glslVersion && (n.glslVersion = t1.glslVersion), void 0 !== t1.extensions) for(const e in t1.extensions)n.extensions[e] = t1.extensions[e];
            if (void 0 !== t1.size && (n.size = t1.size), void 0 !== t1.sizeAttenuation && (n.sizeAttenuation = t1.sizeAttenuation), void 0 !== t1.map && (n.map = i(t1.map)), void 0 !== t1.matcap && (n.matcap = i(t1.matcap)), void 0 !== t1.alphaMap && (n.alphaMap = i(t1.alphaMap)), void 0 !== t1.bumpMap && (n.bumpMap = i(t1.bumpMap)), void 0 !== t1.bumpScale && (n.bumpScale = t1.bumpScale), void 0 !== t1.normalMap && (n.normalMap = i(t1.normalMap)), void 0 !== t1.normalMapType && (n.normalMapType = t1.normalMapType), void 0 !== t1.normalScale) {
                let e = t1.normalScale;
                !1 === Array.isArray(e) && (e = [
                    e,
                    e
                ]), n.normalScale = (new It).fromArray(e);
            }
            return void 0 !== t1.displacementMap && (n.displacementMap = i(t1.displacementMap)), void 0 !== t1.displacementScale && (n.displacementScale = t1.displacementScale), void 0 !== t1.displacementBias && (n.displacementBias = t1.displacementBias), void 0 !== t1.roughnessMap && (n.roughnessMap = i(t1.roughnessMap)), void 0 !== t1.metalnessMap && (n.metalnessMap = i(t1.metalnessMap)), void 0 !== t1.emissiveMap && (n.emissiveMap = i(t1.emissiveMap)), void 0 !== t1.emissiveIntensity && (n.emissiveIntensity = t1.emissiveIntensity), void 0 !== t1.specularMap && (n.specularMap = i(t1.specularMap)), void 0 !== t1.specularIntensityMap && (n.specularIntensityMap = i(t1.specularIntensityMap)), void 0 !== t1.specularColorMap && (n.specularColorMap = i(t1.specularColorMap)), void 0 !== t1.envMap && (n.envMap = i(t1.envMap)), void 0 !== t1.envMapIntensity && (n.envMapIntensity = t1.envMapIntensity), void 0 !== t1.reflectivity && (n.reflectivity = t1.reflectivity), void 0 !== t1.refractionRatio && (n.refractionRatio = t1.refractionRatio), void 0 !== t1.lightMap && (n.lightMap = i(t1.lightMap)), void 0 !== t1.lightMapIntensity && (n.lightMapIntensity = t1.lightMapIntensity), void 0 !== t1.aoMap && (n.aoMap = i(t1.aoMap)), void 0 !== t1.aoMapIntensity && (n.aoMapIntensity = t1.aoMapIntensity), void 0 !== t1.gradientMap && (n.gradientMap = i(t1.gradientMap)), void 0 !== t1.clearcoatMap && (n.clearcoatMap = i(t1.clearcoatMap)), void 0 !== t1.clearcoatRoughnessMap && (n.clearcoatRoughnessMap = i(t1.clearcoatRoughnessMap)), void 0 !== t1.clearcoatNormalMap && (n.clearcoatNormalMap = i(t1.clearcoatNormalMap)), void 0 !== t1.clearcoatNormalScale && (n.clearcoatNormalScale = (new It).fromArray(t1.clearcoatNormalScale)), void 0 !== t1.iridescenceMap && (n.iridescenceMap = i(t1.iridescenceMap)), void 0 !== t1.iridescenceThicknessMap && (n.iridescenceThicknessMap = i(t1.iridescenceThicknessMap)), void 0 !== t1.transmissionMap && (n.transmissionMap = i(t1.transmissionMap)), void 0 !== t1.thicknessMap && (n.thicknessMap = i(t1.thicknessMap)), void 0 !== t1.sheenColorMap && (n.sheenColorMap = i(t1.sheenColorMap)), void 0 !== t1.sheenRoughnessMap && (n.sheenRoughnessMap = i(t1.sheenRoughnessMap)), n;
        }
        setTextures(t1) {
            return this.textures = t1, this;
        }
        static createMaterialFromType(t1) {
            return new ({
                ShadowMaterial: Rl,
                SpriteMaterial: ra,
                RawShaderMaterial: Pl,
                ShaderMaterial: rn,
                PointsMaterial: $a,
                MeshPhysicalMaterial: Dl,
                MeshStandardMaterial: Il,
                MeshPhongMaterial: Nl,
                MeshToonMaterial: Ol,
                MeshNormalMaterial: zl,
                MeshLambertMaterial: Ul,
                MeshDepthMaterial: zs,
                MeshDistanceMaterial: Us,
                MeshBasicMaterial: bi,
                MeshMatcapMaterial: Bl,
                LineDashedMaterial: Fl,
                LineBasicMaterial: Ga,
                Material: Mi
            })[t1];
        }
    }
    class Oc {
        static decodeText(t1) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t1);
            let e = "";
            for(let i = 0, n = t1.length; i < n; i++)e += String.fromCharCode(t1[i]);
            try {
                return decodeURIComponent(escape(e));
            } catch (t1) {
                return e;
            }
        }
        static extractUrlBase(t1) {
            const e = t1.lastIndexOf("/");
            return -1 === e ? "./" : t1.slice(0, e + 1);
        }
        static resolveURL(t1, e) {
            return "string" != typeof t1 || "" === t1 ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t1) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t1) || /^data:.*,.*$/i.test(t1) || /^blob:.*$/i.test(t1) ? t1 : e + t1);
        }
    }
    class zc extends zi {
        constructor(){
            super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
        }
        copy(t1) {
            return super.copy(t1), this.instanceCount = t1.instanceCount, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.instanceCount = this.instanceCount, t1.isInstancedBufferGeometry = !0, t1;
        }
    }
    class Uc extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = this, s = new pc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t1, function(i) {
                try {
                    e(r.parse(JSON.parse(i)));
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t1);
                }
            }, i, n);
        }
        parse(t1) {
            const e = {}, i = {};
            function n(t1, n) {
                if (void 0 !== e[n]) return e[n];
                const r = t1.interleavedBuffers[n], s = function(t1, e) {
                    if (void 0 !== i[e]) return i[e];
                    const n = t1.arrayBuffers, r = n[e], s = new Uint32Array(r).buffer;
                    return i[e] = s, s;
                }(t1, r.buffer), a = Ut(r.type, s), o = new ea(a, r.stride);
                return o.uuid = r.uuid, e[n] = o, o;
            }
            const r = t1.isInstancedBufferGeometry ? new zc : new zi, s = t1.data.index;
            if (void 0 !== s) {
                const t1 = Ut(s.type, s.array);
                r.setIndex(new Ti(t1, 1));
            }
            const a = t1.data.attributes;
            for(const e in a){
                const i = a[e];
                let s;
                if (i.isInterleavedBufferAttribute) {
                    const e = n(t1.data, i.data);
                    s = new na(e, i.itemSize, i.offset, i.normalized);
                } else {
                    const t1 = Ut(i.type, i.array);
                    s = new (i.isInstancedBufferAttribute ? Na : Ti)(t1, i.itemSize, i.normalized);
                }
                void 0 !== i.name && (s.name = i.name), void 0 !== i.usage && s.setUsage(i.usage), void 0 !== i.updateRange && (s.updateRange.offset = i.updateRange.offset, s.updateRange.count = i.updateRange.count), r.setAttribute(e, s);
            }
            const o = t1.data.morphAttributes;
            if (o) for(const e in o){
                const i = o[e], s = [];
                for(let e = 0, r = i.length; e < r; e++){
                    const r = i[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = n(t1.data, r.data);
                        a = new na(e, r.itemSize, r.offset, r.normalized);
                    } else {
                        const t1 = Ut(r.type, r.array);
                        a = new Ti(t1, r.itemSize, r.normalized);
                    }
                    void 0 !== r.name && (a.name = r.name), s.push(a);
                }
                r.morphAttributes[e] = s;
            }
            t1.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
            const l = t1.data.groups || t1.data.drawcalls || t1.data.offsets;
            if (void 0 !== l) for(let t1 = 0, e = l.length; t1 !== e; ++t1){
                const e = l[t1];
                r.addGroup(e.start, e.count, e.materialIndex);
            }
            const c = t1.data.boundingSphere;
            if (void 0 !== c) {
                const t1 = new oe;
                void 0 !== c.center && t1.fromArray(c.center), r.boundingSphere = new Ce(t1, c.radius);
            }
            return t1.name && (r.name = t1.name), t1.userData && (r.userData = t1.userData), r;
        }
    }
    const Bc = {
        UVMapping: n,
        CubeReflectionMapping: r,
        CubeRefractionMapping: s,
        EquirectangularReflectionMapping: a,
        EquirectangularRefractionMapping: o,
        CubeUVReflectionMapping: l
    }, Fc = {
        RepeatWrapping: c,
        ClampToEdgeWrapping: h,
        MirroredRepeatWrapping: u
    }, kc = {
        NearestFilter: d,
        NearestMipmapNearestFilter: p,
        NearestMipmapLinearFilter: m,
        LinearFilter: f,
        LinearMipmapNearestFilter: g,
        LinearMipmapLinearFilter: v
    };
    let Gc;
    class Vc {
        static getContext() {
            return void 0 === Gc && (Gc = new (window.AudioContext || window.webkitAudioContext)), Gc;
        }
        static setContext(t1) {
            Gc = t1;
        }
    }
    const Hc = new Ue, Wc = new Ue, jc = new Ue;
    class qc {
        constructor(t1 = !0){
            this.autoStart = t1, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        start() {
            this.startTime = Xc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1;
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let t1 = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const e = Xc();
                t1 = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t1;
            }
            return t1;
        }
    }
    function Xc() {
        return ("undefined" == typeof performance ? Date : performance).now();
    }
    const Yc = new oe, Zc = new ae, Jc = new oe, Kc = new oe;
    class $c extends li {
        constructor(t1){
            super(), this.type = "Audio", this.listener = t1, this.context = t1.context, this.gain = this.context.createGain(), this.gain.connect(t1.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
        }
        getOutput() {
            return this.gain;
        }
        setNodeSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t1, this.connect(), this;
        }
        setMediaElementSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t1), this.connect(), this;
        }
        setMediaStreamSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t1), this.connect(), this;
        }
        setBuffer(t1) {
            return this.buffer = t1, this.sourceType = "buffer", this.autoplay && this.play(), this;
        }
        play(t1 = 0) {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t1;
            const e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }
        pause() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
            if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for(let t1 = 1, e = this.filters.length; t1 < e; t1++)this.filters[t1 - 1].connect(this.filters[t1]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this._connected = !0, this;
        }
        disconnect() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for(let t1 = 1, e = this.filters.length; t1 < e; t1++)this.filters[t1 - 1].disconnect(this.filters[t1]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else this.source.disconnect(this.getOutput());
            return this._connected = !1, this;
        }
        getFilters() {
            return this.filters;
        }
        setFilters(t1) {
            return t1 || (t1 = []), !0 === this._connected ? (this.disconnect(), this.filters = t1.slice(), this.connect()) : this.filters = t1.slice(), this;
        }
        setDetune(t1) {
            if (this.detune = t1, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
        }
        getDetune() {
            return this.detune;
        }
        getFilter() {
            return this.getFilters()[0];
        }
        setFilter(t1) {
            return this.setFilters(t1 ? [
                t1
            ] : []);
        }
        setPlaybackRate(t1) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t1, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
            return this.playbackRate;
        }
        onEnded() {
            this.isPlaying = !1;
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        }
        setLoop(t1) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t1, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t1) {
            return this.loopStart = t1, this;
        }
        setLoopEnd(t1) {
            return this.loopEnd = t1, this;
        }
        getVolume() {
            return this.gain.gain.value;
        }
        setVolume(t1) {
            return this.gain.gain.setTargetAtTime(t1, this.context.currentTime, .01), this;
        }
    }
    const Qc = new oe, th = new ae, eh = new oe, ih = new oe;
    class nh {
        constructor(t1, e, i){
            let n, r, s;
            switch(this.binding = t1, this.valueSize = i, e){
                case "quaternion":
                    n = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
                    break;
                case "string":
                case "bool":
                    n = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i);
                    break;
                default:
                    n = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i);
            }
            this._mixBufferRegion = n, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
        }
        accumulate(t1, e) {
            const i = this.buffer, n = this.valueSize, r = t1 * n + n;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for(let t1 = 0; t1 !== n; ++t1)i[r + t1] = i[t1];
                s = e;
            } else {
                s += e;
                const t1 = e / s;
                this._mixBufferRegion(i, r, 0, t1, n);
            }
            this.cumulativeWeight = s;
        }
        accumulateAdditive(t1) {
            const e = this.buffer, i = this.valueSize, n = i * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, n, 0, t1, i), this.cumulativeWeightAdditive += t1;
        }
        apply(t1) {
            const e = this.valueSize, i = this.buffer, n = t1 * e + e, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, a = this.binding;
            if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
                const t1 = e * this._origIndex;
                this._mixBufferRegion(i, n, t1, 1 - r, e);
            }
            s > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * e, 1, e);
            for(let t1 = e, r = e + e; t1 !== r; ++t1)if (i[t1] !== i[t1 + e]) {
                a.setValue(i, n);
                break;
            }
        }
        saveOriginalState() {
            const t1 = this.binding, e = this.buffer, i = this.valueSize, n = i * this._origIndex;
            t1.getValue(e, n);
            for(let t1 = i, r = n; t1 !== r; ++t1)e[t1] = e[n + t1 % i];
            this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
        }
        restoreOriginalState() {
            const t1 = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t1);
        }
        _setAdditiveIdentityNumeric() {
            const t1 = this._addIndex * this.valueSize, e = t1 + this.valueSize;
            for(let i = t1; i < e; i++)this.buffer[i] = 0;
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
        }
        _setAdditiveIdentityOther() {
            const t1 = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
            for(let i = 0; i < this.valueSize; i++)this.buffer[e + i] = this.buffer[t1 + i];
        }
        _select(t1, e, i, n, r) {
            if (n >= .5) for(let n = 0; n !== r; ++n)t1[e + n] = t1[i + n];
        }
        _slerp(t1, e, i, n) {
            ae.slerpFlat(t1, e, t1, e, t1, i, n);
        }
        _slerpAdditive(t1, e, i, n, r) {
            const s = this._workIndex * r;
            ae.multiplyQuaternionsFlat(t1, s, t1, e, t1, i), ae.slerpFlat(t1, e, t1, e, t1, s, n);
        }
        _lerp(t1, e, i, n, r) {
            const s = 1 - n;
            for(let a = 0; a !== r; ++a){
                const r = e + a;
                t1[r] = t1[r] * s + t1[i + a] * n;
            }
        }
        _lerpAdditive(t1, e, i, n, r) {
            for(let s = 0; s !== r; ++s){
                const r = e + s;
                t1[r] = t1[r] + t1[i + s] * n;
            }
        }
    }
    const rh = "\\[\\]\\.:\\/", sh = new RegExp("[" + rh + "]", "g"), ah = "[^" + rh + "]", oh = "[^" + rh.replace("\\.", "") + "]", lh = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", ah) + /(WCOD+)?/.source.replace("WCOD", oh) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ah) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ah) + "$"), ch = [
        "material",
        "materials",
        "bones",
        "map"
    ];
    class hh {
        constructor(t1, e, i){
            this.path = e, this.parsedPath = i || hh.parseTrackName(e), this.node = hh.findNode(t1, this.parsedPath.nodeName) || t1, this.rootNode = t1, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t1, e, i) {
            return t1 && t1.isAnimationObjectGroup ? new hh.Composite(t1, e, i) : new hh(t1, e, i);
        }
        static sanitizeNodeName(t1) {
            return t1.replace(/\s/g, "_").replace(sh, "");
        }
        static parseTrackName(t1) {
            const e = lh.exec(t1);
            if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t1);
            const i = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }, n = i.nodeName && i.nodeName.lastIndexOf(".");
            if (void 0 !== n && -1 !== n) {
                const t1 = i.nodeName.substring(n + 1);
                -1 !== ch.indexOf(t1) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = t1);
            }
            if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t1);
            return i;
        }
        static findNode(t1, e) {
            if (void 0 === e || "" === e || "." === e || -1 === e || e === t1.name || e === t1.uuid) return t1;
            if (t1.skeleton) {
                const i = t1.skeleton.getBoneByName(e);
                if (void 0 !== i) return i;
            }
            if (t1.children) {
                const i = function(t1) {
                    for(let n = 0; n < t1.length; n++){
                        const r = t1[n];
                        if (r.name === e || r.uuid === e) return r;
                        const s = i(r.children);
                        if (s) return s;
                    }
                    return null;
                }, n = i(t1.children);
                if (n) return n;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t1, e) {
            t1[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t1, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)t1[e++] = i[n];
        }
        _getValue_arrayElement(t1, e) {
            t1[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t1, e) {
            this.resolvedProperty.toArray(t1, e);
        }
        _setValue_direct(t1, e) {
            this.targetObject[this.propertyName] = t1[e];
        }
        _setValue_direct_setNeedsUpdate(t1, e) {
            this.targetObject[this.propertyName] = t1[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t1, e) {
            this.targetObject[this.propertyName] = t1[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_array(t1, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)i[n] = t1[e++];
        }
        _setValue_array_setNeedsUpdate(t1, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)i[n] = t1[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t1, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)i[n] = t1[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_fromArray(t1, e) {
            this.resolvedProperty.fromArray(t1, e);
        }
        _setValue_fromArray_setNeedsUpdate(t1, e) {
            this.resolvedProperty.fromArray(t1, e), this.targetObject.needsUpdate = !0;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t1, e) {
            this.resolvedProperty.fromArray(t1, e), this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _getValue_unbound(t1, e) {
            this.bind(), this.getValue(t1, e);
        }
        _setValue_unbound(t1, e) {
            this.bind(), this.setValue(t1, e);
        }
        bind() {
            let t1 = this.node;
            const e = this.parsedPath, i = e.objectName, n = e.propertyName;
            let r = e.propertyIndex;
            if (t1 || (t1 = hh.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t1), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t1) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (i) {
                let n = e.objectIndex;
                switch(i){
                    case "materials":
                        if (!t1.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t1.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t1 = t1.material.materials;
                        break;
                    case "bones":
                        if (!t1.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t1 = t1.skeleton.bones;
                        for(let e = 0; e < t1.length; e++)if (t1[e].name === n) {
                            n = e;
                            break;
                        }
                        break;
                    case "map":
                        if ("map" in t1) {
                            t1 = t1.map;
                            break;
                        }
                        if (!t1.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t1.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                        t1 = t1.material.map;
                        break;
                    default:
                        if (void 0 === t1[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t1 = t1[i];
                }
                if (void 0 !== n) {
                    if (void 0 === t1[n]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t1);
                    t1 = t1[n];
                }
            }
            const s = t1[n];
            if (void 0 === s) {
                const i = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + n + " but it wasn't found.", t1);
            }
            let a = this.Versioning.None;
            this.targetObject = t1, void 0 !== t1.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t1.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === n) {
                    if (!t1.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t1.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t1.morphTargetDictionary[r] && (r = t1.morphTargetDictionary[r]);
                }
                o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
            this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
        }
        unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
    }
    hh.Composite = class {
        constructor(t1, e, i){
            const n = i || hh.parseTrackName(e);
            this._targetGroup = t1, this._bindings = t1.subscribe_(e, n);
        }
        getValue(t1, e) {
            this.bind();
            const i = this._targetGroup.nCachedObjects_, n = this._bindings[i];
            void 0 !== n && n.getValue(t1, e);
        }
        setValue(t1, e) {
            const i = this._bindings;
            for(let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)i[n].setValue(t1, e);
        }
        bind() {
            const t1 = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, i = t1.length; e !== i; ++e)t1[e].bind();
        }
        unbind() {
            const t1 = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, i = t1.length; e !== i; ++e)t1[e].unbind();
        }
    }, hh.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    }, hh.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    }, hh.prototype.GetterByBindingType = [
        hh.prototype._getValue_direct,
        hh.prototype._getValue_array,
        hh.prototype._getValue_arrayElement,
        hh.prototype._getValue_toArray
    ], hh.prototype.SetterByBindingTypeAndVersioning = [
        [
            hh.prototype._setValue_direct,
            hh.prototype._setValue_direct_setNeedsUpdate,
            hh.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
            hh.prototype._setValue_array,
            hh.prototype._setValue_array_setNeedsUpdate,
            hh.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            hh.prototype._setValue_arrayElement,
            hh.prototype._setValue_arrayElement_setNeedsUpdate,
            hh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            hh.prototype._setValue_fromArray,
            hh.prototype._setValue_fromArray_setNeedsUpdate,
            hh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
    class uh {
        constructor(t1, e, i = null, n = e.blendMode){
            this._mixer = t1, this._clip = e, this._localRoot = i, this.blendMode = n;
            const r = e.tracks, s = r.length, a = new Array(s), o = {
                endingStart: rt,
                endingEnd: rt
            };
            for(let t1 = 0; t1 !== s; ++t1){
                const e = r[t1].createInterpolant(null);
                a[t1] = e, e.settings = o;
            }
            this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
        }
        play() {
            return this._mixer._activateAction(this), this;
        }
        stop() {
            return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        }
        isScheduled() {
            return this._mixer._isActiveAction(this);
        }
        startAt(t1) {
            return this._startTime = t1, this;
        }
        setLoop(t1, e) {
            return this.loop = t1, this.repetitions = e, this;
        }
        setEffectiveWeight(t1) {
            return this.weight = t1, this._effectiveWeight = this.enabled ? t1 : 0, this.stopFading();
        }
        getEffectiveWeight() {
            return this._effectiveWeight;
        }
        fadeIn(t1) {
            return this._scheduleFading(t1, 0, 1);
        }
        fadeOut(t1) {
            return this._scheduleFading(t1, 1, 0);
        }
        crossFadeFrom(t1, e, i) {
            if (t1.fadeOut(e), this.fadeIn(e), i) {
                const i = this._clip.duration, n = t1._clip.duration, r = n / i, s = i / n;
                t1.warp(1, r, e), this.warp(s, 1, e);
            }
            return this;
        }
        crossFadeTo(t1, e, i) {
            return t1.crossFadeFrom(this, e, i);
        }
        stopFading() {
            const t1 = this._weightInterpolant;
            return null !== t1 && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t1)), this;
        }
        setEffectiveTimeScale(t1) {
            return this.timeScale = t1, this._effectiveTimeScale = this.paused ? 0 : t1, this.stopWarping();
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale;
        }
        setDuration(t1) {
            return this.timeScale = this._clip.duration / t1, this.stopWarping();
        }
        syncWith(t1) {
            return this.time = t1.time, this.timeScale = t1.timeScale, this.stopWarping();
        }
        halt(t1) {
            return this.warp(this._effectiveTimeScale, 0, t1);
        }
        warp(t1, e, i) {
            const n = this._mixer, r = n.time, s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
            const o = a.parameterPositions, l = a.sampleValues;
            return o[0] = r, o[1] = r + i, l[0] = t1 / s, l[1] = e / s, this;
        }
        stopWarping() {
            const t1 = this._timeScaleInterpolant;
            return null !== t1 && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t1)), this;
        }
        getMixer() {
            return this._mixer;
        }
        getClip() {
            return this._clip;
        }
        getRoot() {
            return this._localRoot || this._mixer._root;
        }
        _update(t1, e, i, n) {
            if (!this.enabled) return void this._updateWeight(t1);
            const r = this._startTime;
            if (null !== r) {
                const n = (t1 - r) * i;
                n < 0 || 0 === i ? e = 0 : (this._startTime = null, e = i * n);
            }
            e *= this._updateTimeScale(t1);
            const s = this._updateTime(e), a = this._updateWeight(t1);
            if (a > 0) {
                const t1 = this._interpolants, e = this._propertyBindings;
                if (this.blendMode === lt) for(let i = 0, n = t1.length; i !== n; ++i)t1[i].evaluate(s), e[i].accumulateAdditive(a);
                else for(let i = 0, r = t1.length; i !== r; ++i)t1[i].evaluate(s), e[i].accumulate(n, a);
            }
        }
        _updateWeight(t1) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const i = this._weightInterpolant;
                if (null !== i) {
                    const n = i.evaluate(t1)[0];
                    e *= n, t1 > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1));
                }
            }
            return this._effectiveWeight = e, e;
        }
        _updateTimeScale(t1) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const i = this._timeScaleInterpolant;
                if (null !== i) e *= i.evaluate(t1)[0], t1 > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
            }
            return this._effectiveTimeScale = e, e;
        }
        _updateTime(t1) {
            const e = this._clip.duration, i = this.loop;
            let n = this.time + t1, r = this._loopCount;
            const s = 2202 === i;
            if (0 === t1) return -1 === r ? n : s && 1 == (1 & r) ? e - n : n;
            if (2200 === i) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (n >= e) n = e;
                    else {
                        if (!(n < 0)) {
                            this.time = n;
                            break t;
                        }
                        n = 0;
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = n, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t1 < 0 ? -1 : 1
                    });
                }
            } else {
                if (-1 === r && (t1 >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), n >= e || n < 0) {
                    const i = Math.floor(n / e);
                    n -= e * i, r += Math.abs(i);
                    const a = this.repetitions - r;
                    if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = t1 > 0 ? e : 0, this.time = n, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t1 > 0 ? 1 : -1
                    });
                    else {
                        if (1 === a) {
                            const e = t1 < 0;
                            this._setEndings(e, !e, s);
                        } else this._setEndings(!1, !1, s);
                        this._loopCount = r, this.time = n, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: i
                        });
                    }
                } else this.time = n;
                if (s && 1 == (1 & r)) return e - n;
            }
            return n;
        }
        _setEndings(t1, e, i) {
            const n = this._interpolantSettings;
            i ? (n.endingStart = st, n.endingEnd = st) : (n.endingStart = t1 ? this.zeroSlopeAtStart ? st : rt : at, n.endingEnd = e ? this.zeroSlopeAtEnd ? st : rt : at);
        }
        _scheduleFading(t1, e, i) {
            const n = this._mixer, r = n.time;
            let s = this._weightInterpolant;
            null === s && (s = n._lendControlInterpolant(), this._weightInterpolant = s);
            const a = s.parameterPositions, o = s.sampleValues;
            return a[0] = r, o[0] = e, a[1] = r + t1, o[1] = i, this;
        }
    }
    const dh = new Float32Array(1);
    class ph {
        constructor(t1){
            this.value = t1;
        }
        clone() {
            return new ph(void 0 === this.value.clone ? this.value : this.value.clone());
        }
    }
    let mh = 0;
    function fh(t1, e) {
        return t1.distance - e.distance;
    }
    function gh(t1, e, i, n) {
        if (t1.layers.test(e.layers) && t1.raycast(e, i), !0 === n) {
            const n = t1.children;
            for(let t1 = 0, r = n.length; t1 < r; t1++)gh(n[t1], e, i, !0);
        }
    }
    const vh = new It;
    const xh = new oe, _h = new oe;
    const yh = new oe;
    const Mh = new oe, bh = new Ue, Sh = new Ue;
    function wh(t1) {
        const e = [];
        !0 === t1.isBone && e.push(t1);
        for(let i = 0; i < t1.children.length; i++)e.push.apply(e, wh(t1.children[i]));
        return e;
    }
    const Th = new oe, Ah = new Zt, Eh = new Zt;
    const Ch = new oe, Lh = new oe, Rh = new oe;
    const Ph = new oe, Ih = new sn;
    function Dh(t1, e, i, n, r, s, a) {
        Ph.set(r, s, a).unproject(n);
        const o = e[t1];
        if (void 0 !== o) {
            const t1 = i.getAttribute("position");
            for(let e = 0, i = o.length; e < i; e++)t1.setXYZ(o[e], Ph.x, Ph.y, Ph.z);
        }
    }
    const Nh = new he;
    const Oh = new oe;
    let zh, Uh;
    const Bh = Fh();
    function Fh() {
        const t1 = new ArrayBuffer(4), e = new Float32Array(t1), i = new Uint32Array(t1), n = new Uint32Array(512), r = new Uint32Array(512);
        for(let t1 = 0; t1 < 256; ++t1){
            const e = t1 - 127;
            e < -27 ? (n[t1] = 0, n[256 | t1] = 32768, r[t1] = 24, r[256 | t1] = 24) : e < -14 ? (n[t1] = 1024 >> -e - 14, n[256 | t1] = 1024 >> -e - 14 | 32768, r[t1] = -e - 1, r[256 | t1] = -e - 1) : e <= 15 ? (n[t1] = e + 15 << 10, n[256 | t1] = e + 15 << 10 | 32768, r[t1] = 13, r[256 | t1] = 13) : e < 128 ? (n[t1] = 31744, n[256 | t1] = 64512, r[t1] = 24, r[256 | t1] = 24) : (n[t1] = 31744, n[256 | t1] = 64512, r[t1] = 13, r[256 | t1] = 13);
        }
        const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
        for(let t1 = 1; t1 < 1024; ++t1){
            let e = t1 << 13, i = 0;
            for(; 0 == (8388608 & e);)e <<= 1, i -= 8388608;
            e &= -8388609, i += 947912704, s[t1] = e | i;
        }
        for(let t1 = 1024; t1 < 2048; ++t1)s[t1] = 939524096 + (t1 - 1024 << 13);
        for(let t1 = 1; t1 < 31; ++t1)a[t1] = t1 << 23;
        a[31] = 1199570944, a[32] = 2147483648;
        for(let t1 = 33; t1 < 63; ++t1)a[t1] = 2147483648 + (t1 - 32 << 23);
        a[63] = 3347054592;
        for(let t1 = 1; t1 < 64; ++t1)32 !== t1 && (o[t1] = 1024);
        return {
            floatView: e,
            uint32View: i,
            baseTable: n,
            shiftTable: r,
            mantissaTable: s,
            exponentTable: a,
            offsetTable: o
        };
    }
    var kh = Object.freeze({
        __proto__: null,
        fromHalfFloat: function(t1) {
            const e = t1 >> 10;
            return Bh.uint32View[0] = Bh.mantissaTable[Bh.offsetTable[e] + (1023 & t1)] + Bh.exponentTable[e], Bh.floatView[0];
        },
        toHalfFloat: function(t1) {
            Math.abs(t1) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t1 = St(t1, -65504, 65504), Bh.floatView[0] = t1;
            const e = Bh.uint32View[0], i = e >> 23 & 511;
            return Bh.baseTable[i] + ((8388607 & e) >> Bh.shiftTable[i]);
        }
    });
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: e
        }
    })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e), t1.ACESFilmicToneMapping = 4, t1.AddEquation = i, t1.AddOperation = 2, t1.AdditiveAnimationBlendMode = lt, t1.AdditiveBlending = 2, t1.AlphaFormat = 1021, t1.AlwaysDepth = 1, t1.AlwaysStencilFunc = 519, t1.AmbientLight = Rc, t1.AmbientLightProbe = class extends Dc {
        constructor(t1, e = 1){
            super(void 0, e), this.isAmbientLightProbe = !0;
            const i = (new Zt).set(t1);
            this.sh.coefficients[0].set(i.r, i.g, i.b).multiplyScalar(2 * Math.sqrt(Math.PI));
        }
    }, t1.AnimationClip = sc, t1.AnimationLoader = class extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = this, s = new pc(this.manager);
            s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t1, function(i) {
                try {
                    e(r.parse(JSON.parse(i)));
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t1);
                }
            }, i, n);
        }
        parse(t1) {
            const e = [];
            for(let i = 0; i < t1.length; i++){
                const n = sc.parse(t1[i]);
                e.push(n);
            }
            return e;
        }
    }, t1.AnimationMixer = class extends vt {
        constructor(t1){
            super(), this._root = t1, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
        }
        _bindAction(t1, e) {
            const i = t1._localRoot || this._root, n = t1._clip.tracks, r = n.length, s = t1._propertyBindings, a = t1._interpolants, o = i.uuid, l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && (c = {}, l[o] = c);
            for(let t1 = 0; t1 !== r; ++t1){
                const r = n[t1], l = r.name;
                let h = c[l];
                if (void 0 !== h) ++h.referenceCount, s[t1] = h;
                else {
                    if (h = s[t1], void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                        continue;
                    }
                    const n = e && e._propertyBindings[t1].binding.parsedPath;
                    h = new nh(hh.create(i, l, n), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t1] = h;
                }
                a[t1].resultBuffer = h.buffer;
            }
        }
        _activateAction(t1) {
            if (!this._isActiveAction(t1)) {
                if (null === t1._cacheIndex) {
                    const e = (t1._localRoot || this._root).uuid, i = t1._clip.uuid, n = this._actionsByClip[i];
                    this._bindAction(t1, n && n.knownActions[0]), this._addInactiveAction(t1, i, e);
                }
                const e = t1._propertyBindings;
                for(let t1 = 0, i = e.length; t1 !== i; ++t1){
                    const i = e[t1];
                    0 == i.useCount++ && (this._lendBinding(i), i.saveOriginalState());
                }
                this._lendAction(t1);
            }
        }
        _deactivateAction(t1) {
            if (this._isActiveAction(t1)) {
                const e = t1._propertyBindings;
                for(let t1 = 0, i = e.length; t1 !== i; ++t1){
                    const i = e[t1];
                    0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i));
                }
                this._takeBackAction(t1);
            }
        }
        _initMemoryManager() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            const t1 = this;
            this.stats = {
                actions: {
                    get total () {
                        return t1._actions.length;
                    },
                    get inUse () {
                        return t1._nActiveActions;
                    }
                },
                bindings: {
                    get total () {
                        return t1._bindings.length;
                    },
                    get inUse () {
                        return t1._nActiveBindings;
                    }
                },
                controlInterpolants: {
                    get total () {
                        return t1._controlInterpolants.length;
                    },
                    get inUse () {
                        return t1._nActiveControlInterpolants;
                    }
                }
            };
        }
        _isActiveAction(t1) {
            const e = t1._cacheIndex;
            return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t1, e, i) {
            const n = this._actions, r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s) s = {
                knownActions: [
                    t1
                ],
                actionByRoot: {}
            }, t1._byClipCacheIndex = 0, r[e] = s;
            else {
                const e = s.knownActions;
                t1._byClipCacheIndex = e.length, e.push(t1);
            }
            t1._cacheIndex = n.length, n.push(t1), s.actionByRoot[i] = t1;
        }
        _removeInactiveAction(t1) {
            const e = this._actions, i = e[e.length - 1], n = t1._cacheIndex;
            i._cacheIndex = n, e[n] = i, e.pop(), t1._cacheIndex = null;
            const r = t1._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1], c = t1._byClipCacheIndex;
            l._byClipCacheIndex = c, o[c] = l, o.pop(), t1._byClipCacheIndex = null;
            delete a.actionByRoot[(t1._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t1);
        }
        _removeInactiveBindingsForAction(t1) {
            const e = t1._propertyBindings;
            for(let t1 = 0, i = e.length; t1 !== i; ++t1){
                const i = e[t1];
                0 == --i.referenceCount && this._removeInactiveBinding(i);
            }
        }
        _lendAction(t1) {
            const e = this._actions, i = t1._cacheIndex, n = this._nActiveActions++, r = e[n];
            t1._cacheIndex = n, e[n] = t1, r._cacheIndex = i, e[i] = r;
        }
        _takeBackAction(t1) {
            const e = this._actions, i = t1._cacheIndex, n = --this._nActiveActions, r = e[n];
            t1._cacheIndex = n, e[n] = t1, r._cacheIndex = i, e[i] = r;
        }
        _addInactiveBinding(t1, e, i) {
            const n = this._bindingsByRootAndName, r = this._bindings;
            let s = n[e];
            void 0 === s && (s = {}, n[e] = s), s[i] = t1, t1._cacheIndex = r.length, r.push(t1);
        }
        _removeInactiveBinding(t1) {
            const e = this._bindings, i = t1.binding, n = i.rootNode.uuid, r = i.path, s = this._bindingsByRootAndName, a = s[n], o = e[e.length - 1], l = t1._cacheIndex;
            o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[n];
        }
        _lendBinding(t1) {
            const e = this._bindings, i = t1._cacheIndex, n = this._nActiveBindings++, r = e[n];
            t1._cacheIndex = n, e[n] = t1, r._cacheIndex = i, e[i] = r;
        }
        _takeBackBinding(t1) {
            const e = this._bindings, i = t1._cacheIndex, n = --this._nActiveBindings, r = e[n];
            t1._cacheIndex = n, e[n] = t1, r._cacheIndex = i, e[i] = r;
        }
        _lendControlInterpolant() {
            const t1 = this._controlInterpolants, e = this._nActiveControlInterpolants++;
            let i = t1[e];
            return void 0 === i && (i = new Zl(new Float32Array(2), new Float32Array(2), 1, dh), i.__cacheIndex = e, t1[e] = i), i;
        }
        _takeBackControlInterpolant(t1) {
            const e = this._controlInterpolants, i = t1.__cacheIndex, n = --this._nActiveControlInterpolants, r = e[n];
            t1.__cacheIndex = n, e[n] = t1, r.__cacheIndex = i, e[i] = r;
        }
        clipAction(t1, e, i) {
            const n = e || this._root, r = n.uuid;
            let s = "string" == typeof t1 ? sc.findByName(n, t1) : t1;
            const a = null !== s ? s.uuid : t1, o = this._actionsByClip[a];
            let l = null;
            if (void 0 === i && (i = null !== s ? s.blendMode : ot), void 0 !== o) {
                const t1 = o.actionByRoot[r];
                if (void 0 !== t1 && t1.blendMode === i) return t1;
                l = o.knownActions[0], null === s && (s = l._clip);
            }
            if (null === s) return null;
            const c = new uh(this, s, e, i);
            return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t1, e) {
            const i = e || this._root, n = i.uuid, r = "string" == typeof t1 ? sc.findByName(i, t1) : t1, s = r ? r.uuid : t1, a = this._actionsByClip[s];
            return void 0 !== a && a.actionByRoot[n] || null;
        }
        stopAllAction() {
            const t1 = this._actions;
            for(let e = this._nActiveActions - 1; e >= 0; --e)t1[e].stop();
            return this;
        }
        update(t1) {
            t1 *= this.timeScale;
            const e = this._actions, i = this._nActiveActions, n = this.time += t1, r = Math.sign(t1), s = this._accuIndex ^= 1;
            for(let a = 0; a !== i; ++a)e[a]._update(n, t1, r, s);
            const a = this._bindings, o = this._nActiveBindings;
            for(let t1 = 0; t1 !== o; ++t1)a[t1].apply(s);
            return this;
        }
        setTime(t1) {
            this.time = 0;
            for(let t1 = 0; t1 < this._actions.length; t1++)this._actions[t1].time = 0;
            return this.update(t1);
        }
        getRoot() {
            return this._root;
        }
        uncacheClip(t1) {
            const e = this._actions, i = t1.uuid, n = this._actionsByClip, r = n[i];
            if (void 0 !== r) {
                const t1 = r.knownActions;
                for(let i = 0, n = t1.length; i !== n; ++i){
                    const n = t1[i];
                    this._deactivateAction(n);
                    const r = n._cacheIndex, s = e[e.length - 1];
                    n._cacheIndex = null, n._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(n);
                }
                delete n[i];
            }
        }
        uncacheRoot(t1) {
            const e = t1.uuid, i = this._actionsByClip;
            for(const t1 in i){
                const n = i[t1].actionByRoot[e];
                void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
            }
            const n = this._bindingsByRootAndName[e];
            if (void 0 !== n) for(const t1 in n){
                const e = n[t1];
                e.restoreOriginalState(), this._removeInactiveBinding(e);
            }
        }
        uncacheAction(t1, e) {
            const i = this.existingAction(t1, e);
            null !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
        }
    }, t1.AnimationObjectGroup = class {
        constructor(){
            this.isAnimationObjectGroup = !0, this.uuid = bt(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            const t1 = {};
            this._indicesByUUID = t1;
            for(let e = 0, i = arguments.length; e !== i; ++e)t1[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            const e = this;
            this.stats = {
                objects: {
                    get total () {
                        return e._objects.length;
                    },
                    get inUse () {
                        return this.total - e.nCachedObjects_;
                    }
                },
                get bindingsPerObject () {
                    return e._bindings.length;
                }
            };
        }
        add() {
            const t1 = this._objects, e = this._indicesByUUID, i = this._paths, n = this._parsedPaths, r = this._bindings, s = r.length;
            let a, o = t1.length, l = this.nCachedObjects_;
            for(let c = 0, h = arguments.length; c !== h; ++c){
                const h = arguments[c], u = h.uuid;
                let d = e[u];
                if (void 0 === d) {
                    d = o++, e[u] = d, t1.push(h);
                    for(let t1 = 0, e = s; t1 !== e; ++t1)r[t1].push(new hh(h, i[t1], n[t1]));
                } else if (d < l) {
                    a = t1[d];
                    const o = --l, c = t1[o];
                    e[c.uuid] = d, t1[d] = c, e[u] = o, t1[o] = h;
                    for(let t1 = 0, e = s; t1 !== e; ++t1){
                        const e = r[t1], s = e[o];
                        let a = e[d];
                        e[d] = s, void 0 === a && (a = new hh(h, i[t1], n[t1])), e[o] = a;
                    }
                } else t1[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = l;
        }
        remove() {
            const t1 = this._objects, e = this._indicesByUUID, i = this._bindings, n = i.length;
            let r = this.nCachedObjects_;
            for(let s = 0, a = arguments.length; s !== a; ++s){
                const a = arguments[s], o = a.uuid, l = e[o];
                if (void 0 !== l && l >= r) {
                    const s = r++, c = t1[s];
                    e[c.uuid] = l, t1[l] = c, e[o] = s, t1[s] = a;
                    for(let t1 = 0, e = n; t1 !== e; ++t1){
                        const e = i[t1], n = e[s], r = e[l];
                        e[l] = n, e[s] = r;
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        uncache() {
            const t1 = this._objects, e = this._indicesByUUID, i = this._bindings, n = i.length;
            let r = this.nCachedObjects_, s = t1.length;
            for(let a = 0, o = arguments.length; a !== o; ++a){
                const o = arguments[a].uuid, l = e[o];
                if (void 0 !== l) {
                    if (delete e[o], l < r) {
                        const a = --r, o = t1[a], c = --s, h = t1[c];
                        e[o.uuid] = l, t1[l] = o, e[h.uuid] = a, t1[a] = h, t1.pop();
                        for(let t1 = 0, e = n; t1 !== e; ++t1){
                            const e = i[t1], n = e[a], r = e[c];
                            e[l] = n, e[a] = r, e.pop();
                        }
                    } else {
                        const r = --s, a = t1[r];
                        r > 0 && (e[a.uuid] = l), t1[l] = a, t1.pop();
                        for(let t1 = 0, e = n; t1 !== e; ++t1){
                            const e = i[t1];
                            e[l] = e[r], e.pop();
                        }
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        subscribe_(t1, e) {
            const i = this._bindingsIndicesByPath;
            let n = i[t1];
            const r = this._bindings;
            if (void 0 !== n) return r[n];
            const s = this._paths, a = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, h = new Array(l);
            n = r.length, i[t1] = n, s.push(t1), a.push(e), r.push(h);
            for(let i = c, n = o.length; i !== n; ++i){
                const n = o[i];
                h[i] = new hh(n, t1, e);
            }
            return h;
        }
        unsubscribe_(t1) {
            const e = this._bindingsIndicesByPath, i = e[t1];
            if (void 0 !== i) {
                const n = this._paths, r = this._parsedPaths, s = this._bindings, a = s.length - 1, o = s[a];
                e[t1[a]] = i, s[i] = o, s.pop(), r[i] = r[a], r.pop(), n[i] = n[a], n.pop();
            }
        }
    }, t1.AnimationUtils = ql, t1.ArcCurve = lo, t1.ArrayCamera = Vs, t1.ArrowHelper = class extends li {
        constructor(t1 = new oe(0, 0, 1), e = new oe(0, 0, 0), i = 1, n = 16776960, r = .2 * i, s = .2 * r){
            super(), this.type = "ArrowHelper", void 0 === zh && (zh = new zi, zh.setAttribute("position", new Ci([
                0,
                0,
                0,
                0,
                1,
                0
            ], 3)), Uh = new Io(0, .5, 1, 5, 1), Uh.translate(0, -0.5, 0)), this.position.copy(e), this.line = new Xa(zh, new Ga({
                color: n,
                toneMapped: !1
            })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ji(Uh, new bi({
                color: n,
                toneMapped: !1
            })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t1), this.setLength(i, r, s);
        }
        setDirection(t1) {
            if (t1.y > .99999) this.quaternion.set(0, 0, 0, 1);
            else if (t1.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
            else {
                Oh.set(t1.z, 0, -t1.x).normalize();
                const e = Math.acos(t1.y);
                this.quaternion.setFromAxisAngle(Oh, e);
            }
        }
        setLength(t1, e = .2 * t1, i = .2 * e) {
            this.line.scale.set(1, Math.max(1e-4, t1 - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t1, this.cone.updateMatrix();
        }
        setColor(t1) {
            this.line.material.color.set(t1), this.cone.material.color.set(t1);
        }
        copy(t1) {
            return super.copy(t1, !1), this.line.copy(t1.line), this.cone.copy(t1.cone), this;
        }
        dispose() {
            this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
        }
    }, t1.Audio = $c, t1.AudioAnalyser = class {
        constructor(t1, e = 2048){
            this.analyser = t1.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t1.getOutput().connect(this.analyser);
        }
        getFrequencyData() {
            return this.analyser.getByteFrequencyData(this.data), this.data;
        }
        getAverageFrequency() {
            let t1 = 0;
            const e = this.getFrequencyData();
            for(let i = 0; i < e.length; i++)t1 += e[i];
            return t1 / e.length;
        }
    }, t1.AudioContext = Vc, t1.AudioListener = class extends li {
        constructor(){
            super(), this.type = "AudioListener", this.context = Vc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new qc;
        }
        getInput() {
            return this.gain;
        }
        removeFilter() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
        }
        getFilter() {
            return this.filter;
        }
        setFilter(t1) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t1, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
        }
        getMasterVolume() {
            return this.gain.gain.value;
        }
        setMasterVolume(t1) {
            return this.gain.gain.setTargetAtTime(t1, this.context.currentTime, .01), this;
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1);
            const e = this.context.listener, i = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Yc, Zc, Jc), Kc.set(0, 0, -1).applyQuaternion(Zc), e.positionX) {
                const t1 = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(Yc.x, t1), e.positionY.linearRampToValueAtTime(Yc.y, t1), e.positionZ.linearRampToValueAtTime(Yc.z, t1), e.forwardX.linearRampToValueAtTime(Kc.x, t1), e.forwardY.linearRampToValueAtTime(Kc.y, t1), e.forwardZ.linearRampToValueAtTime(Kc.z, t1), e.upX.linearRampToValueAtTime(i.x, t1), e.upY.linearRampToValueAtTime(i.y, t1), e.upZ.linearRampToValueAtTime(i.z, t1);
            } else e.setPosition(Yc.x, Yc.y, Yc.z), e.setOrientation(Kc.x, Kc.y, Kc.z, i.x, i.y, i.z);
        }
    }, t1.AudioLoader = class extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = this, s = new pc(this.manager);
            s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t1, function(i) {
                try {
                    const t1 = i.slice(0);
                    Vc.getContext().decodeAudioData(t1, function(t1) {
                        e(t1);
                    });
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t1);
                }
            }, i, n);
        }
    }, t1.AxesHelper = class extends Ja {
        constructor(t1 = 1){
            const e = [
                0,
                0,
                0,
                t1,
                0,
                0,
                0,
                0,
                0,
                0,
                t1,
                0,
                0,
                0,
                0,
                0,
                0,
                t1
            ], i = new zi;
            i.setAttribute("position", new Ci(e, 3)), i.setAttribute("color", new Ci([
                1,
                0,
                0,
                1,
                .6,
                0,
                0,
                1,
                0,
                .6,
                1,
                0,
                0,
                0,
                1,
                0,
                .6,
                1
            ], 3));
            super(i, new Ga({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "AxesHelper";
        }
        setColors(t1, e, i) {
            const n = new Zt, r = this.geometry.attributes.color.array;
            return n.set(t1), n.toArray(r, 0), n.toArray(r, 3), n.set(e), n.toArray(r, 6), n.toArray(r, 9), n.set(i), n.toArray(r, 12), n.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.BackSide = 1, t1.BasicDepthPacking = 3200, t1.BasicShadowMap = 0, t1.Bone = La, t1.BooleanKeyframeTrack = $l, t1.Box2 = class {
        constructor(t1 = new It(1 / 0, 1 / 0), e = new It(-1 / 0, -1 / 0)){
            this.isBox2 = !0, this.min = t1, this.max = e;
        }
        set(t1, e) {
            return this.min.copy(t1), this.max.copy(e), this;
        }
        setFromPoints(t1) {
            this.makeEmpty();
            for(let e = 0, i = t1.length; e < i; e++)this.expandByPoint(t1[e]);
            return this;
        }
        setFromCenterAndSize(t1, e) {
            const i = vh.copy(e).multiplyScalar(.5);
            return this.min.copy(t1).sub(i), this.max.copy(t1).add(i), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.min.copy(t1.min), this.max.copy(t1.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t1) {
            return this.isEmpty() ? t1.set(0, 0) : t1.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t1) {
            return this.isEmpty() ? t1.set(0, 0) : t1.subVectors(this.max, this.min);
        }
        expandByPoint(t1) {
            return this.min.min(t1), this.max.max(t1), this;
        }
        expandByVector(t1) {
            return this.min.sub(t1), this.max.add(t1), this;
        }
        expandByScalar(t1) {
            return this.min.addScalar(-t1), this.max.addScalar(t1), this;
        }
        containsPoint(t1) {
            return !(t1.x < this.min.x || t1.x > this.max.x || t1.y < this.min.y || t1.y > this.max.y);
        }
        containsBox(t1) {
            return this.min.x <= t1.min.x && t1.max.x <= this.max.x && this.min.y <= t1.min.y && t1.max.y <= this.max.y;
        }
        getParameter(t1, e) {
            return e.set((t1.x - this.min.x) / (this.max.x - this.min.x), (t1.y - this.min.y) / (this.max.y - this.min.y));
        }
        intersectsBox(t1) {
            return !(t1.max.x < this.min.x || t1.min.x > this.max.x || t1.max.y < this.min.y || t1.min.y > this.max.y);
        }
        clampPoint(t1, e) {
            return e.copy(t1).clamp(this.min, this.max);
        }
        distanceToPoint(t1) {
            return vh.copy(t1).clamp(this.min, this.max).sub(t1).length();
        }
        intersect(t1) {
            return this.min.max(t1.min), this.max.min(t1.max), this;
        }
        union(t1) {
            return this.min.min(t1.min), this.max.max(t1.max), this;
        }
        translate(t1) {
            return this.min.add(t1), this.max.add(t1), this;
        }
        equals(t1) {
            return t1.min.equals(this.min) && t1.max.equals(this.max);
        }
    }, t1.Box3 = he, t1.Box3Helper = class extends Ja {
        constructor(t1, e = 16776960){
            const i = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), n = new zi;
            n.setIndex(new Ti(i, 1)), n.setAttribute("position", new Ci([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                -1
            ], 3)), super(n, new Ga({
                color: e,
                toneMapped: !1
            })), this.box = t1, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
        }
        updateMatrixWorld(t1) {
            const e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t1));
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.BoxBufferGeometry = class extends $i {
        constructor(t1, e, i, n, r, s){
            console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."), super(t1, e, i, n, r, s);
        }
    }, t1.BoxGeometry = $i, t1.BoxHelper = class extends Ja {
        constructor(t1, e = 16776960){
            const i = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), n = new Float32Array(24), r = new zi;
            r.setIndex(new Ti(i, 1)), r.setAttribute("position", new Ti(n, 3)), super(r, new Ga({
                color: e,
                toneMapped: !1
            })), this.object = t1, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
        }
        update(t1) {
            if (void 0 !== t1 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Nh.setFromObject(this.object), Nh.isEmpty()) return;
            const e = Nh.min, i = Nh.max, n = this.geometry.attributes.position, r = n.array;
            r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere();
        }
        setFromObject(t1) {
            return this.object = t1, this.update(), this;
        }
        copy(t1, e) {
            return super.copy(t1, e), this.object = t1.object, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.BufferAttribute = Ti, t1.BufferGeometry = zi, t1.BufferGeometryLoader = Uc, t1.ByteType = 1010, t1.Cache = oc, t1.Camera = sn, t1.CameraHelper = class extends Ja {
        constructor(t1){
            const e = new zi, i = new Ga({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }), n = [], r = [], s = {};
            function a(t1, e) {
                o(t1), o(e);
            }
            function o(t1) {
                n.push(0, 0, 0), r.push(0, 0, 0), void 0 === s[t1] && (s[t1] = []), s[t1].push(n.length / 3 - 1);
            }
            a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4"), e.setAttribute("position", new Ci(n, 3)), e.setAttribute("color", new Ci(r, 3)), super(e, i), this.type = "CameraHelper", this.camera = t1, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
            const l = new Zt(16755200), c = new Zt(16711680), h = new Zt(43775), u = new Zt(16777215), d = new Zt(3355443);
            this.setColors(l, c, h, u, d);
        }
        setColors(t1, e, i, n, r) {
            const s = this.geometry.getAttribute("color");
            s.setXYZ(0, t1.r, t1.g, t1.b), s.setXYZ(1, t1.r, t1.g, t1.b), s.setXYZ(2, t1.r, t1.g, t1.b), s.setXYZ(3, t1.r, t1.g, t1.b), s.setXYZ(4, t1.r, t1.g, t1.b), s.setXYZ(5, t1.r, t1.g, t1.b), s.setXYZ(6, t1.r, t1.g, t1.b), s.setXYZ(7, t1.r, t1.g, t1.b), s.setXYZ(8, t1.r, t1.g, t1.b), s.setXYZ(9, t1.r, t1.g, t1.b), s.setXYZ(10, t1.r, t1.g, t1.b), s.setXYZ(11, t1.r, t1.g, t1.b), s.setXYZ(12, t1.r, t1.g, t1.b), s.setXYZ(13, t1.r, t1.g, t1.b), s.setXYZ(14, t1.r, t1.g, t1.b), s.setXYZ(15, t1.r, t1.g, t1.b), s.setXYZ(16, t1.r, t1.g, t1.b), s.setXYZ(17, t1.r, t1.g, t1.b), s.setXYZ(18, t1.r, t1.g, t1.b), s.setXYZ(19, t1.r, t1.g, t1.b), s.setXYZ(20, t1.r, t1.g, t1.b), s.setXYZ(21, t1.r, t1.g, t1.b), s.setXYZ(22, t1.r, t1.g, t1.b), s.setXYZ(23, t1.r, t1.g, t1.b), s.setXYZ(24, e.r, e.g, e.b), s.setXYZ(25, e.r, e.g, e.b), s.setXYZ(26, e.r, e.g, e.b), s.setXYZ(27, e.r, e.g, e.b), s.setXYZ(28, e.r, e.g, e.b), s.setXYZ(29, e.r, e.g, e.b), s.setXYZ(30, e.r, e.g, e.b), s.setXYZ(31, e.r, e.g, e.b), s.setXYZ(32, i.r, i.g, i.b), s.setXYZ(33, i.r, i.g, i.b), s.setXYZ(34, i.r, i.g, i.b), s.setXYZ(35, i.r, i.g, i.b), s.setXYZ(36, i.r, i.g, i.b), s.setXYZ(37, i.r, i.g, i.b), s.setXYZ(38, n.r, n.g, n.b), s.setXYZ(39, n.r, n.g, n.b), s.setXYZ(40, r.r, r.g, r.b), s.setXYZ(41, r.r, r.g, r.b), s.setXYZ(42, r.r, r.g, r.b), s.setXYZ(43, r.r, r.g, r.b), s.setXYZ(44, r.r, r.g, r.b), s.setXYZ(45, r.r, r.g, r.b), s.setXYZ(46, r.r, r.g, r.b), s.setXYZ(47, r.r, r.g, r.b), s.setXYZ(48, r.r, r.g, r.b), s.setXYZ(49, r.r, r.g, r.b), s.needsUpdate = !0;
        }
        update() {
            const t1 = this.geometry, e = this.pointMap;
            Ih.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Dh("c", e, t1, Ih, 0, 0, -1), Dh("t", e, t1, Ih, 0, 0, 1), Dh("n1", e, t1, Ih, -1, -1, -1), Dh("n2", e, t1, Ih, 1, -1, -1), Dh("n3", e, t1, Ih, -1, 1, -1), Dh("n4", e, t1, Ih, 1, 1, -1), Dh("f1", e, t1, Ih, -1, -1, 1), Dh("f2", e, t1, Ih, 1, -1, 1), Dh("f3", e, t1, Ih, -1, 1, 1), Dh("f4", e, t1, Ih, 1, 1, 1), Dh("u1", e, t1, Ih, .7, 1.1, -1), Dh("u2", e, t1, Ih, -0.7, 1.1, -1), Dh("u3", e, t1, Ih, 0, 2, -1), Dh("cf1", e, t1, Ih, -1, 0, 1), Dh("cf2", e, t1, Ih, 1, 0, 1), Dh("cf3", e, t1, Ih, 0, -1, 1), Dh("cf4", e, t1, Ih, 0, 1, 1), Dh("cn1", e, t1, Ih, -1, 0, -1), Dh("cn2", e, t1, Ih, 1, 0, -1), Dh("cn3", e, t1, Ih, 0, -1, -1), Dh("cn4", e, t1, Ih, 0, 1, -1), t1.getAttribute("position").needsUpdate = !0;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.CanvasTexture = class extends ee {
        constructor(t1, e, i, n, r, s, a, o, l){
            super(t1, e, i, n, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
        }
    }, t1.CapsuleBufferGeometry = class extends Ro {
        constructor(t1, e, i, n){
            console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."), super(t1, e, i, n);
        }
    }, t1.CapsuleGeometry = Ro, t1.CatmullRomCurve3 = fo, t1.CineonToneMapping = 3, t1.CircleBufferGeometry = class extends Po {
        constructor(t1, e, i, n){
            console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."), super(t1, e, i, n);
        }
    }, t1.CircleGeometry = Po, t1.ClampToEdgeWrapping = h, t1.Clock = qc, t1.Color = Zt, t1.ColorKeyframeTrack = Ql, t1.ColorManagement = Vt, t1.CompressedArrayTexture = class extends so {
        constructor(t1, e, i, n, r, s){
            super(t1, e, i, r, s), this.isCompressedArrayTexture = !0, this.image.depth = n, this.wrapR = h;
        }
    }, t1.CompressedTexture = so, t1.CompressedTextureLoader = class extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = this, s = [], a = new so, o = new pc(this.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
            let l = 0;
            function c(c) {
                o.load(t1[c], function(t1) {
                    const i = r.parse(t1, !0);
                    s[c] = {
                        width: i.width,
                        height: i.height,
                        format: i.format,
                        mipmaps: i.mipmaps
                    }, l += 1, 6 === l && (1 === i.mipmapCount && (a.minFilter = f), a.image = s, a.format = i.format, a.needsUpdate = !0, e && e(a));
                }, i, n);
            }
            if (Array.isArray(t1)) for(let e = 0, i = t1.length; e < i; ++e)c(e);
            else o.load(t1, function(t1) {
                const i = r.parse(t1, !0);
                if (i.isCubemap) {
                    const t1 = i.mipmaps.length / i.mipmapCount;
                    for(let e = 0; e < t1; e++){
                        s[e] = {
                            mipmaps: []
                        };
                        for(let t1 = 0; t1 < i.mipmapCount; t1++)s[e].mipmaps.push(i.mipmaps[e * i.mipmapCount + t1]), s[e].format = i.format, s[e].width = i.width, s[e].height = i.height;
                    }
                    a.image = s;
                } else a.image.width = i.width, a.image.height = i.height, a.mipmaps = i.mipmaps;
                1 === i.mipmapCount && (a.minFilter = f), a.format = i.format, a.needsUpdate = !0, e && e(a);
            }, i, n);
            return a;
        }
    }, t1.ConeBufferGeometry = class extends Do {
        constructor(t1, e, i, n, r, s, a){
            console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."), super(t1, e, i, n, r, s, a);
        }
    }, t1.ConeGeometry = Do, t1.CubeCamera = ln, t1.CubeReflectionMapping = r, t1.CubeRefractionMapping = s, t1.CubeTexture = cn, t1.CubeTextureLoader = class extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = new cn, s = new mc(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            let a = 0;
            function o(i) {
                s.load(t1[i], function(t1) {
                    r.images[i] = t1, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
                }, void 0, n);
            }
            for(let e = 0; e < t1.length; ++e)o(e);
            return r;
        }
    }, t1.CubeUVReflectionMapping = l, t1.CubicBezierCurve = _o, t1.CubicBezierCurve3 = yo, t1.CubicInterpolant = Yl, t1.CullFaceBack = 1, t1.CullFaceFront = 2, t1.CullFaceFrontBack = 3, t1.CullFaceNone = 0, t1.Curve = ao, t1.CurvePath = Eo, t1.CustomBlending = 5, t1.CustomToneMapping = 5, t1.CylinderBufferGeometry = class extends Io {
        constructor(t1, e, i, n, r, s, a, o){
            console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."), super(t1, e, i, n, r, s, a, o);
        }
    }, t1.CylinderGeometry = Io, t1.Cylindrical = class {
        constructor(t1 = 1, e = 0, i = 0){
            return this.radius = t1, this.theta = e, this.y = i, this;
        }
        set(t1, e, i) {
            return this.radius = t1, this.theta = e, this.y = i, this;
        }
        copy(t1) {
            return this.radius = t1.radius, this.theta = t1.theta, this.y = t1.y, this;
        }
        setFromVector3(t1) {
            return this.setFromCartesianCoords(t1.x, t1.y, t1.z);
        }
        setFromCartesianCoords(t1, e, i) {
            return this.radius = Math.sqrt(t1 * t1 + i * i), this.theta = Math.atan2(t1, i), this.y = e, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.Data3DTexture = se, t1.DataArrayTexture = re, t1.DataTexture = Ra, t1.DataTextureLoader = class extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = this, s = new Ra, a = new pc(this.manager);
            return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t1, function(t1) {
                const i = r.parse(t1);
                i && (void 0 !== i.image ? s.image = i.image : void 0 !== i.data && (s.image.width = i.width, s.image.height = i.height, s.image.data = i.data), s.wrapS = void 0 !== i.wrapS ? i.wrapS : h, s.wrapT = void 0 !== i.wrapT ? i.wrapT : h, s.magFilter = void 0 !== i.magFilter ? i.magFilter : f, s.minFilter = void 0 !== i.minFilter ? i.minFilter : f, s.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (s.encoding = i.encoding), void 0 !== i.flipY && (s.flipY = i.flipY), void 0 !== i.format && (s.format = i.format), void 0 !== i.type && (s.type = i.type), void 0 !== i.mipmaps && (s.mipmaps = i.mipmaps, s.minFilter = v), 1 === i.mipmapCount && (s.minFilter = f), void 0 !== i.generateMipmaps && (s.generateMipmaps = i.generateMipmaps), s.needsUpdate = !0, e && e(s, i));
            }, i, n), s;
        }
    }, t1.DataUtils = kh, t1.DecrementStencilOp = 7683, t1.DecrementWrapStencilOp = 34056, t1.DefaultLoadingManager = cc, t1.DepthFormat = T, t1.DepthStencilFormat = A, t1.DepthTexture = qs, t1.DirectionalLight = Lc, t1.DirectionalLightHelper = class extends li {
        constructor(t1, e, i){
            super(), this.light = t1, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, this.type = "DirectionalLightHelper", void 0 === e && (e = 1);
            let n = new zi;
            n.setAttribute("position", new Ci([
                -e,
                e,
                0,
                e,
                e,
                0,
                e,
                -e,
                0,
                -e,
                -e,
                0,
                -e,
                e,
                0
            ], 3));
            const r = new Ga({
                fog: !1,
                toneMapped: !1
            });
            this.lightPlane = new Xa(n, r), this.add(this.lightPlane), n = new zi, n.setAttribute("position", new Ci([
                0,
                0,
                0,
                0,
                0,
                1
            ], 3)), this.targetLine = new Xa(n, r), this.add(this.targetLine), this.update();
        }
        dispose() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
        }
        update() {
            this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), Ch.setFromMatrixPosition(this.light.matrixWorld), Lh.setFromMatrixPosition(this.light.target.matrixWorld), Rh.subVectors(Lh, Ch), this.lightPlane.lookAt(Lh), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Lh), this.targetLine.scale.z = Rh.length();
        }
    }, t1.DiscreteInterpolant = Jl, t1.DodecahedronBufferGeometry = class extends Oo {
        constructor(t1, e){
            console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."), super(t1, e);
        }
    }, t1.DodecahedronGeometry = Oo, t1.DoubleSide = 2, t1.DstAlphaFactor = 206, t1.DstColorFactor = 208, t1.DynamicCopyUsage = 35050, t1.DynamicDrawUsage = 35048, t1.DynamicReadUsage = 35049, t1.EdgesGeometry = ko, t1.EllipseCurve = oo, t1.EqualDepth = 4, t1.EqualStencilFunc = 514, t1.EquirectangularReflectionMapping = a, t1.EquirectangularRefractionMapping = o, t1.Euler = Xe, t1.EventDispatcher = vt, t1.ExtrudeBufferGeometry = class extends gl {
        constructor(t1, e){
            console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."), super(t1, e);
        }
    }, t1.ExtrudeGeometry = gl, t1.FileLoader = pc, t1.Float16BufferAttribute = class extends Ti {
        constructor(t1, e, i){
            super(new Uint16Array(t1), e, i), this.isFloat16BufferAttribute = !0;
        }
    }, t1.Float32BufferAttribute = Ci, t1.Float64BufferAttribute = class extends Ti {
        constructor(t1, e, i){
            super(new Float64Array(t1), e, i);
        }
    }, t1.FloatType = M, t1.Fog = Qs, t1.FogExp2 = $s, t1.FramebufferTexture = class extends ee {
        constructor(t1, e, i){
            super({
                width: t1,
                height: e
            }), this.isFramebufferTexture = !0, this.format = i, this.magFilter = d, this.minFilter = d, this.generateMipmaps = !1, this.needsUpdate = !0;
        }
    }, t1.FrontSide = 0, t1.Frustum = vn, t1.GLBufferAttribute = class {
        constructor(t1, e, i, n, r){
            this.isGLBufferAttribute = !0, this.name = "", this.buffer = t1, this.type = e, this.itemSize = i, this.elementSize = n, this.count = r, this.version = 0;
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        setBuffer(t1) {
            return this.buffer = t1, this;
        }
        setType(t1, e) {
            return this.type = t1, this.elementSize = e, this;
        }
        setItemSize(t1) {
            return this.itemSize = t1, this;
        }
        setCount(t1) {
            return this.count = t1, this;
        }
    }, t1.GLSL1 = "100", t1.GLSL3 = ft, t1.GreaterDepth = 6, t1.GreaterEqualDepth = 5, t1.GreaterEqualStencilFunc = 518, t1.GreaterStencilFunc = 516, t1.GridHelper = class extends Ja {
        constructor(t1 = 10, e = 10, i = 4473924, n = 8947848){
            i = new Zt(i), n = new Zt(n);
            const r = e / 2, s = t1 / e, a = t1 / 2, o = [], l = [];
            for(let t1 = 0, c = 0, h = -a; t1 <= e; t1++, h += s){
                o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
                const e = t1 === r ? i : n;
                e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3;
            }
            const c = new zi;
            c.setAttribute("position", new Ci(o, 3)), c.setAttribute("color", new Ci(l, 3));
            super(c, new Ga({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "GridHelper";
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.Group = Hs, t1.HalfFloatType = b, t1.HemisphereLight = gc, t1.HemisphereLightHelper = class extends li {
        constructor(t1, e, i){
            super(), this.light = t1, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, this.type = "HemisphereLightHelper";
            const n = new _l(e);
            n.rotateY(.5 * Math.PI), this.material = new bi({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            }), void 0 === this.color && (this.material.vertexColors = !0);
            const r = n.getAttribute("position"), s = new Float32Array(3 * r.count);
            n.setAttribute("color", new Ti(s, 3)), this.add(new Ji(n, this.material)), this.update();
        }
        dispose() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
        update() {
            const t1 = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                const e = t1.geometry.getAttribute("color");
                Ah.copy(this.light.color), Eh.copy(this.light.groundColor);
                for(let t1 = 0, i = e.count; t1 < i; t1++){
                    const n = t1 < i / 2 ? Ah : Eh;
                    e.setXYZ(t1, n.r, n.g, n.b);
                }
                e.needsUpdate = !0;
            }
            this.light.updateWorldMatrix(!0, !1), t1.lookAt(Th.setFromMatrixPosition(this.light.matrixWorld).negate());
        }
    }, t1.HemisphereLightProbe = class extends Dc {
        constructor(t1, e, i = 1){
            super(void 0, i), this.isHemisphereLightProbe = !0;
            const n = (new Zt).set(t1), r = (new Zt).set(e), s = new oe(n.r, n.g, n.b), a = new oe(r.r, r.g, r.b), o = Math.sqrt(Math.PI), l = o * Math.sqrt(.75);
            this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
        }
    }, t1.IcosahedronBufferGeometry = class extends xl {
        constructor(t1, e){
            console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."), super(t1, e);
        }
    }, t1.IcosahedronGeometry = xl, t1.ImageBitmapLoader = class extends hc {
        constructor(t1){
            super(t1), this.isImageBitmapLoader = !0, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                premultiplyAlpha: "none"
            };
        }
        setOptions(t1) {
            return this.options = t1, this;
        }
        load(t1, e, i, n) {
            void 0 === t1 && (t1 = ""), void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = this, s = oc.get(t1);
            if (void 0 !== s) return r.manager.itemStart(t1), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t1);
            }, 0), s;
            const a = {};
            a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t1, a).then(function(t1) {
                return t1.blob();
            }).then(function(t1) {
                return createImageBitmap(t1, Object.assign(r.options, {
                    colorSpaceConversion: "none"
                }));
            }).then(function(i) {
                oc.add(t1, i), e && e(i), r.manager.itemEnd(t1);
            }).catch(function(e) {
                n && n(e), r.manager.itemError(t1), r.manager.itemEnd(t1);
            }), r.manager.itemStart(t1);
        }
    }, t1.ImageLoader = mc, t1.ImageUtils = Kt, t1.IncrementStencilOp = 7682, t1.IncrementWrapStencilOp = 34055, t1.InstancedBufferAttribute = Na, t1.InstancedBufferGeometry = zc, t1.InstancedInterleavedBuffer = class extends ea {
        constructor(t1, e, i = 1){
            super(t1, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = i;
        }
        copy(t1) {
            return super.copy(t1), this.meshPerAttribute = t1.meshPerAttribute, this;
        }
        clone(t1) {
            const e = super.clone(t1);
            return e.meshPerAttribute = this.meshPerAttribute, e;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
        }
    }, t1.InstancedMesh = ka, t1.Int16BufferAttribute = class extends Ti {
        constructor(t1, e, i){
            super(new Int16Array(t1), e, i);
        }
    }, t1.Int32BufferAttribute = class extends Ti {
        constructor(t1, e, i){
            super(new Int32Array(t1), e, i);
        }
    }, t1.Int8BufferAttribute = class extends Ti {
        constructor(t1, e, i){
            super(new Int8Array(t1), e, i);
        }
    }, t1.IntType = 1013, t1.InterleavedBuffer = ea, t1.InterleavedBufferAttribute = na, t1.Interpolant = Xl, t1.InterpolateDiscrete = et, t1.InterpolateLinear = it, t1.InterpolateSmooth = nt, t1.InvertStencilOp = 5386, t1.KeepStencilOp = pt, t1.KeyframeTrack = Kl, t1.LOD = ba, t1.LatheBufferGeometry = class extends Lo {
        constructor(t1, e, i, n){
            console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."), super(t1, e, i, n);
        }
    }, t1.LatheGeometry = Lo, t1.Layers = Ye, t1.LessDepth = 2, t1.LessEqualDepth = 3, t1.LessEqualStencilFunc = 515, t1.LessStencilFunc = 513, t1.Light = fc, t1.LightProbe = Dc, t1.Line = Xa, t1.Line3 = class {
        constructor(t1 = new oe, e = new oe){
            this.start = t1, this.end = e;
        }
        set(t1, e) {
            return this.start.copy(t1), this.end.copy(e), this;
        }
        copy(t1) {
            return this.start.copy(t1.start), this.end.copy(t1.end), this;
        }
        getCenter(t1) {
            return t1.addVectors(this.start, this.end).multiplyScalar(.5);
        }
        delta(t1) {
            return t1.subVectors(this.end, this.start);
        }
        distanceSq() {
            return this.start.distanceToSquared(this.end);
        }
        distance() {
            return this.start.distanceTo(this.end);
        }
        at(t1, e) {
            return this.delta(e).multiplyScalar(t1).add(this.start);
        }
        closestPointToPointParameter(t1, e) {
            xh.subVectors(t1, this.start), _h.subVectors(this.end, this.start);
            const i = _h.dot(_h);
            let n = _h.dot(xh) / i;
            return e && (n = St(n, 0, 1)), n;
        }
        closestPointToPoint(t1, e, i) {
            const n = this.closestPointToPointParameter(t1, e);
            return this.delta(i).multiplyScalar(n).add(this.start);
        }
        applyMatrix4(t1) {
            return this.start.applyMatrix4(t1), this.end.applyMatrix4(t1), this;
        }
        equals(t1) {
            return t1.start.equals(this.start) && t1.end.equals(this.end);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.LineBasicMaterial = Ga, t1.LineCurve = Mo, t1.LineCurve3 = bo, t1.LineDashedMaterial = Fl, t1.LineLoop = Ka, t1.LineSegments = Ja, t1.LinearEncoding = ct, t1.LinearFilter = f, t1.LinearInterpolant = Zl, t1.LinearMipMapLinearFilter = 1008, t1.LinearMipMapNearestFilter = 1007, t1.LinearMipmapLinearFilter = v, t1.LinearMipmapNearestFilter = g, t1.LinearSRGBColorSpace = dt, t1.LinearToneMapping = 1, t1.Loader = hc, t1.LoaderUtils = Oc, t1.LoadingManager = lc, t1.LoopOnce = 2200, t1.LoopPingPong = 2202, t1.LoopRepeat = 2201, t1.LuminanceAlphaFormat = 1025, t1.LuminanceFormat = 1024, t1.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }, t1.Material = Mi, t1.MaterialLoader = Nc, t1.MathUtils = Pt, t1.Matrix3 = Dt, t1.Matrix4 = Ue, t1.MaxEquation = 104, t1.Mesh = Ji, t1.MeshBasicMaterial = bi, t1.MeshDepthMaterial = zs, t1.MeshDistanceMaterial = Us, t1.MeshLambertMaterial = Ul, t1.MeshMatcapMaterial = Bl, t1.MeshNormalMaterial = zl, t1.MeshPhongMaterial = Nl, t1.MeshPhysicalMaterial = Dl, t1.MeshStandardMaterial = Il, t1.MeshToonMaterial = Ol, t1.MinEquation = 103, t1.MirroredRepeatWrapping = u, t1.MixOperation = 1, t1.MultiplyBlending = 4, t1.MultiplyOperation = 0, t1.NearestFilter = d, t1.NearestMipMapLinearFilter = 1005, t1.NearestMipMapNearestFilter = 1004, t1.NearestMipmapLinearFilter = m, t1.NearestMipmapNearestFilter = p, t1.NeverDepth = 0, t1.NeverStencilFunc = 512, t1.NoBlending = 0, t1.NoColorSpace = "", t1.NoToneMapping = 0, t1.NormalAnimationBlendMode = ot, t1.NormalBlending = 1, t1.NotEqualDepth = 7, t1.NotEqualStencilFunc = 517, t1.NumberKeyframeTrack = tc, t1.Object3D = li, t1.ObjectLoader = class extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = this, s = "" === this.path ? Oc.extractUrlBase(t1) : this.path;
            this.resourcePath = this.resourcePath || s;
            const a = new pc(this.manager);
            a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t1, function(i) {
                let s = null;
                try {
                    s = JSON.parse(i);
                } catch (e) {
                    return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t1 + ".", e.message);
                }
                const a = s.metadata;
                if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) return void 0 !== n && n(new Error("THREE.ObjectLoader: Can't load " + t1)), void console.error("THREE.ObjectLoader: Can't load " + t1);
                r.parse(s, e);
            }, i, n);
        }
        async loadAsync(t1, e) {
            const i = "" === this.path ? Oc.extractUrlBase(t1) : this.path;
            this.resourcePath = this.resourcePath || i;
            const n = new pc(this.manager);
            n.setPath(this.path), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials);
            const r = await n.loadAsync(t1, e), s = JSON.parse(r), a = s.metadata;
            if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t1);
            return await this.parseAsync(s);
        }
        parse(t1, e) {
            const i = this.parseAnimations(t1.animations), n = this.parseShapes(t1.shapes), r = this.parseGeometries(t1.geometries, n), s = this.parseImages(t1.images, function() {
                void 0 !== e && e(l);
            }), a = this.parseTextures(t1.textures, s), o = this.parseMaterials(t1.materials, a), l = this.parseObject(t1.object, r, o, a, i), c = this.parseSkeletons(t1.skeletons, l);
            if (this.bindSkeletons(l, c), void 0 !== e) {
                let t1 = !1;
                for(const e in s)if (s[e].data instanceof HTMLImageElement) {
                    t1 = !0;
                    break;
                }
                !1 === t1 && e(l);
            }
            return l;
        }
        async parseAsync(t1) {
            const e = this.parseAnimations(t1.animations), i = this.parseShapes(t1.shapes), n = this.parseGeometries(t1.geometries, i), r = await this.parseImagesAsync(t1.images), s = this.parseTextures(t1.textures, r), a = this.parseMaterials(t1.materials, s), o = this.parseObject(t1.object, n, a, s, e), l = this.parseSkeletons(t1.skeletons, o);
            return this.bindSkeletons(o, l), o;
        }
        parseShapes(t1) {
            const e = {};
            if (void 0 !== t1) for(let i = 0, n = t1.length; i < n; i++){
                const n = (new Go).fromJSON(t1[i]);
                e[n.uuid] = n;
            }
            return e;
        }
        parseSkeletons(t1, e) {
            const i = {}, n = {};
            if (e.traverse(function(t1) {
                t1.isBone && (n[t1.uuid] = t1);
            }), void 0 !== t1) for(let e = 0, r = t1.length; e < r; e++){
                const r = (new Da).fromJSON(t1[e], n);
                i[r.uuid] = r;
            }
            return i;
        }
        parseGeometries(t1, e) {
            const i = {};
            if (void 0 !== t1) {
                const n = new Uc;
                for(let r = 0, s = t1.length; r < s; r++){
                    let s;
                    const a = t1[r];
                    switch(a.type){
                        case "BufferGeometry":
                        case "InstancedBufferGeometry":
                            s = n.parse(a);
                            break;
                        default:
                            a.type in Ll ? s = Ll[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);
                    }
                    s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), i[a.uuid] = s;
                }
            }
            return i;
        }
        parseMaterials(t1, e) {
            const i = {}, n = {};
            if (void 0 !== t1) {
                const r = new Nc;
                r.setTextures(e);
                for(let e = 0, s = t1.length; e < s; e++){
                    const s = t1[e];
                    void 0 === i[s.uuid] && (i[s.uuid] = r.parse(s)), n[s.uuid] = i[s.uuid];
                }
            }
            return n;
        }
        parseAnimations(t1) {
            const e = {};
            if (void 0 !== t1) for(let i = 0; i < t1.length; i++){
                const n = t1[i], r = sc.parse(n);
                e[r.uuid] = r;
            }
            return e;
        }
        parseImages(t1, e) {
            const i = this, n = {};
            let r;
            function s(t1) {
                if ("string" == typeof t1) {
                    const e = t1;
                    return function(t1) {
                        return i.manager.itemStart(t1), r.load(t1, function() {
                            i.manager.itemEnd(t1);
                        }, void 0, function() {
                            i.manager.itemError(t1), i.manager.itemEnd(t1);
                        });
                    }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : i.resourcePath + e);
                }
                return t1.data ? {
                    data: Ut(t1.type, t1.data),
                    width: t1.width,
                    height: t1.height
                } : null;
            }
            if (void 0 !== t1 && t1.length > 0) {
                const i = new lc(e);
                r = new mc(i), r.setCrossOrigin(this.crossOrigin);
                for(let e = 0, i = t1.length; e < i; e++){
                    const i = t1[e], r = i.url;
                    if (Array.isArray(r)) {
                        const t1 = [];
                        for(let e = 0, i = r.length; e < i; e++){
                            const i = s(r[e]);
                            null !== i && (i instanceof HTMLImageElement ? t1.push(i) : t1.push(new Ra(i.data, i.width, i.height)));
                        }
                        n[i.uuid] = new $t(t1);
                    } else {
                        const t1 = s(i.url);
                        n[i.uuid] = new $t(t1);
                    }
                }
            }
            return n;
        }
        async parseImagesAsync(t1) {
            const e = this, i = {};
            let n;
            async function r(t1) {
                if ("string" == typeof t1) {
                    const i = t1, r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(i) ? i : e.resourcePath + i;
                    return await n.loadAsync(r);
                }
                return t1.data ? {
                    data: Ut(t1.type, t1.data),
                    width: t1.width,
                    height: t1.height
                } : null;
            }
            if (void 0 !== t1 && t1.length > 0) {
                n = new mc(this.manager), n.setCrossOrigin(this.crossOrigin);
                for(let e = 0, n = t1.length; e < n; e++){
                    const n = t1[e], s = n.url;
                    if (Array.isArray(s)) {
                        const t1 = [];
                        for(let e = 0, i = s.length; e < i; e++){
                            const i = s[e], n = await r(i);
                            null !== n && (n instanceof HTMLImageElement ? t1.push(n) : t1.push(new Ra(n.data, n.width, n.height)));
                        }
                        i[n.uuid] = new $t(t1);
                    } else {
                        const t1 = await r(n.url);
                        i[n.uuid] = new $t(t1);
                    }
                }
            }
            return i;
        }
        parseTextures(t1, e) {
            function i(t1, e) {
                return "number" == typeof t1 ? t1 : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t1), e[t1]);
            }
            const n = {};
            if (void 0 !== t1) for(let r = 0, s = t1.length; r < s; r++){
                const s = t1[r];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const a = e[s.image], o = a.data;
                let l;
                Array.isArray(o) ? (l = new cn, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new Ra : new ee, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = i(s.mapping, Bc)), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = i(s.wrap[0], Fc), l.wrapT = i(s.wrap[1], Fc)), void 0 !== s.format && (l.format = s.format), void 0 !== s.type && (l.type = s.type), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = i(s.minFilter, kc)), void 0 !== s.magFilter && (l.magFilter = i(s.magFilter, kc)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.generateMipmaps && (l.generateMipmaps = s.generateMipmaps), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.userData && (l.userData = s.userData), n[s.uuid] = l;
            }
            return n;
        }
        parseObject(t1, e, i, n, r) {
            let s, a, o;
            function l(t1) {
                return void 0 === e[t1] && console.warn("THREE.ObjectLoader: Undefined geometry", t1), e[t1];
            }
            function c(t1) {
                if (void 0 !== t1) {
                    if (Array.isArray(t1)) {
                        const e = [];
                        for(let n = 0, r = t1.length; n < r; n++){
                            const r = t1[n];
                            void 0 === i[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(i[r]);
                        }
                        return e;
                    }
                    return void 0 === i[t1] && console.warn("THREE.ObjectLoader: Undefined material", t1), i[t1];
                }
            }
            function h(t1) {
                return void 0 === n[t1] && console.warn("THREE.ObjectLoader: Undefined texture", t1), n[t1];
            }
            switch(t1.type){
                case "Scene":
                    s = new ta, void 0 !== t1.background && (Number.isInteger(t1.background) ? s.background = new Zt(t1.background) : s.background = h(t1.background)), void 0 !== t1.environment && (s.environment = h(t1.environment)), void 0 !== t1.fog && ("Fog" === t1.fog.type ? s.fog = new Qs(t1.fog.color, t1.fog.near, t1.fog.far) : "FogExp2" === t1.fog.type && (s.fog = new $s(t1.fog.color, t1.fog.density))), void 0 !== t1.backgroundBlurriness && (s.backgroundBlurriness = t1.backgroundBlurriness), void 0 !== t1.backgroundIntensity && (s.backgroundIntensity = t1.backgroundIntensity);
                    break;
                case "PerspectiveCamera":
                    s = new an(t1.fov, t1.aspect, t1.near, t1.far), void 0 !== t1.focus && (s.focus = t1.focus), void 0 !== t1.zoom && (s.zoom = t1.zoom), void 0 !== t1.filmGauge && (s.filmGauge = t1.filmGauge), void 0 !== t1.filmOffset && (s.filmOffset = t1.filmOffset), void 0 !== t1.view && (s.view = Object.assign({}, t1.view));
                    break;
                case "OrthographicCamera":
                    s = new Pn(t1.left, t1.right, t1.top, t1.bottom, t1.near, t1.far), void 0 !== t1.zoom && (s.zoom = t1.zoom), void 0 !== t1.view && (s.view = Object.assign({}, t1.view));
                    break;
                case "AmbientLight":
                    s = new Rc(t1.color, t1.intensity);
                    break;
                case "DirectionalLight":
                    s = new Lc(t1.color, t1.intensity);
                    break;
                case "PointLight":
                    s = new Ec(t1.color, t1.intensity, t1.distance, t1.decay);
                    break;
                case "RectAreaLight":
                    s = new Pc(t1.color, t1.intensity, t1.width, t1.height);
                    break;
                case "SpotLight":
                    s = new bc(t1.color, t1.intensity, t1.distance, t1.angle, t1.penumbra, t1.decay);
                    break;
                case "HemisphereLight":
                    s = new gc(t1.color, t1.groundColor, t1.intensity);
                    break;
                case "LightProbe":
                    s = (new Dc).fromJSON(t1);
                    break;
                case "SkinnedMesh":
                    a = l(t1.geometry), o = c(t1.material), s = new Ca(a, o), void 0 !== t1.bindMode && (s.bindMode = t1.bindMode), void 0 !== t1.bindMatrix && s.bindMatrix.fromArray(t1.bindMatrix), void 0 !== t1.skeleton && (s.skeleton = t1.skeleton);
                    break;
                case "Mesh":
                    a = l(t1.geometry), o = c(t1.material), s = new Ji(a, o);
                    break;
                case "InstancedMesh":
                    a = l(t1.geometry), o = c(t1.material);
                    const e1 = t1.count, i1 = t1.instanceMatrix, n1 = t1.instanceColor;
                    s = new ka(a, o, e1), s.instanceMatrix = new Na(new Float32Array(i1.array), 16), void 0 !== n1 && (s.instanceColor = new Na(new Float32Array(n1.array), n1.itemSize));
                    break;
                case "LOD":
                    s = new ba;
                    break;
                case "Line":
                    s = new Xa(l(t1.geometry), c(t1.material));
                    break;
                case "LineLoop":
                    s = new Ka(l(t1.geometry), c(t1.material));
                    break;
                case "LineSegments":
                    s = new Ja(l(t1.geometry), c(t1.material));
                    break;
                case "PointCloud":
                case "Points":
                    s = new no(l(t1.geometry), c(t1.material));
                    break;
                case "Sprite":
                    s = new xa(c(t1.material));
                    break;
                case "Group":
                    s = new Hs;
                    break;
                case "Bone":
                    s = new La;
                    break;
                default:
                    s = new li;
            }
            if (s.uuid = t1.uuid, void 0 !== t1.name && (s.name = t1.name), void 0 !== t1.matrix ? (s.matrix.fromArray(t1.matrix), void 0 !== t1.matrixAutoUpdate && (s.matrixAutoUpdate = t1.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t1.position && s.position.fromArray(t1.position), void 0 !== t1.rotation && s.rotation.fromArray(t1.rotation), void 0 !== t1.quaternion && s.quaternion.fromArray(t1.quaternion), void 0 !== t1.scale && s.scale.fromArray(t1.scale)), void 0 !== t1.castShadow && (s.castShadow = t1.castShadow), void 0 !== t1.receiveShadow && (s.receiveShadow = t1.receiveShadow), t1.shadow && (void 0 !== t1.shadow.bias && (s.shadow.bias = t1.shadow.bias), void 0 !== t1.shadow.normalBias && (s.shadow.normalBias = t1.shadow.normalBias), void 0 !== t1.shadow.radius && (s.shadow.radius = t1.shadow.radius), void 0 !== t1.shadow.mapSize && s.shadow.mapSize.fromArray(t1.shadow.mapSize), void 0 !== t1.shadow.camera && (s.shadow.camera = this.parseObject(t1.shadow.camera))), void 0 !== t1.visible && (s.visible = t1.visible), void 0 !== t1.frustumCulled && (s.frustumCulled = t1.frustumCulled), void 0 !== t1.renderOrder && (s.renderOrder = t1.renderOrder), void 0 !== t1.userData && (s.userData = t1.userData), void 0 !== t1.layers && (s.layers.mask = t1.layers), void 0 !== t1.children) {
                const a = t1.children;
                for(let t1 = 0; t1 < a.length; t1++)s.add(this.parseObject(a[t1], e, i, n, r));
            }
            if (void 0 !== t1.animations) {
                const e = t1.animations;
                for(let t1 = 0; t1 < e.length; t1++){
                    const i = e[t1];
                    s.animations.push(r[i]);
                }
            }
            if ("LOD" === t1.type) {
                void 0 !== t1.autoUpdate && (s.autoUpdate = t1.autoUpdate);
                const e = t1.levels;
                for(let t1 = 0; t1 < e.length; t1++){
                    const i = e[t1], n = s.getObjectByProperty("uuid", i.object);
                    void 0 !== n && s.addLevel(n, i.distance, i.hysteresis);
                }
            }
            return s;
        }
        bindSkeletons(t1, e) {
            0 !== Object.keys(e).length && t1.traverse(function(t1) {
                if (!0 === t1.isSkinnedMesh && void 0 !== t1.skeleton) {
                    const i = e[t1.skeleton];
                    void 0 === i ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t1.skeleton) : t1.bind(i, t1.bindMatrix);
                }
            });
        }
    }, t1.ObjectSpaceNormalMap = 1, t1.OctahedronBufferGeometry = class extends _l {
        constructor(t1, e){
            console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."), super(t1, e);
        }
    }, t1.OctahedronGeometry = _l, t1.OneFactor = 201, t1.OneMinusDstAlphaFactor = 207, t1.OneMinusDstColorFactor = 209, t1.OneMinusSrcAlphaFactor = 205, t1.OneMinusSrcColorFactor = 203, t1.OrthographicCamera = Pn, t1.PCFShadowMap = 1, t1.PCFSoftShadowMap = 2, t1.PMREMGenerator = kn, t1.Path = Co, t1.PerspectiveCamera = an, t1.Plane = mn, t1.PlaneBufferGeometry = class extends yn {
        constructor(t1, e, i, n){
            console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."), super(t1, e, i, n);
        }
    }, t1.PlaneGeometry = yn, t1.PlaneHelper = class extends Xa {
        constructor(t1, e = 1, i = 16776960){
            const n = i, r = new zi;
            r.setAttribute("position", new Ci([
                1,
                -1,
                0,
                -1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                1,
                0,
                -1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                -1,
                0,
                1,
                1,
                0
            ], 3)), r.computeBoundingSphere(), super(r, new Ga({
                color: n,
                toneMapped: !1
            })), this.type = "PlaneHelper", this.plane = t1, this.size = e;
            const s = new zi;
            s.setAttribute("position", new Ci([
                1,
                1,
                0,
                -1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                -1,
                0
            ], 3)), s.computeBoundingSphere(), this.add(new Ji(s, new bi({
                color: n,
                opacity: .2,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !1
            })));
        }
        updateMatrixWorld(t1) {
            this.position.set(0, 0, 0), this.scale.set(.5 * this.size, .5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(t1);
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
    }, t1.PointLight = Ec, t1.PointLightHelper = class extends Ji {
        constructor(t1, e, i){
            super(new bl(e, 4, 2), new bi({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            })), this.light = t1, this.color = i, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
        update() {
            this.light.updateWorldMatrix(!0, !1), void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
        }
    }, t1.Points = no, t1.PointsMaterial = $a, t1.PolarGridHelper = class extends Ja {
        constructor(t1 = 10, e = 16, i = 8, n = 64, r = 4473924, s = 8947848){
            r = new Zt(r), s = new Zt(s);
            const a = [], o = [];
            if (e > 1) for(let i = 0; i < e; i++){
                const n = i / e * (2 * Math.PI), l = Math.sin(n) * t1, c = Math.cos(n) * t1;
                a.push(0, 0, 0), a.push(l, 0, c);
                const h = 1 & i ? r : s;
                o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
            }
            for(let e = 0; e < i; e++){
                const l = 1 & e ? r : s, c = t1 - t1 / i * e;
                for(let t1 = 0; t1 < n; t1++){
                    let e = t1 / n * (2 * Math.PI), i = Math.sin(e) * c, r = Math.cos(e) * c;
                    a.push(i, 0, r), o.push(l.r, l.g, l.b), e = (t1 + 1) / n * (2 * Math.PI), i = Math.sin(e) * c, r = Math.cos(e) * c, a.push(i, 0, r), o.push(l.r, l.g, l.b);
                }
            }
            const l = new zi;
            l.setAttribute("position", new Ci(a, 3)), l.setAttribute("color", new Ci(o, 3));
            super(l, new Ga({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "PolarGridHelper";
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.PolyhedronBufferGeometry = class extends No {
        constructor(t1, e, i, n){
            console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."), super(t1, e, i, n);
        }
    }, t1.PolyhedronGeometry = No, t1.PositionalAudio = class extends $c {
        constructor(t1){
            super(t1), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
        }
        disconnect() {
            super.disconnect(), this.panner.disconnect(this.gain);
        }
        getOutput() {
            return this.panner;
        }
        getRefDistance() {
            return this.panner.refDistance;
        }
        setRefDistance(t1) {
            return this.panner.refDistance = t1, this;
        }
        getRolloffFactor() {
            return this.panner.rolloffFactor;
        }
        setRolloffFactor(t1) {
            return this.panner.rolloffFactor = t1, this;
        }
        getDistanceModel() {
            return this.panner.distanceModel;
        }
        setDistanceModel(t1) {
            return this.panner.distanceModel = t1, this;
        }
        getMaxDistance() {
            return this.panner.maxDistance;
        }
        setMaxDistance(t1) {
            return this.panner.maxDistance = t1, this;
        }
        setDirectionalCone(t1, e, i) {
            return this.panner.coneInnerAngle = t1, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this;
        }
        updateMatrixWorld(t1) {
            if (super.updateMatrixWorld(t1), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
            this.matrixWorld.decompose(Qc, th, eh), ih.set(0, 0, 1).applyQuaternion(th);
            const e = this.panner;
            if (e.positionX) {
                const t1 = this.context.currentTime + this.listener.timeDelta;
                e.positionX.linearRampToValueAtTime(Qc.x, t1), e.positionY.linearRampToValueAtTime(Qc.y, t1), e.positionZ.linearRampToValueAtTime(Qc.z, t1), e.orientationX.linearRampToValueAtTime(ih.x, t1), e.orientationY.linearRampToValueAtTime(ih.y, t1), e.orientationZ.linearRampToValueAtTime(ih.z, t1);
            } else e.setPosition(Qc.x, Qc.y, Qc.z), e.setOrientation(ih.x, ih.y, ih.z);
        }
    }, t1.PropertyBinding = hh, t1.PropertyMixer = nh, t1.QuadraticBezierCurve = So, t1.QuadraticBezierCurve3 = wo, t1.Quaternion = ae, t1.QuaternionKeyframeTrack = ic, t1.QuaternionLinearInterpolant = ec, t1.RED_GREEN_RGTC2_Format = Q, t1.RED_RGTC1_Format = 36283, t1.REVISION = e, t1.RGBADepthPacking = 3201, t1.RGBAFormat = w, t1.RGBAIntegerFormat = 1033, t1.RGBA_ASTC_10x10_Format = Y, t1.RGBA_ASTC_10x5_Format = j, t1.RGBA_ASTC_10x6_Format = q, t1.RGBA_ASTC_10x8_Format = X, t1.RGBA_ASTC_12x10_Format = Z, t1.RGBA_ASTC_12x12_Format = J, t1.RGBA_ASTC_4x4_Format = U, t1.RGBA_ASTC_5x4_Format = B, t1.RGBA_ASTC_5x5_Format = F, t1.RGBA_ASTC_6x5_Format = k, t1.RGBA_ASTC_6x6_Format = G, t1.RGBA_ASTC_8x5_Format = V, t1.RGBA_ASTC_8x6_Format = H, t1.RGBA_ASTC_8x8_Format = W, t1.RGBA_BPTC_Format = K, t1.RGBA_ETC2_EAC_Format = z, t1.RGBA_PVRTC_2BPPV1_Format = N, t1.RGBA_PVRTC_4BPPV1_Format = D, t1.RGBA_S3TC_DXT1_Format = C, t1.RGBA_S3TC_DXT3_Format = L, t1.RGBA_S3TC_DXT5_Format = R, t1.RGB_ETC1_Format = 36196, t1.RGB_ETC2_Format = O, t1.RGB_PVRTC_2BPPV1_Format = I, t1.RGB_PVRTC_4BPPV1_Format = P, t1.RGB_S3TC_DXT1_Format = E, t1.RGFormat = 1030, t1.RGIntegerFormat = 1031, t1.RawShaderMaterial = Pl, t1.Ray = ze, t1.Raycaster = class {
        constructor(t1, e, i = 0, n = 1 / 0){
            this.ray = new ze(t1, e), this.near = i, this.far = n, this.camera = null, this.layers = new Ye, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            };
        }
        set(t1, e) {
            this.ray.set(t1, e);
        }
        setFromCamera(t1, e) {
            e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t1.x, t1.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t1.x, t1.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
        }
        intersectObject(t1, e = !0, i = []) {
            return gh(t1, this, i, e), i.sort(fh), i;
        }
        intersectObjects(t1, e = !0, i = []) {
            for(let n = 0, r = t1.length; n < r; n++)gh(t1[n], this, i, e);
            return i.sort(fh), i;
        }
    }, t1.RectAreaLight = Pc, t1.RedFormat = 1028, t1.RedIntegerFormat = 1029, t1.ReinhardToneMapping = 2, t1.RepeatWrapping = c, t1.ReplaceStencilOp = 7681, t1.ReverseSubtractEquation = 102, t1.RingBufferGeometry = class extends yl {
        constructor(t1, e, i, n, r, s){
            console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."), super(t1, e, i, n, r, s);
        }
    }, t1.RingGeometry = yl, t1.SIGNED_RED_GREEN_RGTC2_Format = tt, t1.SIGNED_RED_RGTC1_Format = $, t1.SRGBColorSpace = ut, t1.Scene = ta, t1.ShaderChunk = Mn, t1.ShaderLib = Sn, t1.ShaderMaterial = rn, t1.ShadowMaterial = Rl, t1.Shape = Go, t1.ShapeBufferGeometry = class extends Ml {
        constructor(t1, e){
            console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."), super(t1, e);
        }
    }, t1.ShapeGeometry = Ml, t1.ShapePath = class {
        constructor(){
            this.type = "ShapePath", this.color = new Zt, this.subPaths = [], this.currentPath = null;
        }
        moveTo(t1, e) {
            return this.currentPath = new Co, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t1, e), this;
        }
        lineTo(t1, e) {
            return this.currentPath.lineTo(t1, e), this;
        }
        quadraticCurveTo(t1, e, i, n) {
            return this.currentPath.quadraticCurveTo(t1, e, i, n), this;
        }
        bezierCurveTo(t1, e, i, n, r, s) {
            return this.currentPath.bezierCurveTo(t1, e, i, n, r, s), this;
        }
        splineThru(t1) {
            return this.currentPath.splineThru(t1), this;
        }
        toShapes(t1) {
            function e(t1, e) {
                const i = e.length;
                let n = !1;
                for(let r = i - 1, s = 0; s < i; r = s++){
                    let i = e[r], a = e[s], o = a.x - i.x, l = a.y - i.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (i = e[s], o = -o, a = e[r], l = -l), t1.y < i.y || t1.y > a.y) continue;
                        if (t1.y === i.y) {
                            if (t1.x === i.x) return !0;
                        } else {
                            const e = l * (t1.x - i.x) - o * (t1.y - i.y);
                            if (0 === e) return !0;
                            if (e < 0) continue;
                            n = !n;
                        }
                    } else {
                        if (t1.y !== i.y) continue;
                        if (a.x <= t1.x && t1.x <= i.x || i.x <= t1.x && t1.x <= a.x) return !0;
                    }
                }
                return n;
            }
            const i = pl.isClockWise, n = this.subPaths;
            if (0 === n.length) return [];
            let r, s, a;
            const o = [];
            if (1 === n.length) return s = n[0], a = new Go, a.curves = s.curves, o.push(a), o;
            let l = !i(n[0].getPoints());
            l = t1 ? !l : l;
            const c = [], h = [];
            let u, d, p = [], m = 0;
            h[m] = void 0, p[m] = [];
            for(let e = 0, a = n.length; e < a; e++)s = n[e], u = s.getPoints(), r = i(u), r = t1 ? !r : r, r ? (!l && h[m] && m++, h[m] = {
                s: new Go,
                p: u
            }, h[m].s.curves = s.curves, l && m++, p[m] = []) : p[m].push({
                h: s,
                p: u[0]
            });
            if (!h[0]) return function(t1) {
                const e = [];
                for(let i = 0, n = t1.length; i < n; i++){
                    const n = t1[i], r = new Go;
                    r.curves = n.curves, e.push(r);
                }
                return e;
            }(n);
            if (h.length > 1) {
                let t1 = !1, i = 0;
                for(let t1 = 0, e = h.length; t1 < e; t1++)c[t1] = [];
                for(let n = 0, r = h.length; n < r; n++){
                    const r = p[n];
                    for(let s = 0; s < r.length; s++){
                        const a = r[s];
                        let o = !0;
                        for(let r = 0; r < h.length; r++)e(a.p, h[r].p) && (n !== r && i++, o ? (o = !1, c[r].push(a)) : t1 = !0);
                        o && c[n].push(a);
                    }
                }
                i > 0 && !1 === t1 && (p = c);
            }
            for(let t1 = 0, e = h.length; t1 < e; t1++){
                a = h[t1].s, o.push(a), d = p[t1];
                for(let t1 = 0, e = d.length; t1 < e; t1++)a.holes.push(d[t1].h);
            }
            return o;
        }
    }, t1.ShapeUtils = pl, t1.ShortType = 1011, t1.Skeleton = Da, t1.SkeletonHelper = class extends Ja {
        constructor(t1){
            const e = wh(t1), i = new zi, n = [], r = [], s = new Zt(0, 0, 1), a = new Zt(0, 1, 0);
            for(let t1 = 0; t1 < e.length; t1++){
                const i = e[t1];
                i.parent && i.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
            }
            i.setAttribute("position", new Ci(n, 3)), i.setAttribute("color", new Ci(r, 3));
            super(i, new Ga({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t1, this.bones = e, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1;
        }
        updateMatrixWorld(t1) {
            const e = this.bones, i = this.geometry, n = i.getAttribute("position");
            Sh.copy(this.root.matrixWorld).invert();
            for(let t1 = 0, i = 0; t1 < e.length; t1++){
                const r = e[t1];
                r.parent && r.parent.isBone && (bh.multiplyMatrices(Sh, r.matrixWorld), Mh.setFromMatrixPosition(bh), n.setXYZ(i, Mh.x, Mh.y, Mh.z), bh.multiplyMatrices(Sh, r.parent.matrixWorld), Mh.setFromMatrixPosition(bh), n.setXYZ(i + 1, Mh.x, Mh.y, Mh.z), i += 2);
            }
            i.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t1);
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.SkinnedMesh = Ca, t1.Source = $t, t1.Sphere = Ce, t1.SphereBufferGeometry = class extends bl {
        constructor(t1, e, i, n, r, s, a){
            console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."), super(t1, e, i, n, r, s, a);
        }
    }, t1.SphereGeometry = bl, t1.Spherical = class {
        constructor(t1 = 1, e = 0, i = 0){
            return this.radius = t1, this.phi = e, this.theta = i, this;
        }
        set(t1, e, i) {
            return this.radius = t1, this.phi = e, this.theta = i, this;
        }
        copy(t1) {
            return this.radius = t1.radius, this.phi = t1.phi, this.theta = t1.theta, this;
        }
        makeSafe() {
            const t1 = 1e-6;
            return this.phi = Math.max(t1, Math.min(Math.PI - t1, this.phi)), this;
        }
        setFromVector3(t1) {
            return this.setFromCartesianCoords(t1.x, t1.y, t1.z);
        }
        setFromCartesianCoords(t1, e, i) {
            return this.radius = Math.sqrt(t1 * t1 + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t1, i), this.phi = Math.acos(St(e / this.radius, -1, 1))), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.SphericalHarmonics3 = Ic, t1.SplineCurve = To, t1.SpotLight = bc, t1.SpotLightHelper = class extends li {
        constructor(t1, e){
            super(), this.light = t1, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = e, this.type = "SpotLightHelper";
            const i = new zi, n = [
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                -1,
                1
            ];
            for(let t1 = 0, e = 1, i = 32; t1 < i; t1++, e++){
                const r = t1 / i * Math.PI * 2, s = e / i * Math.PI * 2;
                n.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
            }
            i.setAttribute("position", new Ci(n, 3));
            const r = new Ga({
                fog: !1,
                toneMapped: !1
            });
            this.cone = new Ja(i, r), this.add(this.cone), this.update();
        }
        dispose() {
            this.cone.geometry.dispose(), this.cone.material.dispose();
        }
        update() {
            this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1);
            const t1 = this.light.distance ? this.light.distance : 1e3, e = t1 * Math.tan(this.light.angle);
            this.cone.scale.set(e, e, t1), yh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(yh), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
        }
    }, t1.Sprite = xa, t1.SpriteMaterial = ra, t1.SrcAlphaFactor = 204, t1.SrcAlphaSaturateFactor = 210, t1.SrcColorFactor = 202, t1.StaticCopyUsage = 35046, t1.StaticDrawUsage = mt, t1.StaticReadUsage = 35045, t1.StereoCamera = class {
        constructor(){
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new an, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new an, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                focus: null,
                fov: null,
                aspect: null,
                near: null,
                far: null,
                zoom: null,
                eyeSep: null
            };
        }
        update(t1) {
            const e = this._cache;
            if (e.focus !== t1.focus || e.fov !== t1.fov || e.aspect !== t1.aspect * this.aspect || e.near !== t1.near || e.far !== t1.far || e.zoom !== t1.zoom || e.eyeSep !== this.eyeSep) {
                e.focus = t1.focus, e.fov = t1.fov, e.aspect = t1.aspect * this.aspect, e.near = t1.near, e.far = t1.far, e.zoom = t1.zoom, e.eyeSep = this.eyeSep, jc.copy(t1.projectionMatrix);
                const i = e.eyeSep / 2, n = i * e.near / e.focus, r = e.near * Math.tan(yt * e.fov * .5) / e.zoom;
                let s, a;
                Wc.elements[12] = -i, Hc.elements[12] = i, s = -r * e.aspect + n, a = r * e.aspect + n, jc.elements[0] = 2 * e.near / (a - s), jc.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(jc), s = -r * e.aspect - n, a = r * e.aspect - n, jc.elements[0] = 2 * e.near / (a - s), jc.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(jc);
            }
            this.cameraL.matrixWorld.copy(t1.matrixWorld).multiply(Wc), this.cameraR.matrixWorld.copy(t1.matrixWorld).multiply(Hc);
        }
    }, t1.StreamCopyUsage = 35042, t1.StreamDrawUsage = 35040, t1.StreamReadUsage = 35041, t1.StringKeyframeTrack = nc, t1.SubtractEquation = 101, t1.SubtractiveBlending = 3, t1.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }, t1.TangentSpaceNormalMap = 0, t1.TetrahedronBufferGeometry = class extends Sl {
        constructor(t1, e){
            console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."), super(t1, e);
        }
    }, t1.TetrahedronGeometry = Sl, t1.Texture = ee, t1.TextureLoader = class extends hc {
        constructor(t1){
            super(t1);
        }
        load(t1, e, i, n) {
            const r = new ee, s = new mc(this.manager);
            return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t1, function(t1) {
                r.image = t1, r.needsUpdate = !0, void 0 !== e && e(r);
            }, i, n), r;
        }
    }, t1.TorusBufferGeometry = class extends wl {
        constructor(t1, e, i, n, r){
            console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."), super(t1, e, i, n, r);
        }
    }, t1.TorusGeometry = wl, t1.TorusKnotBufferGeometry = class extends Tl {
        constructor(t1, e, i, n, r, s){
            console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."), super(t1, e, i, n, r, s);
        }
    }, t1.TorusKnotGeometry = Tl, t1.Triangle = _i, t1.TriangleFanDrawMode = 2, t1.TriangleStripDrawMode = 1, t1.TrianglesDrawMode = 0, t1.TubeBufferGeometry = class extends Al {
        constructor(t1, e, i, n, r){
            console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."), super(t1, e, i, n, r);
        }
    }, t1.TubeGeometry = Al, t1.TwoPassDoubleSide = 2, t1.UVMapping = n, t1.Uint16BufferAttribute = Ai, t1.Uint32BufferAttribute = Ei, t1.Uint8BufferAttribute = class extends Ti {
        constructor(t1, e, i){
            super(new Uint8Array(t1), e, i);
        }
    }, t1.Uint8ClampedBufferAttribute = class extends Ti {
        constructor(t1, e, i){
            super(new Uint8ClampedArray(t1), e, i);
        }
    }, t1.Uniform = ph, t1.UniformsGroup = class extends vt {
        constructor(){
            super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", {
                value: mh++
            }), this.name = "", this.usage = mt, this.uniforms = [];
        }
        add(t1) {
            return this.uniforms.push(t1), this;
        }
        remove(t1) {
            const e = this.uniforms.indexOf(t1);
            return -1 !== e && this.uniforms.splice(e, 1), this;
        }
        setName(t1) {
            return this.name = t1, this;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        dispose() {
            return this.dispatchEvent({
                type: "dispose"
            }), this;
        }
        copy(t1) {
            this.name = t1.name, this.usage = t1.usage;
            const e = t1.uniforms;
            this.uniforms.length = 0;
            for(let t1 = 0, i = e.length; t1 < i; t1++)this.uniforms.push(e[t1].clone());
            return this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.UniformsLib = bn, t1.UniformsUtils = nn, t1.UnsignedByteType = x, t1.UnsignedInt248Type = S, t1.UnsignedIntType = y, t1.UnsignedShort4444Type = 1017, t1.UnsignedShort5551Type = 1018, t1.UnsignedShortType = _, t1.VSMShadowMap = 3, t1.Vector2 = It, t1.Vector3 = oe, t1.Vector4 = ie, t1.VectorKeyframeTrack = rc, t1.VideoTexture = class extends ee {
        constructor(t1, e, i, n, r, s, a, o, l){
            super(t1, e, i, n, r, s, a, o, l), this.isVideoTexture = !0, this.minFilter = void 0 !== s ? s : f, this.magFilter = void 0 !== r ? r : f, this.generateMipmaps = !1;
            const c = this;
            "requestVideoFrameCallback" in t1 && t1.requestVideoFrameCallback(function e() {
                c.needsUpdate = !0, t1.requestVideoFrameCallback(e);
            });
        }
        clone() {
            return new this.constructor(this.image).copy(this);
        }
        update() {
            const t1 = this.image;
            !1 === "requestVideoFrameCallback" in t1 && t1.readyState >= t1.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    }, t1.WebGL1Renderer = Ks, t1.WebGL3DRenderTarget = class extends ne {
        constructor(t1 = 1, e = 1, i = 1){
            super(t1, e), this.isWebGL3DRenderTarget = !0, this.depth = i, this.texture = new se(null, t1, e, i), this.texture.isRenderTargetTexture = !0;
        }
    }, t1.WebGLArrayRenderTarget = class extends ne {
        constructor(t1 = 1, e = 1, i = 1){
            super(t1, e), this.isWebGLArrayRenderTarget = !0, this.depth = i, this.texture = new re(null, t1, e, i), this.texture.isRenderTargetTexture = !0;
        }
    }, t1.WebGLCubeRenderTarget = hn, t1.WebGLMultipleRenderTargets = class extends ne {
        constructor(t1 = 1, e = 1, i = 1, n = {}){
            super(t1, e, n), this.isWebGLMultipleRenderTargets = !0;
            const r = this.texture;
            this.texture = [];
            for(let t1 = 0; t1 < i; t1++)this.texture[t1] = r.clone(), this.texture[t1].isRenderTargetTexture = !0;
        }
        setSize(t1, e, i = 1) {
            if (this.width !== t1 || this.height !== e || this.depth !== i) {
                this.width = t1, this.height = e, this.depth = i;
                for(let n = 0, r = this.texture.length; n < r; n++)this.texture[n].image.width = t1, this.texture[n].image.height = e, this.texture[n].image.depth = i;
                this.dispose();
            }
            return this.viewport.set(0, 0, t1, e), this.scissor.set(0, 0, t1, e), this;
        }
        copy(t1) {
            this.dispose(), this.width = t1.width, this.height = t1.height, this.depth = t1.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t1.depthBuffer, this.stencilBuffer = t1.stencilBuffer, null !== t1.depthTexture && (this.depthTexture = t1.depthTexture.clone()), this.texture.length = 0;
            for(let e = 0, i = t1.texture.length; e < i; e++)this.texture[e] = t1.texture[e].clone(), this.texture[e].isRenderTargetTexture = !0;
            return this;
        }
    }, t1.WebGLRenderTarget = ne, t1.WebGLRenderer = Js, t1.WebGLUtils = Gs, t1.WireframeGeometry = El, t1.WrapAroundEnding = at, t1.ZeroCurvatureEnding = rt, t1.ZeroFactor = 200, t1.ZeroSlopeEnding = st, t1.ZeroStencilOp = 0, t1._SRGBAFormat = gt, t1.sRGBEncoding = ht;
});

//# sourceMappingURL=index.04ed2cce.js.map
