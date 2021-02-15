export default async function ({store, redirect, route, error}) {
  let token = store.state.token

  if (!token) {
    try {
      await store.dispatch('LOAD_TOKEN')
    //  await store.dispatch('FETCH_USER')
     // const user = store.state.user
      /*if (!user || !user.active) {
        throw new Error('user is not active')
      }*/
    } catch (e) {
      // await store.dispatch('LOGOUT')
      redirect('/')
    }
  }

  /*user = store.state.user

  const meta = route.meta
  const metaWithRoles = meta.find(o => Object.keys(o).filter(m => m === 'roles').length)
  const roles = metaWithRoles ? metaWithRoles.roles : undefined

  if (roles && !roles.some(r => user.roles.includes(r))) {
    error(403)
  }*/
}
