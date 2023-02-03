import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    __MICRO_APP_BASE_ROUTE__: string;
    microApp: any;
  }
}

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    const listener = (data: any) => {
      console.log('data:', data);
    };
    window.microApp.addDataListener(listener, true);
    return () => window.microApp.removeDataListener(listener);
  }, []);

  return (
    <div className='App'>
      <div>sub app1</div>
      <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
        <div>
          <Link to='/'>子应用1-主页</Link>
          <Link
            style={{ marginLeft: 10 }}
            to='/list'
          >
            子应用1-列表页
          </Link>
        </div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                this is home page
                <div onClick={() => setNum(n => ++n)}>点我++ {num}</div>
              </>
            }
          />
          <Route
            path='/list'
            element={
              <>
                this is list page
                <div onClick={() => setNum2(n => ++n)}>点我++ {num2}</div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
