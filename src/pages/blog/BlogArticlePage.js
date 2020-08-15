import React, { useEffect, useState } from "react";
import lang from "../../language/en";
import NavBar from "../../components/NavBar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import blog_api from "../../lib/blogapi";
import cryptography from "../../lib/criptography";

function BlogArticlePage({ match }) {
  const [article, setArticle] = useState(null);

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
      }
    }

    getArticle();
  }, []);

  console.log(article);
  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <div className="container row">
        <PageHeader title={"Travels"} />
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
