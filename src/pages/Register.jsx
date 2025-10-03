import React, { useContext } from 'react'
import { Avatar, Box, Button, Card, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form"
import AvatarImg from '../assets/avatar.png'
import './auth.css'
import BackButton from '../components/BackButton/BackButton'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCreate } from '../Auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Authenticate } from '../Auth/AuthContext'

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const { setAuth } = useContext(Authenticate)
  const Accounts = useSelector(state => state.AuthStore.value)

  function AccountCreate(data) {
    dispatch(AuthCreate(data))
    setAuth({ user: Accounts.length, check: true })
    navigate('/')
  }

  return (
    <Container className='Auth'>
      <BackButton />
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", minHeight: "80vh", width: "100%" }}>
        <form onSubmit={handleSubmit(AccountCreate)} style={{ width: "100%" }}>
          <Card 
            className='card' 
            variant='outlined' 
            sx={{ width: "100%", maxWidth: "400px", mx: "auto", p: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}
          >
            <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }} />
            <Typography variant='h5'>Sign Up</Typography>
            <TextField {...register("name", { required: "Enter Name" })} error={!!errors.name} variant='standard' label="Enter Name" type='text' fullWidth />
            <TextField {...register("email", { required: "Enter Email" })} error={!!errors.email} variant='standard' label="Enter Email" type='email' fullWidth />
            <TextField {...register("psw", { required: "Enter Password" })} error={!!errors.psw} variant='standard' label="Enter Password" type='password' fullWidth />
            <FormControlLabel control={<Checkbox color="success" />} label="Remember Me" sx={{ alignSelf: "flex-start" }} />
            <Box sx={{ width: "100%", display: 'flex', justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
              <Link to='/login'><Button variant='text'>Login</Button></Link>
              <Button variant='contained' type='submit'>Create Now</Button>
            </Box>
          </Card>
        </form>
      </Box>
    </Container>
  )
}

export default Register
