import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {

  isAuth = false;

  userData = {
    access_token: "",
    id: "",
    role_id: "",
    user_type: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: ""
  };

  data = {
    request_id: "",
    first_name: "",
    last_name: "",
    email: ""
  }

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "auth",
      storage: window.localStorage,
      properties: ["isAuth", "userData", "data"]
    });
  }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }
};

export const authStore = new AuthStore();

