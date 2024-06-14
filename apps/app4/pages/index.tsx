import { getHooksName, hookObj, hookVersion } from '@dne/hooks';

export default () => {
  return (
    <div>Welcome to next.js!
      <p>{getHooksName()}</p>
      <p>{hookObj?.name}</p>
      <p>{hookVersion}</p>
    </div>
  );
}
