import React, { useEffect, useContext, useState } from 'react';
import Table from '../Components/Table';
import Context from '../Context/Context';
import Fetch from '../Services/Fetch';
import InputFormulario from '../Components/InputFormulario';

export default function InitialPage() {
  const { setPlanetData } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const populateData = async () => {
      const data = await Fetch();
      setPlanetData(data.results);
      await setLoading(false);
    };
    populateData();
  }, [setPlanetData]);

  return (
    <div>
      <InputFormulario />
      {!loading && <Table />}
    </div>
  );
}
