import { Camera, OrthographicCamera, PerspectiveCamera } from 'three';

export const isOrthographicCamera = (cam: Camera): cam is OrthographicCamera =>
  cam.type === 'OrthographicCamera';
export const isPerspectiveCamera = (cam: Camera): cam is PerspectiveCamera =>
  cam.type === 'PerspectiveCamera';
