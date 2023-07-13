const app = require("express")();
const PORT = 3000 || process.env.PORT;

app.get("/",(req,res)=>{
	res.send("YOU HAVE VISITED THE ROOT ROUTE OF THE API");
});

app.listen(PORT,()=>{
	console.log(`Server started on PORT ${PORT}`);
})
