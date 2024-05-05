import React, { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { useGetUserDetailsQuery } from "../../redux/api";
import type { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/session/slice";

function Home({ navigation }) {
  const { data: userInfo, isLoading, isError } = useGetUserDetailsQuery();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userInfo) {
      dispatch(setCredentials(userInfo));
    }
  }, [userInfo, dispatch]);

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  return (
    <SafeAreaView>
      <Text>{userInfo.name}</Text>
    </SafeAreaView>
  );
}

export default Home;
