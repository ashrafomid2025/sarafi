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
        <h1 className="text-center text-lg bg-white rounded-t-md  mt-6 p-6 md:text-2xl font-semibold">
          Latest Afghani to Foreign Currency Rates — Updated:{" "}
          {date.substring(0, 17)}{" "}
        </h1>
        <div className=" p-3 w-full grid gap-3 grid-col-1 ">
          <div className="border-l-2 bg-white border-brand p-3  shadow-xs flex justify-between">
            <span className="text-2xl font-bold">Dollor United States</span>
            <span className="text-2xl font-bold">
              {usd.toString().substring(0, 4)}
            </span>
          </div>
          <div className="border-l-2 bg-white border-brand p-3 shadow-xs flex justify-between">
            <span className="text-2xl font-bold">Iraniran Toman</span>
            <span className="text-2xl font-bold">
              {irr.toString().substring(0, 5)}
            </span>
          </div>
          <div className="border-l-2 border-brand bg-white p-3  shadow-xs flex justify-between">
            <span className="text-2xl font-bold">Pakistani Rupee</span>
            <span className="text-2xl font-bold">{pkr * 1000}</span>
          </div>
          <div className="border-l-2 border-brand bg-white p-3  shadow-xs flex justify-between">
            <span className="text-2xl font-bold">Pound</span>
            <span className="text-2xl font-bold">
              {gbp.toString().substring(0, 4)}
            </span>
          </div>
          <div className="border-l-2 border-brand bg-white p-3  shadow-xs flex justify-between">
            <span className="text-2xl font-bold">Euro</span>
            <span className="text-2xl font-bold">
              {eur.toString().substring(0, 4)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
