const app = require('./app');
const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
