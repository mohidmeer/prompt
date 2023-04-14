const Button = ({ label, onClick,width='',inverted=false }) => {
    return (
      <button className={`
      ${width}
      ${inverted?'btn-inverted':'btn'}
      `}      
      onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default Button;