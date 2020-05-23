import system from '../systems/jita.json';

import { Vector3 } from 'three';

const positionToVector3 = (position: { x: string; y: string; z: string }): Vector3 =>
  new Vector3(
    parseInt(position.x, 10), // X
    parseInt(position.z, 10), // Y
    0, // Z
  );

export const planets = system.data.system.planets
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
