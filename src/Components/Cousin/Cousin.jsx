import Friend from "../Friend/Friend";
import Special1 from "../Special1/Special1";

const Cousin = ({name, asset1}) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {asset1 && <Special1 asset1={asset1}></Special1>}
        {name === 'Rubaiya' && <Friend></Friend>}
      </section>
    </div>
  );
};

export default Cousin;