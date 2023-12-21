import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const PresentationalComp = ({ data }) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
        }}>
            <View>
                <Text style={{ color: 'red' }}>{JSON.stringify(data)}</Text>
            </View>
        </SafeAreaView>
    );
}

export default PresentationalComp;