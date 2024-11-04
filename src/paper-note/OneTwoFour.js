import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';

import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import CameraIcon from '@mui/icons-material/Camera';
import ScienceIcon from '@mui/icons-material/Science';

function OneTwoFour() {
    return (
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='tilte-length'>2024-01 BASE TTS</Typography>
          <div className='icon'>
          <CameraIcon />
          <ScienceIcon />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>chatGPT</h3>
          "BASE TTS" refers to a project that focuses on creating a large-scale Text-to-Speech (TTS) model, leveraging vast amounts of data and advanced neural architectures. Here are some key lessons that might be drawn from such an endeavor:
          <p>1. <strong>Data Quality and Diversity:</strong> Utilizing a diverse dataset of 100,000 hours ensures that the model can generalize across different accents, languages, and speech styles. Quality of data is equally crucial; noisy or poorly labeled data can hinder performance.</p>
          <p>2. <strong>Model Architecture:</strong> Building a billion-parameter model allows for capturing complex speech patterns and nuances. Experimenting with different architectures, such as transformers or recurrent neural networks, can lead to significant improvements in naturalness and intelligibility.</p>
          <p>3. <strong>Training Techniques:</strong> Techniques like transfer learning, fine-tuning, and data augmentation can enhance model performance. It’s important to find the right balance between training on a large dataset and using specialized data for fine-tuning.</p>
          These lessons highlight the complexity and multifaceted nature of building high-quality TTS systems and underscore the importance of a systematic approach throughout the development process.

          <h3>Lab</h3>
          <h3>Note</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>

    );
  }
  
  export default OneTwoFour;
  