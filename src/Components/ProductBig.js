import '../App.css';

const ProductBig = (props) => {
    return ( 
        <div className='bigPrd'>
            <img src={props.imageURL} alt="" />
            <h3>{props.productName}</h3>
            <p>{props.price}</p>
        </div>
     );
};
 
export default ProductBig;