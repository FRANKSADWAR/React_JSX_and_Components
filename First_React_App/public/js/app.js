/**
 *  To make the application data-driven, the Props and state change are used, but additionally, property 
 *  initializers are also used to simplify the React component classes
 */


class ProductList extends React.Component {
    // define state inside the constructor method AND USE IT TO HOLD DATA INSTEAD OF READING DIRECTLY FROM seed
    constructor(props){
        super(props);
        this.state = {
            products : [], // initialize the state to an empty array
        };

        // bind the custom method to this
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    // using the component did mount method to set the state which then displays the products
    componentDidMount(){
        this.setState({ 
            products: Seed.products
        });
    }
    // we are then using immutability so that the initial state of the products is not changed
    handleProductUpVote(productId){
        // the map function is used to traverse the products array and returns a new array
        const nextProducts = this.state.products.map((product) => {
            // then a check of whether the current product matches the productId
            if(product.id === productId){
                // if it does, then we create a new object, copying the properties from the original product object
                return Object.assign({}, product,{
                    // then overwrite the vote property on the new product object to increment the vote count
                    votes: product.votes + 1,
                });
            }
            else{
                // if the product is not the one specified by the productId, then we return the product unmodified as it is
                return product;
            }
        });
        // then the setState method is used to update the state
        this.setState({
            products: nextProducts,
        });
        //console.log(productId + 'was upvoted');
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