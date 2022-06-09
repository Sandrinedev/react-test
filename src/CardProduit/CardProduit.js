import './CardProduit.css';

export default function CardProduit(props) {
    return (
        <>
        {/* <h1>Card Produit</h1> */}
          <figure>
    <img src={props.image} />
    {/* </img> on peut mais mettre le / c mieux */}

    <figcaption>
       <h3>{props.titre}</h3>
       <p>{props.description}</p>
       <h4>{props.prix}</h4>
       <h5>{props.avis}</h5>
    </figcaption>
  </figure>
  </>
    )
}