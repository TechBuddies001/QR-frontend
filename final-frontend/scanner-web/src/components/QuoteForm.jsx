
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const FormTitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.navy};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 2px rgba(201, 168, 76, 0.2);
  }
`;

const QuoteForm = ({ serviceName }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hi, I am interested in ${serviceName}.\n\nMy details are:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}`;
        const whatsappUrl = `https://wa.me/918881384777?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <FormWrapper>
            <FormTitle>Get a Quote for {serviceName}</FormTitle>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>City</Label>
                    <Input
                        type="text"
                        name="city"
                        required
                        placeholder="Your City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button type="submit" style={{ width: '100%' }}>Request Quote</Button>
            </form>
        </FormWrapper>
    );
};

export default QuoteForm;
