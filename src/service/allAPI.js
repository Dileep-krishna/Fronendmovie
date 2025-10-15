import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

//1. add resume - POST - steps component
export const addResumeAPI = async (reqBody)=>{
    return await commonAPI("POST",`${BASEURL}/all-resumes`,reqBody);
}

//2. get a resume
export const getResumeAPI = async (id)=>{
    return await commonAPI("GET",`${BASEURL}/all-resumes/${id}`, {}); //path parameter
}

//3. update resume
export const updateResumeAPI = async (id,reqBody)=>{
    return await commonAPI("PUT",`${BASEURL}/all-resumes/${id}`, reqBody); 
}

//4. get all resumes
export const getAllResumesAPI = async ()=>{
    return await commonAPI("GET",`${BASEURL}/all-resumes`); 
}

//4. delete all resumes
export const deleteResumesAPI = async (id)=>{
    return await commonAPI("DELETE",`${BASEURL}/all-resumes/${id}`); 
}