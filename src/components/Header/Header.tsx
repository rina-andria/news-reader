import * as React from 'react';
import { Button } from 'antd';
import './Header.css';

class Header extends React.Component<{ openChildren: boolean }, { openChildren: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      openChildren: false,
    };
  }

  public componentWillReceiveProps(nextProps: any) {
    if (this.props.openChildren !== nextProps.openChildren) {
      this.setState({ openChildren: false });
    }
  }

  public render() {
    return (
      <header className="Header">
        <h1 className="Header__title">News Reader</h1>
        <Button
          className="Header__search"
          onClick={() => this.setState({ openChildren: !this.state.openChildren })}
          shape="circle"
          icon={this.state.openChildren ? 'close' : 'search'}
          type="primary"
        />
        {this.state.openChildren && this.props.children}
        <div className="Header__content">{this.props.children}</div>
      </header>
    );
  }
}

export default Header;
