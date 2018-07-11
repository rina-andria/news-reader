import * as React from 'react';
import './Results.css';
import Article from '../Article/Article';
import { IResult } from '../../models/result';
import { Spin } from 'antd';

class Results extends React.Component<IResult, {}> {
  public render() {
    console.log('Loading...', this.props.loading);
    return (
      <section className="Results">
        {this.props.loading && <Spin tip="Loading..." className="Results__loading" size="large" />}

        {!this.props.loading && (
          <div className="Results__items">
            {this.props.articles.map((article, index) => <Article key={index} {...article} />)}

            {this.props.count === 0 && (
              <div className="Results__items-noNews">No news found for those keywords...</div>
            )}
          </div>
        )}
      </section>
    );
  }
}

export default Results;
