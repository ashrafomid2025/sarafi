import { useEffect, useState } from "react";

export default function AfghaniExchange() {
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);
  const [pkr, setPkr] = useState(0);
  const [irr, setIrr] = useState(0);
  const [gbp, setgbp] = useState(0);
  const [date, setDate] = useState("");

  async function fetDataDollor() {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/08cae4d0b79be5000a1e0a57/latest/USD"
    );
    const data = await response.json();
    setUsd(data.conversion_rates.AFN);
    setDate(data.time_last_update_utc);
  }
  async function fetDataIR() {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/08cae4d0b79be5000a1e0a57/latest/IRR"
    );
    const data = await response.json();
    setIrr(data.conversion_rates.AFN * 100000);
  }
  async function fetDataPKR() {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/08cae4d0b79be5000a1e0a57/latest/PKR"
    );
    const data = await response.json();
    setPkr(data.conversion_rates.AFN);
  }
  async function fetDataGBP() {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/08cae4d0b79be5000a1e0a57/latest/GBP"
    );
    const data = await response.json();
    setgbp(data.conversion_rates.AFN);
  }
  async function fetDataEur() {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/08cae4d0b79be5000a1e0a57/latest/EUR"
    );
    const data = await response.json();
    setEur(data.conversion_rates.AFN);
  }

  useEffect(() => {
    fetDataDollor();
    fetDataIR();
    fetDataPKR();
    fetDataGBP();
    fetDataEur();
  }, []);
  return (
    <div className="p-4 mt-12 w-full flex flex-col">
      <div>
        <h1 className="text-center text-lg md:text-2xl font-semibold">
          Afghani to foriegn currency, last update: {date.substring(0, 17)}{" "}
        </h1>
        <div className="mt-3 p-3 w-full grid gap-3 grid-col-1 md:grid-cols-3">
          <div className="border-b-2 bg-white border-brand p-3 rounded-t-xl shadow-xs flex justify-between">
            <span>Dollor US</span>
            <span>{usd}</span>
          </div>
          <div className="border-b-2 bg-white border-brand p-3 rounded-t-xl shadow-xs flex justify-between">
            <span>Iraniran Toman</span>
            <span>{irr.toString().substring(0, 5)}</span>
          </div>
          <div className="border-b-2 border-brand bg-white p-3 rounded-t-xl shadow-xs flex justify-between">
            <span>Pakistani Rupee</span>
            <span>{pkr * 1000}</span>
          </div>
          <div className="border-b-2 border-brand bg-white p-3 rounded-t-xl shadow-xs flex justify-between">
            <span>Pound</span>
            <span>{gbp.toString().substring(0, 4)}</span>
          </div>
          <div className="border-b-2 border-brand bg-white p-3 rounded-t-xl shadow-xs flex justify-between">
            <span>Euro</span>
            <span>{eur.toString().substring(0, 4)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
