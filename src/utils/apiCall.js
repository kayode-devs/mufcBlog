import axios from "axios";


export async function GetMaterials(response) {
  try {
     response = await axios.get("http://localhost:3000/materials");
    if (response.status === 200) {
      console.log("Data retrieved successfully:");
      console.log(response.data);
    } else {
      console.error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    if (error.response) {
      console.error(
        `Request failed with status code: ${error.response.status}`
      );
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("No response received. Check your network connection.");
    } else {
      console.error("Error:", error.message);
    }
  }
}

export const PostMaterials = async () => {
  try {
    const post = await axios.post("");
  } catch (error) {
    console.error(error);
  }
};

export async function FetchData() {
  let response;
  const data = await fetch("http://localhost:3000/materials");
  // console.log(data);
  response = await data.json();
  console.log(response);
  return { response };
}
