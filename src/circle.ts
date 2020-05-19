import { CircleGeometry, LineLoop, LineBasicMaterial, Material } from 'three';

export const circle = (radius: number, segments: number = 100, material?: Material) => {
  const m = material ?? new LineBasicMaterial({ color: 0xffffff });
  const geometry = new CircleGeometry(radius, segments);
  geometry.vertices.shift();
  return new LineLoop(geometry, m);
};
