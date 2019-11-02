let initialState={
   // all users
   usersData:[
      {
         logo: 'https://scontent-frt3-1.cdninstagram.com/vp/2f7fe4604d0a661a864316aba5614b7c/5E44E5D7/t51.2885-19/s150x150/22638771_138322276895570_2661938283868585984_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com',
         shortname: 'ebsintegrator',
         name: 'EBS Integrator',
         publications: 90,
         subscribers: 100,
         subscriptions: 150,
         about: ['MVP Builds',
            'Feature Web and Mobile Production',
            'Application Refactoring ',
            'System Redesign',
            'ebs-integrator.com'
         ],
      }
   ],
}
const userReducer=(state=initialState, action)=>{
   switch(action.type){
      default :
         return state;
   }
}
export default userReducer;