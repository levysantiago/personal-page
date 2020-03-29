import React, { Component } from "react";
import CardImage from "../../components/CardImage";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import dict from "../../language/info";
import lang from "../../language/en";
import routes_dict from "../../language/routes_dict";
import blog_info from "../../language/blog_info";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumb";

const storage = window.sessionStorage;

class PostsList extends Component {
  render() {
    let tag = storage.getItem("tag");
    let pagetitle = storage.getItem("title");
    let breadcrumb_links = JSON.parse(storage.getItem("breadcrumb_links"));
    breadcrumb_links.push({ page: pagetitle, route: tag });

    let posts;
    let key = 0;
    if (tag === routes_dict.home.blog.travels.this) {
      posts = blog_info.travels;
    }
    console.log(posts);

    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <Breadcrumbs links={breadcrumb_links} />
          <PageHeader title={pagetitle} description="Description." />

          {posts.map(p => (
            <CardImage
              key={key++}
              img={"travels/" + p.image}
              content={p.title}
            />
          ))}
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

export default PostsList;
