
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewItems, About,NotFound ,Promotions,ItemsAvailable,Delivery,Forums} from './components/Task1'
import { MainPage } from './components/Task2';
import { MainPage2 } from './components/Task3';
import { Calculator } from './components/Calc';

function App() {
  return (


      // <Calculator/> 



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/> } >
        {/* <Route path="/" element={<MainPage2/> } >    */}
        {/* компонент MainPage2 использует навигацию! */}
        <Route index element={<NewItems/> } />
        <Route path="newitems" element={<NewItems />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="itemsavailable" element={<ItemsAvailable />} />
        <Route path="deivery" element={<Delivery />} />
        <Route path="forums" element={<Forums />} />
        <Route path="about" element={<About />} />
        <Route path="*" element= {<NotFound />} />   {/*подстановочный путь*/}
       </Route>
      </Routes>




      <div className='div'>
      <p>kyivstar +38(096)148-12-00 </p>
      <p>  vodafone +38(050)375-63-60</p>
      <p>  lifecell +38(063)019-54-90 </p>
      <p>  phone +38(044)247-72-89</p>
      </div>


    </BrowserRouter>






  );
}

export default App;