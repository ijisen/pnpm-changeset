import yayJpg from '../assets/yay.jpg';
import { getHooksName, hookObj, hookVersion } from '@app/hooks';
import { version } from 'varian-validator';


import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    console.log(hookObj);
    console.log(hookVersion);
  }, []);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <h1>{getHooksName()}</h1>
      <h1>{version}</h1>
      <h1>hookObj:  {hookObj?.name}</h1>
      {/*<h1>hookVersion2:  {hookVersion2}</h1>*/}
      <h1>hookVersion:  {hookVersion}</h1>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
