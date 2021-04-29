import { Botao } from "./component-styles/botao-navegacao-style";


function BotaoNavegacao({title, clickFunction, color}) {
    return (
        <Botao style={{backgroundColor: color}} onClick={clickFunction}>{title}</Botao>
  );
}

export default BotaoNavegacao;
