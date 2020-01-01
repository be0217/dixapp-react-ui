import Develop from './develop';

export default (env) => {
  switch(env) {
    case "dev":
      return Develop;
    default:
      return Develop;
  }
}
