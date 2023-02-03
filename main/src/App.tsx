import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Sub1 } from './pages/Sub1';
import { Sub2 } from './pages/Sub2';
import { Vue } from './pages/Vue';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<any>({ fromMain: true, mainNum: 0 });

  useEffect(() => {
    setInterval(
      () => setData((prev: any) => ({ ...prev, mainNum: ++prev.mainNum })),
      5000
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          <Link to='/'>主应用</Link>
          <Link
            style={{ marginLeft: 10 }}
            to='/sub1'
          >
            子应用1
          </Link>

          <Link
            style={{ marginLeft: 10 }}
            to='/vue'
          >
            子应用vue
          </Link>

          <Link
            style={{ marginLeft: 10 }}
            to='/sub2'
          >
            子应用2
          </Link>
        </div>

        <Routes>
          <Route
            path='/sub1/*'
            element={
              <Sub1
                data={data}
                setData={setData}
              />
            }
          />
          <Route
            path='/sub2/*'
            element={<Sub2 />}
          />
          <Route
            path='/vue/*'
            element={<Vue />}
          />
          <Route
            path='/'
            element={
              <>
                main app
                <div
                  onClick={() => setData({ ...data, mainNum: ++data.mainNum })}
                >
                  点击++{data.mainNum}
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
