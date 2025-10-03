import React, { useContext } from 'react'
import { Avatar, Box, Button, Card, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form"
import AvatarImg from '../assets/avatar.png'
import './auth.css'
import BackButton from '../components/BackButton/BackButton'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { Authenticate } from '../Auth/AuthContext'
import { toast } from 'react-toastify'

const Login = () => {
  const AuthData = useSelector(state => state.AuthStore.value)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setAuth } = useContext(Authenticate)

  function handleLogin(data) {
    if (AuthData.some(e => e.email === data.Email && e.pass === data.Psw)) {
      const Account = AuthData.findIndex(e => e.email === data.Email)
      toast.success("Login Successfully!");
      setAuth({ user: Account, check: true })
      navigate('/')
    } else {
      toast.error("Invalid Account!");
    }
  }

  return (
    <Container className='Auth'>
      <BackButton />
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", minHeight: "80vh", width: "100%" }}>
        <form onSubmit={handleSubmit(handleLogin)} style={{ width: "100%" }}>
          <Card 
            className='card' 
            variant='outlined' 
            sx={{ width: "100%", maxWidth: "400px", mx: "auto", p: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}
          >
            <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }} />
            <Typography variant='h5'>Sign In</Typography>
            <TextField {...register("Email", { required: "Enter Email" })} error={!!errors.Email} variant='standard' label="Enter Email" type='email' fullWidth />
            <TextField {...register("Psw", { required: "Enter Password" })} error={!!errors.Psw} variant='standard' label="Enter Password" type='password' fullWidth />
            <FormControlLabel control={<Checkbox color="success" />} label="Remember Me" sx={{ alignSelf: "flex-start" }} />
            <Box sx={{ width: "100%", display: 'flex', justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
              <Link to='/register'><Button variant='text'>Create Account</Button></Link>
              <Button variant='contained' type='submit' endIcon={<ArrowForward />}>Login</Button>
            </Box>
          </Card>
        </form>
      </Box>
    </Container>
  )
}

export default Login
