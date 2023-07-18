import React from "react";

const ImageBox = ({ data, setData }) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mb-3 overflow-hidden"
      style={{ height: "45vh" }}
    >
      <div className="imgBox shadow overflow-hidden">
        <a target="_blank" href={data.src.large}>
          <img className="img-fluid" src={data.src.large} alt={data.alt} />
        </a>
      </div>
      <p className="text-end text-secondary mb-0 pt-1 fs-6">
        {data.photographer}
      </p>
    </div>
  );
};

export default ImageBox;
