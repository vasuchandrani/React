
import Product from "./Product.jsx"

function ProductTab() {

    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };

    return (                
        <div style={styles}>    
            <Product title="One plus Mobile" idx={0}/>
            <Product title="Dell laptop" idx={1}/>
            <Product title="Apple Pencil" idx={2}/>
            <Product title="ASUS laptop" idx={3}/>
        </div>                                             
    );                                         
}

export default ProductTab;