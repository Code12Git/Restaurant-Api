const {authModel}=require('../models')
const _ =require('lodash')
const { AppError}=require('../utils')
const bcrypt=require('bcryptjs')
const {fromEnv}=require('../utils')
const jwt=require('jsonwebtoken')
const{ CONFLICT,INVALID_REQUEST_DATA,INVALID_CREDENTIAL }=require('../utils/errors')


const register = async (body) => {
    const { email, username, name, password, confirmPassword } = body;
    try {
        if (_.isEmpty(email) || _.isEmpty(username) ||_.isEmpty(name)|| _.isEmpty(password) || _.isEmpty(confirmPassword)) {
            const error = INVALID_REQUEST_DATA;
            error.message = "Please enter all fields";
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const isExist = await authModel.findOne({ email }); 
        if (isExist) {
            const error = CONFLICT;
            throw new AppError(error.code, "Entry Already Exists" ,error.statusCode);
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = await authModel.create({ name, username, email, password: hashedPassword, confirmPassword:hashedPassword }); 
        return user;
    } catch (err) {
        throw err;
    }
};


const login=async(body)=>{
    const {email, password} = body;
      try {
        if (_.isEmpty(email) ||  _.isEmpty(password) ) {
            const error = INVALID_REQUEST_DATA;
            error.message = "Please enter all fields";
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const user = await auth.findOne({ email }); 
        if (!user) {
            const error = INVALID_CREDENTIAL;
            error.message = "Credentials not exist";
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const hashedPassword = await bcrypt.compare(password, user.password);
        if(password != hashedPassword){
              const error = INVALID_CREDENTIAL;
              throw new AppError(error.code, error.message, error.statusCode);
        }
        const token= jwt.sign({ userId: user._id, email: user.email },fromEnv('JWT_SECRET'),{ expiresIn: '1h' });
        return {user,token};
    } catch (err) {
        throw err;
    }
}


module.exports={register,login}