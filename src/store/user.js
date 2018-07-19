const state ={
  user:null
}
const getters={
  isLogin:state=>state.user!=null,
  user:state=>state.user
}
const actions={
  setUser:(context,user)=>{
    console.log("set方法执行了")
    context.commit('mSetUser',user)
  }
}
const mutations={
  mSetUser:(state,user)=>{
    state.user=user
  }
}

export default {
  state,getters,actions,mutations
}

