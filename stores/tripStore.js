import { makeAutoObservable } from "mobx";
import api from "./api";

class TripStore {
  trips = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchTrip = async () => {
    try {
      const response = await api.get("/trips");
      this.trips = response.data;
      console.log(
        "🚀 ~ file: tripStore.js ~ line 14 ~ TripStore ~ fetchTrip= ~ this.trips",
        this.trips
      );
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  };
  createTrip = async (newTrip) => {
    console.log(
      "🚀 ~ file: tripStore.js ~ line 18 ~ tripStore ~ createtrip= ~ newtrip",
      newTrip
    );
    try {
      const formData = new FormData();
      for (const key in newTrip) {
        formData.append(key, newTrip[key]);
        console.log(
          "🚀 ~ file: tripStore.js ~ line 22 ~ tripStore ~ createtrip= ~ newtrip[key]",
          newTrip[key]
        );
      }

      const response = await api.post(`/trips`, newTrip);

      this.trips.push(response.data);
    } catch (e) {
      alert("cannot create new trip");
      console.log(e);
    }
    // to do : call BE to create a rcipe
  };
}
const tripStore = new TripStore();
tripStore.fetchTrip();

export default tripStore;
