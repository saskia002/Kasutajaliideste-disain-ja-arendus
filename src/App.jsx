import "./styles/layout.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="page-container">
				<div className="page-container-inner">
					<Header />
					<Content />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
