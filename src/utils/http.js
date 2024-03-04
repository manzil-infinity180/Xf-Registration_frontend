import {QueryClient} from "@tanstack/react-query"
export const queryclient = new QueryClient();

const server = 'https://xf-backend.onrender.com';
// const server = 'http://localhost:8080'

export async function fetchData(post){
    const url = `${server}/api/v1/login`;
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
      console.log("hello")
      console.log(error.info)
      throw error
    }
    const {data} = await res.json();
    return data;
}
export async function otpVerify(post){
  const url = `${server}/api/v1/verify`;
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
    console.log(error);
    throw error
  }
  const {data} = await res.json();
  return data;
}

// get all users who have done registration

export async function getAllRegistee({signal,searchTerm}){
  let url = `${server}/api/v1/`;
  
  if(searchTerm) {
    console.log(url);
    
    url += `/search?username=`+searchTerm;
  }
  
  const res = await fetch(url,{
    signal:signal,
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
 
 
  return data;
}

export async function getSearchTerm({signal,searchTerm}){
  let url = `${server}/api/v1/search?username=`+searchTerm; 
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

export async function createUser(post){
  const url = `${server}/api/v1/register`;
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
export async function createProject(post){
  const url = `${server}/api/v1/post-project`;
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
  const url = `${server}/api/v1/updateUsername/`;
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
  const url = `${server}/api/v1/user-detail`;
  const res = await fetch(url,{
     signal:signal,
     credentials :'include',
     headers: {
      'Accept': 'application/json',
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

export async function deletePost(id){
  console.log("help me bro he is deleting my post ..." + id)
  const url = `${server}/api/v1/post-project/${id}`;
  const res = await fetch(url,{
     credentials :'include',
     method:"DELETE",
     headers: {
      'Accept': 'application/json',
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
export async function getPost({signal,id}){
  const url = `${server}/api/v1/post-project/${id}`;
  const res = await fetch(url,{
     credentials :'include',
     signal:signal,
     headers: {
      'Accept': 'application/json',
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
export async function updateProjectPost(post){
  console.log("jdkdk");
  // console.log({post,id});
  console.log(post);
  const url = `${server}/api/v1/post-project/${post.id}`;
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
export async function getLogout(){
  const url = `${server}/api/v1/logout`;
  const res = await fetch(url,{
     credentials :'include',
     headers: {
      'Accept': 'application/json',
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

export async function getOthersData({signal,username}){
  // const 
  const url = `${server}/api/v1/search/`+username;
  const res = await fetch(url,{
     signal:signal,
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
 
  return data;
}
export async function logoutUser({signal}){
  const url = `${server}/api/v1/logout`;
  const res = await fetch(url,{
     signal:signal,
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

// under construction 
export async function uploadUserPhoto(post){
  console.log("post");
  const category = Object.fromEntries(post);
  let url = `${server}/api/v1/upload-userphoto`;

  if(category.bgimg){
    url =`${server}/api/v1/upload-bgimg`;
  }
  
   
  const res = await fetch(url,{
    method:"PATCH",
    body:post,
    // headers: { 'Content-Type': 'multipart/form-data;' },
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

export async function updateUserDetails(post){
  const url = `${server}/api/v1/update-my-detail`;
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

