import { Box, Button, Rating, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { AddCart } from '../../Store/CartSlice';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'; // ✅ import footer

const ProductDetailCard = ({ Product }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 2, sm: 3, md: 5 },
        pb: { xs: 15, md: 8 }, // spacing above fixed footer
        overflowX: 'hidden',
        boxSizing: 'border-box',
        minHeight: '100vh', // ✅ ensure full height
        position: 'relative',
      }}
    >
      {Product && (
        <>
          {/* Category */}
          <Typography color="gray" sx={{ fontSize: { xs: '0.85rem', md: '1rem' } }}>
            {Product.category}
          </Typography>

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
              fontWeight: 600,
              mb: 1,
              wordWrap: 'break-word',
            }}
          >
            {Product.title} ({Product.brand})
          </Typography>

          {/* Rating */}
          <Box display="flex" alignItems="center" mb={1}>
            <Rating size="small" precision={0.5} value={Product.rating} readOnly />
            <Typography
              variant="body2"
              color="gray"
              sx={{ ml: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}
            >
              {Product.rating} / 5
            </Typography>
          </Box>

          {/* Discount */}
          <Typography
            sx={{ fontWeight: 'bold', mt: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}
            color="green"
          >
            {Product.discountPercentage}% OFF
          </Typography>

          {/* Price */}
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, mt: 1 }}>
            ${Product.price}.00{' '}
            <Typography
              component="span"
              color="gray"
              sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}
            >
              (tax included)
            </Typography>
          </Typography>

          {/* Description */}
          <Typography sx={{ fontWeight: 'bold', mt: 2, fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Description
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, wordBreak: 'break-word' }}
          >
            {Product.description}
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              mt: 3,
              width: '100%',
            }}
          >
            <Button
              fullWidth
              variant="contained"
              color="warning"
              onClick={() => dispatch(AddCart(Product))}
              endIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>

            <Button
              fullWidth
              variant="outlined"
              color="warning"
              onClick={() => dispatch(AddCart(Product))}
              endIcon={<ShoppingCartIcon />}
            >
              <Link
                to="/cart"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}
              >
                Buy Now
              </Link>
            </Button>
          </Box>
        </>
      )}

      {/* ✅ Fixed Footer only for this page */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          bgcolor: 'white',
          borderTop: '1px solid #ddd',
          textAlign: 'center',
          py: 1,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductDetailCard;
