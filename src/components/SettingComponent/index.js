import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';

const SettingComponent = ({
    settingOptions,
    setModalVisible,
    modalVisible,
    prefArr,
}) => {
    return (
        <>
            <AppModal
                modalVisible={modalVisible}
                modalFooter={<></>}
                closeOnTouchOutside={false}
                modalBody={<View>
                    {prefArr.map(item => (
                        <TouchableOpacity key={item.name} style={{ flexDirection: 'row', paddingVertical: 5 }} onPress={item.onPress}>
                            {item.selected && <Icon name='ios-checkmark' type='Ionicons' size={21} />}
                            <Text style={{ fontSize: 17, paddingLeft: item.selected ? 15 : 34 }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>}
                title="Sort by"
                setModalVisible={setModalVisible}
            />
            <ScrollView style={{ backgroundColor: colors.white }}>
                {settingOptions.map((item, index) => (
                    <TouchableOpacity key={item.title} onPress={() => item.onPress()}>
                        <View style={{ paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20 }}>
                            <Text style={{ fontSize: 17 }}>{item.title}</Text>
                            {item.subTitle && <Text style={{ fontSize: 14, opacity: 0.6, paddingTop: 5 }}>{item.subTitle}</Text>}
                        </View>
                        <View style={{ height: 0.5, backgroundColor: colors.grey }}>

                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    )
}

export default SettingComponent
