declare module 'react-navigation' {
  declare var TabNavigator: any;
  declare var StackNavigator: any;
  declare export interface Navigation {
      navigate: (params: any) => void;
      // Firing the setParams action allows a screen to change the params in the route,
      // which is useful for updating the header buttons and title.
      setParams: (params: any) => void;
      goBack: () => void;
  }
}