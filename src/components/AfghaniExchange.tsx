import { use, useEffect, useState } from "react";

export default function AfghaniExchange() {
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);
  const [pkr, setPkr] = useState(0);
  const [irr, setIrr] = useState(0);
  const [tl, setTL] = useState(0);
  async function fetData() {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/08cae4d0b79be5000a1e0a57/latest/AFN"
    );
    const data = await response.json();
    setUsd(data.conversion_rates.USD);
    setEur(data.conversion_rates.EUR);
    setPkr(data.conversion_rates.PKR);
    setTL(data.conversion_rates.TRY);
    setIrr(data.conversion_rates.IRR);
  }
  useEffect(() => {
    fetData();
  }, []);
  return (
    <div className="p-4 w-full flex flex-col">
      <div>
        <h1>Exchange Rate of Afghani to some foriegn Currency</h1>
        <div className="mt-3 p-3 w-full grid gap-3 grid-col-1 md:grid-cols-3">
          <div className="border p-3 rounded-xl shadow-xs flex justify-between">
            <span>Dollor</span>
            <span>{usd}</span>
          </div>
          <div className="border p-3 rounded-xl shadow-xs flex justify-between">
            <span>Iraniran Toman</span>
            <span>{irr / 1000}</span>
          </div>
          <div className="border p-3 rounded-xl shadow-xs flex justify-between">
            <span>PKR</span>
            <span>{pkr}</span>
          </div>
          <div className="border p-3 rounded-xl shadow-xs flex justify-between">
            <span>Turkish Lira</span>
            <span>{tl}</span>
          </div>
          <div className="border p-3 rounded-xl shadow-xs flex justify-between">
            <span>Euro</span>
            <span>{eur}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
