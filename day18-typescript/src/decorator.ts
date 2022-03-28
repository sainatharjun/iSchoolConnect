let addPower = function(config:any){
  return function(targetClass:any){
    return class{
      title= new targetClass().title
      power= config.power
      city= config.city
    }
  }
}

@addPower({
  power:6,
  city:'chennai'
})
class commonMan{
  title='arjun'
}

let batman=new commonMan()
console.log(batman)