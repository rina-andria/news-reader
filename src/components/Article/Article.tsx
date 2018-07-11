import * as React from 'react';
import './Article.css';
import { IArticle } from '../../models/article';
import Img from 'react-image';

class Article extends React.Component<IArticle, {}> {
  public render() {
    return (
      <article className="Article">
        <div className="Article__image">
          <Img src={[this.props.urlToImage, './no-image.svg']} alt="the article's image" />
        </div>
        <div className="Article__details">
          <div className="Article__details-text">
            <a target="_blank" className="Article__details-title" href={this.props.url}>
              <h2>{this.props.title}</h2>
            </a>
            <p className="Article__details-description">{this.props.description}</p>
          </div>
          <div className="Article__details-metadata">
            <span className="Article__details-date">
              {new Date(this.props.publishedAt).toLocaleDateString()}
            </span>
            {this.props.author ? ' by ' : ''}
            <span className="Article__details-author">{this.props.author}</span>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
