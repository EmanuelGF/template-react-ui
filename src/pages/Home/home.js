import React from "react";
import DefaultLayout from "../../Layouts/DefaultLayout/defaultLayout";
import Header from "../../Components/Header/header";
import CookieConsent from "react-cookie-consent";
import "./home.scss";

export default function Home() {
	return (
		<DefaultLayout>
			<div className="home_container">
				<Header />
				<CookieConsent
					location="bottom"
					buttonText="Sure man!!"
					cookieName="myAwesomeCookieName2"
					style={{ background: "#2B373B" }}
					buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
					expires={150}
				>
					This website uses cookies to enhance the user experience.{" "}
					<span style={{ fontSize: "10px" }}>
						This bit of text is smaller :O
					</span>
				</CookieConsent>
			</div>
		</DefaultLayout>
	);
}
