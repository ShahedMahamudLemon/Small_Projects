import React, { useState } from "react";
import Barcode from "react-barcode";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

const BarCode = () => {
  const [barCodeData, setBarCodeData] = useState("Hello");
  const [data, setData] = useState({
    assignedTo: "",
    productId: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawText = `${data.assignedTo || " "}, ${data.productId || " "}`;
    setBarCodeData(JSON.stringify(rawText));
  };
  const newBarCode = () => {
    document.getElementById("assignedTo").value = "";
    document.getElementById("productId").value = "";
    setData([]);
    setBarCodeData(JSON.stringify("Hello"));
  };
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <div className="text-center my-3">
            <h2>Barcode Generator</h2>
          </div>
          <Col lg={5} md={6} sm={12}>
            <form onSubmit={handleSubmit} className="bg-secondary p-5">
              <InputGroup className="mb-3">
                <input
                  className="form-control "
                  type="text"
                  name="assignedTo"
                  id="assignedTo"
                  onChange={handleChange}
                  value={data.assignedTo}
                  placeholder="assigned to..."
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <input
                  className="form-control "
                  type="text"
                  name="productId"
                  id="productId"
                  onChange={handleChange}
                  value={data.productId}
                  placeholder="product id..."
                />
              </InputGroup>
              <div className="d-grid gap-2 mt-5">
                <Button variant="primary" size="lg" type="submit">
                  Generate
                </Button>
                <Button
                  variant="info"
                  size="lg"
                  type="submit"
                  onClick={newBarCode}
                >
                  New
                </Button>
              </div>
            </form>
          </Col>
          <Col lg={7} md={6} sm={12}>
            <div className="text-center">
              <Barcode value={barCodeData} className="bar" width={1} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BarCode;
