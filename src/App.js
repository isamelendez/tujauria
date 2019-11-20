
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {photos} from './photos'



class App extends Component  {

  constructor(props){
    super(props);
    this.state = {
    user: {}
    }
  }


  render() {

    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 500,
        height: 450,
      },
    }));
    

    return (
      <div className="App">
          <div class="title"> Tu jauria.com </div>
          <div class="containerDogs">
            <GridList cellHeight={160}  cols={3}>
              {photos.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} />
                </GridListTile>
              ))}
            </GridList>
          </div>
      </div>
    )
  }
}


export default App;



