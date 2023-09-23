import React, { Component } from 'react'
import XucSac1 from './XucSac1'
import "./Trangchu.css"
import Thongtintrochoi from './Thongtintrochoi'
import { connect } from 'react-redux'
class TrangChu extends Component {
    render() {
     
        return (
            <div className='game'>
                <h3 className='text-center'>Game xuc sac</h3>

                <div className='row  text-center pt-5 container-fluid'>
                    <div className='col-4'>
                        <button className='btn btn-success' style={{ width: 200, height: 200, fontSize: "40px" }} onClick={() => {
                            this.props.datCuoc(true)
                        }}>Tai</button>
                    </div>
                    <div className='col-4'>
                        <XucSac1></XucSac1>
                    </div>
                    <div className='col-4'>
                        <button className='btn btn-success' style={{ width: 200, height: 200, fontSize: "40px" }} onClick={() => {
                            this.props.datCuoc(false)
                        }}>Xiu</button>
                    </div>
                </div>
                <Thongtintrochoi></Thongtintrochoi>
                <div className='text-center'>
                    <button className='btn btn-danger' onClick={()=>{
                        this.props.playGame()
                    }}>Click ME</button>
                </div>
            </div>
        )
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: "Dat_cuoc",
                taiXiu
            }
           
            dispatch(action)
        },
        playGame :()=>{
        
            let action ={
                type:"Play_game"
            }
            dispatch(action)
        },

       
    }
}

export default connect(null,mapDispacthToProps)(TrangChu)
