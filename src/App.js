import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import { NavBar } from "./layouts/NavBar";
import { Main } from "./layouts/Main";
import { View } from "./components/View";

function App() {
	return (
		<Provider store={store}>
			<NavBar />
			<Main>
				<View />
			</Main>
		</Provider>
	);
}

export default App;
