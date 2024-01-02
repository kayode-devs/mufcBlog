import axios from "axios";

export async function GetPosts() {
  try {
    const response = await axios("http://localhost:3000/posts");
    const data = await response.data;
    // console.log(response)
    return data;
  } catch (error) {
    return error;
  }
}

export async function FetchData() {
  let response;
  const data = await fetch("http://localhost:3000/materials");
  // console.log(data);
  response = await data.json();
  console.log(response);
  return { response };
}
