import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
        <div className="col-md-8 mb-2">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autoFocus
            autoComplete="on"
          />
        </div>
        <div className="col mb-2">
          <button
            type="submit"
            value="Search"
            className="btn btn-secondary w-100 shadow"
          >
            Search
          </button>
        </div>
        <div className="col mb-2">
          <button
            type="button"
            className="btn btn-outline-secondary w-100 shadow"
          >
            <span role="img" aria-label="emoji">
              📍
            </span>
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}
