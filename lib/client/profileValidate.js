import { checkUserNameTaken } from "@/ApiRequests/user";

export default async function  profile_validate(values) {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Required";
    }
    if (/\s/.test(values.name)) {
      errors.name = "Spaces are not allowed in the username";
    }
    await checkUserNameTaken({username:values.name})
    .then((res)=>{
      if (res.name===true){ errors.name="Username Already Taken"}
    })



  
    return errors;
  }
  
