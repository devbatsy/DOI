import {
    createElement,
    mount,
    sydDOM,
    preState,
    useState,
    setStyle,
    styleComponent,
    getState
} from '../../sydneyDom.js'


setStyle(
    [
        {
            nameTag:'headerFunc',
            style:{
                height:'fit-content',
                width:'100%',
                // border:'1px solid green',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                padding:'5px 10px 5px 20px',
                position:'sticky',
                top:'0px',
                zIndex:'900'
            }
        },
        {
            nameTag:'routeCont',
            style:{
                height:'100vh',
                width:'100vw',
                background:'#333',
                position:'relative',
                overflowX:'hidden',
                color:'#fff',
                backgroundImage:'url("../assets/newbg.png")',
                fontFamily:'ubuntu'
            }
        },
        {
            nameTag:'scoreCred',
            style:{
                minWidth:'150px',
                width:'50%',
                display:'flex',
                flexWrap:'wrap',
                columnGap:'20px',
                rowGap:'10px',
                height:'fit-content',
                // background:'red',
                padding:'5px',
                color:'#fff',
                justifyContent:'flex-end'
            }
        },
        {
            nameTag:'vCash',
            style:{
                height:'fit-content',
                width:'fit-content',
                minWidth:'80px',
                display:'flex',
                columnGap:'10px',
                padding:'5px',
                background:'#171717',
                border:'1px solid #fff',
                borderRadius:'10px',
                alignItems:'center',
                justifyContent:'space-between',
            }
        },
        {
            nameTag:'shadow',
            style:{
                // boxShadow:'-2px -2px 5px #171717,2px 2px 5px 1.5px #333 inset'
            }
        },
        {
            nameTag:'shadowIn',
            style:{
                boxShadow:'2px 2px 3px #000000bc inset'
            }
        },
        {
            nameTag:'bg',
            style:{
                backgroundSize:'contain',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            }
        }
    ]
)

sydDOM.headerFunc = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.headerFunc(),
            class:'headerFunc'
        },
        [
            sydDOM.homeButton(),
            sydDOM.scoreCred()
        ]
    )
}

sydDOM.scoreCred = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.scoreCred()
        },
        [
            sydDOM.vCash(),
            sydDOM.vPoint()
        ]
    )
}

sydDOM.vCash = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.vCash()
        },
        [
            createElement('p',{style:''},[`${preState(['vCash','data'],'0')}`]),
            createElement('img',{style:'height:25px;width:25px;',src:'../assets/vcash.png'})
        ],
        {
            createState:{
                stateName:'vCash',
                state:{data:'0'}
            },
            type:'vCash'
        }
    )
}

sydDOM.vPoint = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.vCash()
        },
        [
            createElement('p',{style:''},[`${preState(['vPoint','data'],'0')}PT`]),
            createElement('img',{style:'height:25px;width:25px;',src:'../assets/vpoint.png'})
        ],
        {
            createState:{
                stateName:'vPoint',
                state:{data:'0'}
            },
            type:'vPoint'
        }
    )
}

sydDOM.homeButton = () =>{
    return createElement(
        'div',
        {
            style:'min-height:40px;min-width:40px;border-radius:50%;background-image:url("../assets/home.png");'+styleComponent.bg()
        }
    )
}