import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const MainPage2 = () => {
  const location = useLocation();//хук содержит в себе текущий маршрут
  const navigate = useNavigate();//хук возвращает функцию которую можно использовать для навигации

  useEffect(() => {//срабатывает после каждого рендера повторного
    console.log('Current location is ', location);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate('Home')}> Home page </button>
          </li>
          <li>
            <button onClick={() => navigate('About')}> About page </button>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </>
  )
};