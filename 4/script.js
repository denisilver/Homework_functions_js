function dayOfWeek(num)
{
    if(num == 1)
        return "Понедельник";
    else if(num == 2)
    {
        return"Вторник";
    }
    else if (num == 3)
    {  
        return "Среда";
    }
    else if(num == 4)
    {
        return "Четверг";
    }
    else if(num == 5)
    {
    return "Пятница";
    }
    else if(num == 6)
    {
    return"Суббота";
    }
    else if(num == 7)
    {
        return "Воскресенье";
    {
    else
    {
        return "Ошибка";
    }    
}
let a=dayOfWeek(1);
alert(a);