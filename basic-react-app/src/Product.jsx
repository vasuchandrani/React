// import "./Prodct.css" 
import "./Product.css"
import Price from "./Price"

function Product({ title, idx }) {
    let oldPrices = ["12,999", "1,32,000", "5,999", "55,000"];
    let newPrices = ["10,000", "1,30,000", "4,999", "49,999"];

    let Description = [["2,000 DPI", "5 Programable buttons"],
                    ["i7 11th gen", "designed for engineers"],     
                    ["i7 11th gen", "designed for iPad Pro"],
                    ["i5 13th gen", "5hr battery backup"]];

    return (                    
    <div className="Product">
        <h4>{ title }</h4>
        <p>{ Description[idx][0] }</p>
        <p>{ Description[idx][1] }</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>        
    );
}

export default Product;