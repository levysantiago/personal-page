import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import CardImage from "../../components/CardImage";
import PageHeader from "../../components/PageHeader";
import dict from "../../language/info";
import lang from "../../language/en";
import Footer from "../../components/Footer";

const storage = window.sessionStorage;

class BlogPage extends Component {
  onPostClick = (tag, title) => {
    storage.setItem("tag", tag);
    storage.setItem("title", title);
  };

  render() {
    return (
      <div>
        <NavBar blackStyle={true} lang={lang} />
        <div className="container row">
          <PageHeader title="My Blog" description="Description." />

          <CardImage
            img="travels.png"
            title="Travels"
            posts={dict.posts}
            tag="/travels"
            onPostClick={this.onPostClick}
          />
          <CardImage
            img="personal_growth.png"
            title="Personal Growth"
            tag="/personalgrowth"
            onPostClick={this.onPostClick}
          />
          <CardImage
            img="hellowtips_blog.png"
            title="HellowTips"
            tag="/hellowtips"
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
