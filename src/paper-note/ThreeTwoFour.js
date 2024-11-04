import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import CameraIcon from '@mui/icons-material/Camera';
import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';

function ThreeTwoFour() {
    return (
        <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel3-header"
        >
          <Typography className='tilte-length'>2024-03 ControlSpeech</Typography>
          <div className='icon'>
       
          <div className='undone'>
          <CameraIcon />
          <ScienceIcon />
          </div>
     
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel3-header"
            >
              <Typography className='tilte-length'>2024-04 DiTTo-TTS</Typography>
              <div className='icon'>
              <div className='undone'>
          <CameraIcon />
          <ScienceIcon />
          </div>
         
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel3-header"
            >
              <Typography className='tilte-length'>2024-05 E2 TTS</Typography>
              <div className='icon'>
              <div className='undone'>
          <CameraIcon />
          <ScienceIcon />
          </div>
         
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          </React.Fragment>
    

  
    );
  }
  
  export default ThreeTwoFour;