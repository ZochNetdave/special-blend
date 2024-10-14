import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import starbies from "./starbies.jpg";

function App() {
	const cardContainer = {
		display: "flex",
		justifyContent: "center",
		padding: "10px",
	};
	return (
		<div style={{ backgroundColor: "#367588" }}>
			<span
				style={{
					display: "flex",
					justifyContent: "center",
					padding: "25px",
				}}>
				<div
					style={{
						width: "300px",
						height: "300px",
						display: "flex",
						borderRadius: "20px",
						marginBottom: "-35px",
						marginTop: "-20px",
					}}>
					<img src={starbies} />
				</div>
			</span>

			<div style={cardContainer}></div>
			<Card />
		</div>
	);
}

export default App;
