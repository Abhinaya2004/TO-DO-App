const idValidationSchema = {
    id:{
        in:['params'],
        isMongoId:{
            errorMessage:'Not a valid id'
        }
    }
}

export default idValidationSchema