import React, { Component } from "react";
import CardImage from "../../components/CardImage";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import dict from "../../language/pt";

const storage = window.sessionStorage;

class PostsList extends Component {
  render() {
    const { posts } = dict;
    let tag = storage.getItem("tag");

    return (
      <div>
        <NavBar blackStyle={true} />
        <div className="container row">
          <PageHeader title={"title"} description="Description." />

          {posts.map(
            p =>
              Object.keys(p)[0] === tag && (
                <CardImage
                  key={p[tag][0].key}
                  img={"travels/" + p[tag][0].img}
                  title={p[tag][0].title}
                  content={p[tag][0].content}
                />
              )
          )}
        </div>
      </div>
    );
  }
}

export default PostsList;
