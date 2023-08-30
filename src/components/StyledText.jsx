import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.secondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    whiteText: {
        color: '#FFFFFF',
    }
});

export default function StyledText({ children, color, fontSize, fontWeight, align, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'white' && styles.whiteText,
        align === 'center' && styles.textAlignCenter,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style,
    ]
    return (
        <Text style={textStyles} { ...restOfProps }>
            {children}
        </Text>
    )
} 