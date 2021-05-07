import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
//Context
import { CtxContext } from "../../Context/ctx";
//CSS
import "./about.scss";

export default function About() {
	const { data } = useContext(CtxContext);

	console.log(data.slice(0, 6));
	return (
		<Container fluid>
			<Row>
				<Col style={{ textAlign: "center" }}>
					<h1>Welcome to the about page!</h1>
					<p style={{ backgroundColor: "#ccc" }}>
						✔This page is using a different layout thats why you dont see the
						nav and footer.
					</p>
					<Link to="/">
						<i className="fas fa-arrow-left"></i> home
					</Link>
				</Col>
			</Row>
			<hr />
			<h4>
				{" "}
				Data bellow was loaded from https://jsonplaceholder.typicode.com api and
				passed from react context.
			</h4>
			<Row>
				{!isEmpty(data) &&
					data.slice(0, 12).map((item) => (
						<Col className="about-example-data" key={item.id}>
							<h5>{item.title}</h5>
							<p>{item.body}</p>
						</Col>
					))}
			</Row>
		</Container>
	);
}
