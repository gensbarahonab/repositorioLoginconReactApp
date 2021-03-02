import PillBotton from './PillBotton';
function Cards (){
  //JSX 
  return (
    <section className="Cards">
      <h2>Botas</h2>
      <p>
      Logobeing Botas Mujer Rebajas, Zapatos de Tacón Alto de Mujer por Encima de La Rodilla Hebillas Botas de Cuero de Caballero de Tubo Largo Zapatillas
      </p>
      <div>
        <PillBotton text="Realizar compra" type="submit" click={(e) => { alert("Click Realizar compra");}}></PillBotton>
        <PillBotton text="Enviar al carrito" type="submit" click={(e) => { alert("Click Enviar al carrito"); }}></PillBotton>

      </div>
    </section>
  );
}

export default Cards;
