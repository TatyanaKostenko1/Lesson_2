function power(base, exp){
    if (exp == 1){
        return (base)}
    if (exp != 1){
        return (base * power(base, exp - 1))}
    }
alert (power(3, 4));//81