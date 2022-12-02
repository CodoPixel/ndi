/**
 * Gets a random integer
 * @param min The minimum number, inclusive
 * @param max The maximum number, inclusive
 * @returns A random integer in [min;max]
 */
export default function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}