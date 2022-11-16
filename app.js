const express = require ('express')
// import express from 'express'

// const author = require('./package.json')
// import file from './package.json'

//? localhost:8000/api/v1/users/25

//! protocolo TCP/IP

const port = 9001
const app = express()


// app.get('/hola', (peticion, respuesta) => {
//    respuesta.json({
//        message: 'Hola mundo'
//    })
// })

//app.delete('/hola', (peticion, respuesta) => {
//    console.log(peticion)
//    respuesta.json({
//        verb: peticion.method,
//        params: peticion.params,
 //       body: peticion.body,
//        ip: peticion.ip
 //   })
//})
//? peticion -> request -> req
//? respuesta -> response -> res

//app.get('/text/:mensaje/', (req, res) => {
 //   const mensaje = req.params.mensaje
 //   res.json({
 //       message: `Este es el mensaje por parametro: ${mensaje}`
//    })
//})


//? este listem, va a estar hasta abajo de nuestro app.js
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})