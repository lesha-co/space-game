import { Renderer, OrthographicCamera } from 'three';
import { TrackballControls } from '../trackball/trackball';

export const onWindowResize = (
  camera: OrthographicCamera,
  renderer: Renderer,
  frustumSize: number,
  controls: TrackballControls,
) => () => {
  var aspect = window.innerWidth / window.innerHeight;

  camera.left = (-frustumSize * aspect) / 2;
  camera.right = (frustumSize * aspect) / 2;
  camera.top = frustumSize / 2;
  camera.bottom = -frustumSize / 2;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  controls.handleResize();
};
