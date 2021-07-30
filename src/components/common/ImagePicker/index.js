import React from 'react';
import Icon from '../Icon';
import RBSheet from "react-native-raw-bottom-sheet";
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';



const ImagePicker = React.forwardRef(({

}, ref) => {
    const options = [
        {
            name: "Take from camera",
            icon: <Icon color={colors.grey} size={21} name='camera-alt' type='MaterialIcons' onPress={() => { }} />
        },
        {
            name: "Chosse from galery ",
            icon: <Icon color={colors.grey} size={21} name='image' type='Entypo' onPress={() => { }} />
        },
    ]
    return (
        <RBSheet
            ref={ref}
            height={300}
            openDuration={250}
            closeOnDragDown
            customStyles={{
                container: {
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }
            }}>
            <View style={styles.optionWraper}>
                {options.map(item => (
                    <TouchableOpacity style={styles.pickerOption} key={item.name}>
                        {item.icon}
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    );
});

export default ImagePicker;
