export default function product_validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } if (!values.price) {
    errors.price = "Required";
  } if (!values.category){
    errors.category="Required"
  } else if (values.category==='Select a Category'){
    errors.category="Please select a valid Category"
  }if(!values.model){
    errors.model="Required"
  }else if(values.model==='Select a Model'){
    errors.model="Please select a valid Model"
  }if(!values.description){
    errors.description="Required"
  }else if(values.description.length<80){
    errors.description="Must be greater than 80 letters"
  }
  if(!values.instruction){
    errors.instruction="Required"
  }
  
  if (values.images.length===0){
    errors.images="Atleast One Image Required"
  }

  return errors;
}
