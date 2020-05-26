class moto{
    constructor(
        paca='',
        model='',
        tipo='',
        transmision='',
        cilindraje='',
        color=''
        
    )
    {
        this.paca = paca;
        this.configuration = {
            model,
            transmision,
            tipo,
            cilindraje,
            color,
            paca
        }
    }

    dial(num){
        console.log(num);
    }

    displayConfig(){
        console.log(this.configuration);
    }
}

module.exports = moto;