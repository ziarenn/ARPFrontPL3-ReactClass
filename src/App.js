import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import React from "react";
import axios from "axios";
import Table from "./components/Table/Table";
class App extends React.Component {
  constructor() {
    super();
    this.state = { keyword: "", currencyTable: null };
    this.setState = this.setState.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/tables/a/`)
      .then((response) => {
        if (this.state.keyword !== "") {
          this.setState({
            keyword: this.state.keyword,
            currencyTable: response.data[0].rates.find(
              (el) => el.code === this.state.keyword.toUpperCase()
            ),
          });
        } else {
          this.setState({
            keyword: this.state.keyword,
            currencyTable: response.data[0].rates,
          });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (
      this.state.keyword !== prevState.keyword &&
      this.state.keyword.length > 2
    ) {
      this.fetchData();
    } else if (this.state.keyword === "") {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form setState={this.setState} />
        {this.state.currencyTable && (
          <Table
            currencyTable={
              this.state.currencyTable.length
                ? this.state.currencyTable
                : [this.state.currencyTable]
            }
          />
        )}
      </div>
    );
  }
}

export default App;
