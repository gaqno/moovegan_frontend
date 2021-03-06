import React from 'react';
import {Avatar, Icon, Text, View} from 'native-base';
import {DrawerItem, DrawerNavigationProp} from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {RootDrawerParamList} from '../navigation/types';

type HomeNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;
const DrawerMenuContent = ({navigation, routes}: any) => {
  return (
    <View>
      <View mt={10}>
        <Text my={5} bold>
          String
        </Text>
        <Avatar
          size={20}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
          }}
        />
        {/* {points.map((i) => (
          <View flexDirection={'row'} w={'100%'}>
            <Icon
              as={MaterialCommunityIcons}
              name="star"
              size="20px"
              color="#057659"
              key={data?.star.id}
            />
          </View>
        ))} */}
      </View>
      <>
        <DrawerItem
          label="Pagamentos"
          icon={() => {
            return (
              <>
                <Icon
                  as={MaterialCommunityIcons}
                  name="credit-card-outline"
                  color={'dark.200'}
                  size="25px"
                />
              </>
            );
          }}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Favoritos"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="cards-heart-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Cupons"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="ticket-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Notifica????es"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="bell-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Endere??os"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="map-marker-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Dados"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="file-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
      </>
      <View mt="25px">
        <DrawerItem
          label="Ajuda"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="help-circle-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Configura????es"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="cog-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Seguran??a"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="shield-check-outline"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
      </View>
      <View mt="25px">
        <DrawerItem
          label="Sair"
          icon={() => (
            <Icon
              as={MaterialCommunityIcons}
              name="logout"
              color={'dark.200'}
              size="25px"
            />
          )}
          onPress={() => navigation.navigator('Home')}
        />
      </View>
    </View>
  );
};

export default DrawerMenuContent;
