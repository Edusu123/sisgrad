import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from '../components/home/home'

export default _ =>
  <Routes>
    <Route exact path="/" element={<Home />} ></Route>
    <Route path="*" element={<Home />} />
  </Routes>
