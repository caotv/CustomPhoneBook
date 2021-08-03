import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext, useRef } from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import { CONTACT_LIST } from '../../constants/routeName';
import createContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import uploadImage from '../../helper/uploadImage';


const CreateContact = () => {

    const [form, setForm] = useState({});
    const [uploading, setUploading] = useState(false);
    const [localFile, setLocalFile] = useState(DEFAULT_IMAGE_URI);
    const { contactsState: { createContact: { loading, data, error } }, contactsDispatch } = useContext(GlobalContext);
    const { navigate } = useNavigation();
    const sheetRef = useRef(null)

    const onFileSelected = ((image) => {
        closeSheet();
        setLocalFile(image);
    })

    const onChangeText = (name, value) => {
        setForm({ ...form, [name]: value });
    };
    const onSuccess = () => {
        navigate(CONTACT_LIST);
    };

    const toggleValueChange = () => {
        setForm({ ...form, 'isFavorite': !form.isFavorite });
    };

    const onSubmit = async () => {
        setUploading(true);
        var fireBaseImg = await uploadImage(localFile);
        setUploading(false);
        createContact({...form, contactPicture: fireBaseImg})(contactsDispatch)(onSuccess);
    };

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };

    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    };


    return (
        <CreateContactComponent
            form={form}
            onChangeText={onChangeText}
            onSubmit={onSubmit}
            loading={loading || uploading}
            error={error}
            toggleValueChange={toggleValueChange}
            sheetRef={sheetRef}
            closeSheet={closeSheet}
            openSheet={openSheet}
            onFileSelected={onFileSelected}
            localFile={localFile}
        />
    );
}

export default CreateContact;