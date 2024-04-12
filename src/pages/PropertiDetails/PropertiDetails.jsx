import { useLoaderData, useParams } from 'react-router-dom';

const PropertiDetails = () => {
  const { viewId } = useParams();
  const dta = useLoaderData();
  const filterDta = dta.filter((dta) => dta.id === viewId);
  const { id } = filterDta[0];
  //   console.log(filterDta[0]);
  return (
    <div>
      <h1 className="text-3xl font-bold mt-28 text-redLi">sdf: {id}</h1>
    </div>
  );
};

export default PropertiDetails;
