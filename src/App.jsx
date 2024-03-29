import "./styles/layout.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";
import Resize from "./components/Resize";
import Title from "./components/Title";

function App() {
	return (
		<>
			<div className="page-container">
				<div className="page-container-inner">
					<Header />
					<Title />
					<Content />
					<Bottom />
					<Footer />
				</div>
			</div>
			<Resize />
		</>
	);
}

export default App;
