import OrderHistoryItem from '../Components/OrderHistoryItem';
import { ScreenHeight, ScreenWidth } from 'App/Theme/Dimension';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { EmptyView } from '../Components/Shared';
import LoadingScreen from 'App/Screens/Component/Screen/LoadingScreen';
import OrderBehavior from 'App/Services/Order';
import { callAPI } from 'App/Shared/API';


export default function WaitingInvoice() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setLoading(true);
    const dataFromAPI = await OrderBehavior.loadOrderOfShop(0);
    setData(dataFromAPI.data);
    setLoading(false);
  }

  if (loading)
    return <LoadingScreen />

  return <View style={styles.container}>
    {
      data?.length > 0 ?
        <FlatList
          data={data}
          renderItem={({ item }) => <OrderHistoryItem loadData={loadData} item={item} />}
          keyExtractor={(item) => item._id}
        />
        : <EmptyView />
    }
  </View>

}


const styles = StyleSheet.create({
  container: {
    minHeight: ScreenHeight - 150,
    width: ScreenWidth,
  }
})