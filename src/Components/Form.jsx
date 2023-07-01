import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;



  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.fullname.length > 5 && validEmail.test(inputValue.email)) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
      setShow(false);
    }
  };



  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="data-input" type="text" onChange={(e) => 
          setInputValue({ ...inputValue, fullname: e.target.value })}
          placeholder="Full name"/>
        <input className="data-input" type="email" onChange={(e) =>
          setInputValue({ ...inputValue, email: e.target.value })}
          placeholder="Email"
        />
        <button type="submit">Enviar</button>
      </form>

      {show && (<div className="data">
          <h2>
            Muchas Gracias {inputValue.fullname}, Le hemos enviado un mensaje de confirmación a su correo electrónico.
          </h2>
        </div>
      )}
      {err && <h2>Verifique su información nuevamente</h2>}

    </div>
  );
};

export default Form;
