import * as THREE from 'three';

export const sun = (radius: number) => {
  const geometry = new THREE.SphereGeometry(radius, 25, 25);

  const material = new THREE.MeshPhongMaterial({
    color: '#fff',
    wireframe: true,
  });
  return new THREE.Mesh(geometry, material);
};
