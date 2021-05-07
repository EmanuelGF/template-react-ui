import React from "react";

export default function Footer() {
	return (
		<div
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
		</div>
	);
}
