import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./layouts/NavBar";
import { Main } from "./layouts/Main";

import { View } from "./components/View";

function App() {
	return (
		<>
			<NavBar />
			<Main>
				<View />
			</Main>
		</>
	);
}

export default App;
