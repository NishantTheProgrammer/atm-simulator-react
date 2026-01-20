import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ApplyCard({ onApplied }) {

    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = data => {
        console.log(data)
        onApplied();
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Card Holder Name */}
            <Form.Group className="mb-3">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control type="text" {...register('name')} />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3">
                <Form.Label>Phone Number (for OTP)</Form.Label>
                <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control type="tel" {...register('phoneNumber')} />
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
                            <Form.Control type="number" {...register('balance')} />
                        </InputGroup>
                    </Form.Group>
                </Col>

                {/* PIN */}
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>PIN</Form.Label>
                        <Form.Control type="password" {...register('pin')} />
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex justify-content-end gap-2">

                <Button variant="secondary">
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Download Card
                </Button>

            </div>
        </Form>
    );
}
