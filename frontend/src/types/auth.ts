export interface User {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  is_admin: boolean;
}

export interface CreateUserData {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  retyped_password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthToken {
  access_token: string;
  token_type: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (userData: CreateUserData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

