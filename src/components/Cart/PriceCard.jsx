import { Button, Card, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { ArrowForward } from '@mui/icons-material'
import { Authenticate } from '../../Auth/AuthContext'

const PriceCard = ({ Product }) => {
  const { IsAuth } = useContext(Authenticate)
  const total = Product.reduce((prev, curr) => prev + curr.price * curr.count, 0).toFixed(2)

  return (
    <Card
      className="cart-price-card"
      variant="outlined"
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', md: 400 },
        p: 2,
        boxSizing: 'border-box',
        overflow: 'hidden', // ✅ avoids slider
      }}
    >
      {Product.length > 0 && (
        <>
          <Typography
            variant="h6"
            sx={{ textTransform: 'uppercase', textAlign: 'center', mb: 2 }}
          >
            Order Summary
          </Typography>

          <TableContainer>
            <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: 'gray' }}>Subtotal</TableCell>
                  <TableCell sx={{ color: 'gray' }} align="right">
                    ${total}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: 'gray' }}>Shipping</TableCell>
                  <TableCell sx={{ color: 'gray' }} align="right">
                    Free
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray' }}>Total</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray' }} align="right">
                    ${total}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} sx={{ border: 0 }}>
                    {IsAuth.check ? (
                      <Link to="checkout" style={{ textDecoration: 'none' }}>
                        <Button
                          variant="contained"
                          endIcon={<ShoppingCartIcon />}
                          fullWidth
                        >
                          Buy Now
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          fullWidth
                        >
                          Login Now
                        </Button>
                      </Link>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Card>
  )
}

export default PriceCard
