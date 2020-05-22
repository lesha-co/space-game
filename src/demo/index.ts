import * as THREE from 'three';

init();

function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);

  camera.updateMatrix();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.IcosahedronGeometry(0.5, 0);
  const material = new THREE.MeshPhongMaterial({ color: '#8AC' });
  const getCube = () => new THREE.Mesh(geometry, material);
  scene.add(new THREE.AxesHelper(100));
  for (let index = 0; index < 16; index++) {
    const cube = getCube();
    const x = index % 4;
    const y = (index - x) / 4;
    cube.position.x = x - 1.5;
    cube.position.y = y - 1.5;
    console.log(cube.position);
    scene.add(cube);
  }

  camera.position.z = 5;

  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-10, -10, 50);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }

  function animate() {
    requestAnimationFrame(animate);

    camera.left += 0.002;

    camera.right -= 0.002;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
  }
  animate();
}
