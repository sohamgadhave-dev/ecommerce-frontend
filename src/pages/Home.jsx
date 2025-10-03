import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";
import HomeImg from "../assets/home.jpg";
import SecurityIcon from "@mui/icons-material/Security";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChatIcon from "@mui/icons-material/Chat";
import { ProductCategory } from "../Api/ProductApi";
import Loader from "../components/Spinner/Loader";
import ProductCard from "../components/Card/ProductCard";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Mobileproduct"],
    queryFn: ProductCategory,
  });

  const Products = data || [];

  return (
    <>
      {/* Banner Image */}
      <Box>
        <img
          src={HomeImg}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          loading="lazy"
          alt="Home Img"
        />
      </Box>

      <Container>
        {/* Popular Products Section */}
        <Typography variant="h5" align="center" p={2}>
          Popular Products
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",      // mobile: 1 product per row
              sm: "1fr 1fr",  // tablet: 2 per row
              md: "1fr 1fr 1fr", // desktop: 3 per row
              lg: "1fr 1fr 1fr 1fr", // large screens: 4 per row
            },
            gap: 3,
            mb: 4,
          }}
        >
          {isLoading && <Loader />}
          {Products.map((product) => (
            <ProductCard key={product.id} ProductData={product} />
          ))}
        </Box>

        {/* Our Services Section */}
        <Typography variant="h5" align="center" p={2}>
          Our Services
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 2,
            marginBottom: 4,
          }}
        >
          <Card className="b-item" sx={{ boxShadow: 2, p: 2 }} variant="outlined">
            <Typography component="div" className="b-icon">
              <SecurityIcon color="warning" fontSize="large" />
            </Typography>
            <Typography variant="h6">Secure Package</Typography>
            <Typography component="p" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, rem.
            </Typography>
          </Card>

          <Card className="b-item" sx={{ boxShadow: 2, p: 2 }} variant="outlined">
            <Typography component="div" className="b-icon">
              <LocalShippingIcon color="warning" fontSize="large" />
            </Typography>
            <Typography variant="h6">Free Delivery</Typography>
            <Typography component="p" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, rem.
            </Typography>
          </Card>

          <Card className="b-item" sx={{ boxShadow: 2, p: 2 }} variant="outlined">
            <Typography component="div" className="b-icon">
              <ChatIcon color="warning" fontSize="large" />
            </Typography>
            <Typography variant="h6">24/7 Service</Typography>
            <Typography component="p" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, rem.
            </Typography>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Home;
