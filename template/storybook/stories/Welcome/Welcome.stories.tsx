import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Welcome } from '.';
import { CenterView } from '../CenterView';

storiesOf('Welcome', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('to Storybook', () => <Welcome />);
