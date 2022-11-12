
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';

function App() {
  return (
    <div className='max-w-[1430] mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
