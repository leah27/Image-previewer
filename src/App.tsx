import React, {FC} from 'react';
import { AppStateType } from './redux/store';
import './App.css';
import Aside from './components/Aside/Aside.tsx';
import Main from './components/Main/Main.tsx';
import { useSelector } from 'react-redux';

function useSelectorTyped<T>(fn: (state: AppStateType) => T): T {
  return useSelector(fn)
}

const App: FC = () => {
  const { gallery, currentImg } = useSelectorTyped(({ gallery }: any) => {
    return {
      gallery: gallery.gallery,
      currentImg: gallery.currentImg
    }
  })

  return (
    <div className="App">
      <section className="content">
        <aside>
          <Aside gallery={gallery} currentImg={currentImg}/>
        </aside>
        <main>
          <Main currentImg={currentImg}/>
        </main>
      </section>
    </div>
  );
}

export default App;
