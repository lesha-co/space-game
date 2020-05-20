import thera from './systems/jita.json';
import { MyVector3 } from './helpers/three_func';

const positionToVector3 = (position: { x: string; y: string; z: string }): MyVector3 =>
  new MyVector3(parseInt(position.x, 10), parseInt(position.z, 10), 0);

export const planets = thera.data.system.planets
  .map((p) => p.planet)
  .map((p) => {
    const position = positionToVector3(p.position);
    const orbitRadius = position.length();
    return {
      ...p,
      position,
      orbitRadius,
    };
  });
