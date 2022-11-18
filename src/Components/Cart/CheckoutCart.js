import classes from "./Checkout.module.css";
import ItemCartButton from "../UI/ItemCartButton";
import { useState, useRef } from "react";

const CheckoutCart = (props) => {
  const nameRef = useRef();
  const adressRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const [userInfo, setUserInfo] = useState({
    name: "",
    adress: "",
    postal: "",
    city: "",
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredAdress = adressRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    // check

    for (const key in userInfo) {
      console.log(`${key}: ${userInfo[key]}`);
    }

    console.log(userInfo.length);
    // clear input after submit
    setUserInfo({
      name: "",
      adress: "",
      postal: "",
      city: "",
    });
  };

  const clearUserInfo = () => {
    setUserInfo({
      name: "",
      adress: "",
      postal: "",
      city: "",
    });
    props.onCancel();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.user_form}>
        <div className={classes.control}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            value={userInfo.name}
            onChange={(event) =>
              setUserInfo({
                ...userInfo,
                name: event.target.value,
              })
            }
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="adress">Endereço</label>
          <input
            type="text"
            id="adress"
            ref={adressRef}
            value={userInfo.adress}
            onChange={(event) =>
              setUserInfo({
                ...userInfo,
                adress: event.target.value,
              })
            }
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Código Postal</label>
          <input
            type="text"
            id="postal"
            ref={postalRef}
            value={userInfo.postal}
            onChange={(event) =>
              setUserInfo({
                ...userInfo,
                postal: event.target.value,
              })
            }
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            ref={cityRef}
            value={userInfo.city}
            onChange={(event) =>
              setUserInfo({
                ...userInfo,
                city: event.target.value,
              })
            }
          />
        </div>
      </div>

      <div className={classes.actions}>
        <ItemCartButton type="button" onClick={clearUserInfo} className="close">
          Cancelar
        </ItemCartButton>
        <ItemCartButton className="confirm">Confirmar</ItemCartButton>
      </div>
    </form>
  );
};

export default CheckoutCart;
