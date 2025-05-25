const Userdata=[
    {id:1,name:"presika",age:18,gender:"female",hasPassedOut:false,occupation:undefined},
    {id:2,name:"shruti",age:19,gender:"female",hasPassedOut:true,occupation:"intern"},
    {id:3,name:"shreya",age:20,gender:"female",hasPassedOut:false,occupation:undefined},
    {id:4,name:"nirpa",age:21,gender:"male",hasPassedOut:true,occupation:"animator"},
    {id:5,name:"roman",age:20,gender:"male",hasPassedOut:true,occupation:"sswe"},
    {id:6,name:"shisha",age:18,gender:"female",hasPassedOut:true,occupation:"intern"},
    {id:7,name:"jalan",age:25,gender:"male",hasPassedOut:true,occupation:undefined}
]

const response={
    status: 200,
    message: "Data fetched successfully",
    data: Userdata
}

const getUserName=()=>{
    const APIStatus=response.status;
    if(APIStatus===200){
        const result=response.data
        .filter((user)=>user.occupation)
        .map((user)=>user.name)
        return result;
    }else{

    }
}
console.log(getUserName());