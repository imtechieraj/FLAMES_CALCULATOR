import { useEffect, useState } from "react";
import "./App.css";
import { match } from "./Utils";

function App() {
  const [names, setNames] = useState("");
  const [crush_name, changeCrushName] = useState("");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculate = () => {
    if (names && crush_name) {
      let result = match(names, crush_name);
      setResult(result);
      setNames("");
      changeCrushName("");
    }
  };

  useEffect(() => {
    if (result) {
      setShowResult(true);
    }
  }, [result]);

  const flamesRes = () => {
    switch (result) {
      case "f":
        return "😎 Friend 😎";
      case "l":
        return "❤️ Love ❤️";
      case "a":
        return "🥰 Affection 🥰";
      case "m":
        return "💍 Marriage 💍";
      case "e":
        return "😈 Enemy 😈";
      case "s":
        return "👧 Sister 👧";
      default:
        return "";
    }
  };

  const ShowContent = () => {
    if (showResult) {
      return (
        <>
          <br />
          <br />
          <h1 className="final_result">{flamesRes(showResult)}</h1>
        </>
      );
    }
    return (
      <p className="user_registered-text">
        Flames is the combination of 6 letters and the word flames has not
        specific meaning. So, F is Friends, L is Lovers, A is Attraction, M is
        Marriage, E is Enemies and S is Siblings. This funny game is played by
        almost every 90’s kid in their school. They used to play on the paper
        those days
      </p>
    );
  };

  return (
    <div className="App">
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-registered">
              <button className="user_registered-login" id="login-button">
                Love is Love 🌈
              </button>
              <h2 className="user_registered-title">FLAMES</h2>
              <ShowContent />
            </div>
          </div>

          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">FLAMES CALCULATOR</h2>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="forms_field-input"
                    onChange={(e) => setNames(e.target.value)}
                    value={names}
                    required
                  />
                </div>{" "}
                <br />
                <div className="forms_field">
                  <input
                    type="text"
                    onChange={(e) => changeCrushName(e.target.value)}
                    value={crush_name}
                    placeholder="Enter your Crush Name ❤️"
                    className="forms_field-input"
                    required
                  />
                </div>
                <button className="forms_buttons-action" onClick={calculate}>
                  CALCULATE
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
