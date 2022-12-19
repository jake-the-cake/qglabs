import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dataConnection } from './data'

// init app
const app = express()
dotenv.config()

// global variable
const port = 4200

// middleware
app.use( cors() )
app.use( express.urlencoded({ extended: true }))
app.use( express.json() )

// basic routes
app.get( '/', ( req, res ) => {
  res.send( 'home' )
})

//start server and database
app.listen(
  port,
  () => {
    console.log( `QGLabs server running on port ${ port }.` )
    dataConnection( process.env.DATABASE as string )
      .then(() => {
        console.log( 'Database connection established.' )
      })
      .catch(( err ) => {
        console.log( err.message )
      })
  }
)