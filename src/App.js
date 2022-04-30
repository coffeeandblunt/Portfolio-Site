// Import Components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
	
			<Projects />
			<About />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
