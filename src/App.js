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


    if (!email) {
      setError('Email is required.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSuccess('');

     
    const data = { email };

    try {
      const response = await axios.post('http://34.225.132.160:8002/api', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.status === 200) {
        setSuccess('Form Submitted');
      } 
    } catch (error) {
      setError('An error occurred. Invalid email domain.');
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

