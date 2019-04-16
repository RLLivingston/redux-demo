import {connect} from 'react-redux';
import React from 'react';
import { Title } from '../Title/Title';
import { addItemToCart } from '../Actions/Actions'

class TitleList extends React.Component {
    title = 'Title';
    description = 'Description';
    
    render() {
        let x = [];
        

        this.props.titles.map((t) => {
            x.push(<Title
                key={t.id}
                description={t.description}
                title={t.name}
                format={t.format}
                price={t.price}
                addTitleToCart={this.props.addItemToCart}/>)
        })
        
        return(
            <div>
                <div>
                    {x}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
      titles: state.TitleState.titles
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: () => { dispatch(addItemToCart())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleList);