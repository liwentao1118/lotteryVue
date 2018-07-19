let jsonStr = localStorage.getItem('carts')
let defaultCarts = JSON.parse(jsonStr);
if (defaultCarts == null) {
  defaultCarts = []
}

const state={
  carts:defaultCarts
}

const getters={
  cartSize:state=>state.carts.length,
  getCarts:state=>state.carts,
  totalMoney:state=>{
    let total = 0;
    state.carts.forEach(item=>{
      total +=item.count*2
    })
    return total
  }
}

const actions ={
  addToCart(context,data){
    let redballs = data.redballs
    console.log(redballs)
    let red = ''
    redballs.forEach(item=>{
      red +=','+item
    })
    red = red.substr(1)
    console.log(red,data.blueball)
    let cartItem = {redball:red,blue:data.blueball,count:data.count}
    context.commit('mAddToCart',cartItem)
  },
  deleteItem(contenxt,data){
    contenxt.commit('mDeleteItem',data)
  },
  clearCart(context,data){
    context.commit('mClearCart',data)
  }
}

const mutations ={
  mAddToCart(state,cartItem){
    state.carts.push(cartItem)
    localStorage.setItem('carts',JSON.stringify(state.carts))
  },
  mDeleteItem(state,data){
    let index = state.carts.indexOf(data);
    state.carts.splice(index,1)
    localStorage.setItem('carts',JSON.stringify(state.carts))
  },
  mClearCart(state){
    state.carts = []
      localStorage.clear()
  }

}
export default {
  state,getters,actions,mutations
}
