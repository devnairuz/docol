import React from 'react';
import {useProduct} from 'vtex.product-context';


const ProductContext = () => {
  const {product:{properties}} = useProduct()
  const Descricaocurta = properties.find(prop => {
    if (prop.name == 'Descricao-Curta' && prop.values != undefined) {
      return prop.values
    }
    return
  })
  console.log('Descricao-Curta', Descricaocurta)
  return <div dangerouslySetInnerHTML={{__html: Descricaocurta?.values[0]}}></div>
}

export default ProductContext
