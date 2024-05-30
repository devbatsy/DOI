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

import '../routeStatic/route1.js'

sydDOM.container = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.routeCont() + styleComponent.bg()
        },
        [
            
        ]
    )
}