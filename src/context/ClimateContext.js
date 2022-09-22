import { createContext, useContext, useState } from "react";

const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [temp, setTemp] = useState(50);
  const [humidity, setHumidity] = useState(40);

  return (
    <ClimateContext.Provider value={{ temp, setTemp, humidity, setHumidity }}>
      {children}
    </ClimateContext.Provider>
  );
}
