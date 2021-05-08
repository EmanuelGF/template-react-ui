import React from "react";

export default function Footer() {
	return (
		<footer
			style={{
				width: "100%",
				height: "100px",
				backgroundColor: "#888",
				padding: "12px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			©yourBizz {new Date().toLocaleDateString()}
		</footer>
	);
}
