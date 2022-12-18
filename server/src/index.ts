import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dataConnection } from './data'

dotenv.config()
// init app
const app = express()

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

//start server
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