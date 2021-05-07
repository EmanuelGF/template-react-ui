/**
 * Default Layout
 * This will be the main Layout. (Implemented on the Home page).
 */

import React from "react";

//Components
import Footer from "../../Components/Footer/footer";
import NavMenu from "../../Components/NavMenu/navMenu";

import "./defaultLayout.scss";

export default function DefaultLayout({ children }) {
	return (
		<div className="main_layout">
			<NavMenu />
			{children}
			<Footer />
		</div>
	);
}
