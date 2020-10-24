import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import lang from "../../language/pt";
import info from "../../language/info";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumb";
import blog_api from "../../lib/blogapi";
import cryptography from "../../lib/criptography";
import PostCard from "../../components/PostCard";
import helpers from "../../lib/helpers";
import Loader from "../../components/Loader";
import { Col, Row, Button } from "react-materialize";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      let _posts = await blog_api.getPostsByLabel(card.label);
      //   console.log(_posts);
      if (_posts) {
        setPosts(_posts.items);
      }
      setLoading(false);
    }

    update();
  }, [tag, card]);

  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <div className="container row">
        <Breadcrumbs links={breadcrumb_links} />
        <PageHeader title={card.title} description="" />

        {loading ? (
          <Row>
            <Col s={12}>
              <Loader size={"medium"} message={lang.messages.gettingInfo} />
            </Col>
          </Row>
        ) : posts ? (
          posts.map((p, key) => (
            <PostCard
              key={key}
              tag={tag + "/article/" + cryptography.encrypt(p.id)}
              image={p.author.image.url}
              date={helpers.formatDate(p.published)}
              title={p.title}
              author={p.author.displayName}
              labels={p.labels}
            />
          ))
        ) : (
          <div className={"center"}>
            <img
              className={"responsive-img"}
              src={require("../../assets/empty.svg")}
              alt={"Sem posts"}
              width={"400px"}
            />
            <p className="center" style={{ fontSize: "20px" }}>
              {lang.messages.noPostsFound}
            </p>
            <Button
              node="a"
              href="/blog"
              style={{ background: "#0b6173", marginTop: "30px" }}
            >
              Voltar para blog
            </Button>
          </div>
        )}
      </div>
      <Footer lang={lang} />
    </div>
  );
}
