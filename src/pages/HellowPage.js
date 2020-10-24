import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import ListTips from "../components/ListTips";
import Blockquote from "../components/Blockquote";
import lang from "../language/pt";
import Footer from "../components/Footer";
import info from "../language/info";
import Breadcrumbs from "../components/Breadcrumb";
import helpers from "../lib/helpers";

function HellowPage() {
  const location = useLocation();
  const [blockquote] = useState(helpers.getRandomBlockquote());

  const tag = location.pathname;
  let card = info.cards.filter((card) => {
    return card.route === tag;
  });
  if (card.length) {
    card = card[0];
  }

  let breadcrumb_links = [{ page: "Blog", route: "/blog" }];
  breadcrumb_links.push({ page: card.title, route: tag });
  console.log(card);

  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <div className="container row">
        <Breadcrumbs links={breadcrumb_links} />
        <PageHeader
          title={lang.hellowtipspage.title}
          description={lang.hellowtipspage.description}
          description2={lang.hellowtipspage.description2}
        />
        <ListTips />
        <Blockquote phrase={blockquote.phrase} author={blockquote.author} />
      </div>
      <Footer lang={lang} />
    </div>
  );
}

export default HellowPage;
