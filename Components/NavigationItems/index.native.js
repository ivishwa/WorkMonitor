import React  from 'react';
import {
  TouchableOpacity
} from 'react-native';
import {
  Icon,

} from 'react-native-vector-icons';
const menuButton = ({toggleSideMenu}) => {
  return (
    <TouchableOpacity >
            <Icon name='menu'
                size={24}
                color={'#ffffff'}/>
    </TouchableOpacity>
  )
}

export default menuButton;
