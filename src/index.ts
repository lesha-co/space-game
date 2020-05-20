import { camCombo } from './setup/mainScene';
import { camCombo as guiCombo, hudBitmap, hudTexture, hudCanvas } from './setup/gui';
// import { camCombo as guiCombo2 } from './setup/gui-cam';

import { circle } from './helpers/circle';
import * as sys from './solar_system';
import { registerCamera } from './setup/index';
import { toScreenXY } from './helpers/toScreenXY';
import { renderer, onRender } from './setup/index';
registerCamera(camCombo);
registerCamera(guiCombo);

for (const planet of sys.planets) {
  const line = circle(planet.orbitRadius, 1000);
  camCombo.scene.add(line);
}
onRender(() => {
  if (hudBitmap) {
    hudBitmap.clearRect(0, 0, hudCanvas.width, hudCanvas.height);
  }
  for (const planet of sys.planets) {
    const screenCoordinates = toScreenXY(planet.position, camCombo.camera, renderer.domElement);
    if (hudBitmap) {
      hudBitmap.beginPath();
      hudBitmap.arc(screenCoordinates.x, screenCoordinates.y, 6, 0, 2 * Math.PI, false);
      hudBitmap.fillStyle = '#ffffff';
      hudBitmap.fill();

      hudBitmap.beginPath();
      hudBitmap.arc(screenCoordinates.x, screenCoordinates.y, 9, 0, 2 * Math.PI, false);
      hudBitmap.lineWidth = 1;
      hudBitmap.strokeStyle = '#ffffff';
      hudBitmap.stroke();
    }
    hudTexture.needsUpdate = true;
  }
});
