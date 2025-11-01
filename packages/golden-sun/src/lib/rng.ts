import { xorshift128plus } from 'pure-rand';
export function makeRng(seed: string) {
  let s = 0; for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  let rng = xorshift128plus(s >>> 0);
  return {
    int(min: number, max: number) { const [n, next] = rng.next(); rng = next; return min + (n % (max - min + 1)); }
  };
}
