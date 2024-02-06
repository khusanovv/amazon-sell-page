
import './App.css';
import react from "React":
import Aboutsell from './companenta/Aboutsell/Aboutsell';
import Become from './companenta/Become/Become';
import Benifist from './companenta/Benifits/Benifits';
import Ecommerce from './companenta/Ecommerce/Ecommerce';
import Header from './companenta/Header/Header';
import Hope from './companenta/Hope/Hope';
import MoreSell from './companenta/MoreSell/MoreSell';
import Startselling from './companenta/Startselling/Startselling';

function App() {
  
  return (
    <div>
      <Header />
      <Become />
      <Benifist />
      <MoreSell />
      <Hope />
      <Aboutsell />
      <Ecommerce />
      <Startselling />
    </div>
    
  );
  
}

export default App;
