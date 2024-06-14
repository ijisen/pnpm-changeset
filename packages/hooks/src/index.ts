interface IProps {
  name: string;
}


// export * from './demo';

export const hookVersion = '1.0.1';
export const hookObj: IProps = {
  name: 'hooks'
};

export const getHooksName = function () {
  return hookObj.name;
};
