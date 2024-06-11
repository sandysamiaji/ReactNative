import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {db} from '../../config/config';
import {collection, addDoc} from 'firebase/firestore/lite';
import {Button, Input, Dialog} from '@rneui/base';
import {query, doc, updateDoc, getDocs, deleteDoc } from 'firebase/firestore/lite'

const Update = ({ route }) => {
    const { id, firstNameParam, lastNameParam } = route.params

    const [firstName, setFirstName] = useState(firstNameParam)
    const [lastName, setLastName] = useState(lastNameParam)
    const [dialog, setDialog] = useState(false)

    const userDocRef = doc(db, 'user', id)

    const handleSubmit = async () => {
        const dataUpdate = {
            firstName: firstName,
            lastName: lastName
        }

        try {
            await updateDoc(userDocRef, dataUpdate)
            setDialog(true)
            setTimeout(() => {
                setDialog(false)
            }, 1000)
        } catch (error) {
            console.warn(error)
        }
    }

    return (
        <View style={styles.app}>
            <Text style={styles.title}>Edit Data User</Text>
            <Input
                onChangeText={value => setFirstName(value)}
                value={firstName}
                placeholder='first name'
            />
            <Input
                onChangeText={value => setLastName(value)}
                value={lastName}
                placeholder='last name'
            />
            <Button onPress={handleSubmit}>Save Change</Button>
            <Dialog isVisible={dialog} onBackdropPress={() => setDialog(false)}>
                <Dialog.Title style={styles.titleDialog}>Success Edit The Data</Dialog.Title>
            </Dialog>
        </View>
    )
}

const styles = StyleSheet.create({
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
})
export default Update;
