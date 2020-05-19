import thera from './thera.json';
import { MyVector3 } from './three_func';
import { Vector2 } from 'three';

const positionToVector3 = (position: { x: string; y: string; z: string }): MyVector3 =>
  new MyVector3(parseInt(position.x, 10), parseInt(position.y, 10), parseInt(position.z, 10));

export const planets = thera.data.system.planets
  .map((p) => p.planet)
  .map((p) => {
    const position = positionToVector3(p.position);
    const xyLength = new Vector2(position.x, position.y).length();
    const inclination = Math.atan(position.z / xyLength);
    const phi = Math.atan(position.y / position.x);
    const orbitRadius = position.length();
    return {
      ...p,
      position,
      orbitRadius,
      inclination,
      phi,
    };
  });
