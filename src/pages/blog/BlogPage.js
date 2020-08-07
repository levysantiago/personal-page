import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import CardImage from "../../components/CardImage";
import PageHeader from "../../components/PageHeader";
import lang from "../../language/en";
import routes_dict from "../../language/routes_dict";
import info from "../../language/info";
import Footer from "../../components/Footer";

const storage = window.sessionStorage;

export default function BlogPage() {
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
  });

  return (
    <div>
      <NavBar blackStyle={true} lang={lang} />
      <div className="container row">
        <PageHeader title="My Blog" description="Description." />

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
      <h4 className="red">Put some Blockquote here</h4>

      <Footer lang={lang} />
    </div>
  );
}
