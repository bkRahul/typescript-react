import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Mui } from './Mui';
import { Products } from './Products';
import { Header } from './Header';
import { Order } from './Order';
import { NoMatch } from './NoMatch.tsx';
import { Featured } from './Products/Featured';
import { Electronics } from './Products/Electronics';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='mui' element={<Mui />} />
        <Route path='products' element={<Products />}>
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='electronics' element={<Electronics />} />
        </Route>
        <Route path='order' element={<Order />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
