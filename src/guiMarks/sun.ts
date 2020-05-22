import * as THREE from 'three';
import { circle, circleFilled, line } from './primitives';
import { Object3D } from 'three';

const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const Z = new THREE.Vector3(0, 0, 1);

export const sun = () => {
  const o = new THREE.Object3D();
  const ray = () => {
    const r = line(4);
    const container = new Object3D();
    r.position.x = 6;
    container.add(r);
    return container;
  };
  o.add(circleFilled(4, 100, material));
  for (let index = 0; index < 8; index++) {
    const r = ray();
    r.rotateOnAxis(Z, (Math.PI / 4) * index);
    o.add(r);
  }
  return o;
};
