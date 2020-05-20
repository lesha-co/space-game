import * as THREE from 'three';
import { CamCombo } from '../commonTypes';

var width = window.innerWidth;
var height = window.innerHeight;

// We will use 2D canvas element to render our HUD.
export const hudCanvas = document.createElement('canvas');

// Again, set dimensions to fit the screen.
hudCanvas.width = width;
hudCanvas.height = height;

// Get 2D context and draw something supercool.
export const hudBitmap = hudCanvas.getContext('2d');
if (hudBitmap === null) throw new Error('hudBitmap is null');
hudBitmap.font = 'Normal 40px Arial';
hudBitmap.textAlign = 'center';
hudBitmap.fillStyle = 'rgba(245,245,245,0.75)';
hudBitmap.fillText('Initializing...', width / 2, height / 2);

// Create the camera and set the viewport to match the screen dimensions.
const cameraHUD = new THREE.OrthographicCamera(
  -width / 2,
  width / 2,
  height / 2,
  -height / 2,
  0,
  30,
);

// Create also a custom scene for HUD.
const sceneHUD = new THREE.Scene();

// Create texture from rendered graphics.
export const hudTexture = new THREE.Texture(hudCanvas);
hudTexture.needsUpdate = true;

// Create HUD material.
var material = new THREE.MeshBasicMaterial({ map: hudTexture });
material.transparent = true;

// Create plane to render the HUD. This plane fill the whole screen.
var planeGeometry = new THREE.PlaneGeometry(width, height);
var plane = new THREE.Mesh(planeGeometry, material);
sceneHUD.add(plane);

export const camCombo: CamCombo = { camera: cameraHUD, frustumSize: null, scene: sceneHUD };
