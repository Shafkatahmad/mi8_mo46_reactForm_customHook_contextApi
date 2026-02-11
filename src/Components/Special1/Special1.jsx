import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special1 = ({asset1}) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Special 1</h2>
      <p>has: {asset1}</p>
      <p>Also has: {gift}</p>
    </div>
  );
};

export default Special1;