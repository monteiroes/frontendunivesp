import Head from "next/head";
import * as React from "react";
import Image from "next/image";
import { ProductItem } from "../components/ProductItem";
import styles from "../styles/Home.module.css";
import store from "store";
import router, { useRouter } from "next/router";

export default function Home() {
  const number = "+551299999200";

  const products = [
    {
      image: "http://dev.monsi.com.br/univesp/01/images/mussarela.jpg",
      name: "Queijo muçarela",
      info: "Peças de aproximadamente 1Kg",
      description:
        "Queijo do tipo muçarela, feito com leite da roça, ótimo para incrementar suas receitas. Vendido em peças de aproximadamente 1 Kg.",
      price: "34.90",
      priceType: "Kg",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/queijo_minas.png",
      name: "Queijo branco (minas)",
      info: "",
      description:
        "Queijo branco do tipo minas frescal, ótimo para acompanhar o café da manhã.",
      price: "28.90",
      priceType: "Kg",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/leite.jpg",
      name: "Leite da roça",
      info: "",
      description:
        "Leite direto da fazenda para sua mesa, natural e livre de aditivos. Vendido por litro.",
      price: "4.00",
      priceType: "L",
    },
    {
      image:
        "http://dev.monsi.com.br/univesp/01/images/manteiga_caseira_com_nata_7232_600.jpeg",
      name: "Manteiga caseira (pote 500g)",
      info: "",
      description:
        "Manteiga caseira, perfeita para um pão quentinho. Vendida em pote de 500g.",
      price: "18.00",
      priceType: "Un",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/ovos.jpg",
      name: "Ovo caipira",
      info: "(Dúzia)",
      description: "Ovos caipiras vermelhos orgânicos. Vendidos em dúzias.",
      price: "10.00",
      priceType: "dúzia",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/mel.jpg",
      name: "Mel puro",
      info: "Pote 500g",
      description:
        "Mel colhido direto da fazendo, para consumo direto ou adoçar suas bebidas e receitas. Vendido em potes de 500g.",
      price: "15.00",
      priceType: "Un",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/frango.jpg",
      name: "Frango caipira",
      info: "",
      description:
        "Frango caipira inteiro, limpo e pronto para preparo. Vendido por unidades, pesado na hora.",
      price: "32.00",
      priceType: "Kg",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/porco.jpg",
      name: "Porco caipira",
      info: "",
      description:
        "Porco caipira, limpo e pronto para preparo. Vendido inteiro ou em partes por Kg, pesado na hora.",
      price: "25.00",
      priceType: "Kg",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/cordeiro.jpg",
      name: "Cordeiro",
      info: "",
      description:
        "Cordeiro, limpo e pronto para preparo. Vendido inteiro ou em partes por Kg, pesado na hora..",
      price: "35.00",
      priceType: "Kg",
    },
    {
      image: "http://dev.monsi.com.br/univesp/01/images/carne_seca.jpg",
      name: "Carne seca",
      info: "",
      description: "Carne seca, vendida por Kg.",
      price: "20.00",
      priceType: "Kg",
    },
  ];

  const setRequest = (thisItem) => {
    thisItem.preventDefault();
    const items = document.querySelectorAll(".item");
    const itemsArray = [];

    items.forEach((item) => {
      const itemName = item.querySelector(".itemName").innerHTML;
      const itemDescription = item.querySelector(".itemDescription").innerHTML;
      const itemPrice = item.querySelector(".priceHidden").value;
      const itemQuantity = item.querySelector("#quantity").value;

      if (itemQuantity >= 1) {
        const itemData = {
          name: itemName,
          description: itemDescription,
          price: itemPrice,
          quantity: itemQuantity,
          total: parseFloat(
            parseInt(itemQuantity) * parseFloat(itemPrice)
          ).toFixed(2),
        };

        itemsArray.push(itemData);
      } else {
        return;
      }
    });

    if (itemsArray.length >= 1) {
      store.set("productList", JSON.stringify(itemsArray));
    }

    router.push("/finalizar");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Produtos | Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.banner}></div>
        <div className={styles.infos}>
          <div>
            {/* <div className={styles.logo}></div> */}
            <div>
              <h1>Empresa</h1>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>

          <div>
            <strong>Horario de atendimento</strong>
            <p>Seg / Sex das 08h - 19h</p>
          </div>
          <div>
            <strong>Contato</strong>
            <p>
              <strong>Tel:</strong> XX-99999-9999
            </p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.products}>
          <h2>Conheça nossos produtos</h2>

          <div className={styles.products__wrapper}>
            {products.map((product, id) => (
              <ProductItem
                key={id}
                image={`/api/imageproxy?url=${encodeURIComponent(
                  product.image
                )}`}
                name={product.name}
                info={product.info}
                description={product.description}
                priceValue={product.price}
                price={`R$ ${product.price} / ${product.priceType}`}
              />
            ))}
          </div>
        </section>

        <a href="#" onClick={setRequest} className={styles.btnWhatsApp}>
          Pedir no WhatsApp
        </a>
      </main>
    </div>
  );
}
