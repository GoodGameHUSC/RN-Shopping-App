import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View } from 'react-native';
import IconFile from '../../../Component/UIElement/IconFile';
export default function Rating({ product }) {
  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
      <Text style={[style.icon_text], {
        overflow: 'hidden', marginBottom: 10, fontSize: 16,
        fontWeight: 'bold', color: Colors.magazineBlue
      }}>Đánh giá và nhận xét (0) </Text>
      <Text>
        Hiện chưa có đánh giá nào
              </Text>
    </View>
  )
}
const style = {
  container: {
    width: ScreenWidth,
    backgroundColor: 'white',
    // overflow: 'hidden',
    paddingHorizontal: 0,
    paddingVertical: 20,
    paddingBottom: 0,
    // marginBottom: 5,

  },
  icon_container: {
    marginHorizontal: 2.5,
    marginBottom: 5,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    // borderRadius: 3,
  },
  icon_text: {
    // fontSize: 12,
    color: Colors.blackLight
  }
}



