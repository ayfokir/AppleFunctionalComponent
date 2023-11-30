import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import For04 from './For04';

function Productpage ()
{
  let [ product, setProduct ] = useState( [] )
  console.log(useParams())
  let { productID } = useParams();
  useEffect( () =>
  {
    fetch( "http://localhost:7777/iphones" )
      .then( ( res ) => res.json() )
      .then( ( products ) =>
      {
        // const productList = products.products;
        const singleProduct = products.filter(
          ( x ) => x.product_url == productID
        );
        setProduct( () => singleProduct ); // or setProduct(singleProduct);
      } )
      .catch( ( error ) =>
      {
        console.log( "the error is" + error );
      } );
  }, [ productID ] );
  console.log( product )
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      { product.length ?
        <section className="internal-page-wrapper top-100">
          <div className="container">
            { product.map( ( product ) =>
            {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let productPage = "/iphone/" + id;
              let details = product.product_description;

              let productDiv = (
                <div key={ id } className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{ title }</div>
                      <div className="brief-description">{ Brief }</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={ `col-sm-12 col-md-6 my-auto` }>
                      <div className="starting-price">
                        { `Starting at ${ StartPrice }` }
                      </div>
                      <div className="monthly-price">{ PriceRange }</div>
                      <div className="product-details">{ details }</div>
                    </div>

                    <div className={ `col-sm-12 col-md-6` }>
                      <div className="prodict-image">
                        <img src={ img } />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            } ) }
          </div>
        </section>
: <For04 />}
    </>
          
  );
}

export default Productpage
