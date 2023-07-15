import Header from './components/header';
import CryptoCurrencyList from './pages/cryptoCurrencyList'; //page ---> 
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import CryptoCurrencyDetail from './pages/cryptoCurrencyDetail';
import NotFound from './pages/notFound';
// function About () {
//     return (
//         <div>
//             About 
//         </div>
//     )
// }

// function Contact () {
//     return (
//         <div>
//             Contact
//         </div>
//     )
// }


function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes> 
                    <Route path='/' element={<CryptoCurrencyList />}/> 
                    <Route path='/currency/:id' element={<CryptoCurrencyDetail />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;