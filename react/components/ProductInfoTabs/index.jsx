import React, { useState, useEffect } from 'react';
import { useProduct } from 'vtex.product-context';

import styles from "./productInfoTabs.css"

const ProductInfoTabs = ({ children }) => {
  const { product: { properties } } = useProduct();
  const [active, setActive] = useState('');
  const [productInfos, setProductInfos] = useState([]);
  
  useEffect(() => {
    setProductInfos(properties)
    setActive(properties[0].name)
  }, [])

  if(!productInfos) {
    return
  }

  return (
    <>
    {productInfos && (
      <div className={styles.productInfoTabs}>
        <div className={styles.tabHeader}>
          {productInfos.map((info, index) => (
            <button
              type="button"
              onClick={() => setActive(info.name)}
              key={info.name}
              data-control-for={info.name}
              className={`${styles.infoControl}${active === info.name ? ` ${styles.active}`:''}`}>{info.name}</button>
          ))}

          {children && (
            <button
              type="button"
              onClick={() => setActive('Avaliações')}
              key="Avaliações"
              data-control-for="Avaliações"
              className={`${styles.infoControl}${active === "Avaliações" ? ` ${styles.active}`:''}`}>Avaliações</button>
          )}
        </div>

        {productInfos.map((info, index) => (
          <div
            className={`${styles.tabContent}${active === info.name ? ` ${styles.active}`:''}`}
            key={index}
            data-content-for={info.name}
            dangerouslySetInnerHTML={{__html: info.values}}
          />
        ))}

        {children && (
        <div
          className={`${styles.tabContent}${active === "Avaliações" ? ` ${styles.active}`:''}`}
          key="Avaliações"
          data-content-for="Avaliações"
        >
            {children}
        </div>
        )}
      </div>
    )}
    </>
  )
}

export default ProductInfoTabs
