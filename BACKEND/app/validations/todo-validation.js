const todoValidationSchema = {
    todo:{
        in:['body'],
        exists:{
            errorMessage:'name field is required'
        },
        notEmpty:{
            errorMessage:'cannot be empty string'
        },
        trim:true    
    },
    category:{
        in:['body'],
        notEmpty:{
            errorMessage:'cannot be empty string'
        },
        isMongoId:{
            errorMessage:'Not a valid category'
        }
    },
    isChecked:{
        in:['body'],
        notEmpty:{
            errorMessage:'cannot be empty string'
        },
        isBoolean:true
    }
}

export default todoValidationSchema