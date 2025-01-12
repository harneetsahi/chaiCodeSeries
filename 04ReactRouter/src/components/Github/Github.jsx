import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  // const [data, setData] = useState([]);

  ////// we want to call API when the component loads so we need useEffect
  ////// another way to hit the API above is directly in the loader in the Route inside the main.jsx file

  // useEffect(() => {
  //   fetch("https:/api.github.com/users/harneetsahi")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  ///// loader function: using 'data' as variable name so the below data.avatar and other reference work with loader function as well the way they worked for the above functions
  const data = useLoaderData();

  return (
    <>
      <div className="text-center bg-gray-100 text-gray-700 p-4 text-xl max-w-screen-xl mx-auto flex flex-col items-center ">
        <img
          src={data.avatar_url}
          className="w-80 h-80 mb-7"
          alt="GitHub Profile Picture "
        />
        {data.name} has {data.followers} GitHub followers
      </div>
    </>
  );
}

export default Github;

///// commented out the above code because I called API in the loader function directly using the function below

///// below code should ideally be in a separate file. For for this project's purposes, I'm writing it here

//// loader function optimizes the code as it's faster and takes away any lag that the webpage may face with regular functions. As soon as your cursor is above the github section in the header, it starts fetching the api and keeps it in cache for use

export const githubInfoLoader = async () => {
  const response = await fetch("https:/api.github.com/users/harneetsahi");

  return response.json();
};
