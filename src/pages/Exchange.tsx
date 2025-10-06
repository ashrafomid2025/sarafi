import { useEffect } from "react";
const API_KEY: string = "08cae4d0b79be5000a1e0a57";
const URL: string = "https://v6.exchangerate-api.com/v6/";

export default function Exchange() {
  useEffect(() => {
    fetch(`${URL}${API_KEY}/latest/USD`);
  }, []);
  return <div>Exchange Page</div>;
}
