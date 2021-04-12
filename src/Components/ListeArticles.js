import React from "react";
import ArticleForm from "./ArticleForm";
import Article from "./Article";

export default class ListeArticles extends React.Component {
  state = {
    liste: [],
    toggleAllComplete: true
  };

  addArticle = article => {
    this.setState(state => ({
      liste: [article, ...state.liste]
    }));
  };

  toggleComplete = text => {
    this.setState(state => ({
      liste: state.liste.map(article => {
        if (article.text === text) {
          return {
            ...article,
            complete: !article.complete
          };
        } else {
          return article;
        }
      })
    }));
  };

  render() {
    let liste = [];
    
    liste = this.state.liste;

    return (
      <div>
        <ArticleForm onSubmit={this.addArticle} />
        {liste.map(article => (
          <Article
            key={article.text}
            toggleComplete={() => this.toggleComplete(article.text)}
            article={article}
          />
        ))}
      </div>
    );
  }
}
