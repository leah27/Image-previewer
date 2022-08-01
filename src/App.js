import './App.css';
import Aside from './components/Aside/Aside';
import Img from './components/Img/Img';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { gallery, currentImg } = useSelector(({ gallery }) => {
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
          <Img currentImg={currentImg}/>
        </main>
      </section>
    </div>
  );
}

export default App;
