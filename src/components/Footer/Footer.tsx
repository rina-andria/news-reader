import * as React from 'react';
import './Footer.css';
import { Pagination } from 'antd';
import { ISearchFooter } from '../../models/searchFooter';

class Footer extends React.Component<ISearchFooter, {}> {
  public render() {
    return (
      <footer className="Footer">
        {!this.props.loading &&
          this.props.count > 0 && (
            <Pagination
              current={this.props.page}
              total={this.props.count}
              pageSize={20}
              onChange={page => {
                this.props.onFilterChange('page', page, true);
                window.scrollTo(0, 0);
              }}
            />
          )}
      </footer>
    );
  }
}

export default Footer;
