import React, { Component } from "react";
import CardImageChooser from "../../components/CardImageChooser";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import dict from "../../language/info";
import lang from "../../language/en";
import Footer from "../../components/Footer";

const storage = window.sessionStorage;

class PostsList extends Component {
  render() {
    const { posts } = dict;
    let tag = storage.getItem("tag");
    let pagetitle = storage.getItem("title");

    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <PageHeader title={pagetitle} description="Description." />

          {posts.map(
            p =>
              Object.keys(p)[0] === tag &&
              p[tag].map(pi => (
                <CardImageChooser
                  key={pi.key}
                  id={pi.key}
                  img={"travels/" + pi.img}
                  title={pi.title}
                  content={pi.content}
                />
              ))
          )}
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default PostsList;
