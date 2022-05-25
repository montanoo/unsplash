import React, { useState, useEffect } from "react";
import unsplash from "../../api/unsplash";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageList } from "../ImageList/ImageList"

export const PicSearch = () => {
  const [pics, setPics] = useState([]);
  const [term, setTerm] = useState("");

  const onSearchBarSubmit = (termToSearch) => {
      setTerm(termToSearch)
  };

  useEffect (() => {
    async function getPics() {
      const response = await unsplash
      .get("/search/photos", {
        params: { query: term, per_page: 16 },
      })
      setPics(response.data.results)
    }
    if (term) {
      getPics()
    }

  }, [term])

  return (
    // react uses '20' as pixel values.
    <div className="ui container" style={{ marginTop: 20 }}>
      <SearchBar onSubmit={onSearchBarSubmit} />
      <div className="ui divider">
        Found: {pics.length} images
        <ImageList images={pics}/>

      </div>
    </div>
  );
};
