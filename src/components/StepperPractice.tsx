import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import {Button} from "@mui/material"

const Connector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    // top: 10,
    // left: 'calc(-50% + 16px)',
    // right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // borderColor: "linearGradient(89.78deg, #C0D1FF 14.37%, #2A5BDF 110.74%)", //<- Borde de connector
      borderColor : "linear-gradient(89.78deg, #C0D1FF 14.37%, #2A5BDF 110.74%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // borderColor: '#0000CD',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    // borderColor: '#eaeaf0',
    // borderTopWidth: 3,
   borderRadius: "8px",
   borderTopWidth : "8px",
   borderColor: "#ECECED"
  },
}));

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean, completed?: boolean } }>(
  ({ownerState }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .StepIcon-completedIcon': {
      backgroundColor: '#0000CD',
      zIndex: 1,
      fontSize: 18,
    },
    '& .StepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      ...(ownerState.active ? {
        backgroundColor: '#0000CD',
      } : {backgroundColor: '#eaeaf0'}),
      ...(ownerState.completed && {
        backgroundColor: '#0000CD',
      }),
    },
  }),
);

function StepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    return (
      <StepIconRoot ownerState={{ active, completed }} className={className}>
        <div
          className="StepIcon-circle"
        />
      </StepIconRoot>
    );
  }
  
const steps = ['Option A', 'Option B', 'Option C','Option D', 'Option E'];

export default function StepperPractice() {
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
        <Stepper alternativeLabel activeStep={activeStep} connector={<Connector />}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={(props) => (<StepIcon {...props} completed={index <= activeStep - 1} />)}>
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