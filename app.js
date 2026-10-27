const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello From Render");
})
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING at port ${PORT}`);
})

/*
1. created nodeJS project render-node-demo. initalized project---npm init -y(file package.json is created)
2. install express(file package-lock.json is created).
3. created app.js
4. updated package.json file "start":node app.js", in scripts( we can execute app.js directly by using npm start)
5. created .gitignore(contents are node_modules and .env)