import * as THREE from 'three';
import { Vector3 } from 'three';

export const circle = (radius: number, segments: number = 100, material?: THREE.Material) => {
  const m = material ?? new THREE.LineBasicMaterial({ color: 0xffffff });
  const geometry = new THREE.CircleGeometry(radius, segments);
  geometry.vertices.shift();
  return new THREE.LineLoop(geometry, m);
};

export const line = (length: number, material?: THREE.Material) => {
  const m = material ?? new THREE.LineBasicMaterial({ color: 0xffffff });

  var geometry = new THREE.Geometry();

  geometry.vertices.push(new Vector3(0, 0, 0));
  geometry.vertices.push(new Vector3(length, 0, 0));

  return new THREE.Line(geometry, m);
};

export const circleFilled = (radius: number, segments: number = 100, material?: THREE.Material) => {
  const m = material ?? new THREE.LineBasicMaterial({ color: 0xffffff });
  const geometry = new THREE.CircleGeometry(radius, segments);
  geometry.vertices.shift();
  return new THREE.Mesh(geometry, m);
};
