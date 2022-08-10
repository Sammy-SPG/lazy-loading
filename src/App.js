import React, { lazy, Suspense, useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { _dataPromise } from './hooks/fetchData';
import LoadCard from './components/loadCard';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Card = lazy(() => import('./components/Card'));


const resource = _dataPromise();

function App() {

  const [State, setState] = useState([]);

  useEffect(() => {
    (async () => {
      setState(await resource);
    })();
  }, [])

  return (
    <div className="App">
      <h1 className="Title" style={{textAlign: 'center', padding:'5px'}}>Lazy loading Publications</h1>
      <div className='container-Cards container'>
        {
          State.map((Data, i) => (
            <Suspense fallback={<LoadCard />} key={i}>
              <LazyLoad height={200} once><Card author={Data.author} download_url={Data.download_url} url={Data.url} id={Data.id} key={Data.id} /></LazyLoad>
            </Suspense>
          ))
        }
      </div>
    </div>
  );
}

export default App;
