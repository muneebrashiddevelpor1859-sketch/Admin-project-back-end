import User from "../models/User.js";


export const registerUser = async (req, res) => {

  try {

    const { name, email, password, phone } = req.body;


    const existingUser = await User.findOne({ email });


    if(existingUser){
      return res.status(400).json({
        message:"User already exists"
      });
    }


    const user = await User.create({
      name,
      email,
      password,
      phone
    });


    res.status(201).json({
      message:"Registration Successful",
      user
    });


  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};