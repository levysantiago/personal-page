import React, { useEffect, useState } from "react";
import lang from "../../language/pt";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import blog_api from "../../lib/blogapi";
import cryptography from "../../lib/criptography";
import { useLocation } from "react-router-dom";
import routes_dict from "../../language/routes_dict";
import info from "../../language/info";
import Breadcrumbs from "../../components/Breadcrumb";
import helpers from "../../lib/helpers";
import { Row, Col, Container, Button } from "react-materialize";
import Loader from "../../components/Loader";
import Blockquote from "../../components/Blockquote";

function BlogArticlePage({ match }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blockquote] = useState(helpers.getRandomBlockquote());
  const location = useLocation();

  const tag = location.pathname;
  const newtag = tag.split("/article")[0];
  const title_object = newtag ? routes_dict.byroute[newtag] : "";

  let card = info.cards.filter((card) => {
    return card.route === newtag;
  });
  if (card.length) {
    card = card[0];
  }

  let breadcrumbInitialState = [];
  if (card.title) {
    breadcrumbInitialState = [
      { page: "Blog", route: "/#/blog" },
      { page: card.title, route: card.route },
      { page: "Artigo", route: "#" },
    ];
  } else {
    breadcrumbInitialState = [
      { page: "Blog", route: "/#/blog" },
      { page: "Artigo", route: "#" },
    ];
  }

  const [breadcrumb_links] = useState(breadcrumbInitialState);

  function fitImages() {
    let images = document.querySelectorAll(".separator > a > img");
    if (images) {
      images = Array.prototype.slice.call(images);
      images.map((image, count) => {
        if (image.getAttribute("width") > 300) {
          image.setAttribute("width", "80%");
          image.setAttribute("height", "80%");
          if (count < 1) {
            image.setAttribute("style", "max-width: 400px");
          }
        }
        return "";
      });
    }
  }

  useEffect(() => {
    async function getArticle() {
      const articleIdEncrypted = match.params.id;
      if (articleIdEncrypted) {
        const articleId = cryptography.decrypt(articleIdEncrypted);
        setLoading(true);
        const _article = await blog_api.getArticle(articleId);
        _article.stringdate = helpers.formatDate(_article.published);

        setArticle(_article);
        setLoading(false);
        fitImages();
        // const breadcrumb = breadcrumb_links;
        // breadcrumb.push({ page: _article.title, route: tag });
        // setBreadcrumb_links(breadcrumb);
      }
    }

    getArticle();
  }, [match.params.id]);

  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <Container>
        <Breadcrumbs links={breadcrumb_links} />
        <PageHeader title={title_object.name} />
        <Row>
          {loading ? (
            <Col s={12}>
              <Loader size={"medium"} message={lang.messages.gettingInfo} />
            </Col>
          ) : (
            <div className={"article-content"}>
              {article ? (
                <>
                  <h3 className="center">{article.title}</h3>
                  <p className="center" style={{ marginBottom: 40 }}>
                    {article.stringdate}, Levy
                  </p>
                  <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  ></div>
                  <Button
                    node={"a"}
                    style={{ marginTop: "30px", background: "#0b6173" }}
                    href={article.url}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                  >
                    {lang.messages.leaveAComment}
                  </Button>
                </>
              ) : null}
            </div>
          )}
        </Row>
        <Blockquote phrase={blockquote.phrase} author={blockquote.author} />
      </Container>
      <Footer lang={lang} />
    </div>
  );
}

export default BlogArticlePage;
