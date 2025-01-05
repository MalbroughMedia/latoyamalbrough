import { loadStripe } from '@stripe/stripe-js';

    const stripePromise = loadStripe('your-publishable-key-here');

    document.getElementById('buy-now').addEventListener('click', async () => {
      const stripe = await stripePromise;
      
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'your-price-id', quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (error) {
        console.error('Error:', error);
      }
    });
