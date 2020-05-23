import * as THREE from 'three';

import '../index.css';
import { Object3D } from 'three';
init();

function getGeo(radius: number, colorPoly: number, colorMesh: number) {
  const o = new Object3D();
  const geometry = new THREE.SphereGeometry(radius, 40, 40);
  var geo = new THREE.EdgesGeometry(geometry); // or WireframeGeometry

  // mat
  var material = new THREE.MeshPhongMaterial({
    color: colorPoly,
    polygonOffset: true,
    polygonOffsetFactor: 1, // positive value pushes polygon further away
    polygonOffsetUnits: 1,
  });

  var mat = new THREE.LineBasicMaterial({ color: colorMesh, linewidth: 2 });
  //ьуыр
  var mesh = new THREE.Mesh(geometry, material);
  o.add(mesh);

  // wireframe
  var geo = new THREE.EdgesGeometry(mesh.geometry); // or WireframeGeometry
  var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
  var wireframe = new THREE.LineSegments(geo, mat);
  mesh.add(wireframe);
}

function getPlanet(radius: number) {
  const geometry = new THREE.SphereGeometry(radius, 40, 40);
  const geometry2 = new THREE.RingGeometry(radius * 1.1, radius * 2, 100, 3);
  const material = new THREE.MeshPhongMaterial({
    color: '#fff',
    wireframe: true,
    side: THREE.DoubleSide,
  });
  const o = new Object3D();
  const planet = new THREE.Mesh(geometry, material);
  const ring = new THREE.Mesh(geometry2, material);
  ring.rotateX(-Math.PI / 2);
  o.add(planet);
  o.add(ring);
  return o;
}

function init() {
  // camera
  const camera = new THREE.OrthographicCamera(
    -window.innerWidth / 2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    -window.innerHeight / 2,
    0.1,
    200000000,
  );
  camera.frustumCulled = false;
  camera.position.z = 3000;
  camera.updateMatrix();
  // renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  // scene
  const scene = new THREE.Scene();
  const sun1 = getPlanet(window.innerHeight / 4);
  sun1.rotateX((Math.PI / 180) * 33);
  sun1.rotateZ((Math.PI / 180) * -33);
  scene.add(sun1);

  // light
  {
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0, 0, 1);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }

  // animate
  function animate() {
    requestAnimationFrame(animate);
    camera.updateProjectionMatrix();
    sun1.rotateY(0.01);
    renderer.render(scene, camera);
  }
  animate();
}
