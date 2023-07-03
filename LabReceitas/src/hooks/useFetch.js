import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [itens, setItens] = useState([]);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      });
  };
  
  const createData = (body) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(() => getData())
  };

  const deleteData = (id) => {
    console.log(id)
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then(() => getData());
  };

  const updateData = (body) => {
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(() => getData())
  }

  useEffect(() => getData(), []);
  
  return { itens, createData, deleteData, updateData, getData };
}