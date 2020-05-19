import { scene } from './setup';

import { circle } from './circle';
import * as thera from './solar_system';

for (const planet of thera.planets) {
  const line = circle(planet.orbitRadius, 100);
  scene.add(line);
}
