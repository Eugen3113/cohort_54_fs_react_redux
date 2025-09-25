import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import { v4 } from "uuid";

import { NAVIGATION_MENU_ROUTES } from "../constants/routes";
import AppLogoImg from "../assets/Logo.png";

import {
  LayoutWrapper,
  Header,
  Logo,
  LogoImg,
  NavigationContainer,
  HeaderLink,
  Main,
  navlinkProps,
} from "./styles";

import {
  type LayoutProps,
  type EmployeeData,
  type EmployeeDataContext,
} from "./types";

export const LayoutContext = createContext<EmployeeDataContext>({
  employeeData: [],
  setEmployeeData: () => {},
});

function Layout({ children }: LayoutProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeData[]>([]);

  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  const routesKey = Object.keys(NAVIGATION_MENU_ROUTES);
  const headerLinks = routesKey.map((route) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }: { isActive: boolean }) => navlinkProps(isActive)}
        to={
          NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
        }
      >
        {route}
      </HeaderLink>
    );
  });

  return (
    <LayoutContext.Provider value={{ employeeData, setEmployeeData }}>
      <LayoutWrapper>
        <Header>
          <Logo onClick={goToMainPage}>
            <LogoImg alt="App Logo" src={AppLogoImg} />
          </Logo>
          <NavigationContainer>{headerLinks}</NavigationContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </LayoutContext.Provider>
  );
}

export default Layout;