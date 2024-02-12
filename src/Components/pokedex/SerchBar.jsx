import React from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { getPokemonDetails } from "../../Services/apiServices";

function SerchBar(props) {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      className="bg-body-tertiary justify-content-around p-3"
    >
      <div>
        <Row>
          <h4 style={{ color: "white" }}>Serch Name OR Number</h4>
        </Row>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => {
                props.setQuery(e.target.value);
                if (e.target.value === "") {
                  props.setSerchedData(null);
                }
              }}
            />
          </Col>
          <Col xs="auto">
            <Button
              onClick={async () => {
                const data = await getPokemonDetails(
                  `https://pokeapi.co/api/v2/pokemon/${props.query}`
                );
                props.setSerchedData(data);
              }}
              type="button"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </Navbar>
  );
}

export default SerchBar;
