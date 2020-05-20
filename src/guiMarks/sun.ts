import * as THREE from 'three';
import { circle, circleFilled, line } from './primitives';

const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const Z = new THREE.Vector3(0, 0, 1);

export const sun = () => {
  const o = new THREE.Object3D();
  const ray = () => {
    const ray = line(7);
    // ray.position.x = 5;
    ray.updateMatrix();
    return ray;
  };
  o.add(circleFilled(4, 100, material));
  for (let index = 0; index < 8; index++) {
    const r = ray();
    r.rotateZ((Math.PI / 4) * index);
    o.add(r);
  }
  return o;
};
