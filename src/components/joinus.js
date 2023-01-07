import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,TextField } from '@mui/material';

function JoinUs() {
  return (
    <section className='section2'>
      <div className='newsletter'>
          <h3> Subscribe to our NewsLetter</h3>
          <div className='input'>
          <TextField
      type="email"
      label="Email"
      variant="filled"
      fullWidth
      required
      />
          <Button variant="contained">Subscribe</Button>
      </div>

      </div>
    </section>
  );
}

export default JoinUs;