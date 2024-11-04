import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import CameraIcon from '@mui/icons-material/Camera';

function TwoTwoFour() {
    return (
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel2-header"
        >
          <Typography className='tilte-length'>2024-02 CLAM-TTS</Typography>
          <div className='icon'>
          <CameraIcon />
     
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          CLAM-TTS (Contrastive Learning for Audio Modeling in Text-to-Speech) represents an innovative approach to improving neural codec language modeling for zero-shot TTS applications. Here are some key insights into its methodology and implications:
          </Typography>
        </AccordionDetails>
      </Accordion>

  
    );
  }
  
  export default TwoTwoFour;
  