import './App.css';
import ShoppingCart from './components/ShoppingCart';
import HeadingCart from './components/HeadingCart';
import img from './images.png'
function App() {
  return (
    <div className="">
      <ShoppingCart
      discount={'22%'}
      itemImg={img}
      itemName={'map'}
      notPrice={'$30'}
      orgPrice={'$50'}/>

      <HeadingCart
      mainHeading={'hey'}
      subHeading={'hey'}/>
    </div>
  );
}

export default App;
