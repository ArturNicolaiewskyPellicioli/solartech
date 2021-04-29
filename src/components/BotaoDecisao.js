import { Botao } from "./component-styles/botao-decisao-style";


function BotaoDecisao({title, clickFunction}) {
    return (
        <>
            <Botao onClick={clickFunction}>{title}</Botao>
        </>
  );
}

export default BotaoDecisao;
