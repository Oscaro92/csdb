import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// * import components
import Header from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (
        <div className="App">
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}

export default App;
