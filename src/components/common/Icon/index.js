import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';


const getIconFont = (type) => {
    switch (type) {
        case 'AntDesign':
            return AntDesign;
        case 'Entypo':
            return Entypo;
        case 'EvilIcons':
            return EvilIcons;
        case 'Feather':
            return Feather;
        case 'FontAwesome':
            return FontAwesome;
        case 'FontAwesome5':
            return FontAwesome5;
        case 'Fontisto':
            return Fontisto;
        case 'Foundation':
            return Foundation;
        case 'Ionicons':
            return Ionicons;
        case 'MaterialCommunityIcons':
            return MaterialCommunityIcons;
        case 'MaterialIcons':
            return MaterialIcons;
        case 'Octicons':
            return Octicons;
        case 'SimpleLineIcons':
            return SimpleLineIcons;
        case 'Zocial':
            return Zocial;
        default:
            break;
    }
}

const Icon = ({ type, ...props }) => {
    const FontIcon = getIconFont(type);
    return <FontIcon {...props} />
}

export default Icon
