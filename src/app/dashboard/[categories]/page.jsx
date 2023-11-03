import React from "react";

import { FetchData, GetMaterials } from "@/utils/apiCall";
import Materials from "@/_local-components/materialSection";

const Categories = async ({data}) => {
  const response = await GetMaterials();
  console.log(response)
  
  return (
    <div className="md:mt-12  w-[100%] p-5">
      This is the Categories page {response[0].title}
      <Materials />
    </div>
  );
};

export default Categories;


