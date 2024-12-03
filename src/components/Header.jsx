import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={investmentCalculatorLogo} alt="Investment calculator logo" />
      <h1>Investment calculator</h1>
    </div>
  );
}
