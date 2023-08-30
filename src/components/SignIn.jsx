import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#24292e',
        paddingTop: 20,
        paddingBottom: 20,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

const SignIn = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                Sign In
            </StyledText>
        </View>
    )
}

export default SignIn;