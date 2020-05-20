import { Camera, Renderer } from 'three';
import { TrackballControls } from '../trackball/trackball';

export function createControls(camera: Camera, renderer: Renderer) {
  const controls = new TrackballControls(camera, renderer.domElement);

  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  controls.keys = [65, 83, 68];

  return controls;
}
