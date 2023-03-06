import React from 'react'
import "./b2e.css";
import SiteBlindado from "./imgs/site-blindado.png"
import Garantia from "./imgs/garantia.png"
import ReclameAqui from "./imgs/reclame-aqui.png"
import eBit from "./imgs/ebit.png"
import GS from "./imgs/google-safe.png"
import Pagamentos from "./imgs/pagamentos-b2e.svg"

const B2E = ({LoginB2E}) => {
  return (
    <>
      <div className="b2e-docol bg-funcionario">
        <div className="main-b2e vtex-store-components-3-x-container">
          <div className="title-b2e">
            <h1>Acesso exclusivo para<br></br><span>colaboradores docol</span></h1>
          </div>
          <div className="login-b2e">
            <LoginB2E />
          </div>
        </div>
      </div>
      <div className="rodape-b2e">
        <div className="vtex-store-components-3-x-container">
          <div className="wrapper-rodape">
            <div className="selos-pagamentos-atendimento">
              <div className="pagamentos-b2e">
                <div className="title">
                  <p>Formas de pagamento</p>
                </div>
                <img src={Pagamentos} alt="Formas de Pagamento" />
              </div>
              <div className="pagamentos-b2e selos-certificacoes">
                <div className="title">
                  <p>Selos e certificações</p>
                </div>
                <div className="selos">
                  <img src={ReclameAqui} alt="Reclame Aqui" />
                  <img src={Garantia} alt="Garantia Toda Vida" />
                  <img src={eBit} alt="eBit" />
                  <div className="coluna-selos">
                    <img src={GS} alt="Google Safe" />
                    <img src={SiteBlindado} alt="Site Blindado" />
                  </div>
                </div>
              </div>
              <div className="atendimento-b2e">
                <div className="title">
                  <p>Atendimento</p>
                </div>
                <div className="wrapper-colunas">
                  <div className="coluna-atendimento">
                    <div className="subtitle">
                      <p>DocolResponde</p>
                    </div>
                    <div className="info">
                      <p>0800 474 3333</p>
                    </div>
                  </div>
                  <div className="coluna-atendimento">
                    <div className="subtitle">
                      <p>DocolTelevendas</p>
                    </div>
                    <div className="info">
                      <p>0800 474 9000</p>
                    </div>
                  </div>
                  <div className="coluna-atendimento">
                    <div className="subtitle">
                      <p>E-mail</p>
                    </div>
                    <div className="info">
                      <p>dresponde@docol.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="infos-texto">
              <p>Docol® | Todos os direitos reservados. Razão Social: Docol Indústria e Comércio Ltda. CNPJ: 75.339.051/0001-41. Avenida Edmundo Doubrawa, 1001, Bairro: Zona Industrial Norte, CEP: 89219-502, Joinville-SC.<br></br>Atualizamos a Política de Privacidade do site e ao continuar navegando neste site, entendemos que você está ciente e de acordo com ela. Preços e condições de pagamento exclusivos para compras via internet. Caso os produtos apresentem divergência de valores, o preço válido é o do Carrinho de Compras. Vendas sujeitas a análise e confirmação de dados. Colocar produtos no Carrinho de Compras não garante a reserva dos mesmos.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default B2E