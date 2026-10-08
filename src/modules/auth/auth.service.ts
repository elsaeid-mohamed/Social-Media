import { ILogin } from "./dto/auth.dto";

class AuthService {
  constructor() {}

  login(data: ILogin) {
    const { email, password } = data;
    console.log("user login");

    return { email, password };
  }
}

const authService = new AuthService();

export default authService;