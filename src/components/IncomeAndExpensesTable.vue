<template>
  <div>
      <table>
          <thead>
              <tr>
                  <th>#</th> 
                  <th>ปี-เดือน-วัน</th>  
                  <th>รายการ</th> 
                  <th>รายรับ</th> 
                  <th>รายจ่าย</th>
                  <th>แก้ไข</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(money,index) in money" v-bind:key="index">
                  <td class="id">{{index+1}}</td> 
                  <td v-if="index!=editIndex">{{money.account.day}}</td> 
                  <td v-if="index==editIndex">
                      <input class="dayEdit" type="date" v-model="form.account.day">
                  </td>
                  <td v-if="index!=editIndex">{{money.account.particular}}</td> 
                  <td v-if="index==editIndex">
                      <input class="particularEdit" type="text" v-model="form.account.particular">
                  </td>
                  <td v-if="index!=editIndex">{{money.account.income}}</td> 
                  <td v-if="index==editIndex">
                      <input class="incomeEdit" type="text" v-model="form.account.income">
                  </td>
                  <td v-if="index!=editIndex">{{money.account.expenses}}</td>
                  <td v-if="index==editIndex">
                      <input class="expensesEdit" type="text" v-model="form.account.expenses">
                  </td>

                <td v-if="index!=editIndex">
                  <button class="open" @click="openForm(index,money)">คลิก</button>
                 </td> 
                 <td v-if="index==editIndex">
                     <button class="edit" @click="editIncomeAndExpenses">อัพเดท</button>
                     <button class="close" @click="closeForm">ปิด</button>
                 </td>
                 
              </tr>
              <tr class="total_table">
                  <td>รวม</td>
                  <td></td>
                  <td></td>
                  <td>{{calculateTotalIncome()}}</td>
                  <td>{{calculateTotalExpenses()}}</td>
                  <td>รวมทั้งหมด: {{calculateTotal()}}  </td>
              </tr>
              

          </tbody>
      </table>
  </div>
</template>

<script>
import IncomeAndExpensesStore from '@/store/IncomeAndExpenses'
export default {
    data(){
        return{
            money:[],
            editIndex:-1,
            form:{
                account:{
                    day:'',
                    income: '0',
                    expenses: '0',
                    particular: ''

                }
            }
        }
    },
    created(){
        this.fetchIncomeAndExpenses()
        
    },
    methods:{
        calculateTotalIncome(){
            IncomeAndExpensesStore.dispatch("calculateTotalIncome")
            return IncomeAndExpensesStore.getters.totalIncome
            
        },
        calculateTotalExpenses(){
        
            IncomeAndExpensesStore.dispatch("calculateTotalExpenses")
            return IncomeAndExpensesStore.getters.totalExpenses
        },
        calculateTotal(){
            IncomeAndExpensesStore.dispatch("calculateTotal")
            return IncomeAndExpensesStore.getters.total
        },
        fetchIncomeAndExpenses(){
            IncomeAndExpensesStore.dispatch("sortDay")
            IncomeAndExpensesStore.dispatch("fetchIncomeAndExpenses")
            this.money= IncomeAndExpensesStore.getters.money
            
            
        },
        openForm(index,money){
            this.editIndex=index
            this.form={
                account:{
                    day: money.account.day,
                    income:money.account.income,
                    expenses: money.account.expenses,
                    particular: money.account.particular
                }
            }
            let cloned = res
            this.form.account=cloned.account
        },
        closeForm(){
            this.editIndex=-1,
            this.form={
                account:{
                    day:'',
                    income: '',
                    expenses: '',
                    particular: ''

                }
            }
            
        },
        editIncomeAndExpenses(){
            let payload={
                index: this.editIndex,
                account: this.form.account,
            }
            IncomeAndExpensesStore.dispatch("editIncomeAndExpenses",payload)
            IncomeAndExpensesStore.dispatch("sortDay")
            this.calculateTotalIncome()
            this.calculateTotalExpenses()
            this.calculateTotal()
            this.closeForm()
        }
    }
    
    

}

</script>

<style>
    table,th,tr,td{
        border: 1px solid rgb(175, 174, 174);
        text-align: center;
        color: white;
       
    }
    table{
        border-collapse: collapse;
        width: 100%;
        margin: 1px;
        
    }

    td{
        padding: 15px;
        background: rgb(250, 144, 144);
       
        
        
    }
    th{
        padding: 15px;
        background: rgb(255, 68, 68);
        font-weight: bolder;
        margin: 1px;
    }
    .open{
        padding: 5px 50px 5px 50px;
        transition-duration: 0.4s;
        background-color: white;
    }
    .open:hover{
        background-color: rgb(221, 66, 66);
        color: white;
    }
    .edit{
        padding: 5px 40px 5px 40px;
        transition-duration: 0.4s;
        background-color: white;
        margin: 10px;

    }
    .edit:hover{
        background-color: rgb(221, 66, 66);
        color: white;
    }
    .close{
        padding: 5px 50px 5px 50px;
        transition-duration: 0.4s;
        background-color: white;
         margin: 10px;
    }
    .close:hover{
        background-color: rgb(221, 66, 66);
        color: white;
       
    }
    .total_table>td{
        background: rgb(255, 68, 68);
        font-weight: bolder;
    }
    .id{
        background: rgb(255, 98, 98);
    }
    .dayEdit,.particularEdit,.incomeEdit,.expensesEdit{
        padding: 6px;
    }
   

</style>