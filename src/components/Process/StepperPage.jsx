import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Order Summary', 'Billing', 'Checkout'];

const StepperPage = ({ activeStep }) => {
  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.85rem' }, // smaller text on mobile
                  whiteSpace: 'nowrap', // prevent wrapping
                }}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperPage;
