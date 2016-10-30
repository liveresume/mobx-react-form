import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ReactTooltip from 'react-tooltip';
import DevTools from 'mobx-react-devtools';
import MobxReactFormDevTools from './DevTools';

import Menu from './Menu';
import Switch from './Switch';

import forms from '../forms/_.forms';
import menu from '../menu';

MobxReactFormDevTools.register(forms);

const Main = () => (
  <div>
    <ReactTooltip />
    <MobxReactFormDevTools.UI />
    <DevTools position={{ bottom: 0, left: '50px' }} />
    <Menu data={observable(menu)} />
    <Switch menu={menu} forms={forms} />
  </div>
);

export default observer(Main);
