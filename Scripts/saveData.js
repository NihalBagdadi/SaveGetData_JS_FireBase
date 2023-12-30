
  import {firebaseConfig,usersCollection} from './config.js'
  function SaveData(){
    const form1=document.getElementById('form1')
    let pass=form1.password.value
    let confirm_password=form1.confirmPassword.value
    if(pass!=confirm_password){
alert('Passoword does not match')
return
    }
    let un=form1.username.value
    let em=form1.email.value
    usersCollection.add({
        Username:un,
        email:em,
        password:pass
    })
    alert('Record Saved')


}
export {SaveData}
