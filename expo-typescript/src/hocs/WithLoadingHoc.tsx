import * as React from 'react';
import { ActivityIndicator } from 'react-native';

interface IWithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & IWithLoadingProps> {
    public render() {
      // const { loading, ...props } = this.props as IWithLoadingProps;
      const { loading } = this.props as IWithLoadingProps;

      return loading ? <ActivityIndicator /> : <Component {...this.props} />; // use {...this.props} instead of {...props} workaround for [ts] Type '{}' is not assignable to type 'P'. [2322]
    }
  };

export default withLoading;
