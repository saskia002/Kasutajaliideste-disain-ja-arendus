import "./styles/layout.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";

function App() {
	return (
		<>
			<div className="page-container">
				<div className="page-container-inner">
					<Header />
					<Content />
					<Bottom />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
