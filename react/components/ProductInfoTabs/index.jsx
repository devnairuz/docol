import { useState } from 'react';
import { useProduct } from 'vtex.product-context';

import styles from './productInfoTabs.css'

const ProductInfoTabs = ({ children }) => {
  const { product } = useProduct();
  const [active, setActive] = useState(0);
  const [openTabHeader, setOpenTabHeader] = useState(false);

  const handleBtnControl = (index) => {
    setActive(index)

    setOpenTabHeader(!openTabHeader)
  }

  return (
    <>
      {product?.properties?.length > 0 ? (
      <div className={styles.productInfoTabs}>
        <div className={openTabHeader ? styles.tabHeaderOpen : styles.tabHeader}>
          {product?.properties?.map((info, index) => (
            <button
              type="button"
              onClick={() => handleBtnControl(index)}
              key={info.name}
              data-control-for={info.name}
              className={`${styles.infoControl}${active === index ? ` ${styles.active}`:''}`}>{info.name}</button>
          ))}

          {children && (
            <button
              type="button"
              onClick={() => handleBtnControl(4)}
              key="Avaliações"
              data-control-for="Avaliações"
              className={`${styles.infoControl}${active === 4 ? ` ${styles.active}`:''}`}>Avaliações</button>
          )}
        </div>

        {product?.properties?.map((info, index) => (
          <div
            className={`${styles.tabContent}${active === index ? ` ${styles.active}`:''}`}
            key={index}
            data-content-for={info.name}
            dangerouslySetInnerHTML={{__html: info.values}}
          />
        ))}

        {children && (
        <div
          className={`${styles.tabContent}${active === 4 ? ` ${styles.active}`:''}`}
          key="Avaliações"
          data-content-for="Avaliações"
        >
          {children}
        </div>
        )}
      </div>
    ) : (
      <div className={styles.productInfoTabs}>
        <div className={openTabHeader ? styles.tabHeaderOpen : styles.tabHeader}>
          {children && (
            <button
              type="button"
              onClick={() => handleBtnControl(0)}
              key="Avaliações"
              data-control-for="Avaliações"
              className={`${styles.infoControl}${active === 0 ? ` ${styles.active}`:''}`}>Avaliações</button>
          )}
        </div>

        {children && (
        <div
          className={`${styles.tabContent}${active === 0 ? ` ${styles.active}`:''}`}
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
