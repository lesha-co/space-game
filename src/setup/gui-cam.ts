import * as THREE from 'three';
import { CamCombo } from '../commonTypes';

const mainScene = new THREE.Scene();

const mainCamera = new THREE.OrthographicCamera(-1000, 1000, 1000, -1000, 1, 10 ** 50);

mainCamera.position.set(0, 0, 10 ** 2);
mainCamera.lookAt(0, 0, 0);
export const camCombo: CamCombo = { camera: mainCamera, frustumSize: null, scene: mainScene };
