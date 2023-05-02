import React from "react";

const Text = () => {
  return (
    <div className="row" id="section1" style={{ backgroundColor: "#1b1464" }}>
      <div className="col-12 mt-5">
        <h2 className="text-center fw-bold">Sobre Nosotros</h2>
      </div>
      <div className="col m-5 mt-3">
        <div className="fs-5" style={{ letterSpacing: "0.05rem" }}>
          {/* Nasza <b>Firma PHU Marpol Mariusz Michalicki</b> rozpoczęła
          działalność w sektorze transportowym w roku 1997. Realizujemy zlecenia
          na transport ciężarowy w całej Europie i Skandynawii. Nasz transport
          obejmuje głównie Niemcy, a także Holandię, Hiszpanię, Szwecję,
          Norwegi i Wielką Brytanię. Z każdym rokiem firma
          poszerza zakres działania oraz zwiększa posiadany sprzęt, aby jeszcze lepiej pomóc Naszym klientom.
          Obecnie posiadamy kilkadziesiąt zestawów z naczepami typu: ze stałą
          zabudową (Koffer) lub z plandeką, typu firanka (kurtynowe), chłodnie i
          izotermy. */}
          <b>TRANSURUGUAY </b> 
 Iniciamos la actividad en 2020. Desde entonces, ha estado tomando medidas sistemáticas para desarrollar su organización. Transportamos mercancías en Uruguay y Brasil. Actualmente, disponemos de una flota propia de varias decenas de conjuntos que permiten el transporte. Transportaremos diversos tipos de mercancías, incluidas las peligrosas, para nuestros clientes. Nuestra ventaja es un equipo calificado de conductores experimentados y una flota moderna. Estamos enfocados en el desarrollo constante.
Le invitamos cordialmente a cotizar con nosotros su operación.
          <br />
          <a href="#section4">Link a cada sector especializado.</a>
        </div>
      </div>
    </div>
  );
};

export default Text;
