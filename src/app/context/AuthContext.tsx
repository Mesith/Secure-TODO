import { startActivityAsync, ActivityAction } from "expo-intent-launcher";
import { authenticateAsync, hasHardwareAsync } from "expo-local-authentication";
import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";


/* This code snippet demonstrates moving the local authentication functionality to a custom context hook for clean and clear state management and reusable authentication logic.

By encapsulating the local authentication logic in a custom context hook, we can separate the concerns and keep the authentication-related state and functions in one centralized location.

The custom context hook provides an easy-to-use interface for components to access the authentication state and functions, promoting code reusability and maintainability.

This approach improves code organization and reduces duplication, making it easier to manage and maintain the authentication functionality across multiple components in the application. */
type AuthContextProps = {
  isAuthenticated: boolean;
  isLocalAuthSupport: boolean;
  authenticate: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  isLocalAuthSupport: false,
  authenticate: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isLocalAuthSupport, setIsLoalAuthSupport] = useState(false);
  /* authenticating a user, updating their status, and navigating them to the setup local authentication screen if authentication fails, */
  const authenticate = async () => {
    const { success } = await authenticateAsync();
    if (!success) {
      startActivityAsync(ActivityAction.SECURITY_SETTINGS);
    } else {
      setAuthenticated(success);
    }
  };
  /* check the device's compatibility with local authentication and provide a relevant status message to the user */
  const checkLocalAuthCompatibility = useCallback(async () => {
    const compatible = await hasHardwareAsync();
    setIsLoalAuthSupport(compatible);
  }, []);

  useEffect(() => {
    checkLocalAuthCompatibility();
  }, [checkLocalAuthCompatibility]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLocalAuthSupport, authenticate }}
    >
      {children}
    </AuthContext.Provider>
  );
};
