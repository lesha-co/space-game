import { camCombo } from './setup/mainScene';

import { camCombo as guiCombo } from './setup/gui-cam';
import { planet as planetMark } from './guiMarks/planet';
import { circle } from './guiMarks/primitives';
import * as sys from './solar_system';
import { registerCamera, renderer, onRender } from './setup/index';
import { toScreenXY2 } from './helpers/toScreenXY';
import { Object3D } from 'three';
import { sun } from './guiMarks/sun';

const planetMarks: Object3D[] = [];
const orbits: Object3D[] = [];
const sunMark = sun();

registerCamera(camCombo);
registerCamera(guiCombo);

for (const planet of sys.planets) {
  const line = circle(planet.orbitRadius, 1000);
  camCombo.scene.add(line);
  orbits.push(line);

  const screenCoordinates = toScreenXY2(planet.position, camCombo.camera, renderer.domElement);
  const mark = planetMark();
  mark.position.x = screenCoordinates.x;
  mark.position.y = screenCoordinates.y;
  mark.updateMatrix();
  planetMarks.push(mark);
  guiCombo.scene.add(mark);
  guiCombo.scene.add(sunMark);
}

onRender(() => {
  sys.planets.forEach((planet, index) => {
    const mark = planetMarks[index];
    const screenCoordinates = toScreenXY2(planet.position, camCombo.camera, renderer.domElement);
    mark.position.x = screenCoordinates.x;
    mark.position.y = screenCoordinates.y;
    mark.updateMatrix();
  });

  const screenCoordinates = toScreenXY2(sunMark.position, camCombo.camera, renderer.domElement);
  sunMark.position.x = screenCoordinates.x;
  sunMark.position.y = screenCoordinates.y;
  sunMark.updateMatrix();
});
