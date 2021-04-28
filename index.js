var parar = 0;
while(parar == 0){
  console.log(" ")
console.log("Bem vindo a securo service")
console.log(" ")
console.log("A maior empresa de segurança do Brasil")
console.log(" ")
console.log("serviços oferecidos:")
console.log(" ")
console.log("Alarmes")
var ala = 49;
console.log(" ")
console.log("Cameras")
var cam = 150;
console.log(" ")
console.log("Kit securo serv")
var kit = 500;
console.log(" ")

var expr = prompt("como podemos ajudar?")


if (expr == 'Alarmes'){ 
  console.log(" ")
  console.log("O serviço de alarme é")
  console.log("A partir de R$:100,00")
  console.log(" ")
  console.log("temos um especialista por perto")
  console.log(" ")
  var expt = prompt("podemos mandar ele para uma averiguação do local?")

switch(expt){
  case 'Sim' :
console.log(" ")
console.log("perfeito agora é só mandar seu endereço")

for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
console.log(" ")
console.log("perfeito como a analise é cobrada")
console.log(" ")
console.log("o valor final ficará de:")
console.log(ala + 20)
console.log(" ")
console.log("codigo de confirmação: 123")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 123)

  break

  case 'Não' :
  console.log(" ")
  console.log("tudo bem o valo final é:")
  console.log(ala)
  console.log(" ")
  console.log("Será mandado um boleto até seu endereço")
  console.log(" ")
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}

  console.log(" ")
  console.log("os equipamentos serão enviados para o endereço dado")
  

  console.log("codigo de confirmação: 123")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 123)
}

break}

else if (expr == 'Cameras'){
console.log(" ")
console.log("o Serviço de cameras é")
console.log("é a partir de R$:150,00")
console.log(" ")
 console.log(" ")
  console.log("temos um especialista por perto")
  console.log(" ")
  var expt = prompt("podemos mandar ele para uma averiguação do local?")

switch(expt){
  case 'Sim' :
console.log(" ")
console.log("perfeito agora é só mandar seu endereço")

for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
console.log(" ")
console.log("perfeito como a analise é cobrada")
console.log(" ")
console.log("o valor final ficará de:")
console.log(cam + 20)
console.log(" ")
console.log("codigo de confirmação: 123")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 123)

  break

  case 'Não' :
  console.log(" ")
  console.log("tudo bem o valo final é:")
  console.log(cam)
  console.log(" ")
  console.log("Será mandado um boleto até seu endereço")
  console.log(" ")
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}

  console.log(" ")
  console.log("os equipamentos serão enviados para o endereço dado")
  

  console.log("codigo de confirmação: 123")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 123)
}
break}

else if (expr == 'Kit securo serv'){

console.log(" ")
console.log("O kit securo serv é")
console.log("é a partir de R$:500,00")
console.log(" ")
 console.log(" ")
  console.log("temos um especialista por perto")
  console.log(" ")
  var expt = prompt("podemos mandar ele para uma averiguação do local?")

switch(expt){
  case 'Sim' :
console.log(" ")
console.log("perfeito agora é só mandar seu endereço")

for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
console.log(" ")
console.log("perfeito como a analise é cobrada")
console.log(" ")
console.log("o valor final ficará de:")
console.log(kit + 20)
console.log(" ")
console.log("codigo de confirmação: 123")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 123)

  break

  case 'Não' :
  console.log(" ")
  console.log("tudo bem o valo final é:")
  console.log(kit)
  console.log(" ")
  console.log("Será mandado um boleto até seu endereço")
  console.log(" ")
for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}


    console.log(" ")
  console.log("os equipamentos serão enviados para o endereço dado")

  console.log("codigo de confirmação: 123")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 123)
}

break}

else if (expr != 'Cameras' && expr != 'Alarmes' && expr != 'Kit securo serv')
console.log(" ")
console.log("Tente novamente")

}