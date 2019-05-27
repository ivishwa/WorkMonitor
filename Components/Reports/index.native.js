import React, { Component } from "react";
import { View, ART } from "react-native";
import * as scale from "d3-scale";
import * as shape from "d3-shape";

const { Surface, Group, Shape } = ART;

const d3 = {
  scale,
  shape
};

class Report extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Surface width={500} height={500}>
          <Group x={100} y={0}>
            <Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    );
  }
}

export default Report;
