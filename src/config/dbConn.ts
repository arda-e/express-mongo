import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI || '', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        } as any)
    } catch (error: any) {
        console.log(`Error: ${error.message}`)
    }
}

export default connectDB