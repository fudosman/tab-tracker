import Api from "./Api";

export default {
  register (credentials){
    return Api().post('register',credentials)
  }
}




// AuthenticationServices.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// });