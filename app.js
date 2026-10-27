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
6. create Git Repository(
        git init
        git add .
        git commit -m "Initial commit"
7. Rename branch to main (git branch -M main)
8. Create repository in github---logged in to github, create new repository, name is render-node-demo
9. connect project to github(git remote add origin https://github.com/swetharamana/render-node-demo.git, verify git remote -v)
10. push code (git push -u origin main)
11. verify Github(https://github.com/swetharamana/render-node-demo)
12. create a render account( https://render.com)
13. Authorize render
14. Create a new service(new +, choose render-node-demo)

        */