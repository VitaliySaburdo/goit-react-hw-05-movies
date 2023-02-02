import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
      }}
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
};
