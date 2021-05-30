import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Post from './components/Post'
import Slider from './components/Slider'
import CtaBlock from './components/CtaBlock'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Header/>
        <Breadcrumbs/>
        <main className="main" role="main">
            <div className="inner-block">
                <Post/>
                <Slider/>
                <div className="inner-block-small">
                    <CtaBlock/>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  );
}

export default App;
