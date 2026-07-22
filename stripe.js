import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

export const PLANS = {
  pro: {
    name: 'Plan Pro',
    priceId: import.meta.env.VITE_STRIPE_PRO_PRICE_ID,
    price: 19,
    priceRegular: 39,
  },
  agencias: {
    name: 'Plan Agencias',
    priceId: import.meta.env.VITE_STRIPE_AGENCY_PRICE_ID,
    price: 59,
    priceRegular: 119,
  },
  politico: {
    name: 'Modo Político',
    priceId: import.meta.env.VITE_STRIPE_POLITICAL_PRICE_ID,
    price: 24,
    priceRegular: 49,
  },
}

export async function redirectToCheckout(priceId, userId, email) {
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    successUrl: `${window.location.origin}/app/dashboard?success=true`,
    cancelUrl: `${window.location.origin}/precios?cancelled=true`,
    customerEmail: email,
    clientReferenceId: userId,
  })
  if (error) throw error
}

export async function redirectToPortal() {
  const res = await fetch('/api/create-portal-session', { method: 'POST' })
  const { url } = await res.json()
  window.location.href = url
}
