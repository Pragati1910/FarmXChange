  import React from "react";
  import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
    Button, // Import Button for the Dashboard link
  } from "@mui/material";
  import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
  import './InventoryPage.css'; // Custom styling including color scheme and font
  
  const inventoryData = [
    {
      productId: "P001",
      productName: "Tomatoes",
      quantity: 100,
      price: "₹50",
      godownLocation: "Godown A",
      supplier: "Supplier 1",
      stockDate: "2024-09-01",
      lastUpdated: "2024-09-15",
    },
    {
      productId: "P002",
      productName: "Potatoes",
      quantity: 150,
      price: "₹40",
      godownLocation: "Godown B",
      supplier: "Supplier 2",
      stockDate: "2024-09-10",
      lastUpdated: "2024-09-20",
    },
    {
      productId: "P003",
      productName: "Apples",
      quantity: 200,
      price: "₹120",
      godownLocation: "Godown C",
      supplier: "Supplier 3",
      stockDate: "2024-09-12",
      lastUpdated: "2024-09-18",
    },
    {
      productId: "P004",
      productName: "Bananas",
      quantity: 180,
      price: "₹30",
      godownLocation: "Godown D",
      supplier: "Supplier 4",
      stockDate: "2024-09-14",
      lastUpdated: "2024-09-19",
    },
    {
      productId: "P005",
      productName: "Oranges",
      quantity: 250,
      price: "₹70",
      godownLocation: "Godown E",
      supplier: "Supplier 5",
      stockDate: "2024-09-16",
      lastUpdated: "2024-09-22",
    },
    {
      productId: "P006",
      productName: "Cucumbers",
      quantity: 120,
      price: "₹25",
      godownLocation: "Godown F",
      supplier: "Supplier 6",
      stockDate: "2024-09-18",
      lastUpdated: "2024-09-24",
    },
    {
      productId: "P007",
      productName: "Spinach",
      quantity: 90,
      price: "₹60",
      godownLocation: "Godown G",
      supplier: "Supplier 7",
      stockDate: "2024-09-20",
      lastUpdated: "2024-09-25",
    },
    {
      productId: "P008",
      productName: "Carrots",
      quantity: 110,
      price: "₹45",
      godownLocation: "Godown H",
      supplier: "Supplier 8",
      stockDate: "2024-09-22",
      lastUpdated: "2024-09-27",
    },
    {
      productId: "P009",
      productName: "Grapes",
      quantity: 130,
      price: "₹150",
      godownLocation: "Godown I",
      supplier: "Supplier 9",
      stockDate: "2024-09-24",
      lastUpdated: "2024-09-29",
    },
    {
      productId: "P010",
      productName: "Mangoes",
      quantity: 80,
      price: "₹100",
      godownLocation: "Godown J",
      supplier: "Supplier 10",
      stockDate: "2024-09-26",
      lastUpdated: "2024-09-30",
    },
    {
      productId: "P011",
      productName: "Bell Peppers",
      quantity: 75,
      price: "₹80",
      godownLocation: "Godown K",
      supplier: "Supplier 11",
      stockDate: "2024-09-28",
      lastUpdated: "2024-09-30",
    },
    {
      productId: "P012",
      productName: "Onions",
      quantity: 200,
      price: "₹30",
      godownLocation: "Godown L",
      supplier: "Supplier 12",
      stockDate: "2024-09-29",
      lastUpdated: "2024-09-30",
    },
  ];
  
  export default function InventoryPage() {
    const navigate = useNavigate(); // Create navigate function to handle navigation
  
    // Function to handle button click for dashboard navigation
    const goToDashboard = () => {
      navigate("/dashboard");
    };
  
    return (
      <Grid container sx={{ padding: 3, backgroundColor: "#EDF4DF", height: "100vh" }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ marginBottom: 2, color: "#0A1E15" }}>
            Inventory Details
          </Typography>
          
          {/* Dashboard Button */}
          <Button
            variant="contained"
            sx={{ backgroundColor: "#0A1E15", color: "#FFF", '&:hover': { backgroundColor: "#95CF24" } }}
            onClick={goToDashboard}
          >
            Go to Dashboard
          </Button>
        </Grid>
  
        <Grid item xs={12}>
        <TableContainer component={Paper} sx={{ backgroundColor: "#0A1E15" }}>
            <Table sx={{ minWidth: 650 }} aria-label="inventory table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#0B2611" }}>
                  <TableCell sx={{ color: "white" }}>Product ID</TableCell>
                  <TableCell sx={{ color: "white" }}>Product Name</TableCell>
                  <TableCell sx={{ color: "white" }}>Quantity</TableCell>
                  <TableCell sx={{ color: "white" }}>Price</TableCell>
                  <TableCell sx={{ color: "white" }}>Godown Location</TableCell>
                  <TableCell sx={{ color: "white" }}>Supplier</TableCell>
                  <TableCell sx={{ color: "white" }}>Stock Date</TableCell>
                  <TableCell sx={{ color: "white" }}>Last Updated</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventoryData.map((row) => (
                  <TableRow key={row.productId} sx={{ "&:hover": { backgroundColor: "#ADB8A6" } }}>
                    <TableCell>{row.productId}</TableCell>
                    <TableCell>{row.productName}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.godownLocation}</TableCell>
                    <TableCell>{row.supplier}</TableCell>
                    <TableCell>{row.stockDate}</TableCell>
                    <TableCell>{row.lastUpdated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }
  