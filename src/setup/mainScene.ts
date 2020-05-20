import * as THREE from 'three';
import { CamCombo } from '../commonTypes';

const mainScene = new THREE.Scene();
mainScene.add(new THREE.AxesHelper(20));
const frustumSize = 8 * 10 ** 13;

const mainCamera = new THREE.OrthographicCamera(1, 1, 1, 1, 1, 10 ** 100);

mainCamera.position.set(0, 0, 10 ** 2);
mainCamera.lookAt(0, 0, 0);
export const camCombo: CamCombo = { camera: mainCamera, frustumSize, scene: mainScene };
