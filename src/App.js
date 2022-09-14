import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductSmall from './Components/ProductSmall';
import ProductBig from './Components/ProductBig';

import loudspeaker from './Img/01-Home.png';
import headphones from './Img/29-Lifestyle_b-o.png';
import books from './Img/01-Books.png';
import bagpack from './Img/02-Lifestyle.png';
import picture from './Img/46-Home_bm.png';
import sofa from './Img/45-Home_hem.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='small'>
        <ProductSmall imageURL={loudspeaker} productName='Vifa Copenhagen 2.0 Loudspeaker' price='$799.00'/>
        <ProductSmall imageURL={headphones} productName='Bang & Olufsen Wireless Headphones' price='$174.00'/>
        <ProductSmall imageURL={books} productName='Poketo: Creative Spaces' price='$25.00'/>
        <ProductSmall imageURL={bagpack} productName='Ucon Acrobatics Hajo Backpack' price='$79.00'/>
      </div>
      
      <div className='big'>
        <ProductBig imageURL={picture} productName='Summer Print by Bratislav Milenkovic' price='$27.00'/>
        <ProductBig imageURL={sofa} productName='Palo Modular Corner Sofa by Hem' price='$3.699.00'/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
