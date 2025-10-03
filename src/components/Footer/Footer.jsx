import { Typography, Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // Check if we are on product details
  const isProductDetail = location.pathname.startsWith("/product/");

  return (
    <Box
      component="footer"
      sx={{
        position: isProductDetail ? "fixed" : "relative", // 🔥 fixed only on details
        bottom: 0,
        left: 0,
        width: "100%",
        mt: isProductDetail ? 0 : "auto", // pushes footer down in normal pages
        background: "#fff",
        borderTop: "1px solid #ddd",
        zIndex: 1000,
      }}
    >
      <Typography
        component="p"
        textAlign="center"
        sx={{ padding: "10px 0" }}
      >
        © {new Date().getFullYear()} All rights reserved | Made with ❤️ by{" "}
        <span>Soham</span>
      </Typography>
    </Box>
  );
};

export default Footer;
