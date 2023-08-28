import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";


const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText aling='center'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText fontWeight='bold'>Stars</StyledText>
      </View>
      <View>
        <StyledText aling='center'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText fontWeight='bold'>Forks</StyledText>
      </View>
      <View>
        <StyledText aling='center'>{props.reviewCount}</StyledText>
        <StyledText fontWeight='bold'>Reviews</StyledText>
      </View>
      <View>
        <StyledText aling='center'>{props.ratingAverage}</StyledText>
        <StyledText fontWeight='bold'>Rating</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;