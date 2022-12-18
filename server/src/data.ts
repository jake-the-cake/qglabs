import mongoose from 'mongoose'

export const dataConnection = ( dataUrl: string ) => {
  mongoose.set('strictQuery', false)
  return mongoose.connect( dataUrl )
}