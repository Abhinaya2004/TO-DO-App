const categoryValidationSchema = {
    name:{
        in:['body'],
        exists:{
            errorMessage:'name field is required'
        },
        notEmpty:{
            errorMessage:'cannot be empty string'
        },
        trim:true
    }
}

export default categoryValidationSchema