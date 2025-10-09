export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'consultant' | 'mentor';
  avatar?: string;
}

export const setSession = (user: User) => {
  sessionStorage.setItem('pathbridge_user', JSON.stringify(user));
};

export const getSession = (): User | null => {
  const user = sessionStorage.getItem('pathbridge_user');
  return user ? JSON.parse(user) : null;
};

export const clearSession = () => {
  sessionStorage.removeItem('pathbridge_user');
};

export const isAuthenticated = (): boolean => {
  return getSession() !== null;
};

export const getUserRole = (): string | null => {
  const user = getSession();
  return user ? user.role : null;
};