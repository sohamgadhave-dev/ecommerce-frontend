import React from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import PaidIcon from '@mui/icons-material/Paid'
import StepperPage from '../components/Process/StepperPage'

const Checkout = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function ValidateSubmit () {
    try {
      navigate('payment', { replace: true })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Container sx={{ mt: 3, mb: 5 }}>
      {/* Stepper */}
      <StepperPage activeStep={1} />

      <Box className='checkout'>
        <form onSubmit={handleSubmit(ValidateSubmit)}>
          <Card
            variant='outlined'
            className='form-container'
            sx={{
              p: { xs: 2, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            <Typography
              variant='h6'
              textAlign='center'
              sx={{ mb: 1 }}
            >
              Billing Details
            </Typography>

            {/* Name */}
            <TextField
              {...register('Name', { required: 'Enter Name' })}
              error={!!errors.Name}
              label='Name'
              fullWidth
            />

            {/* Mobile */}
            <TextField
              {...register('mobile', { required: 'Enter mobile' })}
              error={!!errors.mobile}
              label='Mobile'
              type='number'
              fullWidth
            />

            {/* Street */}
            <TextField
              {...register('Address', { required: 'Enter Address' })}
              error={!!errors.Address}
              label='Street'
              fullWidth
            />

            {/* City */}
            <TextField
              {...register('city', { required: 'Enter City' })}
              error={!!errors.city}
              label='City'
              fullWidth
            />

            {/* State + Postal in a row */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2
              }}
            >
              <TextField
                {...register('State', { required: 'Enter State' })}
                error={!!errors.State}
                label='State'
                fullWidth
              />
              <TextField
                {...register('Pincode', { required: 'Enter Pincode' })}
                error={!!errors.Pincode}
                label='Postal'
                type='number'
                fullWidth
              />
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: 2,
                mt: 2
              }}
            >
              <Button
                variant='contained'
                component={Link}
                to='/cart'
                fullWidth={true}
                sx={{ textTransform: 'none' }}
              >
                Cancel
              </Button>
              <Button
                variant='outlined'
                type='submit'
                startIcon={<PaidIcon />}
                fullWidth={true}
                sx={{ textTransform: 'none' }}
              >
                Checkout Now
              </Button>
            </Box>
          </Card>
        </form>
      </Box>
    </Container>
  )
}

export default Checkout
