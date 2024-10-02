import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PickupPage.css'; // Custom styling
import mapImage from '../assets/map.png'; // Updated path

const PickupPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleVehicleChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handlePickupSubmit = (event) => {
    event.preventDefault();
    console.log("Source:", source, "Destination:", destination, "Vehicle:", vehicleType);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard'); // Navigate to the dashboard
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ marginBottom: 2, color: "#0A1E15" }}>
          Pickup Page
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <form onSubmit={handlePickupSubmit}>
          <TextField
            label="Source"
            fullWidth
            variant="outlined"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label="Destination"
            fullWidth
            variant="outlined"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            sx={{ marginBottom: 3 }}
          />

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
            <InputLabel>Vehicle Type</InputLabel>
            <Select
              value={vehicleType}
              onChange={handleVehicleChange}
              label="Vehicle Type"
            >
              <MenuItem value="Truck">Truck</MenuItem>
              <MenuItem value="Tempo">Tempo</MenuItem>
              <MenuItem value="Lorry">Lorry</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#0A1E15", '&:hover': { backgroundColor: "#95CF24" }, marginBottom: 2 }}
          >
            Submit Pickup Request
          </Button>
        </form>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleGoToDashboard}
          sx={{ backgroundColor: "#95CF24", '&:hover': { backgroundColor: "#0A1E15" } }}
        >
          Go to Dashboard
        </Button>
      </Grid>

      <Grid item xs={12} md={6}>
        <img 
          src={mapImage} 
          alt="Static Map" 
          style={{ width: "100%", height: "400px", objectFit: "cover" }} 
        />
      </Grid>
    </Grid>
  );
};

export default PickupPage;
