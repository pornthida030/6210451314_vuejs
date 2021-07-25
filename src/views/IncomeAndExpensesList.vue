<template>
    <div>
        <p>เพิ่มข้อมูล</p>
        <income-and-expenses-form></income-and-expenses-form>
        <p>ตารางบันทึกรายรับ-รายจ่าย</p>
        
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
    p{
        text-align: center;
        font-size: 24px;
        font-weight: bolder;
        
    }

</style>