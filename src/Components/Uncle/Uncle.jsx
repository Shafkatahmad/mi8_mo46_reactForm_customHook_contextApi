import Cousin from "../Cousin/Cousin";

const Uncle = ({asset1}) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={'Rafsan'} asset1={asset1}></Cousin>
        <Cousin name={'Sohana'}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;