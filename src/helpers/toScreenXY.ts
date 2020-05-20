import { Vector3, Camera, Matrix4 } from 'three';

export const toScreenXY = (
  position: Vector3,
  camera: Camera,
  canvas: HTMLCanvasElement,
): { x: number; y: number } => {
  const pos = position.clone();
  const projScreenMat = new Matrix4();
  projScreenMat.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  projScreenMat.multiplyVector3(pos);
  return {
    x: ((pos.x + 1) * canvas.width) / 2,
    y: ((-pos.y + 1) * canvas.height) / 2,
  };
};

export const toScreenXY2 = (
  position: Vector3,
  camera: Camera,
  canvas: HTMLCanvasElement,
): { x: number; y: number } => {
  const pos = position.clone();
  const projScreenMat = new Matrix4();
  projScreenMat.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  projScreenMat.multiplyVector3(pos);
  return {
    x: (pos.x * canvas.width) / 2,
    y: (-pos.y * canvas.height) / 2,
  };
};
