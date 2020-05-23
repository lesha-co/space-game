import { camCombo } from './setup/mainScene';
import { camCombo as guiCombo } from './setup/gui';
import { planet as planetMark } from './guiMarks/planet';
import { circle } from './helpers/primitives';
import { planets } from './helpers/solar_system';
import { registerCamera, renderer, onRender } from './setup/index';
import { toScreenXY2 } from './helpers/toScreenXY';
import * as THREE from 'three';
import { sun } from './guiMarks/sun';
import { sun as sunModel } from './models/sun';

export const init = () => {
  const planetMarks: THREE.Object3D[] = [];
  const orbits: THREE.Object3D[] = [];
  const sunMark = sun();
  console.log('init!!');

  registerCamera(camCombo);
  registerCamera(guiCombo);

  {
    const color = 0xffffff;
    const intensity = 2;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 0, 1);
    light.target.position.set(0, 0, 0);
    camCombo.scene.add(light);
    camCombo.scene.add(light.target);
  }

  planets.forEach((planet) => {
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
  });

  const sunM = sunModel(100000);
  {
    sunM.updateMatrix();
    sunM.rotateX((Math.PI / 180) * 33);
    sunM.rotateZ((Math.PI / 180) * -33);
    camCombo.scene.add(sunM);
    guiCombo.scene.add(sunMark);
  }

  onRender(() => {
    planets.forEach((planet, index) => {
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

    sunM.rotateY((Math.PI / 180) * 0.1);
    sunM.updateMatrix();
  });
};
