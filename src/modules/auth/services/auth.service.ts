import api from "../../../services/api";
import { LoginInterface } from "../interfaces/login.interface";

const authService = {
  login: (data: LoginInterface) => api.post("/auth/login", data),
};

export default authService;
