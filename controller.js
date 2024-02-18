const userRegister = (req,res)=>{} 

const userLogin = (req,res)=>{}

const homepage = (req,res)=>{
    res.status(200).json({message:"Home Page"})
}






module.exports = {
    userRegister:userRegister,
    userLogin:userLogin,
    homepage:homepage
}