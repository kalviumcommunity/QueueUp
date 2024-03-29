import './App.css';
import Forms from"./component/form";
import Navbar from"./component/Navbar";
import Datas from './component/body';
import DocList from './component/DocList';
import PaymentPage from './component/Pay';
import DocForm from './component/DocForm';
import DocInfo from "./component/DocInfo";
import DocRegi from './component/DocRegi';
import Slots from './component/Slots';
import Footer from './component/Footer';
import TermsPage from './component/TermsPage';
import PrivacyPolicy from './component/PrivacyPolicy';



import { Route,Routes
 } from 'react-router-dom';
import Notfound from './component/Notfound';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='*' element={<Notfound/>}></Route>
        <Route path='/' element={<Datas/>}></Route>
        <Route path='/Forms' element={<Forms/>}></Route>
        <Route path='/Doc/:id' element={<DocList/>}></Route>
        <Route path='/Pay/:id' element={<PaymentPage/>}></Route>
        <Route path='/DocForm' element={<DocForm/>}></Route>
        <Route path='/DocInfo' element={<DocInfo/>}></Route>
        <Route path='/DocRegi' element={<DocRegi/>}></Route>
        <Route path='/slots/:id' element={<Slots/>}></Route>
        <Route path='/termspage' element={<TermsPage/>}></Route>
        <Route path='/policy'  element={<PrivacyPolicy/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
