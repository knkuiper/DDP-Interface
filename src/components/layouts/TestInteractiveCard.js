import React, { Component } from 'react';
import { MuiThemeProvider, Card } from '@material-ui/core';
import SourceData from '../data/data.json';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class Example2 extends Component {
  state = {
    value: "",
    sourceData: SourceData,
    filterData: SourceData
  };

  filterList = e => {
    const updatedList = this.state.sourceData.filter(item => {
      return item.Platform.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filterData: updatedList });
  };

  render(){
      const { classes } = this.props;
      const searchBox = (
        <input
          type="text"
          onChange={this.filterList}
        />
      );

      var populate = SourceData.map(function (value) {
            return(
                <MuiThemeProvider>
                  <Card>
                    <div>
                      <h2>{value.provider}</h2>
                      <p><b>Data package:</b> {value.datapackage}</p>
                      <p><b>File:</b> {value.file}</p>
                      <p><b>Filetype:</b> {value.filetype}</p>
                      <p><b>Type:</b> {value.type}</p>
                      {/* <p><b>Example:</b> {value.example_record}</p> */}
                    </div>
                  </Card>
                </MuiThemeProvider>
            )
        });
        return (
          <MuiThemeProvider>
            <div>
              <div>
                {searchBox}
                {populate}
              </div>
            </div>
          </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(Example2);
