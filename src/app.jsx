import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from "./components/home";
import RestCard from "./components/restaurant"
import Restaurant from './components/restDetails';
import SecondaryHeader from './components/secondaryHeader';
import CartSection from './components/cartSection';
import { Provider } from 'react-redux';
import store from './components/stores';
import SearchFood from './components/searchFood';

export default function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route element={<SecondaryHeader></SecondaryHeader>}>
                            <Route path='/restaurant' element={<RestCard></RestCard>}></Route>
                            <Route path='/city/delhi/:id' element={<Restaurant></Restaurant>}></Route>
                            <Route path='/city/delhi/:id/search' element={<SearchFood></SearchFood>}></Route>
                        </Route>
                        <Route path="/checkout" element={<CartSection></CartSection>}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}
