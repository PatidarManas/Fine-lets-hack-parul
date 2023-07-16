import cookieParser from "cookie-parser"
import { User } from "../Models/User.js"
import jwt from "jsonwebtoken"

export const isAuth = async (req, res, next) => {
    try {
        const { token } = req.body;
        if (token) {
            const decoded = await jwt.verify(token.substring(6), 'process.env.JWT_SECRET');
            const newuser = await User.findById(decoded._id);
            req.body.user=newuser
            next();
            } else {
            res.status(304).json({
                success: false,
                message: "not logged in",
            });
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const isLogin = async (req, res) => {
    try {
        console.log("idhar")
        const { token } = req.body;
        // const authHeader = req.headers['authorization']
        // const token = authHeader && authHeader.split(' ')[1]
        console.log(token)

        if (token) {
            const decoded = jwt.verify(token.substring(6), 'process.env.JWT_SECRET');
            const newuser = await User.findById(decoded._id);

            res.status(200).json({
                success: true,
                newuser,
            });
        } else {
            res.status(202).json({
                success: false,
                message: "not logged in",
            });
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
export const isvalidemail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(202).json("")
        }
        else {
            res.status(200).json("")
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
export const register = async (req, res) => {
    try {
        const newuser = await User.create({
            email: req.body.email,
            name: req.body.name,
            mobile: req.body.mobile,
            password: req.body.password,
        })
        // const token = cookieParser(newuser, "secretkey", { expiresIn: "2d" })
        const token = jwt.sign({ _id: newuser._id }, 'process.env.JWT_SECRET',
            {
                expiresIn: "15d",
            });
        res.cookie("token", token, {
            httpOnly: false,
        });

        res.status(200).json(newuser)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const login = async (req, res) => {
    console.log(req.body.email)
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user && user.password === req.body.password) {
            const token = jwt.sign({ _id: user._id }, 'process.env.JWT_SECRET', {
                expiresIn: "15d",
            })
            console.log(token)
            // res.cookie("token",token)
            res.status(200).json(token)

        } else {

            res.status(300).json("invalid Authentication");
        }
    } catch (error) {

        res.status(400).json(error);
    }
}

export const update = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.body.id, {
            email: req.body.email,
            name: req.body.name,
            mobile: req.body.mobile,
            password: req.body.password,
        })

        //delete token
        res.status(200).json("Updated");
    } catch (error) {
        res.status(400).json(error);
    }
}

export const logout = async (req, res) => {
    try {
           
    } catch (error) {
        res.status(400).json(error);
    }
}

export const userdetail = async (req, res) => {
    try {
        const user = await User.findById(req.body.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}