import * as React from 'react';
import './Search.css';
import { ISearch } from '../../models/search';

import * as moment from 'moment';
import { Input, DatePicker, Select, Button } from 'antd';
const Option = Select.Option;

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

class Search extends React.Component<ISearch, {}> {
  public render() {
    return (
      <section className="Search">
        <Input
          className="Search__item"
          placeholder="Keywords"
          onChange={event => this.props.onFilterChange('q', event.target.value)}
          value={this.props.q}
        />
        <RangePicker
          className="Search__item"
          defaultValue={[moment(this.props.from, dateFormat), moment(this.props.to, dateFormat)]}
          format={dateFormat}
          onChange={(dates, datesString) => {
            const [from, to] = datesString;
            this.props.onFilterChange(['from', 'to'], [from, to]);
          }}
        />
        <Select
          className="Search__item"
          defaultValue={this.props.language}
          onChange={value => this.props.onFilterChange('language', value)}
        >
          <Option value="en">English</Option>
          <Option value="fr">French</Option>
          <Option value="de">German</Option>
        </Select>
        <Button
          className="Search__item"
          type="primary"
          htmlType="submit"
          icon="search"
          onClick={this.props.onSearch}
        >
          Search
        </Button>
      </section>
    );
  }
}

export default Search;
