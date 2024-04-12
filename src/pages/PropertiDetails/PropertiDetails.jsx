import { useLoaderData, useParams } from 'react-router-dom';

const PropertiDetails = () => {
  const { viewId } = useParams();
  const dta = useLoaderData();
  const filterDta = dta.filter((dta) => dta.id === viewId);
  console.log(filterDta);
  return (
    <div>
      <h1 className="text-3xl font-bold">Propertices details page: </h1>
    </div>
  );
};

export default PropertiDetails;
