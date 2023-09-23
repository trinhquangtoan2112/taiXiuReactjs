const stateDefault = {
    taiXiu: true,
 
    soBanThang: 0,
    TongSo: 0,
    mangXucSac: [
        { maSP: 1, img: "./img/1.png" },
        { maSP: 2, img: "./img/2.png" },
        { maSP: 3, img: "./img/3.png" },
        { maSP: 4, img: "./img/4.png" },
        { maSP: 5, img: "./img/5.png" },
        { maSP: 6, img: "./img/6.png" },
    ],
}


const BaiTapGameXucSac = (state = stateDefault, action) => {
  
    switch (action.type) {
        case "Dat_cuoc": {
            state.taiXiu = action.taiXiu
            return { ...state }
        }
        case "Play_game": {
           
            let mangNgauNgien = []
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let ngauNhien = 
                    { maSP: soNgauNhien, img:`./img/${soNgauNhien}.png` }
                

                mangNgauNgien.push(ngauNhien)
            }
            state.mangXucSac = mangNgauNgien;

           state.TongSo +=1;

           let tongSoDiem =mangNgauNgien.reduce((tongso,ss123,index)=>{
                     return tongso +=ss123.maSP
           },0)

           if((tongSoDiem>11 && state.taiXiu===true) || (tongSoDiem<=11 &&!state.taiXiu)){
                       state.soBanThang +=1;
           }
            return {...state};
         
          
        }
        default: return { ...state }
    }
}

export default BaiTapGameXucSac