import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentA from "./components/ContentA";
import ContentB from "./components/ContentB";

function App() {
    return (
        <div className="App">
            <Header/>
            <ContentA/>
            <ContentB/>
            <Footer/>
        </div>
    );
}

export default App;
