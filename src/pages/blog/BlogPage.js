import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import CardImage from "../../components/CardImage";
import PageHeader from "../../components/PageHeader";
import dict from "../../language/info";
import lang from "../../language/en";
import routes_dict from "../../language/routes_dict";
import Footer from "../../components/Footer";

const storage = window.sessionStorage;

class BlogPage extends Component {
  onPostClick = (tag, title) => {
    storage.setItem("tag", tag);
    storage.setItem("title", title);
  };

  render() {
    storage.setItem(
      "breadcrumb_links",
      JSON.stringify([
        {
          page: "Blog",
          route: routes_dict.home.blog.this
        }
      ])
    );

    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <PageHeader title="My Blog" description="Description." />

          <CardImage
            img="travels.png"
            title="Travels"
            posts={dict.posts}
            tag={routes_dict.home.blog.travels.this}
            onPostClick={this.onPostClick}
          />
          <CardImage
            img="personal_growth.png"
            title="Personal Growth"
            tag={routes_dict.home.blog.personalgrowth.this}
            onPostClick={this.onPostClick}
          />
          <CardImage
            img="hellowtips_blog.png"
            title="HellowTips"
            tag={routes_dict.home.blog.hellowtips.this}
            onPostClick={this.onPostClick}
          />
        </div>
        <h4 className="red">Put some Blockquote here</h4>

        <Footer lang={lang} />
      </div>
    );
  }
}

export default BlogPage;
