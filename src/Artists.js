import React from 'react';
import artistImage from './assets/images/ritika.JPG';

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>

                 <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src="data:image/png;base64,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"></img>
                    </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>
                    
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>IPod.js <span><img style={styles.image} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABra2swMDDIyMjo6Oienp5/f3/39/fi4uKysrL6+vqSkpLX19fNzc1cXFzx8fEcHBylpaU5OTmXl5dsbGxGRkbDw8NLS0tSUlIPDw/a2tphYWErKys0NDS9vb2JiYk/Pz8UFBS1tbWEhIQiIiJ62KPfAAAEwUlEQVR4nO2d6XaqMBRGTR2KA6IoVqUOdXj/V7y42ntvyzmJEEM4sd/+2zTLDWROTjodAAAAAAAAAAAAAAAAAACA5yJebvZdd+w3y7htpR8cdso93UPbWv+I3hvwu/Eeta32SX/fkKBS+37bcjfGzQkWiuO29QpeGhRU6qVtvU5n2qigUtO2BTtJw4ZJ24LDhgWVGrZsOGrccNSy4Wvjhq8tGzZbk97Int6w7fbiNxou87498VG8YfJoN2u2km24cZDlWrShi+Z5KNnw3UmeiWDDgZM8U8GGPSd59mDoFRjaAEO/wNAGGPoFhjbA0C8wtAGGfoGhDTD0CwxtgKFfYGgDDP0CQxtg6BcY2gBDv8DQBhj6BYY2wNAvMLQBhn6BoQ0w9AsMbYChX2BoAwz9AkMbYOiX32bo5vT1m2DDiZM8j4IN107yXAg2dFIQS4c2hRnOHz9AXz46LcxQbd8ezDBVwg0Lx2xgzYQ5GS7P0DUwhCEMYQhDGMIQhjCEIQxrGp7WWXbMstX8GQ27L+f827/lh6xqmLcgDOevXJjH+HJ9EsPTSBf+MDp3n8Bwa47VdT6Fbni5F75yTKMKhWR4qhITMDZXraINN7NKeUTGyISSDavHkjPFtRNsWGcRYxKiYb1VGr2iWMO64Q61H6pUw/qrUGtNTlINq9Wi35mFZWizPvPGZyXT0O5XZQEZ2q0i9sMx1DYUs3g6ncbaMso2GSIN+d52lH58/f0j1aQIxfDIpvz5gvjXzL1EiYZcKRwuSokWXJhMriQKNORimOZbkmybM+k2QRgyg3q+lmTeNRMeXKAh/eFjfow7pxF5mUchz3BFE+l61UzvvBxFWKIh/dn62Pu0tqEPQ54hLYb6ETx9GrQgyjMkk79jWo/+ZUtKYhyAIfnycq2gUqTFoF+0OMMr6ZCRnWrfSMuJIzLTH4Dh0mC4LCcOwHBPktQy7JAlKXGGC5KknmG5/yrP8EqqR1M5JE3LWP5XSsuh6b4kUvEGUA5PZATPjmu/IC98RlbbxBnSJq6jv3iO/nraeMozpNv1NdOEFdPKM2TmJ+iA4RPmPi46jyHPkLnjgnY2P2GGwPSLlmd4YubR+CaRdNmKWoku68szpIOLggsjeGHSMW9boCG7rjYgydj5ROZJCDRUbMK8dBkrf0KKyU2ioeYU4ui/444pgjcOgRjS4cUXw8Ml2SRZqr3ql3S7hRpan9HrcZmJNLQ9aMkudIs05Fq6CvD3Yco03NZfxi+GFfycnExDqxtgNXu/hBpa3E+mmwqQalj7pmLtTIBYQ2YkbEK/tiHXcFtnQ0ZfP/Mv17DOWzRN/Es2rLwziu3LBGGojpXyME0ZSzdUq/uFsa/blBiGYTHQNW/WH5tfYAiG6qTZAHUjSnd3/1++oVLXCX+J7nBZ5VhQCIYFCzLqzf/tcnsOwxvJcdCLb3dv99KjfqI/ZENLYBi+Ydayoek8jxvqHtxwDT+34hLz+cXm0Y/rXOHiQvqHuNOrfBhuP65fjCMfB7gJxfgQxuORD2MzaeeaqFb8gJrM7x0j9kL//vjAlt3jIfycMGN22DshsZk6b4ZzE1/q/Ny21g+mk1XXJatJ3SllAAAAAAAAAAAAAAAAAAAA6fwB/sJF1y9HbnEAAAAASUVORK5CYII=" /></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Ritika</p>
                    </div>
                    
                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting!</h5>
                </div>
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Artists;