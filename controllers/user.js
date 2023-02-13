const {getUsersbyLogin, getSurveyorbyLogin,getUsers} = require('../db');

const getUser =async (req, res) => {
   let users= await getUsers()
    res.send(users);
}

const getUserLogin = async(req, res) => {
    const {username, password} = req.params;
    let users = await getUsersbyLogin(username,password)
    res.send(users);
    console.log(users)
 }

 const getSurveyorLogin = async(req,res)=>{
    const {id} = req.params;
    let surveyor = await getSurveyorbyLogin(id)
    console.log(surveyor)
    res.send(surveyor);
 }

 // const createUser = async (req, res) => {
//     const {username,password,role} = req.body;
//     console.log(req.body);
//     let newuser = await insertUser(username,password,role);
//     console.log(newuser);
//     res.send(newuser);
// }

// const deleteUser = (req,res)=>{
//     const {id} = req.params;
//     users = users.filter((user)=> user.id !== id);
//     res.send(`${id} deleted`);
// }

// const updateUser = (req,res)=>{
//     const {id} = req.params;
//     const {firstName, lastName, age} = req.body;
//     const userupdated = users.find((user)=> user.id===id);
//     if(firstName)userupdated.firstName = firstName;
//     if(lastName)userupdated.lastName = lastName;
//     if(age)userupdated.age = age;
//     res.send(`${id} updated`);
// }

module.exports = {
    // getUser,
    getUserLogin,
    getSurveyorLogin,
    getUser
}