import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import uuid from 'uuid/v1';

import { IAppState, initialState } from './models/app';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import SearchFooter from './components/SearchFooter/SearchFooter';
import Footer from './components/Footer/Footer';
import { isArray } from 'util';
import { filterNews as onSearch, updateSearch as onUpdateSearch } from './redux/actions';

class App extends React.Component<IAppState, { openHeader: boolean }> {
  constructor(props: any) {
    super(props);

    props.onSearch(initialState.search);

    this.state = {
      openHeader: uuid(),
    };
  }

  public handleFilterChange = (
    filterName: string | string[],
    value: any | any[],
    launchSearch?: boolean
  ): void => {
    let newSearch = this.props.search;
    if (!isArray(filterName)) {
      newSearch = {
        ...this.props.search,
        [filterName]: value,
      };
    } else {
      let newFilters = {};
      filterName.forEach((filter, index) => {
        newFilters = { ...newFilters, [filter]: value[index] };
      });

      newSearch = {
        ...this.props.search,
        ...newFilters,
      };
    }

    if (launchSearch) {
      this.props.onSearch(newSearch);
    } else {
      // set new state
      this.props.onUpdateSearch(newSearch);
    }
  };

  public handleSearch = () => {
    // apply filter
    const newSearch = { ...this.props.search, page: 1 };
    this.props.onSearch(newSearch);

    this.setState({ openHeader: uuid() });

    window.scrollTo(0, 0);
  };

  public render() {
    const searchFooter = {
      ...this.props.search,
      ...this.props.results,
      onFilterChange: this.handleFilterChange,
    };

    const search = {
      ...this.props.search,
      onSearch: this.handleSearch,
      onFilterChange: this.handleFilterChange,
    };

    return (
      <div className="App">
        <Header openChildren={this.state.openHeader}>
          <Search {...search} />
          <SearchFooter {...searchFooter} />
        </Header>
        <main className="App__main">
          <Results {...this.props.results} />
        </main>

        <Footer {...searchFooter} />
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  // console.log('STATE', state);
  return {
    results: state.results,
    search: state.search,
  };
};

export default connect(
  mapStateToProps,
  { onSearch, onUpdateSearch }
)(App);
