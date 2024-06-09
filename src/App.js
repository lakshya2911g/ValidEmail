import React, { useState } from "react";
import Logo from "./components/logo";
import Cards from "./components/cards";
import Detail from "./components/detail";
import Email from "./components/email";
import Orrange from "./components/orrangeButton";
import { Box, Container } from "@mui/material";

import axios from "axios";

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Front-end validation
    if (!email) {
      setError('Email is required.');
      return;
    }

    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Reset previous messages
    setError('');
    setSuccess('');

 
     emailRegex = /[a-zA-Z0-9._%+-]+@ez+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (emailRegex.test(email)) {
      setError('Email ends with @ez.works is not allowed.');
      return;
    }
    else{
      setSuccess('Form Submitted');
      return;
    }
    
    const data = { email };

    try {
      

      const response = await axios.post('http://3.228.97.110:9000/api', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });


      // Handle API response
      console.log(response);
      if (response.status === 200) {
        setSuccess('Form Submitted');
      } else if (response.status === 422) {
        const result = await response.json();
        setError(result.error || 'Invalid email domain.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            "@media (max-width: 850px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box>
            <Logo />
            <Detail />
          </Box>
          <Cards />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            justifyContent: "left",
            "@media (max-width: 850px)": {
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
            },
          }}
        >
          <Email email={email} setEmail={setEmail} />
          <Orrange handleSubmit={handleSubmit} />
        </Box>

        {error && <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</div>}
        {success && <div style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>{success}</div>}
      </Container>
    </Box>
  );
}

export default App;
