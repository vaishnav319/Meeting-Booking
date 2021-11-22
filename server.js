const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//init middleware
app.use(express.json({ extended: false }));

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// Define Routes
app.use('/register', require('./routes/Register'));
app.use('/login', require('./routes/Login'));
app.use('/profile', require('./routes/Profile'));
app.use('/bookmeet', require('./routes/Booking'));

//connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Running');
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
