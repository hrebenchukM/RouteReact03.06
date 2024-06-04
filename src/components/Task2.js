import { Link,Outlet  } from 'react-router-dom';
import './style.css';


export const MainPage = () => (
    <>
    
  <nav>
    <ul className='list'>

      <li>
        <Link to="/newitems" className='nav'>НОВИНКИ</Link> 
        {/* //создание ссылок на уровне реакта */}
      </li>
      <li>
        <Link to="/promotions" className='nav'>АКЦІЇ</Link>
      </li>
      <li>
        <Link to="/itemsavailable" className='nav'>ТОВАРИ В НАЯВНОСТІ</Link>
      </li>
      <li>
        <Link to="/deivery" className='nav'>ДОСТАВКА І ОПЛАТА</Link>
      </li>
      <li>
        <Link to="/forums" className='nav' >ФОРУМИ</Link>
      </li>
      <li>
        <Link to="/about" className='nav'>ПРО НАС</Link>
      </li>

    </ul>  
  </nav>
   <hr/> 

  <Outlet/>

   {/* //нужен чтобы менять собственные значения рендером нужного компонента */}
<hr/> 
  </>

);