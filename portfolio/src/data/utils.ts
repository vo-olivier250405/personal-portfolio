const minRadius: number = 7.5;
const maxRadius: number = 15;

const depth: number = 2;
const leftColor: string = "F79A00";
const rightColor: string = "FD12D1";

const numPoints: number = 2500;
let position: [x: number, y: number, z: number];
const getGrandientStop = (ratio: number) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = leftColor
    .match(/.{1,2}/g)
    ?.map((oct) => parseInt(oct, 16) * ratio);

  const c1 = rightColor
    .match(/.{1,2}/g)
    ?.map((oct) => parseInt(oct, 16) * ratio);

  if (c0 && c1) {
    const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
    const color = ci
      .reduce((a, v) => (a << 8) + v, 0)
      .toString(16)
      .padStart(6, "0");
    return `#${color}`;
  }
};

const calculateColor = (x: number) => {
  const maxDiff = maxRadius * 2;
  const distance = x + maxRadius;
  const ratio = distance / maxDiff;
  const stop = getGrandientStop(ratio);
  return stop;
};

const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const pointsInner = Array.from(
  { length: numPoints },
  (v, k) => k + 1
).map((num: number) => {
  const randomRadius = randomFromInterval(minRadius, maxRadius);
  const randomAngle = Math.random() * Math.PI * 2;
  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-depth, depth);
  const color = calculateColor(x);
  position = [x, y, z];
  return {
    idx: num,
    positions: position,
    color,
  };
});

export const pointsOuter = Array.from(
  { length: numPoints / 4 },
  (v, k) => k + 1
).map((num: number) => {
  const randomRadius = randomFromInterval(minRadius / 2, maxRadius * 2);
  const randomAngle = Math.random() * Math.PI * 2;
  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-depth * 10, depth);
  const color = calculateColor(x);
  position = [x, y, z];
  return {
    idx: num,
    positions: position,
    color,
  };
});
