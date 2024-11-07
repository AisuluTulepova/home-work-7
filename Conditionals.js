

    let san = +prompt('0-99 арасындағы санды енгіз')
    if (san>=10 && san<100){
        let second= san % 10 // 65/10=6  6*10=60 65-60=5
        let first = parseInt(san/10)  // 65/10 =6.5 =>6
        alert('Сіздің енгізген сан  екі таңбалы сан' + '\n' + 'Birinshi san' + first + '\n' + 'Second san' + second)
    }
    else if(san<10 && san>=0){
        alert('Сіздің саныңыз бір таңбалы сан' + san)
    }
    else{
        alert('Сіз талапқа сай сан енгізбедіңіз. Қайта енгізуіңізді сұраймын!')
    }