import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {usePokemonApi} from '../../../services';
import {ItemCard, Loader, ScreenContainer} from '../../components';

import styles from './styles';

export function ItemListScreen(props) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pokemonApi = usePokemonApi();
  const {navigation} = props;

  useEffect(() => {
    async function getScreenData() {
      try {
        const items = await pokemonApi.getItemsList();

        setItems(items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getScreenData();
  }, []);

  function handleOnPress(id) {
    navigation.navigate('ItemDetailsScreen', {
      id,
    });
  }

  function renderItemCard(id, name, image, cost) {
    return (
      <View style={styles.itemCard}>
        <ItemCard
          name={name}
          image={image}
          cost={cost}
          onPress={() => handleOnPress(id)}
        />
      </View>
    );
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <ScreenContainer>
        <FlatList
          data={items}
          renderItem={({item}) =>
            renderItemCard(item.id, item.name, item.image, item.cost)
          }
          keyExtractor={item => item.id}
        />
      </ScreenContainer>
    );
  }

  return renderContent();
}
