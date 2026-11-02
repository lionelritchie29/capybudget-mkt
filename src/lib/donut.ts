/**
 * SVG paths for a donut like the app's recharts Pie: innerRadius 62%, outerRadius 100%,
 * paddingAngle 1°, starting at 12 o'clock and running clockwise.
 */
export function donutSlices<T extends { amount: number }>(
  items: T[],
  { size = 100, inner = 0.62, padding = 1 }: { size?: number; inner?: number; padding?: number } = {}
): (T & { d: string; share: number })[] {
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  const r = size / 2;
  const ri = r * inner;
  const pad = items.length > 1 ? padding : 0;
  const point = (radius: number, deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return `${(r + radius * Math.cos(rad)).toFixed(3)} ${(r + radius * Math.sin(rad)).toFixed(3)}`;
  };
  let angle = 0;
  return items.map((item) => {
    const sweep = (item.amount / total) * 360;
    const start = angle + pad / 2;
    const end = angle + sweep - pad / 2;
    angle += sweep;
    const large = end - start > 180 ? 1 : 0;
    const d = [
      `M ${point(r, start)}`,
      `A ${r} ${r} 0 ${large} 1 ${point(r, end)}`,
      `L ${point(ri, end)}`,
      `A ${ri} ${ri} 0 ${large} 0 ${point(ri, start)}`,
      'Z',
    ].join(' ');
    return { ...item, d, share: item.amount / total };
  });
}

/** The app's percent format: always one decimal. */
export const formatShare = (share: number) => `${(share * 100).toFixed(1)}%`;
