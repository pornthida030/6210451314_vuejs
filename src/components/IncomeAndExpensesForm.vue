<template>
  <div>
      <div class="dayForm">
          <br>
          <label for="day">วัน/เดือน/ปี</label>
          <br>
          <input type="date" v-model="form.account.day">
      </div>

      <div class="particularForm">
          <br>
          <label for="particular">รายการ</label>
          <br>
          <input type="text" v-model="form.account.particular">
      </div>
      <div class="incomeForm">
          <br>
          <label for="income">รายรับ</label>
          <br>
          <input type="text" v-model="form.account.income">
      </div>
      <div class="expensesForm">
          <br>
          <label for="expenses">รายจ่าย</label>
          <br>
          <input type="text" v-model="form.account.expenses">
      </div>

      <div>
          <br>
          <button class="add" @click="addIncomeAndExpenses">เพิ่ม</button>
      </div>
      
  </div>
</template>

<script>
import IncomeAndExpensesTable from '@/components/IncomeAndExpensesTable'
import IncomeAndExpensesStore from '@/store/IncomeAndExpenses'
export default {
    data(){
        return{
            form:{
                account:{
                    day: '',
                    income: '0',
                    expenses: '0',
                    particular: ''
                }
            }
        }
    },
    methods:{
        clearForm(){
            this.form={
                account:{
                    day: '',
                    income: '0',
                    expenses: '0',
                    particular: ''
                }
            }
        },
        addIncomeAndExpenses(){
            let payload={
                account: this.form.account,
            }
            IncomeAndExpensesStore.dispatch('addIncomeAndExpenses',payload)
            IncomeAndExpensesStore.dispatch('sortDay')
            this.clearForm()
        }
    }
}
</script>

<style>
    label{
        padding: 5px;
        font-size: 18px;
    }
    .dayForm>input,.particularForm>input,.incomeForm>input,.expensesForm>input{
        width: 50%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;

    }
    .add{
        padding: 5px 60px 5px 60px;
        transition-duration: 0.4s;
        background-color: white;
        margin: 10px;
    }
    .add:hover{
        background-color: rgb(221, 66, 66);
        color: white;
       
    }
    

</style>