import "./App.css";
import Axios from "axios";
import RecipeTile from "./RecipeTile";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const[healthlabel,setHealthlabel]=useState("vegan");

  const YOUR_APP_ID = "b11856ce";
  const YOUR_APP_KEY = "0dd5bd506b8d7e8fc5aa0dce106ce500";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    // console.log(result.data);
  }
  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="App">
      <h1 onClick={getRecipes}>Food Recipe Plaza</h1>
      <form className="app_searchForm" onSubmit={submit}>
        <input
          type="text"
          className="app_input"
          placeholder="enter ingredients"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <input className="app_submit" type="submit" value="search" />
        <select className="app_healthlabels">
          <option onClick={()=>{
            setHealthlabel("vegan")
          }}>
          Vegan</option>
          <option onClick={()=>{
            setHealthlabel("wheat-free")
          }}>
          Wheat-free</option>
          <option onClick={()=>{
            setHealthlabel("low-sugar")
          }}>
          Low-sugar</option>
          <option onClick={()=>{
            setHealthlabel("egg-free")
          }}>
          Egg-free</option>
        </select>
      </form>
      <br />
      <div className="app_recipe">
        {recipes.map((recipe, index) => {
          return <RecipeTile recipe={recipe} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
