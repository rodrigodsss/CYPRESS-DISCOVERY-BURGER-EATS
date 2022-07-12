var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
      
    deliver : function () {

        var firstName = faker.name.firstName()
        var lastName =  faker.name.lastName()

        var data = {

            name : `${firstName} ${lastName}`,
            cpf  : cpf.generate(),
            email : faker.internet.email(firstName),
           whatsapp : '11999999999',
           address : {
            postalcode : '04952120',
            street : 'Rua Ângela Verardo Silvestre',
            number : '203',
            details :'CASA',
            district : 'Vila Bela Vista (Zona Sul)',
            city_state : 'São Paulo/SP'
        },
        delivery_method : 'Moto',
        cnh : 'cnh-digital.jpg'
        }

        return data
    }

     
}