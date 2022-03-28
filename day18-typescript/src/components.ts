let Component = function(config:any){
  return function(targetClass:any){
    let tc=new targetClass();
    return class{
      selector=config.selector
      template=config.template
      title= tc.title
      clickMessage=tc.clickMessage
    }
  }
}

@Component({
  selector:'app-root',
  template:'<h1>Title : {{title}}</h1><button>{{clickMessage}}</button>'
})
class appComponents{
  title='hello world';
  clickMessage="click here"
}

let ac=new appComponents()
document.addEventListener('DOMContentLoaded', function(){
  document.getElementsByTagName(ac.selector)[0].innerHTML=ac.template.replace('{{title}}',ac.title).replace('{{clickMessage}}',ac.clickMessage)
})