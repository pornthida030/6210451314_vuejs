import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data:[],
      total:0,
      totalIncome:0,
      totalExpenses:0
  },
  getters:{
      money: (state)=>state.data,
      total: (state)=>state.total,
      totalIncome: (state)=>state.totalIncome,
      totalExpenses: (state)=>state.totalExpenses
  },
  mutations: {
      fetch(state,{res}){
          state.data=res.data
      },
      add(state,{payload}){
        state.data.push(payload)
      },
      edit(state,{payload}){
        state.data[payload.index].account=payload.account
      },
      calculateTotal(state,number){
        let total=0
        if(number==0){
          for (let index = 0; index < state.data.length; index++) {
                total+= Number(state.data[index].account.income)
          }
          state.totalIncome=total
        }
        else if(number==1){
          for (let index = 0; index < state.data.length; index++) {
            total+= Number(state.data[index].account.expenses)
          }
          state.totalExpenses=total
        }
        else if(number==2){
          for (let index = 0; index < state.data.length; index++) {
            total+= Number(state.data[index].account.income)
            total-= Number(state.data[index].account.expenses)
          }
          state.total=total
        }
        
      },
      sort(state){
        const sortDate = (data) => {
          const sorter = (a,b) => {
              return new Date(a.account.day).getTime() - new Date(b.account.day).getTime()
          }
          data.sort(sorter);
      }
      sortDate(state.data);
      }

},

  actions: {
    editIncomeAndExpenses({commit},payload){
      commit("edit",{payload})
    },
    fetchIncomeAndExpenses({commit}){
      let res = require('@/json/IncomeAndExpensesInfo')
      console.log(res)
      const sortDate = (data) => {
        const sorter = (a,b) => {
            return new Date(a.account.day).getTime() - new Date(b.account.day).getTime()
        }
        data.sort(sorter);
    }
    sortDate(res.data);
      commit("fetch",{res})
    },
    addIncomeAndExpenses({commit},payload){
      commit("add",{payload})
    },
    calculateTotalIncome({commit}){
      commit("calculateTotal",0)
    },
    calculateTotalExpenses({commit}){
      commit("calculateTotal",1)
    },
    calculateTotal({commit}){
      commit("calculateTotal",2)
    },
    sortDay({commit}){
      commit("sort")
    }

  },
  modules: {
  }
})