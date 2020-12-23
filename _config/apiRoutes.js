const moduleName = 'ievent';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  events: `${urlBase}/events`,
  categories : `${urlBase}/categories`,
  attendants : `${urlBase}/attendants`,
}
