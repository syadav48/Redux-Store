import { useEffect } from "react";
import { connect } from "react-redux"
import { fetchProducts } from "./redux/action";



function Products(props){
    const { groceries, fetchGroceries} = props

    useEffect(() => {
        fetchGroceries()
    }, [fetchGroceries])

    const renderList = groceries.products.map((product) => {
        const {id, title, image, price, category } = product;
        return(
        <div className='four wide column' key={id}>
           
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'>
                    <img src={image} alt={title} />
                </div>
                <div className='content'>
                    <div className='header'>{title}</div>
                    <div className='meta price'>$ {price}</div>
                    <div className='meta'>{category}</div>
                </div>
            </div>
        </div>
    
    </div>
        )
    })
    return(
        <>
        {renderList}
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        groceries: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchGroceries: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)