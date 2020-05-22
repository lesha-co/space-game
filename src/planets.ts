import { init } from './webgl';
import './index.css';
init();
const hot = (module as any).hot;
if (hot) {
  console.log('hot!');

  hot.accept('./webgl', function () {
    console.log('Accepting the updated printMe module!');
    init();
  });
}
