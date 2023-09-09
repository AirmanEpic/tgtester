export type userDataResponse = {
    success:boolean,
    data:{
      id:number,
      email:string,
      first_name:string,
      last_name:string,
      avatar:string
    }|null
  }
  
export type userDataInput = {
    email:string,
    password:string
  }