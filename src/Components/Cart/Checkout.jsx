import classes from "./Checkout.module.css";
import ItemCartButton from "../UI/UI-Components/ItemCartButton";
import userValidationSchema from "../../validation/userInfoValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StyledError from "../UI/UI-Components/ErrorYup";
const CheckoutCart = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userValidationSchema) });

  const confirmHandler = (data) => {
    reset();
    console.log(data);
    props.onConfirm(data);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit(confirmHandler)}>
        <div className={classes.user_form}>
          <div className={classes.control}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Seu Nome"
              {...register("name")}
            />
            {errors.name && <StyledError>{errors.name.message}</StyledError>}
          </div>
          <div className={classes.control}>
            <label htmlFor="adress">Endereço</label>
            <input
              type="text"
              id="adress"
              {...register("adress")}
              placeholder="Ex: Rua Oscar Freire"
            />
            {errors.adress && (
              <StyledError>{errors.adress.message}</StyledError>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="postal">Código Postal</label>
            <input
              type="text"
              id="postal"
              {...register("postal")}
              placeholder="000000-00"
            />
            {errors.postal && (
              <StyledError>{errors.postal.message}</StyledError>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              {...register("city")}
              placeholder="Ex: São Paulo"
            />
            {errors.city && (
              <p className={classes.errorMessage}>{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className={classes.actions}>
          <ItemCartButton
            type="submit"
            onClick={() => props.onCancel()}
            className="close"
          >
            Cancelar
          </ItemCartButton>
          <ItemCartButton className="confirm">Confirmar</ItemCartButton>
        </div>
      </form>
    </div>
  );
};

export default CheckoutCart;
