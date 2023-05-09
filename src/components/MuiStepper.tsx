import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {Button} from "@mui/material"

export const MuiStepper = ()=>{
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = ()=>{
        if(activeStep <3){
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
            <Stepper alternativeLabel activeStep={activeStep}>
                <Step>
                    <StepLabel>First</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Second</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Third</StepLabel>
                </Step>
            </Stepper>
            <h3>{activeStep + 1}</h3>

            <Button variant="outlined" color="primary" onClick={()=> prevStep()}>Previous Step</Button>
            <Button variant="outlined" color="primary" onClick={()=> nextStep()}>Next Step</Button>

        </div>
    )
}