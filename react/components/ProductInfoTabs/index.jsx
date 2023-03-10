import React, { useState, useEffect } from 'react';
import { useProduct } from 'vtex.product-context';

import styles from "./productInfoTabs.css"

const ProductInfoTabs = ({ children }) => {
  const { product } = useProduct();
  const [active, setActive] = useState('');
  const [productInfos, setProductInfos] = useState([]);
  const [openTabHeader, setOpenTabHeader] = useState(false);
  
  useEffect(() => {
    setProductInfos(product?.properties)

    setActive(product?.properties[0].name)
  }, [product])

  const handleBtnControl = (name) => {
    setActive(name)

    setOpenTabHeader(!openTabHeader)
  }

  return (
    <div className={styles.productInfoTabs}>
      <div className={openTabHeader ? styles.tabHeaderOpen : styles.tabHeader}>
        {productInfos?.map((info, index) => (
          <button
            type="button"
            onClick={() => handleBtnControl(info.name)}
            key={info.name}
            data-control-for={info.name}
            className={`${styles.infoControl}${active === info.name ? ` ${styles.active}`:''}`}>{info.name}</button>
        ))}

        {children && (
          <button
            type="button"
            onClick={() => handleBtnControl('Avaliações')}
            key="Avaliações"
            data-control-for="Avaliações"
            className={`${styles.infoControl}${active === "Avaliações" ? ` ${styles.active}`:''}`}>Avaliações</button>
        )}
      </div>

      {productInfos?.map((info, index) => (
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
  )
}

export default ProductInfoTabs
