import React from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          px: { xs: 2, sm: 0 }
        }}
      >
        <form onSubmit={handleSubmit(ValidateSubmit)} style={{ width: '100%' }}>
          <Card
            variant='outlined'
            sx={{
              p: { xs: 2, sm: 3 },
              width: '100%',
              maxWidth: 600,
              mx: 'auto',
              borderRadius: 2,
              boxShadow: 3
            }}
          >
            <Typography variant='h6' textAlign='center' sx={{ mb: 2 }}>
              Billing Details
            </Typography>

            <Grid container spacing={2}>
              {/* Name */}
              <Grid item xs={12}>
                <TextField
                  {...register('Name', { required: 'Enter Name' })}
                  error={!!errors.Name}
                  label='Name'
                  fullWidth
                />
              </Grid>

              {/* Mobile */}
              <Grid item xs={12}>
                <TextField
                  {...register('mobile', { required: 'Enter mobile' })}
                  error={!!errors.mobile}
                  label='Mobile'
                  type='number'
                  fullWidth
                />
              </Grid>

              {/* Street */}
              <Grid item xs={12}>
                <TextField
                  {...register('Address', { required: 'Enter Address' })}
                  error={!!errors.Address}
                  label='Street'
                  fullWidth
                />
              </Grid>

              {/* City */}
              <Grid item xs={12}>
                <TextField
                  {...register('city', { required: 'Enter City' })}
                  error={!!errors.city}
                  label='City'
                  fullWidth
                />
              </Grid>

              {/* State */}
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('State', { required: 'Enter State' })}
                  error={!!errors.State}
                  label='State'
                  fullWidth
                />
              </Grid>

              {/* Postal */}
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('Pincode', { required: 'Enter Pincode' })}
                  error={!!errors.Pincode}
                  label='Postal'
                  type='number'
                  fullWidth
                />
              </Grid>

              {/* Buttons */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant='contained'
                  component={Link}
                  to='/cart'
                  fullWidth
                  sx={{ textTransform: 'none' }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant='outlined'
                  type='submit'
                  startIcon={<PaidIcon />}
                  fullWidth
                  sx={{ textTransform: 'none' }}
                >
                  Checkout Now
                </Button>
              </Grid>
            </Grid>
          </Card>
        </form>
      </Box>
    </Container>
  )
}

export default Checkout
