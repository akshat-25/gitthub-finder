import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
function RepoList(props) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title text-white">
          Latest Repositories
        </h2>
        {props.repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

RepoList.propType = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
