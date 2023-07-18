import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ImageBox from "../components/ImageBox";
import axios from "axios";

const FetchImagesPage = () => {
  // states
  let [page, setPage] = useState(1);
  let [input, setInput] = useState("");
  let [currentInput, setCurrentInput] = useState(input);
  let [data, setData] = useState(null);
  let [bannerImgSRC, setBannerImgSRC] = useState("");
  let [bannerImgALT, setBannerImgALT] = useState("");
  let [bannerImgPhotographer, setBannerImgPhotographer] = useState("");

  const myKey = "27fOiW9gTVEbteYKHtbKkeLPsorHR8NE0gH1JbZUVDwVFnZUB1MckWVm";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=20";
  let searchURL = `https://api.pexels.com/v1/search?query=${currentInput}&page=1&per_page=20`;

  //input變更
  const ChangeInputHanlder = (e) => {
    setInput(e.target.value);
  };

  //Search按鈕
  const SearchHanlder = async (url) => {
    setCurrentInput(input);
    if (currentInput === "") {
      url = initialURL;
    } else {
      url = searchURL;
    }
    let result = await axios.get(url, {
      headers: { Authorization: myKey },
    });
    console.log(result.data.photos);
    setData(result.data.photos);
  };

  //More Pictures按鈕
  const morePictureHanlder = async () => {
    let newURL;
    setPage(page + 1);
    if (currentInput === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=20`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentInput}&page=${
        page + 1
      }&per_page=20`;
    }

    let result = await axios.get(newURL, {
      headers: { Authorization: myKey },
    });
    setData(data.concat(result.data.photos));
  };

  //Banner上的圖片
  const getBannerImage = async () => {
    let bannerImageArray = [
      "sky",
      "Eiffel Tower",
      "night sky",
      "ocean",
      "tree",
      "Switzerland",
      "europe",
    ];
    let theIndex = Math.floor(Math.random() * bannerImageArray.length);
    let subject = bannerImageArray[theIndex];
    console.log(
      `隨機選出的是bannerImageArray中的index[${theIndex}],主題:${subject}`
    );

    let bannerImgURL = `https://api.pexels.com/v1/search?query=${subject}&per_page=12`;
    let bannerImgResult = await axios.get(bannerImgURL, {
      headers: { Authorization: myKey },
    });

    let theNum = Math.floor(Math.random() * bannerImgResult.data.photos.length);
    let BannerImage = bannerImgResult.data.photos[theNum];
    setBannerImgSRC(BannerImage.src.landscape);
    setBannerImgALT(BannerImage.alt);
    setBannerImgPhotographer(BannerImage.photographer);
    console.log(theNum, BannerImage);
  };

  useEffect(() => {
    SearchHanlder(initialURL);
    getBannerImage();
  }, []);

  return (
    <div className="contentOfPage">
      {/* ============Banner區============ */}
      <div className="theBanner w-100 mb-4">
        <img className="bannerImg" src={bannerImgSRC} alt={bannerImgALT} />
        <div className="opactyOfBanner">
          <p className="text-light mb-0">
            Photographer : {bannerImgPhotographer}
          </p>
          <div className="searchBarBox col-10 col-sm-8 col-md-5">
            <SearchBar
              SearchHanlder={SearchHanlder}
              ChangeInputHanlder={ChangeInputHanlder}
            />
          </div>
        </div>
      </div>
      {/* ================================ */}
      <div className="container">
        <div className="row">
          {data &&
            data.map((d) => {
              return <ImageBox key={d.id} data={d} setData={setData} />;
            })}
        </div>
        <div className="col-12 text-center py-5">
          <button className="btn btn-primary px-4" onClick={morePictureHanlder}>
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchImagesPage;
