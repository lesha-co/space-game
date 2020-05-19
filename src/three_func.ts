import { Vector3 } from 'three';

export class MyVector3 extends Vector3 {
  plus = (b: Vector3) => this.clone().add(b);
  minus = (b: Vector3) => this.clone().sub(b);
}
