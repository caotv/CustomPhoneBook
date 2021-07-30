import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import RBSheet from "react-native-raw-bottom-sheet";
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import * as ImagePickerCropper from 'expo-image-picker';




const ImagePicker = React.forwardRef(({
    onFileSelected,
}, ref) => {

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePickerCropper.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
                const cameraStatus = await ImagePickerCropper.requestCameraPermissionsAsync();
                if (cameraStatus.status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const options = [
        {
            name: "Take from camera",
            icon: <Icon color={colors.grey} size={21} name='camera-alt' type='MaterialIcons' />,
            onPress: async () => {
                let result = await ImagePickerCropper.launchCameraAsync({
                    mediaTypes: ImagePickerCropper.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });

                if (!result.cancelled) {
                    onFileSelected(result.uri)
                }
            }
        },
        {
            name: "Chosse from galery ",
            icon: <Icon color={colors.grey} size={21} name='image' type='Entypo' />,
            onPress: async () => {
                let result = await ImagePickerCropper.launchImageLibraryAsync({
                    mediaTypes: ImagePickerCropper.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });

                if (!result.cancelled) {
                    onFileSelected(result.uri)
                }
            }
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
                    <TouchableOpacity style={styles.pickerOption} key={item.name} onPress={() => item.onPress()}>
                        {item.icon}
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    );
});

export default ImagePicker;
