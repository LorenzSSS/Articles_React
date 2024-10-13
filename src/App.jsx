import { useState } from 'react'
import './App.css'
import { Container } from './components/Container/Container'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Card } from '../src/components/Card/Card'

function App() {


  return (
    <>
      <Container />
      <Header />
      <Main />
      <Card />
    </>
  )
}

export default App
