import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { downloadCard } from "../services/cardService";

export default function ApplyCard({ onApplied }) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async data => {
        console.log(data)
        await downloadCard(data);
        onApplied();
    }

    console.log({ errors });


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Card Holder Name */}
            <Form.Group className="mb-3">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control type="text"
                    isInvalid={!!errors.name}
                    {...register('name', {
                        required: "Name is required",
                        maxLength: {
                            value: 20,
                            message: "Max length is 20"
                        }
                    })} />
                <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                </Form.Control.Feedback>

            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3">
                <Form.Label>Phone Number (for OTP)</Form.Label>
                <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                
                    <Form.Control 
                    isInvalid={!!errors.phoneNumber} 
                    type="tel" {...register('phoneNumber', {
                        required: "Phone number is required"
                    })} />
                    <Form.Control.Feedback type="invalid">
                        {errors.phoneNumber?.message}
                    </Form.Control.Feedback>
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
                            <Form.Control 
                            isInvalid={!!errors.balance} 
                            type="number" {
                                ...register('balance', { 
                                    required: 'Balance is required',
                                    min: {
                                        value: 1000,
                                        message: 'Minimum allowed value is ₹1000'
                                    }, 
                                    max: {
                                        value: 20_00_000,
                                        message: 'Minimum allowed value is ₹20,00,000'
                                    } 
                                })} />
                            <Form.Control.Feedback type="invalid">
                                {errors.balance?.message}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Col>

                {/* PIN */}
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>PIN</Form.Label>
                        <Form.Control type="password" isInvalid={!!errors.pin} {...register('pin', {
                            required: 'Pin is required',
                            pattern: {
                                value: /^\d{4}$/,
                                message: "PIN must be exactly 4 digits",
                            }
                        })} />
                        <Form.Control.Feedback type="invalid">
                            {errors.pin?.message}
                        </Form.Control.Feedback>
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
