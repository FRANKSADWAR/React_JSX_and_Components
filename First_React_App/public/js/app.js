/**
 * To make the application data-driven, the Props and state change are used
 */
class ProductList extends React.Component {
    render(){
        const product = Seed.products[0];
        return (
            <div className="ui unstackable items">
                <Product
                    id={product.id}
                    title = {product.title}
                    description ={product.description}
                    url = {product.url}
                    votes = {product.votes}
                    submitterAvatarUrl = {product.submitterAvatarUrl}
                    productImageUrl ={product.productImageUrl}
                />
            </div>
        )
    }
}

class Product extends React.Component{
    render(){
        return (
            <div className="item">
                <div className="image">
                    <img src="images/products/image-aqua.png"/>
                </div>
                <div>
                    <div className="middle aligned content">
                        <div className="description">
                            <a>Fort Knight</a>
                            <p>Authentic renaisance actirs, delivered in just 2 weeks</p>
                        </div>
                        <div className="extra">
                            <span> Submitted by: </span>
                            <img className="ui avatar image" src="images/avatars/daniel.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ProductList/>, document.getElementById('content'));