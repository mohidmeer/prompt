const Button = ({ label, onClick,width='',inverted=false,ico }) => {
    return (
      <button className={`
      ${width}
      ${inverted?'btn-inverted':'btn'}
      `}      
      onClick={onClick}>
         {label} {ico} 
      </button>
    );
  };
  
  export default Button;