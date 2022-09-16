import React, { Component } from "react";
import PostCard from "./PostCard";
import cryptography from "../lib/criptography";
import helpers from "../lib/helpers";
import Loader from "./Loader";

class ListBlogPosts extends Component {
  moreProjectsComponent(home) {
    if (home) {
      const { lang } = this.props;
      return (
        <div className="col s12" style={{ marginTop: "50px" }}>
          <a
            href="/blog"
            className="center"
            style={{ textDecoration: "underline" }}
          >
            {lang.constants.morePosts}
          </a>
        </div>
      );
    }
  }

  render() {
    const { home, list, loading, loadingMessage } = this.props;

    return (
      <div className="row">
        {loading ? (
          <Loader size={"medium"} message={loadingMessage} />
        ) : (
          list.map((p, key) => {
            return (
              <PostCard
                key={key}
                tag={"blog/article/" + cryptography.encrypt(p.id)}
                image={p.author.image.url}
                date={helpers.formatDate(p.published)}
                title={p.title}
                author={p.author.displayName}
                labels={p.labels}
              />
            );
          })
        )}

        {this.moreProjectsComponent(home)}
      </div>
    );
  }
}

export default ListBlogPosts;
