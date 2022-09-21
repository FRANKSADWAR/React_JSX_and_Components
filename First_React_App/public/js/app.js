/**
 * To make the application data-driven, the Props and state change are used
 */

class ProductList extends React.Component {
    // define state inside the constructor method AND USE IT TO HOLD DATA INSTEAD OF READING DIRECTLY FROM seed
    constructor(props){
        super(props);
        this.state = {
            products : [],
        }
    }
    handleProductUpVote(productId){
        console.log(productId + 'was upvoted');
    }
    
    
    render(){


        // sort the votes from the highest order to the lowest AND THEN MODIFIED TO USE STATE
        const products = this.state.products.sort((a, b) => 
            (b.votes - a.votes));

        const productComponents = products.map((product) => (
            <Product
                key = {'product-' + product.id}
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = {product.description}
                votes = {product.votes}
                submitterAvatarUrl = {product.submitterAvatarUrl}
                productImageUrl = {product.productImageUrl}
                onVote = {this.handleProductUpVote}
            />
        ));
        // pass the Product with props to the return function
        return (
            <div className="ui unstackable items">
                { productComponents }
            </div>
        );
    }
}

class Product extends React.Component{
    // this function will call the prop function from Product in ProductList
    handleUpVote(){
        this.props.onVote(this.props.id);
    }

    // React invokes constructor() first thing when initializing our component
    constructor(props){
        super(props); // always call this one first
        this.handleUpVote = this.handleUpVote.bind(this);
    }

    render(){
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl}/>
                </div>
                <div>
                    <div className="middle aligned content">
                        <div className="header">
                            <a onClick={this.handleUpVote}>
                                <i className="large caret up icon"/>
                                {this.props.votes}
                            </a>
                        </div>
                        <div className="description">
                            <a href={this.props.url}> {this.props.title} </a>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="extra">
                            <span> Submitted by: </span>
                            <img className="ui avatar image" src={this.props.submitterAvatarUrl}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ProductList/>, document.getElementById('content'));