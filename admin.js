let http =require('http');
let url = require('url');

let Port = 6555;
let adduser=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>addUser</title>
</head>
<body>
<form action="/Adduser">
    <table>
        <div>
            Full Name : <input type="text" placeholder="Enter full Name" name="name">
        </div>
        <br>
        <div>        Age : <input type="number" placeholder="Enter your Age" name="age">
        </div>
        <br>
        <div>
            Email : <input type="text" placeholder="Enter your Email" name="email">
        </div>
        <br>
        <div>
            Mobile No. : <input type="number" placeholder="Enter your Mobile No." name="mobileNo">
        </div>
        <br>
        <div>
            Password : <input type="text" placeholder="Enter your Password" name="password">
        </div>
        <br>
        <div>
            <input type="submit" value="submit" name="submit">
            <input type="reset" value="reset" name="reset">
        </div>
    </table>
</form>
</body>
</html>`

let app = http.createServer((req,res)=>
{
    let addUser= url.parse(req.url, true)
    console.log(req.url)
    if(addUser.path !== "/favicon.ico"){
        if(addUser.path == "/adduser"){
            res.write(adduser)
        }
        else if(addUser.pathname == "/Adduser"){
            let Name = addUser.query.name
            let Email= addUser.query.email
            let Age = addUser.query.age
            let MobileNo = addUser.query.mobileNo
            let Password = addUser.query.password

            console.log(Name)
            console.log(Email)
            console.log(Age)
            console.log(MobileNo)
            console.log(Password)

            res.write(`<html><body>Name : ${Name}<br></body></html>`);
            res.write(`<html><body>Email : ${Email}<br></body></html>`);
            res.write(`<html><body>Age : ${Age}<br></body></html>`);
            res.write(`<html><body>MobileNo : ${MobileNo}<br></body></html>`);
            res.write(`<html><body>Password : ${Password}<br></body></html>`);

        }else {
            res.write(adduser)
        }

    }
    res.end();
})

app.listen(Port, ()=>{
    console.log("App is Running on Port No: "+ Port)
})