import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucSac1 extends Component {

    renderXucSac = () => {
        return this.props.mangxucSac.map((xucSac, index) => {
                 console.log( this.props.mangxucSac)
            
         return  <img key={index} src={xucSac.img} alt={xucSac.maSP}></img>
        })
    }
    render() {
        
        return (
    
            <div className='xucSac'>
                {this.renderXucSac()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangxucSac: state.stateXucSac.mangXucSac
    }
}

export default connect(mapStateToProps)(XucSac1)
