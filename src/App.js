import {Routes , Route ,Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import FavList from './components/FavList/FavList'
import  Navbar1  from './components/Navbar1/Navbar1';

function App() {
  return (
   <>
            <Navbar1/>

            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/favorite' exact element={<FavList/>}/>

            </Routes>

        
   </>
  );
}

export default App;
