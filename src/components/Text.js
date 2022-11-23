import React from "react";

const Text = () => {
  return (
    <div className="row" id="section1" style={{ backgroundColor: "#1b1464" }}>
      <div className="col-12 mt-5">
        <h2 className="text-center fw-bold">Kilka słów o nas</h2>
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
          <b>Firma PHU Marpol Mariusz Michalicki</b> swoją działalność
          rozpoczęła w 1997 roku. Od tego czasu systematycznie podejmuje
          działania na rzecz rozwoju swojej organizacji. Zajmujemy się przewozem
          towarów na terenie Europy oraz Skandynawii. Kraje, w których
          świadczymy nasze usługi to Niemcy, Holandia, Hiszpania, Norwegia,
          Szwecja oraz Wielka Brytania. Obecnie dysponujemy własną flotą
          kilkudziesięciu zestawów umożliwiających przewóz kontenerów wymiennych
          BDF, jak również plandeki ze sztywną zabudową oraz chłodnie, itd. Dla
          naszych klientów przewieziemy różnego rodzaju towary w tym materiały
          niebezpieczne. Naszym atutem jest wykwalifikowana kadra doświadczonych
          kierowców oraz nowoczesna flota. Jesteśmy nastawieni na stały rozwój.
          <br />
          <a href="#section4">Zapraszamy serdecznie do współpracy.</a>
        </div>
      </div>
    </div>
  );
};

export default Text;
