import { WebGLRenderer } from 'three';
import { onWindowResize, updateCamera } from '../helpers/windowResize';
import { CamCombo } from '../commonTypes';
import { createControls } from '../helpers/createControls';
import { camCombo } from './mainScene';

// renderer
document.body.childNodes.forEach((item) => {
  document.body.removeChild(item);
});
export const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.autoClear = false;
document.body.appendChild(renderer.domElement);
// controls

const controls = createControls(camCombo.camera, renderer);
// controls.noRotate = true

// renderHooks
const renderHooks: (() => void)[] = [];
export const onRender = (hook: () => void) => {
  renderHooks.push(hook);
};

// cameras
const cameras: CamCombo[] = [];

export const registerCamera = (combo: CamCombo) => {
  cameras.push(combo);
  updateCamera(combo);
};

const onResizeGlobal = () => onWindowResize(cameras, renderer, controls);
window.addEventListener('resize', onResizeGlobal, false);

const invoke = (fn: () => void): void => fn();

function animate() {
  renderHooks.forEach(invoke);
  cameras.forEach(({ camera, scene }) => {
    renderer.render(scene, camera);
  });

  controls.update();
  requestAnimationFrame(animate);
}
animate();
