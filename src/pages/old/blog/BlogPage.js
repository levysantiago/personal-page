import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import CardImage from "../../components/CardImage";
import PageHeader from "../../components/PageHeader";
import lang from "../../language/pt";
import routes_dict from "../../language/routes_dict";
import info from "../../language/info";
import Footer from "../../components/Footer";
import Blockquote from "../../components/Blockquote";
import blog_api from "../../lib/blogapi";
import ListBlogPosts from "../../components/ListBlogPosts";
import helpers from "../../lib/helpers";

const storage = window.sessionStorage;

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blockquote] = useState(helpers.getRandomBlockquote());

  useEffect(() => {
    storage.setItem(
      "breadcrumb_links",
      JSON.stringify([
        {
          page: "Blog",
          route: routes_dict.home.blog.this,
        },
      ])
    );
  }, []);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      const result = await blog_api.getPosts();
      setPosts(result.items);
      setLoading(false);
    }

    getPosts();
  }, []);

  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <div className="container row">
        <PageHeader title={lang.blogpage.title} description="" />
        <div className="col s12">
          {info.cards.map((item) => {
            return (
              <CardImage
                key={item.id}
                img={item.img}
                title={item.title}
                tag={item.route}
              />
            );
          })}
        </div>

        <div
          className="col s12"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <PageHeader title={lang.lastBlogPosts.title} description="" />
          <ListBlogPosts
            list={posts}
            lang={lang}
            loading={loading}
            loadingMessage={lang.messages.gettingInfo}
          />
        </div>
      </div>

      <div className="container">
        <Blockquote phrase={blockquote.phrase} author={blockquote.author} />
      </div>

      <Footer lang={lang} />
    </div>
  );
}
