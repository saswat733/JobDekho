import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnClodinary=async (localFilePath)=>{
    try {
        if(!localFilePath){
            return null
        }

        //upload file on cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        //file uploaded succesfully
        console.log('file is uploaded on cloudinary',resource.url)
        return response

    } catch (error) {

        //remove the locally saved temporary files as the upload operation failed
        fs.unlinkSync(localFilePath)
        
    }
}

export default uploadOnClodinary