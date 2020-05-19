import * as THREE from 'three';
import { onWindowResize } from './helpers/windowResize';
import { createControls } from './helpers/createControls';
export const scene = new THREE.Scene();

const frustumSize = 400;
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/// Camera

const aspect = window.innerWidth / window.innerHeight;

const ocamera = new THREE.OrthographicCamera(
  (frustumSize * aspect) / -2,
  (frustumSize * aspect) / 2,
  frustumSize / 2,
  frustumSize / -2,
  1,
  1000,
);

ocamera.position.set(0, 0, 10000);
ocamera.lookAt(0, 0, 0);

/// Hooks

const controls = createControls(ocamera, renderer);
// controls.noRotate = true;
const resizeHandler = onWindowResize(ocamera, renderer, frustumSize, controls);
window.addEventListener('resize', resizeHandler, false);

/// Animate

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  console.log(
    ocamera.left,
    ocamera.right - ocamera.left,
    ocamera.bottom - ocamera.top,
    ocamera.quaternion,
  );
  renderer.render(scene, ocamera);
}
animate();
