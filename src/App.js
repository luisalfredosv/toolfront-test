import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./layouts/NavBar";
import { Main } from "./layouts/Main";

import { View } from "./components/View";

import { Provider } from "react-redux";

import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<NavBar />
			<Main className='justify-content-center'>
				<View />
			</Main>
		</Provider>
	);
}

export default App;
