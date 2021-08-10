import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {usePokemonApi} from '../../../services';
import {NoHeaderStyle, getTypeColors} from '../../common';
import {
  AbilityCard,
  Button,
  Loader,
  ScreenContainer,
  TypeHorizontalCard,
  MoveCard,
} from '../../components';

import styles from './styles';

export function StatusInfo({stats, type}) {
  const PAD_START = 3;

  function formatValue(value) {
    return `${value.toString().padStart(PAD_START, '0')}`;
  }

  function getStatus(name) {
    return stats.find(item => item.name === name);
  }

  function renderStatusTitle(title) {
    return (
      <Text style={[styles.statusText, {color: getTypeColors(type).primary}]}>
        {title}
      </Text>
    );
  }

  function renderStatusValue(statusName) {
    const {value} = getStatus(statusName);

    return <Text style={styles.statusText}>{formatValue(value)}</Text>;
  }

  function renderLevelBar(statusName) {
    let value = getStatus(statusName).value;

    if (value > 100) {
      value = 100;
    }

    return (
      <View style={styles.levelBar}>
        <View
          style={[
            styles.completeLevelBar,
            {width: `${value}%`, backgroundColor: getTypeColors(type).primary},
          ]}
        />
      </View>
    );
  }

  return (
    <View style={styles.statusInfoContainer}>
      <View style={styles.statCard}>
        <View style={styles.statCardLeftContainer}>
          {renderStatusTitle('HP')}
          {renderStatusValue('hp')}
        </View>
        {renderLevelBar('hp')}
      </View>

      <View style={styles.statCard}>
        <View style={styles.statCardLeftContainer}>
          {renderStatusTitle('ATK')}
          {renderStatusValue('attack')}
        </View>
        {renderLevelBar('attack')}
      </View>

      <View style={styles.statCard}>
        <View style={styles.statCardLeftContainer}>
          {renderStatusTitle('DEF')}
          {renderStatusValue('defense')}
        </View>
        {renderLevelBar('defense')}
      </View>

      <View style={styles.statCard}>
        <View style={styles.statCardLeftContainer}>
          {renderStatusTitle('SATK')}
          {renderStatusValue('special-attack')}
        </View>
        {renderLevelBar('special-attack')}
      </View>

      <View style={styles.statCard}>
        <View style={styles.statCardLeftContainer}>
          {renderStatusTitle('SDEF')}
          {renderStatusValue('special-defense')}
        </View>
        {renderLevelBar('special-defense')}
      </View>

      <View style={styles.statCard}>
        <View style={styles.statCardLeftContainer}>
          {renderStatusTitle('SPD')}
          {renderStatusValue('speed')}
        </View>
        {renderLevelBar('speed')}
      </View>
    </View>
  );
}
