import '../App.css';

const ProductSmall = (props) => {
    return ( 
        <div className='smallPrd'>
            <img src={props.imageURL} alt="" />
            <h3>{props.productName}</h3>
            <p>{props.price}</p>
        </div>
     );
};

export default ProductSmall;