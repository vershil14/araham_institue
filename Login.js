let http = require("http");
let url = require("url");
const path = require("path");
let Port = 6555;

let loginForm = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<form action="/Login">
    <table>
        <tr>
            <th colspan="2" align="center">
                Login Page
            </th>
        </tr>
        <tr>
            <th> Username</th>
            <td><input type="text" name="Username" >  </td>
        </tr>
        <tr>
            <th> Password</th>
            <td><input type="text" name="Password">  </td>
        </tr>
        <tr>
            <th colspan="2" align="center">
                <input type="submit" value="Login">
                <input type="reset" value="clear">
            </th>
        </tr>
    </table>

</form>
</body>
</html>`

let calcForm =`<head>
    <meta charset="UTF-8">
    <title>Calculator</title>
</head>
<body>
<form action="calc">
    <table>
        <tr>
            <th colspan="2" align="center">
                Calculator
            </th>
        </tr>
        <tr>
            <th> No1</th>
            <td><input type="number" name="no1" >  </td>
        </tr>
        <tr>
            <th> No2</th>
            <td><input type="number" name="no2">  </td>
        </tr>
        <tr>
            <th colspan="2" align="center">
                <input type="submit" value="submit">
                <input type="reset" value="clear">
            </th>
        </tr>
    </table>

</form>
</body>
</html>`

let app = http.createServer((req, res)=>{
    console.log(req.url)

    let urlInfo=url.parse(req.url,true);
    if(urlInfo.path!="/favicon.ico")
    {
        if (urlInfo.path=="/LoginForm")
        {
            res.write(loginForm)
        }
        else if(urlInfo.pathname=="/Login")
        {
            let username = "admin"
            let password = "admin123"

            let Username = urlInfo.query.Username
            let Password = urlInfo.query.Password
            console.log(Username)
            console.log(Password)

            if (Username == username && Password == password)
            {
                res.write(calcForm);
            }

            else{
                res.write(`<html><body></h1>Enter a valid username and password</h1></body></html>`)
            }
        }
        else if(urlInfo.pathname=="/calc"){

            let no1 = parseInt(urlInfo.query.no1);
            let no2 = parseInt(urlInfo.query.no2);

            res.write(`<html><body>Answer : ${(no1 + no2)}</body></html>`);
            res.write('<html><body><a href="calcForm"> calcForm</a></body></html>');
        }
        else {
            res.write(loginForm)
        }
    }
    res.end();

})
app.listen(Port, ()=>{
    console.log(`server is running on Port : ${Port}`)
})