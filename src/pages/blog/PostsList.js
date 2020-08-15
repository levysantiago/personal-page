import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardImage from "../../components/CardImage";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import lang from "../../language/en";
import blog_info from "../../language/blog_info";
import info from "../../language/info";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumb";
import blog_api from "../../lib/blogapi";
import cryptography from "../../lib/criptography";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const tag = location.pathname;
  let card = info.cards.filter((card) => {
    return card.route === tag;
  });
  if (card.length) {
    card = card[0];
  }

  const storage = window.sessionStorage;
  let breadcrumb_links = JSON.parse(storage.getItem("breadcrumb_links"));
  if (!breadcrumb_links) {
    breadcrumb_links = [{ page: "Blog", route: "/blog" }];
  }
  breadcrumb_links.push({ page: card.title, route: tag });

  useEffect(() => {
    //let _posts = blog_info[tag];
    async function update() {
      let _posts = await blog_api.getPostsByLabel(card.label);
      //console.log(_posts);
      if (_posts) {
        setPosts(_posts.items);
      }
    }

    update();
  }, [tag]);

  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <div className="container row">
        <Breadcrumbs links={breadcrumb_links} />
        <PageHeader title={card.title} description="Description." />

        {posts
          ? posts.map((p, key) => (
              <CardImage
                key={key}
                tag={"/blog/article/" + cryptography.encrypt(p.id)}
                //img={"travels/" + p.image}
                content={p.title}
              />
            ))
          : null}
      </div>
      <Footer lang={lang} />
    </div>
  );
}
