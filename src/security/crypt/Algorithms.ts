/*!
 * JavaScript BigInteger
 * https://github.com/modern-dev/jsbn
 *
 * Copyright (c) 2019 Bohdan Shtepan
 * Licensed under a BSD license.
 *
 * Original copyright
 * Copyright (c) 2003-2005 Tom Wu
 * All Rights Reserved.
 */

import BigInteger from "./BigInteger";

export interface IAlgorithm {
  convert(x: BigInteger): BigInteger;

  revert(x: BigInteger): BigInteger;

  reduce(x: BigInteger): void;

  mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void;

  sqrTo(x: BigInteger, r: BigInteger): void;
}

// Modular reduction using "classic" algorithm
export class Classic implements IAlgorithm {
  public m: BigInteger;

  constructor(m: BigInteger) {
    this.m = m;
  }

  convert(x: BigInteger): BigInteger {
    if (x.s < 0 || x.compareTo(this.m) >= 0) {
      return x.mod(this.m);
    }

    return x;
  }

  revert(x: BigInteger): BigInteger {
    return x;
  }

  reduce(x: BigInteger): void {
    x.divRemTo(this.m, null, x);
  }

  mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void {
    x.multiplyTo(y, r);

    this.reduce(r);
  }

  sqrTo(x: BigInteger, r: BigInteger): void {
    x.squareTo(r);

    this.reduce(r);
  }
}

// Barrett modular reduction
export class Barrett implements IAlgorithm {
  m: BigInteger;
  r2: BigInteger;
  q3: BigInteger;
  mu: BigInteger;

  constructor(m: BigInteger) {
    // setup Barrett
    this.r2 = new BigInteger(null);
    this.q3 = new BigInteger(null);
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
  }

  convert(x: BigInteger): BigInteger {
    if (x.s < 0 || x.t > 2 * this.m.t) {
      return x.mod(this.m);
    } else if (x.compareTo(this.m) < 0) {
      return x;
    } else {
      const r = new BigInteger(null);
      x.copyTo(r);
      this.reduce(r);
      return r;
    }
  }

  revert(x: BigInteger): BigInteger {
    return x;
  }

  // x = x mod m (HAC 14.42)
  reduce(x: BigInteger): void {
    x.drShiftTo(this.m.t - 1, this.r2);

    if (x.t > this.m.t + 1) {
      x.t = this.m.t + 1;
      x.clamp();
    }

    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);

    while (x.compareTo(this.r2) < 0) {
      x.dAddOffset(1, this.m.t + 1);
    }

    x.subTo(this.r2, x);

    while (x.compareTo(this.m) >= 0) {
      x.subTo(this.m, x);
    }
  }

  // r = x^2 mod m; x != r
  sqrTo(x: BigInteger, r: BigInteger): void {
    x.squareTo(r);
    this.reduce(r);
  }

  // r = x*y mod m; x,y != r
  mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
}

// Montgomery reduction
export class Montgomery implements IAlgorithm {
  m: BigInteger;
  mp: number;
  mpl: number;
  mph: number;
  um: number;
  mt2: number;

  constructor(m: BigInteger) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << (m.DB - 15)) - 1;
    this.mt2 = 2 * m.t;
  }

  // xR mod m
  convert(x: BigInteger): BigInteger {
    const r = new BigInteger(null);

    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);

    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
      this.m.subTo(r, r);
    }

    return r;
  }

  // x/R mod m
  revert(x: BigInteger): BigInteger {
    const r = new BigInteger(null);

    x.copyTo(r);
    this.reduce(r);

    return r;
  }

  // x = x/R mod m (HAC 14.32)
  reduce(x: BigInteger): void {
    while (x.t <= this.mt2) {
      // pad x so am has enough room later
      x[x.t++] = 0;
    }

    for (let i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      let j = x[i] & 0x7fff;
      const u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;

      // use am to combine the multiply-shift-add into one call
      j = i + this.m.t;
      x[j] += this.m.am(0, u0, x, i, 0, this.m.t);

      // propagate carry
      while (x[j] >= x.DV) {
        x[j] -= x.DV;
        x[++j]++;
      }
    }

    x.clamp();
    x.drShiftTo(this.m.t, x);

    if (x.compareTo(this.m) >= 0) {
      x.subTo(this.m, x);
    }
  }

  // r = "x^2/R mod m"; x != r
  sqrTo(x: BigInteger, r: BigInteger): void {
    x.squareTo(r);
    this.reduce(r);
  }

  // r = "xy/R mod m"; x,y != r
  mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
}

// A "null" reducer
export class NullExp implements IAlgorithm {
  convert(x: BigInteger): BigInteger {
    return x;
  }

  revert(x: BigInteger): BigInteger {
    return x;
  }

  mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void {
    x.multiplyTo(y, r);
  }

  sqrTo(x: BigInteger, r: BigInteger) {
    x.squareTo(r);
  }

  /* eslint-disable no-unused-vars */
  reduce(x: BigInteger): void {
    /* eslint-enable no-unused-vars */
  }
}
