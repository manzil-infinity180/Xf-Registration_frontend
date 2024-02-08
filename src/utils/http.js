import {QueryClient} from "@tanstack/react-query"
export const queryclient = new QueryClient();

export async function fetchData(post){
    const url = 'http://localhost:8090/api/v1/login';
    const res = await fetch(url,{
       method:"POST",
       body: JSON.stringify(post),
       credentials :'include',
       headers: {
        'Content-type':'application/json'
      },

    });
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the events');
      error.code = res.status;
      error.info = await res.json();
      // throw error;
     
      // error.info = await res.json();
      // console.log(error.code);
      
      // console.log(error.info)
      throw error
    }
    const {data} = await res.json();
  //  console.log(data);
   
    return data;
}

// get all users who have done registration

export async function getAllRegistee({signal,searchTerm}){
  let url = 'http://localhost:8090/api/v1/';
  
  if(searchTerm) {
    console.log(url);
    
    url += '/search?username='+searchTerm;
  }
  
  const res = await fetch(url,{
    signal:signal
  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = res.status;
    error.info = await res.json();
    // throw error;
   
    // error.info = await res.json();
    // console.log(error.code);
    
    // console.log(error.info)
    throw error
  }
  
  const {data} = await res.json();
 
 
  return data;
}

export async function getSearchTerm({signal,searchTerm}){
  let url = 'http://localhost:8090/api/v1/search?username='+searchTerm; 
  
  // if(searchTerm) {
  //   console.log(url);
    
  //   url += '/search?username='+searchTerm;
  // }
  
  const res = await fetch(url,{
    signal:signal
  });
  const {data} = await res.json();
 console.log(data);
 
  return data;
}

export async function createUser(post){
  const url = 'http://localhost:8090/api/v1/register';
  const res = await fetch(url,{
     method:"POST",
     body: JSON.stringify(post),
     credentials :'include',
     headers: {
      'Content-type':'application/json'
    },

  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = res.status;
    error.info = await res.json();
    console.log(error.info);
    
    throw error
  }
  const {data} = await res.json();
 console.log(data);
 
  return data;
}

export async function updateUsername(post){
  const url = 'http://localhost:8090/api/v1/updateUsername/';
  const res = await fetch(url,{
     method:"PATCH",
     body: JSON.stringify(post),
     credentials :'include',
     headers: {
      'Content-type':'application/json'
    },

  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = res.status;
    error.info = await res.json();
    console.log(error.info);
    
    throw error
  }
  const {data} = await res.json();
 console.log(data);
 
  return data;
}

export async function getMeData({signal}){
  const url = 'http://localhost:8090/api/v1/user-detail';
  const res = await fetch(url,{
     signal:signal
  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = res.status;
    error.info = await res.json();
    console.log(error.info);
    
    throw error
  }
  const {data} = await res.json();
 console.log(data);
 
  return data;
}

// under construction 
export async function uploadUserPhoto(post){
  console.log(post);
  
  const url = "http://localhost:8090/api/v1/upload-userphoto";
  const res = await fetch(url,{
    method:"PATCH",
    body:post,
    headers: { 'Content-Type': 'application/json' },
    credentials :'include',
 });
  if (!res.ok) {
    console.log(res);
    // console.log
  const error = new Error('An error occurred while fetching the events');
  error.code = res.status;
  error.info = await res.json();
  console.log(error.info);
  
  throw error
}
  const {data} = await res.json();
  console.log(data);

return data;
}

