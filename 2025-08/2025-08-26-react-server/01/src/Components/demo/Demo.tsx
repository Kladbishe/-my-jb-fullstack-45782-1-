import { useState, useEffect} from "react";
import "./Demo.css";

export default function Demo() {
  const [animals, setAnimal] = useState<string[]>([]);
  const [isDogs,setIsDogs] = useState<boolean>(true)
  function getDogs() {
    return ["Ray", "Jimmie"];
  }
  function getCat() {
    return ["Lichi", "Mitzi"];
  }
  useEffect(() => {
    setAnimal(isDogs ? getDogs(): getCat());
  }, [isDogs]);
  function selectChanged() {
      setIsDogs(!isDogs)
  }
  return (
    <div className="Demo">
      <select onChange={selectChanged}>
        <option value="gods">Dogs</option>
        <option value="cat">Cat</option>
      </select>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}
