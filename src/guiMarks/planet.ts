import { Object3D, MeshBasicMaterial, DoubleSide } from 'three';
import { circle, circleFilled } from '../helpers/primitives';

const material = new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide });

export const planet = () => {
  const planet = new Object3D();
  planet.add(circle(6, 100));
  planet.add(circleFilled(4, 100, material));
  return planet;
};
