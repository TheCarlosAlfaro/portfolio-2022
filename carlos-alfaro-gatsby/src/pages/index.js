import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Bio from '../components/Bio';

import { graphql } from 'gatsby';

export default function indexPage({ data }) {
  const socialLinks = data.allSanitySocialLinks.nodes;
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <Bio />
            <div className="row mb-2">
              <div className="col-12 col-sm-8">
                <input
                  aria-label="Search projects"
                  id="search-projects"
                  className="form-control"
                  placeholder="Search projects"
                  // value={this.state.searchInput}
                  // onChange={(e) => {
                  //   this.setSearchInput(e);
                  // }}
                />
              </div>
              <div className="col-12 col-sm-4">
                <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="isAdvanced"
                    // checked={this.state.isAdvanced}
                    // name="isAdvanced"
                    // value={!this.state.isAdvanced}
                    // onChange={(e) => this.updateState(e)}
                  />
                  <label className="custom-control-label" htmlFor="isAdvanced">
                    Advanced view
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="most-recent"
                    name="project-order"
                    value='["postedAt", "desc"]'
                    // checked={this.state.projectOrder === '["postedAt", "desc"]'}
                    // onChange={(e) => {
                    //   this.setProjectOrder(e);
                    // }}
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" htmlFor="most-recent">
                    Most recent
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="most-popular"
                    name="project-order"
                    value='["rating", "desc"]'
                    // checked={this.state.projectOrder === '["rating", "desc"]'}
                    // onChange={(e) => {
                    //   this.setProjectOrder(e);
                    // }}
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="most-popular"
                  >
                    Most popular
                  </label>
                </div>
              </div>
            </div>

            {/* {this.state.displayedProjects.map((project) => {
              return (
                <Project
                  project={project}
                  key={project.id}
                  isAdvanced={this.state.isAdvanced}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  {
    allSanitySocialLinks {
      nodes {
        name
        url
      }
    }
  }
`;
