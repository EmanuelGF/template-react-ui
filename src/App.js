import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Context
import { CtxProvider } from "./Context/ctx";
//Cookie consent
//Util
import { AppRoute } from "./Helpers/helpers.js";

//Layouts
import PagesLayout from "./Layouts/PagesLayout/PagesLayout";

//Pages
import NotFound from "./pages/NotFound/notFound";
import About from "./pages/About/about";
import Home from "./pages/Home/home";

export default function App() {
	return (
		<CtxProvider>
			<BrowserRouter>
				<Switch>
					<AppRoute
						exact
						path="/about"
						layout={PagesLayout}
						component={About}
					/>

					<Route path="/" exact component={Home} />
					<Route path="*" exact component={NotFound} />
				</Switch>
			</BrowserRouter>
		</CtxProvider>
	);
}
