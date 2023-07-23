

export const  userMiddilware =(req, res, next)=>{
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const pasword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
const { name, email, password, age } = req.body;
if(!name || name.length < 8){
    return res.send({
        status:404,
        massage:  "name togri kelmadi "
    })
}
if(!email.match(regex) ){
    return res.send({
        status:404,
        massage:  "gmail togri kelmadi raqam va hariflardan iborat gmail kiriting  "
    })
}
if(!password.match(pasword)){
    return res.send({
        status:404,
        massage:  "password   max 8ta raqam va harifdan iborat bolishi ker va 1 harf kotta bn   "
    }) 
}
if(age <18){
    return res.send({
        status:404,
        massage:  "sizning yoshingiz togri kelmaydi bu 18 yoshdan kottalar uchun"
    }) 
}

   return next()
}