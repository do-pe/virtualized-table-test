import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List, WindowScroller } from 'react-virtualized';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import 'react-virtualized/styles.css'; // only needs to be imported once

import { randomList } from './util/random';

const leftWidth = 200;
const middleWidth = 200;
const middleInnerWidth = 600;
const rightWidth = 150;

const tlist = randomList(2000);
const list = tlist.map(item => ({
  ...item,
  action: <button><span className="icon" role="img" aria-label="burger menu">🍔</span></button>,
}));

const headerItem = {
  id: 'id',
  name: 'name randomString',
  b: 'b random',
  c: 'c',
  d: 'd',
  e: 'e Math.random',
  action: 'action',
};

const LeftRows = ({index, isScrolling, isVisible, header, key, style}) => {
  const row = header ? headerItem : list[index];

  return (
    <div key={key} className="t-row" style={style}>
      <div className="t-cell" style={{ width: '50%'}}>
        {row.id} (left)
      </div>
      <div className="t-cell" style={{ width: '50%'}}>
        {row.name}
      </div>
    </div>
  );
};

const MiddleRows = ({index, isScrolling, isVisible, header, key, style}) => {
  const row = header ? headerItem : list[index];

  return (
    <div key={key} className="t-row" style={style}>
      <div className="t-cell">
        {row.id} (middle)
      </div>
      <div className="t-cell">
        {row.b}
      </div>
      <div className="t-cell">
        {row.c}
      </div>
      <div className="t-cell">
        {row.d}
      </div>
      <div className="t-cell">
        {row.e}
      </div>
    </div>
  );
};

const RightRows = ({index, isScrolling, isVisible, header, key, style}) => {
  const row = header ? headerItem : list[index];

  return (
    <div key={key} className="t-row" style={style}>
      <div className="t-cell" style={{ width: '50%'}}>
        {row.d}
      </div>
      <div className="t-cell" style={{ width: '50%'}}>
        {row.action}
      </div>
    </div>
  );
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            WindowScroller + ScrollSync Test
          </p>
        </header>

        <ScrollSync>
          <div>
            <div className="t-header">
              <div className="t-wrapper">
                <div className="t-left-cols" style={{ width: leftWidth + 'px'}}>
                  <LeftRows header />
                </div>
                <ScrollSyncPane>
                  <div className="t-middle-wrapper" style={{ width: middleWidth}}>
                    <div className="t-middle-cols" style={{ width: middleInnerWidth + 'px'}}>
                      <MiddleRows header />
                    </div>
                  </div>
                </ScrollSyncPane>
                <div className="t-right-cols" style={{ width: rightWidth + 'px'}}>
                  <RightRows header />
                </div>
              </div>
            </div>

            <WindowScroller>
              {({ height, isScrolling, onChildScroll, scrollTop }) => (
                <div className="t-wrapper">
                  <List
                    autoHeight
                    className="t-left-cols"
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    rowCount={list.length}
                    rowHeight={50}
                    rowRenderer={LeftRows}
                    scrollTop={scrollTop}
                    width={leftWidth}
                  />
                  <ScrollSyncPane>
                  <div className="t-middle-wrapper" style={{ width: middleWidth}}>
                    <List
                      autoHeight
                      className="t-middle-cols"
                      height={height}
                      isScrolling={isScrolling}
                      onScroll={onChildScroll}
                      rowCount={list.length}
                      rowHeight={50}
                      rowRenderer={MiddleRows}
                      scrollTop={scrollTop}
                      width={middleInnerWidth}
                    />
                  </div>
                  </ScrollSyncPane>
                  <List
                    autoHeight
                    className="t-right-cols"
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    rowCount={list.length}
                    rowHeight={50}
                    rowRenderer={RightRows}
                    scrollTop={scrollTop}
                    width={rightWidth}
                  />
                </div>
              )}
            </WindowScroller>

            <div className="t-footer">
              <div className="t-wrapper">
                <div className="t-left-cols" style={{ width: leftWidth + 'px'}}></div>
                <ScrollSyncPane>
                  <div className="t-middle-wrapper" style={{ width: middleWidth}}>
                    <div className="t-middle-cols" style={{ width: middleInnerWidth + 'px'}}></div>
                  </div>
                </ScrollSyncPane>
                <div className="t-right-cols" style={{ width: rightWidth + 'px'}}></div>
              </div>
            </div>
          </div>
        </ScrollSync>

        <h2>Some stuff under the table</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    );
  }
}

export default App;
