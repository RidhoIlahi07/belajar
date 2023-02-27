import Users from "../model/user.js";
import path from "path";
import fs from "fs";
import { Op } from "sequelize";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    const { username, email, password, confPassword, role } = req.body;

    console.log(req.body);
    
    // const user = await Users.findOne({
    //     where: {
    //         username: username
    //     }
    // });

    // if (user) return res.status(400).json({ msg: "user telah digunakan" })
    // if (passwordReqBody !== confPassword) return res.status(400).json({ msg: "Passowrd Not Match" })

    // const encryptPasword = await bcrypt.genSalt();
    // const hashPassword = await bcrypt.hash(password, encryptPasword);//pasword yang sudah di encrypt

    // if (req.files === null) return res.status(400).json({ msg: "No input file " });
    // const file = req.files.file;
    // const filesize = file.data.length;
    // const ext = path.extname(file.name); // encrypt nama file 
    // const fileName = file.md5 + ext;
    // const url = `${req.protocol}://${req.get("host")}/ProfilImage/${fileName}`;
    // const allowtype = ['.png', '.jpg', '.jpeg'];

    // if (!allowtype.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    // if (filesize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

    // file.mv(`./asset/ProfilImage/${fileName}`, async (err) => {
    //     if (err) return res.status(500).json({ msg: err.message })
    //     try {
    //         await Users.create({
    //             username: username,
    //             email: email,
    //             password: hashPassword,
    //             profilePic: fileName,
    //             url: url,
    //             role: role,
    //         });
    //         res.status(200).json({ msg: "register Berhasil" })
    //     } catch (error) {
    //         console.log("🚀 ~ file: UserControlers.js:46 ~ file.mv ~ error:", error);
    //     }
    // });
}