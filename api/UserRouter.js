const express = require("express")
const User = require("../models/User")
const UserRouter = express.Router();


UserRouter.get("/users", async (req, res) => {
    let users = await User.find({}) // Se hace con find ( find viene de mongoose) para buscar dentro de la colección, así devuelve todos los objetos que hay en Author
    try {


        return res.status(200).send({
            success: true,
            users
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

UserRouter.get("/finduser/:id", async (req, res) => {
    const {
        id
    } = req.params
    try {
        let user = await User.findById(id) 

        //errores antes de la respuesta final

        if (!user) {
            res.status(400).send({
                success: false,
                message: error.message
            })
        }

        res.status(200).send({
            success: true,
            message: "Usuario encontrado",
            user
        })

        // res.status(200).json({ // también se puede poner con json
        //     success: true,
        //     message: "Autor encontrado",
        //     author
        // })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
})


UserRouter.post("/newuser", async (req, res) => {
    const {
        name,
        email,
        password,
        DNI,
        BankData,
        Role

    } = req.body
    let user = new User({ // viene del modelo user
        name,
        email,
        password,
        DNI,
        BankData,
        Role
    })

    if (name.length < 5 || password.length  < 5) {
        return res.status(400).send({
            success: false,
            message: "Nombre o contraseña demasiado corto"
        })
    }

    if (DNI.length < 9 ) {
        return res.status(400).send({
            success: false,
            message: "Nombre o contraseña demasiado corto"
        })
    }

    if (!name || !email || !password || !DNI || !BankData || Role) {
        return res.status(400).send({
            success: false,
            message: "No has completado todos los campos"
        })
    }

    // if (!(/^[_A-Za-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email))) // así con mayúsculas
    if (!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email)))
        return res.status(400).send({
            message: "El formato de tu correo electronico en invalido!"
        })

    await user.save()
    return res.status(200).send({
        success: true,
        user
    })
})

UserRouter.put("/updateuser/:id", async(req, res)=>{
    const {id} = req.params
    const {name, surname, age} = req.body
    try {
        
   
    await User.findOneAndUpdate(id,{name, email, password, DNI, BankData, Role}) 
    
    if (!name || !email || !password || !DNI || !BankData || Role) {
        return res.status(400).send({
            success: false,
            message: "No has completado todos los campos"
        })
    }
   

    return res.status(200).send({
        success: true,
        message: "Usuario Modificado"
    })

} catch (error) {
    res.status(500).send({
        success: false,
        message: error.message
    })
}
})


UserRouter.delete("/deleteuser/:id", async (req, res)=>{
    const{id} = req.params
    try {
        await User.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "Usuario eliminado"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        }) 
    }
})



module.exports = UserRouter