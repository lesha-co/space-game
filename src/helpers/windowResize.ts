import { Renderer } from 'three';
import { TrackballControls } from '../trackball/trackball';
import { isOrthographicCamera, isPerspectiveCamera } from './cameraType';
import { CamCombo } from './commonTypes';
export const updateCamera = ({ camera, frustumSize }: CamCombo) => {
  var aspect = window.innerWidth / window.innerHeight;

  if (isOrthographicCamera(camera)) {
    if (frustumSize !== null) {
      camera.left = (-frustumSize * aspect) / 2;
      camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;
      camera.updateProjectionMatrix();
    } else {
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = -window.innerHeight / 2;
      camera.updateProjectionMatrix();
    }
  }
  if (isPerspectiveCamera(camera)) {
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  }
};
export const onWindowResize = (
  combos: CamCombo[],
  renderer: Renderer,
  controls: TrackballControls,
) => {
  combos.forEach((combo) => {
    updateCamera(combo);
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  controls.handleResize();
};
