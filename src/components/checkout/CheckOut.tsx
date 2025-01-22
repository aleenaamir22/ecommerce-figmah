import { useState } from 'react';

const CheckoutPage = () => {
  const [billingAddress, setBillingAddress] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'creditCard', // default payment method
  });

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You would submit form here in a real scenario
    console.log({
      billingAddress,
      shippingAddress,
      paymentDetails,
      email,
    });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '1.5rem' }}>Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Section */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#4a5568' }}>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#4a5568',
              }}
              required
            />
          </div>

          {/* Billing Address Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#4a5568' }}>Billing Address</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input
                type="text"
                value={billingAddress.name}
                onChange={(e) => setBillingAddress({ ...billingAddress, name: e.target.value })}
                placeholder="Full Name"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
              <input
                type="text"
                value={billingAddress.address}
                onChange={(e) => setBillingAddress({ ...billingAddress, address: e.target.value })}
                placeholder="Address"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <input
                type="text"
                value={billingAddress.city}
                onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                placeholder="City"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
              <input
                type="text"
                value={billingAddress.postalCode}
                onChange={(e) => setBillingAddress({ ...billingAddress, postalCode: e.target.value })}
                placeholder="Postal Code"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
            </div>
          </div>

          {/* Shipping Address Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#4a5568' }}>Shipping Address</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input
                type="text"
                value={shippingAddress.name}
                onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                placeholder="Full Name"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                placeholder="Address"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                placeholder="City"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                placeholder="Postal Code"
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                required
              />
            </div>
          </div>

          {/* Payment Method Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#4a5568' }}>Payment Method</h3>
            <div>
              <label style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentDetails.paymentMethod === 'creditCard'}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, paymentMethod: e.target.value })}
                  style={{ marginRight: '0.5rem' }}
                />
                Credit Card
              </label>
              <label style={{ display: 'inline-block', marginBottom: '0.5rem', marginLeft: '1.5rem' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentDetails.paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, paymentMethod: e.target.value })}
                  style={{ marginRight: '0.5rem' }}
                />
                PayPal
              </label>
              <label style={{ display: 'inline-block', marginBottom: '0.5rem', marginLeft: '1.5rem' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={paymentDetails.paymentMethod === 'cashOnDelivery'}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, paymentMethod: e.target.value })}
                  style={{ marginRight: '0.5rem' }}
                />
                Cash on Delivery
              </label>
              <label style={{ display: 'inline-block', marginBottom: '0.5rem', marginLeft: '1.5rem' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="debitCard"
                  checked={paymentDetails.paymentMethod === 'debitCard'}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, paymentMethod: e.target.value })}
                  style={{ marginRight: '0.5rem' }}
                />
                Debit Card
              </label>
            </div>

            {/* Credit Card Details Section */}
            {paymentDetails.paymentMethod === 'creditCard' && (
              <div style={{ marginTop: '1rem' }}>
                <input
                  type="text"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                  placeholder="Card Number"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                  }}
                  required
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input
                    type="text"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                    placeholder="MM/YY"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                    }}
                    required
                  />
                  <input
                    type="text"
                    value={paymentDetails.cvv}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                    placeholder="CVV"
                    style={{
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                    }}
                    required
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#fbbf24',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            Complete Purchase
          </button>
        </form>
      </div>
      <br></br>
      <footer>
        <div style={{backgroundColor:"gray",color:"white",padding:"30px",width:"1400px"}}>
          <span >
            Copyright ©2024 by Aleena AMIR. All Rights Reserved.
          </span>
        </div>
        </footer>
    </div>
  );
};

export default CheckoutPage;
