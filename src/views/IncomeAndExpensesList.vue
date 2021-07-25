<template>
    <div>
        <h2>เพิ่มข้อมูล</h2>
        <income-and-expenses-form></income-and-expenses-form>
        <h2>ตารางบันทึกรายรับ-รายจ่าย</h2>
        
        <income-and-expenses-table></income-and-expenses-table>
    </div> 
</template>

<script>
import IncomeAndExpensesForm from '@/components/IncomeAndExpensesForm'
import IncomeAndExpensesTable from '@/components/IncomeAndExpensesTable'
export default {
    components:{
        IncomeAndExpensesForm,
        IncomeAndExpensesTable
    }
}
</script>

<style>
    body{
        background-color: rgb(255, 189, 189);
    }
    h4{
        text-align: center;
        
    }

</style>