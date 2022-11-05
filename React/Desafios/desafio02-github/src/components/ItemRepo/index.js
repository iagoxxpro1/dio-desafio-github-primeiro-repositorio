import React from 'react'

import {ItemContainer} from './styles';

function ItemRepo () {
    return (
        <ItemContainer>
            <h3>Iago</h3>
            <p>dio/iago</p>
            <a href="#">Ver repositório</a> <br/>
            <a href="#" className="remover">Remover</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;