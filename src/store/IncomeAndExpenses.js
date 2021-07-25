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
          console.log(state.totalIncome)
        }
        else if(number==1){
          for (let index = 0; index < state.data.length; index++) {
            total+= Number(state.data[index].account.expenses)
          }
          state.totalExpenses=total
          console.log(state.totalExpenses)
        }
        else if(number==2){
          for (let index = 0; index < state.data.length; index++) {
            total+= Number(state.data[index].account.income)
            total-= Number(state.data[index].account.expenses)
          }
          state.total=total
          console.log(state.total)
        }
        
      }

},

  actions: {
    editIncomeAndExpenses({commit},payload){
      commit("edit",{payload})
    },
    fetchIncomeAndExpenses({commit}){
      let res = require('@/json/IncomeAndExpensesInfo')
      // {
      //   data:[
      //     {
      //         name:{
      //             day:'2021-07-20',
      //             income:'200',
      //             expenses: '0',
      //             particular: 'แม่ให้เงิน'

      //         }
      //     },
      //     {
      //       name:{
      //           day:'2021-07-20',
      //           income: '0',
      //           expenses: '70',
      //           particular: 'ซื้อขนม'

      //       }
      //     },
      //     {
      //       name:{
      //           day:'2021-07-20',
      //           income: '0',
      //           expenses: '70',
      //           particular: 'ซื้อขนม'

      //       }
      //     },
      //     {
      //       name:{
      //           day:'2021-07-20',
      //           income: '0',
      //           expenses: '70',
      //           particular: 'ซื้อขนม'

      //       }
      //     },
      //      ]
      // }
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
    }

  },
  modules: {
  }
})