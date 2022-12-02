export default function getDeepCopyOf(val:any) {
  return JSON.parse(JSON.stringify(val));
}