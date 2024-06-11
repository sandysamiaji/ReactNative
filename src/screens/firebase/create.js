import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {db} from '../../config/config';
import {collection, addDoc} from 'firebase/firestore/lite';
//import { addDoc, collection } from'firebase/firestore'
import {Button, Input, Dialog} from '@rneui/base';

const Create = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dialog, setDialog] = useState(false)

    const fireStoreCollection = collection(db, 'user')

    const handleSubmit = async () => {
        const dataAdd = {firstName: firstName, lastName: lastName  }

        try {
            await addDoc(fireStoreCollection, dataAdd)
            setDialog(true)
            setTimeout(() => {
                setDialog(false)
            }, 1000)
        } catch (error) {
            console.warn(error)
        }
    }

    const toogleDialog = () => {
        setDialog(!dialog)
    }

    return (
        <View style={styles.app}>
            <Text style={styles.title}>Input Data User</Text>
            <Input onChangeText={value => setFirstName(value)} placeholder='First Name' />
            <Input onChangeText={value => setLastName(value)} placeholder='Last Name' />
            <Button onPress={handleSubmit}>Save Change</Button>
            <Dialog isVisible={dialog} onBackdropPress={toogleDialog}>
                <Dialog.Title style={styles.titleDialog}>Success Add The Data</Dialog.Title>
            </Dialog>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        app: {
            marginTop: 40,
            paddingRight: 20,
            paddingLeft: 20
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#000000"
        },
        titleDialog: {
            color: "#ffffff",
        }
    }
)

export default Create;
