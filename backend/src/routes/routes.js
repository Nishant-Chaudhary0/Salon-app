import express from 'express'
import servicesSchema from '../schema/servicesSchema.js';
import userSchema from '../schema/userSchema.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { auth } from '../../middleware/auth.js';

const router = express.Router();

//service route

router.get("/services",async(req, res) => {
    try {
        const services = await servicesSchema.find();
        res.status(200).json(services);
    } catch (error) {
        console.log("error in sercices route",error)
    }
})

router.post("/services",async(req, res) => {
    try {
        const {name, description, image, price} = req.body;
        const newServices = new servicesSchema({name, description, image, price});
        await newServices.save();
        res.status(200).json({message:"service added"});
    } catch (error) {
        console.log("error in services route",error)
    }
})

router.get("/services/:id",async(req, res) => {
    try {
        const service = await servicesSchema.findById(req.params.id);
        if(!service){
            console.log("no service of such")
        }
        res.status(200).json(service)
    } catch (error) {
        console.log("error in gettting service by id",error)
    }
})

router.put("/services/:id",async(req, res) => {
    try {
        const updatedService = await servicesSchema.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true});

        if(!updatedService) return res.status(404).json({error:"Not found"});

        res.json(updatedService);
    } catch (error) {
        console.log("error in updating services",error);
    }
})

router.delete("/services/:id",async(req, res) => {
    try {
        const deleteService = await servicesSchema.findByIdAndDelete(req.params.id);

        if(!deleteService){
            console.log("cannot find service")
        }

        res.json(deleteService);
    } catch (error) {
        console.log("error deleting service",error)
    }
})

//user route

router.get("/user",async(req, res) => {
    try {
        const user = await userSchema.find();
        res.status(200).json(user);
    } catch (error) {
        console.log("error in user route",error)
    }
})

router.get("/user/:id",async(req, res) => {
    try {
        const user = await userSchema.findById(req.params.id);
        if(!user) {
            console.log("user not found");
        }
        res.status(200).json(user)
    } catch (error) {
        console.log("error in userid route", error)
    }
})

router.post("/signup", async(req, res) => {
    try {
        const {name, email, password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userSchema({name, email, password: hashedPassword});
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log("error in create user route",error)
    }
})

router.post("/login",async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = userSchema.findOne({email});

        if(!user) return res.status(404).json({message:"user not found"})
        const isMatch = await bcrypt.compare(password, user.password);

        const token =jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )

        res.json({success:true, token})
    } catch (error) {
         console.error("Login error", error);
    res.status(500).json({ success: false, message: "Server error" });
    }
})

router.put("/user/:id", async(req, res) => {
    try {
        const user = await userSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
         res.json({
      success: true,
      message: "User updated successfully",
      user
    });
    if(!user) return res.status(404).json({message:"no user found"})
    } catch (error) {
        console.log("error in user update route",error)
    }
})

router.delete("/user/:id",async(req, res) => {
    try {
        const user = await userSchema.findByIdAndDelete(req.params.id);

        if(!user)return res.status(404).json({message:"user not found"})

        res.status(200).json({message:"user deleted succesfully"})
    } catch (error) {
        console.log("error in deleting user",error)
    }
})

export default router;