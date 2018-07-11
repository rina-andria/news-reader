import * as React from 'react';
import './SearchFooter.css';
import { Select } from 'antd';
import { ISearchFooter } from '../../models/searchFooter';
const Option = Select.Option;

class SearchFooter extends React.Component<ISearchFooter, {}> {
  public render() {
    return (
      <section className="SearchFooter">
        <label>
          <span className="SearchFooter__count">{this.props.count || ''}</span>
          {this.props.count === 0 ? '' : ' news'}
          {this.props.count === 0 ? '' : ' - '}
          <span className="SearchFooter__count">
            {this.props.count === 0
              ? ''
              : `Page ${this.props.page} / ${Math.floor(this.props.count / 20) +
                  (this.props.count % 20 > 0 ? 1 : 0)}`}
          </span>
        </label>
        <Select
          placeholder="Sort by"
          className="SearchFooter__sort"
          style={{ width: 140 }}
          size="small"
          defaultValue={this.props.sortby}
          onChange={value => this.props.onFilterChange('sortby', value, true)}
        >
          <Option value="author">Author</Option>
          <Option value="publishedAt">Publication date</Option>
          <Option value="title">Title</Option>
        </Select>
      </section>
    );
  }
}

export default SearchFooter;
