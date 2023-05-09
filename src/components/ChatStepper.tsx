import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import {Button} from "@mui/material"

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0000CD',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0000CD',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    // borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#0000CD',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#0000CD',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: '#0000CD',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <div className="QontoStepIcon-circle" />
    </QontoStepIconRoot>
  );
}

const steps = ['Option A', 'Option B', 'Option C','Option D', 'Option E'];

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = ()=>{
      if(activeStep <4){
          setActiveStep(activeStep + 1);
      }
  }
  const prevStep = ()=>{
      if(activeStep !== 0){
          setActiveStep(activeStep - 1);
      }
  }
  return (
    <div>
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>
                <div style={{display: 'flex', flexDirection: 'column', color: '#0000CD' }}>
                <div>{index + 1}</div>
                  <div>{label}</div>
                  </div>
                </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
        <Button variant="outlined" color="primary" sx={{margin : 5}} onClick={()=> prevStep()}>Previous Step</Button>
        <Button variant="outlined" color="primary" sx={{margin : 5}} onClick={()=> nextStep()}>Next Step</Button>
    </div>
  );
}