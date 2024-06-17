interface IProps {
  name: string;
}


// export * from './demo';

export const hookVersion = 'hookVersion';
export const hookObj: IProps = {
  name: 'hooks'
};

export const getHooksName = function () {
  return hookObj.name;
};
