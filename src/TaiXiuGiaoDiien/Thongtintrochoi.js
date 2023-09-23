import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Thongtintrochoi extends Component {

  render() {
    return (
        <div className='text-center'>
        <h3>Ban chon:<span>{this.props.taiXiu?"Tai":"Xiu"}</span></h3>
        <h3>So thang:<span>{this.props.banThang}</span></h3>
        <h3>Tong so lan:<span>{this.props.tongSolan}</span></h3>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        banThang: state.stateXucSac.soBanThang,
        tongSolan: state.stateXucSac.TongSo,
        taiXiu: state.stateXucSac.taiXiu
    }
}

export default connect(mapStateToProps)(Thongtintrochoi)