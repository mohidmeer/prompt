const Button = ({ type, label, onClick,width='',inverted=false,ico }) => {
    return (
      <button className={`
      ${width}
      ${inverted?'btn-inverted':'btn'}
      `}      
      onClick={onClick}  type={type} >
         {label} {ico} 
      </button>
    );
  };
  
  export default Button;