import { Routes as RoutersProvider, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <RoutersProvider>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </RoutersProvider>
  );
}

export default Routes;
