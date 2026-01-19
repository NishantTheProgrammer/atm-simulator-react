import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

export default function ApplyCard() {
    return (
        <Form>
            {/* Card Holder Name */}
            <Form.Group className="mb-3">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control type="text" placeholder="e.g., Nishant Programmer" />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3">
                <Form.Label>Phone Number (for OTP)</Form.Label>
                <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control type="tel" placeholder="e.g., 9876543210" />
                </InputGroup>
                <Form.Text className="text-muted">
                    This is a simulator. You can enter any dummy phone number
                </Form.Text>
            </Form.Group>

            <Row>
                {/* Initial Balance */}
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Initial Balance</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>₹</InputGroup.Text>
                            <Form.Control type="number" placeholder="e.g., 1000" />
                        </InputGroup>
                    </Form.Group>
                </Col>

                {/* PIN */}
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>PIN</Form.Label>
                        <Form.Control type="password" placeholder="Enter 4-digit PIN" />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}
