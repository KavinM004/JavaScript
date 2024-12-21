async function welcome(){
    const blogPost = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Welcome to my blog");
        },2000);
    });
    const blogcomment = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Welcome to my blog comment");
        },4000);
    });
    console.log(`Fetching Post...`);
    let blog = await blogPost;
    console.log(blog);
    console.log(`Fetching Comment...`);
    let comment = await  blogcomment;
    console.log(comment);
    return [blog, comment];    
};
console.log(welcome());





