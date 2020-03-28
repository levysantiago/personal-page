import React, { Component } from "react";
import CardImage from "../../components/CardImage";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import dict from "../../language/info";
import lang from "../../language/en";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumb";

const storage = window.sessionStorage;

class PostsList extends Component {
  render() {
    const { posts } = dict;
    let tag = storage.getItem("tag");
    let pagetitle = storage.getItem("title");
    let breadcrumb_links = JSON.parse(storage.getItem("breadcrumb_links"));
    breadcrumb_links.push({ page: pagetitle, route: tag });

    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <Breadcrumbs links={breadcrumb_links} />
          <PageHeader title={pagetitle} description="Description." />

          {posts.map(
            p =>
              Object.keys(p)[0] === tag &&
              p[tag].map(pi => (
                <CardImage
                  key={pi.key}
                  img={"travels/" + pi.img}
                  content={pi.title}
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
