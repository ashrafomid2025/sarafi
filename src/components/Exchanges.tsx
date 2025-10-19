import { useEffect, useState, useTransition } from "react";
const URL = "https://v6.exchangerate-api.com/v6/";
const API_KEY = "08cae4d0b79be5000a1e0a57";

export default function Exchanges() {
  const [from, setFrom] = useState("AFA");
  const [to, setTo] = useState("USD");
  const [input, setInput] = useState(0);
  const [output, setoutput] = useState(0);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    function fetchData() {
      if (!from || !to) return;
      // try catch block
      startTransition(async () => {
        try {
          const response = await fetch(`${URL}${API_KEY}/latest/${from}`);
          const data = await response.json();
          const rate = data.conversion_rates[to];
          setoutput(rate * input);
        } catch (err) {
          console.log(err);
        }
      });
    }
    fetchData();
  }, [from, to, input]);

  return (
    <div className=" my-8 max-w-3xl mx-auto p-4 flex justify-center items-center">
      {/* card */}
      <div className="border bg-white  transition-all duration-300  hover:shadow-xl rounded-md p-4">
        <h1 className="text-center py-3 font-bold text-2xl">
          Exchange Rates & Currency Converter
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="">
            <div className="w-full flex flex-col gap-2 items-center">
              <label htmlFor="from">From</label>
              <select
                onChange={(e) => setFrom(e.target.value)}
                id="from"
                value={from}
                className="border focus:outline-0 rounded-xs py-1 w-full"
              >
                <option value="AFN">Afghani</option>
                <option value="USD">Dollor USD</option>
                <option value="AUD">Austrailian Dollor</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="IRR">Iranian Reial</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="INR">Indian Rupee</option>
                <option value="TRY">Turkish Lira</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="CHF">Franc</option>
                <option value="NOK">Kroon</option>
                <option value="KWD">Dinar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Pound</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2 items-center mt-4">
              <label htmlFor="">Enter the amount</label>
              <input
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
                className="border py-1 px-4 w-full rounded-xs focus:outline-0"
                placeholder="Enter the amount"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-center">
              <label htmlFor="to">TO</label>
              <select
                id="to"
                onChange={(e) => setTo(e.target.value)}
                value={to}
                className="border focus:outline-0 py-1 px-4 w-full"
              >
                <option value="AFN">Afghani</option>
                <option value="USD">Dollor USD</option>
                <option value="AUD">Austrailian Dollor</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="IRR">Iranian Riyal</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="INR">Indian Rupee</option>
                <option value="TRY">Turkish Lira</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="CHF">Franc</option>
                <option value="NOK">Kroon</option>
                <option value="KWD">Dinar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Pound</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2 items-center mt-4">
              <label htmlFor="">Equals</label>
              <input
                readOnly
                value={isPending ? "Please Wait" : output}
                onChange={(e) => setoutput(+e.target.value)}
                className="border py-1 px-4 w-full rounded-xs focus:outline-0"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
