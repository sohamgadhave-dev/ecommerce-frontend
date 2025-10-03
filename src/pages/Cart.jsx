import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import CartItem from '../components/Cart/CartItem'
import { useSelector } from 'react-redux'
import BackButton from '../components/BackButton/BackButton'
import PriceCard from '../components/Cart/PriceCard'
import StepperPage from '../components/Process/StepperPage'

const Cart = () => {
  const CartItems = useSelector((state) => state.CartStore.value)

  return (
    <Container sx={{ pb: 5 }}>
      <BackButton />
      <StepperPage activeStep={0} />

      {CartItems.length ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: { xs: 3, md: 4 },
            width: '100%',
            overflow: 'hidden', // ✅ stops scrollbars
          }}
        >
          {/* Cart Items Section */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '60%' },
              p: { xs: 1, md: 2 },
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* Table headings (hidden on mobile) */}
            <Box
              className="cart-heading"
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <Typography component="p" sx={{ flex: 1 }}>
                Product
              </Typography>
              <Typography component="p" sx={{ flex: 1 }}>
                Quantity
              </Typography>
              <Typography component="p">Total</Typography>
            </Box>

            {CartItems.map((product, index) => (
              <CartItem key={index} Product={product} />
            ))}
          </Box>

          {/* Order Summary */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '40%' },
              maxWidth: { md: 400 }, // ✅ never exceeds 400px
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <PriceCard Product={CartItems} />
          </Box>
        </Box>
      ) : (
        <Typography
          variant="h4"
          color="gray"
          sx={{ textAlign: 'center', p: '10%', width: '100%' }}
        >
          No Items Available
        </Typography>
      )}
    </Container>
  )
}

export default Cart
