import Image from "next/image";
import styles from "./Style.module.css";

export const ProductItem = (props) => {
  return (
    <>
      <div className={`${styles.product__item} item`}>
        <Image
          src={props.image}
          alt={props.name}
          width="300"
          height="300"
          objectFit="cover"
        ></Image>
        <input
          type="hidden"
          name="priceHidden"
          className="priceHidden"
          value={props.priceValue}
        />
        <strong className="itemPrice">{props.price}</strong>
        <h2 className="itemName">{props.name}</h2>
        <span>{props.info}</span>

        <p className="itemDescription">{props.description}</p>

        <strong className={styles.quantity}>Quantidade</strong>
        <input type="number" name="quantity" id="quantity" defaultValue="0" />
      </div>
    </>
  );
};
