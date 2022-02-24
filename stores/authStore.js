import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signOut();
      }
    }
  };
  signIn = async (user, navigation) => {
    try {
      const resp = await api.post("/signin", user);
      this.setUser(resp.data.token);
      navigation.goBack();
    } catch (error) {}
  };

  signUp = async (user, navigation) => {
    try {
      const resp = await api.post("/signup", user);
      this.setUser(resp.data.token);
      navigation.navigate("Trips");
    } catch (error) {}
  };
  signOut = async () => {
    delete api.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };
}

const authstore = new AuthStore();
// authstore.checkForToken();
export default authstore;
