export default function profile_validate(values) {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Required";
    }
  
    return errors;
  }
  