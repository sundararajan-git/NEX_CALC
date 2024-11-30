import React from "react";
import "./App.css";
import "./customcss/Style.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./layouts/RootLayout";
import MathsLayout from "./layouts/MathsLayout";
import FinancialLayout from "./layouts/FinancialLayout";
import Age from "./Pages/Maths/Age";
import Area from "./Pages/Maths/Area";
import Volume from "./Pages/Maths/Volume";
import Time from "./Pages/Maths/Time";
import Temperature from "./Pages/Maths/Temperature";
import Speed from "./Pages/Maths/Speed";
import NumericalSystem from "./Pages/Maths/NumericalSystem";
import Mass from "./Pages/Maths/Mass";
import Length from "./Pages/Maths/Length";
import Discount from "./Pages/Maths/Discount";
import Data from "./Pages/Maths/Data";
import Bmi from "./Pages/Maths/Bmi";
import DateDiff from "./Pages/Maths/DateDiff";
import GST from "./Pages/FInacial/GST";
import Currency from "./Pages/FInacial/Currency";
import Invisment from "./Pages/FInacial/Investment";
import Loan from "./Pages/FInacial/Loan";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Maths" element={<MathsLayout />}>
          <Route path="Age" element={<Age />} />
          <Route path="Area" element={<Area />} />
          <Route path="BMI" element={<Bmi />} />
          <Route path="Data" element={<Data />} />
          <Route path="Date" element={<DateDiff />} />
          <Route path="Discount" element={<Discount />} />
          <Route path="Length" element={<Length />} />
          <Route path="Mass" element={<Mass />} />
          <Route path="Numerical System" element={<NumericalSystem />} />
          <Route path="Speed" element={<Speed />} />
          <Route path="Temperature" element={<Temperature />} />
          <Route path="Time" element={<Time />} />
          <Route path="Volume" element={<Volume />} />
        </Route>
        <Route path="Financial" element={<FinancialLayout />}>
          <Route path="GST" element={<GST />} />
          <Route path="Currency" element={<Currency />} />
          <Route path="Investment" element={<Invisment />} />
          <Route path="Loan" element={<Loan />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
