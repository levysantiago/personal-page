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

function BlogArticlePage({ match }) {
  const [article, setArticle] = useState(null);
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

  const [breadcrumb_links, setBreadcrumb_links] = useState([
    { page: "Blog", route: "/blog" },
    { page: card.title, route: card.route },
    { page: "Artigo", route: "#" },
  ]);

  useEffect(() => {
    async function getArticle() {
      const articleIdEncrypted = match.params.id;
      if (articleIdEncrypted) {
        const articleId = cryptography.decrypt(articleIdEncrypted);
        const _article = await blog_api.getArticle(articleId);
        const date = new Date(_article.published);
        const ye = new Intl.DateTimeFormat("pt", { year: "numeric" }).format(
          date
        );
        const mo = new Intl.DateTimeFormat("pt", { month: "long" }).format(
          date
        );
        const da = new Intl.DateTimeFormat("pt", { day: "2-digit" }).format(
          date
        );
        _article.stringdate = `${mo} ${da}, ${ye}`;
        setArticle(_article);
        // const breadcrumb = breadcrumb_links;
        // breadcrumb.push({ page: _article.title, route: tag });
        // setBreadcrumb_links(breadcrumb);
      }
    }

    getArticle();
  }, []);

  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <div className="container row">
        <Breadcrumbs links={breadcrumb_links} />
        <PageHeader title={title_object.name} />
        {article ? (
          <>
            <h3 className="center">{article.title}</h3>
            <p className="center" style={{ marginBottom: 40 }}>
              {article.stringdate}, Levy
            </p>
            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </>
        ) : null}
      </div>
      <Footer lang={lang} />
    </div>
  );
}

export default BlogArticlePage;