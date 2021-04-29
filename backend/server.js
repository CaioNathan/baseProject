import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import atendRouter from './routers/atendRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/newSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false,
});

app.use('/api/users', userRouter);
app.use('/api/atend', atendRouter);


app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});