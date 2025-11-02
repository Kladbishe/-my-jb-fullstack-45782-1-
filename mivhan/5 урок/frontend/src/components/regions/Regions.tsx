import "./Regions.css";
import siteService from "../../services/sites";
import type { Site } from "../../models/site";
import { useEffect, useState, type ChangeEvent } from "react";
import RegionsService from "./../../services/region";
import type { Region } from "../../models/Region";
export default function Regions() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegionsId, setSelectedRegionsId] = useState<string>("");
  const [sites, setSites] = useState<Site[]>([]);



async function deleteSite(id: string) {
  try {
    await siteService.deleteSite(id);
    // обновляем список — убираем удалённый элемент
    setSites(sites.filter(site => site.id !== id));
  } catch(e) {
    alert(e);
  }
}




  useEffect(() => {
    (async () => {
      try {
        const regions = await RegionsService.getAll();
        setRegions(regions);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedRegionsId) {
        try {
          const sites = await siteService.getByRegionId(selectedRegionsId);
          setSites(sites);
        } catch (e) {
          alert(e);
        }
      }
    })();
  }, [selectedRegionsId]);

  function regionChanged(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedRegionsId(event.currentTarget.value);
  }

  return (
    <div className="Regions">
      <select onChange={regionChanged}>
        {regions.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      <ul className="site-list">
        {sites.map(({ id, name, priceAdult, priceChild }) => (
          <li key={id} className="site-item">
            <strong className="site-name">{name}</strong>
            <div className="site-prices">
              <span>
                Adult: <b>{priceAdult}$</b>
              </span>
              <span>
                Child: <b>{priceChild}$</b>
              </span>
               <button onClick={() => deleteSite(id)}>Delete</button>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
