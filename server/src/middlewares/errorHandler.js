const errorHandler=(req,res,err,next)=>{
    const statusCode=err.statusCode();
    return res.status(statusCode).json({
        success:false,
        message:err.message||"Internal server error",
        error:err.error|| "something went wrong"
        
    })
    next();

}
export {errorHandler};